// function hello(cb) {
//     let message = "Hello Mr. Rubel. How are you?";
//     cb(message)
// }
//
// // function printTheMessage(message) {
// //     document.write(message)
// // }
//
// hello(function (message) {
//     console.log(message)
// });

function hello() {
    return () => {
        console.log("Hello")
    }
}

//hello()();

// function outer() {
//     let count = 0;
//
//     function inner() {
//         count++;
//         console.log(count)
//     }
//
//     return inner;
// }
//
// const count = outer();
// count()
// count()
// count()

// outer()();
// let count = 0;
//
//
// count = 100;
// console.log(count)


const counters = counter();
const countElement = document.getElementById("count")

const btns = document.querySelectorAll(".counter button");
btns.forEach((btn, index) => {
    let fn = index === 0 ? () => {
        counters.increment(5);
        displayResult()
    } : () => {
        counters.decrement(2);
        displayResult()
    }

    btn.addEventListener("click", fn)
})

function displayResult() {
    const count = counters.getCount()
    countElement.innerText = count.toString()
}



