let taxiForm = {};

function saveToLocalStorage(values) {
	localStorage.setItem("values", JSON.stringify(values));
}

export function getFromLocalStorage() {
	return JSON.parse(localStorage.getItem("values"));
}

export function submitForm(currentProgress) {
	let values;
	let errors;
	switch (currentProgress) {
		case "0":
			values = collectFormValues();
			errors = validateRideDetailsForm(values);
			displayFormErrors(errors);

			if (errors.length === 0) {
				values["totalDistance"] =
					document.getElementById("total-distance").innerText;
				values["totalTime"] = document.getElementById("total-time").innerText;
				taxiForm["rideDetails"] = values;
				saveToLocalStorage(taxiForm);
				return true;
			}

			return false;
		case "1":
			if (document.querySelector(".taxi-select-btn-selected")) {
				taxiForm["taxiSelected"] = document.querySelector(
					".taxi-select-btn-selected"
				).dataset.carId;
				saveToLocalStorage(taxiForm);
				return true;
			}

			displayFormErrors(["Please Choose A  Vehicle"]);
			return false;
		case "2":
			values = collectFormValues();
			errors = validateContactDetailsForm(values);
			displayFormErrors(errors);
			if (!document.querySelector(".payment-method-clicked")) {
				errors.push("choose payent method");
				let error = document.querySelector(
					".payment-methods-taxi .error-message"
				);
				if (error !== undefined) {
					console.log(error);
					error.style.display = "block";
					error.querySelector("p").innerText = "Please select payment method";
				}

				setTimeout(() => {
					error.style.display = "none";
				}, 3000);
			}

			if (errors.length === 0) {
				values["paymentMethod"] = document.querySelector(
					".payment-method-clicked"
				).dataset.paymentValue;
				taxiForm["contactDetails"] = values;
				saveToLocalStorage(taxiForm);
				return true;
			}

			return false;
		case "3":
			return true;
	}
}

// genrall to all forms gets its values
export function collectFormValues() {
	const form = document.querySelector(".ride-details-form");
	const formData = new FormData(form);
	const values = {};

	for (const [key, value] of formData.entries()) {
		values[key] = value;
	}

	return values;
}

export function collectReviewValues() {
	const form = document.querySelector(".ride-details-form.review-cont");
	const formData = new FormData(form);
	const values = {};

	for (const [key, value] of formData.entries()) {
		values[key] = value;
	}

	return values;
}

// individual form validations for ride details
function validateRideDetailsForm(values) {
	let errors = [];

	if (!values.pickupDay || !/^\d{4}-\d{2}-\d{2}$/.test(values.pickupDay)) {
		errors[0] = "Valid pickupDay is required (YYYY-MM-DD)";
	}

	if (!values.pickupTime || !/^\d{2}:\d{2}$/.test(values.pickupTime)) {
		errors[1] = "Valid pickupTime time is required (HH:MM)";
	}

	if (!values.pickupLocation || values.pickupLocation.trim() === "") {
		errors[2] = "pickupLocation is required";
	}

	if (!values.dropoffLocation || values.dropoffLocation.trim() === "") {
		errors[3] = "Last dropoffLocation is required";
	}

	return errors;
}

function validateContactDetailsForm(values) {
	let errors = [];

	if (!values.firstName || values.firstName.trim() === "") {
		errors[0] = "first name is required";
	}

	if (!values.lastName || values.lastName.trim() === "") {
		errors[1] = "last name is required";
	}

	if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors[2] = "valid email is required";
	}

	if (!values.phoneNumber || !/^\d{10}$/.test(values.phoneNumber)) {
		errors[3] = "phone-number is required";
	}

	// if (!values.pickupDay || !/^\d{4}-\d{2}-\d{2}$/.test(values.pickupDay)) {
	// 	errors[0] = "Valid pickupDay is required (YYYY-MM-DD)";
	// }

	// if (!values.pickupTime || !/^\d{2}:\d{2}$/.test(values.pickupTime)) {
	// 	errors[1] = "Valid pickupTime time is required (HH:MM)";
	// }

	// if (!values.pickupLocation || values.pickupLocation.trim() === "") {
	// 	errors[2] = "pickupLocation is required";
	// }

	// if (!values.dropoffLocation || values.dropoffLocation.trim() === "") {
	// 	errors[3] = "Last dropoffLocation is required";
	// }

	return errors;
}

