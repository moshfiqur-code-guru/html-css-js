//const result = document.getElementById("result");

/*
function checkEvenOdd() {
    const givenNumber = document.getElementById("givenNumber").value;
    let initialPart = "Give Number: " + givenNumber + " ";
    // if (givenNumber % 2 === 0) {
    //     result.value = initialPart + "is  Even"
    // } else {
    //     result.value = initialPart + "is  Odd"
    // }
    result.value = givenNumber % 2 === 0 ? initialPart + "is  Even" : initialPart + "is  Odd"
} */

/*
function isPrime() {
    const givenNumber = document.getElementById("givenNumber").value;
    let initialPart = "Give Number: " + givenNumber + " ";
    if (givenNumber < 2) {
        result.value = initialPart + "is Prime"
    }
    for (let i = 2; i < givenNumber; i++) {
        if (givenNumber % i === 0) {
            result.value = initialPart + "is Not Prime";
            break;
        } else {
            result.value = initialPart + "is Prime";
        }
    }
}
*/
// const evenOddCheckBtn = document.getElementById("checkBtn");
// const primeCheckBtn = document.getElementById("checkPrimeBtn");
//
// evenOddCheckBtn.addEventListener("click", checkEvenOdd);
// primeCheckBtn.addEventListener("click", isPrime);


// Source - https://stackoverflow.com/a/2117523
// Posted by broofa, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-02, License - CC BY-SA 4.0

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

const user = {
    id: uuidv4(),
    name: "John Doe",
    image: "author.jpeg",
    isLoggedIn: false,
    email: "john@gmail.com",
    password: "123456"
}

function saveUserInLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user))
}

function getUserFromStorage() {
    return JSON.parse(localStorage.getItem("user"));
}

function userLoginStatus() {
    const user = getUserFromStorage();
    if (user && user.isLoggedIn) {
        if (location.href.includes("index.html")) {
            location.href = "dashboard.html"
        }
    } else {
        if (!location.href.includes("index.html")) {
            location.href = "index.html"
        }
    }
}

userLoginStatus();

//saveUserInLocalStorage(user);

function doLogin() {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData);
    const savedUserInfo = getUserFromStorage();
    if (user.username.trim() !== "" && user.password.trim() !== "") {
        if (savedUserInfo.email !== user.username.trim() || savedUserInfo.password !== user.password.trim()) {
            error.textContent = "Username or password mismatched!"
        } else {
            error.textContent = "";
            savedUserInfo.isLoggedIn = true;
            saveUserInLocalStorage(savedUserInfo);
            userLoginStatus();
        }
    } else {
        error.textContent = "Input field should not be empty"
    }
}

function logout() {
    const savedUserInfo = getUserFromStorage();
    savedUserInfo.isLoggedIn = false;
    saveUserInLocalStorage(savedUserInfo);
    userLoginStatus();
}


function toggleVisible(type) { //text/password
    const show = document.querySelector(".show");
    const hide = document.querySelector(".hide");
    document.getElementById("user-password").setAttribute("type", type);
    if (type === "text") {
        hide.style.display = "block"
        show.style.display = "none"
    } else {
        hide.style.display = "none"
        show.style.display = "block"
    }
}

function addMenus() {
    document.querySelector(".menu").innerHTML = `
    <ul>
                        <li class="students"><a href="students.html">Students</a></li>
                        <li class="class"><a href="class.html">Class</a></li>
                        <li class="teachers"><a href="teachers.html">Teachers</a></li>
                        <li class="marksheet"><a href="marksheet.html">Marksheet</a></li>
                        <li class="guardians"><a href="guardians.html">Guardians</a></li>
                        <li class="managements"><a href="managements.html">Managements</a></li>
                        <li class="calculator"><a href="calculator.html">Calculator</a></li>
                        <li class="switch"><a href="switch.html">Switch</a></li>
                    </ul>
    `;
    // const arrayOfMenu = ["students", "class", "teachers", "marksheet", "guardians", "calculator", "switch"];
    // for (let i = 0; i < arrayOfMenu.length; i++){
    //     document.querySelector(".menu").appendChild(`<li class="${arrayOfMenu[i]}"><a href="students.html">${arrayOfMenu[i]}</a></li>`)
    // }
}

addMenus()

function activeMenu() {
    const currentLocation = location.href;
    //calculator.html
    //["calculator", "html"]
    let lastPart = currentLocation.split("/").pop().split(".")[0];
    document.querySelector(".menu ul li." + lastPart).classList.add("active")
}

activeMenu();

