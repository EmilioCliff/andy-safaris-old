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
