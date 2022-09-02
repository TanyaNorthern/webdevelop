import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import switchForms from './switchForms.js'
import { onStartClick, onStopClick, onResetClick } from './interval.js'

const formSelector = document.getElementById('formselector')
const datecalcFormIdx = 0;
const forms = [document.getElementById('datecalc'), document.getElementById('timer')];
const results = [document.getElementById('datecalc__result'), document.getElementById('timer__result')];
const timerInput = document.getElementById('remainingTime')

formSelector.onchange = (event) => {
    event.preventDefault()
    switchForms(forms, formSelector.selectedIndex)

    console.log('form switched')
}

forms[datecalcFormIdx].onsubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')
    if (firstDate && secondDate) {
        printResult(results[datecalcFormIdx], getDateDiff(firstDate, secondDate))
    } else {
        printError(results[datecalcFormIdx], 'Oooppppss -> put dates')
    }
}

document.getElementById('start_btn').onclick = (event) => {
    event.preventDefault()

    onStartClick(timerInput);
}

document.getElementById('stop_btn').onclick = (event) => {
    event.preventDefault()

    onStopClick()
}

document.getElementById('reset_btn').onclick = (event) => {
    event.preventDefault()

    onResetClick(timerInput)
}
