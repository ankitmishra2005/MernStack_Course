// Mobile navigation toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isHidden = navLinks.classList.toggle("hidden");
  menuToggle.setAttribute("aria-expanded", String(!isHidden));
});

// Close the mobile menu after selecting a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navLinks.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Fixed chat widget
const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");

chatToggle.addEventListener("click", () => {
  const isOpening = chatPanel.classList.toggle("hidden") === false;
  chatToggle.textContent = isOpening ? "×" : "💬";
  chatToggle.setAttribute("aria-label", isOpening ? "Close chat" : "Open chat");
});
