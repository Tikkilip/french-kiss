document.addEventListener("DOMContentLoaded", () => {
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');

	menuBtn.addEventListener('click', function()	{
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	})

	if (document.documentElement.clientWidth < 890 && menu) {
		const headerMain = document.querySelector(".header__main");
		const headerBtn = document.querySelector(".header-btn");

		if (headerMain && headerBtn) {
			headerMain.remove();
			headerBtn.remove();
			menu.appendChild(headerMain);
			menu.appendChild(headerBtn);
		}
	}

	if (document.documentElement.clientWidth < 768) {
		const parentBlocks = document.querySelectorAll(".certificates .main__route-block");
		if (parentBlocks) {
			parentBlocks.forEach((block) => {
				let title = block.querySelector(".certificates.excursions .route-info h2");
				if (title) {
					title.remove();
					block.appendChild(title)
				}
			})
		}
	}

	const reviewBtn = document.querySelector(".send-review.btn");
	const reviewPopup = document.querySelector(".review-popup");

	if (reviewBtn && reviewPopup) {
		reviewBtn.addEventListener("click", (e) => {
			e.preventDefault();
			reviewPopup.classList.add("active");
		})

		let closeBtn = document.querySelector(".close-btn");
		if (closeBtn) {
			closeBtn.addEventListener("click", (e) => {
				e.preventDefault();
				if (reviewPopup.classList.contains("active")) {
					reviewPopup.classList.remove("active");
				}
			})
		}
	}

	const schBtn = document.querySelector(".header .header__right .header-btn");
	const schPopup = document.querySelector(".schedule-popup");
	
	if (schPopup && schBtn) {
		schBtn.addEventListener("click", (e) => {
			e.preventDefault();
			schPopup.classList.add("active");
		})

		let closeBtn = document.querySelector(".close-btn");
		if (closeBtn) {
			closeBtn.addEventListener("click", (e) => {
				e.preventDefault();
				if (schPopup.classList.contains("active")) {
					schPopup.classList.remove("active");
				}
			})
		}
	}

	const callbackBtn = document.querySelector(".phone-icon");
	const callbackPopup = document.querySelector(".callback-popup");
	
	if (callbackBtn && callbackPopup) {
		callbackBtn.addEventListener("click", (e) => {
			e.preventDefault();
			callbackPopup.classList.add("active");
		})

		let closeBtn = document.querySelector(".close-btn");
		if (closeBtn) {
			closeBtn.addEventListener("click", (e) => {
				e.preventDefault();
				if (callbackPopup.classList.contains("active")) {
					callbackPopup.classList.remove("active");
				}
			})
		}
	}
})