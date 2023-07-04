// const fetchHomepage = () => {
//   fetch("index.html").then((response) => response.text())
//   .then((html) => {
//     document.body.innerHTML = html
//   }).catch((error) => console.error(error))
// }

// const fetchConstruir = () => {
//   fetch("pages/construir.html").then((response) => response.text())
//   .then((html) => {
//     pageContent.innerHTML = html
//   }).catch((error) => console.error(error))
// }

// document.getElementById('toConstruir').addEventListener('click', () => {
//   history.pushState({}, "", "/construir")
//   fetchConstruir()
// })

// if (document.location.pathname === "/website/construir") {
//   fetchConstruir()
// }

const routes = {
  404: {
    template: "/pages/404.html"
  },
	"/": {
		template: "index.html"
	},
	"#construir": {
		template: "/pages/construir.html"
	}
};

const locationHandler = async () => {
	var location = window.location.hash;

	if (location.length == 0) {
		location = "/";
	}

	const route = routes[location] || routes["404"];
	
  const html = await fetch(route.template).then((response) => response.text());
	document.getElementById("page-content").innerHTML = html;
}

window.addEventListener("hashchange", locationHandler);
locationHandler();