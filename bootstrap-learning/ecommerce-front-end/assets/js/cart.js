
function displayCartPageCart() {
    const { totalItem, totalPrice } = cart.calculateCart();
    // let cartQty = document.getElementById("cart-qty");
    // let subtotal = document.getElementById("subtotal");
    // let totalspan = document.getElementById("totalItem");
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
            // item.querySelector(".increment").addEventListener("click", () => {
            //     addToCart(1, product);
            // });
            const updaters = item.querySelectorAll(".qty-updater");
            updaters.forEach(button => button.addEventListener("click", function () {
                const type = event.target.dataset.qty;
                cart.addToCart(1, product, type);
                displayCart();
            }));
            item.querySelector(".close button").addEventListener("click", () => {
                cart.deleteCart(product.productId);
                displayCart();
            })
            cartContainer.appendChild(item)
        })
    }
}

displayCartPageCart();
