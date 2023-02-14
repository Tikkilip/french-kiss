/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/adaptive.js":
/*!*********************************!*\
  !*** ./src/modules/adaptive.js ***!
  \*********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var menuBtn = document.querySelector('.menu-btn');\n  var menu = document.querySelector('.menu');\n  menuBtn.addEventListener('click', function () {\n    menuBtn.classList.toggle('active');\n    menu.classList.toggle('active');\n  });\n  if (document.documentElement.clientWidth < 768 && menu) {\n    var headerMain = document.querySelector(\".header__main\");\n    var headerBtn = document.querySelector(\".header-btn\");\n    if (headerMain && headerBtn) {\n      headerMain.remove();\n      headerBtn.remove();\n      menu.appendChild(headerMain);\n      menu.appendChild(headerBtn);\n    }\n  }\n});\n\n//# sourceURL=webpack://sarai/./src/modules/adaptive.js?");

/***/ }),

/***/ "./src/modules/swipers.js":
/*!********************************!*\
  !*** ./src/modules/swipers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ \"./node_modules/swiper/swiper-bundle.esm.js\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n\n\nvar swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".swiper.main-swiper\", {\n  direction: \"horizontal\",\n  loop: false,\n  slidesPerView: 1,\n  spaceBetween: 0,\n  breakpoints: {\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 25\n    }\n  },\n  navigation: {\n    nextEl: \".main-swiper .swiper-button-next\",\n    prevEl: \".main-swiper .swiper-button-prev\"\n  }\n});\nvar swiperReviews = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".swiper.reviews-swiper\", {\n  direction: \"horizontal\",\n  loop: false,\n  slidesPerView: 1,\n  spaceBetween: 0,\n  breakpoints: {\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 25\n    }\n  },\n  navigation: {\n    nextEl: \".reviews-swiper .swiper-button-next\",\n    prevEl: \".reviews-swiper .swiper-button-prev\"\n  }\n});\nvar swiperPhotos = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".swiper.photos-swiper\", {\n  direction: \"horizontal\",\n  loop: false,\n  slidesPerView: 1,\n  spaceBetween: 0,\n  breakpoints: {\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 25\n    }\n  },\n  navigation: {\n    nextEl: \".photos-swiper .swiper-button-next\",\n    prevEl: \".photos-swiper .swiper-button-prev\"\n  }\n});\n\n//# sourceURL=webpack://sarai/./src/modules/swipers.js?");

/***/ }),

/***/ "./src/reviews.js":
/*!************************!*\
  !*** ./src/reviews.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reviews_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.html */ \"./src/reviews.html\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _modules_swipers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swipers */ \"./src/modules/swipers.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_adaptive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/adaptive */ \"./src/modules/adaptive.js\");\n/* harmony import */ var _modules_adaptive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_adaptive__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://sarai/./src/reviews.js?");

/***/ }),

