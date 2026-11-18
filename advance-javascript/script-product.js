function getLatestPost() {
    apiRequest.getProducts()
        .then((response) => {
            const tbody = document.getElementById("product-body");
            tbody.innerHTML = ""
            for (let p of response) {
                let tr = `<tr>
                            <td>${p.id}</td>
                            <td>${p.userId}</td>
                            <td>${p.title}</td>
                            <td>
                                <button>Edit</button>
                                <button onclick="deletePost(${p.id})">Delete</button>
                            </td>
                        </tr>`
                tbody.innerHTML += tr
            }
        })
}

function deletePost(postId) {
    const isConfirmed = confirm("Are you sure to delete the post?");
    if (isConfirmed)
        apiRequest.deletePostById(postId)
            .then(response => console.log(response))

}

function addNewPost() {
    const data = {
        title: 'This my first post',
        body: 'This is my first post body',
        userId: 1,
    }
    apiRequest.savePost(data).then(response => {
        getLatestPost()
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById("add-new")
    getLatestPost();
    addBtn.addEventListener('click', addNewPost)
})
