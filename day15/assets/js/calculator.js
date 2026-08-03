function addition() {
    const firstNumber = document.getElementById("firstNumber").value;
    const lastNumber = document.getElementById("lastNumber").value;
    let result = Number(firstNumber) + Number(lastNumber);
    document.getElementById("result").innerHTML += result
}
