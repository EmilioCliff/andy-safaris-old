import { safaris, safarisQandA } from "./data/safari.js";
import { setQandA } from "./q&a.js";

function setGrid(newSafaris) {
	let safariGridContainer = document.getElementById("js-safari-grid");
	safariGridContainer.innerHTML = "";

	newSafaris.forEach((safari) => {
		safariGridContainer.innerHTML += ` 
			<div class="safari-option">
					<img class="safari-image" src="${safari.Image}" alt="" />
					<p class="section-title safari-card-title">
						${safari.Days} Days ${safari.Title}
						<span class="last-two-words">By ${safari.Guide}</span>
					</p>
					<p class="safari-card-description">
						${safari.Description}
					</p>
                    <div class="safari-button-group">
                        <div class="safari-learn-more btn js-quick-view" data-safari-id="${safari.ID}">Quick View</div>
					    <div class="safari-learn-more btn" onclick="window.location.href='safaris-num.html?safariID=${safari.ID}'">Learn More</div>
                    </div>
                    <div class="js-overlay-${safari.ID} quick-view-overlay">
                        <div class="quick-view-container">
                            <div class="close-quick-view">
                                <i class="ri-close-large-line"></i>
                            </div>
                            <div class="quick-view-details">
                                <div>
                                    <img class="safari-image" src="${safari.Image}" alt=""/>
                                </div>
                                <div class="quick-view-des">
                                    <p class="section-title safari-card-title">
                                        ${safari.Days} Days ${safari.Title}
                                        <span class="last-two-words">By ${safari.Guide}</span>
                                    </p>
                                    <p>Tour includes:</p>
                                    <ul class="fill-tour-includes-${safari.ID}">
                                    
                                    </ul>
                                    <p>Price by season:</p>
                                    <p class="quick-view-pricing">Low from <span>${safari.LowestPrice}</span></p>
                                </div>
                            </div>
                            <div class="safari-button-group-modal">
                                <div class="btn">RETURN TO PAGE</div>
                                <div class="btn" onclick="window.location.href='safaris-num.html?safariID=${safari.ID}'">FINDOUT MORE</div>
                            </div>
                        </div>
                    </div>
				</div>
		`;

		let fillCont = document.querySelector(`.fill-tour-includes-${safari.ID}`);
		fillCont.innerHTML = "";
		safari.TourIncludes.forEach((include) => {
			fillCont.innerHTML += `
				<li>${include}</li>
			`;
		});
	});
}

function initSafariPage() {
	setGrid(safaris);
	modalEvents();
	setQandA(safarisQandA);
}

initSafariPage();

const daysBtns = document.querySelectorAll(".days-options .day");
daysBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		const day = Number(btn.dataset.dayValue);

		if (document.querySelector(".day-selected")) {
			document.querySelector(".day-selected").classList.remove("day-selected");
		}

		btn.classList.add("day-selected");

		filterSafari(day, btn);
	});
});

document.querySelector(".show-all").addEventListener("click", () => {
	if (document.querySelector(".day-selected")) {
		document.querySelector(".day-selected").classList.remove("day-selected");
	}

	filterSafari(100);
});

function filterSafari(day) {
	const filteredSafaris =
		day === 100 ? safaris : safaris.filter((safari) => safari.Days === day);

	setGrid(filteredSafaris);
	modalEvents();
}

// ================== MODAL EVENTS =================

function modalEvents() {
	const quickViewBtns = document.querySelectorAll(".js-quick-view");
	// const modalOverlays = document.querySelectorAll(".quick-view-overlay");
	const modalCloseBtns = document.querySelectorAll(".close-quick-view");
	const modalReturnBtns = document.querySelectorAll(
		".safari-button-group-modal div:nth-child(1)"
	);

	// open modal
	quickViewBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const id = btn.dataset.safariId;
			let overlay = document.querySelector(`.js-overlay-${id}`);
			overlay.style.top = "0";
			// overlay.querySelector(".quick-view-container").style.transform = "translateY(0)"
		});
	});

	// close modal when the close button is clicked
	modalCloseBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			let overlayContainer = btn.parentElement;
			overlayContainer.parentElement.style.top = "-150%";
			// overlayContainer.style.display = "none";
		});
	});

	// close modal when the return to page is clicked
	modalReturnBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			let overlayCont = btn.parentElement.parentElement;
			overlayCont.parentElement.style.top = "-150%";
			// overlayCont.style.display = "none";
		});
	});
}

modalEvents();
