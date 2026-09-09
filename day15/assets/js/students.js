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
let currentID = null;
let tableBody = document.getElementById("tableBody");
const columns = [
    {label: "SI", header: "", isSortable: false},
    {label: "Name", header: "fullname", isSortable: true},
    {label: "Image", header: "image", isSortable: false},
    {label: "Class", header: "class", isSortable: true},
    {label: "St. ID", header: "id", isSortable: true},
    {label: "Email", header: "email", isSortable: true},
    {label: "Village", header: "village", isSortable: true},
    {label: "Action", header: "", isSortable: false},
]
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


function addDemoStudents() {
    for (let i = 0; i < 100; i++) {
        students.push({
            id: new Date().getMilliseconds(),
            firstname: "Tomas - " + i,
            lastname: "Adison - " + i,
            email: "tomas-" + i + "@gmail.com",
            class: Math.floor(Math.random() * 4) + 6,
            village: "Nayagola-" + i
        })
    }
    localStorage.setItem("students", JSON.stringify(students))
}


let students = JSON.parse(localStorage.getItem("students")) ?? []
let temp = JSON.parse(localStorage.getItem("students")) ?? []

const config = {
    currentPage: 1,
    itemsPerPage: 10,
    maxVisiblePages: 5,
    container: document.getElementById("pagination"),
    data: students
}
const pagination = createPagination(config);

function paginate() {
    studentModerators["startIndex"] = pagination.getStartIndex()
    studentModerators["endIndex"] = pagination.getEndIndex();
}


const studentModerators = {
    search: "",
    dir: "",
    col: "",
    startIndex: null,
    endIndex: null
}

//addDemoStudents()

function decideSortIcons(column) {
    const {isSortable} = column;
    const {col, dir} = studentModerators;
    const active = column.header === col;

    if (!isSortable) return "";

    const icon = dir === "ASC" ? "up" : "down";

    const singularIcon = `<span class="no-indent"><i class="fa fa-caret-${icon}"></i></span>`

    const icons = (!active || !dir)
        ? `<span><i class="fa fa-caret-up"></i></span>
            <span><i class="fa fa-caret-down"></i></span>`
        : dir === "ASC"
            ? `${singularIcon}`
            : `${singularIcon}`;

    let nextDir = "";
    if (col !== "" && active) {
        if (dir === "ASC") {
            nextDir = "DESC"
        } else {
            nextDir = "ASC"
        }
    } else {
        nextDir = "ASC"
    }

    return {
        nextDir,
        html: `<div class="sort-button">${icons}</div>`
    }
}

function displayColumn() {
    const thead = document.getElementById("columns");
    thead.innerHTML = ""
    const tr = document.createElement("tr")
    columns.forEach(column => {
        const {html, nextDir} = decideSortIcons(column)
        let th = document.createElement("th")
        th.innerHTML = `<div class="flex items-center flex-center">
                    <span>${column.label}</span>
                    ${html ?? ""}
                </div>`
        tr.appendChild(th);
        th.addEventListener("click", () => studentSorting(column.header, nextDir))
    });
    thead.appendChild(tr)
}

function studentSorting(column, nextDir) {
    studentModerators["dir"] = nextDir;
    studentModerators["col"] = column;
    displayColumn()
    displayStudents()
}

