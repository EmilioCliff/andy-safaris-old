let carContainers = document.querySelectorAll(".car__container a");
carContainers.forEach((carContainer) => {
	carContainer.addEventListener("click", (event) => {
		event.preventDefault();
		document.querySelector(".js-active").classList.remove("js-active");
		carContainer.classList.add("js-active");
	});
});
