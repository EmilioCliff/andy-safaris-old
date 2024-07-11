import { vehicles, GetVehicle } from "./data/vehicle.js";

function loadCarHirePage() {
	fillCarDetails(1);
	let carCarousel = document.querySelector(".car-carousel");
	carCarousel.innerHTML = "";
	carCarousel.innerHTML = `<img class="car-carousel-item selected-car-group" src=${vehicles[0].Images[0]} data-vehicle-id=${vehicles[0].ID} alt="">`;
	vehicles.slice(1).forEach((vehicle, index) => {
		carCarousel.innerHTML += `<img class="car-carousel-item" src=${vehicle.Images[0]} data-vehicle-id=${vehicle.ID} alt="">`;
	});

	// fill tables
	let selfDrive = document.querySelector(".table-body-self-drive");
	let withDriver = document.querySelector(".table-body-with-driver");
	let contract = document.querySelector(".table-body-contract");
	vehicles.forEach((vehicle) => {
		selfDrive.innerHTML += `
            <tr>
                <td>${vehicle.Name}</td>
                <td>Per Month</td>
                <td>${vehicle.PricePerMonth}</td>
                <td>EXCLUSIVE</td>
                <td>INCLUSIVE</td>
                <td>200KM, Any Extra KM is charged .2USD/KM</td>
            </tr>
        `;
		withDriver.innerHTML += `
            <tr>
                <td>${vehicle.Name}</td>
                <td>Per Month</td>
                <td>${vehicle.PricePerMothWithDriver}</td>
                <td>EXCLUSIVE</td>
                <td>INCLUSIVE</td>
                <td>200KM, Any Extra KM is charged .2USD/KM</td>
            </tr>
        `;
		contract.innerHTML += `
            <tr>
                <td>${vehicle.Name}</td>
                <td>Per Month</td>
                <td>${vehicle.PriceMonthsContract}</td>
                <td>EXCLUSIVE</td>
                <td>INCLUSIVE</td>
                <td>5000KM</td>
            </tr>
        `;
	});

	const sliderBtns = document.querySelectorAll(".car-slider #slider-button");
	const imageList = document.querySelector(".car-slider");
	const sliderScrollBar = document.querySelector(".slider-scroll-bar");
	const sliderScrollThumb = document.querySelector(".slider-scroll-bar-thumb");

	const updateMaxScrollLeft = () =>
		imageList.scrollWidth - imageList.clientWidth;

	const updateScrollThumbPosition = () => {
		const maxScrollLeft = updateMaxScrollLeft();
		if (maxScrollLeft > 0) {
			const scrollPosition = imageList.scrollLeft;
			const thumbPosition =
				(scrollPosition / maxScrollLeft) *
				(sliderScrollBar.clientWidth - sliderScrollThumb.offsetWidth);
			sliderScrollThumb.style.left = `${thumbPosition}px`;
		}
	};

	const handleSlideButtons = () => {
		const maxScrollLeft = updateMaxScrollLeft();
		sliderBtns[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
		sliderBtns[1].style.display =
			imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
	};

	sliderBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const direction = btn.classList.contains("slider-left") ? -1 : 1;
			const scrollAmount = imageList.clientWidth * direction;
			imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
		});
	});

	imageList.addEventListener("scroll", () => {
		handleSlideButtons();
		updateScrollThumbPosition();
	});

	const initializeSlider = () => {
		const maxScrollLeft = updateMaxScrollLeft();
		sliderScrollThumb.style.display = "block";
		handleSlideButtons();
		updateScrollThumbPosition();
	};

	initializeSlider();
	window.addEventListener("resize", initializeSlider);
	sliderBtns[1].style.display = "flex";
}

loadCarHirePage();

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
	const vehicle = GetVehicle(vehicleID);
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

	document
		.querySelector(".car-hire-book-now")
		.setAttribute(
			"onclick",
			`window.location.href='contact-us.html?form=hire&carID=${vehicle.ID}'`
		);
}
