$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 3,
        nav: true,
        dots: false
    });
});

const prdts = [
    {
        productId: 1,
        image: "https://glossier-prod.imgix.net/files/glosser-fragrancecoffret-homepage-vis-category-05.png?auto=compress,format&cs=srgb&w=807",
        name: "Balm Dotcom Keychain",
        SKU: "1234-1233-5456",
        stock: true,
        price: 345,
        color: "black"
    },
    {
        productId: 2,
        image: "https://glossier-prod.imgix.net/files/glossier-holiday-1010-26-bdc-holiday-trio-pdp-carousel-1.png?auto=compress,format&cs=srgb&w=900",
        name: "White Head Phone",
        SKU: "1234-1233-5457",
        stock: true,
        price: 345,
        color: "white"
    },
    {
        productId: 3,
        image: "https://glossier-prod.imgix.net/files/JustBakedKeychainCarouselpdp-carousel-1.png?auto=compress,format&cs=srgb&w=900",
        name: "Red Head Phone",
        SKU: "1234-1233-5458",
        stock: true,
        price: 345,
        color: "red"
    },
    {
        productId: 4,
        image: "https://glossier-prod.imgix.net/files/glossier-holiday-26-introvert-vis-cc-3.png?auto=compress,format&cs=srgb&w=807",
        name: "Red Head Phone",
        SKU: "1234-1233-5458",
        stock: true,
        price: 345,
        color: "red"
    },
    {
        productId: 5,
        image: "https://glossier-prod.imgix.net/files/glosser-fragrancecoffret-homepage-vis-category-05.png?auto=compress,format&cs=srgb&w=807",
        name: "Red Head Phone",
        SKU: "1234-1233-5458",
        stock: true,
        price: 345,
        color: "red"
    }
];

function ecommerceManagement() {
    function saveProductsInStorage() {
        const productJSON = JSON.stringify(prdts)
        localStorage.setItem("products", productJSON);
    }

    function getProducts() {
        const productJSON = localStorage.getItem("products");
        return JSON.parse(productJSON);
    }

    function displayProducts() {
        const products = getProducts();
        const carousel = document.getElementById("carousel-items");
        carousel.innerHTML = ""

        // h1.textContent = ""
        products.map(product => {
            const item = `<div class="item border border-1">
                                    <div class="product-thumb position-relative">
                                        <a href="details.html"><img
                                                src="${product.image}" /></a>
                                        <div
                                            class="actions position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-between">
                                            <div class="buttons d-flex gap-1 align-self-end p-2">
                                                <div class="button" onclick="addtocart(${product.productId})">
                                                    <div class="blurred"></div>
                                                    <span class="bi bi-basket"></span>
                                                </div>
                                                <div class="button">
                                                    <div class="blurred"></div>
                                                    <span class="bi bi-bar-chart"></span>
                                                </div>
                                            </div>
                                            <button data-bs-toggle="modal" data-bs-target="#quickViewModal"
                                                class="btn rounded-0 view bg-primary text-white text-center p-1">Quick
                                                View
                                            </button>
                                        </div>
                                    </div>
                                    <div class="product-content d-flex flex-column">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="name">${product.name}</span>
                                            <span class="like  bi bi-heart"></span>
                                        </div>
                                        <span class="stars">
                                            <span class="bi bi-star-fill"></span>
                                            <span class="bi bi-star-fill"></span>
                                            <span class="bi bi-star-fill"></span>
                                            <span class="bi bi-star-fill"></span>
                                            <span class="bi bi-star-fill"></span>
                                        </span>
                                        <span class="price">${product.price.toFixed(2)}</span>
                                    </div>
                                </div>`;
            carousel.innerHTML += item
        })
    }

    return {saveProductsInStorage, getProducts, displayProducts}
}


const ecom = ecommerceManagement();
//ecom.saveProductsInStorage()
ecom.displayProducts();

function addtocart(productId) {
    console.log(productId)
}

const carts = [
    {
        productId: 1,
        productName: "Black Bag",
        price: 100,
        qty: 1,
        img: ''
    },
    {
        productId: 2,
        productName: "Black Bag",
        price: 300,
        qty: 2,
        img: ''
    }
];

function getProductDetails(id) {
    const data = {}
}

