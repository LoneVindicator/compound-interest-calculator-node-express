import { getCurrentDateAndTime, setCurrentDateAndTime, setNavActive, populateGrid, getFromLocalStorage, setFinalBalance, showContent } from './utils.js';

//Execution

const dateAndTime = getCurrentDateAndTime();
const data = getFromLocalStorage("Data");
setCurrentDateAndTime(dateAndTime);
setNavActive();
showContent(data);
setFinalBalance( data, "final-balance-content", "hero-formula-container");

populateGrid("data-grid-container", data.totalAmountPaidPerYear);







