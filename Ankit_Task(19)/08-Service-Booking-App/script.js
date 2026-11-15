const services = [
  { id: 1, name: "Home Cleaning", price: 799, description: "Complete cleaning for your home.", icon: "🧹" },
  { id: 2, name: "Plumbing", price: 499, description: "Repairs for taps, pipes and leaks.", icon: "🔧" },
  { id: 3, name: "Electrical Repair", price: 599, description: "Help with switches and wiring.", icon: "💡" },
  { id: 4, name: "Beauty Service", price: 899, description: "At-home grooming and beauty care.", icon: "✨" }
];

let selectedServices = [];
let cart = [];

const serviceGrid = document.getElementById("serviceGrid");
const cartList = document.getElementById("cartList");
const totalAmount = document.getElementById("totalAmount");
const emptyMessage = document.getElementById("emptyMessage");
const selectionInfo = document.getElementById("selectionInfo");

function renderServices() {
  serviceGrid.innerHTML = services.map((service) => `
    <article class="service-card">
      <div class="service-art" aria-hidden="true">${service.icon}</div>
      <div class="service-content">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <div class="price-row"><span class="price">₹${service.price}</span></div>
        <div class="card-actions">
          <button class="skip-button" data-action="skip" data-id="${service.id}">Skip Item</button>
          <button class="secondary-button" data-action="add" data-id="${service.id}">Add Item</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  cartList.innerHTML = cart.map((service) => `
    <li class="cart-item">
      <span>${service.name}</span>
      <span>₹${service.price} <button class="remove-button" data-remove="${service.id}" aria-label="Remove ${service.name}">×</button></span>
    </li>
  `).join("");

  emptyMessage.hidden = cart.length > 0;
  const total = cart.reduce((sum, service) => sum + service.price, 0);
  totalAmount.textContent = `₹${total.toLocaleString("en-IN")}`;
}

function addToSelection(serviceId) {
  const service = services.find((item) => item.id === serviceId);
  if (!selectedServices.some((item) => item.id === serviceId) &&
      !cart.some((item) => item.id === serviceId)) {
    selectedServices.push(service);
    selectionInfo.textContent = `${selectedServices.length} service(s) selected. Click Add to Cart to add them.`;
  } else {
    selectionInfo.textContent = "This service is already selected or in your cart.";
  }
}

serviceGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const serviceId = Number(button.dataset.id);

  if (button.dataset.action === "add") {
    addToSelection(serviceId);
  } else {
    selectedServices = selectedServices.filter((item) => item.id !== serviceId);
    selectionInfo.textContent = "Service skipped.";
  }
});

document.getElementById("addToCartButton").addEventListener("click", () => {
  if (selectedServices.length === 0) {
    selectionInfo.textContent = "Please select at least one service first.";
    return;
  }
  cart = [...cart, ...selectedServices];
  selectedServices = [];
  renderCart();
  selectionInfo.textContent = "Selected services have been added to your cart.";
});

cartList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("button[data-remove]");
  if (!removeButton) return;
  const serviceId = Number(removeButton.dataset.remove);
  cart = cart.filter((item) => item.id !== serviceId);
  renderCart();
});

document.getElementById("bookNowButton").addEventListener("click", () => {
  document.getElementById("bookingForm").scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("fullName").focus();
});

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (cart.length === 0) {
    alert("Please add at least one service to your cart before booking.");
    return;
  }

  const customerName = document.getElementById("fullName").value.trim();
  const total = cart.reduce((sum, service) => sum + service.price, 0);
  alert(`Thank you, ${customerName}! Your demo booking is confirmed. Total: ₹${total}.`);
  console.log("Booking confirmed:", {
    customerName,
    services: cart.map((service) => service.name),
    total
  });

  cart = [];
  renderCart();
  event.target.reset();
});

document.getElementById("logoutButton").addEventListener("click", () => {
  document.getElementById("username").textContent = "Guest";
  alert("You have been logged out of this demo.");
});

renderServices();
renderCart();
