let cart = [];

function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {

    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(i => i.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function increaseItem(id) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity++;
    saveCart();
    renderCart();
}

function decreaseItem(id) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
        removeItem(id);
    } else {
        saveCart();
        renderCart();
    }
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}