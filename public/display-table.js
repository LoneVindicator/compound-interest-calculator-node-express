import { getCurrentDateAndTime, setCurrentDateAndTime, setNavActive, populateGrid, getFromLocalStorage, setFinalBalance, showContent } from './utils.js';

//Execution

const dateAndTime = getCurrentDateAndTime();
const data = getFromLocalStorage("Data");
const refreshBtn = document.getElementsByClassName("refresh-icon");
setCurrentDateAndTime(dateAndTime);
setNavActive();
showContent(data);
setFinalBalance( data, "final-balance-content", "hero-formula-container");

populateGrid("data-grid-container", data);


//Buttons

refreshBtn[0].addEventListener("click", () => {

    localStorage.clear();
    location.reload();

})







