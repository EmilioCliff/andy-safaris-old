let servicesBtn = document.querySelectorAll(".service-button");
servicesBtn.forEach((service) => {
	service.addEventListener("click", () => {
		document
			.querySelector(".service-active")
			.classList.remove("service-active");
		document.querySelector(".show").classList.remove("show");
		const val = service.dataset.jsData;
		service.classList.add("service-active");
		document.querySelector(`.js-${val}`).classList.add("show");
	});
});
