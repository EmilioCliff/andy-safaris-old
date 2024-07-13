import {
	collectFormValues,
	collectReviewValues,
	validateNairobiTourFormV,
	displayFormErrors,
	displayReviewFormErrors,
	validateCarHireForm,
	validateEnquiryForm,
	validateReviewForm,
} from "./taxi-form.js";
import { GetSafari } from "./data/safari.js";
import { GetVehicle } from "./data/vehicle.js";

let formContainer = document.querySelector(".js-form-container");
function initContact(form) {
	if (form === "nairobi") {
		showNairobiTourForm();
		document
			.getElementById("contact-form-submit")
			.addEventListener("click", () => {
				const entries = collectFormValues();
				const errors = validateNairobiTourFormV(entries);
				displayFormErrors(errors);

				// send post request to my backend
				if (errors.length === 0) {
					sendContactForm(entries, "nairobi-tour");
					return;
				}
			});
	} else if (form === "safari") {
		const safariID = urlParams.get("safariID");
		const safari = GetSafari(safariID);
		showSafariForm(safari);
		document
			.getElementById("contact-form-submit")
			.addEventListener("click", () => {
				const entries = collectFormValues();
				const errors = validateNairobiTourFormV(entries);
				displayFormErrors(errors);

				// send post request to my backend
				if (errors.length === 0) {
					sendContactForm(entries, "safari");
					return;
				}
			});
	} else if (form === "hire") {
		const carID = urlParams.get("carID");
		const vehicle = GetVehicle(carID);
		showCarHireForm(vehicle);
		document
			.getElementById("contact-form-submit")
			.addEventListener("click", () => {
				const entries = collectFormValues();
				const errors = validateCarHireForm(entries);
				displayFormErrors(errors);

				// send post request to my backend
				if (errors.length === 0) {
					entries.carName = vehicle.Name;
					sendContactForm(entries, "car-hire");
					return;
				}
			});
	} else {
		showEnquiryForm();
		document
			.getElementById("contact-form-submit")
			.addEventListener("click", () => {
				const entries = collectFormValues();
				const errors = validateEnquiryForm(entries);
				displayFormErrors(errors);

				// send post request to my backend
				if (errors.length === 0) {
					sendContactForm(entries, "enquery");
					return;
				}
			});

		document.getElementById("review-btn").addEventListener("click", () => {
			const entries = collectReviewValues();
			const errors = validateReviewForm(entries);
			displayReviewFormErrors(errors);

			// send post request to my backend
			if (errors.length === 0) {
				sendContactForm(entries, "review");
				return;
			}
		});
	}
}

const urlParams = new URLSearchParams(window.location.search);
const form = urlParams.get("form");
initContact(form);

function sendContactForm(entries, formName) {
	// sets the safari enquiry if the form submitted is an enquery form
	if (entries.serviceEnguery) {
		switch (entries.serviceEnguery) {
			case "0":
				entries.serviceEnguery = "safari";
				break;
			case "1":
				entries.serviceEnguery = "get-a-taxi";
				break;
			case "2":
				entries.serviceEnguery = "nairobi-tour";
				break;
			case "3":
				entries.serviceEnguery = "car-hire";
				break;
		}
	}

	fetch(`../php/email.php?form=${formName}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(entries),
	})
		.then((response) => response.text())
		.then((data) => {
			console.log(data);
			document.querySelector(`#${formName}-form`).reset();
			alert("Form Submitted Successfully");
		})
		.catch((error) => {
			console.log(error);
			alert("Form submission error: " + error);
		});

	// 	fetch(
	// 		"../php/email.php",
	// 		body
	// 	)
	// 		.then((response) => response.text())
	// 		// .then((response) => {
	// 		// 	// if (!response.ok) {
	// 		// 	// 	response.json().then((errorData) => {
	// 		// 	// 		alert("Form submission error: " + errorData);
	// 		// 	// 		// setInfoMessage([false, `Failed Submitting form: ${errorData}`]);
	// 		// 	// 		return;
	// 		// 	// 	});
	// 		// 	// }
	// 		// 	return response.json();
	// 		// })
	// 		.then((data) => {
	// 			// if (formName === "review") {
	// 			// 	setInfoMessage([true, `Submitted successful`], true);
	// 			// } else {
	// 			// 	setInfoMessage([true, `Submitted successful`]);
	// 			// }
	// 			alert("Form Submitted Successful");
	// 			console.log(data);

	// 			document.querySelector(`#${formName}-form`).reset();
	// 			// window.location.href = `/${formName}`;
	// 		})
	// 		.catch((error) => {
	// 			alert("Form submission error: " + error);
	// 			// setInfoMessage([false, `Error submitting form: ${error}`]);
	// 		});
}

