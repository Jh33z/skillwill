const div = document.querySelector("div");
const h2El = document.querySelector("h2");
const answers = document.querySelectorAll(".anchor");
const score = document.querySelector(".score");
let counter = 0;
for (let answer of answers) {
  answer.addEventListener("click", () => {
    if (answer.classList.contains("correct")) {
      answer.style.backgroundColor = "green";
      counter++;
      score.textContent = counter;
    } else {
      answer.style.backgroundColor = "red";
    }
    console.log(counter);
  });
}

const labels = document.querySelectorAll("label");
for (let answer of labels) {
  answer.addEventListener("click", () => {
    if (answer.classList.contains("correct")) {
      answer.style.backgroundColor = "green";
      counter++;
      score.textContent = counter;
    } else {
      answer.style.backgroundColor = "red";
    }
  });
}
