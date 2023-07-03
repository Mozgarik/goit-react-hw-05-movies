const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]")
}

let isActive = false

refs.startBtn.addEventListener("click", onClickStartBtn)

function onClickStartBtn () {
    isActive = true
   refs.stopBtn.removeAttribute('disabled', 'disabled') 
   refs.startBtn.setAttribute('disabled', 'disabled')
    const intervalId = setInterval(() => {  
        if (isActive) {
             document.body.style.background = getRandomHexColor()
        }
    }, 1000)

    refs.startBtn.addEventListener("click", () => {
        clearTimeout(intervalId)
        
    })
}

refs.stopBtn.addEventListener("click", () => {
    isActive = false
    refs.startBtn.removeAttribute('disabled', 'disabled')
    refs.stopBtn.setAttribute('disabled', 'disabled')
    
})


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  } 