/***/ "./src/reviews.html":
/*!**************************!*\
  !*** ./src/reviews.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/logo.png */ \"./src/assets/images/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico_mail.svg */ \"./src/assets/images/ico_mail.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico_viber.svg */ \"./src/assets/images/ico_viber.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico_phone.svg */ \"./src/assets/images/ico_phone.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/photo-1.png */ \"./src/assets/images/photo-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/photo-2.png */ \"./src/assets/images/photo-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/footer-logo.png */ \"./src/assets/images/footer-logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico__insta.svg */ \"./src/assets/images/ico__insta.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico__whatsapp.svg */ \"./src/assets/images/ico__whatsapp.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar code = \"<!DOCTYPE html>\\r\\n<html>\\r\\n  <head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Reviews page</title>\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\r\\n  </head>\\r\\n  <body>\\r\\n    <div class=\\\"wrapper\\\">\\r\\n      <header class=\\\"header main-header\\\">\\r\\n        <div class=\\\"header__inner\\\">\\r\\n          <div class=\\\"header__logo\\\">\\r\\n            <a href=\\\"/\\\">\\r\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\" />\\r\\n            </a>\\r\\n          </div>\\r\\n          <div class=\\\"header__main\\\">\\r\\n            <div class=\\\"header__main-top\\\">\\r\\n              <div class=\\\"header__main-top-left\\\">\\r\\n                <a class=\\\"shop\\\" href=\\\"#\\\">Интернет магазин</a>\\r\\n                <a class=\\\"tel\\\" href=\\\"tel:+7(999)3337604\\\">+7(999)3337604</a>\\r\\n                <div class=\\\"links\\\">\\r\\n                  <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"email icon\\\" /></a>\\r\\n                  <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"viber icon\\\" /></a>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"header__main-top-right\\\">\\r\\n                <a href=\\\"#\\\">Наш адрес</a>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"header__main-bottom\\\">\\r\\n              <ul>\\r\\n                <li>\\r\\n                  <a href=\\\"#\\\">Программы</a>\\r\\n                  <ul>\\r\\n                    <div class=\\\"wrapper\\\">\\r\\n                      <li><a href=\\\"#\\\">Индивидуальные программы</a></li>\\r\\n                      <li><a href=\\\"#\\\">Сборные программы</a></li>\\r\\n                      <li><a href=\\\"#\\\">Дни рождения</a></li>\\r\\n                      <li><a href=\\\"#\\\">Онлайн-экскурсия</a></li>\\r\\n                    </div>\\r\\n                  </ul>\\r\\n                </li>\\r\\n                <li><a href=\\\"#\\\">Сертификаты</a></li>\\r\\n                <li><a href=\\\"#\\\">Вопросы и ответы</a></li>\\r\\n                <li><a href=\\\"#\\\">Оплата</a></li>\\r\\n                <li><a href=\\\"#\\\">Отзывы</a></li>\\r\\n              </ul>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\\"header__right\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"phone-icon\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"phone icon\\\" /></a>\\r\\n            <a href=\\\"#\\\" class=\\\"btn header-btn\\\">Расписание</a>\\r\\n            <div class=\\\"menu-btn\\\">\\r\\n              <span></span>\\r\\n              <span></span>\\r\\n              <span></span>\\r\\n            </div>\\r\\n            <div class=\\\"menu\\\"></div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </header>\\r\\n      <main class=\\\"main reviews\\\">\\r\\n        <h1>Отзывы</h1>\\r\\n        <section class=\\\"main__reviews\\\">\\r\\n          <article>\\r\\n            <div class=\\\"main__reviews-top\\\">\\r\\n              <span>Марина</span>\\r\\n              <span>21.05.2022</span>\\r\\n            </div>\\r\\n            <p>Отличная экскурсия!</p>\\r\\n            <span\\r\\n              >Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет, т. е. никто не\\r\\n              успел ни заскучать ни устать. С парковкой проблем не возникло. Спасибо большое всем!</span\\r\\n            >\\r\\n          </article>\\r\\n          <article>\\r\\n            <div class=\\\"main__reviews-top\\\">\\r\\n              <span>Марина</span>\\r\\n              <span>21.05.2022</span>\\r\\n            </div>\\r\\n            <p>Запах детства</p>\\r\\n            <span\\r\\n              >Очень понравилась экскурсия и мастер-класс. Были всей семьёй. Каждый получил большое удовольствие вне зависимости от возраста. Ведущие - Карамелька и Мармеладка - очень интересно вели экскурсию, а процесс самостоятельного изготовления конфет максимально всех затянул)) Пропитанный\\r\\n              шоколадом воздух создал прекрасную атмосферу с флешбеками из детства ))\\r\\n            </span>\\r\\n          </article>\\r\\n          <article>\\r\\n            <div class=\\\"main__reviews-top\\\">\\r\\n              <span>Марина</span>\\r\\n              <span>21.05.2022</span>\\r\\n            </div>\\r\\n            <p>То что нужно для Детского праздника</p>\\r\\n            <span\\r\\n              >Побывали мы гостями на День рождении во French Kiss. И по моему опыту это именно тот формат, который подходит детям 7-8 лет. Сначала все дети и родители были приглашены в отдельную комнату с большим столом, стульями на мастер-класс по изготовлению шоколадных конфет на палочке. Детям\\r\\n              выдали трафареты и бумагу под 2 конфеты. На столе было 6 кондитерских мешков с 3 видами шоколада и всякие присыпки.\\r\\n            </span>\\r\\n          </article>\\r\\n          <article>\\r\\n            <div class=\\\"main__reviews-top\\\">\\r\\n              <span>Марина</span>\\r\\n              <span>21.05.2022</span>\\r\\n            </div>\\r\\n            <p>Понравилось</p>\\r\\n            <span\\r\\n              >Были на экскурсии с третьеклассниками 14 октября. Ребят разделили на две равные группы по количеству человек. Одна группа отправилась на производство, другая- на мастер класс. На производстве интересно-подробно рассказали как получают шоколад, отчего он бывает горьким, как получают\\r\\n              белый, что добавляют в молочный. Рассказали про начинки и показали, как начиняют конфетки. Очень понравилось ребятам наблюдать за едущими на ленте начинками, которые поливаются шоколадом и принимают форму хорошо знакомых изделий. На мастер- классе девочки и мальчики создали свои\\r\\n              шоколадные конфетки на палочке, которые могли съесть сразу или забрать с собой в фирменной упаковке. Каждому участнику экскурсии вручили шоколадный подарок- собачку.\\r\\n            </span>\\r\\n          </article>\\r\\n          <article>\\r\\n            <div class=\\\"main__reviews-top\\\">\\r\\n              <span>Марина</span>\\r\\n              <span>21.05.2022</span>\\r\\n            </div>\\r\\n            <p>Очень понравилось!</p>\\r\\n            <span\\r\\n              >Свечку на торт лучше свою приносить )) дети любят классическую просто Интересный день рождения на фабрике шоколада! С момента заказа все понравилось - подробное объяснение, уточнения по программе, оплата, наличие парковки, спокойная встреча и разъяснение правил (пищевое производство-\\r\\n              это важно). Очень порадовали экскурсоводы- две девушки потрясающе вели мастер-класс, а потом интересно рассказывали на производстве каждый этап/цех. Даже маленькие дети запомнили сложные названия машин и процессов)) Всех порадовал аромат на фабрике)) сразу подумали, что там никогда не\\r\\n              бывает хандры у работников))Дегустация - это конечно самое долгожданное в экскурсии. Вкуснейший шоколад так и хочется отведать всё))</span\\r\\n            >\\r\\n          </article>\\r\\n          <article>\\r\\n            <div class=\\\"main__reviews-top\\\">\\r\\n              <span>Марина</span>\\r\\n              <span>21.05.2022</span>\\r\\n            </div>\\r\\n            <p>Отличная экскурсия!</p>\\r\\n            <span\\r\\n              >Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет, т. е. никто не\\r\\n              успел ни заскучать ни устать. С парковкой проблем не возникло. Спасибо большое всем!</span\\r\\n            >\\r\\n          </article>\\r\\n        </section>\\r\\n        <section class=\\\"main__photos\\\">\\r\\n          <div class=\\\"swiper photos-swiper\\\">\\r\\n            <div class=\\\"main-swiper__top\\\">\\r\\n              <h3>Фотографии</h3>\\r\\n              <div class=\\\"swiper-navigation\\\">\\r\\n                <div class=\\\"swiper-button-prev\\\"></div>\\r\\n                <div class=\\\"swiper-button-next\\\"></div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"swiper-wrapper\\\">\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n        </section>\\r\\n      </main>\\r\\n      <footer class=\\\"footer\\\">\\r\\n        <div class=\\\"footer__left\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"footer logo image\\\" />\\r\\n          <span>© 2022 ООО «Веселое путешествие» ИНН 7715373532, ОГРН 1037715023367</span>\\r\\n        </div>\\r\\n        <div class=\\\"footer__center\\\">\\r\\n          <ul>\\r\\n            <li><a href=\\\"#\\\">Программы</a></li>\\r\\n            <li><a href=\\\"#\\\">Вопросы и ответы</a></li>\\r\\n            <li><a href=\\\"#\\\">Сертификаты</a></li>\\r\\n            <li><a href=\\\"#\\\">Как добраться?</a></li>\\r\\n            <li><a href=\\\"#\\\">Агенствам</a></li>\\r\\n            <li><a href=\\\"#\\\">Наши документы</a></li>\\r\\n            <li><a href=\\\"#\\\">Интернет магазин</a></li>\\r\\n          </ul>\\r\\n        </div>\\r\\n        <div class=\\\"footer__right\\\">\\r\\n          <div class=\\\"footer__right-top\\\">\\r\\n            <a href=\\\"#\\\">+7(999)3337604</a>\\r\\n            <a href=\\\"#\\\">mail@mail.com</a>\\r\\n          </div>\\r\\n          <div class=\\\"footer__right-bot\\\">\\r\\n            <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"instagram icon\\\" /></a>\\r\\n            <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"whatsapp icon\\\" /></a>\\r\\n          </div>\\r\\n        </div>\\r\\n      </footer>\\r\\n    </div>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://sarai/./src/reviews.html?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sarai/./src/index.scss?");

