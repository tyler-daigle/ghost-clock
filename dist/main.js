/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scroller.ts":
/*!*************************!*\
  !*** ./src/scroller.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollItem": () => (/* binding */ scrollItem)
/* harmony export */ });
function scrollItem(parentContainer, scrollingContent, scrollSpeed = 2) {
    // get the width of the screen
    // get the width of the content to scroll
    // set the left margin of the content to the width of the screen
    // keep subtracting the left margin until it === -width of the content
    // once we reach the end of the content reset it back to the width of the screen
    // scrollSpeed will be number of pixels per tick to scroll
    // const screenWidth = document.getElementsByTagName("body")[0].clientWidth;
    const screenWidth = parentContainer.offsetWidth;
    const contentWidth = scrollingContent.offsetWidth;
    const delay = 10;
    scrollingContent.style.marginLeft = `${screenWidth / 2}px`;
    setInterval(() => {
        let currentPosition = parseInt(scrollingContent.style.marginLeft);
        // multiply the contentWidth by 2.5 so that the entire piece of content scrolls
        // off the screen - otherwise it just disappears.
        if (currentPosition < -(contentWidth * 2.5)) {
            currentPosition = screenWidth;
        }
        else {
            currentPosition -= scrollSpeed;
        }
        scrollingContent.style.marginLeft = `${currentPosition}px`;
    }, delay);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroller */ "./src/scroller.ts");

const timeContainer = document.getElementById("current-time");
const containerWidth = 1100;
const secondCircleSize = 20;
const secondCircleSpacing = 50;
const mainContainerpadding = 65;
function init() {
    const mainContainer = document.getElementById("main-container");
    createSecondCircles(mainContainer);
    // setup the scroller
    (0,_scroller__WEBPACK_IMPORTED_MODULE_0__.scrollItem)(document.getElementById("scrolling-text-container"), document.getElementById("scrolling-text"));
    // set the current date
    let today = new Date();
    document.getElementById("todays-date").innerText = `${today.toDateString()}`;
    // check if the date has changed every hour
    setInterval(() => {
        let today = new Date();
        document.getElementById("todays-date").innerText = `${today.toDateString()}`;
    }, 1000 * 60 * 60); // 1000ms * 60 = 1 minute * 60 = 1 hour
}
function createSecondCircles(parentContainer) {
    const numCircles = 60;
    let circleId = 0;
    // top circles - seconds 0 - 19
    // seconds 9 and 10 will refer to the top big circle
    for (let i = 0; i < 20; i++) {
        if (i === 9 || i === 10) {
            circleId++;
            continue; // skip the middle ones
        }
        const circle = document.createElement("div");
        circle.classList.add("second-circle");
        circle.classList.add("second-circle-empty");
        circle.id = `second-circle-${circleId++}`;
        circle.style.top = "10px";
        circle.style.left = `${i * secondCircleSpacing + mainContainerpadding}px`;
        parentContainer.appendChild(circle);
    }
    const secondCircleVerticalSpacing = 37;
    const secondCircleVerticalPadding = 55;
    // left circles - seconds 20 - 29
    for (let i = 0; i < 10; i++) {
        // skip seconds 24 and 25 - they will be the big left circle
        if (i === 4 || i === 5) {
            circleId++;
            continue;
        }
        const circle = document.createElement("div");
        circle.classList.add("second-circle");
        circle.classList.add("second-circle-empty");
        circle.id = `second-circle-${circleId++}`;
        circle.style.top = `${secondCircleVerticalSpacing * i + secondCircleVerticalPadding}px`;
        circle.style.left = `97.3%`;
        parentContainer.appendChild(circle);
    }
    // bottom circles - seconds 30 - 49
    // circleId has to go backwards now
    circleId = 49;
    for (let i = 0; i < 20; i++) {
        if (i === 9 || i === 10) {
            circleId--;
            continue; // skip the middle ones
        }
        const circle = document.createElement("div");
        circle.classList.add("second-circle");
        circle.classList.add("second-circle-empty");
        circle.id = `second-circle-${circleId--}`;
        circle.style.top = "440px";
        circle.style.left = `${i * secondCircleSpacing + mainContainerpadding}px`;
        parentContainer.appendChild(circle);
    }
    // right circles - sconds 50 - 59
    // circleId is still going backwards
    circleId = 59;
    for (let i = 0; i < 10; i++) {
        // skip seconds 24 and 25 - they will be the big left circle
        if (i === 4 || i === 5) {
            circleId--;
            continue;
        }
        const circle = document.createElement("div");
        circle.classList.add("second-circle");
        circle.classList.add("second-circle-empty");
        circle.id = `second-circle-${circleId--}`;
        circle.style.top = `${secondCircleVerticalSpacing * i + secondCircleVerticalPadding}px`;
        circle.style.left = `10px`;
        parentContainer.appendChild(circle);
    }
}
let lastSeconds = 0;
function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hoursString = `${hours < 10 ? `0${hours}` : hours.toString()}`;
    const minutesString = `${minutes < 10 ? `0${minutes}` : minutes.toString()}`;
    const secondssString = `${seconds < 10 ? `0${seconds}` : seconds.toString()}`;
    timeContainer.innerHTML = `<span class="hours-text">${hoursString}</span><span class="time-seperator">:</span><span class="minutes-text">${minutesString}</span><span class="time-seperator">:</span><span class="seconds-text">${secondssString}</span>`;
    if (seconds === 0) {
        resetSeconds();
    }
    // only update the circles if the second has changed
    if (lastSeconds !== seconds) {
        fillSeconds(seconds);
        lastSeconds = seconds;
    }
}
function resetSeconds() {
    const secondCircles = Array.from(document.getElementsByClassName("second-circle"));
    const bigCircles = Array.from(document.getElementsByClassName("big-circle-filled"));
    bigCircles.forEach((bigCircle) => {
        bigCircle.classList.add("big-circle-empty");
        bigCircle.classList.remove("big-circle-filled");
    });
    secondCircles.forEach((circle) => {
        circle.classList.remove("second-circle-filled");
        circle.classList.add("second-circle-empty");
    });
}
function fillSeconds(seconds) {
    for (let i = 0; i < seconds; i++) {
        if (i === 10) {
            // top big circle
            document.getElementById("top-circle").classList.add("big-circle-filled");
            document
                .getElementById("top-circle")
                .classList.remove("big-circle-empty");
        }
        else if (i === 25) {
            // right big circle
            document
                .getElementById("right-circle")
                .classList.add("big-circle-filled");
            document
                .getElementById("right-circle")
                .classList.remove("big-circle-empty");
        }
        else if (i === 40) {
            // bottom big circle
            document
                .getElementById("bottom-circle")
                .classList.add("big-circle-filled");
            document
                .getElementById("bottom-circle")
                .classList.remove("big-circle-empty");
        }
        else if (i === 55) {
            // left big circle
            document.getElementById("left-circle").classList.add("big-circle-filled");
            document
                .getElementById("left-circle")
                .classList.remove("big-circle-empty");
        }
        else {
            const secondCircle = document.getElementById(`second-circle-${i}`);
            if (secondCircle) {
                secondCircle.classList.add("second-circle-filled");
                secondCircle.classList.remove("second-circle-empty");
            }
        }
    }
}
const updateInterval = 17; // number of milliseconds to wait before update 17 ~= 1000/60 or 60 times per second
setInterval(() => {
    updateTime();
}, updateInterval);
init();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map