function setInfoMessage(status, review) {
	let statusInfo;
	if (review) {
		statusInfo = document.querySelectorAll(".error-info")[1];
		console.log(statusInfo);
	} else {
		statusInfo = document.querySelector(".error-info");
	}
	if (status[0]) {
		statusInfo.classList.add("success");
		statusInfo.innerHTML = `<span>SUBMITTED</span>`;
	} else {
		statusInfo.classList.add("fail");
		statusInfo.innerHTML = `Failed Submitting Form: ${status[1]}`;
	}

	setTimeout(() => {
		statusInfo.innerHTML = "";
		statusInfo.classList.remove("success");
		statusInfo.classList.remove("fail");
	}, 1000);
}

function showEnquiryForm() {
	formContainer.innerHTML = `
		<section
			class="safari-intro js-form-title"
            data-form-name="enquiry"
			style="padding-bottom: 0rem; margin-bottom: 0"
		>
			<img
				src="./icons/icons8-contact-us-66.png"
				style="width: 3rem; margin: 0 auto"
				alt=""
			/>
			<div class="section-subtitle">Inquiry Contact Form</div>
			<div
				class="section-title"
				style="font-size: var(--large-font-size); margin-bottom: 0"
			>
				Enquire or Customize Service By Reaching Out
			</div>
		</section>
		<section
			class="taxi-intro-sec"
			style="padding-top: 0rem; margin-top: 0.5rem"
		>
			<div
				class="booking-container grid booking-container-choose-vehicle"
				style="margin-top: 2rem"
			>
				<div style="display: grid; row-gap: 2rem" class="contact-grid-swap">
					<div class="ride-details">
						<p class="progress-title">ENQUIRY FORM</p>
						<form action="" class="ride-details-form" id="enquery-form" autocomplete="off">
							<div class="date-input-container">
								<label for="fullName"> FULL NAME <sup>&#x2217;</sup></label>
								<input
									type="text"
									name="fullName"
									id="fullName"
									placeholder="Enter fullName"
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
									placeholder="example@gmail.com"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="phoneNumber">
									PHONE NUMBER <sup>&#x2217;</sup>
								</label>
								<input
									type="telephone"
									name="phoneNumber"
									id="phoneNumber"
									placeholder="Enter your Phone Number"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container inner-select">
								<label for="serviceEnguery"> SERVICE ENQUERY </label>
								<select
									class="select-options inner-select-option"
									name="serviceEnguery"
									id="serviceEnguery"
									style="font-weight: var(--font-medium)"
								>
									<option value="0">SAFARIS</option>
									<option value="1">GET A TAXI</option>
									<option value="2">NAIROBI TOUR</option>
									<option value="3">CAR HIRE</option>
								</select>
							</div>
							<div class="date-input-container">
								<label for="additionalMessage">ADDITIONAL MESSAGE</label>
								<textarea name="additionalMessage" id="additionalMessage">
								</textarea>
							</div>
							<div class="btn-sections" style="margin-block: 1.5rem 2rem;">
								
								<div
									class="taxi-next-btn taxi-btn taxi-btn-right"
									id="contact-form-submit"
									>
									<div class="form-done">
										<p class="error-info"></p>
									</div>
									SEND ENQUIRY
								</div>
							</div>
						</form>
					</div>
				</div>
				<div>
					<div class="booking-car-sect-end">
						<div class="enquery-socials">
							<div class="enquiry-social-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="var(--first-color)"
								>
									<path
										d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
									></path>
								</svg>
							</div>
							<p>Phone Number</p>
							<p>+254 719 700 261</p>
						</div>
						<div class="enquery-socials">
							<div class="enquiry-social-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="var(--first-color)"
								>
									<path
										d="M2.24283 6.85435L11.4895 1.3086C11.8062 1.11865 12.2019 1.11872 12.5185 1.30878L21.7573 6.85433C21.9079 6.9447 22 7.10743 22 7.28303V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.28315C2 7.10748 2.09218 6.94471 2.24283 6.85435ZM18.3456 8.24383L12.0606 13.6829L5.64722 8.23769L4.35278 9.7623L12.0731 16.3171L19.6544 9.75615L18.3456 8.24383Z"
									></path>
								</svg>
							</div>
							<p>Email Address</p>
							<p>andysafariskenya@gmail.com</p>
						</div>
						<div class="enquery-socials">
							<div class="enquiry-social-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="var(--first-color)"
								>
									<path
										d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"
									></path>
								</svg>
							</div>
							<p>Office Location</p>
							<p>P.O Box 0000 - 0000</p>
							<p>Nairobi Kenya</p>
						</div>
						<div class="enquery-socials">
							<div class="enquiry-social-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="var(--first-color)"
								>
									<path
										d="M18.5753 13.7114C19.0742 13.7114 19.4733 13.2873 19.4733 12.8134C19.4733 12.3145 19.0742 11.9155 18.5753 11.9155C18.0765 11.9155 17.6774 12.3145 17.6774 12.8134C17.6774 13.3123 18.0765 13.7114 18.5753 13.7114ZM14.1497 13.7114C14.6485 13.7114 15.0476 13.2873 15.0476 12.8134C15.0476 12.3145 14.6485 11.9155 14.1497 11.9155C13.6508 11.9155 13.2517 12.3145 13.2517 12.8134C13.2517 13.3123 13.6508 13.7114 14.1497 13.7114ZM20.717 18.7516C20.5942 18.8253 20.5205 18.9482 20.5451 19.1202C20.5451 19.1693 20.5451 19.2185 20.5696 19.2676C20.6679 19.6854 20.8643 20.349 20.8643 20.3736C20.8643 20.4473 20.8889 20.4964 20.8889 20.5456C20.8889 20.6685 20.7907 20.7668 20.6679 20.7668C20.6187 20.7668 20.5942 20.7422 20.5451 20.7176L19.0961 19.882C18.9978 19.8329 18.875 19.7837 18.7522 19.7837C18.6786 19.7837 18.6049 19.7837 18.5558 19.8083C17.8681 20.0049 17.1559 20.1032 16.3946 20.1032C12.7352 20.1032 9.78815 17.6456 9.78815 14.5983C9.78815 11.5509 12.7352 9.09329 16.3946 9.09329C20.0539 9.09329 23.001 11.5509 23.001 14.5983C23.001 16.2448 22.1168 17.7439 20.717 18.7516ZM16.6737 8.09757C16.581 8.09473 16.488 8.09329 16.3946 8.09329C12.2199 8.09329 8.78815 10.9536 8.78815 14.5983C8.78815 15.1519 8.86733 15.6874 9.01626 16.1975H8.92711C8.04096 16.1975 7.15481 16.0503 6.3425 15.8296C6.26866 15.805 6.19481 15.805 6.12097 15.805C5.97327 15.805 5.82558 15.8541 5.7025 15.9277L3.95482 16.9334C3.90559 16.958 3.85635 16.9825 3.80712 16.9825C3.65943 16.9825 3.53636 16.8599 3.53636 16.7127C3.53636 16.6391 3.56097 16.59 3.58559 16.5164C3.6102 16.4919 3.83174 15.6824 3.95482 15.1918C3.95482 15.1427 3.97943 15.0691 3.97943 15.0201C3.97943 14.8238 3.88097 14.6766 3.75789 14.5785C2.05944 13.3765 1.00098 11.5858 1.00098 9.59876C1.00098 5.94369 4.5702 3 8.95173 3C12.7157 3 15.8802 5.16856 16.6737 8.09757ZM11.5199 8.51604C12.0927 8.51604 12.5462 8.03871 12.5462 7.4898C12.5462 6.91701 12.0927 6.46356 11.5199 6.46356C10.9471 6.46356 10.4937 6.91701 10.4937 7.4898C10.4937 8.06258 10.9471 8.51604 11.5199 8.51604ZM6.26045 8.51604C6.83324 8.51604 7.28669 8.03871 7.28669 7.4898C7.28669 6.91701 6.83324 6.46356 6.26045 6.46356C5.68767 6.46356 5.23421 6.91701 5.23421 7.4898C5.23421 8.06258 5.68767 8.51604 6.26045 8.51604Z"
									></path>
								</svg>
							</div>
							<p>Socials</p>
							<div class="enquiry-socials">
								<a href="#"><i class="ri-twitter-x-fill"></i></a>
								<a href="#"><i class="ri-facebook-fill"></i></a>
								<a href="#"><i class="ri-instagram-line"></i></a>
								<a href="#"><i class="ri-whatsapp-line"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="review-container">
				<p class="progress-title">LEAVE A REVIEW</p>
				<form
					action=""
					class="ride-details-form review-cont"
					id="review-form"
					autocomplete="off"
				>
					<div class="date-input-container">
						<label for="fullName">FULL NAME</label>
						<input
							type="text"
							name="fullName"
							id="fullName"
							placeholder="Enter First Name"
						/>
						<div class="error-message">
							<p></p>
						</div>
					</div>
					<div class="date-input-container">
						<label for="email">EMAIL NAME</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="example@gmail.com"
						/>
						<div class="error-message">
							<p></p>
						</div>
					</div>
					<div class="date-input-container">
						<label for="review">REVIEW</label>
						<textarea name="review" id="review"> </textarea>
						<div class="error-message">
							<p></p>
						</div>
					</div>
				</form>
				<div
					class="taxi-next-btn taxi-btn taxi-btn-right"
					style="margin-top: 1rem; margin-inline: auto"
					id="review-btn"
				>
				<div class="form-done">
										<p class="error-info"></p>
									</div>
					LEAVE A REVIEW
				</div>
			</div>
		</section>
	`;
}

