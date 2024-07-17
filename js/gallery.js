let lazyLoadImages;

const blurDivs = document.querySelectorAll(".blur-load");
blurDivs.forEach((div) => {
	const img = div.querySelector("img");

	function loaded() {
		div.classList.add("loaded");
	}

	if (img.complete) {
		loaded();
	} else {
		img.addEventListener("load", loaded);
	}
});

if ("IntersectionObserver" in window) {
	lazyLoadImages = document.querySelectorAll(".lazy");
	let imageObserver = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let image = entry.target;
				image.src = image.dataset.src;
				image.classList.remove("lazy");
				imageObserver.unobserve(image);
			}
		});
	});
	lazyLoadImages.forEach(function (image) {
		imageObserver.observe(image);
	});
} else {
	let lazyloadThrottleTimeout;
	lazyLoadImages = document.querySelectorAll(".lazy");
	function lazyload() {
		if (lazyloadThrottleTimeout) {
			clearTimeout(lazyloadThrottleTimeout);
		}

		lazyloadThrottleTimeout = setTimeout(function () {
			let scrollTop = window.scrollY;
			lazyLoadImages.forEach(function (img) {
				if (img.offsetTop < window.innerHeight + scrollTop) {
					img.src = img.dataset.srcimg.classList.remove("lazy");
				}
			});
			if (lazyLoadImages.length == 0) {
				document.removeEventListener("scroll", lazyload);

				window.removeEventListener("resize", lazyload);

				window.removeEventListener("orientationChange", lazyload);
			}
		}, 20);
	}
	document.addEventListener("scroll", lazyload);

	window.addEventListener("resize", lazyload);

	window.addEventListener("orientationChange", lazyload);
}
