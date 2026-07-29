const days = [
    "Sunday", // -> 0
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const dayS = new Array(6);
days.push("Another Day")

days[days.length] = "Okay"
days[0] = "Okay"
days[1] = "Okay"

days[days.length] = "Yes";

days.unshift("hello");
days.shift();
days.pop();
days.pop();
days.pop();

const newArray = [];
const array = new Array(11);
const myFavouriteFruit = ["Mango", "Banana", "orange"][0]
console.log(myFavouriteFruit)

//let x = 0;
for (let i = 0; i <= 10; i++) {
    //newArray.push(i)
    array[i] = i;
}
console.log(array)


console.log(days)
const lastItem = days[days.length - 1];
console.log(lastItem)


function whichDay(dayNumber) {
    return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ][dayNumber];
}

console.log(new Date().getDay())
const day = whichDay(new Date().getDay());
console.log(day)

const fruits = ["Mango", "Banana", "Orange", "Apple", "Guava"];
console.log(fruits.join(" "))
let t = 0;
for (let i = 0; i < fruits.length; i++) {
    t += i;
}

console.log(t)
fruits.forEach(function (fruit) {
    console.log(fruit)
})

const fruitDiv = document.getElementById("fruits")
for (let i = 0; i < fruits.length; i++) {
    //const fruitDiv = document.getElementById("fruits");
    fruitDiv.innerHTML += `<li>${fruits[i]}</li>`;
}


function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("practice").style.display = "none";
}

function showPractice() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("practice").style.display = "block";
}

const numbers = [20, 40, 60, 90, 10, 45, 80, 5, 4];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    total += numbers[i]
}
console.log(total) // Prime number ber kora - HOME WORK, EVEN/ODD
console.log(numbers.includes(60))
if (numbers.includes(60)) {
    console.log(numbers.indexOf(60))
}
console.log(numbers.join("------"))
console.log(numbers.lastIndexOf(10))
//console.
const name = "Mosifiqur Rahman";
const arrayOfChars = name.split("");
console.log(arrayOfChars.join("-"))
const error = document.getElementById("error")

function doLogin() {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let username = formData.get("username");
    let password = formData.get("password");
    if (username.trim() !== "" && password.trim() !== "") {
        alert("successful")
    } else {
        error.textContent = "Fill the input fields"
    }

}

function showPassword() {
    document.querySelector(".show").style.display = "none";
    document.querySelector(".hide").style.display = "block";
    const passINP = document.getElementById("user-password")
    passINP.setAttribute("type", "text")
}

function hidePassword() {
    document.querySelector(".show").style.display = "block";
    document.querySelector(".hide").style.display = "none";
    document.getElementById("user-password").setAttribute("type", "password")
}
