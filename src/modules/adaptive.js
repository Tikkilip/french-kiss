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
})