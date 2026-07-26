// let fruits = ["mango", "banana", "apple", "orange", 12];
// console.log(fruits);
//
//
//console.log(window)
//
// let obj = {
//     name: "",
//     age: 12,
//     printName: function () {
//     }
// }
//
// Badsha = {
//     child: "Mosfique"
// }
// console.log(Badsha.child)
// console.log(window.Badsha)
// console.log(Badsha)
// console.log(location)
// //alert("Hello")
//
// let fruitsJSON = JSON.stringify(fruits)
//
// console.log(typeof fruitsJSON)
// console.log(fruitsJSON)
// console.log(fruitsJSON[0])
// console.log(JSON.parse(fruitsJSON))
//
//
// localStorage.setItem("fruits", JSON.stringify(fruits))


// let fruitsJSONFromLocalStorage = localStorage.getItem("fruits");
// let fruitsArrayFromJSON = JSON.parse(fruitsJSONFromLocalStorage);
// console.log(fruitsArrayFromJSON);

// function animate() {
//     console.log("hello")
//     requestAnimationFrame(animate)
// }
//
// animate()
//console.log(document)
// window.document.write('<p style="font-size: 100px">Hello world</p>');
// let h1 = document.createElement("h1");
// h1.textContent = "Hello Mosfique"
// h1.id = "hello"
// document.body.appendChild(h1)

//console.log(window)

// let age = 20;
// let minimumRequired = 18;
// let hasID = false;
// let result = document.getElementById("result");
// console.log(result)
// if (age >= minimumRequired) {
//     result.textContent = "You are allowed to do voting"
// } else {
//     result.textContent = "Oops! You have to wait for the next : " + (minimumRequired - age) + " year";
// }
// let cls = "";
// if (age >= minimumRequired && hasID) {
//     result.textContent = "You are allowed to do voting";
//     cls = "green"
// } else if (age >= minimumRequired && hasID === false) {
//     result.textContent = "You are allowed to do voting, please apply for the national ID Card";
//     cls = "orange"
// } else {
//     result.textContent = "Oops! You have to wait for the next : " + (minimumRequired - age) + " year";
//     cls = "red"
// }
// result.classList.add(cls)

// switch (fruits){
//     case "":
//         sdsd;
//         break;
// }

//let value = 1;

/**
 * FUNCTION
 * **/
/* FUNCTION TWO PARTS */
//definition
//calling

/*
* directly execution
* returning result
* */
// let mosfiq = document.querySelector(".calculation");
// let rubel = document.querySelector(".calculation1");
// // let r = document.getElementsByClassName("calculation");
// // r[0].innerHTML += "Hello"
//
//
// //definition
// function add() {
//     let a = 10;
//     let b = 20;
//     //rubel.innerHTML += (a + b) + 10
//     return a + b;
// }
//
// //calling - mosfiq
// const calc1 = add();
// mosfiq.innerHTML += calc1 + 5
//
// const calc2 = add();
// rubel.innerHTML += calc2 + 10;


function formSubmission() {
    event.preventDefault()
}

function clean() {
    let form = document.forms["register"];
    form.reset()
}


