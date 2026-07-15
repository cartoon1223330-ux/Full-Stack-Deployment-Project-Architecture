const productContainer = document.getElementById("products");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(product) {
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
alert(product.name + " added to cart");
}

function displayProducts() {

productContainer.innerHTML = "";

products.forEach(product => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<img src="${product.image}" alt="${product.name}">

<div class="card-body">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<button>Add to Cart</button>

</div>
`;

card.querySelector("button").addEventListener("click", () => addToCart(product));

productContainer.appendChild(card);

});

}

displayProducts();
updateCartCount();
