document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', addComment)
  });
  let button = document.getElementById("like-button")
  let result = document.getElementById("like-count")
  let count = 0
  button.addEventListener("click", () => {
    count += 1
    result.innerHTML = `${parseInt(count)} Likes`
  })