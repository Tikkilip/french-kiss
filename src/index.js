import "@babel/polyfill";
import "./index.html";
import "./index.scss";
import "./modules/swipers";

const tabs = document.querySelectorAll(".main__schedule-options a");

if (tabs.length) {
	tabs.forEach((tab) => {
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			let active = document.querySelector(".active");
			if (active) {
				active.classList.remove("active");
			}
			e.target.classList.add("active");
		})
	})
}