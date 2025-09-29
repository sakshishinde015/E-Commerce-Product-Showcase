const wishlistContainer = document.querySelector("#wishlistContainer");
const noWishlistItems = document.querySelector("#noWishlistItems");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayWishlist() {
  wishlistContainer.innerHTML = "";
  if (wishlist.length === 0) {
    noWishlistItems.classList.remove("d-none");
    return;
  } else {
    noWishlistItems.classList.add("d-none");
  }

  wishlist.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card wishlist-card mb-3 h-100 shadow-sm">
        <img src="${encodeURI(product.image)}" class="card-img-top" alt="${product.name}" style="max-height:200px; object-fit:contain;">
        <div class="card-body text-center d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text mt-auto"><span class="fw-bold">$${product.price.toFixed(2)}</span></p>
          <button class="btn btn-primary btn-sm add-cart mb-2" data-index="${index}">
            <i class="bi bi-cart me-1"></i>Add to Cart
          </button>
          <button class="btn btn-remove btn-sm" data-index="${index}">
            <i class="bi bi-trash me-1"></i>Remove
          </button>
        </div>
      </div>
    `;
    wishlistContainer.appendChild(card);
  });

  addWishlistEvents();
}

function addWishlistEvents() {
  document.querySelectorAll(".btn-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.closest("button").dataset.index;
      wishlist.splice(idx, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      displayWishlist();
    });
  });

  document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const exist = cart.find(p => p.id === wishlist[idx].id);
      if (!exist) cart.push({ ...wishlist[idx], quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${wishlist[idx].name} added to cart`);
      
      // Optional: remove from wishlist after adding to cart
      wishlist.splice(idx, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      displayWishlist();
    });
  });
}

displayWishlist();
