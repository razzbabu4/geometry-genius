function parallelogramArea() {
    const base = getInputValueById('para-base');
    const height = getInputValueById('para-height')

    const area = base * height;

    setInnerText('parallelogram-output', area)
}

function getInputValueById(inputElementId) {
    const inputValue = document.getElementById(inputElementId);
    const getInput = inputValue.value;
    const value = parseFloat(getInput);
    return value;
}

function setInnerText(outputId, result) {
    const outputArea = document.getElementById(outputId);
    outputArea.innerText = result;
    // return outputArea;
}

