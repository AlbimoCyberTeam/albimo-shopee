const productList = document.getElementById("productList");

firebase.database().ref("products").on("value", (snapshot) => {

productList.innerHTML = "";

snapshot.forEach((child) => {

const product = child.val();

productList.innerHTML += `

<div class="product-card">

<img src="${product.image}" class="product-image">

<h3>${product.name}</h3>

<p>Rp ${product.price}</p>

<button onclick="addToCart(
'${child.key}',
'${product.name}',
'${product.price}',
'${product.image}'
)">
Tambah Keranjang
</button>

</div>

`;

});

});

function addToCart(id, name, price, image) {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
id,
name,
price,
image
});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Produk masuk keranjang");

}
