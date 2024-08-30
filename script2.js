function ToDisplay(value) {
    var display = document.getElementById('display');
    var currentDisplay = document.getElementById('current-display');

    if (display.innerText === '0') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    
    currentDisplay.innerText = display.innerText;
}

function calculate() {
    var display = document.getElementById('display');
    var currentDisplay = document.getElementById('current-display');
    try {
        currentDisplay.innerText = display.innerText;
        var result = new Function('return ' + display.innerText)();
        display.innerText = result;
         
    } catch (e) {
        display.innerText = 'Error';
        currentDisplay.innerText = 'Error';
    }
}

function remdis() {
    var display = document.getElementById('display');
    var currentDisplay = document.getElementById('current-display');
    display.innerText = '0';
    currentDisplay.innerText = '0';
}

function backspace() {
    var display = document.getElementById('display');
    var currentDisplay = document.getElementById('current-display');
    display.innerText = display.innerText.slice(0, -1);
    currentDisplay.innerText = display.innerText;
}
