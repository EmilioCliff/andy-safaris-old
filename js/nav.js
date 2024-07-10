let toogleBtn = document.getElementById("js-toogle-btn");
let navMenu = document.getElementById("js-nav-menu");
let closeBtn = document.getElementById("js-close-btn");
let phoneIcon = document.getElementById("js-phone-icon");

if (toogleBtn) {
	toogleBtn.addEventListener("click", () => {
		toogleBtn.style.right = "-100%";
		navMenu.style.right = "0%";
	});
}

if (closeBtn) {
	closeBtn.addEventListener("click", () => {
		navMenu.style.right = "-100%";
		toogleBtn.style.right = "1.5rem";
	});
}

let scroll =
	window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 10000000 / 60);
	};

function onScroll() {
	let header = document.querySelector(".header");
	if (window.scrollY >= 100) {
		header.classList.add("is-visible");
	} else {
		header.classList.remove("is-visible");
	}
}

let ticking = false;

function handleScroll() {
	if (!ticking) {
		window.requestAnimationFrame(() => {
			onScroll();
			ticking = false;
		});
		ticking = true;
	}
}

window.addEventListener("scroll", handleScroll);

onScroll();

// const serviceCont = document.querySelector(".service-cont");
// const serviceNavBreakdown = document.querySelector(".service-nav-breakdown");

// serviceCont.addEventListener("mouseenter", function () {
// 	serviceNavBreakdown.style.display = "block";
// });

// serviceCont.addEventListener("mouseleave", function (event) {
// 	if (!serviceCont.contains(event.relatedTarget)) {
// 		serviceNavBreakdown.style.display = "none";
// 	}
// });

// serviceNavBreakdown.addEventListener("mouseenter", function () {
// 	this.style.display = "block";
// });

// serviceNavBreakdown.addEventListener("mouseleave", function () {
// 	this.style.display = "none";
// });

/*
	let getTaxi = document.querySelector(".js-active");
function loop() {
	let header = document.querySelector(".header");
	const carousel = document.querySelector(".intro__section");
	if (!isElementInViewport(carousel) || isElementInViewport(getTaxi)) {
		header.classList.add("is-visible");
	} else {
		if (isElementInViewport(carousel)) {
			header.classList.remove("is-visible");
		}
	}

	scroll(loop);
}

loop();

MINE

function loop() {
	let header = document.querySelector(".header");
	if (window.scrollY >= 100) {
		header.classList.add("is-visible");
	} else {
		header.classList.remove("is-visible");
	}

	console.log("scrollling");
	scroll(loop);
}

loop();

function isElementInViewport(el) {
	// Special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}

	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight ||
				document.documentElement.clientHeight) &&
		rect.right <=
			(window.innerWidth ||
				document.documentElement.clientWidth) 
	);
}
*/
