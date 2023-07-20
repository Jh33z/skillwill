// Function to change the body background color
function changeBodyColor(color) {
  document.body.style.backgroundColor = color;
}

// Function to validate the input color
function validateColor(inputColor) {
  const allowedColors = ["red", "blue", "green", "black", "white"];

  if (allowedColors.includes(inputColor.toLowerCase())) {
    return true;
  } else {
    alert(
      "Invalid color! Please enter one of the following colors: red, blue, green, black, white."
    );
    return false;
  }
}

// Event listener for the button click
document
  .getElementById("changeColorButton")
  .addEventListener("click", function () {
    const colorInput = document.getElementById("colorInput").value;

    if (validateColor(colorInput)) {
      changeBodyColor(colorInput.toLowerCase());
    }
  });