/***/ }),

/***/ "./src/assets/images/footer-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/images/footer-logo.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/footer-logo.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/footer-logo.png?");

/***/ }),

/***/ "./src/assets/images/ico__insta.svg":
/*!******************************************!*\
  !*** ./src/assets/images/ico__insta.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico__insta.svg\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/ico__insta.svg?");

/***/ }),

/***/ "./src/assets/images/ico__whatsapp.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/ico__whatsapp.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico__whatsapp.svg\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/ico__whatsapp.svg?");

/***/ }),

/***/ "./src/assets/images/ico_mail.svg":
/*!****************************************!*\
  !*** ./src/assets/images/ico_mail.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico_mail.svg\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/ico_mail.svg?");

/***/ }),

/***/ "./src/assets/images/ico_phone.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/ico_phone.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico_phone.svg\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/ico_phone.svg?");

/***/ }),

/***/ "./src/assets/images/ico_viber.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/ico_viber.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico_viber.svg\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/ico_viber.svg?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/assets/images/photo-1.png":
/*!***************************************!*\
  !*** ./src/assets/images/photo-1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/photo-1.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/photo-1.png?");

/***/ }),

/***/ "./src/assets/images/photo-2.png":
/*!***************************************!*\
  !*** ./src/assets/images/photo-2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/photo-2.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/photo-2.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"reviews": 0,
/******/ 			"src_index_scss-src_index_scss": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksarai"] = self["webpackChunksarai"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_html-loader_dist_runtime_getUrl-362cb3","src_index_scss-src_index_scss"], () => (__webpack_require__("./src/reviews.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;