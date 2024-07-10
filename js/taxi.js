import { initMap, calculateRoute } from "./taxi-maps.js";
import { vehicles } from "./data/vehicle.js";
import { submitForm, getFromLocalStorage } from "./taxi-form.js";

const today = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", today);

let previousValue = "0";

const bookingContLarge = document.querySelectorAll(".progres-cont");
bookingContLarge.forEach(function (btn) {
	btn.addEventListener("click", function () {
		let value = btn.dataset.progressNumber;

		if (value > previousValue) {
			if (submitForm(previousValue)) {
				revielContent(value);
			}
		} else {
			revielContent(value);
		}
	});
});

const bookingCont = document.querySelector(".select-options");
bookingCont.addEventListener("change", function () {
	const currentValue = this.value;

	if (currentValue > previousValue) {
		if (submitForm(previousValue)) {
			revielContent(currentValue);
		} else {
			// if fails return to previous state
			const options = bookingCont.options;
			for (let i = 0; i < options.length; i++) {
				if (options[i].value === previousValue) {
					options[i].selected = true;
					break;
				}
			}
		}
	} else {
		revielContent(currentValue);
	}
});

function changeProgress(value) {
	const options = bookingCont.options;
	for (let i = 0; i < options.length; i++) {
		if (options[i].value === value) {
			options[i].selected = true;
			break;
		}
	}

	for (let i = 0; i < bookingContLarge.length; i++) {
		if (bookingContLarge[i].dataset.progressNumber === value) {
			document
				.querySelector(".progress-larger-selected")
				.classList.remove("progress-larger-selected");
			bookingContLarge[i].parentElement.classList.add(
				"progress-larger-selected"
			);
			break;
		}
	}
}

function revielContent(value) {
	switch (value) {
		case "0":
			// currentProgress = 0;
			previousValue = value;
			changeProgress("0");
			showRideDetails();
			break;
		case "1":
			// currentProgress = 1;
			previousValue = value;
			changeProgress("1");
			showChooseTaxi();
			break;
		case "2":
			// currentProgress = 2;
			previousValue = value;
			changeProgress("2");
			showContactDetails();
			break;
		case "3":
			// currentProgress = 3;
			previousValue = value;
			changeProgress("3");
			showBookSummary();
			break;
	}
}

