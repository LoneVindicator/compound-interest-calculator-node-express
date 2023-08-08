//Import 

import { getCurrentInputs, calculateCompoundInterest, storeToLocalStorage, setCurrentDateAndTime, getCurrentDateAndTime, setNavActive, getFromLocalStorage, setFinalBalance} from './utils.js';


//Variable Declaration

const calcCompoundBtn = document.getElementsByClassName("calculate-btn");






//Execution



const dateAndTime = getCurrentDateAndTime();
const finalBalance = getFromLocalStorage("Data");
setCurrentDateAndTime(dateAndTime);
setNavActive();

setFinalBalance( finalBalance, "final-balance-content", "hero-formula-container");

//Event Listener

calcCompoundBtn[0].addEventListener("click", () => {

    const input = getCurrentInputs();
    const result = calculateCompoundInterest(input.principalAmount, input.annualInterestRate, input.compoundFrequency, input.investmentPeriod);
    console.log("Compound Interest: $" + result.compoundInterest,);
    console.log("Amount paid each year: $" + result.totalAmountPaidPerYear);

    storeToLocalStorage(result, "Data");
    setFinalBalance( result, "final-balance-content", "hero-formula-container");


})
















