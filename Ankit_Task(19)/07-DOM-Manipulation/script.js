const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");

greetButton.addEventListener("click", () => {
  const userName = nameInput.value.trim();
  greeting.textContent = userName ? `Hello, ${userName}!` : "Hello, Guest!";
});

// DOM event handling: each box gets its matching background colour on click.
document.querySelectorAll(".colour-box").forEach((box) => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = box.dataset.colour;
    box.style.color = box.dataset.colour === "yellow" ? "#202938" : "white";
  });
});
