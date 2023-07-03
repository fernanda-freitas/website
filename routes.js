const fetchHomepage = () => {
  fetch("index.html").then((response) => response.text())
  .then((html) => {
    document.body.innerHTML = html
  }).catch((error) => console.error(error))
}

const fetchProject1 = () => {
  fetch("project.html").then((response) => response.text())
  .then((html) => {
    document.body.innerHTML = html
  }).catch((error) => console.error(error))
}

// document.querySelector('.teste').addEventListener('click', () => {
//   history.pushState({}, "", "/project")
//   fetchProject1()
// })

// document.querySelector('.teste2').addEventListener('click', () => {
//   history.pushState({}, "", "/website")
//   fetchHomepage()
// })
