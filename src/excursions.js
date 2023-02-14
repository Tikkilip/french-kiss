import "./excursions.html";
import "./index.scss";
import "./modules/swipers";
import "@babel/polyfill";
import "./modules/adaptive";


const links = document.querySelectorAll(".main__qa .question");
if (links.length) {
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.toggle("active");
    });
  });
}

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