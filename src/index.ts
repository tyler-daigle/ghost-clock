import { scrollItem } from "./scroller";

const timeContainer: HTMLElement = document.getElementById("current-time");
const containerWidth = 1100;
const secondCircleSize = 20;
const secondCircleSpacing = 50;
const mainContainerpadding = 65;

function init() {
  const mainContainer = document.getElementById("main-container");
  createSecondCircles(mainContainer);

  scrollItem(
    document.getElementById("scrolling-text-container"),
    document.getElementById("scrolling-text")
  );
}

function createSecondCircles(parentContainer: HTMLElement) {
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
    circle.style.top = `${
      secondCircleVerticalSpacing * i + secondCircleVerticalPadding
    }px`;
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
    circle.style.top = `${
      secondCircleVerticalSpacing * i + secondCircleVerticalPadding
    }px`;
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
  const hoursString: string = `${hours < 10 ? `0${hours}` : hours.toString()}`;
  const minutesString: string = `${
    minutes < 10 ? `0${minutes}` : minutes.toString()
  }`;
  const secondssString: string = `${
    seconds < 10 ? `0${seconds}` : seconds.toString()
  }`;

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
  const secondCircles = Array.from(
    document.getElementsByClassName("second-circle")
  );
  const bigCircles = Array.from(
    document.getElementsByClassName("big-circle-filled")
  );
  bigCircles.forEach((bigCircle) => {
    bigCircle.classList.add("big-circle-empty");
    bigCircle.classList.remove("big-circle-filled");
  });

  secondCircles.forEach((circle) => {
    circle.classList.remove("second-circle-filled");
    circle.classList.add("second-circle-empty");
  });
}

function fillSeconds(seconds: number) {
  for (let i = 0; i < seconds; i++) {
    if (i === 10) {
      // top big circle
      document.getElementById("top-circle").classList.add("big-circle-filled");
      document
        .getElementById("top-circle")
        .classList.remove("big-circle-empty");
    } else if (i === 25) {
      // right big circle
      document
        .getElementById("right-circle")
        .classList.add("big-circle-filled");
      document
        .getElementById("right-circle")
        .classList.remove("big-circle-empty");
    } else if (i === 40) {
      // bottom big circle
      document
        .getElementById("bottom-circle")
        .classList.add("big-circle-filled");
      document
        .getElementById("bottom-circle")
        .classList.remove("big-circle-empty");
    } else if (i === 55) {
      // left big circle
      document.getElementById("left-circle").classList.add("big-circle-filled");
      document
        .getElementById("left-circle")
        .classList.remove("big-circle-empty");
    } else {
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
