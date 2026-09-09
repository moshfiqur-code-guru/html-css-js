// const paginationContainer = document.getElementById("pagination")
// const conf = {
//     currentPage,
//     itemsPerPage,
//     maxVisiblePages,
//     container: paginationContainer
// }

function createPagination(config) {
    let {currentPage = 1, itemsPerPage = 10, container, maxVisiblePages = 5, data} = config;

    function getTotalPages() {
        return Math.ceil(data / itemsPerPage)
    }

    function getCurrentPage() {
        return currentPage;
    }

    function getStartIndex() {
        return (currentPage - 1) * itemsPerPage
    }

    function getEndIndex() {
        return Math.min(getStartIndex() + itemsPerPage, data.length)
    }

    function nextPage() {
        currentPage += 1
    }

    function previousPage() {
        currentPage -= 1
    }

    return {getStartIndex, getCurrentPage, getTotalPages, getEndIndex, nextPage, previousPage}
}


