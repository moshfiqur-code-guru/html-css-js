// const paginationContainer = document.getElementById("pagination")
// const conf = {
//     currentPage,
//     itemsPerPage,
//     maxVisiblePages,
//     container: paginationContainer
// }

function createPagination(config) {
    let {
        currentPage = 1,
        itemsPerPage = 10,
        container,
        maxVisiblePages = 5,
        data,
        callToAction,
        nextBtn,
        prevBtn,
        showNavigationImage = false
    } = config;

    function getTotalPages() {
        return Math.ceil(data.length / itemsPerPage) // 1000/10 = 100 + 1 = 101
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

    function goToPage(page) {

        const totalPages = getTotalPages();

        if (totalPages === 0) {
            currentPage = 1;
            return;
        }

        //page can't be the zero
        if (page < 1) {
            page = 1
        }

        // example: 1000 -data / 10 -perpage = 100
        //if the page number is 100 then pressing the next button means page + 1 = 101
        // so if the page is greater than totalPages that's mean it is wrong
        if (page > totalPages) {
            page = totalPages;
        }

        //if page is same and not changed
        // don't need to do anything
        if (page === currentPage) {
            return;
        }
        currentPage = page;
        callToAction();
        render();


    }

    function nextPage() {
        goToPage(currentPage + 1);
    }

    function previousPage() {
        //currentPage -= 1
        goToPage(currentPage - 1);
    }

    function paginate(data) {
        const start = getStartIndex();
        const end = getEndIndex();
        return data.slice(start, end)
    }

    //Render pagination UI
    function getPageNumbers() {

        const pages = [];

        const totalPages = getTotalPages();

        if (totalPages === 0) {
            return pages;
        }
        if (totalPages <= maxVisiblePages) {
            for (let page = 1; page <= totalPages; page++) {
                pages.push(page)
            }
            return pages;
        }
        // First page
        pages.push(1);

        const middleCount = maxVisiblePages - 2;

        let start = currentPage - Math.floor(middleCount / 2);
        let end = start + middleCount - 1;

        // Fix beginning
        if (start < 2) {
            start = 2;
            end = start + middleCount - 1;
        }

        // Fix ending
        if (end > totalPages - 1) {
            end = totalPages - 1;
            start = end - middleCount + 1;
        }

        // Left dots
        if (start > 2) {
            pages.push("...");
        }

        // Middle pages
        for (let page = start; page <= end; page++) {
            pages.push(page);
        }

        // Right dots
        if (end < totalPages - 1) {
            pages.push("...");
        }

        // Last page
        pages.push(totalPages);

        return pages;
    }

    function createButton(text, className, cb) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = text;
        button.className = className;
        button.addEventListener("click", cb);
        return button;
    }

    function render() {
        container.innerHTML = "";

        const totalPages = getTotalPages();

        if (totalPages <= 1) {
            return;
        }
        const prevButton = prevBtn ? prevBtn : createButton("prev", "pagination-btn", previousPage);
        const nextButton = nextBtn ? nextBtn : createButton("next", "pagination-btn", nextPage);
        if (prevBtn && nextBtn) {
            if (showNavigationImage) {
                const imgPrev = document.createElement("img");
                imgPrev.className = "img-prev"
                prevButton.querySelector(".img-prev")?.remove()
                imgPrev.src = "assets/img/" + data[getStartIndex()].image
                const imgNext = document.createElement("img");
                imgNext.className = "img-next"
                nextButton.querySelector(".img-next")?.remove()
                imgNext.src = "assets/img/" + data[getEndIndex()].image
                prevButton.append(imgPrev)
                nextButton.prepend(imgNext)
            }
            prevButton.addEventListener("click", previousPage)
            nextButton.addEventListener("click", nextPage)
        }
        prevButton.disabled = currentPage === 1
        nextButton.disabled = currentPage === totalPages;

        // Page numbers container
        const pageContainer = document.createElement("div");
        pageContainer.className = "pagination-pages";
        const pages = getPageNumbers();

        pages.forEach(page => {
            const pageButton = createButton(page, page === "..." ? "page-dot-btn" : "page-btn", () => goToPage(page));
            if (page === currentPage) {
                requestAnimationFrame(() => {
                    pageButton.classList.add("active");
                });
            }
            pageContainer.appendChild(pageButton)
        })

        container.append(prevButton, pageContainer, nextButton)

    }

    return {getStartIndex, getCurrentPage, getTotalPages, getEndIndex, nextPage, previousPage, render, paginate}
}


