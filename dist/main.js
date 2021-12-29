/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
const timeContainer = document.getElementById("current-time");
const containerWidth = 1100;
const secondCircleSize = 20;
const secondCircleSpacing = 50;
const mainContainerpadding = 65;
function init() {
    const mainContainer = document.getElementById("main-container");
    createSecondCircles(mainContainer);
}
function createSecondCircles(parentContainer) {
    const numCircles = 60;
    // top circles
    for (let i = 0; i < 20; i++) {
        if (i === 9 || i === 10)
            continue; // skip the middle ones
        const circle = document.createElement("div");
        circle.classList.add("second-circle");
        circle.style.top = "10px";
        circle.style.left = `${i * secondCircleSpacing + mainContainerpadding}px`;
        parentContainer.appendChild(circle);
    }
    // bottom circles
    for (let i = 0; i < 20; i++) {
        if (i === 9 || i === 10)
            continue; // skip the middle ones
        const circle = document.createElement("div");
        circle.classList.add("second-circle");
        circle.style.top = "440px";
        circle.style.left = `${i * secondCircleSpacing + mainContainerpadding}px`;
        parentContainer.appendChild(circle);
    }
}
function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hoursString = `${hours < 10 ? `0${hours}` : hours.toString()}`;
    const minutesString = `${minutes < 10 ? `0${minutes}` : minutes.toString()}`;
    const secondssString = `${seconds < 10 ? `0${seconds}` : seconds.toString()}`;
    timeContainer.innerHTML = `${hoursString}<span class="time-seperator">:</span>${minutesString}<span class="time-seperator">:</span>${secondssString}`;
}
const updateInterval = 17; // number of milliseconds to wait before update 17 ~= 1000/60 or 60 times per second
setInterval(() => {
    updateTime();
}, updateInterval);
init();

/******/ })()
;
//# sourceMappingURL=main.js.map