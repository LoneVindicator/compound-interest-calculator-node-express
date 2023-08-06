console.log("JS has run!");

//Variable Declaration


const calcCompoundBtn = document.getElementsByClassName("calculate-btn");



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

function calculateCompoundInterest(principal, annualRate, compoundingFrequency, years) {

    console.log(`principal: ${principal}\n annualRate: ${annualRate}\n compoundingFrequency: ${compoundingFrequency}\n years: ${years}\n`)
    // Convert the annual rate to a decimal
    const rate = annualRate / 100;

    // Calculate the number of compounding periods
    const compoundingPeriods = compoundingFrequency * years;

    // Calculate the compound interest
    const compoundInterest = principal * Math.pow(1 + rate / compoundingFrequency, compoundingPeriods) - principal;

    // Calculate the final amount after interest
    const finalAmount = principal + compoundInterest;

    console.log(`compound interest ${compoundInterest}\n final amount: ${finalAmount}\n`)

    // Return the compound interest and final amount as an object
    return {
        compoundInterest: parseFloat(compoundInterest).toFixed(2),
        finalAmount: parseFloat(finalAmount).toFixed(2)
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

    console.log(`Date Got: ${ formattedDate }, ${ formattedTime }`)
    return {
      date: formattedDate,
      time: formattedTime
    };
  }

  function setCurrentDateAndTime(dateAndTime){

    const dateEl = document.getElementsByClassName("header-date-text")[0];
    const timeEl = document.getElementsByClassName("header-time-text")[0];

    dateEl.textContent = dateAndTime.date;
    timeEl.textContent = dateAndTime.time;

    console.log("Date set!")



  }




//Execution

const dateAndTime = getCurrentDateAndTime();
setCurrentDateAndTime(dateAndTime);

calcCompoundBtn[0].addEventListener("click", () => {

    const input = getCurrentInputs();
    const result = calculateCompoundInterest(input.principalAmount, input.annualInterestRate, input.compoundFrequency, input.investmentPeriod);
    console.log("Compound Interest: $" + result.compoundInterest);
    console.log("Final Amount: $" + result.finalAmount);


})






