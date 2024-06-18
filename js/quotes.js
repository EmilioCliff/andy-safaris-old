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
}, 4000);

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
