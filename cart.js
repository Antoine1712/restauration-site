/* ================= PANIER GLOBAL (LOCALSTORAGE) ================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= SAUVEGARDE ================= */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

/* ================= AJOUT ================= */
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

/* ================= SUPPRIMER ================= */
function removeItem(name) {
    cart = cart.filter(item => item.name !== name);

    saveCart();
    updateCart();
}

/* ================= DIMINUER ================= */
function decreaseItem(name) {

    const item = cart.find(item => item.name === name);
    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {
        removeItem(name);
    } else {
        saveCart();
        updateCart();
    }
}

/* ================= AUGMENTER ================= */
function increaseItem(name) {

    const item = cart.find(item => item.name === name);
    if (!item) return;

    item.quantity += 1;

    saveCart();
    updateCart();
}

/* ================= UPDATE UI ================= */
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const total = document.getElementById("total");
    const count = document.getElementById("cart-count");

    let totalPrice = 0;
    let totalItems = 0;

    // sécurisation (évite crash sur pages sans panier)
    if (cartItems) cartItems.innerHTML = "";

    cart.forEach(item => {

        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;

        if (cartItems) {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <p><strong>${item.name}</strong></p>
                        <p>${item.price.toFixed(2)} €</p>
                    </div>

                    <div class="cart-controls">
                        <button onclick="decreaseItem('${item.name}')">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseItem('${item.name}')">+</button>
                    </div>

                    <button onclick="removeItem('${item.name}')">❌</button>
                </div>
            `;
        }
    });

    if (total) total.innerText = totalPrice.toFixed(2);
    if (count) count.innerText = totalItems;
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
    updateCart();
});