function showCarHireForm(vehicle) {
	formContainer.innerHTML = `
		 <section
    class="safari-intro"
    style="padding-bottom: 0rem; margin-bottom: 0"
    >
    <svg
        class="section-animal-logo"
        fill="var(--title-color)"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="800px"
        height="800px"
        viewBox="0 0 444.103 444.103"
        xml:space="preserve"
        >
        <g>
            <path
                d="M0,219.744v48.098c0,8.301,6.729,15.03,15.03,15.03h40.208c7.529,19.854,26.738,34.011,49.199,34.011
                    c22.462,0,41.671-14.155,49.2-34.011h144.848c7.53,19.854,26.738,34.011,49.2,34.011s41.671-14.155,49.2-34.011h15.776
                    c18.779,0,27.955-8.109,30.259-15.723c5.828-19.267-11.758-53.979-12.028-54.314c-2.421-3.013-5.909-4.977-9.74-5.485
                    l-92.863-16.828c0,0-52.394-50.088-83.468-50.088l-18.642,0.007l-4.748-8.705c-1.519-2.784-4.437-4.516-7.607-4.516h-41.212
                    c-3.172,0-6.09,1.732-7.608,4.516l-4.761,8.729l-20.136,0.007c-20.302,0-37.269,15.47-56.915,33.382
                    c-9.257,8.44-19.478,17.729-30.751,25.99l-41.981,5.583C4.395,207.361,0,213.037,0,219.744z M327.645,264.278
                    c0-11.052,8.99-20.041,20.041-20.041s20.041,8.989,20.041,20.041c0,11.051-8.99,20.041-20.041,20.041
                    S327.645,275.327,327.645,264.278z M233.752,233.877h23.4v-23.399h23.398v23.399h-23.398v23.399h-23.4V233.877z M210.352,210.477
                    h23.399v23.399h-23.399V210.477z M163.553,210.477h23.399v23.399h23.4v23.398h-23.4v-23.398h-23.399V210.477L163.553,210.477z
                    M84.397,264.278c0-11.052,8.991-20.041,20.041-20.041c11.051,0,20.041,8.989,20.041,20.041c0,11.051-8.99,20.041-20.041,20.041
                    C93.388,284.317,84.397,275.327,84.397,264.278z"
            />
        </g>
    </svg>
        <div class="section-subtitle">Car-Hire Contact Form</div>
        <div
            class="section-title"
            style="font-size: var(--large-font-size); margin-bottom: 0"
            >
            Let's Get You On The Road!!
        </div>
</section>
    <section
        class="taxi-intro-sec js-form-title"
        data-form-name="hire"
        style="padding-top: 0rem; margin-top: 0.5rem"
        >
        <div
            class="booking-container grid booking-container-choose-vehicle"
            style="margin-top: 2rem"
            >
            <div style="display: grid; row-gap: 2rem" class="contact-grid-swap">
                <div class="ride-details">
                    <p class="progress-title">CAR-HIRE BOOKING FORM</p>
                    <form action="" class="ride-details-form" id="car-hire-form">
							<div class="summary-col-2">
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
							</div>
							<div class="date-input-container">
								<label for="email"> EMAIL ADDRESS <sup>&#x2217;</sup></label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="example@gmail.com"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="phoneNumber">
									PHONE NUMBER <sup>&#x2217;</sup>
								</label>
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
								<label for="duration">
									DURATION DAYS <sup>&#x2217;</sup>
								</label>
								<input
									type="number"
									name="duration"
									id="duration"
									placeholder="0"
									min="0"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="pickupDay"> PICKUP DAY <sup>&#x2217;</sup> </label>
								<input
									type="date"
									name="pickupDay"
									id="pickupDay"
									placeholder="Enter pick up time"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="additionalMessage">ADDITIONAL MESSAGE</label>
								<textarea name="additionalMessage" id="additionalMessage">
								</textarea>
							</div>
						</form>
                </div>
            </div>
            <div>
                <div class="booking-car-sect-end">
                    <div class="taxi-sel-img">
                        <img src=${vehicle.Images[0]} alt="" />
                    </div>
					<div class="summary-taxi-details">
						<h3>Summary</h3>
						<h4>SERVICE TYPE</h4>
						<p>CAR-HIRE</p>
						<hr />
						<h4>VEHICLE NAME</h4>
						<p>${vehicle.Name}</p>
						<hr />
						<h4>VEHICLE PRICE PER KM</h4>
						<p>${vehicle.PricePerKM}</p>
						<hr />
						<h4>VEHICLE PRICE PER MONTH</h4>
						<p>${vehicle.PricePerMonth}</p>
						<hr />
						<h4>VEHICLE 6 MONTHS CONTRACT</h4>
						<p>${vehicle.PriceMonthsContract}</p>
					</div>
                </div>
				<div class="taxi-total-cal" style="margin-top: 1rem">
                    <div class="summary-total">
                        <p>Selected Vehicle</p>
                        <p>$57.26</p>
                    </div>
                    <hr />
                    <div class="summary-total">
                        <p class="total-bold">Total</p>
                        <p class="total-bold">$57.26</p>
                    </div>
                    <div class="summary-total">
                        <p class="total-bold">To Pay <span>(30% deposit)</span></p>
                        <p class="total-bold">$17.18</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-sections">
            <div class="taxi-next-btn taxi-btn taxi-btn-right" id="contact-form-submit">
			<div class="form-done">
										<p class="error-info"></p>
									</div>
                BOOK CAR
                
            </div>
        </div>
</section>

	`;
}

