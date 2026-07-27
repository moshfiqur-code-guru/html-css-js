// function add(a, b, c) {
//     console.log(a + b + c)
// }
//
// add(10, 13, 40);


function getElementById(id) {
    return document.getElementById(id);
}

function hideShow(element, css) {
    element.style.display = css;
}

const loggedInContent = getElementById("main-content");
const registrationFormWrapper = getElementById("registration-form");
const loginFormWrapper = getElementById("login-form");
const error = getElementById("error")

function getUserFromLocalStorage() {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
}

function saveUserIntoStorage(user) {
    const userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON)
}

let ar = [1, 12, 2323];


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

function checkUserLoginStatus() {
    const user = getUserFromLocalStorage();
    if (user === null) {
        hideShow(registrationFormWrapper, "block")
        hideShow(loggedInContent, "none")
        hideShow(loginFormWrapper, "none")
    } else if (user && user?.isLoggedIn) {
        hideShow(registrationFormWrapper, "none")
        hideShow(loggedInContent, "block")
        hideShow(loginFormWrapper, "none")
        getElementById("welcome").innerHTML += user.firstName
        getElementById("current-timestamp").innerHTML += whichDay(new Date().getDay()) + " " + new Date().getDate() + ", " + new Date().getFullYear()
    } else {
        hideShow(registrationFormWrapper, "none")
        hideShow(loggedInContent, "none")
        hideShow(loginFormWrapper, "block")
    }
}

function userRegistration() {
    event.preventDefault();
    const form = event.target;
    //console.log(form)
    //const firstName = getElementById("firstName").value;
    // const lastName = getElementById("lastName").value;
    // const email = getElementById("email").value;
    // const username = getElementById("username").value;
    // const password = getElementById("password").value;
    // const confirmPass = getElementById("confirmPassword").value;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPass = formData.get("confirmpassword");

    if (firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && username.trim() !== "" && password.trim() !== "" && confirmPass.trim() !== "") {
        if (password.trim() === confirmPass.trim()) {
            // const user = {
            //     firstName: firstName,
            //     lastName: lastName,
            //     email: email,
            //     username: username,
            //     password: password
            // }
            const user = {
                firstName,
                lastName,
                email,
                username,
                password,
                isLoggedIn: false
            }
            error.textContent = ""
            saveUserIntoStorage(user)
            checkUserLoginStatus();
        } else {
            error.textContent = "Password doesn't match"
        }
    } else {
        error.textContent = "Input fields should not be empty!"
    }


}

function doLogin() {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");
    const userFromStorage = getUserFromLocalStorage();
    if (username.trim() !== "" && password.trim() !== "") {
        if (password.trim() !== userFromStorage.password) {
            error.textContent = "Username or password doesn't match"
        } else if (username.trim() !== userFromStorage.username) {
            error.textContent = "Username or password doesn't match"
        } else {
            error.textContent = ""
            userFromStorage.isLoggedIn = true;
            saveUserIntoStorage(userFromStorage)
            checkUserLoginStatus();

        }
    } else {
        error.textContent = "Input fields should not be empty!"
    }

}

function doLogout() {
    const userFromStorage = getUserFromLocalStorage();
    userFromStorage.isLoggedIn = false;
    saveUserIntoStorage(userFromStorage)
    checkUserLoginStatus();
}


checkUserLoginStatus();
