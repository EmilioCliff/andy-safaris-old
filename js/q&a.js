export function setQandA(questions) {
	let questionContainer = document.querySelector(".question-section-center");
	questionContainer.innerHTML = "";
	questions.forEach((question) => {
		questionContainer.innerHTML += `
			<article class="question">
				<div class="question-title">
					<p>${question.Question}</p>
					<button type="button" class="question-btn">
						<span class="plus-icon">
							<i class="ri-add-box-line"></i>
						</span>
						<span class="minus-icon">
							<i class="ri-checkbox-indeterminate-line"></i>
						</span>
					</button>
				</div>
				<hr class="question-underline" />
				<div class="question-text">
					<p>${question.Description}</p>
				</div>
			</article>
		`;
	});

	const qandas = document.querySelectorAll(".question");

	qandas.forEach(function (questionA) {
		const btn = questionA.querySelector(".question-btn");
		btn.addEventListener("click", function () {
			qandas.forEach(function (item) {
				if (item !== questionA) {
					item.classList.remove("show-text");
				}
			});

			questionA.classList.toggle("show-text");
		});
	});
}
