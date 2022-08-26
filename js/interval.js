import beep from './beep.js'

let intervalMethod;
let timerStarted = false;

const alert = () => alert("Введите корректное число >= 1")

const reset = () => {
    clearInterval(intervalMethod)
    timerStarted = false
}

const set = (timerInput) => {
    intervalMethod = setInterval(() => {
        timerInput.value = timerInput.value - 1
        if (timerInput.value == 0) {
            reset()
            beep()
        }
    }, 1000)
}

export const onStartClick = (timerInput) => {
    if (!timerStarted) {
        try {
            if (timerInput.value > 0) {
                set(timerInput)
                timerStarted = true
            } else {
                alert()
            }
        } catch (error) {
            alert()
        }
    }
}

export const onStopClick = () => {
    if (timerStarted) {
        reset()
    }
}

export const onResetClick = (timerInput) => {
    onStopClick()
    timerInput.value = 0
}