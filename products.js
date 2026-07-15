const productContainer = document.getElementById("products");
const search = document.getElementById("search");
const category = document.getElementById("category");

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

function displayProducts(productList) {
  productContainer.innerHTML = "";

  productList.forEach(product => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <div class="card-body">
        <h3>${product.name}</h3>

        <p>${product.category}</p>

        <p class="price">₹${product.price}</p>

        <button>Add to Cart</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
      addToCart(product);
    });

    productContainer.appendChild(card);
  });
}

function filterProducts() {
  const searchText = search.value.toLowerCase();
  const selectedCategory = category.value;

  const filtered = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(searchText);
    const matchCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchName && matchCategory;
  });

  displayProducts(filtered);
}

search.addEventListener("input", filterProducts);
category.addEventListener("change", filterProducts);

displayProducts(products);
updateCartCount();
