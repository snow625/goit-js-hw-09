import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const allInputsinForm = formEl.querySelectorAll('input');
let objectFromInputs = {};

formEl.addEventListener('submit', event => {
  event.preventDefault();

  setValuesInObjFromInputs(allInputsinForm);
  let delay = Number(objectFromInputs.delay);

  for (let i = 1; i <= objectFromInputs.amount; i += 1) {
    if (i >= 2) {
      delay += Number(objectFromInputs.step);
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
  objectFromInputs = {};
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
function setValuesInObjFromInputs(arr) {
  arr.forEach(el => (objectFromInputs[el.name] = el.value));
}
