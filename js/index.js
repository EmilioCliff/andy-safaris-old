import { getKenyaBounds } from "./taxi-maps.js";
import { services } from "./data/services.js";

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

const nextBtns = document.querySelectorAll(".buttons button");
nextBtns.forEach(function (btn) {
	btn.addEventListener("click", function (event) {
		const href = event.target.getAttribute("href");
		window.location.hash = "home";
	});
});

nextDom.addEventListener("click", () => {
	showSlider("next");
});

prevDom.addEventListener("click", () => {
	showSlider("prev");
});

let timeRunning = 3000;
let timeAutoNext = 10000;
let runTimeout;
let runAutoRun = setTimeout(() => {
	nextDom.click();
}, timeAutoNext);

function showSlider(type) {
	let itemSlider = document.querySelectorAll(".carousel .list .item");
	let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

	if (type === "next") {
		listItemDom.appendChild(itemSlider[0]);
		thumbnailDom.appendChild(itemThumbnail[0]);
		carouselDom.classList.add("next");
	} else {
		let positionLastItem = itemSlider.length - 1;
		listItemDom.prepend(itemSlider[positionLastItem]);
		thumbnailDom.prepend(itemThumbnail[positionLastItem]);
		carouselDom.classList.add("prev");
	}

	clearTimeout(timeRunning);
	runTimeout = setTimeout(() => {
		carouselDom.classList.remove("next");
		carouselDom.classList.remove("prev");
	}, timeRunning);

	clearTimeout(runAutoRun);
	runAutoRun = setTimeout(() => {
		nextDom.click();
	}, timeAutoNext);
}

// ======================== GET - TAXI ==========================
let carContainers = document.querySelectorAll(".car__container a");
carContainers.forEach((carContainer) => {
	carContainer.addEventListener("click", (event) => {
		event.preventDefault();
		document.querySelector(".js-active").classList.remove("js-active");
		carContainer.classList.add("js-active");
	});
});
let sourceAutocomplete, destinationAutocomplete;
export async function initIndexMap() {
	sourceAutocomplete = new google.maps.places.Autocomplete(
		document.getElementById("pickup-address"),
		{ bounds: getKenyaBounds(), componentRestrictions: { country: "KE" } }
	);

	destinationAutocomplete = new google.maps.places.Autocomplete(
		document.getElementById("dropoff-address"),
		{ bounds: getKenyaBounds(), componentRestrictions: { country: "KE" } }
	);

	// if (savedState.pickupLocation) {
	// 	document.getElementById("pickup-location").innerText =
	// 		savedState.pickupLocation;
	// }
	// if (savedState.dropoffLocation) {
	// 	document.getElementById("dropoff-location").innerText =
	// 		savedState.dropoffLocation;
	// }

	// destinationAutocomplete.addListener("place_changed", calculateRoute);

	// if (savedState.directions) {
	// 	directionsRenderer.setDirections(savedState.directions);
	// 	document.getElementById("total-distance").textContent =
	// 		savedState.totalDistance;
	// 	document.getElementById("total-time").textContent = savedState.totalTime;
	// }
}

initIndexMap();

// ============================= SERVICE ==========================
let serviceContainer = document.getElementById("service-content-container")
let servicesBtn = document.querySelectorAll(".service-button");
servicesBtn.forEach((service) => {
	service.addEventListener("click", () => {
		document
			.querySelector(".service-active")
			.classList.remove("service-active");
		service.classList.add("service-active");

		const val = service.dataset.jsData;

		serviceContainer.innerHTML = `
			<div class="service-content js-hire">
				<img src="${services[val].Image}" alt="" />
				<div class="service-des">
					<p class="service-subtitle section-subtitle">
						SERVICE IS ALWAYS THE BEST
					</p>
					<p class="service-title section-title">${services[val].Title}</p>
					<p class="service-description">
						${services[val].Description}}
					</p>
					<a href="${services[val].url}" class="btn book__now-button">BOOK NOW</a>
				</div>
			</div>
		`
		// document.querySelector(".show").classList.remove("show");
		// const val = service.dataset.jsData;
		// document.querySelector(`.js-${val}`).classList.add("show");
	});
});

