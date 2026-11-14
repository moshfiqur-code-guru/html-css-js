$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 3,
        nav: true,
        dots: false
    });
});

const toastLiveExample = document.getElementById('liveToast')


const cartFooter = document.getElementById("cart-footer");
const carousel = document.getElementById("carousel-items");
let cartContainer = document.querySelector("#cart-table-items");
cartFooter.style.display = "none"
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

function displayToaster() {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()

}

function Cart() {

    //private closure state
    let cartItems = JSON.parse(localStorage.getItem("carts")) || []
    let totalPrice = 0;
    let totalItem = 0;

    function saveCart() {
        localStorage.setItem("carts", JSON.stringify(cartItems))
    }

    //================
    //CART CALCULATION
    //=============
    function calculateCart() {
        const totalItem = cartItems.reduce((totalItem, cartItem) => totalItem + cartItem.qty, 0) ?? 0;
        const totalPrice = cartItems.reduce((price, cartItem) => price + (cartItem.price * cartItem.qty), 0) ?? 0;
        return {totalItem, totalPrice}
    }

    //================
    //ADD ITEM INTO CART
    //=============
    function addToCart(qty, product, type) {
        if (!Number(qty) || qty <= 0) return;
        const existingProduct = cartItems.find(item => item.productId === product.productId);
        let absQty = Math.floor(Number(qty))
        if (existingProduct) {
            let updatedQty = type === "increment" ? absQty : -absQty
            existingProduct["qty"] = Math.max(1, (existingProduct.qty + updatedQty))
        } else {
            cartItems.push({...product, qty: absQty});
        }
        saveCart()
    }

    function deleteCart(productId) {
        const carts = cartItems.slice();
        const updatedItems = carts.filter(item => item.productId !== productId);
        cartItems = updatedItems;
        saveCart()
    }

    return {
        totalPrice,
        get cartItems() {
            return cartItems
        },
        addToCart,
        calculateCart,
        deleteCart
    }

}

const cart = Cart();

function displayCart() {
    const {totalItem, totalPrice} = cart.calculateCart();
    let cartQty = document.getElementById("cart-qty");
    let subtotal = document.getElementById("subtotal");
    let totalspan = document.getElementById("totalItem");
    let cartContainer = document.querySelector(".cart-items");

    cartContainer.innerHTML = "";
    cartQty.innerText = totalItem.toString();
    subtotal.innerText = '$' + totalPrice.toFixed(2);
    totalspan.innerText = totalItem + ((totalItem === 0 || totalItem > 1) ? " items" : " item")

    if (cart.cartItems.length === 0) {
        cartContainer.innerHTML =
            ` <div class="text-center py-4">
                <i class="bi bi-cart-x fs-1 text-secondary"></i>
                <p class="mb-0 mt-2 text-muted">
                    No items added to the cart.
                </p>
            </div>`;
        cartFooter.style.display = "none"
    } else {
        cart.cartItems.map(product => {
            const template = document.createElement("template")
            template.innerHTML = `<div
                                                        class="cart-item d-flex align-items-center justify-content-between border-1 border-bottom pb-2">
                                                    <img class="img-fluid cart-thumb"
                                                         src="https://img.drz.lazcdn.com/static/bd/p/9b8deff622ce4918404fc833f1fb4abe.jpg_960x960q80.jpg_.webp"/>
                                                    <div class="name">
                                                        <span>${product.name}</span>
                                                        <span class="d-block price">${'$' + product.price.toFixed(2)}</span>
                                                    </div>
                                                    <div class="qty d-flex align-items-center gap-1">
                                                        <div
                                                                class="qty-navigator d-flex flex-column justify-content-center align-items-center">
                                                            <span  class="bi bi-chevron-up increment qty-updater" data-qty="increment"></span>
                                                            <span>${product.qty}</span>
                                                            <span class="bi bi-chevron-down qty-updater" data-qty="decrement"></span>
                                                        </div>
                                                        <span class="bi bi-x"></span>
                                                        <span class="text-muted">${'$' + product.price.toFixed(2)}</span>
                                                        <span>=</span>
                                                        <span class="itemTotalPrice">${'$' + (product.price * product.qty).toFixed(2)}</span>
                                                    </div>
                                                    <div class="close">
                                                        <button class="border-0 bg-transparent"><span
                                                                class="bi bi-x"></span></button>
                                                    </div>
                                                </div>`
            const item = template.content.firstElementChild;
            // item.querySelector(".increment").addEventListener("click", () => {
            //     addToCart(1, product);
            // });
            const updaters = item.querySelectorAll(".qty-updater");
            updaters.forEach(button => button.addEventListener("click", function () {
                const type = event.target.dataset.qty;
                cart.addToCart(1, product, type);
                displayCart();
                if (cartContainer) {
                    displayCartPageCart()
                }
            }));
            item.querySelector(".close button").addEventListener("click", () => {
                cart.deleteCart(product.productId);
                displayCart();
                if (cartContainer) {
                    displayCartPageCart()
                }
            })
            cartContainer.appendChild(item)
        })
        cartFooter.style.display = "block"
    }
}


function EcommerceManagement() {

    //PRIVATE PRODUCTS
    const products = JSON.parse(localStorage.getItem("products")) || [];

    //===============
    // SAVE PRODUCTS
    // ============
    function saveProductsInStorage() {
        const productJSON = JSON.stringify(prdts)
        localStorage.setItem("products", productJSON);
    }

    function displayProducts() {

        carousel.innerHTML = "";
        products.forEach(product => {
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
            item.querySelector(".cartBtn").addEventListener("click", () => {
                cart.addToCart(1, product, "increment");
                displayToaster()
                displayCart()
            })
            carousel.appendChild(item)
        });
        displayCart()
    }

    return {saveProductsInStorage, displayProducts}
}


const ecommerceManagement = EcommerceManagement();
//ecommerceManagement.saveProductsInStorage()
if (carousel) {
    ecommerceManagement.displayProducts();
}



