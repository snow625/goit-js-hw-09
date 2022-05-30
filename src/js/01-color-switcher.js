const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onStartBtnClick);

const stopBtn = document.querySelector('[data-stop]');
stopBtn.addEventListener('click', onStopBtnClick);
stopBtn.disabled = true;
let timerId = null;

function onStartBtnClick() {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  timerId = setInterval(() => {
    changeBodyBgRandom();
  }, 1000);
}

function onStopBtnClick() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(timerId);
}

function changeBodyBgRandom() {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
