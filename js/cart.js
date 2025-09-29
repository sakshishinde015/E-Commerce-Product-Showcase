const cartContainer = document.querySelector("#cartContainer");
const noCartItems = document.querySelector("#noCartItems");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    noCartItems.classList.remove("d-none");
    return;
  } else {
    noCartItems.classList.add("d-none");
  }

  cart.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "card cart-card mb-3 shadow-sm";
    card.innerHTML = `
      <div class="row g-0 align-items-center">
        <div class="col-md-4">
          <img src="${encodeURI(product.image)}" class="img-fluid rounded-start" alt="${product.name}" style="max-height:200px; object-fit:contain;">
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text mt-auto"><span class="fw-bold">$${product.price.toFixed(2)}</span></p>
            <div class="mb-2">
              Quantity: 
              <input type="number" class="quantity-input form-control d-inline-block" value="${product.quantity}" min="1" data-index="${index}" style="width:70px;">
            </div>
            <button class="btn btn-primary btn-sm move-wishlist mb-2" data-index="${index}">
              <i class="bi bi-heart me-1"></i>Move to Wishlist
            </button>
            <button class="btn btn-remove btn-sm" data-index="${index}">
              <i class="bi bi-trash me-1"></i>Remove
            </button>
          </div>
        </div>
      </div>
    `;
    cartContainer.appendChild(card);
  });

  addCartEvents();
}

function addCartEvents() {
  document.querySelectorAll(".btn-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.closest("button").dataset.index;
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    });
  });

  document.querySelectorAll(".quantity-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const idx = e.target.dataset.index;
      cart[idx].quantity = parseInt(e.target.value);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    });
  });

  document.querySelectorAll(".move-wishlist").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const exist = wishlist.find(p => p.id === cart[idx].id);
      if (!exist) wishlist.push({ ...cart[idx], quantity: 1 });
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      displayCart();
      alert(`${cart[idx]?.name || "Product"} moved to wishlist!`);
    });
  });
}

displayCart();
