// Function to calculate the average of numbers
function calculateAverage(numbers) {
  let sum = 0;
  let count = 0;

  for (let number of numbers) {
    if (!isNaN(number)) {
      sum += parseFloat(number);
      count++;
    }
  }

  if (count > 0) {
    return sum / count;
  } else {
    return NaN;
  }
}

// Event listener for the button click
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const numbersInput = document.getElementById("numbersInput").value;
    const numbersArray = numbersInput.split(":");

    const average = calculateAverage(numbersArray);

    if (!isNaN(average)) {
      document.getElementById(
        "result"
      ).textContent = `Average: ${average.toFixed(2)}`;
    } else {
      document.getElementById("result").textContent =
        "Invalid input! Please enter valid numbers separated by colons.";
    }
  });