// ============================== QUOTES ==============================
let reviews = document.querySelectorAll(".review");
let prevIndex = 0;
let currentIndex = 1;
let nextIndex = 2;
let lastIndex = reviews.length - 1;

// document
// 	.querySelector(".previous-review")
// 	.addEventListener("click", (event) => {
// 		showReview(event);
// 	});
// document.querySelector(".next-review").addEventListener("click", (event) => {
// 	showReview(event);
// });
reviews.forEach((review) => {
	review.addEventListener("click", (event) => {
		showReview(event);
	});
});

generatePips();
setLeftClass();

let carouselRunning = true;
let carouselRestartTimeout;
let interval = setInterval(function () {
	if (carouselRunning) {
		showNextReview();
	}
}, 6000);

function showNextReview() {
	if (currentIndex === lastIndex) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}
	updateState(currentIndex);
}

function showReview(event) {
	let target = event.target;

	if (!target.classList.contains("review")) {
		target = target.closest(".review");
	}
	const reviewsArray = Array.from(reviews);
	const index = reviewsArray.indexOf(target);

	if (index !== -1) {
		updateState(index);
		clearTimeout(carouselRestartTimeout);
		carouselRunning = false;
		carouselRestartTimeout = setTimeout(function () {
			carouselRunning = true;
		}, 10000);
	} else {
		console.error("Target review not found in the list of reviews.");
	}
}

function updateState(index) {
	prevIndex = index === 0 ? lastIndex : index - 1;
	currentIndex = index;
	nextIndex = index === lastIndex ? 0 : index + 1;

	updateCarouselPosition();
	setLeftClass();
	updatePips();
}

function updateCarouselPosition() {
	document
		.querySelector(".previous-review")
		.classList.remove("previous-review");
	document.querySelector(".current-review").classList.remove("current-review");
	document.querySelector(".next-review").classList.remove("next-review");

	reviews[prevIndex].classList.add("previous-review");
	reviews[currentIndex].classList.add("current-review");
	reviews[nextIndex].classList.add("next-review");
}

function generatePips() {
	let pipContainer = document.querySelector(".list-pips");
	for (let i = lastIndex; i >= 0; i--) {
		let newPip = document.createElement("li");
		newPip.classList.add("pip");
		pipContainer.appendChild(newPip);
	}
	updatePips();
	let pips = document.querySelectorAll(".pip");
	pips.forEach((pip) => {
		pip.addEventListener("click", (event) => {
			showFromPip(event);
		});
	});
}

function updatePips() {
	if (document.querySelector(".previous-pip")) {
		document.querySelector(".previous-pip").classList.remove("previous-pip");
	}
	if (document.querySelector(".current-pip"))
		document.querySelector(".current-pip").classList.remove("current-pip");
	if (document.querySelector(".next-pip"))
		document.querySelector(".next-pip").classList.remove("next-pip");

	let allPips = document.querySelectorAll(".pip");

	allPips[prevIndex].classList.add("previous-pip");
	allPips[currentIndex].classList.add("current-pip");
	allPips[nextIndex].classList.add("next-pip");
}

function showFromPip(event) {
	let pips = document.querySelectorAll(".pip");
	const pipsArray = Array.from(pips);
	const index = pipsArray.indexOf(event.target);

	updateState(index);
	clearTimeout(carouselRestartTimeout);
	carouselRunning = false;
	carouselRestartTimeout = setTimeout(function () {
		carouselRunning = true;
	}, 10000);
}

function setLeftClass() {
	if (document.querySelector(".left-review")) {
		document.querySelector(".left-review").classList.remove("left-review");
	}
	if (prevIndex > 0) {
		let index = prevIndex - 1;
		reviews[index].classList.add("left-review");
	} else {
		reviews[lastIndex].classList.add("left-review");
	}

	document.addEventListener("visibilitychange", () => {
		if (document.hidden) {
			carouselRunning = false;
		} else {
			carouselRunning = true;
		}
	});
}
