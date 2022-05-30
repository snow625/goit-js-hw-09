import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const allInputsinForm = formEl.querySelectorAll('input');
let inputObj = {};

formEl.addEventListener('submit', event => {
  event.preventDefault();
  allInputsinForm.forEach(el => (inputObj[el.name] = el.value));

  let delay = Number(inputObj.delay);

  for (let i = 1; i <= inputObj.amount; i += 1) {
    if (i >= 2) {
      delay += Number(inputObj.step);
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    } else {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    }
  }
  inputObj = {};
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
