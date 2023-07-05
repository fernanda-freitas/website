// const routes = {
//   "/": {
// 		template: "index.html"
// 	},
// 	"construir": {
// 		template: "/construir.html"
// 	}
// };

// const locationHandler = async () => {
// 	var location = window.location.hash;

// 	if (location.length == 0) {
// 		location = "/";
// 	}

// 	const route = routes[location];
	
//   const html = await fetch(route.template).then((response) => response.text());
// 	document.getElementById("page-content").innerHTML = html;
// }

// window.addEventListener("hashchange", locationHandler);
// locationHandler();
