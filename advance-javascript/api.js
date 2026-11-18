const API_END_POINTS = {
    URL: 'https://fakestoreapi.com/products',
    //https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts
}

function ApiRequest() {
    function getProducts() {
        return fetch(API_END_POINTS.URL, {method: 'GET'})
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function deletePostById(postID) {
        return fetch(`${API_END_POINTS.URL}/${postID}`, {method: 'DELETE'})
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    function savePost(data) {
        return fetch(`${API_END_POINTS.URL}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    return {getProducts, deletePostById, savePost}
}

const apiRequest = ApiRequest();
