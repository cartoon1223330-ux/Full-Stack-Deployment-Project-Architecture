const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="card">

<img src="${item.image}" alt="${item.name}">

<div class="card-body">

<h3>${item.name}</h3>

<p class="price">₹${item.price}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>

</div>

`;

});

totalPrice.innerHTML = `Total: ₹${total}`;

cartCount.textContent = cart.length;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

}

document.getElementById("clear-cart").addEventListener("click",()=>{

cart=[];

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

});

updateCart();
