# JavaScript Calculator App

A simple, fully functional calculator built with **HTML**, **CSS**, and **JavaScript**.  
This project demonstrates DOM manipulation, event handling, and basic arithmetic logic for calculator operations.

---

## Features

- Clean and responsive UI  
- Supports addition, subtraction, multiplication, and division  
- Supports decimal numbers  
- Includes clear (AC) button  
- Uses grid layout for calculator buttons  
- Real-time display update  
- Well-structured and readable JavaScript logic  

---

## Project Structure
```
calculator-app/
│
├── index.html
├── script.js
└── style.css
```
---

## Code Overview

### **index.html**

- Contains the calculator layout  
- Includes input display and buttons  
- Connects to `style.css` and `script.js`

### **style.css**

- Styles the calculator UI  
- Uses CSS Grid for button layout  
- Custom colors, spacing, and positioning

### **script.js**

Handles calculator logic:
- Input numbers
- Operators (+, –, ×, ÷)
- Decimal input
- Clear (AC)
- Calculation flow using:
  - `displayValue`
  - `firstValue`
  - `operator`
  - `waitingForSecondValue`

---

## How to Run

1. Download or clone the project:

git clone https://github.com/your-username/calculator-app.git
2. Open the project folder.

3. Double-click index.html to open the calculator in your browser.

No additional installation is required.


## Example Code Snippets
HTML
<input type="text" class="calculator-input" value="">
<div class="calculator-keys">
    <button type="button" class="operator" value="+">+</button>
    <button type="button" class="operator" value="-">-</button>
    <button type="button" class="operator" value="*">*</button>
    <button type="button" class="operator" value="/">/</button>
    <!-- Number and function buttons... -->
</div>

## JavaScript Core Logic
const input = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

function calculate(firstValue, secondValue, operator) {
    if (operator === "+") return firstValue + secondValue;
    if (operator === "-") return firstValue - secondValue;
    if (operator === "*") return firstValue * secondValue;
    if (operator === "/") return firstValue / secondValue;
    return secondValue;
}

## Possible Future Improvements

Add keyboard support

Add percentage (%) operator

Add +/- toggle

Add memory functions (MC, MR, M+, etc.)

Improve mobile responsiveness

## License

This project is not licensed yet.

## Acknowledgements

This calculator was built to practice DOM manipulation, event listeners, and UI layout using Grid.
