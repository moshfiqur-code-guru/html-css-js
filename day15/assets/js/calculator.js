function addition() {
    document.getElementById("result").innerHTML = "Result: "
    const firstNumber = document.getElementById("firstNumber").value;
    const lastNumber = document.getElementById("lastNumber").value;
    let result = Number(firstNumber) + Number(lastNumber);
    document.getElementById("result").innerHTML += result
}

const createButtons = () => {
    const arrayOfOperators = ["+", "-", "x", "/", "%", "C"];
    for (let i = 0; i < arrayOfOperators.length; i++) {
        document.getElementById("buttons").innerHTML += `<button onclick="doCalculation('${arrayOfOperators[i]}')">${arrayOfOperators[i]}</button>`
    }
}

// function doCalculation(operator) {
//     let result = "";
//     const fnum = document.getElementById("fnumber")
//     const snum = document.getElementById("snumber")
//     const resultDiv = document.getElementById("res");
//     let fnumberInt = Number(fnum.value);
//     let snumberInt = Number(snum.value);
//     if (operator === "+") {
//         result = fnumberInt + snumberInt;
//     } else if (operator === "-") {
//         result = fnumberInt - snumberInt;
//     } else if (operator === "x") {
//         result = fnumberInt * snumberInt;
//     } else if (operator === "/") {
//         result = fnumberInt / snumberInt;
//     } else if (operator === "%") {
//         result = fnumberInt % snumberInt;
//     } else {
//         fnum.value = "";
//         snum.value = "";
//         resultDiv.value = ""
//     }
//     resultDiv.value = result
// }

createButtons();

function useSwitch(operator) {
    switch (operator) {
        case "+": //false === true
            console.log("You gave me nothing");
            //result = fnumberInt + snumberInt;
            break;
        case (operator > 10):// true === true
            console.log("Thank you! You gave me something");
            break;
        case (operator > 100):
            console.log("Wow! You have such a great heart.");
            break;
        default:
            console.log("Great JOB")
            break
    }
}

useSwitch("+")

function doCalculation(operator) {
    let result = "";
    const fnum = document.getElementById("fnumber")
    const snum = document.getElementById("snumber")
    const resultDiv = document.getElementById("res");
    let fnumberInt = Number(fnum.value);
    let snumberInt = Number(snum.value);
    switch (operator) {
        case  "+":
            result = fnumberInt + snumberInt;
            break;
        case "-":
            result = fnumberInt - snumberInt;
            break;
        case "x":
            result = fnumberInt * snumberInt;
            break;
        case "/":
            result = fnumberInt / snumberInt;
            break;
        case "%":
            result = fnumberInt % snumberInt;
            break;
        default:
            fnum.value = "";
            snum.value = "";
            resultDiv.value = ""
    }
    resultDiv.value = result
}

