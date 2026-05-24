function addProduct() {

const name = document.getElementById("productName").value;

const price = document.getElementById("productPrice").value;

const image = document.getElementById("productImage").value;

firebase.database().ref("products").push({

name,
price,
image

});

alert("Produk berhasil ditambahkan");

}

const adminProducts = document.getElementById("adminProducts");

firebase.database().ref("products").on("value", (snapshot) => {

adminProducts.innerHTML = "";

snapshot.forEach((child) => {

const product = child.val();

adminProducts.innerHTML += `

<div class="product-card">

<img src="${product.image}" class="product-image">

<h3>${product.name}</h3>

<p>Rp ${product.price}</p>

<button onclick="deleteProduct('${child.key}')">
Hapus
</button>

</div>

`;

});

});

function deleteProduct(id) {

firebase.database().ref("products/" + id).remove();

alert("Produk dihapus");

}