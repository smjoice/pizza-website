// Load the cart from localStorage or initialize it if it's empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(pizzaName, pizzaPrice) {
    // Check if the item is already in the cart
    let existingItem = cart.find(item => item.name === pizzaName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: pizzaName, price: pizzaPrice, quantity: 1 });
    }

    // Save cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${pizzaName} added to cart!`);
}
