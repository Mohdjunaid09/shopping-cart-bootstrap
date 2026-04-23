const products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Watch", price: 2000 },
    { id: 3, name: "Bag", price: 1500 }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");

products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
        <div class="card mb-4">
            <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">₹${product.price}</p>
                <button class="btn btn-primary" onclick="addToCart('${product.name}', ${product.price})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;

    productList.appendChild(col);
});

function addToCart(name, price) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `${name} - ₹${price}`;
    cartItems.appendChild(li);
}