// function validate nairobiTourForm
export function validateNairobiTourFormV(values) {
	let errors = [];

	if (!values.firstName || values.firstName.trim() === "") {
		errors[0] = "first name is required";
	}

	if (!values.lastName || values.lastName.trim() === "") {
		errors[1] = "last name is required";
	}

	if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors[2] = "valid email is required";
	}

	if (!values.phoneNumber || !/^\d{10}$/.test(values.phoneNumber)) {
		errors[3] = "phone-number is required";
	}

	if (values.safariDate) {
		const [year, month, day] = values.safariDate.split("-");
		const formattedDate = `${month}-${day}-${year}`;

		if (!/^\d{2}-\d{2}-\d{4}$/.test(formattedDate)) {
			errors[4] = "Valid safariDate is required (MM-DD-YYYY)";
		}
	} else {
		errors[4] = "Valid safariDate is required (MM-DD-YYYY)";
	}

	return errors;
}

export function validateCarHireForm(values) {
	let errors = [];

	if (!values.firstName || values.firstName.trim() === "") {
		errors[0] = "first name is required";
	}

	if (!values.lastName || values.lastName.trim() === "") {
		errors[1] = "last name is required";
	}

	if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors[2] = "valid email is required";
	}

	if (!values.phoneNumber || !/^\d{10}$/.test(values.phoneNumber)) {
		errors[3] = "phone-number is required";
	}

	if (!values.duration) {
		errors[4] = "duration is required";
	}

	if (values.pickupDay) {
		const [year, month, day] = values.pickupDay.split("-");
		const formattedDate = `${month}-${day}-${year}`;

		if (!/^\d{2}-\d{2}-\d{4}$/.test(formattedDate)) {
			errors[5] = "Valid pickupDay is required (MM-DD-YYYY)";
		}
	} else {
		errors[5] = "Valid pickupDay is required (MM-DD-YYYY)";
	}

	return errors;
}

export function validateEnquiryForm(values) {
	let errors = [];

	if (!values.fullName || values.fullName.trim() === "") {
		errors[0] = "full name is required";
	}

	if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors[1] = "valid email is required";
	}

	if (!values.phoneNumber || !/^\d{10}$/.test(values.phoneNumber)) {
		errors[2] = "phone-number is required";
	}

	return errors;
}

export function validateReviewForm(values) {
	let errors = [];

	if (!values.fullName || values.fullName.trim() === "") {
		errors[0] = "full name is required";
	}

	if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors[1] = "valid email is required";
	}

	if (!values.review || values.review.trim() === "") {
		errors[2] = "review is required";
	}

	return errors;
}

export function displayFormErrors(errors) {
	let errorTooltip = document.querySelectorAll(".error-message");
	errorTooltip.forEach((error, i) => {
		if (errors[i] !== undefined) {
			error.style.display = "block";
			error.querySelector("p").innerText = errors[i];
		}
	});

	errors = [];
	setTimeout(() => {
		errorTooltip.forEach((error) => {
			error.style.display = "none";
		});
	}, 3000);
}

export function displayReviewFormErrors(errors) {
	let errorTooltip = document.querySelectorAll(
		".review-container .error-message"
	);
	errorTooltip.forEach((error, i) => {
		if (errors[i] !== undefined) {
			error.style.display = "block";
			error.querySelector("p").innerText = errors[i];
		}
	});

	errors = [];
	setTimeout(() => {
		errorTooltip.forEach((error) => {
			error.style.display = "none";
		});
	}, 3000);
}

// function validateFormValues(values) {
// 	// const errors = {};

// 	// Validate text fields
// 	if (!values.firstName || values.firstName.trim() === "") {
// 		errors.firstName = "First name is required";
// 	}

// 	if (!values.lastName || values.lastName.trim() === "") {
// 		errors.lastName = "Last name is required";
// 	}

// 	// Validate email

// 	// Validate passwords
// 	if (!values.password || values.password.trim() === "") {
// 		errors.password = "Password is required";
// 	}

// 	if (values.password !== values.confirmPassword) {
// 		errors.confirmPassword = "Passwords do not match";
// 	}

// 	// Placeholder for payment method validation
// 	// const paymentMethod = collectPaymentMethod();
// 	// if (!paymentMethod) {
// 	// 	errors.paymentMethod = "Payment method is required";
// 	// }

// 	// values.paymentMethod = paymentMethod;

// 	return errors;
// }

// function collectPaymentMethod() {}
