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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _modules_swipers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swipers */ \"./src/modules/swipers.js\");\n/* harmony import */ var _modules_adaptive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/adaptive */ \"./src/modules/adaptive.js\");\n/* harmony import */ var _modules_adaptive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_adaptive__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar tabs = document.querySelectorAll(\".main__schedule-options a\");\nif (tabs.length) {\n  tabs.forEach(function (tab) {\n    tab.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      var active = document.querySelector(\".active\");\n      if (active) {\n        active.classList.remove(\"active\");\n      }\n      e.target.classList.add(\"active\");\n    });\n  });\n}\n\n//# sourceURL=webpack://sarai/./src/index.js?");

/***/ }),

/***/ "./src/modules/adaptive.js":
/*!*********************************!*\
  !*** ./src/modules/adaptive.js ***!
  \*********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var menuBtn = document.querySelector('.menu-btn');\n  var menu = document.querySelector('.menu');\n  menuBtn.addEventListener('click', function () {\n    menuBtn.classList.toggle('active');\n    menu.classList.toggle('active');\n  });\n  if (document.documentElement.clientWidth < 890 && menu) {\n    var headerMain = document.querySelector(\".header__main\");\n    var headerBtn = document.querySelector(\".header-btn\");\n    if (headerMain && headerBtn) {\n      headerMain.remove();\n      headerBtn.remove();\n      menu.appendChild(headerMain);\n      menu.appendChild(headerBtn);\n    }\n  }\n  if (document.documentElement.clientWidth < 768) {\n    var parentBlocks = document.querySelectorAll(\".certificates .main__route-block\");\n    if (parentBlocks) {\n      parentBlocks.forEach(function (block) {\n        var title = block.querySelector(\".certificates.excursions .route-info h2\");\n        if (title) {\n          title.remove();\n          block.appendChild(title);\n        }\n      });\n    }\n  }\n  var reviewBtn = document.querySelector(\".send-review.btn\");\n  var reviewPopup = document.querySelector(\".review-popup\");\n  if (reviewBtn && reviewPopup) {\n    reviewBtn.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      reviewPopup.classList.add(\"active\");\n    });\n    var closeBtn = document.querySelector(\".close-btn\");\n    if (closeBtn) {\n      closeBtn.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        if (reviewPopup.classList.contains(\"active\")) {\n          reviewPopup.classList.remove(\"active\");\n        }\n      });\n    }\n  }\n  var schBtn = document.querySelector(\".header .header__right .header-btn\");\n  var schPopup = document.querySelector(\".schedule-popup\");\n  if (schPopup && schBtn) {\n    schBtn.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      schPopup.classList.add(\"active\");\n    });\n    var _closeBtn = document.querySelector(\".close-btn\");\n    if (_closeBtn) {\n      _closeBtn.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        if (schPopup.classList.contains(\"active\")) {\n          schPopup.classList.remove(\"active\");\n        }\n      });\n    }\n  }\n  var callbackBtn = document.querySelector(\".phone-icon\");\n  var callbackPopup = document.querySelector(\".callback-popup\");\n  if (callbackBtn && callbackPopup) {\n    callbackBtn.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      callbackPopup.classList.add(\"active\");\n    });\n    var _closeBtn2 = document.querySelector(\".close-btn\");\n    if (_closeBtn2) {\n      _closeBtn2.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        if (callbackPopup.classList.contains(\"active\")) {\n          callbackPopup.classList.remove(\"active\");\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://sarai/./src/modules/adaptive.js?");

/***/ }),