let taxiBtnsCont = document.querySelector(".btn-sections");
let dataDetailsCont = document.querySelector(".booking-container");
function showRideDetails() {
	dataDetailsCont.classList.remove("summary-large-col");
	dataDetailsCont.classList.remove("booking-container-choose-vehicle");
	dataDetailsCont.innerHTML = `
        <div class="ride-details">
					<p class="progress-title">RIDE DETAIL</p>
					<form action="" class="ride-details-form">
						<div class="date-input-container">
							<label for="pickupDay">
								PICKUP DATE
								<i class="ri-question-fill"></i>
							</label>
							<input type="date" name="pickupDay" id="date" placeholder="Enter a date" />
							<div class="error-message">
								<p></p>
							</div>
						</div>
						<div class="date-input-container">
							<label for="pickupTime">
								PICKUP TIME
								<i class="ri-question-fill"></i>
							</label>
							<input
								type="time"
								name="pickupTime"
								id="pickupTime"
								placeholder="Enter pick up time"
							/>
							<div class="error-message">
								<p></p>
							</div>
						</div>
						<div class="date-input-container">
							<label for="pickupLocation">
								PICKUP LOCATION
								<i class="ri-question-fill"></i>
							</label>
							<input type="text" name="pickupLocation" id="pickup-location" placeholder="Enter a location" />
							<div class="error-message">
								<p></p>
							</div>
						</div>
						<div class="date-input-container">
							<label for="dropoffLocation">
								DROP-OFF LOCATION
								<i class="ri-question-fill"></i>
							</label>
							<input type="text" name="dropoffLocation" id="dropoff-location" placeholder="Enter a location" />
							<div class="error-message">
								<p></p>
							</div>
						</div>
						<div class="date-input-container inner-select">
							<label for="transferType">
								TRANSFER TYPE
								<i class="ri-question-fill"></i>
							</label>
							<select class="select-options inner-select-option" name="transferType" id="transferType">
								<option value="one-way">ONE WAY</option>
								<option value="two-way">TWO WAY</option>
							</select>
						</div>
					</form>
				</div>
				<div>
					<div class="map" id="map"></div>
					<div class="map-details">
						<div class="total-detail">
							<svg
								class="section-animal-logo"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--gis"
								preserveAspectRatio="xMidYMid meet"
							>
								<path
									d="M21 32C9.459 32 0 41.43 0 52.94c0 4.46 1.424 8.605 3.835 12.012l14.603 25.244c2.045 2.672 3.405 2.165 5.106-.14l16.106-27.41c.325-.59.58-1.216.803-1.856A20.668 20.668 0 0 0 42 52.94C42 41.43 32.544 32 21 32zm0 9.812c6.216 0 11.16 4.931 11.16 11.129c0 6.198-4.944 11.127-11.16 11.127c-6.215 0-11.16-4.93-11.16-11.127c0-6.198 4.945-11.129 11.16-11.129z"
									fill="var(--first-color)"
								></path>
								<path
									d="M87.75 0C81.018 0 75.5 5.501 75.5 12.216c0 2.601.83 5.019 2.237 7.006l8.519 14.726c1.193 1.558 1.986 1.262 2.978-.082l9.395-15.99c.19-.343.339-.708.468-1.082a12.05 12.05 0 0 0 .903-4.578C100 5.5 94.484 0 87.75 0zm0 5.724c3.626 0 6.51 2.876 6.51 6.492c0 3.615-2.884 6.49-6.51 6.49c-3.625 0-6.51-2.875-6.51-6.49c0-3.616 2.885-6.492 6.51-6.492z"
									fill="var(--first-color)"
								></path>
								<path
									d="M88.209 37.412c-2.247.05-4.5.145-6.757.312l.348 5.532a126.32 126.32 0 0 1 6.513-.303zm-11.975.82c-3.47.431-6.97 1.045-10.43 2.032l1.303 5.361c3.144-.896 6.402-1.475 9.711-1.886zM60.623 42.12a24.52 24.52 0 0 0-3.004 1.583l-.004.005l-.006.002c-1.375.866-2.824 1.965-4.007 3.562c-.857 1.157-1.558 2.62-1.722 4.35l5.095.565c.038-.406.246-.942.62-1.446h.002v-.002c.603-.816 1.507-1.557 2.582-2.235l.004-.002a19.64 19.64 0 0 1 2.388-1.256zM58 54.655l-3.303 4.235c.783.716 1.604 1.266 2.397 1.726l.01.005l.01.006c2.632 1.497 5.346 2.342 7.862 3.144l1.446-5.318c-2.515-.802-4.886-1.576-6.918-2.73c-.582-.338-1.092-.691-1.504-1.068zm13.335 5.294l-1.412 5.327l.668.208l.82.262c2.714.883 5.314 1.826 7.638 3.131l2.358-4.92c-2.81-1.579-5.727-2.611-8.538-3.525l-.008-.002l-.842-.269zm14.867 7.7l-3.623 3.92c.856.927 1.497 2.042 1.809 3.194l.002.006l.002.009c.372 1.345.373 2.927.082 4.525l5.024 1.072c.41-2.256.476-4.733-.198-7.178c-.587-2.162-1.707-4.04-3.098-5.548zM82.72 82.643a11.84 11.84 0 0 1-1.826 1.572h-.002c-1.8 1.266-3.888 2.22-6.106 3.04l1.654 5.244c2.426-.897 4.917-1.997 7.245-3.635l.006-.005l.003-.002a16.95 16.95 0 0 0 2.639-2.287zm-12.64 6.089c-3.213.864-6.497 1.522-9.821 2.08l.784 5.479c3.421-.575 6.856-1.262 10.27-2.18zm-14.822 2.836c-3.346.457-6.71.83-10.084 1.148l.442 5.522c3.426-.322 6.858-.701 10.285-1.17zm-15.155 1.583c-3.381.268-6.77.486-10.162.67l.256 5.536c3.425-.185 6.853-.406 10.28-.678zm-15.259.92c-2.033.095-4.071.173-6.114.245l.168 5.541a560.1 560.1 0 0 0 6.166-.246z"
									fill="#000000"
									fill-rule="evenodd"
								></path>
							</svg>
							<p class="map-detail-title">TOTAL DISTANCE</p>
							<p class="map-detail-value" id="total-distance">0 km</p>
						</div>
						<div class="total-detail">
							<svg
								class="section-animal-logo"
								viewBox="0 0 24 24"
								fill="var(--subtitle-color)"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
									stroke="#000000"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12 6V12"
									stroke="#000000"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M16.24 16.24L12 12"
									stroke="#000000"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<p class="map-detail-title">TOTAL TIME</p>
							<p class="map-detail-value" id="total-time">0 h 0 m</p>
						</div>
					</div>
				</div>		
    `;

	initMap();

	taxiBtnsCont.innerHTML = `
		<div class="taxi-next-btn taxi-btn taxi-btn-right">
				CHOOSE A VEHICLE
				<i class="ri-arrow-right-s-line"></i>
		</div>
	`;

	// addSubmitButtonEventListener();
	document.querySelector(".taxi-next-btn").addEventListener("click", () => {
		if (submitForm("0")) {
			revielContent("1");
		}
	});

	// auto-fill form if it is available
	const savedData = getFromLocalStorage();
	if (savedData.rideDetails) {
		document.getElementById("date").value = savedData.rideDetails.pickupDay;
		document.getElementById("pickupTime").value =
			savedData.rideDetails.pickupTime;
		document.getElementById("pickup-location").value =
			savedData.rideDetails.pickupLocation;
		document.getElementById("dropoff-location").value =
			savedData.rideDetails.dropoffLocation;
		document.getElementById("transferType").value =
			savedData.rideDetails.transferType;

		const origin = document.getElementById("pickup-location").value;
		const destination = document.getElementById("dropoff-location").value;

		calculateRoute(origin, destination);
	}
}

