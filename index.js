let resultPara = document.getElementById("result-value")
let memo = document.getElementById("mem");


function percent(){
    let tempMemo = parseFloat(memo.innerHTML);
    let tempValue = parseFloat(resultPara.innerHTML);
    let realValue = parseFloat(tempMemo.toString().split(" ")[0]);
    let percValue = realValue * (tempValue / 100)
    resultPara.innerHTML = percValue
    if(!tempMemo.toString().split(" ") > 3){
        memo.innerHTML += ` ${percValue} =`
    }
}


function refreshResult(valor) {


    if (resultPara.innerText.length < 16) {

        if (resultPara.innerText[0] == 0) {
            resultPara.innerText = valor
        }

        else {
            resultPara.innerText += valor
        }

    }

}

function hardClean() {
    resultPara.innerText = 0
    memo.style.visibility = "hidden"
    memo.innerText = 0
}

function backspace() {

    let tempLength = +resultPara.innerText.length;

    if (tempLength > 1) {
        resultPara.innerHTML = resultPara.innerHTML.slice(0, -1);
    }

    if (tempLength == 1 && resultPara.innerHTML != "0") {
        resultPara.innerHTML = "0"
    }

}

function invert() {
    resultPara.innerText = +(resultPara.innerText * -1)
}

function square() {
    let tempValue = resultPara.innerText;
    memo.innerText = `sqr(${tempValue}) `
    memo.style.visibility = "unset"
    resultPara.innerText = Math.pow(+(resultPara.innerText), 2)
}

function divideByOne() {
    let tempValue = resultPara.innerText;
    memo.innerText = `1/(${tempValue}) `
    memo.style.visibility = "unset"
    resultPara.innerText = 1 / +(tempValue);
}

function softClean() {
    resultPara.innerText = 0
}

function plus() {
    if (resultPara.innerText != 0) {
        memo.innerHTML = resultPara.innerText += " +"
        memo.style.visibility = "unset"
        resultPara.innerText = 0
    }
}

function minus() {
    if (resultPara.innerText != 0) {
        memo.innerHTML = resultPara.innerText += " -"
        memo.style.visibility = "unset"
        resultPara.innerText = 0
    }
}

function divide() {
    if (resultPara.innerText != 0) {
        memo.innerHTML = resultPara.innerText += " ÷"
        memo.style.visibility = "unset"
        resultPara.innerText = 0
    }
}

function multiply() {
    if (resultPara.innerText != 0) {
        memo.innerHTML = resultPara.innerText += " x"
        memo.style.visibility = "unset"
        resultPara.innerText = 0
    }
}

function squareRoot() {
    let tempValue = resultPara.innerText;
    memo.innerText = `√(${tempValue}) `
    memo.style.visibility = "unset"
    resultPara.innerText = Math.sqrt(+resultPara.innerText)
}

function dot() {
    if (!resultPara.innerHTML.includes(".")) {
        resultPara.innerHTML += "."
    }
}

function equal() {

    let tempValue = parseFloat(resultPara.innerHTML);
    let tempMemo = memo.innerHTML;
    let resultText = resultPara.innerHTML;
    let operation = tempMemo.charAt(tempMemo.length - 1)
    let trueMemoValue = parseFloat(memo.innerHTML.slice(0, -2))


    if (operation == "+" || operation == "-" || operation == "x" || operation == "÷") {

        let calcResult = calculator(operation, trueMemoValue, tempValue)
        memo.innerHTML += ` ${resultText} =`;
        resultPara.innerHTML = calcResult;
    }
    else {

        let plusIndex = (tempMemo.indexOf("+"))
        let minusIndex = (tempMemo.indexOf("-"))
        let multiplyIndex = (tempMemo.indexOf("x"))
        let divideIndex = (tempMemo.indexOf("÷"))
        let initialSecondValue = tempMemo.split(" ")[2]

        let valueFromMemo = parseFloat(tempMemo.split(" ")[2])

        if (plusIndex > 0) {
            memo.innerHTML = `${resultPara.innerHTML} + ${initialSecondValue} =`
            resultPara.innerHTML = calculator(tempMemo.charAt(plusIndex), valueFromMemo, tempValue)
        }
        else if (minusIndex > 0) {
            memo.innerHTML = `${resultPara.innerHTML} - ${initialSecondValue} =`
            resultPara.innerHTML = calculator(tempMemo.charAt(minusIndex), valueFromMemo, tempValue)
        }
        else if (multiplyIndex > 0) {
            memo.innerHTML = `${resultPara.innerHTML} x ${initialSecondValue} =`
            resultPara.innerHTML = calculator(tempMemo.charAt(multiplyIndex), valueFromMemo, tempValue)
        }
        else if (divideIndex > 0) {
            memo.innerHTML = `${resultPara.innerHTML} ÷ ${initialSecondValue} =`
            resultPara.innerHTML = calculator(tempMemo.charAt(divideIndex), valueFromMemo, tempValue)
        }

    }


}

function calculator(operation, trueMemoValue, tempValue) {


    switch (operation) {
        case "+": return trueMemoValue + tempValue;
        case "-": return trueMemoValue - tempValue;
        case "x": return trueMemoValue * tempValue;
        case "÷": return trueMemoValue / tempValue;
    }
}