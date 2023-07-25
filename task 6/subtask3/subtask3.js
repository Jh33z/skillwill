let rawInput = document.querySelector("#numbersInput");
let btn = document.querySelector("#calculateButton");
let p = document.querySelector("#result");

btn.addEventListener("click", () => {
  let inputVal = rawInput.value.split(":");

  let sum = inputVal.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
  let average = sum / inputVal.length;

  // Set the result text inside the event listener
  p.textContent = "Sum: " + sum + ", Average: " + average.toFixed(2); // Assuming you want the average rounded to 2 decimal places
});
