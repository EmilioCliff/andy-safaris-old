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

function initContact(form) {
	if (form === "nairobi") {
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
		document
			.getElementById("contact-form-submit")
			.addEventListener("click", () => {
				const entries = collectFormValues();
				const errors = validateCarHireForm(entries);
				displayFormErrors(errors);

				// send post request to my backend
				if (errors.length === 0) {
					sendContactForm(entries, "car-hire");
					return;
				}
			});
	} else {
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

initContact(document.querySelector(".js-form-title").dataset.formName);

function sendContactForm(entries, formName) {
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

	const body = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(entries),
	};
	fetch(`/contact-form/${formName}`, body)
		.then((response) => {
			if (!response.ok) {
				response.json().then((errorData) => {
					setInfoMessage([false, `Failed Submitting form: ${errorData}`]);
					return;
				});
			}
			return response.json();
		})
		.then((data) => {
			if (formName === "review"){
				setInfoMessage([true, `Submitted successful`], true);
			} else {
				setInfoMessage([true, `Submitted successful`]);
			}

			document.querySelector(`#${formName}-form`).reset()
			// window.location.href = `/${formName}`;
		})
		.catch((error) => {
			setInfoMessage([false, `Error submitting form: ${error}`]);
		});
}

function setInfoMessage(status, review) {
	let statusInfo;
	if (review) {
		statusInfo = document.querySelectorAll(".error-info")[1];
		console.log(statusInfo)
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