function showChooseTaxi() {
	// saveState();
	dataDetailsCont.classList.remove("summary-large-col");
	dataDetailsCont.classList.add("booking-container-choose-vehicle");
	const savedData = getFromLocalStorage();
	dataDetailsCont.innerHTML = `
        		<div class="booking-car-sect">
					<div class="ride-details">
						<p class="progress-title">VEHICLE FILTER</p>
						<form action="" class="ride-details-form">
							<div class="date-input-container inner-select">
								<label for="">
									PASSENGERS
									<i class="ri-question-fill"></i>
								</label>
								<select
									class="select-options inner-select-option"
									name=""
									id=""
								>
									<option value="0">1</option>
									<option value="1">2</option>
									<option value="1">3</option>
									<option value="1">4</option>
									<option value="1">5</option>
									<option value="1">6</option>
									<option value="1">7</option>
								</select>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container inner-select">
								<label for="">
									SUICASES
									<i class="ri-question-fill"></i>
								</label>
								<select
									class="select-options inner-select-option"
									name=""
									id=""
								>
									<option value="0">1</option>
									<option value="1">2</option>
									<option value="1">3</option>
									<option value="1">4</option>
									<option value="1">5</option>
									<option value="1">6</option>
									<option value="1">7</option>
								</select>
							</div>
							<div class="date-input-container inner-select">
								<label for="">
									TYPE
									<i class="ri-question-fill"></i>
								</label>
								<select
									class="select-options inner-select-option"
									name=""
									id=""
								>
									<option value="0">- All Vehicles -</option>
									<option value="1">Mercedes-Benz</option>
									<option value="1">Fielder</option>
									<option value="1">Toyotta Corolla</option>
									<option value="1">BMW</option>
									<option value="1">Noah</option>
									<option value="1">SUV</option>
									<option value="1">Mini - van</option>
									<option value="1">Tourist Van</option>
									<option value="1">Van</option>
								</select>
							</div>
						</form>
					</div>
					<div class="taxi-car-select">

					</div>
				</div>
				 <div style="position: sticky; top: 0;">
					<div class="summary-taxi-details">
						<h3>Summary</h3>
						<h4>SERVICE TYPE</h4>
						<p>Distance</p>
						<hr />
						<h4>TRANSFER TYPE</h4>
						<p>${savedData.rideDetails.transferType}</p>
						<hr />
						<h4>PICKUP LOCATION</h4>
						<p>${savedData.rideDetails.pickupLocation}</p>
						<hr />
						<h4>DROPOFF LOCATION</h4>
						<p>${savedData.rideDetails.dropoffLocation}</p>
						<hr />
						<h4>PICKUP DATE, TIME</h4>
						<p>${savedData.rideDetails.pickupDay}, ${savedData.rideDetails.pickupTime}</p>
						<hr />
						<div class="summary-col-2">
							<div>
								<h4>TOTAL DISTANCE</h4>
								<p>${savedData.rideDetails.totalDistance}</p>
							</div>
							<div>
								<h4>TOTAL TIME</h4>
								<p>${savedData.rideDetails.totalTime}</p>
							</div>
						</div>
					</div>
				</div>
				</div>
    `;

	taxiBtnsCont.innerHTML = `
				<div class="taxi-booking-btns">
					<div class="taxi-next-btn">
						ENTER CONTACT DETAILS
						<i class="ri-arrow-right-s-line"></i>
					</div>
					<div class="taxi-next-btn">
						<i class="ri-arrow-left-s-line"></i>
						CHOOSE RIDE DETAILS
					</div>
				</div>
	`;

	// submit the form and reviel the next slide
	document
		.querySelector(".taxi-next-btn:nth-child(1)")
		.addEventListener("click", () => {
			if (submitForm("1")) {
				revielContent("2");
			}
		});

	// move back to the previous slide and autofill the forms
	document
		.querySelector(".taxi-next-btn:nth-child(2)")
		.addEventListener("click", () => {
			revielContent("0");
		});

	let carShowContainer = document.querySelector(".taxi-car-select");
	carShowContainer.innerHTML = "";

	vehicles.forEach((vehicle) => {
		carShowContainer.innerHTML += `
						<div class="taxi-container js-car-container-${vehicle.ID}">
							<div class="taxi-sel-img">
								<img src="${vehicle.Images[0]}" alt="" />
							</div>
							<div class="taxi-name-select">
								<p>${vehicle.Name}</p>
								<div class="taxi-select-btn js-car-select-${vehicle.ID}" data-car-id="${vehicle.ID}">
									SELECT
									<i class="ri-check-line"></i>
								</div>
							</div>
							<p class="taxi-price">${vehicle.PricePerKM}</p>
							<div class="taxi-more-item">
								<div class="taxi-more-details">
									<p class="taxi-more-details-des">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Provident id sit dicta quisquam rem, velit explicabo
										consequuntur sed nobis eos.
									</p>
									<div class="taxi-car-make">
										<ul class="breakdown-list">
											<li class="break_down">
												<p>Engine</p>
												<p>${vehicle.Make.Engine}</p>
											</li>
											<hr />
											<li class="break_down">
												<p>Interior Color</p>
												<p>${vehicle.Make.InteriorColor}</p>
											</li>
											<hr />
											<li class="break_down">
												<p>Power</p>
												<p>${vehicle.Make.Power}</p>
											</li>
											<hr />
											<li class="break_down">
												<p>Fuel Type</p>
												<p>${vehicle.Make.FuelType}</p>
											</li>
											<hr />
										</ul>
										<ul class="breakdown-list">
											<li class="break_down">
												<p>Length</p>
												<p>${vehicle.Make.Length}</p>
											</li>
											<hr />
											<li class="break_down">
												<p>Exterior Color</p>
												<p>${vehicle.Make.ExteriorColor}</p>
											</li>
											<hr />
											<li class="break_down">
												<p>Transmission</p>
												<p>${vehicle.Make.Transmission}</p>
											</li>
											<hr />
											<li class="break_down">
												<p>Extras</p>
												<p class="extra-break_down">${vehicle.Make.Extras}</p>
											</li>
											<hr />
										</ul>
									</div>
								</div>
								<div class="taxi-group">
									<div class="taxi-more-btn" data-car-more-info="${vehicle.ID}">
										<i class="ri-arrow-down-s-line"></i>
										<p>MORE INFO</p>
									</div>
									<div class="taxi-item">
										<div class="taxi-pass">
											<i class="ri-group-line"></i>
											<p>${vehicle.Passengers}</p>
										</div>
										<div class="taxi-pass">
											<i class="ri-suitcase-line"></i>
											<p>${vehicle.Suitcases}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr class="taxi-line-divider" />
		`;
	});

	showCarInfo();
	selectCarEvents();

	// const savedData = getFromLocalStorage();
	if (savedData.taxiSelected) {
		document
			.querySelector(`.js-car-select-${savedData.taxiSelected}`)
			.classList.add("taxi-select-btn-selected");
	}
}

