import "flatpickr/dist/themes/dark.css";
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form"),
  submit: document.querySelector(".submit")
}

refs.form.addEventListener("submit", onSubmitForm)


function onSubmitForm(e) {
  e.preventDefault()
  const delay = e.currentTarget.elements.delay.value
  const step = e.currentTarget.elements.step.value
  const position = e.currentTarget.elements.amount.value
 
refs.submit.setAttribute("disabled", "disabled")


let positionValue = 0
  
setTimeout(() => {
  positionValue += 1
  console.log(positionValue)
   promise.then(createPromise(position, delay, step))
  setInterval(() => {
  if (position > positionValue) {
  positionValue += 1
  console.log(positionValue)
  promise.then(createPromise(position, delay, step)).finally(refs.submit.removeAttribute("disabled", "disabled"))
}
}, step)
}, delay)




}
      
const promise = new Promise((resolve, reject) => {})

function createPromise(position, delay, step) {
 const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(delay)
    Notiflix.Notify.success("True")
  } else {
    Notiflix.Notify.failure("False")
  }
}