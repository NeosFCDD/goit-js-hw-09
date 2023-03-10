import Notiflix from 'notiflix';

const amountEl = document.querySelector('input[name="amount"]');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const btn = document.querySelector(`button`);

let position = 0;
btn.addEventListener('click', onCreatePromise);

function onCreatePromise(event) {
  event.preventDefault();
  let step = Number(stepEl.value);
  let delay = Number(delayEl.value);
  let amount= Number(amountEl.value);
 
  for (let i =0; i < amount; i +=1) {
  position +=1;
  
    createPromise(position, delay)
    .then(({position, delay}) => 
     Notiflix.Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`)
  )
    .catch(({position, delay}) => 
     Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`)
  )
  delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
 
   const shouldResolve = Math.random() > 0.3;
   setTimeout(() =>{
   if (shouldResolve) {
   resolve({position, delay});
   } 
   reject({position, delay}) 
   },delay)
 })
 }