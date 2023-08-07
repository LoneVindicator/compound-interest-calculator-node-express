//Import 

import { getCurrentInputs, calculateCompoundInterest, storeToLocalStorage, setCurrentDateAndTime, getCurrentDateAndTime, setNavActive } from './utils.js';


//Variable Declaration

const calcCompoundBtn = document.getElementsByClassName("calculate-btn");

//Button Event Listener

calcCompoundBtn[0].addEventListener("click", () => {

    const input = getCurrentInputs();
    const result = calculateCompoundInterest(input.principalAmount, input.annualInterestRate, input.compoundFrequency, input.investmentPeriod);
    console.log("Compound Interest: $" + result.compoundInterest,);
    console.log("Amount paid each year: $" + result.totalAmountPaidPerYear);

    storeToLocalStorage(result, "Data");


})


//Execution

const dateAndTime = getCurrentDateAndTime();
setCurrentDateAndTime(dateAndTime);
setNavActive();















