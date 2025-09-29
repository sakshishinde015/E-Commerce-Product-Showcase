const featuredContainer = document.querySelector("#featuredProducts");
let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

async function loadProducts() {
  try {
    const res = await fetch("data/products.json");
    products = await res.json();
    displayFeatured(products);
  } catch (err) {
    console.error("Error loading products:", err);
  }
}

function displayFeatured(products) {
  featuredContainer.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "col-md-3 mb-4";
    card.innerHTML = `
      <div class="card product-card shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h6>${product.name}</h6>
          <p class="text-muted">$${product.price}</p>
          <button class="btn btn-sm btn-primary add-cart" data-id="${product.id}"><i class="bi bi-cart me-1"></i>Add to Cart</button>
          <button class="btn btn-sm btn-outline-primary add-wishlist mt-1" data-id="${product.id}"><i class="bi bi-heart me-1"></i>Add to Wishlist</button>
        </div>
      </div>
    `;
    featuredContainer.appendChild(card);
  });

  document.querySelectorAll(".add-cart").forEach(btn => btn.addEventListener("click", addToCart));
  document.querySelectorAll(".add-wishlist").forEach(btn => btn.addEventListener("click", addToWishlist));
}

function addToCart(e) {
  const id = parseInt(e.target.dataset.id);
  const product = products.find(p => p.id === id);
  const exist = cart.find(p => p.id === id);
  if (!exist) {
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  } else {
    alert(`${product.name} is already in cart`);
  }
}

function addToWishlist(e) {
  const id = parseInt(e.target.dataset.id);
  const product = products.find(p => p.id === id);
  const exist = wishlist.find(p => p.id === id);
  if (!exist) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`${product.name} added to wishlist`);
  } else {
    alert(`${product.name} is already in wishlist`);
  }
}

loadProducts();
