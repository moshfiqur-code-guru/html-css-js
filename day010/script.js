//Arithmetic operator
// + (Addition),- (Subtraction), * (Multiplication), / (Division), % (Remainder), ** (Exponentiation)

/*
let a = 10;
let b = 30;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(7 % 5);

console.log(2 ** 5)
console.log(Math.pow(2, 5))

//Assignment Operators
// =, +=, -=, *=, /=, %=, **=
let x = 40;
console.log(x)
x += 5;
x = x + 5
x -= 5
x *= 5
x /= 5
//x %= 5
console.log(x)
x **= 2

console.log(x) */

//Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

/*
let a = 30;
let b = 30;
console.log(a == b)

let c = "10";
let d = 10;
console.log(c == d)
console.log(c === d)
console.log(c != d)
console.log(c !== d)

let firstInput = "10";
let lastInput = "10";
if (firstInput == lastInput) {
    console.log("you are passed")
}
if (firstInput === lastInput) {
    console.log(Number(firstInput) + Number(lastInput))
} */

// let trm = "   RBL    ";
// console.log(trm)

/* let w = 30;
let z = 40;
console.log(w > z)
console.log(w >= z)
console.log(w <= z)
console.log(w < z)

let age = 40;
let name = "Karim"
if (age >= 10) {
    console.log("Yes this boy is eligible for my team: " + name)
} */


//LOGICAL OPERATORS
//&& -AND, ! - NOT, || -OR


/**
 TODO:
 let age = 15;
 let hasID = false;
 let hasQualification = true
 console.log(hasQualification)
 if (age >= 15 && !hasID && hasQualification) {
    console.log("Yes he is eligible");
}

 if (age >= 15 || (hasID && hasQualification)) {
    console.log("Yes he is eligible");
}

 married = false;
 unmarried = true;

 if (!married) {
    console.log("ok")
}
 if (!unmarried) {
    console.log("No")
}
 **/

// INCREMENT & DECREMENT OPERATORS
//++,--

let a = 10;
// a++;
// console.log(a)
// console.log(a++)
// console.log(a)
console.log(a -= 2)
console.log(a)

let i = 1;
let target = 10;

for (i; i <= target; i += 3) {
    console.log(i)
}

let firstName = "Rubel";
let lastName = "Ali";

// STUDENT
// name, age, address, hasID

let fullName = firstName + " " + lastName;

// inert into studenet (name, age, address, hasID) values (fullName)
console.log(fullName)


//TERNARY OPERATOR
let result = "";
let c = 12;
let d = 30;

// if (c > d) {
//     result = "Correct"
// } else {
//     result = "Not correct"
// }
result = c > d
    ? "Correct"
    : "Not correct"

console.log(result)

//NULLISH Coalescing OPERATOR
let username = null;
console.log(username)
let typeOfUser = ""
if (username === undefined || username === null) {
    typeOfUser = "Guest"
}

console.log(typeOfUser)

let userType = username ?? "Guest"
console.log(userType)