function displayStudents() {
    displayColumn()
    const {col, dir, search, startIndex, endIndex} = studentModerators;
    const formattedStudents = students
        .filter(student => (student.firstname + student.lastname)
            .toLowerCase()
            .includes(search))
        .sort((a, b) => {
            const valueA = col === 'fullname' ? a["firstname"] + a["lastname"] : a[col];
            const valueB = col === 'fullname' ? b["firstname"] + b["lastname"] : b[col];
            if (col === "") return 0;
            if (col === "class") return dir === "ASC" ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA)
            if (typeof valueA === "number") return dir === "ASC" ? valueA - valueB : valueB - valueA
            return dir === "ASC" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
        }).slice(startIndex, endIndex);
    students = formattedStudents
    tableBody.innerHTML = "";
    if (students.length > 0) {
        formattedStudents.forEach(function (student, index) {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.firstname} ${student.lastname}</td>
        <td><img src="assets/img/${student.image}"/></td>
        <td>${classLabels(Number(student.class))}</td>
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

paginate()
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
    let message = "saved";
    student["image"] = student.image?.name
    student["id"] = currentID ?? new Date().getMilliseconds()
    //validate student before save or update it
    const validationError = validateStudent(student);
    if (Object.keys(validationError).length === 0) {
        //Only for updating student and
        // need that editable index present
        if (editableIndex !== null) {
            students[editableIndex] = student;
            currentID = null;
            editableIndex = null;
            message = "updated";
        } else {
            message = "saved";
            students.push(student)
        }
        //save updated students in the storage
        saveStudents();
        //display again the updated students in the table
        displayStudents();
        //after saving or updating student resetting the form
        studentForm.reset();

        //manual close of the modal once student saved or
        // student update completed
        MicroModal.close('modal-1')
        onModalClose()
        Swal.fire({
            title: "Success!",
            //text: "Your data " + message + " successfully",
            text: `Your data ${message}  successfully`,
            icon: "success"
        });
    } else {
        alert("You did not fill all the input fields")
    }
})

//DELETE STUDENT BY INDEX NUMBER
function deleteStudent(index, id) {
    // const confirmation = confirm("Are you sure to delete this student?");
    // if (!confirmation) return;

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((confirmation) => {
        if (confirmation.isConfirmed) {
            //deleting student using index
            students.splice(index, 1);
            //save again with updated students
            saveStudents();
            //re-render student table
            displayStudents();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });

}

// EDITING STUDENT BY IT'S INDEX AND ID
function editStudent(index, id) {
    modalTitle = "Update Student";
    modalButtonLabel = "Update";
    editableIndex = index;
    currentID = id;
    setModalTitleAndButton();
    MicroModal.show('modal-1')
    const student = students[index];
    const keys = Object.keys(student);
    keys.forEach((key, index) => {
        if (key !== "image" && key !== "id") {
            studentForm.elements[key].value = student[key]
        } else {
            let url = "assets/img/" + student.image;
            if (key === "image") {
                preview.src = url;
            }
            fetch(url).then(async (response) => {
                const blob = await response.blob();
                const file = new File(
                    [blob],
                    student.image,
                    {
                        type: blob.type
                    }
                );
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                studentImagePicker.files = dataTransfer.files;
            })
        }
    });
}

//Setting dynamic modal title and button label
//according to the save or edit button clicked
function setModalTitleAndButton() {
    modalTitleElement.textContent = modalTitle;
    modalButtonElement.textContent = modalButtonLabel
}

//once reload the page
//by default this method will set the default modal title and button label
function setDefaultTitle() {
    modalTitle = "Add New Student";
    modalButtonLabel = "Add New";
    setModalTitleAndButton();
    MicroModal.show('modal-1')
}

//programmable close of the modal
//on click the close button
function onModalClose() {
    preview.src = "assets/img/author.jpeg"
}

function validateStudent(student) {
    const keys = Object.keys(student);
    let error = {}
    keys.forEach((key) => {
        if (student[key].toString().trim() === "") {
            error[key] = "Your " + key + "filed is empty";
        }
    });
    return error;
}

function classLabels(classValue) {
    const classes = {
        10: "Ten",
        9: "Nine",
        8: "Eight",
        7: "Seven",
        6: "Six",
        5: "Five"
    }
    return `Class ${classes[classValue]}`;
}

setModalTitleAndButton();

const name = "  Roni Islam  "

function filteredStudents(searchValue) {
    studentModerators["search"] = searchValue;
    if (searchValue === "") students = temp
    displayStudents();
}

const searchDebounce = debounce();


function studentFilterWithDebounce(input) {
    let searchKeyword = input.value.replace(/\s/g, "").toLowerCase();
    searchDebounce(searchKeyword, filteredStudents, 100)
}


function next() {
    students = temp
    pagination.nextPage();
    paginate();
    displayStudents()
}

function prev() {
    students = temp
    pagination.previousPage();
    paginate();
    displayStudents()
}
