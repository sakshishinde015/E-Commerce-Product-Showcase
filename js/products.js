const productsContainer = document.getElementById("productsContainer");
const noResults = document.getElementById("noResults");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");
const searchInput = document.getElementById("searchInput");

// ✅ Demo products with corrected image paths
let allProducts = [
  { id: 1, name: "Classic T-Shirt", description: "100% cotton t-shirt in multiple colors", price: 25, oldPrice: 30, rating: 4.2, image: "images/classic-T shirt.jpg", category: "fashion", labels: ["new"] },
  { id: 2, name: "Smartphone", description: "Latest 5G smartphone with OLED display", price: 699, rating: 4.7, image: "images/smartphone.jpg", category: "electronics", labels: ["best-seller"] },
  { id: 3, name: "Wall Lamp", description: "Modern home decor wall lamp", price: 45, oldPrice: 60, rating: 4.0, image: "images/wall lamp.jpg", category: "home_decor", labels: [] },
  { id: 4, name: "Eco-Friendly Tote Bag", description: "Made from 100% recycled material.", category: "fashion", price: 29.99, oldPrice: 39.99, rating: 4.6, image: "images/tote.jpg", labels: ["sale", "best-seller"] },
  { id: 5, name: "Wireless Headphones", description: "Noise-canceling, long battery life.", category: "electronics", price: 89.99, rating: 4.2, image: "images/headphones.jpg", labels: ["new"] },
  { id: 6, name: "Ceramic Vase", description: "Elegant handcrafted ceramic vase.", category: "home_decor", price: 45.00, rating: 4.0, image: "images/vase.jpg", labels: [] },
  { id: 7, name: "Smartwatch", description: "Fitness tracking and notifications.", category: "electronics", price: 129.99, oldPrice: 149.99, rating: 4.5, image: "images/smartwatch.jpg", labels: ["sale"] },
  { id: 8, name: "Leather Jacket", description: "Premium leather, stylish design.", category: "fashion", price: 199.99, rating: 4.8, image: "images/jacket.jpg", labels: ["best-seller"] },
  { id: 9, name: "Silk Scarf", description: "Soft and luxurious silk scarf.", category: "accessories", price: 24.99, oldPrice: 34.99, rating: 4.3, image: "images/scarf.jpg", labels: ["sale", "new"] },
  { id: 10, name: "Portable Charger", description: "High-capacity power bank for on-the-go charging.", category: "electronics", price: 39.99, rating: 4.1, image: "images/charger.jpg", labels: [] },
  { id: 11, name: "Throw Pillow Set", description: "Set of two cozy decorative pillows.", category: "home_decor", price: 59.99, oldPrice: 79.99, rating: 4.4, image: "images/pillows.jpg", labels: ["sale"] },
  { id: 12, name: "Denim Jeans", description: "Comfortable slim-fit denim jeans.", category: "fashion", price: 49.99, rating: 4.7, image: "images/jeans.jpg", labels: ["best-seller"] },
  { id: 13, name: "Sunglasses", description: "Stylish UV-protective sunglasses.", category: "accessories", price: 19.99, rating: 4.0, image: "images/sunglasses.jpg", labels: ["new"] },
  { id: 14, name: "Bluetooth Speaker", description: "Portable speaker with crisp sound quality.", category: "electronics", price: 69.99, oldPrice: 89.99, rating: 4.6, image: "images/speaker.jpg", labels: ["sale"] },
  { id: 15, name: "Wall Art Print", description: "Modern abstract art print for home decor.", category: "home_decor", price: 34.99, rating: 4.2, image: "images/wall_art.jpg", labels: [] },
  { id: 16, name: "Knit Sweater", description: "Cozy knit sweater for all seasons.", category: "fashion", price: 59.99, rating: 4.5, image: "images/sweater.jpg", labels: ["new"] },
  { id: 17, name: "Leather Wallet", description: "Sleek leather wallet with multiple compartments.", category: "accessories", price: 29.99, oldPrice: 39.99, rating: 4.3, image: "images/wallet.jpg", labels: ["sale"] },
  { id: 18, name: "Table Lamp", description: "Modern table lamp with adjustable brightness.", category: "home_decor", price: 79.99, rating: 4.4, image: "images/lamp.jpg", labels: ["best-seller"] }
];

// ✅ Get cart and wishlist from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// ✅ Display products
displayProducts(allProducts);

function displayProducts(products) {
  productsContainer.innerHTML = "";
  if (products.length === 0) {
    noResults.classList.remove("d-none");
    return;
  } else {
    noResults.classList.add("d-none");
  }

  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col";

    const card = document.createElement("div");
    card.className = "card h-100 position-relative p-2 shadow-sm product-card";

    // Labels
    if (product.labels && product.labels.length > 0) {
      product.labels.forEach(label => {
        const badge = document.createElement("span");
        badge.className = `badge bg-primary position-absolute top-0 start-0 m-2`;
        badge.textContent = label.replace("-", " ").toUpperCase();
        card.appendChild(badge);
      });
    }

    card.innerHTML += `
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body text-center">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">
          ${product.oldPrice ? `<span class="text-muted text-decoration-line-through">$${product.oldPrice.toFixed(2)}</span>` : ""}
          <span class="fw-bold ms-2">$${product.price.toFixed(2)}</span>
        </p>
        <p class="card-text">⭐ ${product.rating}</p>
        <button class="btn btn-primary me-2 btn-add-cart" data-id="${product.id}">Add to Cart</button>
        <button class="btn btn-outline-primary btn-add-wishlist" data-id="${product.id}">Add to Wishlist</button>
      </div>
    `;
    col.appendChild(card);
    productsContainer.appendChild(col);
  });

  // ✅ Add event listeners for buttons
  document.querySelectorAll(".btn-add-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      addToCart(id);
    });
  });

  document.querySelectorAll(".btn-add-wishlist").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      addToWishlist(id);
    });
  });
}

// ✅ Add to cart function
function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  if (!cart.find(p => p.id === id)) {
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to Cart!`);
  } else {
    alert(`${product.name} is already in Cart.`);
  }
}

// ✅ Add to wishlist function
function addToWishlist(id) {
  const product = allProducts.find(p => p.id === id);
  if (!wishlist.find(p => p.id === id)) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`${product.name} added to Wishlist!`);
  } else {
    alert(`${product.name} is already in Wishlist.`);
  }
}

// ✅ Filter functionality
function filterProducts() {
  let filtered = allProducts;

  const category = categoryFilter.value;
  if (category !== "all") filtered = filtered.filter(p => p.category === category);

  const price = priceFilter.value;
  if (price !== "all") {
    filtered = filtered.filter(p => {
      if (price === "below50") return p.price < 50;
      if (price === "50to100") return p.price >= 50 && p.price <= 100;
      if (price === "above100") return p.price > 100;
    });
  }

  const rating = ratingFilter.value;
  if (rating !== "all") filtered = filtered.filter(p => p.rating >= parseFloat(rating));

  const search = searchInput.value.toLowerCase();
  if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search));

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
ratingFilter.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);
