import { vehicles } from "./data/vehicle.js";

const sliderBtns = document.querySelectorAll(".car-slider #slider-button");
const imageList = document.querySelector(".car-slider");
const sliderScrollBar = document.querySelector(".slider-scroll-bar");
const sliderScrollThumb = document.querySelector(".slider-scroll-bar-thumb");
const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

sliderBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		const direction = btn.classList.contains("slider-left") ? -1 : 1;
		const scrollAmount = imageList.clientWidth * direction;
		imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
	});
});

const handleSlideButtons = () => {
	sliderBtns[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
	sliderBtns[1].style.display =
		imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
};

const updateScrollThumbPosition = () => {
	const scrollPostition = imageList.scrollLeft;
	const thumnPosition =
		(scrollPostition / maxScrollLeft) *
		(sliderScrollBar.clientWidth - sliderScrollThumb.offsetWidth);
	sliderScrollThumb.style.left = `${thumnPosition}px`;
};

imageList.addEventListener("scroll", () => {
	handleSlideButtons();
	updateScrollThumbPosition();
});

const carosuelCarBtn = document.querySelectorAll(".car-carousel-item");
carosuelCarBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		document
			.querySelector(".selected-car-group")
			.classList.remove("selected-car-group");
		btn.classList.toggle("selected-car-group");
		const vehicleID = Number(btn.dataset.vehicleId);
		fillCarDetails(vehicleID);
	});
});

function fillCarDetails(vehicleID) {
	const vehicle = getVehicleById(vehicleID);
	document.querySelector(".car-name").innerText = vehicle.Name;
	document.querySelector(
		".selected-car"
	).innerHTML = `<img class="car-image" src=${vehicle.Images[0]} data-car-selected-id=${vehicle.ID} alt="">`;
	document.querySelector(".car-details-visual").innerHTML = `
                <div class="car-detail-visual">
                    <div class="car-detail-visual-cont">
                        <i class="ri-user-line"></i>
                    </div>
                    <p>${vehicle.Passengers} Passengers</p>
                </div>
                <div class="car-detail-visual">
                    <div class="car-detail-visual-cont">
                        <i class="ri-briefcase-4-line"></i>
                    </div>
                    <p>${vehicle.Suitcases} Suitcases</p>
                </div>
    `;
	document.querySelector(".breakdown-list").innerHTML = `
                    <li class="break_down">
                        <p>Engine</p>
                        <p>${vehicle.Make.Engine}</p>
                    </li>
                    <hr>
                    <li class="break_down">
                        <p>Interior Color</p>
                        <p>${vehicle.Make.InteriorColor}</p>
                    </li>
                    <hr>
                    <li class="break_down">
                        <p>Power</p>
                        <p>${vehicle.Make.Power}</p>
                    </li>
                    <hr>
                    <li class="break_down">
                        <p>Fuel Type</p>
                        <p>${vehicle.Make.FuelType}</p>
                    </li>
                    <hr>
                    <li class="break_down">
                        <p>Length</p>
                        <p>${vehicle.Make.Length}</p>
                    </li>
                    <hr>
                    <li class="break_down">
                        <p>Exterior Color</p>
                        <p>${vehicle.Make.ExteriorColor}</p>
                    </li>
                    <hr>
                    <li class="break_down">
                        <p>Transmission</p>
                        <p>${vehicle.Make.Transmission}</p>
                    </li>
                    <hr>
                    <li class="break_down">
                        <p>Extras</p>
                        <p class="extra-break_down">${vehicle.Make.Extras}</p>
                    </li>
    `;
}

function getVehicleById(vehicleId) {
	return vehicles.find((vehicle) => vehicle.ID === vehicleId);
}
