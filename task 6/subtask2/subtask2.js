let colors = ["red", "blue", "green", "black", "white"];

const rawInput = document.querySelector("#colorInput");
const btn = document.querySelector("#changeColorButton");
btn.addEventListener("click", () => {
  let input = rawInput.value.trim().toLowerCase();
  if (input !== "" && colors.includes(input)) {
    document.body.style.backgroundColor = input;
    console.log(colors.includes(input));
  } else {
    alert("please enter a valid color");
  }
  //document.body.style.backgroundColor = "red";
});
