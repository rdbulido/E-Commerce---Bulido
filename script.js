let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${item.productName} - P: ${item.price}`;
        cartItemsContainer.appendChild(div);
    });
}

function checkout() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    const receiptContent = `
        <p>Thank you for your purchase!</p>
        <p>Total: P: ${total}</p>
    `;
    document.getElementById('receipt-content').innerHTML = receiptContent;
    document.getElementById('receipt').style.display = 'block';
    cart = [];
    displayCart();
}
