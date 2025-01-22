// Variables globales
let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Función para guardar productos en Local Storage
function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Función para guardar el carrito en Local Storage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Mostrar productos
function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Precio: $${product.price}</p>
      <p>Descuento: ${product.discount}%</p>
      <button onclick="addToCart(${index})">Añadir al carrito</button>
      <button onclick="editProduct(${index})">Editar</button>
      <button onclick="deleteProduct(${index})">Eliminar</button>
    `;
    productList.appendChild(card);
  });
}

// Mostrar carrito
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const cartSummary = document.getElementById("cartSummary");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>El carrito está vacío.</p>";
    cartSummary.innerHTML = "";
    return;
  }

  // Crear tabla del carrito
  const table = document.createElement("table");
  table.className = "cart-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Título</th>
        <th>Piezas</th>
        <th>Subtotal</th>
        <th>Descuento</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  let subtotal = 0;
  let totalDiscount = 0;

  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    const itemSubtotal = item.price * item.quantity;
    const itemDiscount = (itemSubtotal * item.discount) / 100;

    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.quantity}</td>
      <td>$${itemSubtotal.toFixed(2)}</td>
      <td>-$${itemDiscount.toFixed(2)}</td>
      <td><button onclick="removeFromCart(${index})">Eliminar</button></td>
    `;
    tbody.appendChild(row);

    subtotal += itemSubtotal;
    totalDiscount += itemDiscount;
  });

  const total = subtotal - totalDiscount;

  cartItems.appendChild(table);

  cartSummary.innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Descuento total: -$${totalDiscount.toFixed(2)}</p>
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
  `;
}
// Añadir producto
document.getElementById("productForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseInt(document.getElementById("discount").value);
  const image = document.getElementById("image").value;

  products.push({ title, price, discount, image });
  saveProductsToLocalStorage();
  displayProducts();

  document.getElementById("productForm").reset();
});

// Añadir al carrito
function addToCart(index) {
  const product = products[index];
  const cartItem = cart.find((item) => item.title === product.title);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCartToLocalStorage();
  displayCart();
}

// Eliminar producto
function deleteProduct(index) {
  products.splice(index, 1);
  saveProductsToLocalStorage();
  displayProducts();
}

// Editar producto
function editProduct(index) {
  const product = products[index];
  const title = prompt("Editar título:", product.title);
  const price = prompt("Editar precio:", product.price);
  const discount = prompt("Editar descuento (%):", product.discount);
  const image = prompt("Editar URL de la imagen:", product.image);

  if (title && price && discount && image) {
    products[index] = {
      title,
      price: parseFloat(price),
      discount: parseInt(discount),
      image,
    };
    saveProductsToLocalStorage();
    displayProducts();
  }
}

// Eliminar del carrito
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToLocalStorage();
  displayCart();
}

// Ordenar productos por nombre
function sortProductsByName() {
  products.sort((a, b) => a.title.localeCompare(b.title));
  saveProductsToLocalStorage();
  displayProducts();
}

// Ordenar productos por precio
function sortProductsByPrice() {
  products.sort((a, b) => a.price - b.price);
  saveProductsToLocalStorage();
  displayProducts();
}

// Cargar datos al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  displayCart();
});