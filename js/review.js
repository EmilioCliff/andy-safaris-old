import {
	collectReviewValues,
	validateReviewForm,
	displayReviewFormErrors,
} from "./taxi-form.js";

document.getElementById("review-btn").addEventListener("click", () => {
	const entries = collectReviewValues();
	const errors = validateReviewForm(entries);
	displayReviewFormErrors(errors);

	// send post request to my backend
	if (errors.length === 0) {
		sendReviewForm(entries, "review");
		return;
	}
});

let reviewStars = document.querySelectorAll(
	".date-input-container .review-stars svg"
);
reviewStars.forEach((star, index) => {
	star.addEventListener("click", () => {
		reviewStars.forEach((star) => star.classList.remove("star-checked"));

		for (let i = 0; i <= index; i++) {
			reviewStars[i].classList.add("star-checked");
		}
	});
});

function sendReviewForm(entries, formName) {
	entries.rating = document.querySelectorAll(
		".date-input-container .review-stars .star-checked"
	).length;
	console.log(entries);
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
			alert("Form submission error: " + error);
		});
}

function getCurrentDate() {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}
