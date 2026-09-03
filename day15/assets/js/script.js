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

const currentUser = {
    id: uuidv4(),
    name: "John Doe",
    image: "user.jpeg",
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
            location.href = "dashboard.html";
        }
        let author = document.getElementById("author-image");
        let img = document.createElement("img");
        img.src = "assets/img/" + user.image;
        img.alt = "Logged In User";
        if (author !== null) {
            author.innerHTML = img.outerHTML;
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
    if (savedUserInfo) {
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
    } else {
        saveUserInLocalStorage(currentUser);
        doLogin()
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
    // document.querySelector(".menu").innerHTML = `
    // // // <ul>
    // // //                     <li class="students"><i class="fa-solid fa-user"></i><a href="students.html">Students</a></li>
    // // //                     <li class="class"><i class="fa-solid fa-user"></i><a href="class.html">Class</a></li>
    // // //                     <li class="teachers"><i class="fa-solid fa-user"></i><a href="teachers.html">Teachers</a></li>
    // // //                     <li class="marksheet"><i class="fa-solid fa-user"></i><a href="marksheet.html">Marksheet</a></li>
    // // //                     <li class="guardians"><i class="fa-solid fa-user"></i><a href="guardians.html">Guardians</a></li>
    // // //                     <li class="managements"><i class="fa-solid fa-user"></i><a href="managements.html">Managements</a></li>
    // // //                     <li class="calculator"><i class="fa-solid fa-user"></i><a href="calculator.html">Calculator</a></li>
    // // //                     <li class="switch"><i class="fa-solid fa-user"></i><a href="switch.html">Switch</a></li>
    // // //                 </ul>
    // // // `;
    // //arrayOfMenu[0]
    //const arrayOfMenu = ["students", "class", "teachers", "marksheet", "guardians", "calculator", "switch", "sdepe"];
    const menus = [
        {label: "dashboard", icon: "dashboard"},
        {label: "students", icon: "users"},
        {label: "class", icon: "bars"}, {
            label: "teachers",
            icon: "user"
        }, {label: "marksheet", icon: "file"}, {label: "guardians", icon: "home-user"}, {
            label: "calculator",
            icon: "calculator"
        }, {label: "switch", icon: "arrows-rotate"},
        {label: "closure", icon: "arrows-rotate"}
    ]
    const ul = document.createElement("ul");
    const menu = document.querySelector(".menu")
    for (let i = 0; i < menus.length; i++) {
        ul.innerHTML += `<li class="${menus[i].label}"><i class="fa-solid fa-${menus[i].icon}"></i><a href="${menus[i].label}.html">${menus[i].label}</a></li>`
    }
    //document.querySelector(".menu").innerHTML = ul.outerHTML;
    if (menu !== null) {
        menu.appendChild(ul)
    }

}

addMenus()

function activeMenu() {
    const currentLocation = location.href;
    //calculator.html
    //["calculator", "html"]
    let lastPart = currentLocation.split("/").pop().split(".")[0];
    const currentItem = document.querySelector(".menu ul li." + lastPart);
    if (currentItem !== null) {
        document.querySelector(".menu ul li." + lastPart).classList.add("active")
    }
}

activeMenu();

