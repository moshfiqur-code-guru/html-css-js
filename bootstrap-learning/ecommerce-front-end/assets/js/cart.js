
const DISCOUNT_CODE = {
    '#12345': 100,
    '#23456': 50,
    '#34567': 150,
    '#45678': 200
}
document.getElementById("apply-discount").addEventListener("click", calculateTotal);

function getDiscountAmountByCode() {

    const discountInput = document.getElementById("discount-code");
    const getCode = discountInput.value;

    if (DISCOUNT_CODE[getCode] !== undefined) {
        return DISCOUNT_CODE[getCode];

    } else {
        discountInput.value = "";
        discountInput.placeholder = "Invalid discount code";
        return 0;
    }
}

const shippingOptions = document.querySelectorAll(
    'input[name="shipping"]'
);

shippingOptions.forEach((radio) => {
    radio.addEventListener("change", calculateTotal);
});

function getShippingAmount() {
    const checkSipping = document.getElementById("sipping-form")
    const checked = checkSipping.querySelector('input[name="shipping"]:checked');
    console.log(checked.value)
    return Number(checked.value);
}

function calculateTotal() {
    const sipping = getShippingAmount();
    const DiscountedAmount = getDiscountAmountByCode()
    const { totalPrice } = cart.calculateCart();
    let subtotal = document.querySelector(".subtotal");
    let discount = document.querySelector(".discount");
    let finalPrice = document.querySelector(".final-price");
    subtotal.innerText = '$' + totalPrice.toFixed(2);
    discount.innerText = '- $' + DiscountedAmount.toFixed(2);
    finalPrice.innerText = '$' + (totalPrice - DiscountedAmount + sipping).toFixed(2);
}

function displayCartPageCart() {
    calculateTotal()
    let cartContainer = document.querySelector("#cart-table-items");
    cartContainer.innerHTML = "";
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
