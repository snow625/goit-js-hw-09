import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const allValueEls = document.querySelectorAll('.value');
const inputDataEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
startBtnEl.addEventListener('click', onStartBtn);
startBtnEl.disabled = true;
let trigerToStart = false;
let selectesDateInMs = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onOpen() {
    if (trigerToStart) {
      Notiflix.Notify.failure(
        'please refresh site,  if you wont set new timer) '
      );
    }
  },
  onClose(selectedDates) {
    if (!trigerToStart) {
      if (selectedDates[0] - Date.now() > 600) {
        startBtnEl.disabled = false;
        Notiflix.Notify.success('You input correct date');
        selectesDateInMs = selectedDates[0] - 1 + 1;
        return;
      }

      startBtnEl.disabled = true;
      Notiflix.Notify.failure('please choose a date in the future');
    }
  },
};

flatpickr(inputDataEl, options);

function onStartBtn() {
  startBtnEl.disabled = true;
  trigerToStart = true;
  selectesDateInMs = selectesDateInMs - Date.now();
  const timerId = setInterval(function startCounter() {
    selectesDateInMs = selectesDateInMs - 1000;
    if (selectesDateInMs < 0) {
      clearInterval(timerId);
      Notiflix.Notify.success('You time is over!');
      return;
    }

    setAllValuesInElements(convertMs(selectesDateInMs));
  }, 1000);
}

function setAllValuesInElements(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      document.querySelector(`[data-${key}]`).textContent = obj[key];
    }
  }
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
