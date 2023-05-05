import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';;

const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  btnStartTimer: document.querySelector('button[data-start]'),
  daysRemaining: document.querySelector('[data-days]'),
  hoursRemaining: document.querySelector('[data-hours]'),
  minutesRemaining: document.querySelector('[data-minutes]'),
  secondsRemaining: document.querySelector('[data-seconds]'),
};
const TIMER_DELAY = 1000;
let intervalId = null;
let timeDifference = null;
let currentDate = null;

refs.btnStartTimer.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDifferenceDate(selectedDates[0]);
  },
};

flatpickr(refs.dateInput, options);

function currentDifferenceDate(selectedDates) {
    const currentDate = Date.now();
  
    if (selectedDates < currentDate) {
    return Notify.failure('Please choose a date in the future');
    }
    timeDifference = selectedDates.getTime() - currentDate;
    formatDate = convertMs(timeDifference);
    refs.btnStartTimer.disabled = false
}

function timerStart() {
  intervalId = setInterval(() => {
    currentDate = new Date().getTime();
        
    timeDifference-= 1000;
  if (refs.secondsRemaining.textContent <= 0 && refs.minutesRemaining.textContent <= 0) {
    Notify.success('Time end');
    clearInterval(intervalId);
    refs.btnStartTimer.disabled = true;
  } 
  else {
    formatDate = convertMs(timeDifference);
    createMarkup(formatDate);
  }}, TIMER_DELAY);
}
refs.btnStartTimer.addEventListener('click', timerStart);


function createMarkup({ days, hours, minutes, seconds }) {
  refs.daysRemaining.textContent = days;
  refs.hoursRemaining.textContent = hours;
  refs.minutesRemaining.textContent = minutes;
  refs.secondsRemaining.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  createMarkup({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

