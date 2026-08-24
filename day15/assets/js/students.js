document.addEventListener('DOMContentLoaded', () => {
    MicroModal.init();
});


// const students = [{
//     id: uuidv4(),
//     firstname: "Tomas",
//     lastname: "Adison",
//     email: "tomas@gmail.com",
//     class: 10,
//     village: "Nayagola"
// }]
const students = JSON.parse(localStorage.getItem("students"))
let tableBody = document.getElementById("tableBody")

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
            <button class="delete" onclick="deleteStudent(${index})"><i class="fa fa-solid fa-trash"></i></button>
            <button class="edit"  onclick="editStudent(${index})"><i class="fa fa-solid fa-pencil"></i></button>
        </td>
        `;
        tableBody.appendChild(row)
    });
}

displayStudents();

function saveStudents() {
    //localStorage.setItem("students", JSON.stringify(students))
}

function deleteStudent(index) {
}

function editStudent(index) {

}

saveStudents()
