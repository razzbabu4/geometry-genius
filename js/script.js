// Triangle Area Calculation
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleBase = document.getElementById('tri-base');
    const base = parseFloat(triangleBase.value)
    // console.log(base)

    const triangleHeight = document.getElementById('tri-height');
    const height = parseFloat(triangleHeight.value)
    // console.log(height)

    const area = 0.5 * base * height;
    // console.log(area)

    const triangleCalculation = document.getElementById('calculation');
    const p = document.createElement('p');
    p.innerText = "Triangle Area = " + area + " cm^2";
    triangleCalculation.appendChild(p);

})

// Rectangle Area Calculation
function calculateRectangle() {
    const rectangleHeight = document.getElementById('rect-height');
    const height = parseFloat(rectangleHeight.value);

    const rectangleWidth = document.getElementById('rect-width');
    const width = parseFloat(rectangleWidth.value);

    const area = height * width;

    const rectangleCalculation = document.getElementById('rectangle-output');
    rectangleCalculation.innerText = area;


}


// Reusable function for Rhombus

function calculateRhombus() {
    const height = getInputValueById('rhombus-height');
    const base = getInputValueById('rhombus-base');

    const area = 0.5 * height * base;
    setResult('rhombus-output', area);

}

function getInputValueById(inputValueId) {
    const inputValue = document.getElementById(inputValueId);
    const getInputValue = inputValue.value;
    return getInputValue;
}

function setResult(outputId, area) { 
    const output = document.getElementById(outputId);
    output.innerText = area;
}