function showSafariForm(safari) {
	formContainer.innerHTML = `
		<section
    class="safari-intro"
    style="padding-bottom: 0rem; margin-bottom: 0"
    >
    <svg
        class="section-animal-logo"
        fill="var(--title-color)"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 505.087 505.087"
        xml:space="preserve"
        >
		<path
			d="M488.909,418.392c-34.84-27.219-3.266-93.632-3.266-93.632c63.147-161.134-46.108-242.307-64.788-252.887
            c-38.033-21.541-128.497-42.648-174.166,15.319c-12.916,16.394-8.599,36.754-2.654,50.984
            c15.302,36.618,56.436,69.544,91.693,73.388c10.054,1.123,17.377-1.182,22.336-6.958c15.761-18.347,7.451-66.618,2.909-83.672
            c-1.233-4.644,1.531-9.416,6.184-10.658c1.341-0.356,2.664-0.3,3.938-0.041c3.142,0.637,5.842,2.909,6.72,6.225
            c1.905,7.179,17.956,70.998-6.532,99.501c-5.401,6.286-15.004,13.286-30.97,13.286c-2.05,0-4.21-0.119-6.473-0.366
            c-41.593-4.542-88.095-41.432-105.88-83.995c-4.475-10.708-6.707-21.065-6.948-30.835c-99.728,0-213.575,55.596-220.991,155.597
            c-0.238,3.208,1.735,6.167,4.789,7.179c3.054,1.021,6.413-0.169,8.14-2.882c6.124-9.616,13.75-20.027,21.325-26.585
            c1.087,15.749,5.871,30.796,14.136,44.532c16.552,27.508,25.39,59.098,25.39,91.198l0.158,59.253
            c0.843,7.261,17.995,13.065,39.181,13.065c21.194,0,38.346-5.804,39.19-13.065l0.158-38.455c0-10.096,4.21-19.742,11.61-26.616
            c7.4-6.873,17.316-9.628,27.413-9.628c6.263,0,19.079,0.009,19.828,0c9.688-0.101,19.019,4.337,25.899,11.159
            c6.89,6.822,10.761,16.11,10.761,25.799l0.158,37.74c0.843,7.261,17.994,13.065,39.181,13.065c21.194,0,38.346-5.804,39.19-13.065
            l0.158-33.215c0-98.599,72.254-142.598,80.839-147.814c42.606-25.886,23.68,52.557,23.68,52.557
            c-28.307,88.188,37.017,128.472,37.017,128.472l0.293-0.339c0.204,0.208,0.262,0.544,0.498,0.722
            c4.184,3.155,11.799,0.128,16.995-6.779c4.792-6.34,5.668-13.564,2.569-17.171L488.909,418.392z"
		/>
	</svg>
    <div class="section-subtitle">Safaris Contact Form</div>
    <div
        class="section-title"
        style="font-size: var(--large-font-size); margin-bottom: 0"
        >
        Book your dream East African Safari Tour Today!!
    </div>
</section>
<section
    class="taxi-intro-sec js-form-title"
    data-form-name="safari"
    style="padding-top: 0rem; margin-top: 0.5rem"
>
    <div
        class="booking-container grid booking-container-choose-vehicle"
        style="margin-top: 2rem"
    >
        <div style="display: grid; row-gap: 2rem" class="contact-grid-swap">
            <div class="ride-details">
                <p class="progress-title">SAFARI BOOKING FORM</p>
                    <form action="" class="ride-details-form" id="safari-form">
							<div class="summary-col-2">
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
							</div>
							<div class="date-input-container">
								<label for="email"> EMAIL ADDRESS <sup>&#x2217;</sup></label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="example@gmail.com"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="phoneNumber">
									PHONE NUMBER <sup>&#x2217;</sup>
								</label>
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
							<div class="summary-col-2">
								<div class="date-input-container">
									<label for="safariDate">
										SAFARI DATE <sup>&#x2217;</sup>
									</label>
									<input type="date" name="safariDate" id="safariDate" />
									<div class="error-message">
										<p></p>
									</div>
								</div>
								<div class="date-input-container">
									<label for="arrivalDate"> ARRIVAL DATE </label>
									<input
										type="date"
										name="arrivalDate"
										id="arrivalDate"
										placeholder="Enter pick up time"
									/>
								</div>
							</div>
							<div class="summary-col-2">
								<div class="date-input-container">
									<label for="noOfAdults"> NUMBER OF ADULTS </label>
									<input
										type="number"
										name="noOfAdults"
										id="noOfAdults"
										placeholder="0"
										min="0"
									/>
								</div>
								<div class="date-input-container">
									<label for="noOfChildren"> NUMBER OF CHILDREN </label>
									<input
										type="number"
										name="noOfChildren"
										id="noOfChildren"
										placeholder="0"
										min="0"
									/>
								</div>
							</div>
							<div class="date-input-container">
								<label for="additionalMessage">ADDITIONAL MESSAGE</label>
								<textarea name="additionalMessage" id="additionalMessage">
								</textarea>
							</div>
					</form>
            </div>
        </div>
        <div>
            <div class="summary-taxi-details">
                <h3>Summary</h3>
                <h4>SERVICE TYPE</h4>
                <p>Safari</p>
                <hr />
                <h4>SAFARI NAME</h4>
                <p>${safari.Title}</p>
                <hr />
                <h4>SAFARI BY</h4>
                <p>${safari.Guide}</p>
                <hr />
                <h4>SAFARI DURATION</h4>
                <p>${safari.Days} DAYS</p>
                <hr />
                <h4>SAFARI DESCRIPTION</h4>
                <p
                    style="
                        font-size: var(--normal-font-size);
                        font-weight: var(--font-light);
                    "
                >
                   ${safari.Description}
                </p>
            </div>
            <div class="taxi-total-cal" style="margin-top: 1rem">
                    <div class="summary-total">
                        <p>Safari</p>
                        <p>$57.26</p>
                    </div>
                    <hr />
                    <div class="summary-total">
                        <p class="total-bold">Total</p>
                        <p class="total-bold">$57.26</p>
                    </div>
                    <div class="summary-total">
                        <p class="total-bold">To Pay <span>(30% deposit)</span></p>
                        <p class="total-bold">$17.18</p>
                    </div>
                </div>
        </div>
    </div>
    <div class="btn-sections">
        <div class="taxi-next-btn taxi-btn taxi-btn-right" id="contact-form-submit">
		<div class="form-done">
										<p class="error-info"></p>
									</div>
            BOOK SAFARI
        </div>
    </div>
</section>
	`;
}

