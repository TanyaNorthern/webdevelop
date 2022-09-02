export const printError = (result, textErr) => {
    result.innerText = textErr
}

export const printResult = (result, { years, months, days }) => {
    result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
}