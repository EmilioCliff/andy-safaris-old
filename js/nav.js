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
		window.setTimeout(callback, 1000 / 60);
	};

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
				document.documentElement.clientHeight) /* or $(window).height() */ &&
		rect.right <=
			(window.innerWidth ||
				document.documentElement.clientWidth) /* or $(window).width() */
	);
}
