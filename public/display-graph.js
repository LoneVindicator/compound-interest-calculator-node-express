import { getCurrentDateAndTime, setCurrentDateAndTime, setNavActive, getFromLocalStorage, mapObjectToGraph, populateGraph, setFinalBalance, showContent } from './utils.js';



const dateAndTime = getCurrentDateAndTime();
const data = getFromLocalStorage("Data");
const mappedDataArr = mapObjectToGraph(data.totalAmountPaidPerYear);
setCurrentDateAndTime(dateAndTime);
setNavActive();
showContent(data);

setFinalBalance( data, "final-balance-content", "hero-formula-container");
populateGraph(mappedDataArr);

//Execution