function showContactDetails() {
	// saveState();
	dataDetailsCont.classList.remove("summary-large-col");
	dataDetailsCont.classList.add("booking-container-choose-vehicle");
	const savedData = getFromLocalStorage();
	const vehicle = vehicles.find(
		(vehicle) => vehicle.ID === Number(savedData.taxiSelected)
	);
	const { totalPrice, depositPrice } = calculatePrices(
		vehicle.PricePerKM,
		savedData.rideDetails.totalDistance
	);
	// dataDetailsCont.classList.remove("booking-container-choose-vehicle");
	dataDetailsCont.innerHTML = `
        <div style="display: grid; row-gap: 2rem" class="contact-grid-swap">
					<div class="ride-details">
						<p class="progress-title">CONTACT NAME</p>
						<form action="" class="ride-details-form">
							<div class="date-input-container">
								<label for="firstName"> FIRST NAME <sup>&#x2217;</sup></label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									placeholder="Enter First Name"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="lastName"> LAST NAME <sup>&#x2217;</sup></label>
								<input
									type="text"
									name="lastName"
									id="lastName"
									placeholder="Enter Last Name"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="email"> EMAIL ADDRESS <sup>&#x2217;</sup></label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="examplegmail.com"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="phoneNumber"> PHONE NUMBER <sup>&#x2217;</sup> </label>
								<input
									type="telephone"
									name="phoneNumber"
									id="phoneNumber"
									placeholder="Enter a Phone Number"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="comments"> COMMENTS </label>
								<textarea name="comments" id="comments"> </textarea>
							</div>
						</form>
					</div>
					<div class="payment-taxi-details">
						<p>Choose Payment Method</p>
						<div class="payment-methods-taxi grid">
							<div class="error-message">
								<p></p>
							</div>
							<div class="payment-method" data-payment-value="0">
								<svg
									height="800px"
									width="800px"
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									viewBox="0 0 18.972 18.972"
									xml:space="preserve"
								>
									<g>
										<g>
											<path
												style="fill: #030104"
												d="M17.873,3.12L7.284,3.126c-0.607-0.001-1.101,0.493-1.1,1.101v0.505
			C5.959,4.635,5.68,4.567,5.324,4.567c-0.445,0-0.814,0.1-0.855,0.113C4.383,4.704,4.305,4.746,4.238,4.805L0.202,8.341
			C0.07,8.458-0.004,8.627,0,8.803l0.035,5.821c0.008,0.31,0.364,0.563,0.675,0.577c0.016,0,1.521,0.063,2.851,0.063
			c0.811,0,1.383-0.021,1.748-0.067c1.064-0.134,1.529-0.448,1.722-0.648c0.2-0.146,0.378-0.29,0.564-0.434
			c-0.155,0.568,0.104,1.187,0.648,1.462c0.176,0.09,0.374,0.138,0.57,0.138c0.349,0,0.669-0.145,0.903-0.385
			c0.115,0.156,0.261,0.292,0.445,0.387c0.177,0.087,0.374,0.135,0.571,0.135c0.478,0,0.91-0.267,1.126-0.693l0.837-1.648
			c0.153-0.302,0.185-0.645,0.079-0.965c-0.034-0.104-0.088-0.201-0.148-0.291l5.239,0.003c0.607,0,1.102-0.494,1.103-1.1
			l0.004-6.924C18.973,3.625,18.48,3.12,17.873,3.12z M10.072,13.012l-0.835,1.65c-0.113,0.228-0.407,0.325-0.636,0.21
			c-0.233-0.119-0.326-0.405-0.209-0.637l0.687-1.353c0,0,0.225-0.549,0.584-0.555c0.07,0.002,0.138,0.017,0.202,0.05
			c0.112,0.058,0.196,0.153,0.235,0.274C10.14,12.772,10.132,12.899,10.072,13.012z M8.756,11.561l-0.755,0.692h0.007
			c-0.473,0.41-1.036,0.865-1.729,1.377c-0.052,0.038-0.056,0.034-0.093,0.086c-0.002,0.002-0.231,0.206-1.021,0.304
			c-0.216,0.027-0.668,0.023-1.603,0.023c-0.813,0-1.825,0.012-2.378-0.007L1.193,9.05l3.714-3.255
			c0.1-0.019,0.252-0.041,0.417-0.041c0.242,0,0.409,0.043,0.499,0.132v4.116c0,0.209,0.11,0.401,0.29,0.509
			c0.021,0.012,0.045,0.01,0.067,0.02v0.044l0.055-0.028c0.153,0.051,0.318,0.058,0.464-0.023c0.923-0.5,2.672-1.295,3.434-1.295
			c0.034,0,0.063,0,0.083,0.004c0.003,0.007,0.006,0.011,0.01,0.017C10.242,9.329,10.318,10.015,8.756,11.561z M11.989,13.15
			l-0.835,1.65c-0.114,0.228-0.409,0.324-0.637,0.209c-0.232-0.117-0.324-0.404-0.207-0.636l0.836-1.65
			c0.081-0.16,0.242-0.261,0.422-0.261c0.075,0,0.147,0.019,0.215,0.053c0.114,0.058,0.197,0.155,0.235,0.273
			C12.058,12.91,12.049,13.037,11.989,13.15z M18.236,11.155c-0.001,0.205-0.165,0.367-0.367,0.367l-7.476-0.002
			c0.611-0.754,0.962-1.43,1.02-2.016c0.043-0.464-0.094-0.76-0.195-0.907c-0.125-0.236-0.419-0.557-1.085-0.557
			c-0.871,0-2.229,0.57-3.124,0.996V7.393L18.237,7.39L18.236,11.155z M18.237,5.214L6.917,5.209V4.225
			c0-0.203,0.164-0.367,0.366-0.367l10.59-0.008c0.2,0,0.367,0.178,0.367,0.38L18.237,5.214z"
											/>
											<polygon
												style="fill: #030104"
												points="17.403,10.842 17.395,9.847 14.496,9.845 14.505,10.842 		"
											/>
										</g>
									</g>
								</svg>
								<p>CARD</p>
								<svg
									class="check-payment-tick"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="var(--first-color)"
								>
									<path
										d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
									></path>
								</svg>
							</div>
							<div class="payment-method" data-payment-value="1">
								<img src="/static/icons/cashPaymnet.png" alt="" />
								<p>CASH</p>
								<svg
									class="check-payment-tick"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="var(--first-color)"
								>
									<path
										d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
									></path>
								</svg>
							</div>
							<div class="payment-method" data-payment-value="2">
								<img src="/static/icons/mpesa-logo.svg.png" alt="" />
								<p>MPESA</p>
								<svg
									class="check-payment-tick"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="var(--first-color)"
								>
									<path
										d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
									></path>
								</svg>
							</div>
						</div>
					</div>
					</div>
					<div>
						<div class="summary-taxi-details">
							<h3>Summary</h3>
							<h4>SERVICE TYPE</h4>
							<p>Distance</p>
							<hr />
							<h4>TRANSFER TYPE</h4>
							<p>${savedData.rideDetails.transferType}</p>
							<hr />
							<h4>PICKUP LOCATION</h4>
							<p>${savedData.rideDetails.pickupLocation}</p>
							<hr />
							<h4>DROPOFF LOCATION</h4>
							<p>${savedData.rideDetails.dropoffLocation}</p>
							<hr />
							<h4>PICKUP DATE, TIME</h4>
							<p>${savedData.rideDetails.pickupDay}, ${savedData.rideDetails.pickupTime}</p>
							<hr />
							<div class="summary-col-2 name-col-2">
								<div>
									<h4>TOTAL DISTANCE</h4>
									<p>${savedData.rideDetails.totalDistance}</p>
								</div>
								<div>
									<h4>TOTAL TIME</h4>
									<p>${savedData.rideDetails.totalTime}</p>
								</div>
							</div>
							<hr />
							<h4>VEHICLE</h4>
							<p>${vehicle.Name}</p>
						</div>
						<div class="taxi-total-cal" style="margin-top: 1rem; position: sticky; top: 0;">
							<div class="summary-total">
								<p>Selected Vehicle</p>
								<p>${vehicle.PricePerKM}</p>
							</div>
							<hr />
							<div class="summary-total">
								<p class="total-bold">Total</p>
								<p class="total-bold">$${totalPrice}</p>
							</div>
							<div class="summary-total">
								<p class="total-bold">To Pay <span>(30% deposit)</span></p>
								<p class="total-bold">$${depositPrice}</p>
							</div>
						</div>
					</div>
    `;

	taxiBtnsCont.innerHTML = `
				<div class="taxi-booking-btns">
					<div class="taxi-next-btn">
						BOOKING SUMMARY
						<i class="ri-arrow-right-s-line"></i>
					</div>
					<div class="taxi-next-btn">
						<i class="ri-arrow-left-s-line"></i>
						CHOOSE TAXI
					</div>
				</div>
	`;

	document
		.querySelector(".taxi-next-btn:nth-child(1)")
		.addEventListener("click", () => {
			if (submitForm("2")) {
				revielContent("3");
			}
		});

	// move back to the previous slide and autofill the forms
	document
		.querySelector(".taxi-next-btn:nth-child(2)")
		.addEventListener("click", () => {
			revielContent("1");
		});

	selectPaymentMethod();

	// auto-fill form if it is available
	// const savedData = getFromLocalStorage();
	if (savedData.contactDetails) {
		document.getElementById("firstName").value =
			savedData.contactDetails.firstName;
		document.getElementById("lastName").value =
			savedData.contactDetails.lastName;
		document.getElementById("email").value = savedData.contactDetails.email;
		document.getElementById("phoneNumber").value =
			savedData.contactDetails.phoneNumber;
		document.getElementById("comments").value =
			savedData.contactDetails.comments;

		document
			.querySelectorAll(".payment-method")
			[Number(savedData.contactDetails.paymentMethod)].classList.add(
				"payment-method-clicked"
			);
	}
}

