const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')

switchDisabledBtn(false)
const onClickBtnStart = () => {
    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()}, 1000)
    switchDisabledBtn(true)
}
btnStart.addEventListener('click', onClickBtnStart)

const onClickBtnStop = () =>{
    clearInterval(timerId);
    switchDisabledBtn(false)
}

btnStop.addEventListener('click', onClickBtnStop)
function switchDisabledBtn (e) {
    btnStart.disabled = e
    btnStop.disabled = !e
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }