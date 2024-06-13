const input=document.querySelector(".calculator-input");
const keys=document.querySelector(".calculator-keys");

let displayValue="0";
let firstValue=null;
let operator=null;
let waitingForSecondValue=false;

updateDisplay();

function updateDisplay(){
    input.value=displayValue;
}

keys.addEventListener("click",function(e){
    let element=e.target;

    if (!element.matches("button")){return;}

    if(element.classList.contains("operator")){
        handleOperator(element.value);
        updateDisplay(); 
        return   
    }
    if (element.classList.contains("decimal")){
        inputDecimal(element.value);
        updateDisplay(); 
        return  
    }
    if (element.classList.contains("clear")){
        clear(element.value);
        updateDisplay(); 
        return  
    }
    
    inputNumber(element.value);
    
    updateDisplay(); 
    

});
function inputNumber(num){
    if (waitingForSecondValue){
        displayValue=num;
        waitingForSecondValue=false;
    }
    else{displayValue=displayValue==="0" ? num:displayValue+num;}
}
function handleOperator(nextOperator)
{
    let value=parseFloat(displayValue);
    if (operator&&waitingForSecondValue){
        operator=nextOperator;
        return;
    }
    if (firstValue===null){firstValue=value;}
    else if(operator){
        const result=calculate(firstValue,value,operator);
        displayValue=`${parseFloat(result.toFixed(7))}`;
        firstValue=result;
    }
    waitingForSecondValue=true;
    operator=nextOperator;
}

function calculate(firstValue,secondValue,operator){
    if (operator ==="+"){return firstValue+secondValue;}
    if (operator ==="-"){return firstValue-secondValue;}
    if (operator ==="*"){return firstValue*secondValue;}
    if (operator ==="/"){return firstValue/secondValue;}
    return secondValue;
}
function inputDecimal(decimal){
    if(!displayValue.includes(decimal)){
          displayValue+=decimal;
    }
}
function clear(ac){
    displayValue="0";
}
