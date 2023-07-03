import flatpickr from "flatpickr";
import "flatpickr/dist/themes/dark.css";
import Notiflix from 'notiflix';


const refs = {
    seconds: document.querySelector("[data-seconds]"),
    minutes: document.querySelector("[data-minutes]"),
    hours: document.querySelector("[data-hours]"),
    days:  document.querySelector("[data-days]"),
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("[data-start]")
}

refs.startBtn.removeAttribute("disabled", "disabled")
let isActive = false

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

            onClose(selectedDates) {

                const selectDate = Date.parse(selectedDates[0])
                const dateNow = Date.now()

                if(selectDate < dateNow) {
                Notiflix.Notify.failure("Please choose a date in the future"); 
                refs.startBtn.setAttribute("disabled", "disabled")
                refs.startBtn.classList.add("on-error")
                } else { refs.startBtn.removeAttribute("disabled", "disabled")
                         refs.startBtn.classList.remove("on-error")   }

                refs.startBtn.addEventListener("click", () => {
                    if(!isActive) {
                        const intervalId = setInterval(() => {
                        isActive = true
                        const updateDateNow = Date.now()
                        const dateDifferent = selectDate - updateDateNow
                        const convertDifferentDate = convertMs(dateDifferent)
                        console.log(Date.parse(dateDifferent))
                        murkup(convertDifferentDate)
                        if(Date.parse(dateDifferent) < 0) {
                            isActive = false
                            Notiflix.Notify.warning('Время вышло!');
                            clearInterval(intervalId)
                        }
                        
                    }, 1000)  
                    }
                })



    },
  };



function murkup ({days, hours, minutes, seconds}) {
    refs.days.textContent = days
    refs.hours.textContent = hours 
    refs.minutes.textContent = minutes
    refs.seconds.textContent = seconds
}


 flatpickr("#datetime-picker", options) 

  function addLeadingZero(value) {
    return String(value).padStart(2, "0");
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
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }




 









