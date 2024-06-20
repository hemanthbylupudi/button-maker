let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function apply() {
    let bgColorInputValue = bgColorInput.value;
    let fontColorInputValue = fontColorInput.value;
    let fontSizeInputValue = fontSizeInput.value;
    let fontWeightInputValue = fontWeightInput.value;
    let paddingInputValue = paddingInput.value;
    let borderRadiusInputValue = borderRadiusInput.value;
    customButton.style.backgroundColor = bgColorInputValue;
    customButton.style.color = fontColorInputValue;
    customButton.style.fontSize = fontSizeInputValue + "px";
    customButton.style.fontWeight = fontWeightInputValue;
    customButton.style.padding = paddingInputValue + "px"
    customButton.style.borderRadius = borderRadiusInputValue + "px";
}