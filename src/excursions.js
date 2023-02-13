import "./excursions.html";
import "./index.scss";
import "./modules/swipers";
import "@babel/polyfill";

const links = document.querySelectorAll(".main__qa .question");
if (links.length) {
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.toggle("active");
    });
  });
}