function showBookSummary() {
	// saveState();
	dataDetailsCont.classList.remove("booking-container-choose-vehicle");
	dataDetailsCont.classList.add("summary-large-col");
	const savedData = getFromLocalStorage();
	let payment;
	if (savedData.contactDetails.paymentMethod === "1") {
		payment = "Cash";
	} else if (savedData.contactDetails.paymentMethod === "2") {
		payment = "M-PESA";
	} else {
		payment = "Card";
	}
	const vehicle = vehicles.find(
		(vehicle) => vehicle.ID === Number(savedData.taxiSelected)
	);
	const { totalPrice, depositPrice } = calculatePrices(
		vehicle.PricePerKM,
		savedData.rideDetails.totalDistance
	);

	dataDetailsCont.innerHTML = `
        <div class="taxi-booking-summary-end grid">
					<div class="summary-taxi-details-end">
						<div class="summary-taxi-edit">
							<h3>Contact & Billing Info</h3>
							<div class="taxi-edit-btn" id="contact-edit-back">Edit</div>
						</div>
						<div class="summary-col-2 name-col-2">
							<div>
								<h4>FIRST NAME</h4>
								<p>${savedData.contactDetails.firstName}</p>
							</div>
							<div>
								<h4>LAST NAME</h4>
								<p>${savedData.contactDetails.lastName}</p>
							</div>
						</div>
						<hr />
						<h4>EMAIL ADDRESS</h4>
						<p>${savedData.contactDetails.email}</p>
						<hr />
						<h4>Phone Number</h4>
						<p>${savedData.contactDetails.phoneNumber}</p>
					</div>
					<div class="summary-taxi-details-end">
						<div class="summary-taxi-edit">
							<h3>Payment</h3>
							<div class="taxi-edit-btn" id="payment-edit-back">Edit</div>
						</div>
						<h4>Your Choice</h4>
						<p>${payment}</p>
					</div>
				</div>
				<div>
					<div class="map"></div>
					<div class="summary-taxi-details-end">
						<div class="summary-taxi-edit">
							<h3>Ride Details</h3>
							<div class="taxi-edit-btn" id="ride-details-edit-back">Edit</div>
						</div>
						<h4>TRANSFER TYPE</h4>
						<p>${savedData.rideDetails.transferType}</p>
						<hr />
						<h4>PICKUP LOCATION</h4>
						<p>${savedData.rideDetails.pickupLocation}</p>
						<hr />
						<h4>DROP-OFF LOCATION</h4>
						<p>${savedData.rideDetails.dropoffLocation}</p>
						<hr />
						<h4>PICKUP DATE, TIME</h4>
						<p>${savedData.rideDetails.pickupDay}, ${savedData.rideDetails.pickupTime}</p>
						<hr />
						<div class="summary-col-2 name-col-2">
							<div>
								<h4>TOTAL DISTANCE</h4>
								<p id="total-distance">${savedData.rideDetails.totalDistance}</p>
							</div>
							<div>
								<h4>TOTAL TIME</h4>
								<p id="total-time">${savedData.rideDetails.totalTime}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="booking-car-sect-end">
					<div class="taxi-sel-img">
						<img src="${vehicle.Images[0]}" alt="" />
					</div>
					<div class="summary-taxi-details-end vehicle-summary">
						<div class="summary-taxi-edit">
							<h3>Vehicle Info</h3>
							<div class="taxi-edit-btn" id="vehicle-edit-back">Edit</div>
						</div>
						<h4>VEHICLE</h4>
						<p>${vehicle.Name}</p>
					</div>
					<div class="taxi-total-cal taxi-total-cal-end" style="margin-top: 2rem">
						<div class="summary-total">
							<p>Selected Vehicle</p>
							<p>${vehicle.PricePerKM}</p>
						</div>
						<hr />
						<div class="summary-total">
							<p class="total-bold">Total</p>
							<p class="total-bold">${totalPrice}</p>
						</div>
						<div class="summary-total">
							<p class="total-bold">To Pay <span>(30% deposit)</span></p>
							<p class="total-bold">${depositPrice}</p>
						</div>
					</div>
				</div>
    `;

	taxiBtnsCont.innerHTML = `
			<div class="taxi-next-btn taxi-next-btn-end taxi-btn taxi-btn-right">
				<div class="form-done">
					<p class="error-info"></p>
				</div>
				BOOKING
				<i class="ri-arrow-right-s-line"></i>
			</div>
	`;

	document.querySelector(".taxi-next-btn").addEventListener("click", () => {
		let statusInfo = document.querySelector(".error-info");
		const body = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(savedData),
		};
		fetch("/contact-form/taxi", body)
			// .then((response) => response.json())
			.then((response) => {
				if (!response.ok) {
					response.json().then((errorData) => {
						statusInfo.classList.add("fail");
						statusInfo.innerHTML = `Failed Submitting Form: ${errorData}`;
						setTimeout(() => {
							statusInfo.innerHTML = "";
							statusInfo.classList.remove("success");
							statusInfo.classList.remove("fail");
						}, 1000);
						return;
					});
				}
				return response.json();
			})
			.then((data) => {
				localStorage.clear();
				window.location.href = "/";
			})
			.catch((error) => {
				statusInfo.classList.add("fail");
				statusInfo.innerHTML = `Failed Submitting Form: ${error}`;
				setTimeout(() => {
					statusInfo.innerHTML = "";
					statusInfo.classList.remove("success");
					statusInfo.classList.remove("fail");
				}, 1000);
			});
	});

	document.getElementById("contact-edit-back").addEventListener("click", () => {
		revielContent("2");
	});

	document.getElementById("payment-edit-back").addEventListener("click", () => {
		revielContent("2");
	});

	document
		.getElementById("ride-details-edit-back")
		.addEventListener("click", () => {
			revielContent("0");
		});

	document.getElementById("vehicle-edit-back").addEventListener("click", () => {
		revielContent("1");
	});

	// mapInit();

	// calculateRoute(
	// 	savedData.rideDetails.pickupLocation,
	// 	savedData.rideDetails.dropoffLocation
	// );
}

