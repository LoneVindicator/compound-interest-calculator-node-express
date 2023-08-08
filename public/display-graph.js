import { getCurrentDateAndTime, setCurrentDateAndTime, setNavActive, getFromLocalStorage, mapObjectToGraph, populateGraph, setFinalBalance, showContent } from './utils.js';



const dateAndTime = getCurrentDateAndTime();
const data = getFromLocalStorage("Data");
const refreshBtn = document.getElementsByClassName("refresh-icon");
const mappedDataArr = mapObjectToGraph(data);

setCurrentDateAndTime(dateAndTime);
setNavActive();
showContent(data);

setFinalBalance( data, "final-balance-content", "hero-formula-container");
populateGraph(mappedDataArr);


//Buttons

refreshBtn[0].addEventListener("click", () => {

    localStorage.clear();
    location.reload();

})
