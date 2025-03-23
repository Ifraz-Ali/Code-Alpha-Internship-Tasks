let display = document.getElementById('display');
function appendInput(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}
function clearDisplay() {
    display.innerText = "0";
}
function backspace() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}
function toggleSign() {
    display.innerText = display.innerText.startsWith('-') ? display.innerText.slice(1) : '-' + display.innerText;
}