function showNairobiTourForm() {
	formContainer.innerHTML = `
		<section
        class="safari-intro js-form-title"
        data-form-name="nairobi"
        style="padding-bottom: 0rem; margin-bottom: 0"
        >
        <svg
            class="section-animal-logo"
            fill="var(--title-color)"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 505.087 505.087"
            xml:space="preserve"
            >
            <path
                d="M488.909,418.392c-34.84-27.219-3.266-93.632-3.266-93.632c63.147-161.134-46.108-242.307-64.788-252.887
                c-38.033-21.541-128.497-42.648-174.166,15.319c-12.916,16.394-8.599,36.754-2.654,50.984
                c15.302,36.618,56.436,69.544,91.693,73.388c10.054,1.123,17.377-1.182,22.336-6.958c15.761-18.347,7.451-66.618,2.909-83.672
                c-1.233-4.644,1.531-9.416,6.184-10.658c1.341-0.356,2.664-0.3,3.938-0.041c3.142,0.637,5.842,2.909,6.72,6.225
                c1.905,7.179,17.956,70.998-6.532,99.501c-5.401,6.286-15.004,13.286-30.97,13.286c-2.05,0-4.21-0.119-6.473-0.366
                c-41.593-4.542-88.095-41.432-105.88-83.995c-4.475-10.708-6.707-21.065-6.948-30.835c-99.728,0-213.575,55.596-220.991,155.597
                c-0.238,3.208,1.735,6.167,4.789,7.179c3.054,1.021,6.413-0.169,8.14-2.882c6.124-9.616,13.75-20.027,21.325-26.585
                c1.087,15.749,5.871,30.796,14.136,44.532c16.552,27.508,25.39,59.098,25.39,91.198l0.158,59.253
                c0.843,7.261,17.995,13.065,39.181,13.065c21.194,0,38.346-5.804,39.19-13.065l0.158-38.455c0-10.096,4.21-19.742,11.61-26.616
                c7.4-6.873,17.316-9.628,27.413-9.628c6.263,0,19.079,0.009,19.828,0c9.688-0.101,19.019,4.337,25.899,11.159
                c6.89,6.822,10.761,16.11,10.761,25.799l0.158,37.74c0.843,7.261,17.994,13.065,39.181,13.065c21.194,0,38.346-5.804,39.19-13.065
                l0.158-33.215c0-98.599,72.254-142.598,80.839-147.814c42.606-25.886,23.68,52.557,23.68,52.557
                c-28.307,88.188,37.017,128.472,37.017,128.472l0.293-0.339c0.204,0.208,0.262,0.544,0.498,0.722
                c4.184,3.155,11.799,0.128,16.995-6.779c4.792-6.34,5.668-13.564,2.569-17.171L488.909,418.392z"
            />
        </svg>
        <div class="section-subtitle">Nairobi Tour Contact Form</div>
        <div
            class="section-title"
            style="font-size: var(--large-font-size); margin-bottom: 0"
            >
            Tour Nairobi City
        </div>
    </section>
    <section
        class="taxi-intro-sec"
        style="padding-top: 0rem; margin-top: 0.5rem"
        >
        <div
            class="booking-container grid booking-container-choose-vehicle"
            style="margin-top: 2rem"
        >
            <div style="display: grid; row-gap: 2rem" class="contact-grid-swap">
                <div class="ride-details">
                    <p class="progress-title">NAIROBI TOUR BOOKING FORM</p>
                    <form action="" class="ride-details-form" id="nairobi-tour-form">
							<div class="summary-col-2">
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
							</div>
							<div class="date-input-container">
								<label for="email"> EMAIL ADDRESS <sup>&#x2217;</sup></label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="example@gmail.com"
								/>
								<div class="error-message">
									<p></p>
								</div>
							</div>
							<div class="date-input-container">
								<label for="phoneNumber">
									PHONE NUMBER <sup>&#x2217;</sup>
								</label>
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
							<div class="summary-col-2">
								<div class="date-input-container">
									<label for="safariDate">
										SAFARI DATE <sup>&#x2217;</sup>
									</label>
									<input type="date" name="safariDate" id="safariDate" />
									<div class="error-message">
										<p></p>
									</div>
								</div>
								<div class="date-input-container">
									<label for="arrivalDate"> ARRIVAL DATE </label>
									<input
										type="date"
										name="arrivalDate"
										id="arrivalDate"
										placeholder="Enter pick up time"
									/>
								</div>
							</div>
							<div class="summary-col-2">
								<div class="date-input-container">
									<label for="noOfAdults"> NUMBER OF ADULTS </label>
									<input
										type="number"
										name="noOfAdults"
										id="noOfAdults"
										placeholder="0"
										min="0"
									/>
								</div>
								<div class="date-input-container">
									<label for="noOfChildren"> NUMBER OF CHILDREN </label>
									<input
										type="number"
										name="noOfChildren"
										id="noOfChildren"
										placeholder="0"
										min="0"
									/>
								</div>
							</div>
							<div class="date-input-container">
								<label for="additionalMessage">ADDITIONAL MESSAGE</label>
								<textarea name="additionalMessage" id="additionalMessage">
								</textarea>
							</div>
					</form>
                </div>
            </div>
            <div>
                <div class="summary-taxi-details">
                    <h3>Summary</h3>
                    <h4>SERVICE TYPE</h4>
                    <p>Nairobi Tour</p>
                    <hr />
                    <h4>TOUR DURATION</h4>
                    <p>1 DAY</p>
                    <hr />
                    <h4>TOUR DESCRIPTION</h4>
                    <p
                        style="
                            font-size: var(--normal-font-size);
                            font-weight: var(--font-light);
                        "
                        >
                        Nairobi, the bustling capital of Kenya, offers a mix of modern city life,
                        rich cultural experiences, and stunning natural attractions. For a
                        single-day tour of Nairobi, here's a detailed itinerary that includes key
                        attractions, transport, and accommodation options.
                    </p>
                </div>
                <div class="taxi-total-cal" style="margin-top: 1rem">
                    <div class="summary-total">
                        <p>Nairobi Tour</p>
                        <p>$57.26</p>
                    </div>
                    <hr />
                    <div class="summary-total">
                        <p class="total-bold">Total</p>
                        <p class="total-bold">$57.26</p>
                    </div>
                    <div class="summary-total">
                        <p class="total-bold">To Pay <span>(30% deposit)</span></p>
                        <p class="total-bold">$17.18</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-sections">
            <div class="taxi-next-btn taxi-btn taxi-btn-right" id="contact-form-submit">
			<div class="form-done">
										<p class="error-info"></p>
									</div>
                BOOK TOUR
            </div>
        </div>
    </section>
	`;
}
