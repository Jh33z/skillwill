//TASK 6
//subtask1
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
modal.style.display = "none";
// let display = false;
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
