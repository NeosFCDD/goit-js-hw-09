const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

function onStart (event) {
  startBtn.disabled = true;
  timerId = setInterval (() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function onStop (event) {
  clearInterval (timerId);
  startBtn.disabled = false;
}