import { getCurrentDateAndTime, setCurrentDateAndTime, setNavActive, populateGrid, getFromLocalStorage } from './utils.js';

//Execution

const dateAndTime = getCurrentDateAndTime();
const data = getFromLocalStorage("Data");
setCurrentDateAndTime(dateAndTime);
setNavActive();

populateGrid("data-grid-container", data.totalAmountPaidPerYear);

console.log(`compound interest: ${data.compoundInterest}, amountPaidPerYear: ${data.totalAmountPaidPerYear}`);





