const pageContent = document.getElementById('page-content');

const fetchHomepage = () => {
  fetch("index.html").then((response) => response.text())
  .then((html) => {
    document.body.innerHTML = html
  }).catch((error) => console.error(error))
}

const fetchConstruir = () => {
  fetch("pages/construir.html").then((response) => response.text())
  .then((html) => {
    pageContent.innerHTML = html
  }).catch((error) => console.error(error))
}

document.getElementById('toConstruir').addEventListener('click', () => {
  history.pushState({}, "", "/construir")
  fetchConstruir()
})