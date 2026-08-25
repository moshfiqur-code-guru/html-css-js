document.addEventListener('DOMContentLoaded', () => {
    MicroModal.init();
});
let modalTitle = "Add New Students";
let modalButtonLabel = "Add New"
const modalTitleElement = document.getElementById("modal-1-title");
const modalButtonElement = document.getElementById("modalSaveButton");
const studentForm = document.getElementById("studentForm")
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
const students = JSON.parse(localStorage.getItem("students"))
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
    students.forEach(function (student, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.firstname} ${student.lastname}</td>
        <td><img src="assets/img/author.jpeg"/></td>
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
}

displayStudents();

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students))
}

modalSaveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(studentForm);
    const student = Object.fromEntries(formData);
    if (editableIndex !== null) {

    } else {
        student["id"] = new Date().getMilliseconds()
        students.push(student)
    }
    saveStudents();
    displayStudents();
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
    const student = students[index];
}

function setModalTitleAndButton() {
    modalTitleElement.textContent = modalTitle;
    modalButtonElement.textContent = modalButtonLabel
}

function setDefaultTitle() {
    modalTitle = "Add New Student";
    modalButtonLabel = "Add New";
    setModalTitleAndButton()
}

//saveStudents()
setModalTitleAndButton();
