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

const countElement = document.getElementById("count")

function counter() {
    let count = 0;

    function increment(inc) {
        count += inc;
        //countElement.innerText = count.toString()
    }

    function decrement(dec) {
        count -= dec;
        //countElement.innerText = count.toString()
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    }
}

const counters = counter();
console.log(counters.getCount())

const btns = document.querySelectorAll(".counter button");
btns.forEach((btn, index) => {
    let fn = index === 0 ? () => counters.increment(5) : () => counters.decrement(2)
    btn.addEventListener("click", fn)
})



