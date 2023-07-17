//task5
//subtask1
const btn = document.querySelector("#btn");
const divtext = document.querySelector("#divtext");
btn.addEventListener("click", () => {
  divtext.style.display = "none";
});

// //subtask2
const div = document.createElement("div");
div.id = "card";
const h2El = document.createElement("h2");
const h2Text = document.createTextNode("Gandalf");
const anchor = document.createElement("a");
anchor.setAttribute("href", "#");
const anchorText = document.createTextNode("Go to profile");

//anchor.appendChild(anchorAtt);
h2El.appendChild(h2Text);
anchor.appendChild(anchorText);
div.appendChild(h2El);
div.appendChild(anchor);
document.body.appendChild(div);
