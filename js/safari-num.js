import { safaris, GetSafari } from "./data/safari.js";

export function loadSafariNumPage(safariID) {
	const safari = GetSafari(safariID);
	document.querySelector(
		".service-header-bg"
	).innerHTML = `<p class="animate-pop-in">${safari.Days} DAYS ${safari.Title}</p>`;
	document.querySelector(
		".safari-num-intro"
	).innerHTML = `${safari.Description}`;

	// set safari days breakdown
	let safariBreakDown = document.querySelector(".safari-day-breakdown");
	safariBreakDown.innerHTML = "";
	safari.Breakdown.forEach((day, i) => {
		safariBreakDown.innerHTML += `
			<div class="safari-day">
				<p class="safari-day-title">
					Day ${i + 1}" ${safari.Title}
				</p>
				<div class="safari-card-item">
					<img
						class="safari-day-card-img grid"
						src=${day.Image}
						alt=""
					/>
				</div>
				<div class="safari-card-item">
					<p class="safari-day-card-des">
						${day.Activity}
					</p>
					<div class="btn safari-num-btn" onclick="window.location.href=
					'contact-us.html?form=safari&safariID=${safari.ID}'">Book The Safari</div>
				</div>
			</div>
		`;
	});

	// set safari tables
	let safariBreakDownTable = document.querySelector(".js-price-grab");
	safariBreakDownTable.innerHTML = "";
	safari.Prices.forEach((aSeason) => {
		safariBreakDownTable.innerHTML += `
			<table class="safari-price-table">
				<thead>
					<tr>
						<td>
							${aSeason.season === "shoulder" ? "(15th Nov-31st Mar)" : ""}
							${aSeason.season === "peak" ? "(1st Jul-15th Oct)&(23rd Dec-2nd Jan)" : ""}
							${aSeason.season === "low" ? "(1st Apr - 30th June)" : ""}
						</td>
						<td>Economy</td>
						<td>Comfort</td>
						<td>Luxury</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1 Person in a private tour</td>
						<td>${aSeason.groups[0].tiers.Economy}</td>
						<td>${aSeason.groups[0].tiers.Comfort}</td>
						<td>${aSeason.groups[0].tiers.Luxury}</td>
					</tr>
					<tr>
						<td>2-3 Person in a private tour</td>
						<td>${aSeason.groups[1].tiers.Economy}</td>
						<td>${aSeason.groups[1].tiers.Comfort}</td>
						<td>${aSeason.groups[1].tiers.Luxury}</td>
					</tr>
					<tr>
						<td>4-5 Person in a private tour</td>
						<td>${aSeason.groups[2].tiers.Economy}</td>
						<td>${aSeason.groups[2].tiers.Comfort}</td>
						<td>${aSeason.groups[2].tiers.Luxury}</td>
					</tr>
					<tr>
						<td>6-7 Person in a private tour</td>
						<td>${aSeason.groups[3].tiers.Economy}</td>
						<td>${aSeason.groups[3].tiers.Comfort}</td>
						<td>${aSeason.groups[3].tiers.Luxury}</td>
					</tr>
					<tr>
						<td>Single Room Extra</td>
						<td>${aSeason.groups[4].tiers.Economy}</td>
						<td>${aSeason.groups[4].tiers.Comfort}</td>
						<td>${aSeason.groups[4].tiers.Luxury}</td>
					</tr>
					<tr>
						<td>Child below 3 Years <br />Child between 3-12 Years</td>
						<td>FREE <br />75% of adult rate</td>
						<td>FREE <br />75% of adult rate</td>
						<td>FREE <br />75% of adult rate</td>
					</tr>
					<tr>
						<td>
							<span>NOTE:</span>Visitors staying in safari lodges and
							tented camps shall pay an extra USD 100 per person per day
							from 1stJuly - 31st December
						</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		`;
	});

	// set the accomodations
	let accomodationContainer = document.querySelector(".js-accomodation-list");
	accomodationContainer.innerHTML = "";
	safari.Accomodation.Economy.forEach((accomodation) => {
		accomodationContainer.innerHTML += `<li>${accomodation}</li>`;
	});

	// set the tour incluses section
	let tourLists = document.querySelectorAll(".js-tour-column ul");
	tourLists[0].innerHTML = "";
	tourLists[1].innerHTML = "";
	for (let i = 0; i <= safari.TourIncludes.length / 2; i++) {
		tourLists[0].innerHTML += `
			<li>
				<i class="ri-edit-circle-fill"></i>
				<p>${safari.TourIncludes[i]}</p>
			</li>
		`;
	}

	for (
		let i = Math.floor(1 + safari.TourIncludes.length / 2);
		i < safari.TourIncludes.length;
		i++
	) {
		tourLists[1].innerHTML += `
			<li>
				<i class="ri-edit-circle-fill"></i>
				<p>${safari.TourIncludes[i]}</p>
			</li>
		`;
	}
}

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

function changeAccomodation(value) {
	const container = document.querySelector(".accomodation-list");
	const safariID = Number(container.dataset.safariId);
	let listAccomo = container.querySelector("ul");
	const safari = GetSafari(safariID);
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
