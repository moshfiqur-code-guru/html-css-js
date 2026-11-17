// let a = 20;
// let b = 30;
// let result = a + b;
// console.log(result)
// console.log(a)
//
//
// let data = "call the server to fetch 100 data";
// setTimeout(() => console.log(data), 1000);
// console.log("hello, welcome to my new website");

let p = 10;
let c = 30;
let add = p + c;
// setTimeout(function (){})
// setTimeout(() => console.log(add), 2000)
// function giveMeTheCalculation(cb) {
//     setTimeout(() => cb(add), 2000);
// }
//
// giveMeTheCalculation(function (value) {
//     console.log(value)
// });
//
// console.log("a")

//mango -> mango with blender -> mango + milk -> mineral -> packet -> customer

// function getMango(cb) {
//     setTimeout(() => {
//         cb("Cleaned Mango");
//     }, 2000)
// }
//
// function mangoBlender(mango, cb) {
//     setTimeout(() => {
//         cb(mango + " properly blendered");
//     }, 2000)
// }
//
// function mixMilk(blenderedMango, cb) {
//     setTimeout(() => {
//         cb(blenderedMango + " with milk");
//     }, 2000)
// }
//
// function withMineralWater(mixedMango, cb) {
//     setTimeout(() => {
//         cb(mixedMango + " adding mineral water");
//     }, 2000)
// }
//
// function doPackating(juice, cb) {
//     setTimeout(() => {
//         cb(juice + " ready for drinking.");
//     }, 2000)
// }
//
// function getJuice(cb) {
//     getMango(function (mango) {
//         mangoBlender(mango, function (blenderedMango) {
//             mixMilk(blenderedMango, function (mixedMango) {
//                 withMineralWater(mixedMango, function (mixedWithWater) {
//                     doPackating(mixedMango, function (juice) {
//                         cb(juice)
//                     })
//                 })
//             })
//         })
//     });
// }

// getJuice(function (juice) {
//     console.log(juice)
// })
//
// function checkSuccess() {
//     return false
// }
//
// const promise = new Promise((resolve, reject) => {
//     const isSuccess = checkSuccess();
//     if (isSuccess) {
//         resolve("Okay my operation is successfully resolved")
//     } else {
//         reject("Sorry to say that some errors happened")
//     }
// })
// promise
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("data is fetching..")
//     });

function getMango() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cleaned Mango");
        }, 2000)
    })
}

function mangoBlender(mango) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mango + " properly blendered");
        }, 2000)
    })
}

function mixMilk(blenderedMango) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(blenderedMango + " with milk");
        }, 2000)
    })
}

function withMineralWater(mixedMango) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mixedMango + " adding mineral water");
        }, 2000)
    })
}

function doPackating(juice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(juice + " ready for drinking.");
        }, 2000)
    })
}

getMango()
    .then((response) => {
        return mangoBlender(response)
    })
    .then((response) => {
        return mixMilk(response)
    })
    .then((response) => {
        return withMineralWater(response)
    })
    .then((response) => {
        return doPackating(response)
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        if (response) {
            for (let i = 0; i < response.length; i++) {
                console.log(response[i].title)
                console.log("==========")
            }
        }
    })
    .catch((error) => {
        console.log(error)
    });

