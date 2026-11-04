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


function Cart() {
    let totalItem = 0;
    let totalPrice = 0;
    let cartItems = [];

    function addToCart(qty, product) {
        totalPrice += product.price * qty;
        totalItem += qty;
        cartItems.push({ ...product, qty: qty });
        displayCart();
    }

    function displayCart() {
        let cartQty = document.getElementById("cart-qty");
        let subtotal = document.getElementById("subtotal");
        let cart = document.querySelector(".cart-items");
        cart.innerHTML = "";
        cartQty.innerText = "0";
        subtotal.innerText = "0";
        cartQty.innerText = totalItem;
        subtotal.innerText = '$' + totalPrice.toFixed(2);

        if (cartItems.length === 0) {
            cart.innerHTML =
                ` <div class="text-center py-4">
                <i class="bi bi-cart-x fs-1 text-secondary"></i>
                <p class="mb-0 mt-2 text-muted">
                    No items added to the cart.
                </p>
            </div>`;
            return;
        }

        else {
            cart.innerHTML = cartItems.map(product => (
                `<div
                                                        class="cart-item d-flex align-items-center justify-content-between border-1 border-bottom pb-2">
                                                    <img class="img-fluid"
                                                         src="https://img.drz.lazcdn.com/static/bd/p/9b8deff622ce4918404fc833f1fb4abe.jpg_960x960q80.jpg_.webp"/>
                                                    <div class="name">
                                                        <span>${product.name}</span>
                                                        <span class="d-block price">${'$' + product.price.toFixed(2)}</span>
                                                    </div>
                                                    <div class="qty d-flex align-items-center gap-1">
                                                        <div
                                                                class="qty-navigator d-flex flex-column justify-content-center align-items-center">
                                                            <span class="bi bi-chevron-up"></span>
                                                            <span>${product.qty}</span>
                                                            <span class="bi bi-chevron-down"></span>
                                                        </div>
                                                        <span class="bi bi-x"></span>
                                                        <span class="text-muted">${'$' + product.price.toFixed(2)}</span>
                                                        <span>=</span>
                                                        <span>${'$' + (product.price * product.qty).toFixed(2)}</span>
                                                    </div>
                                                    <div class="close">
                                                        <button class="border-0 bg-transparent"><span
                                                                class="bi bi-x"></span></button>
                                                    </div>
                                                </div>`
            )).join("")
        }
    }

    return { totalPrice, totalItem, cartItems, addToCart, displayCart }
}

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
        const cart = Cart()
        const products = getProducts();
        const carousel = document.getElementById("carousel-items");
        carousel.innerHTML = "";

        // h1.textContent = ""
        products.map(product => {
            const template = document.createElement("template")
            template.innerHTML = `<div class="item border border-1">
                                    <div class="product-thumb position-relative">
                                        <a href="details.html"><img
                                                src="${product.image}" /></a>
                                        <div
                                            class="actions position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-between">
                                            <div class="buttons d-flex gap-1 align-self-end p-2">
                                                <div class="button cartBtn">
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
            const item = template.content.firstElementChild;
            item.querySelector(".cartBtn").addEventListener("click", () => cart.addToCart(3, product))
            carousel.appendChild(item)

        })

    }


    return { saveProductsInStorage, getProducts, displayProducts }
}


const ecom = ecommerceManagement();
//ecom.saveProductsInStorage()
ecom.displayProducts();

const cart = Cart();
cart.displayCart()
