//Import 

import { getCurrentInputs, calculateCompoundInterest, storeToLocalStorage, setCurrentDateAndTime, getCurrentDateAndTime, setNavActive, getFromLocalStorage, setFinalBalance } from './utils.js';

//Variable Declaration

const calcCompoundBtn = document.getElementsByClassName("calculate-btn");
const refreshBtn = document.getElementsByClassName("refresh-icon");


// TODO: Add form validation & notifyError()



//Execution

const dateAndTime = getCurrentDateAndTime();
const finalBalance = getFromLocalStorage("Data");
setCurrentDateAndTime(dateAndTime);
setNavActive();

setFinalBalance( finalBalance, "final-balance-content", "hero-formula-container");

////Buttons

calcCompoundBtn[0].addEventListener("click", () => {

    const input = getCurrentInputs();
    const result = calculateCompoundInterest(input.principalAmount, input.annualInterestRate, input.compoundFrequency, input.investmentPeriod);

    storeToLocalStorage(result, "Data");
    setFinalBalance( result, "final-balance-content", "hero-formula-container");


})

refreshBtn[0].addEventListener("click", () => {

    localStorage.clear();
    location.reload();

})
















