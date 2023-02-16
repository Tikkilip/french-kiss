import "./programms.html";
import "./index.scss";
import "./modules/swipers";
import "@babel/polyfill";
import "./modules/adaptive";

const tabs = document.querySelectorAll(".main__programms-options a");

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