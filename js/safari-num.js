import { safaris } from "./data/safari.js";

const priceGrab = document.querySelector(".price-grab");
const tablePips = document.querySelectorAll(".table-pip");
let currentIndex = 0;

tablePips.forEach((pip, index) => {
	pip.addEventListener("click", () => {
		currentIndex = index;
		updateView();
	});
});

function updateView() {
	const offset = -currentIndex * 100;
	priceGrab.style.transform = `translateX(${offset}%)`;

	tablePips.forEach((pip) => pip.classList.remove("active"));
	tablePips[currentIndex].classList.add("active");
}

let startX = 0;
let isDown = false;

priceGrab.addEventListener("mousedown", (e) => {
	isDown = true;
	startX = e.pageX;
});

priceGrab.addEventListener("mouseleave", () => {
	isDown = false;
});

priceGrab.addEventListener("mouseup", () => {
	isDown = false;
	const moved = startX - event.pageX;
	if (moved > 50) {
		currentIndex = Math.min(currentIndex + 1, tablePips.length - 1);
	} else if (moved < -50) {
		currentIndex = Math.max(currentIndex - 1, 0);
	}
	updateView();
});

priceGrab.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	const x = e.pageX;
	const moveX = startX - x;
	const offset = -currentIndex * 100 - (moveX / window.innerWidth) * 100;
	priceGrab.style.transform = `translateX(${offset}%)`;
});

const accomodationOptions = document.querySelectorAll(".accomodation-option");
accomodationOptions.forEach((btn) => {
	btn.addEventListener("click", () => {
		document.querySelector(".option-active").classList.remove("option-active");
		btn.classList.add("option-active");
		const value = btn.dataset.accomodateValue;
		changeAccomodation(value);
	});
});

function getSafari(id) {
	for (let i = 0; i <= safaris.length; i++) {
		if (safaris[i].ID === id) {
			return safaris[i];
		}
	}
}

function changeAccomodation(value) {
	const container = document.querySelector(".accomodation-list");
	const safariID = Number(container.dataset.safariId);
	let listAccomo = container.querySelector("ul");
	const safari = getSafari(safariID);
	// const safari = safaris.filter((safari) => safari.ID === safariID);
	let accomodations;
	listAccomo.innerHTML = "";
	switch (value) {
		case "economy":
			accomodations = safari.Accomodation.Economy;
			break;
		case "comfort":
			accomodations = safari.Accomodation.Comfort;
			break;
		case "luxury":
			accomodations = safari.Accomodation.Luxury;
			break;
	}

	accomodations.forEach((value) => {
		listAccomo.innerHTML += `
						<li>${value}</li>
		`;
	});
}
