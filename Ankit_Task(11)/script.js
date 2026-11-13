const PRODUCTS = {
  sprint: { name: "Seven Sprint Runner", price: 4999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80" },
  classic: { name: "Thala Street Classic", price: 3799, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80&sat=-65" },
  cloud: { name: "Seven Cloud Walk", price: 4299, image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=300&q=80" }
};
const readCart = () => {
  try { return JSON.parse(localStorage.getItem("thala7Cart") || "{}"); }
  catch { return {}; }
};
const saveCart = cart => localStorage.setItem("thala7Cart", JSON.stringify(cart));
const money = value => "₹" + Math.round(value).toLocaleString("en-IN");

function addItem(id, quantity = 1) {
  const cart = readCart();
  cart[id] = (cart[id] || 0) + quantity;
  saveCart(cart);
  updateCartCount();
  alert(`${PRODUCTS[id].name} added to your cart.`);
}
function updateCartCount() {
  const count = Object.values(readCart()).reduce((sum, qty) => sum + qty, 0);
  document.querySelectorAll("#cartCount").forEach(el => el.textContent = count);
}
function getTotals() {
  const cart = readCart();
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => sum + (PRODUCTS[id]?.price || 0) * qty, 0);
  const discount = sessionStorage.getItem("thalaCoupon") === "THALA10" ? subtotal * .10 : 0;
  const taxes = Math.round((subtotal - discount) * .05);
  return { subtotal, discount, taxes, total: subtotal - discount + taxes };
}
function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;
  const cart = readCart();
  const entries = Object.entries(cart).filter(([id, qty]) => PRODUCTS[id] && qty > 0);
  if (!entries.length) {
    container.innerHTML = '<div class="empty-cart">Your cart is empty.<br><br><a class="text-link" href="product.html">Explore sneakers →</a></div>';
  } else {
    container.innerHTML = entries.map(([id, qty]) => {
      const p = PRODUCTS[id];
      return `<div class="cart-row">
        <div class="cart-product"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>Size: 8 · In stock</small></div></div>
        <div class="quantity-control"><button data-action="minus" data-id="${id}" aria-label="Decrease quantity">−</button><span>${qty}</span><button data-action="plus" data-id="${id}" aria-label="Increase quantity">+</button></div>
        <strong>${money(p.price * qty)}</strong><button class="remove-item" data-action="remove" data-id="${id}" aria-label="Remove item">×</button>
      </div>`;
    }).join("");
  }
  updateTotals();
}
function updateTotals() {
  const t = getTotals();
  const values = { subtotal: money(t.subtotal), taxes: money(t.taxes), discount: money(t.discount), total: money(t.total), payTotal: money(t.total),
    checkoutSubtotal: money(t.subtotal), checkoutTaxes: money(t.taxes), checkoutDiscount: money(t.discount),
    checkoutGrandTotal: money(t.total), checkoutTotal: money(t.total) };
  Object.entries(values).forEach(([id, value]) => { const el = document.getElementById(id); if (el) el.textContent = value; });
}
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  document.querySelectorAll(".add-to-cart").forEach(btn => btn.addEventListener("click", () => addItem(btn.dataset.id)));
  const detailAdd = document.getElementById("detailAdd");
  if (detailAdd) detailAdd.addEventListener("click", () => addItem("sprint", Number(document.getElementById("productQty").value)));
  document.querySelectorAll(".size").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".size").forEach(item => item.classList.remove("active")); btn.classList.add("active");
  }));
  document.querySelectorAll(".gallery-thumb img").forEach(img => img.parentElement.addEventListener("click", () => {
    const main = document.getElementById("mainProductImage"); if (main) main.src = img.src;
  }));
  const cartItems = document.getElementById("cartItems");
  if (cartItems) {
    renderCart();
    cartItems.addEventListener("click", event => {
      const btn = event.target.closest("button[data-action]"); if (!btn) return;
      const cart = readCart(), id = btn.dataset.id, action = btn.dataset.action;
      if (action === "plus") cart[id] = (cart[id] || 0) + 1;
      if (action === "minus") cart[id] = Math.max(0, (cart[id] || 0) - 1);
      if (action === "remove" || cart[id] === 0) delete cart[id];
      saveCart(cart); updateCartCount(); renderCart();
    });
  }
  const coupon = document.getElementById("applyCoupon");
  if (coupon) coupon.addEventListener("click", () => {
    const code = document.getElementById("couponInput").value.trim().toUpperCase();
    const message = document.getElementById("couponMessage");
    if (code === "THALA10") { sessionStorage.setItem("thalaCoupon", code); message.textContent = "Coupon applied! 10% discount added."; message.style.color = "#319765"; }
    else { sessionStorage.removeItem("thalaCoupon"); message.textContent = "Invalid code. Try THALA10."; message.style.color = "#d45b5b"; }
    updateTotals();
  });
  document.querySelectorAll(".method").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".method").forEach(item => item.classList.remove("active")); btn.classList.add("active");
    const method = btn.dataset.method, cardFields = document.getElementById("cardFields"), msg = document.getElementById("methodMessage");
    if (cardFields) cardFields.hidden = method !== "Card";
    if (msg) { msg.hidden = method === "Card"; msg.innerHTML = `Selected payment method: <strong>${method}</strong>. This is a demo checkout; no payment will be processed.`; }
  }));
  const paymentForm = document.getElementById("paymentForm");
  if (paymentForm) paymentForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("email");
    if (!email.value || !email.checkValidity()) { email.focus(); alert("Please enter a valid email address."); return; }
    alert("This is a front-end demo. No real payment has been taken. Thank you!");
  });
});