async function mapInit() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -1.2832533, lng: 36.8172449 },
		zoom: 13,
	});

	console.log(map);
	// let directionsService = new google.maps.DirectionsService();
	let directionsRenderer = new google.maps.DirectionsRenderer();
	directionsRenderer.setMap(map);
}

function calculatePrices(pricePerKM, distance) {
	const price = parseFloat(pricePerKM.replace("$", ""));
	const distanceInKM = parseFloat(distance.replace(" km", ""));

	const totalPrice = price * distanceInKM;
	const depositPrice = (totalPrice * 0.3).toFixed(2);

	return { totalPrice: totalPrice.toFixed(2), depositPrice };
}

function showCarInfo() {
	const moreInfoBtns = document.querySelectorAll(".taxi-more-btn");
	moreInfoBtns.forEach(function (btn) {
		btn.addEventListener("click", function () {
			let parentDiv = btn.parentElement;
			if (parentDiv.classList.contains("taxi-more-details-opened")) {
				let carID = btn.dataset.carMoreInfo;
				let carCollection = document.querySelector(
					`.js-car-container-${carID}`
				);
				carCollection
					.querySelector(".taxi-more-details")
					.classList.remove("taxi-more-details-opened");
				parentDiv.classList.remove("taxi-more-details-opened");
				parentDiv.querySelector("p").innerText = "MORE INFO";
				btn.querySelector("i").classList.remove("ri-arrow-up-s-line");
				btn.querySelector("i").classList.add("ri-arrow-down-s-line");
			} else {
				let carID = btn.dataset.carMoreInfo;
				let carCollection = document.querySelector(
					`.js-car-container-${carID}`
				);
				carCollection
					.querySelector(".taxi-more-details")
					.classList.add("taxi-more-details-opened");
				parentDiv.classList.add("taxi-more-details-opened");
				parentDiv.querySelector("p").innerText = "LESS INFO";
				btn.querySelector("i").classList.remove("ri-arrow-down-s-line");
				btn.querySelector("i").classList.add("ri-arrow-up-s-line");
			}
		});
	});
}

function selectCarEvents() {
	let carSelectBtns = document.querySelectorAll(".taxi-select-btn");
	carSelectBtns.forEach(function (btn) {
		btn.addEventListener("click", function () {
			if (btn.classList.contains("taxi-select-btn-selected")) {
				btn.classList.remove("taxi-select-btn-selected");
				return;
			}

			let currentActive = document.querySelector(".taxi-select-btn-selected");
			if (currentActive) {
				currentActive.classList.remove("taxi-select-btn-selected");
			}
			btn.classList.add("taxi-select-btn-selected");
		});
	});
}

function selectPaymentMethod() {
	let paymentOptions = document.querySelectorAll(".payment-method");
	paymentOptions.forEach(function (btn) {
		btn.addEventListener("click", function () {
			let currentSelected = document.querySelector(".payment-method-clicked");
			if (currentSelected) {
				currentSelected.classList.remove("payment-method-clicked");
			}
			btn.classList.add("payment-method-clicked");
		});
	});
}

// initialize the first taxi button
document.querySelector(".taxi-next-btn").addEventListener("click", () => {
	if (submitForm("0")) {
		revielContent("1");
	}
});