/***/ "./src/modules/swipers.js":
/*!********************************!*\
  !*** ./src/modules/swipers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ \"./node_modules/swiper/swiper-bundle.esm.js\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n\n\nvar swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".swiper.main-swiper\", {\n  direction: \"horizontal\",\n  loop: false,\n  slidesPerView: 1,\n  spaceBetween: 0,\n  breakpoints: {\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 25\n    }\n  },\n  navigation: {\n    nextEl: \".main-swiper .swiper-button-next\",\n    prevEl: \".main-swiper .swiper-button-prev\"\n  }\n});\nvar swiperReviews = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".swiper.reviews-swiper\", {\n  direction: \"horizontal\",\n  loop: false,\n  slidesPerView: 1,\n  spaceBetween: 0,\n  breakpoints: {\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 25\n    }\n  },\n  navigation: {\n    nextEl: \".reviews-swiper .swiper-button-next\",\n    prevEl: \".reviews-swiper .swiper-button-prev\"\n  }\n});\nvar swiperPhotos = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".swiper.photos-swiper\", {\n  direction: \"horizontal\",\n  loop: false,\n  slidesPerView: 1,\n  spaceBetween: 0,\n  breakpoints: {\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 25\n    }\n  },\n  navigation: {\n    nextEl: \".photos-swiper .swiper-button-next\",\n    prevEl: \".photos-swiper .swiper-button-prev\"\n  }\n});\n\n//# sourceURL=webpack://sarai/./src/modules/swipers.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/logo.svg */ \"./src/assets/images/logo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/m_banner-main.png */ \"./src/assets/images/m_banner-main.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/main-banner.png */ \"./src/assets/images/main-banner.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/welcome-left.png */ \"./src/assets/images/welcome-left.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/m_wonka.png */ \"./src/assets/images/m_wonka.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/welcome-right.png */ \"./src/assets/images/welcome-right.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/main-swiper-1.png */ \"./src/assets/images/main-swiper-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/main-swiper-2.png */ \"./src/assets/images/main-swiper-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/leading-1.png */ \"./src/assets/images/leading-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/leading-2.png */ \"./src/assets/images/leading-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/leading-3.png */ \"./src/assets/images/leading-3.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/leading-4.png */ \"./src/assets/images/leading-4.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/schedule.png */ \"./src/assets/images/schedule.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico__insta.svg */ \"./src/assets/images/ico__insta.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico__whatsapp.svg */ \"./src/assets/images/ico__whatsapp.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/map.png */ \"./src/assets/images/map.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/ico_close.svg */ \"./src/assets/images/ico_close.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/m_popup-sch.png */ \"./src/assets/images/m_popup-sch.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/popup-sch.png */ \"./src/assets/images/popup-sch.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/footer-logo.png */ \"./src/assets/images/footer-logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar code = \"<!DOCTYPE html>\\r\\n<html>\\r\\n  <head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Main page</title>\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\r\\n  </head>\\r\\n  <body>\\r\\n    <div class=\\\"wrapper\\\">\\r\\n      <header class=\\\"header main-header\\\">\\r\\n        <div class=\\\"header__inner\\\">\\r\\n          <div class=\\\"header__logo\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\" />\\r\\n          </div>\\r\\n          <div class=\\\"header__main\\\">\\r\\n            <div class=\\\"header__main-top\\\">\\r\\n              <div class=\\\"header__main-top-left\\\">\\r\\n                <a class=\\\"shop\\\" href=\\\"#\\\">Интернет магазин</a>\\r\\n                <a class=\\\"tel\\\" href=\\\"tel:+7(999)3337604\\\">+7(999)3337604</a>\\r\\n                <div class=\\\"links\\\">\\r\\n                  <a href=\\\"#\\\">\\r\\n                    <svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                      <path\\r\\n                        d=\\\"M17.5 4.0625H2.5C2.41712 4.0625 2.33763 4.09542 2.27903 4.15403C2.22042 4.21263 2.1875 4.29212 2.1875 4.375V15C2.1875 15.2486 2.28627 15.4871 2.46209 15.6629C2.6379 15.8387 2.87636 15.9375 3.125 15.9375H16.875C17.1236 15.9375 17.3621 15.8387 17.5379 15.6629C17.7137 15.4871 17.8125 15.2486 17.8125 15V4.375C17.8125 4.29212 17.7796 4.21263 17.721 4.15403C17.6624 4.09542 17.5829 4.0625 17.5 4.0625ZM16.6953 4.6875L10.338 10.5182C10.1468 10.6935 9.85323 10.6935 9.66204 10.5182L3.30469 4.6875H16.6953ZM16.875 15.3125H3.125C3.04212 15.3125 2.96263 15.2796 2.90403 15.221C2.84542 15.1624 2.8125 15.0829 2.8125 15V5.08594L9.78906 11.4766C9.8458 11.531 9.92138 11.5614 10 11.5614C10.0786 11.5614 10.1542 11.531 10.2109 11.4766L17.1875 5.08594V15C17.1875 15.0829 17.1546 15.1624 17.096 15.221C17.0374 15.2796 16.9579 15.3125 16.875 15.3125Z\\\"\\r\\n                        fill=\\\"#8F7B6C\\\"\\r\\n                        stroke=\\\"#8F7B6C\\\"\\r\\n                        stroke-width=\\\"0.25\\\"\\r\\n                      />\\r\\n                    </svg>\\r\\n                  </a>\\r\\n                  <a href=\\\"#\\\">\\r\\n                    <svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 32 33\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                      <path\\r\\n                        d=\\\"M16 3.74512C13.7767 3.74548 11.5922 4.3272 9.66311 5.43256C7.73407 6.53793 6.1276 8.1285 5.00311 10.0465C3.87862 11.9644 3.2752 14.1431 3.25273 16.3662C3.23025 18.5894 3.78951 20.7798 4.875 22.7201L3.775 26.5576C3.68517 26.858 3.67828 27.177 3.75504 27.4809C3.83181 27.7849 3.98938 28.0624 4.21105 28.2841C4.43271 28.5057 4.71022 28.6633 5.01417 28.7401C5.31811 28.8168 5.63716 28.8099 5.9375 28.7201L9.775 27.6201C11.4754 28.5721 13.3713 29.1217 15.3173 29.2266C17.2632 29.3315 19.2073 28.989 21.0001 28.2253C22.793 27.4617 24.387 26.2972 25.6596 24.8214C26.9322 23.3455 27.8496 21.5976 28.3412 19.7119C28.8329 17.8262 28.8858 15.8529 28.4958 13.9436C28.1058 12.0343 27.2833 10.2397 26.0916 8.69787C24.8998 7.15601 23.3705 5.90785 21.6211 5.04927C19.8717 4.19069 17.9487 3.74455 16 3.74512ZM16 27.7451C13.9808 27.7445 11.999 27.2005 10.2625 26.1701C10.1431 26.1064 10.0103 26.0721 9.875 26.0701C9.80736 26.0661 9.73955 26.0745 9.675 26.0951L5.525 27.2826C5.48156 27.296 5.4353 27.2973 5.39119 27.2863C5.34708 27.2754 5.30679 27.2526 5.27465 27.2205C5.24251 27.1883 5.21974 27.148 5.20879 27.1039C5.19784 27.0598 5.19912 27.0136 5.2125 26.9701L6.4 22.8201C6.42803 22.7222 6.43584 22.6197 6.42295 22.5187C6.41005 22.4176 6.37672 22.3203 6.325 22.2326C5.05909 20.0975 4.53484 17.6037 4.83392 15.1396C5.133 12.6755 6.23861 10.3795 7.97853 8.60924C9.71845 6.83897 11.995 5.69383 14.4535 5.35219C16.9121 5.01055 19.4146 5.49159 21.5713 6.7204C23.7279 7.9492 25.4177 9.85676 26.3773 12.1459C27.3369 14.4351 27.5124 16.9774 26.8766 19.3768C26.2408 21.7761 24.8294 23.8979 22.8621 25.4115C20.8948 26.9251 18.4822 27.7456 16 27.7451ZM22.4375 18.5951L19.875 17.1326C19.6053 16.9805 19.3 16.9026 18.9904 16.907C18.6807 16.9114 18.3778 16.9979 18.1125 17.1576L16.5125 18.1201C15.6031 17.6362 14.8589 16.892 14.375 15.9826L15.3375 14.3826C15.4972 14.1173 15.5837 13.8144 15.5881 13.5047C15.5925 13.1951 15.5146 12.8898 15.3625 12.6201L13.9 10.0576C13.758 9.81165 13.554 9.6072 13.3084 9.46464C13.0627 9.32208 12.784 9.24639 12.5 9.24512C11.375 9.24511 10.2959 9.69116 9.4992 10.4855C8.70253 11.2798 8.25331 12.3576 8.25 13.4826C8.24835 14.8954 8.5252 16.2946 9.0647 17.6003C9.6042 18.906 10.3958 20.0925 11.3942 21.0921C12.3926 22.0917 13.5782 22.8846 14.8833 23.4256C16.1883 23.9666 17.5872 24.2451 19 24.2451H19.0125C20.1375 24.2418 21.2153 23.7926 22.0096 22.9959C22.804 22.1992 23.25 21.1201 23.25 19.9951C23.2487 19.7111 23.173 19.4324 23.0305 19.1868C22.8879 18.9411 22.6835 18.7371 22.4375 18.5951ZM19.0125 22.7451H19C16.5456 22.7418 14.1929 21.7645 12.4585 20.0278C10.7241 18.2911 9.74999 15.937 9.75 13.4826C9.7533 12.7554 10.0445 12.0592 10.5599 11.5461C11.0752 11.0331 11.7728 10.7451 12.5 10.7451C12.5385 10.7483 12.5744 10.7662 12.6 10.7951L14.0625 13.3576C14.0826 13.3967 14.092 13.4404 14.0898 13.4843C14.0876 13.5282 14.0739 13.5707 14.05 13.6076L12.8875 15.5701C12.8217 15.6711 12.7826 15.7872 12.7738 15.9074C12.7651 16.0277 12.787 16.1482 12.8375 16.2576C13.5209 17.7659 14.7292 18.9743 16.2375 19.6576C16.347 19.7081 16.4675 19.73 16.5877 19.7213C16.7079 19.7125 16.824 19.6734 16.925 19.6076L18.8875 18.4451C18.9244 18.4212 18.9669 18.4075 19.0108 18.4053C19.0547 18.4031 19.0984 18.4125 19.1375 18.4326L21.7 19.8951C21.7289 19.9208 21.7468 19.9566 21.75 19.9951C21.75 20.7223 21.462 21.4199 20.949 21.9353C20.4359 22.4506 19.7397 22.7418 19.0125 22.7451Z\\\"\\r\\n                        fill=\\\"#8F7B6C\\\"\\r\\n                        stroke=\\\"#8F7B6C\\\"\\r\\n                        stroke-width=\\\"0.25\\\"\\r\\n                      />\\r\\n                    </svg>\\r\\n                  </a>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"header__main-top-right\\\">\\r\\n                <a href=\\\"#\\\">Наш адрес</a>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"header__main-bottom\\\">\\r\\n              <ul>\\r\\n                <li>\\r\\n                  <a href=\\\"#\\\">Программы</a>\\r\\n                  <ul>\\r\\n                    <div class=\\\"wrapper\\\">\\r\\n                      <li><a href=\\\"#\\\">Индивидуальные программы</a></li>\\r\\n                      <li><a href=\\\"#\\\">Сборные программы</a></li>\\r\\n                      <li><a href=\\\"#\\\">Дни рождения</a></li>\\r\\n                      <li><a href=\\\"#\\\">Онлайн-экскурсия</a></li>\\r\\n                    </div>\\r\\n                  </ul>\\r\\n                </li>\\r\\n                <li><a href=\\\"#\\\">Сертификаты</a></li>\\r\\n                <li><a href=\\\"#\\\">Вопросы и ответы</a></li>\\r\\n                <li><a href=\\\"#\\\">Оплата</a></li>\\r\\n                <li><a href=\\\"#\\\">Отзывы</a></li>\\r\\n              </ul>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\\"header__right\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"phone-icon\\\">\\r\\n              <svg width=\\\"50\\\" height=\\\"51\\\" viewBox=\\\"0 0 50 51\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                <rect y=\\\"0.5\\\" width=\\\"50\\\" height=\\\"50\\\" rx=\\\"25\\\" fill=\\\"#EBE1F9\\\" />\\r\\n                <path\\r\\n                  d=\\\"M27.2219 16.053C27.2468 15.9577 27.2905 15.8683 27.3505 15.79C27.4104 15.7118 27.4854 15.6463 27.5709 15.5974C27.6565 15.5485 27.751 15.5172 27.8488 15.5053C27.9466 15.4934 28.0458 15.5011 28.1406 15.528C29.5387 15.903 30.8136 16.6392 31.8371 17.6628C32.8607 18.6863 33.5969 19.9612 33.9719 21.3593C33.9988 21.4541 34.0065 21.5533 33.9946 21.6511C33.9827 21.7489 33.9513 21.8434 33.9024 21.929C33.8535 22.0145 33.7881 22.0895 33.7098 22.1494C33.6316 22.2093 33.5422 22.2531 33.4469 22.278C33.3829 22.2965 33.3166 22.306 33.25 22.3061C33.0845 22.3052 32.9239 22.2495 32.7933 22.1477C32.6627 22.046 32.5695 21.9039 32.5281 21.7436C32.2162 20.602 31.6121 19.5615 30.7752 18.7246C29.9384 17.8878 28.8979 17.2837 27.7562 16.9718C27.6601 16.9478 27.5697 16.9049 27.4904 16.8454C27.4111 16.7859 27.3446 16.7111 27.2948 16.6254C27.2449 16.5397 27.2128 16.4449 27.2003 16.3466C27.1878 16.2483 27.1951 16.1484 27.2219 16.053ZM26.9781 19.8686C27.6127 20.0423 28.1911 20.3784 28.6563 20.8436C29.1215 21.3088 29.4575 21.8872 29.6312 22.5218C29.6712 22.6828 29.764 22.8258 29.8949 22.9278C30.0258 23.0298 30.1872 23.0849 30.3531 23.0843C30.4167 23.0849 30.48 23.0754 30.5406 23.0561C30.6368 23.0322 30.7272 22.9892 30.8065 22.9297C30.8857 22.8702 30.9523 22.7954 31.0021 22.7098C31.0519 22.6241 31.0841 22.5293 31.0966 22.431C31.1091 22.3326 31.1018 22.2328 31.075 22.1374C30.8382 21.2463 30.3702 20.4336 29.7182 19.7817C29.0663 19.1297 28.2536 18.6616 27.3625 18.4249C27.2647 18.3892 27.1605 18.3744 27.0566 18.3812C26.9527 18.388 26.8514 18.4164 26.759 18.4645C26.6667 18.5127 26.5854 18.5795 26.5203 18.6608C26.4553 18.7421 26.4078 18.836 26.381 18.9366C26.3542 19.0372 26.3487 19.1423 26.3647 19.2452C26.3808 19.3481 26.4181 19.4465 26.4743 19.5342C26.5304 19.6218 26.6042 19.6969 26.691 19.7544C26.7777 19.812 26.8755 19.8509 26.9781 19.8686ZM34.7125 28.9155C34.5467 30.1815 33.9267 31.3442 32.9679 32.1875C32.0092 33.0307 30.7768 33.4971 29.5 33.4999C22.0562 33.4999 16 27.4436 16 19.9999C16.0028 18.7231 16.4692 17.4907 17.3124 16.5319C18.1557 15.5732 19.3184 14.9532 20.5844 14.7874C20.9071 14.7516 21.2328 14.8195 21.5144 14.9814C21.7959 15.1432 22.0185 15.3905 22.15 15.6874L24.0344 20.0843C24.1321 20.3125 24.1713 20.5615 24.1484 20.8087C24.1255 21.0559 24.0412 21.2935 23.9031 21.4999L22.3469 23.8811C23.0516 25.3113 24.2127 26.4658 25.6469 27.1624L28 25.5968C28.2061 25.4578 28.4443 25.3737 28.692 25.3524C28.9397 25.331 29.1888 25.3732 29.4156 25.4749L33.8125 27.3499C34.1094 27.4814 34.3567 27.704 34.5185 27.9855C34.6803 28.267 34.7483 28.5928 34.7125 28.9155ZM33.2219 28.728L28.825 26.853L26.4812 28.4186C26.2656 28.5612 26.0168 28.6456 25.7589 28.6637C25.501 28.6818 25.2428 28.6329 25.0094 28.5218C23.2628 27.6769 21.8499 26.2707 20.9969 24.528C20.8844 24.2954 20.8339 24.0376 20.8504 23.7798C20.8668 23.5219 20.9495 23.2726 21.0906 23.0561L22.6562 20.6749L20.7719 16.278C19.8671 16.3943 19.0358 16.8364 18.4336 17.5215C17.8313 18.2066 17.4994 19.0877 17.5 19.9999C17.5025 23.1817 18.7676 26.2325 21.0175 28.4824C23.2674 30.7323 26.3182 31.9974 29.5 31.9999C30.4122 32.0005 31.2933 31.6686 31.9784 31.0663C32.6635 30.4641 33.1056 29.6327 33.2219 28.728Z\\\"\\r\\n                  fill=\\\"#221207\\\"\\r\\n                />\\r\\n              </svg>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\" class=\\\"btn header-btn\\\">Расписание</a>\\r\\n            <div class=\\\"menu-btn\\\">\\r\\n              <span></span>\\r\\n              <span></span>\\r\\n              <span></span>\\r\\n            </div>\\r\\n            <div class=\\\"menu\\\"></div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </header>\\r\\n    </div>\\r\\n    <main class=\\\"main\\\">\\r\\n      <section class=\\\"main__banner\\\">\\r\\n        <div class=\\\"wrapper\\\">\\r\\n          <h1>Экскурсии на шоколадную фабрику French Kiss</h1>\\r\\n          <p class=\\\"main__banner-desc\\\">\\r\\n            Если вы желаете провести время с пользой, увлекательно и со вкусом или незабываемо отметить День Рождения ребенка, то шоколадная фабрика French Kiss приглашает вас в увлекательное приключение. Наши профессиональные ведущие проведут для вас интерактивную экскурсию с мастер-классом.\\r\\n          </p>\\r\\n        </div>\\r\\n        <picture>\\r\\n          <source media=\\\"(max-width: 768px)\\\" srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" />\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"main page banner\\\" />\\r\\n        </picture>\\r\\n        <div class=\\\"wrapper\\\">\\r\\n          <div class=\\\"main__video\\\">\\r\\n            <div class=\\\"main__video-text\\\">\\r\\n              <p>Наши программы подойдут для детей, школьных групп и семейного досуга. С нами вы можете провести корпаротивы, дни рождения, семейные праздники.</p>\\r\\n              <p>Наши ведущие создадут праздничную атмосферу. А наши кондитеры будут рады рады вашим улыбкам и делятся с вами секретами изготовления шоколада.</p>\\r\\n            </div>\\r\\n            <div class=\\\"main__video-video\\\">\\r\\n              <iframe class=\\\"video\\\" src=\\\"https://www.youtube.com/embed/tgbNymZ7vqY\\\"></iframe>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\\"main__banner-welcome\\\">\\r\\n            <picture class=\\\"welcome-1\\\">\\r\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"willy wonka picture\\\" />\\r\\n            </picture>\\r\\n            <h2>В гостях у Вилли Вонки</h2>\\r\\n            <p>Погрузитесь в мир приключений с Вилли Вонкой. Программа подарит эмоции и впечатления и море фотографий, которые будут напоминать об этом событии !</p>\\r\\n            <picture class=\\\"welcome-2\\\">\\r\\n              <source media=\\\"(max-width: 768px)\\\" srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"willy wonka picture\\\" />\\r\\n            </picture>\\r\\n          </div>\\r\\n        </div>\\r\\n      </section>\\r\\n      <div class=\\\"wrapper\\\">\\r\\n        <section class=\\\"main__programms\\\">\\r\\n          <div class=\\\"swiper main-swiper\\\">\\r\\n            <div class=\\\"swiper-back\\\"></div>\\r\\n            <div class=\\\"main-swiper__top\\\">\\r\\n              <h3>Наши программы</h3>\\r\\n              <div class=\\\"swiper-navigation\\\">\\r\\n                <div class=\\\"swiper-button-prev\\\"></div>\\r\\n                <div class=\\\"swiper-button-next\\\"></div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"swiper-wrapper\\\">\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"main__swiper-inner\\\">\\r\\n                  <picture>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                  </picture>\\r\\n                  <p>День рождения на фабрике</p>\\r\\n                  <span>Экскурсия по производству с дегустацией шоколадных конфет, мастер-классом по 2 медиантом, игровой програмой + шоколадная фигурка в подарок.</span>\\r\\n                  <div class=\\\"swiper-slide__bottom\\\">\\r\\n                    <a href=\\\"#\\\" class=\\\"btn\\\">Оставить заяку</a>\\r\\n                    <a href=\\\"#\\\">Читать подробнее</a>\\r\\n                  </div>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"main__swiper-inner\\\">\\r\\n                  <picture>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                  </picture>\\r\\n                  <p>Шоколадные приключение</p>\\r\\n                  <span>Экскурсия по производству с дегустацией шоколадных конфет, мастер-классом по 2 медиантом, упаковкой собственных изделий + шоколадная фигурка в подарок.</span>\\r\\n                  <div class=\\\"swiper-slide__bottom\\\">\\r\\n                    <a href=\\\"#\\\" class=\\\"btn\\\">Оставить заяку</a>\\r\\n                    <a href=\\\"#\\\">Читать подробнее</a>\\r\\n                  </div>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"main__swiper-inner\\\">\\r\\n                  <picture>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"swiper image\\\" />\\r\\n                  </picture>\\r\\n                  <p>В гостях у Вилли Вонки</p>\\r\\n                  <span>Экскурсия по производству с дегустацией шоколадных конфет, викторины, мастер-классом по 2 медиантом, упаковкой собственных изделий + шоколадная фигурка </span>\\r\\n                  <div class=\\\"swiper-slide__bottom\\\">\\r\\n                    <a href=\\\"#\\\" class=\\\"btn\\\">Оставить заяку</a>\\r\\n                    <a href=\\\"#\\\">Читать подробнее</a>\\r\\n                  </div>\\r\\n                </div>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n        </section>\\r\\n        <section class=\\\"main__leading\\\">\\r\\n          <h3>Ведущие</h3>\\r\\n          <div class=\\\"main__leading-content\\\">\\r\\n            <a href=\\\"#\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"leading picture\\\" />\\r\\n              </picture>\\r\\n              <span>Иван Иванов</span>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"leading picture\\\" />\\r\\n              </picture>\\r\\n              <span>Диана Иванова</span>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"leading picture\\\" />\\r\\n              </picture>\\r\\n              <span>Мария Кравченко</span>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"leading picture\\\" />\\r\\n              </picture>\\r\\n              <span>Елизавета Андреева</span>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"leading picture\\\" />\\r\\n              </picture>\\r\\n              <span>Иван Иванов</span>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"leading picture\\\" />\\r\\n              </picture>\\r\\n              <span>Иван Иванов</span>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\">\\r\\n              <picture>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"leading picture\\\" />\\r\\n              </picture>\\r\\n              <span>Иван Иванов</span>\\r\\n            </a>\\r\\n          </div>\\r\\n        </section>\\r\\n        <section class=\\\"main__reviews\\\">\\r\\n          <div class=\\\"swiper reviews-swiper\\\">\\r\\n            <div class=\\\"swiper-back\\\"></div>\\r\\n            <div class=\\\"main-swiper__top\\\">\\r\\n              <h3>Отзывы</h3>\\r\\n              <div class=\\\"swiper-navigation\\\">\\r\\n                <div class=\\\"swiper-button-prev\\\"></div>\\r\\n                <div class=\\\"swiper-button-next\\\"></div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"swiper-wrapper\\\">\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"main__swiper-inner\\\">\\r\\n                  <div class=\\\"reviews__top\\\">\\r\\n                    <span>Марина</span>\\r\\n                    <span>21.05.2022</span>\\r\\n                  </div>\\r\\n                  <p>Отличная экскурсия!</p>\\r\\n                  <span>Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет.</span>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"main__swiper-inner\\\">\\r\\n                  <div class=\\\"reviews__top\\\">\\r\\n                    <span>Марина</span>\\r\\n                    <span>21.05.2022</span>\\r\\n                  </div>\\r\\n                  <p>Отличная экскурсия!</p>\\r\\n                  <span>Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет.</span>\\r\\n                </div>\\r\\n              </div>\\r\\n              <div class=\\\"swiper-slide\\\">\\r\\n                <div class=\\\"main__swiper-inner\\\">\\r\\n                  <div class=\\\"reviews__top\\\">\\r\\n                    <span>Марина</span>\\r\\n                    <span>21.05.2022</span>\\r\\n                  </div>\\r\\n                  <p>Отличная экскурсия!</p>\\r\\n                  <span>Ходили с сыном(13лет) на экскурсию по производству шоколадных конфет french kiss. Экскурсия очень понравилась обоим! Веселые ведущие минут25-30 рассказывали и показывали сам процесс производства, а потом примерно столько же длился мастер-класс по изготовлению конфет.</span>\\r\\n                </div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <a href=\\\"#\\\" class=\\\"send-review btn\\\">Оставить отзыв</a>\\r\\n          </div>\\r\\n        </section>\\r\\n        <section class=\\\"main__schedule\\\">\\r\\n          <h3>Расписание и запись на экскурсии</h3>\\r\\n          <div class=\\\"main__schedule-options\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"active\\\">Индивидульные группы</a>\\r\\n            <a href=\\\"#\\\">Сборные группы</a>\\r\\n          </div>\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"schedule image\\\" />\\r\\n        </section>\\r\\n        <section class=\\\"main__about\\\">\\r\\n          <h3>Почему стоит выбрать именно нас?</h3>\\r\\n          <p>Если вы желаете провести время с пользой, увлекательно и со вкусом или незабываемо отметить День Рождения ребенка, то шоколадная фабрика French Kiss приглашает вас в увлекательное приключение. Наши профессиональные ведущие проведут для вас интерактивную экскурсию с мастер-классом.</p>\\r\\n          <p>Если вы желаете провести время с пользой, увлекательно и со вкусом или незабываемо отметить День Рождения ребенка, то шоколадная фабрика French Kiss приглашает вас в увлекательное приключение. Наши профессиональные ведущие проведут для вас интерактивную экскурсию с мастер-классом.</p>\\r\\n          <p>Если вы желаете провести время с пользой, увлекательно и со вкусом или незабываемо отметить День Рождения ребенка, то шоколадная фабрика French Kiss приглашает вас в увлекательное приключение. Наши профессиональные ведущие проведут для вас интерактивную экскурсию с мастер-классом.</p>\\r\\n        </section>\\r\\n        <section class=\\\"main__contacts\\\">\\r\\n          <h3>Наши контакты</h3>\\r\\n          <div class=\\\"main__contacts-content\\\">\\r\\n            <div class=\\\"contacts-info\\\">\\r\\n              <div>\\r\\n                <p>Телефон</p>\\r\\n                <a href=\\\"#\\\">+7(999)333-76-04</a>\\r\\n              </div>\\r\\n              <div>\\r\\n                <p>Адрес</p>\\r\\n                <span>г.Москва, ул. Зюзинская, д.6, корп. 2</span>\\r\\n              </div>\\r\\n              <div class=\\\"contacts-icons\\\">\\r\\n                <a href=\\\"#\\\">\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"instagram icon\\\" />\\r\\n                </a>\\r\\n                <a href=\\\"#\\\">\\r\\n                  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"whatsapp icon\\\" />\\r\\n                </a>\\r\\n              </div>\\r\\n              <a href=\\\"#\\\" class=\\\"how-to-get\\\">Как добраться?</a>\\r\\n              <a href=\\\"#\\\" class=\\\"btn callback\\\">Обратный звонок</a>\\r\\n            </div>\\r\\n            <div class=\\\"contacts-map\\\">\\r\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"map image\\\" />\\r\\n            </div>\\r\\n          </div>\\r\\n        </section>\\r\\n      </div>\\r\\n    </main>\\r\\n    <div class=\\\"popup callback-popup\\\">\\r\\n      <div class=\\\"popup-inner qa\\\">\\r\\n        <section class=\\\"main__form\\\">\\r\\n          <div class=\\\"main-form__top\\\">\\r\\n            <h2>Обратная связь</h2>\\r\\n            <a href=\\\"#\\\" class=\\\"close-btn\\\">\\r\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"close icon\\\">              \\r\\n            </a>\\r\\n          </div>\\r\\n          <div class=\\\"main__form-content\\\">\\r\\n            <form action=\\\"\\\">\\r\\n              <div class=\\\"input-block\\\">\\r\\n                <label for=\\\"program\\\">Программа</label>\\r\\n                <input type=\\\"text\\\" id=\\\"program\\\" />\\r\\n              </div>\\r\\n              <div class=\\\"input-block\\\">\\r\\n                <label for=\\\"tel\\\">Телефон</label>\\r\\n                <input type=\\\"text\\\" id=\\\"tel\\\" />\\r\\n              </div>\\r\\n              <div class=\\\"input-block checkbox\\\">\\r\\n                <input type=\\\"checkbox\\\" name=\\\"agree\\\" id=\\\"agree\\\" />\\r\\n                <label for=\\\"agree\\\">Чтобы оставить заявку, неоходимо согласится на обработкой персональных данных и с правилами бронирования экскурсии.</label>\\r\\n              </div>\\r\\n              <button type=\\\"submit\\\" class=\\\"btn submit\\\">Оставить отзыв</button>\\r\\n            </form>\\r\\n          </div>\\r\\n        </section>\\r\\n      </div>\\r\\n    </div>\\r\\n    <div class=\\\"popup schedule-popup\\\">\\r\\n      <div class=\\\"popup-inner\\\">\\r\\n        <picture>\\r\\n          <source media=\\\"(max-width: 768px)\\\" srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"schedule popup image\\\">\\r\\n        </picture>\\r\\n      </div>\\r\\n    </div>\\r\\n    <div class=\\\"popup review-popup\\\">\\r\\n        <div class=\\\"popup-inner qa\\\">\\r\\n          <section class=\\\"main__form\\\">\\r\\n            <div class=\\\"main-form__top\\\">\\r\\n              <h2>Оставить отзыв</h2>\\r\\n              <a href=\\\"#\\\" class=\\\"close-btn\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"close icon\\\">              \\r\\n              </a>\\r\\n            </div>\\r\\n            <div class=\\\"main__form-content\\\">\\r\\n              <form action=\\\"\\\">\\r\\n                <div class=\\\"form-top\\\">\\r\\n                  <div class=\\\"input-block\\\">\\r\\n                    <label for=\\\"name\\\">Имя</label>\\r\\n                    <input type=\\\"text\\\" id=\\\"name\\\" />\\r\\n                  </div>\\r\\n                  <div class=\\\"input-block\\\">\\r\\n                    <label for=\\\"E-mail\\\">E-mail</label>\\r\\n                    <input type=\\\"text\\\" id=\\\"E-mail\\\" />\\r\\n                  </div>\\r\\n                </div>\\r\\n                <div class=\\\"input-block\\\">\\r\\n                  <label for=\\\"tel\\\">Телефон</label>\\r\\n                  <input type=\\\"text\\\" id=\\\"tel\\\" />\\r\\n                </div>\\r\\n                <div class=\\\"input-block\\\">\\r\\n                  <label for=\\\"review\\\">Отзыв</label>\\r\\n                  <textarea name=\\\"review\\\" id=\\\"review\\\"></textarea>\\r\\n                </div>\\r\\n                <div class=\\\"input-block checkbox\\\">\\r\\n                  <input type=\\\"checkbox\\\" name=\\\"agree\\\" id=\\\"agree\\\" />\\r\\n                  <label for=\\\"agree\\\">Чтобы оставить заявку, неоходимо согласится на обработкой персональных данных и с правилами бронирования экскурсии.</label>\\r\\n                </div>\\r\\n                <button type=\\\"submit\\\" class=\\\"btn submit\\\">Оставить отзыв</button>\\r\\n              </form>\\r\\n            </div>\\r\\n          </section>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"footer-border\\\"></div>\\r\\n    <div class=\\\"wrapper\\\">\\r\\n      <footer class=\\\"footer\\\">\\r\\n        <div class=\\\"footer__left\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"footer logo image\\\" />\\r\\n          <span>© 2022 ООО «Веселое путешествие» ИНН 7715373532, ОГРН 1037715023367</span>\\r\\n        </div>\\r\\n        <div class=\\\"footer__center\\\">\\r\\n          <ul>\\r\\n            <li><a href=\\\"#\\\">Программы</a></li>\\r\\n            <li><a href=\\\"#\\\">Вопросы и ответы</a></li>\\r\\n            <li><a href=\\\"#\\\">Сертификаты</a></li>\\r\\n            <li><a href=\\\"#\\\">Как добраться?</a></li>\\r\\n            <li><a href=\\\"#\\\">Агенствам</a></li>\\r\\n            <li><a href=\\\"#\\\">Наши документы</a></li>\\r\\n            <li><a href=\\\"#\\\">Интернет магазин</a></li>\\r\\n          </ul>\\r\\n        </div>\\r\\n        <div class=\\\"footer__right\\\">\\r\\n          <div class=\\\"footer__right-top\\\">\\r\\n            <a href=\\\"#\\\">+7(999)3337604</a>\\r\\n            <a href=\\\"#\\\">mail@mail.com</a>\\r\\n          </div>\\r\\n          <div class=\\\"footer__right-bot\\\">\\r\\n            <a href=\\\"#\\\">\\r\\n              <svg width=\\\"22\\\" height=\\\"22\\\" viewBox=\\\"0 0 32 33\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                <path\\r\\n                  d=\\\"M16 10.7451C14.8628 10.7451 13.7511 11.0823 12.8055 11.7142C11.8599 12.346 11.1229 13.244 10.6877 14.2947C10.2525 15.3454 10.1386 16.5015 10.3605 17.6169C10.5824 18.7323 11.13 19.7568 11.9341 20.561C12.7383 21.3651 13.7628 21.9128 14.8782 22.1346C15.9936 22.3565 17.1498 22.2426 18.2004 21.8074C19.2511 21.3722 20.1491 20.6352 20.781 19.6896C21.4128 18.7441 21.75 17.6324 21.75 16.4951C21.75 14.9701 21.1442 13.5076 20.0659 12.4293C18.9875 11.3509 17.525 10.7451 16 10.7451ZM16 20.7451C15.1594 20.7451 14.3377 20.4959 13.6388 20.0289C12.9399 19.5619 12.3952 18.8981 12.0735 18.1215C11.7518 17.3449 11.6677 16.4904 11.8317 15.666C11.9956 14.8416 12.4004 14.0843 12.9948 13.4899C13.5892 12.8955 14.3464 12.4908 15.1709 12.3268C15.9953 12.1628 16.8498 12.247 17.6264 12.5686C18.403 12.8903 19.0668 13.435 19.5337 14.1339C20.0007 14.8329 20.25 15.6545 20.25 16.4951C20.2467 17.6213 19.7979 18.7004 19.0016 19.4967C18.2052 20.293 17.1262 20.7418 16 20.7451ZM21.5 4.24512H10.5C8.70979 4.24512 6.9929 4.95628 5.72703 6.22215C4.46116 7.48802 3.75 9.20491 3.75 10.9951V21.9951C3.75 23.7853 4.46116 25.5022 5.72703 26.7681C6.9929 28.034 8.70979 28.7451 10.5 28.7451H21.5C23.2902 28.7451 25.0071 28.034 26.273 26.7681C27.5388 25.5022 28.25 23.7853 28.25 21.9951V10.9951C28.25 9.20491 27.5388 7.48802 26.273 6.22215C25.0071 4.95628 23.2902 4.24512 21.5 4.24512ZM26.75 21.9951C26.75 23.3875 26.1969 24.7229 25.2123 25.7074C24.2277 26.692 22.8924 27.2451 21.5 27.2451H10.5C9.10761 27.2451 7.77225 26.692 6.78769 25.7074C5.80312 24.7229 5.25 23.3875 5.25 21.9951V10.9951C5.25 9.60273 5.80312 8.26737 6.78769 7.28281C7.77225 6.29824 9.10761 5.74512 10.5 5.74512H21.5C22.8924 5.74512 24.2277 6.29824 25.2123 7.28281C26.1969 8.26737 26.75 9.60273 26.75 10.9951V21.9951ZM23.75 9.99512C23.75 10.2423 23.6767 10.484 23.5393 10.6896C23.402 10.8951 23.2068 11.0554 22.9784 11.15C22.7499 11.2446 22.4986 11.2693 22.2561 11.2211C22.0137 11.1729 21.7909 11.0538 21.6161 10.879C21.4413 10.7042 21.3223 10.4815 21.274 10.239C21.2258 9.9965 21.2505 9.74517 21.3451 9.51676C21.4398 9.28835 21.6 9.09313 21.8055 8.95578C22.0111 8.81843 22.2528 8.74512 22.5 8.74512C22.8315 8.74512 23.1495 8.87681 23.3839 9.11123C23.6183 9.34565 23.75 9.6636 23.75 9.99512Z\\\"\\r\\n                  fill=\\\"#221207\\\"\\r\\n                />\\r\\n              </svg>\\r\\n            </a>\\r\\n            <a href=\\\"#\\\">\\r\\n              <svg width=\\\"22\\\" height=\\\"22\\\" viewBox=\\\"0 0 32 33\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                <path\\r\\n                  d=\\\"M16 3.74512C13.7767 3.74548 11.5922 4.3272 9.66311 5.43256C7.73407 6.53793 6.1276 8.1285 5.00311 10.0465C3.87862 11.9644 3.2752 14.1431 3.25273 16.3662C3.23025 18.5894 3.78951 20.7798 4.875 22.7201L3.775 26.5576C3.68517 26.858 3.67828 27.177 3.75504 27.4809C3.83181 27.7849 3.98938 28.0624 4.21105 28.2841C4.43271 28.5057 4.71022 28.6633 5.01417 28.7401C5.31811 28.8168 5.63716 28.8099 5.9375 28.7201L9.775 27.6201C11.4754 28.5721 13.3713 29.1217 15.3173 29.2266C17.2632 29.3315 19.2073 28.989 21.0001 28.2253C22.793 27.4617 24.387 26.2972 25.6596 24.8214C26.9322 23.3455 27.8496 21.5976 28.3412 19.7119C28.8329 17.8262 28.8858 15.8529 28.4958 13.9436C28.1058 12.0343 27.2833 10.2397 26.0916 8.69787C24.8998 7.15601 23.3705 5.90785 21.6211 5.04927C19.8717 4.19069 17.9487 3.74455 16 3.74512ZM16 27.7451C13.9808 27.7445 11.999 27.2005 10.2625 26.1701C10.1431 26.1064 10.0103 26.0721 9.875 26.0701C9.80736 26.0661 9.73955 26.0745 9.675 26.0951L5.525 27.2826C5.48156 27.296 5.4353 27.2973 5.39119 27.2863C5.34708 27.2754 5.30679 27.2526 5.27465 27.2205C5.24251 27.1883 5.21974 27.148 5.20879 27.1039C5.19784 27.0598 5.19912 27.0136 5.2125 26.9701L6.4 22.8201C6.42803 22.7222 6.43584 22.6197 6.42295 22.5187C6.41005 22.4176 6.37672 22.3203 6.325 22.2326C5.05909 20.0975 4.53484 17.6037 4.83392 15.1396C5.133 12.6755 6.23861 10.3795 7.97853 8.60924C9.71845 6.83897 11.995 5.69383 14.4535 5.35219C16.9121 5.01055 19.4146 5.49159 21.5713 6.7204C23.7279 7.9492 25.4177 9.85676 26.3773 12.1459C27.3369 14.4351 27.5124 16.9774 26.8766 19.3768C26.2408 21.7761 24.8294 23.8979 22.8621 25.4115C20.8948 26.9251 18.4822 27.7456 16 27.7451ZM22.4375 18.5951L19.875 17.1326C19.6053 16.9805 19.3 16.9026 18.9904 16.907C18.6807 16.9114 18.3778 16.9979 18.1125 17.1576L16.5125 18.1201C15.6031 17.6362 14.8589 16.892 14.375 15.9826L15.3375 14.3826C15.4972 14.1173 15.5837 13.8144 15.5881 13.5047C15.5925 13.1951 15.5146 12.8898 15.3625 12.6201L13.9 10.0576C13.758 9.81165 13.554 9.6072 13.3084 9.46464C13.0627 9.32208 12.784 9.24639 12.5 9.24512C11.375 9.24511 10.2959 9.69116 9.4992 10.4855C8.70253 11.2798 8.25331 12.3576 8.25 13.4826C8.24835 14.8954 8.5252 16.2946 9.0647 17.6003C9.6042 18.906 10.3958 20.0925 11.3942 21.0921C12.3926 22.0917 13.5782 22.8846 14.8833 23.4256C16.1883 23.9666 17.5872 24.2451 19 24.2451H19.0125C20.1375 24.2418 21.2153 23.7926 22.0096 22.9959C22.804 22.1992 23.25 21.1201 23.25 19.9951C23.2487 19.7111 23.173 19.4324 23.0305 19.1868C22.8879 18.9411 22.6835 18.7371 22.4375 18.5951ZM19.0125 22.7451H19C16.5456 22.7418 14.1929 21.7645 12.4585 20.0278C10.7241 18.2911 9.74999 15.937 9.75 13.4826C9.7533 12.7554 10.0445 12.0592 10.5599 11.5461C11.0752 11.0331 11.7728 10.7451 12.5 10.7451C12.5385 10.7483 12.5744 10.7662 12.6 10.7951L14.0625 13.3576C14.0826 13.3967 14.092 13.4404 14.0898 13.4843C14.0876 13.5282 14.0739 13.5707 14.05 13.6076L12.8875 15.5701C12.8217 15.6711 12.7826 15.7872 12.7738 15.9074C12.7651 16.0277 12.787 16.1482 12.8375 16.2576C13.5209 17.7659 14.7292 18.9743 16.2375 19.6576C16.347 19.7081 16.4675 19.73 16.5877 19.7213C16.7079 19.7125 16.824 19.6734 16.925 19.6076L18.8875 18.4451C18.9244 18.4212 18.9669 18.4075 19.0108 18.4053C19.0547 18.4031 19.0984 18.4125 19.1375 18.4326L21.7 19.8951C21.7289 19.9208 21.7468 19.9566 21.75 19.9951C21.75 20.7223 21.462 21.4199 20.949 21.9353C20.4359 22.4506 19.7397 22.7418 19.0125 22.7451Z\\\"\\r\\n                  fill=\\\"#221207\\\"\\r\\n                />\\r\\n              </svg>\\r\\n            </a>\\r\\n          </div>\\r\\n        </div>\\r\\n      </footer>\\r\\n    </div>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://sarai/./src/index.html?");

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

