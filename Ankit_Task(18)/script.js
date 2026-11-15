// Update the heading with the name entered by the user.
const greetingForm = document.getElementById("greeting-form");
const nameInput = document.getElementById("user-name");
const greetingHeading = document.getElementById("greeting");

greetingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = nameInput.value.trim();

  if (userName === "") {
    greetingHeading.textContent = "Hello";
    nameInput.focus();
    return;
  }

  greetingHeading.textContent = `Hello, ${userName}!`;
});

// Change each box's background to the colour written inside it.
const colorBoxes = document.querySelectorAll(".color-box");
const colorMessage = document.getElementById("color-message");

colorBoxes.forEach(function (box) {
  box.addEventListener("click", function () {
    const selectedColor = box.dataset.color;

    box.style.backgroundColor = selectedColor;
    colorMessage.textContent = `${selectedColor.charAt(0).toUpperCase()}${selectedColor.slice(1)} box selected!`;
  });
});
