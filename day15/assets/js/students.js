document.addEventListener('DOMContentLoaded', () => {
    MicroModal.init();
});
let modalTitle = "Add New Students";
let modalButtonLabel = "Add New"
const modalTitleElement = document.getElementById("modal-1-title");
const modalButtonElement = document.getElementById("modalSaveButton");
const studentForm = document.getElementById("studentForm");
const studentImagePicker = document.getElementById("student-image");
const preview = document.getElementById("thumbnail");
let editableIndex = null;
// const students = [{
//     id: new Date().getMilliseconds(),
//     firstname: "Tomas",
//     lastname: "Adison",
//     email: "tomas@gmail.com",
//     class: 10,
//     village: "Nayagola"
// },
//     {
//         id: new Date().getMilliseconds(),
//         firstname: "John",
//         lastname: "Doe",
//         email: "john@gmail.com",
//         class: 9,
//         village: "Nayagola"
//     },
// ];
//console.log(studentss)

const students = JSON.parse(localStorage.getItem("students")) ?? []

//->https://demo.restapi.org/get-students
let tableBody = document.getElementById("tableBody");

// const arr = [20, 30, 50];
// //
// const print = () => {
//
// }
//
// function doAnything() {
//
// }
//
// arr.forEach((item, index) => {
//     console.log(item, "  === ", index)
// })

// for (let i = 0; i < students.length; i++){
//     const row = document.createElement("tr");
//     const student = students[i];
//     row.innerHTML = `
//         <td>${i + 1}</td>
//         <td>${students.firstname} ${student.lastname}</td>
//         <td><img src="assets/img/author.jpeg"/></td>
//         <td>${student.class}</td>
//         <td>${student.id}</td>
//         <td>${student.email}</td>
//         <td>${student.village}</td>
//         <td>
//             <button class="delete" onclick="deleteStudent(${index})"><i class="fa fa-solid fa-trash"></i></button>
//             <button class="edit"  onclick="editStudent(${index})"><i class="fa fa-solid fa-pencil"></i></button>
//         </td>
//         `;
//     tableBody.appendChild(row)
// }

function displayStudents() {
    tableBody.innerHTML = "";
    if (students.length > 0) {
        students.forEach(function (student, index) {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.firstname} ${student.lastname}</td>
        <td><img src="assets/img/${student.image}"/></td>
        <td>${student.class}</td>
        <td>${student.id}</td>
        <td>${student.email}</td>
        <td>${student.village}</td>
        <td>
            <button class="delete" onclick="deleteStudent(${index}, ${student.id})"><i class="fa fa-solid fa-trash"></i></button>
            <button class="edit"  onclick="editStudent(${index}, ${student.id})" data-micromodal-trigger="modal-1"><i class="fa fa-solid fa-pencil"></i></button>
        </td>
        `;
            tableBody.appendChild(row)
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="8"><h2>Oops! Student data is not found.</h2></td>`;
        tableBody.appendChild(row)
    }
}

displayStudents();

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students))
}


studentImagePicker.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        preview.src = url;
    }
})

//SAVE STUDENT OR UPDATE STUDENT
modalSaveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(studentForm);
    const student = Object.fromEntries(formData);
    student["image"] = student.image?.name

    //Only for updating student and
    // need that editable index present
    if (editableIndex !== null) {
        students[editableIndex] = student
    } else {
        // this is necessary only for creating new
        student["id"] = new Date().getMilliseconds()
        students.push(student)
    }
    //save updated students in the storage
    saveStudents();
    //display again the updated students in the table
    displayStudents();
    //after saving or updating student resetting the form
    studentForm.reset();

    MicroModal.close('modal-1')
})

function deleteStudent(index, id) {
    const confirmation = confirm("Are you sure to delete this student?");
    if (!confirmation) return;
    students.splice(index, 1);
    saveStudents();
    displayStudents();
}

function editStudent(index, id) {
    modalTitle = "Update Student";
    modalButtonLabel = "Update";
    editableIndex = index;
    setModalTitleAndButton();
    // const student = students.find((student) => {
    //     return student.id === id
    // });
    // const student = students.find(student => student.id === id);
    MicroModal.show('modal-1')
    const student = students[index];
    // studentForm.elements["firstname"].value = student["firstname"]
    // studentForm.elements["lastname"].value = student["lastname"]
    // studentForm.elements["class"].value = student["class"];
    const keys = Object.keys(student);
    // for (let i = 0; i < keys.length; i++) {
    //     if (keys[i] !== "image" && keys[i] !== "id") {
    //         studentForm.elements[keys[i]].value = student[keys[i]]
    //     }
    // }
    keys.forEach((key, index) => {
        if (key !== "image" && key !== "id") {
            studentForm.elements[key].value = student[key]
        } else {
            if (key === "image") {
                preview.src = "assets/img/" + student.image
            }
        }
    });
}

function setModalTitleAndButton() {
    modalTitleElement.textContent = modalTitle;
    modalButtonElement.textContent = modalButtonLabel
}

function setDefaultTitle() {
    modalTitle = "Add New Student";
    modalButtonLabel = "Add New";
    setModalTitleAndButton();
    MicroModal.show('modal-1')
}

function onModalClose() {
    preview.src = "assets/img/author.jpeg"
}

//saveStudents()
setModalTitleAndButton();
