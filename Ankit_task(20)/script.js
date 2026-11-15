// FreshFold Laundry Services - Task 20
// EmailJS setup instructions are provided in README.md.

const services = [
  { id: 1, name: "Wash & Fold", description: "Everyday washing, drying and neatly folded clothes.", price: 99, icon: "🧺" },
  { id: 2, name: "Dry Cleaning", description: "Gentle specialist care for delicate garments.", price: 199, icon: "👔" },
  { id: 3, name: "Ironing", description: "Crisp, wrinkle-free clothes ready to wear.", price: 49, icon: "♨️" },
  { id: 4, name: "Express Laundry", description: "A faster turnaround for your urgent laundry.", price: 149, icon: "⚡" },
  { id: 5, name: "Shoe Cleaning", description: "A careful clean to refresh your favourite shoes.", price: 129, icon: "👟" },
  { id: 6, name: "Blanket Cleaning", description: "Deep cleaning for blankets and bulky bedding.", price: 179, icon: "🛏️" }
];

let cart = [];

const serviceGrid = document.getElementById("serviceGrid");
const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");
const cartCount = document.getElementById("cartCount");

function renderServices() {
  serviceGrid.innerHTML = services.map(service => `
    <article class="service-card">
      <div class="service-visual" aria-hidden="true">${service.icon}</div>
      <div class="service-info">
        <h4>${service.name}</h4>
        <p>${service.description}</p>
        <div class="service-bottom">
          <span class="price">₹${service.price}</span>
          <div class="service-actions">
            <button class="skip-btn" type="button" data-action="skip" data-id="${service.id}">Skip Item</button>
            <button class="add-btn" type="button" data-action="add" data-id="${service.id}">Add Item +</button>
          </div>
        </div>
      </div>
    </article>`).join("");
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-cart"><span>🧺</span><strong>Your basket is empty</strong><small>Add a service to get started.</small></div>`;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div><strong>${item.name}</strong><small>₹${item.price} × ${item.quantity}</small></div>
        <div><strong>₹${item.price * item.quantity}</strong>
          <button class="remove-item" type="button" data-action="remove" data-id="${item.id}" aria-label="Remove ${item.name}">Remove</button>
        </div>
      </div>`).join("");
  }
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCount.textContent = count;
  totalAmount.textContent = `₹${total}`;
}

serviceGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  if (action === "add") {
    const service = services.find(item => item.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...service, quantity: 1 });
    renderCart();
  }
  // "Skip Item" intentionally leaves the basket unchanged.
});

cartItems.addEventListener("click", event => {
  const button = event.target.closest("button[data-action='remove']");
  if (!button) return;
  const id = Number(button.dataset.id);
  cart = cart.filter(item => item.id !== id);
  renderCart();
});

function getOrderSummary() {
  return cart.map(item => `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`).join("\n");
}

function setMessage(element, message, type) {
  element.textContent = message;
  element.className = `form-message ${type}`;
}

document.getElementById("bookingForm").addEventListener("submit", async event => {
  event.preventDefault();
  const message = document.getElementById("formMessage");
  const button = document.getElementById("bookButton");
  const form = event.currentTarget;

  if (cart.length === 0) {
    setMessage(message, "Please add at least one service to your basket before booking.", "error");
    return;
  }

  const formData = new FormData(form);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = {
    customer_name: formData.get("fullName"),
    customer_email: formData.get("email"),
    customer_phone: formData.get("phone"),
    pickup_date: formData.get("pickupDate"),
    order_items: getOrderSummary(),
    total_amount: `₹${total}`
  };

  button.disabled = true;
  button.textContent = "Processing...";

  // Add your EmailJS public key, service ID and template ID in README.md.
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

  try {
    if ([EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID].some(value => value.startsWith("YOUR_"))) {
      setMessage(message, "Booking details validated. Configure EmailJS in script.js to send the confirmation email.", "success");
      console.info("Demo booking (EmailJS not configured):", order);
    } else {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, order);
      setMessage(message, "Thank you for booking the service! We will get back to you soon. A confirmation email has been sent.", "success");
    }
    form.reset();
    cart = [];
    renderCart();
  } catch (error) {
    console.error("EmailJS error:", error);
    setMessage(message, "Your booking could not be emailed. Please check your EmailJS settings and try again.", "error");
  } finally {
    button.disabled = false;
    button.innerHTML = 'Book Now <span>→</span>';
  }
});

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("subscriberName").value.trim();
  document.getElementById("newsletterMessage").textContent = `Thanks${name ? `, ${name}` : ""}! You're on the FreshFold list.`;
  event.currentTarget.reset();
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.addEventListener("click", event => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const pickupDate = document.getElementById("pickupDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
pickupDate.min = localToday;

renderServices();
renderCart();
