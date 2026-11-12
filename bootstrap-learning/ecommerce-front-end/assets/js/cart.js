let orderTotal = 0;


const DISCOUNT_CODE = {
    '#NDH-DOC-DOG': 100,
}

function getDiscountAmountByCode(code) {
    const amount = DISCOUNT_CODE[code];
    orderTotal -= amount;
}

function displayCartPageCart() {
    const {totalPrice} = cart.calculateCart();
    let subtotal = document.querySelector(".subtotal");
    let cartContainer = document.querySelector("#cart-table-items");
    cartContainer.innerHTML = "";
    subtotal.innerText = '$' + totalPrice.toFixed(2);
    orderTotal = subtotal;
    if (cart.cartItems.length === 0) {
        cartContainer.innerHTML =
            ` <div class="text-center py-4">
                <i class="bi bi-cart-x fs-1 text-secondary"></i>
                <p class="mb-0 mt-2 text-muted">
                    No items added to the cart.
                </p>
            </div>`;
    } else {
        cart.cartItems.map(product => {
            const template = document.createElement("template")
            template.innerHTML = `<tr valign="middle">
                                <td>
                                    <img class="img-fluid"
                                         src="${product.image}"/>
                                    ${product.name}

                                </td>
                                <td>${'$' + product.price.toFixed(2)}</td>
                                <td>
                                    <div class="qty d-flex align-items-center gap-1">
                                        <div class="qty-navigator d-flex flex-column justify-content-center align-items-center">
                                            <span class="bi bi-chevron-up qty-updater" data-qty="increment"></span>
                                            <span>${product.qty}</span>
                                            <span class="bi bi-chevron-down qty-updater" data-qty="decrement"></span>
                                        </div>
                                    </div>
                                </td>
                                <td>${'$' + (product.price * product.qty).toFixed(2)}</td>
                                <td>
                                    <div class="close">
                                        <button class="border-0 bg-transparent"><span
                                                class="bi bi-x"></span></button>
                                    </div>
                                </td>
                            </tr>
                                                `
            const item = template.content.firstElementChild;
            const updaters = item.querySelectorAll(".qty-updater");
            updaters.forEach(button => button.addEventListener("click", function () {
                const type = event.target.dataset.qty;
                cart.addToCart(1, product, type);
                displayCart();
                displayCartPageCart();
            }));
            item.querySelector(".close button").addEventListener("click", () => {
                cart.deleteCart(product.productId);
                displayCart();
                displayCartPageCart();
            })
            cartContainer.appendChild(item)
        })
    }
}

displayCartPageCart();

displayCart()