/***/ "./src/assets/images/ico_close.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/ico_close.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico_close.svg\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/ico_close.svg?");

/***/ }),

/***/ "./src/assets/images/leading-1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/leading-1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/leading-1.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/leading-1.png?");

/***/ }),

/***/ "./src/assets/images/leading-2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/leading-2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/leading-2.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/leading-2.png?");

/***/ }),

/***/ "./src/assets/images/leading-3.png":
/*!*****************************************!*\
  !*** ./src/assets/images/leading-3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/leading-3.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/leading-3.png?");

/***/ }),

/***/ "./src/assets/images/leading-4.png":
/*!*****************************************!*\
  !*** ./src/assets/images/leading-4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/leading-4.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/leading-4.png?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo.svg\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/logo.svg?");

/***/ }),

/***/ "./src/assets/images/m_banner-main.png":
/*!*********************************************!*\
  !*** ./src/assets/images/m_banner-main.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/m_banner-main.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/m_banner-main.png?");

/***/ }),

/***/ "./src/assets/images/m_popup-sch.png":
/*!*******************************************!*\
  !*** ./src/assets/images/m_popup-sch.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/m_popup-sch.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/m_popup-sch.png?");

/***/ }),

/***/ "./src/assets/images/m_wonka.png":
/*!***************************************!*\
  !*** ./src/assets/images/m_wonka.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/m_wonka.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/m_wonka.png?");

/***/ }),

/***/ "./src/assets/images/main-banner.png":
/*!*******************************************!*\
  !*** ./src/assets/images/main-banner.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/main-banner.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/main-banner.png?");

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

/***/ "./src/assets/images/popup-sch.png":
/*!*****************************************!*\
  !*** ./src/assets/images/popup-sch.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/popup-sch.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/popup-sch.png?");

/***/ }),

/***/ "./src/assets/images/schedule.png":
/*!****************************************!*\
  !*** ./src/assets/images/schedule.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/schedule.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/schedule.png?");

/***/ }),

/***/ "./src/assets/images/welcome-left.png":
/*!********************************************!*\
  !*** ./src/assets/images/welcome-left.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/welcome-left.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/welcome-left.png?");

/***/ }),

/***/ "./src/assets/images/welcome-right.png":
/*!*********************************************!*\
  !*** ./src/assets/images/welcome-right.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/welcome-right.png\";\n\n//# sourceURL=webpack://sarai/./src/assets/images/welcome-right.png?");

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
/******/ 			"index": 0,
/******/ 			"src_index_scss-src_index_scss-src_index_scss": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_html-loader_dist_runtime_getUrl-362cb3","src_index_scss-src_index_scss-src_index_scss"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;