let cart = JSON.parse(localStorage.getItem("cart")) || [];

// AJOUT PRODUIT
function addToCart(name, price) {

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
}

// SUPPRESSION PRODUIT
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    updateCart();
}

// VIDER PANIER
function clearCart() {
    cart = [];
    saveCart();
    updateCart();
}

// SAUVEGARDE
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// UPDATE UI
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const total = document.getElementById("total");
    const count = document.getElementById("cart-count");

    let totalPrice = 0;
    let totalItems = 0;

    if (cartItems) cartItems.innerHTML = "";

    cart.forEach(item => {

        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;

        if (cartItems) {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <p>${item.name}</p>
                    <p>${item.quantity} x ${item.price}€</p>
                    <button onclick="removeFromCart('${item.name}')">❌</button>
                </div>
            `;
        }

    });

    if (total) total.innerText = totalPrice.toFixed(2);
    if (count) count.innerText = totalItems;
}

// INIT
updateCart();