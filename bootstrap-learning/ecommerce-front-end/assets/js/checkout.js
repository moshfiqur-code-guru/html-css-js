


function displayProduct() {
    // calculateTotal()
    const { totalItem } = cart.calculateCart();
    let cartContainer = document.querySelector(".product-from-cart");
    let pdQty = document.getElementById("pd-qty");
    pdQty.innerText = totalItem + ((totalItem === 0 || totalItem > 1) ? " items" : " item")
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
            template.innerHTML = `<div
                                        class="d-flex align-items-center justify-content-between border-1 border-bottom pb-2">
                                        <img class="img-fluid" width="50"
                                            src="${product.image}" />
                                        <div class="pd-name">
                                            <span>${product.name}</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="d-flex flex-column justify-content-center align-items-center">
                                                <span class="pdQty">${product.qty}</span>
                                            </div>
                                            <span class="bi bi-x"></span>
                                            <span class="text-muted pdSubTotal">${'$' + product.price.toFixed(2)}</span>
                                            <span>=</span>
                                            <span class="pdTotal">${'$' + (product.price * product.qty).toFixed(2)}</span>
                                        </div>
                                    </div>
                                                `
            const item = template.content.firstElementChild;
            cartContainer.appendChild(item)
        })
    }
}

displayProduct();
displayCart();