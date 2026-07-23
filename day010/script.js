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
let expectedAmount;
let amountGotPreviously = 100;
expectedAmount = null

let resultAmount = amountGotPreviously * (expectedAmount ?? 1);
console.log(resultAmount)

/*let fatherName = "Badsha";
let motherName = "Moriom";
let numberOfChildren = 1;*/

let familyOne = {
    fatherName: "Badsha",
    motherName: "Moriam",
    numberOfChildren: 1,
    isRegistered: true
}
let familyTwo = {
    fatherName: "Sadirul",
    motherName: "Ayesha",
    numberOfChildren: 5
}
//let familyTwo = new Object({})
// familyOne.fatherName = "Badsha";
// familyOne.motherName = "Moriom";
// familyOne.numberOfChildren = 1;

//Object.assign(familyOne, {fatherName: "", motherName: ""})
//console.log(familyOne)

console.log(familyTwo.numberOfChildren)
console.log(familyOne.fatherName)

console.log(familyOne["motherName"])
familyOne["numberOfRoom"] = 10;
console.log(familyOne.numberOfRoom)

let bio = familyOne.fatherName + ", " + familyOne.motherName + ", " + familyOne?.numberOfChildren
console.log(bio)
let expenditure = {
    electricityBill: 500,
    tutionBill: {
        teacher1: 300
    },
}

let totalExpenditure = expenditure.electricityBill + expenditure.tutionBill.teacher1 + (expenditure?.TA ? expenditure?.TA : 0)
console.log(totalExpenditure)

if ("isRegistered" in familyOne && familyOne["isRegistered"]) {
    console.log(familyOne["fatherName"])
}


delete familyOne.isRegistered;
console.log(familyOne)

console.log(void 0)
console.log(void (10 + 30))

//let obj = new Object()
let date = new Date();
console.log(date.getUTCFullYear())

let requiredNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let demoArray = new Array([1, 2, 3, 4])
console.log(typeof requiredNumbers)
console.log(requiredNumbers[10])
console.log(requiredNumbers[0])
console.log(requiredNumbers[5])

let arrayOfFamilies = [familyOne, familyTwo];
console.log(arrayOfFamilies[0].fatherName);


requiredNumbers[11] = 40;
requiredNumbers.push(20)
requiredNumbers.pop()
requiredNumbers.unshift(20)
requiredNumbers.shift()
console.log(requiredNumbers)
