//Function Declaration

function getCurrentInputs() {


    const principalAmount = document.getElementById("initial-investment-input").value;
    const annualInterestRate = document.getElementById("initial-interest-rate-input").value;
    const compoundFrequency = document.getElementById("initial-compound-frequency-input").value;
    const investmentPeriod = document.getElementById("initial-time-input").value;

    return {

        principalAmount: principalAmount,
        annualInterestRate: annualInterestRate,
        compoundFrequency: compoundFrequency,
        investmentPeriod: investmentPeriod
    }




}

function calculateCompoundInterest(principalAmount, annualInterestRate, compoundFrequency, investmentPeriod) {
    // Convert annual interest rate to decimal
    const interestRate = annualInterestRate / 100;

    // Calculate compound frequency per year
    const frequencyPerYear = compoundFrequency;
    // Calculate the total number of compound periods
    const totalCompounds = frequencyPerYear * investmentPeriod;

    // Calculate compound interest formula variables
    const base = 1 + interestRate / frequencyPerYear;
    const exponent = frequencyPerYear * investmentPeriod;

    // Calculate compound interest
    const compoundInterest = principalAmount * Math.pow(base, exponent) - principalAmount;

    // Calculate total amount paid each year
    const totalAmountPaidPerYear = [];

    for (let year = 1; year <= investmentPeriod; year++) {
        const amount = principalAmount * Math.pow(base, year * frequencyPerYear);
        totalAmountPaidPerYear.push(amount);
    }

    return {
        compoundInterest: compoundInterest.toFixed(2),
        totalAmountPaidPerYear: totalAmountPaidPerYear.map(amount => amount.toFixed(2))
    };
}



function getCurrentDateAndTime() {
    const currentDate = new Date();

    // Format the date
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${daysOfWeek[currentDate.getDay()]}, ${monthsOfYear[currentDate.getMonth()]} ${currentDate.getDate()}`;

    // Format the time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${amPm}`;

    // Return the formatted date and time as an object

    console.log(`Date Got: ${formattedDate}, ${formattedTime}`)
    return {
        date: formattedDate,
        time: formattedTime
    };
}

function setCurrentDateAndTime(dateAndTime) {

    const dateEl = document.getElementsByClassName("header-date-text")[0];
    const timeEl = document.getElementsByClassName("header-time-text")[0];

    dateEl.textContent = dateAndTime.date;
    timeEl.textContent = dateAndTime.time;

    console.log("Date set!")



}

function setNavActive() {

    const pathname = window.location.pathname;
    console.log(pathname);

    switch (pathname) {

        case "/":
            const navHomeEl = document.getElementsByClassName("nav-calculate-text")[0];
            navHomeEl.className = "nav-text nav-calculate-text nav-text-active";
            break;
        case "/table":
            const navTableEl = document.getElementsByClassName("nav-table-text")[0];
            navTableEl.className = "nav-text nav-table-text nav-text-active";
            break;
        case "/graph":
            const navGraphEl = document.getElementsByClassName("nav-graph-text")[0];
            navGraphEl.className = "nav-text nav-graph-text nav-text-active";
            break;
        default:
            console.log("path name not recognized!");

    }


}

function storeToLocalStorage(data, label) {

    // Convert the data to a JSON string
    const dataToStore = JSON.stringify(data);

    // Store the data in localStorage
    localStorage.setItem(label, dataToStore);

}

function getFromLocalStorage(keyName) {
    const dataJSON = localStorage.getItem(keyName);
    
    if (dataJSON === null) {
        return []; // Return an empty array if no data is found in local storage
    }
    
    try {
        const data = JSON.parse(dataJSON);
        return data;

    } catch (error) {
        console.error('Error parsing JSON data from local storage:', error);
        return [];
    }
}

function populateGrid(gridClassName, data){

    if(data === null || data === undefined){

        console.log("No data found!");
        return
    }

    const container = document.getElementsByClassName(gridClassName)[0];

    for (let i = 0; i < data.length; i++) {

        const gridItemLeft = document.createElement('div');
        gridItemLeft.classList.add('grid-item');
        gridItemLeft.classList.add('grid-item-left');
        gridItemLeft.textContent = i;
        container.appendChild(gridItemLeft);

        const gridItemRight = document.createElement('div');
        gridItemRight.classList.add('grid-item');
        gridItemRight.classList.add('grid-item-right');

        if (i === data.length - 1) {
            gridItemRight.classList.add('grid-item-last');

        }
        gridItemRight.textContent = parseFloat(data[i]).toLocaleString();
        container.appendChild(gridItemRight);

    }
}

function mapObjectToGraph(data){

    if(data === null || data === undefined ){

        console.log("No data found!");
        return;
    }

    const mappedData = {
        xAxis: [],
        yAxis: []
      };

    data.map((element, index) => {

        mappedData.xAxis.push(`Year ${index}`);
        mappedData.yAxis.push(element);
    })

    return mappedData;
}

function setFinalBalance(data, className, parentDivClassName){

    if(data.totalAmountPaidPerYear === undefined || data.totalAmountPaidPerYear === null){

        console.log("Balance not Calculated!")
        return;
    }

    const finalBalanceLength = data.totalAmountPaidPerYear.length;
    const finalBalanceLastEl = finalBalanceLength -1;
    const finalBalanceContent = data.totalAmountPaidPerYear[finalBalanceLastEl];

    const finalBalanceEl = document.getElementsByClassName(className)[0];
    finalBalanceEl.textContent = ` $ ${ (parseFloat(finalBalanceContent)).toLocaleString() }`;
    
    const parentDivEl = document.getElementsByClassName(parentDivClassName)[0];
    parentDivEl.style.visibility = "visible";

}

function populateGraph(mappedDataArr){

    if(mappedDataArr === null || mappedDataArr === undefined){

        console.log("No data Available!");
        return
       
    }
    
    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: mappedDataArr.xAxis,
            datasets: [{
                label: `Compound Interest over ${mappedDataArr.xAxis.length} Years`,
                data: mappedDataArr.yAxis,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function showContent(data){

    const dataContainer = document.getElementsByClassName("data-container")[0];
    const dataEmptyContainer = document.getElementsByClassName("data-container-empty")[0];

    console.log("show content ran!")
    console.log(data)
    console.log(data.length === 0 )

    if( data === null || data === undefined || data.length === 0){

        console.log("Content Hidden, Error Shown")
        console.log(dataContainer)
        console.log(dataEmptyContainer)

        dataContainer.style.display = "none";
        dataEmptyContainer.style.display = "flex";

        console.log("Content Hidden, Error Shown")
        return;


    }

    return;


}

function clearLocalStorage(){

    localStorage.setItem(null);
}

//Exports

export { 
    getCurrentInputs,
    calculateCompoundInterest,
    setCurrentDateAndTime,
    getCurrentDateAndTime,
    setNavActive,
    storeToLocalStorage,
    getFromLocalStorage,
    populateGrid,
    mapObjectToGraph,
    setFinalBalance,
    populateGraph,
    showContent,
    clearLocalStorage,
}