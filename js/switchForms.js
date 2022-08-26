function switchForms(formsArray, selectedIndex) {
    for (let idx = 0; idx < formsArray.length; idx++) {
        if (selectedIndex === idx) {
            formsArray[idx].removeAttribute('hidden');
        } else {
            formsArray[idx].setAttribute('hidden', 'true');
        }
    }
}

export default switchForms