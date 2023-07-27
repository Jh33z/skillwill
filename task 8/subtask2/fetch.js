//subtask2

const container = document.querySelector("div");
function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
fetchData().then((datas) => {
  let html = "";
  for (let i = 0; i < datas.length; i++) {
    const post = datas[i];
    html += `<div class="post">
    <p class="userId">${post.userId}</p>
    <p class="id">${post.id}</p>
    <p class="title">${post.title}</p>
    <p class="body">${post.body}</p>
    `;
  }
  container.innerHTML = html;
});
