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
  function addComment(e) {
    e.preventDefault()
    let addedComment = {
      content: e.target.comment_input.value,
    }
    fetchComment(addedComment)
    analyzeData(addedComment)
  }