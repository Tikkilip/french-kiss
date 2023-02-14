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

/***/ "./src/excursions.js":
/*!***************************!*\
  !*** ./src/excursions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _excursions_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./excursions.html */ \"./src/excursions.html\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _modules_swipers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swipers */ \"./src/modules/swipers.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_adaptive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/adaptive */ \"./src/modules/adaptive.js\");\n/* harmony import */ var _modules_adaptive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_adaptive__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar links = document.querySelectorAll(\".main__qa .question\");\nif (links.length) {\n  links.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      e.target.classList.toggle(\"active\");\n    });\n  });\n}\nvar tabs = document.querySelectorAll(\".main__schedule-options a\");\nif (tabs.length) {\n  tabs.forEach(function (tab) {\n    tab.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      var active = document.querySelector(\".active\");\n      if (active) {\n        active.classList.remove(\"active\");\n      }\n      e.target.classList.add(\"active\");\n    });\n  });\n}\n\n//# sourceURL=webpack://sarai/./src/excursions.js?");

/***/ }),

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

/***/ "./src/excursions.html":
/*!*****************************!*\
  !*** ./src/excursions.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/logo.png */ \"./src/assets/images/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico_mail.svg */ \"./src/assets/images/ico_mail.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico_viber.svg */ \"./src/assets/images/ico_viber.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico_phone.svg */ \"./src/assets/images/ico_phone.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/exc-1.png */ \"./src/assets/images/exc-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/exc-2.png */ \"./src/assets/images/exc-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/photo-1.png */ \"./src/assets/images/photo-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/photo-2.png */ \"./src/assets/images/photo-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/schedule.png */ \"./src/assets/images/schedule.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/main-swiper-1.png */ \"./src/assets/images/main-swiper-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/main-swiper-2.png */ \"./src/assets/images/main-swiper-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico__insta.svg */ \"./src/assets/images/ico__insta.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico__whatsapp.svg */ \"./src/assets/images/ico__whatsapp.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/map.png */ \"./src/assets/images/map.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/footer-logo.png */ \"./src/assets/images/footer-logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar code = \"<!DOCTYPE html>\\r\\n<html>\\r\\n  <head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Excursions page</title>\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\r\\n  </head>\\r\\n  <body>\\r\\n    <div class=\\\"wrapper\\\">\\r\\n      <header class=\\\"header main-header\\\">\\r\\n        <div class=\\\"header__inner\\\">\\r\\n          <div class=\\\"header__logo\\\">\\r\\n            <a href=\\\"/\\\">\\r\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\" />\\r\\n            </a>\\r\\n          </div>\\r\\n          <div class=\\\"header__main\\\">\\r\\n            <div class=\\\"header__main-top\\\">\\r\\n              <div class=\\\"header__main-top-left\\\">\\r\\n                <a class=\\\"shop\\\" href=\\\"#\\\">Интернет магазин</a>\\r\\n                <a class=\\\"tel\\\" href=\\\"tel:+7(999)3337604\\\">+7(999)3337604</a>\\r\\n                <div class=\\\"links\\\">\\r\\n                  <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"email icon\\\" /></a>\\r\\n                  <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"viber icon\\\" /></a>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"header__main-top-right\\\">\\r\\n                <a href=\\\"#\\\">Наш адрес</a>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"header__main-bottom\\\">\\r\\n              <ul>\\r\\n                <li>\\r\\n                  <a href=\\\"#\\\">Программы</a>\\r\\n                  <ul>\\r\\n                    <li><a href=\\\"#\\\">Индивидуальные программы</a></li>\\r\\n                    <li><a href=\\\"#\\\">Сборные программы</a></li>\\r\\n                    <li><a href=\\\"#\\\">Дни рождения</a></li>\\r\\n                    <li><a href=\\\"#\\\">Онлайн-экскурсия</a></li>\\r\\n                  </ul>\\r\\n                </li>\\r\\n                <li><a href=\\\"#\\\">Сертификаты</a></li>\\r\\n                <li><a href=\\\"#\\\">Вопросы и ответы</a></li>\\r\\n                <li><a href=\\\"#\\\">Оплата</a></li>\\r\\n                <li><a href=\\\"#\\\">Отзывы</a></li>\\r\\n              </ul>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\\"header__right\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"phone-icon\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"phone icon\\\" /></a>\\r\\n            <a href=\\\"#\\\" class=\\\"btn header-btn\\\">Расписание</a>\\r\\n            <div class=\\\"menu-btn\\\">\\r\\n              <span></span>\\r\\n              <span></span>\\r\\n              <span></span>\\r\\n            </div>\\r\\n            <div class=\\\"menu\\\"></div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </header>\\r\\n      <main class=\\\"main route excursions qa\\\">\\r\\n        <section class=\\\"main__route\\\">\\r\\n          <div class=\\\"main__route-block\\\">\\r\\n            <div class=\\\"route-info\\\">\\r\\n              <h1>Программа «Вилли Вонка и шоколадная фабрика»</h1>\\r\\n              <p class=\\\"exc-subtitle\\\">Индивидульная программа</p>\\r\\n\\t\\t\\t\\t\\t\\t\\t<p>Вы станете участниками театрализованной экскурсии, разгадывая тайны производства сладостей. Вместе с Вилли Вонка и его сказочными помощниками, вы не только увидите все этапы создания сладких шедевров, но и создадите свои собственные.</p>\\r\\n\\t\\t\\t\\t\\t\\t\\t<p>Однако, сможете ли вы превзойти великого мастера? Мы верим, что с помощью подсказок и волшебного танца вы все таки добьетесь идеального вкуса шоколада, который непременно отведаете.</p>\\r\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"exc-btns\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\\"#\\\" class=\\\"btn order\\\">Забронировать</a>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\\"#\\\" class=\\\"feedback\\\">Обратная связь</a>\\r\\n\\t\\t\\t\\t\\t\\t\\t</div>\\r\\n            </div>\\r\\n            <div class=\\\"route-img\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"excursions image\\\" />\\r\\n              </picture>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\\"main__route-block\\\">\\r\\n            <div class=\\\"route-info\\\">\\r\\n              <h2>На программе вас ждет</h2>\\r\\n\\t\\t\\t\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Театрализованная экскурсия по мотивам сказки \\\"Чарли и шоколадная фабрика\\\" с викториной от Вилли Вонки, который сопровождает гостей на протяжении всей программы</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Знакомство с действующим производством</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Дегустация свежеприготовленных шоколадных конфет</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Мастер-класс по изготовлению шоколадных медиантов (порционный шоколад с посыпками)</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Упаковка своих изделий</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Шоколадная фигурка в подарок от фабрики</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Развлекательная программа с ведущими, играми и поздравлениями</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>Чаепитие с торжественным выносом торта*</li>\\r\\n\\t\\t\\t\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t\\t\\t\\t\\t<h2>По желанию</h2>\\r\\n\\t\\t\\t\\t\\t\\t\\t<li>Чаепитие с торжественным выносом торта*</li>\\r\\n            </div>\\r\\n            <div class=\\\"route-img\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"excursions image\\\" />\\r\\n              </picture>\\r\\n            </div>\\r\\n          </div>\\r\\n\\t\\t\\t\\t\\t<p class=\\\"cake-description\\\">*Торт можно заказать в интернет-магазине от фабрики French Kiss или принести свой, а наши ведущие его торжественно внесут. Мы предоставляем одноразовую цветную посуду, чай, сахар и надпись с Днем Рождения.</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"main__exc-info\\\">\\r\\n\\t\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t\\t<p>Продолжительность</p>\\r\\n\\t\\t\\t\\t\\t\\t\\t<span>2 часа</span>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t\\t<p>Возраст участников</p>\\r\\n\\t\\t\\t\\t\\t\\t\\t<span>от 5 лет</span>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t\\t<p>Кол-во участников</p>\\r\\n\\t\\t\\t\\t\\t\\t\\t<span>от 8 до 22 человек</span>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</section>\\r\\n\\t\\t\\t\\t<section class=\\\"main__photos\\\">\\r\\n          <div class=\\\"swiper photos-swiper\\\">\\r\\n            <div class=\\\"main-swiper__top\\\">\\r\\n              <h3>Фотографии</h3>\\r\\n              <div class=\\\"swiper-navigation\\\">\\r\\n                <div class=\\\"swiper-button-prev\\\"></div>\\r\\n                <div class=\\\"swiper-button-next\\\"></div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"swiper-wrapper\\\">\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n        </section>\\r\\n\\t\\t\\t\\t<section class=\\\"main__reviews\\\">\\r\\n          <div class=\\\"swiper reviews-swiper\\\">\\r\\n            <div class=\\\"main-swiper__top\\\">\\r\\n              <h3>Отзывы</h3>\\r\\n              <div class=\\\"swiper-navigation\\\">\\r\\n                <div class=\\\"swiper-button-prev\\\"></div>\\r\\n                <div class=\\\"swiper-button-next\\\"></div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"swiper-wrapper\\\">\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"reviews__top\\\">\\r\\n                  <span>Марина</span>\\r\\n                  <span>21.05.2022</span>\\r\\n                </div>\\r\\n                <p>Отличная экскурсия!</p>\\r\\n                <span>Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет.</span>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"reviews__top\\\">\\r\\n                  <span>Марина</span>\\r\\n                  <span>21.05.2022</span>\\r\\n                </div>\\r\\n                <p>Отличная экскурсия!</p>\\r\\n                <span>Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет.</span>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"reviews__top\\\">\\r\\n                  <span>Марина</span>\\r\\n                  <span>21.05.2022</span>\\r\\n                </div>\\r\\n                <p>Отличная экскурсия!</p>\\r\\n                <span>Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет.</span>\\r\\n              </div>\\r\\n            </div>\\r\\n            <a href=\\\"#\\\" class=\\\"send-review btn\\\">Оставить отзыв</a>\\r\\n          </div>\\r\\n        </section>\\r\\n\\t\\t\\t\\t<section class=\\\"main__price\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Стоимость экскурсии</h2>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<p></p>\\r\\n\\t\\t\\t\\t\\t\\t<p>Без автобуса</p>\\r\\n\\t\\t\\t\\t\\t\\t<p>С автобусом</p>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<p>1-5 человек</p>\\r\\n\\t\\t\\t\\t\\t\\t<span>25 000</span>\\r\\n\\t\\t\\t\\t\\t\\t<span>40 000</span>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<p>5-10 человек</p>\\r\\n\\t\\t\\t\\t\\t\\t<span>50 000</span>\\r\\n\\t\\t\\t\\t\\t\\t<span>58 000</span>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<p>10-15 человек</p>\\r\\n\\t\\t\\t\\t\\t\\t<span>65 000</span>\\r\\n\\t\\t\\t\\t\\t\\t<span>70 000</span>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</section>\\r\\n\\t\\t\\t\\t<section class=\\\"main__schedule\\\">\\r\\n          <h3>Расписание и запись на экскурсии</h3>\\r\\n          <div class=\\\"main__schedule-options\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"active\\\">Индивидульные группы</a>\\r\\n            <a href=\\\"#\\\">Сборные группы</a>\\r\\n          </div>\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"schedule image\\\" />\\r\\n        </section>\\r\\n\\t\\t\\t\\t<section class=\\\"main__qa\\\">\\r\\n          <div class=\\\"main__qa-block\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"question\\\">Как заказать экскурсию?</a>\\r\\n            <p class=\\\"answer\\\">Если менее 8 участников, то для индивидуальной экскурсии оплачивается минимальная сумма программы, как за 8 участников.</p>\\r\\n          </div>\\r\\n          <div class=\\\"main__qa-block\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"question\\\">Изменится ли стоимость, если нас меньше 8 человек?</a>\\r\\n            <p class=\\\"answer\\\">Если менее 8 участников, то для индивидуальной экскурсии оплачивается минимальная сумма программы, как за 8 участников.</p>\\r\\n          </div>\\r\\n          <div class=\\\"main__qa-block\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"question\\\">Как оплатить экскурсию? Какие есть способы оплаты?</a>\\r\\n            <p class=\\\"answer\\\">Если менее 8 участников, то для индивидуальной экскурсии оплачивается минимальная сумма программы, как за 8 участников.</p>\\r\\n          </div>\\r\\n\\t\\t\\t\\t\\t<span>Более подробнее с правилами проведения и оплаты экскурсии можно ознакомится <a href=\\\"#\\\">по ссылке.</a> Так же больше ответов на вопросы можно найти <a href=\\\"#\\\">здесь.</a></span>\\r\\n        </section>\\r\\n\\t\\t\\t\\t<section class=\\\"main__programms\\\">\\r\\n          <div class=\\\"swiper main-swiper\\\">\\r\\n            <div class=\\\"main-swiper__top\\\">\\r\\n              <h3>Другие программы</h3>\\r\\n              <div class=\\\"swiper-navigation\\\">\\r\\n                <div class=\\\"swiper-button-prev\\\"></div>\\r\\n                <div class=\\\"swiper-button-next\\\"></div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"swiper-wrapper\\\">\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n                <p>День рождения на фабрике</p>\\r\\n                <span>Экскурсия по производству с дегустацией шоколадных конфет, мастер-классом по 2 медиантом, игровой програмой + шоколадная фигурка в подарок.</span>\\r\\n                <div class=\\\"swiper-slide__bottom\\\">\\r\\n                  <a href=\\\"#\\\" class=\\\"btn\\\">Оставить заяку</a>\\r\\n                  <a href=\\\"#\\\">Читать подробнее</a>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n                <p>Шоколадные приключение</p>\\r\\n                <span>Экскурсия по производству с дегустацией шоколадных конфет, мастер-классом по 2 медиантом, упаковкой собственных изделий + шоколадная фигурка в подарок.</span>\\r\\n                <div class=\\\"swiper-slide__bottom\\\">\\r\\n                  <a href=\\\"#\\\" class=\\\"btn\\\">Оставить заяку</a>\\r\\n                  <a href=\\\"#\\\">Читать подробнее</a>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <picture>\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                </picture>\\r\\n                <p>В гостях у Вилли Вонки</p>\\r\\n                <span>Экскурсия по производству с дегустацией шоколадных конфет, викторины, мастер-классом по 2 медиантом, упаковкой собственных изделий + шоколадная фигурка </span>\\r\\n                <div class=\\\"swiper-slide__bottom\\\">\\r\\n                  <a href=\\\"#\\\" class=\\\"btn\\\">Оставить заяку</a>\\r\\n                  <a href=\\\"#\\\">Читать подробнее</a>\\r\\n                </div>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n        </section>\\r\\n        <section class=\\\"main__contacts\\\">\\r\\n          <h3>Наши контакты</h3>\\r\\n          <div class=\\\"main__contacts-content\\\">\\r\\n            <div class=\\\"contacts-info\\\">\\r\\n              <div>\\r\\n                <p>Телефон</p>\\r\\n                <a href=\\\"#\\\">+7(999)333-76-04</a>\\r\\n              </div>\\r\\n              <div>\\r\\n                <p>Адрес</p>\\r\\n                <span>г.Москва, ул. Зюзинская, д.6, корп. 2</span>\\r\\n              </div>\\r\\n              <div class=\\\"contacts-icons\\\">\\r\\n                <a href=\\\"#\\\">\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"instagram icon\\\" />\\r\\n                </a>\\r\\n                <a href=\\\"#\\\">\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"whatsapp icon\\\" />\\r\\n                </a>\\r\\n              </div>\\r\\n              <a href=\\\"#\\\" class=\\\"how-to-get\\\">Как добраться?</a>\\r\\n              <a href=\\\"#\\\" class=\\\"btn callback\\\">Обратный звонок</a>\\r\\n            </div>\\r\\n            <div class=\\\"contacts-map\\\">\\r\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"map image\\\" />\\r\\n            </div>\\r\\n          </div>\\r\\n        </section>\\r\\n      </main>\\r\\n      <footer class=\\\"footer\\\">\\r\\n        <div class=\\\"footer__left\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"footer logo image\\\" />\\r\\n          <span>© 2022 ООО «Веселое путешествие» ИНН 7715373532, ОГРН 1037715023367</span>\\r\\n        </div>\\r\\n        <div class=\\\"footer__center\\\">\\r\\n          <ul>\\r\\n            <li><a href=\\\"#\\\">Программы</a></li>\\r\\n            <li><a href=\\\"#\\\">Вопросы и ответы</a></li>\\r\\n            <li><a href=\\\"#\\\">Сертификаты</a></li>\\r\\n            <li><a href=\\\"#\\\">Как добраться?</a></li>\\r\\n            <li><a href=\\\"#\\\">Агенствам</a></li>\\r\\n            <li><a href=\\\"#\\\">Наши документы</a></li>\\r\\n            <li><a href=\\\"#\\\">Интернет магазин</a></li>\\r\\n          </ul>\\r\\n        </div>\\r\\n        <div class=\\\"footer__right\\\">\\r\\n          <div class=\\\"footer__right-top\\\">\\r\\n            <a href=\\\"#\\\">+7(999)3337604</a>\\r\\n            <a href=\\\"#\\\">mail@mail.com</a>\\r\\n          </div>\\r\\n          <div class=\\\"footer__right-bot\\\">\\r\\n            <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"instagram icon\\\" /></a>\\r\\n            <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"whatsapp icon\\\" /></a>\\r\\n          </div>\\r\\n        </div>\\r\\n      </footer>\\r\\n    </div>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://sarai/./src/excursions.html?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sarai/./src/index.scss?");

/***/ }),

/***/ "./src/assets/images/exc-1.png":
/*!*************************************!*\
  !*** ./src/assets/images/exc-1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/exc-1.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/exc-1.png?");

/***/ }),

/***/ "./src/assets/images/exc-2.png":
/*!*************************************!*\
  !*** ./src/assets/images/exc-2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/exc-2.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/exc-2.png?");

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

/***/ "./src/assets/images/main-swiper-1.png":
/*!*********************************************!*\
  !*** ./src/assets/images/main-swiper-1.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/main-swiper-1.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/main-swiper-1.png?");

/***/ }),

/***/ "./src/assets/images/main-swiper-2.png":
/*!*********************************************!*\
  !*** ./src/assets/images/main-swiper-2.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/main-swiper-2.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/main-swiper-2.png?");

/***/ }),

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/map.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/map.png?");

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

/***/ }),

/***/ "./src/assets/images/schedule.png":
/*!****************************************!*\
  !*** ./src/assets/images/schedule.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/schedule.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/schedule.png?");

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
/******/ 			"excursions": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_html-loader_dist_runtime_getUrl-362cb3","src_index_scss-src_index_scss"], () => (__webpack_require__("./src/excursions.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;