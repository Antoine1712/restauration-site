let cart = [];

function toggleCart() {
    document.getElementById('cartPanel').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function updateCart() {

    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');
    const count = document.getElementById('cart-count');

    cartItems.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item) => {

        totalPrice += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>${item.price} €</p>
            </div>
        `;
    });

    total.innerText = totalPrice;
    count.innerText = cart.length;
}