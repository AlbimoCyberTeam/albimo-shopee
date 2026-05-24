const cartItems = document.getElementById("cartItems");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach((item) => {

cartItems.innerHTML += `

<div class="product-card">

<img src="${item.image}" class="product-image">

<h3>${item.name}</h3>

<p>Rp ${item.price}</p>

</div>

`;

});
