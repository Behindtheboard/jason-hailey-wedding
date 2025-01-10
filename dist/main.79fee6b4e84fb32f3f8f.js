/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_vidLoadTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/vidLoadTest */ \"./src/modules/vidLoadTest.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_vidResizing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/vidResizing */ \"./src/modules/vidResizing.js\");\n/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropdown */ \"./src/modules/dropdown.js\");\n/* harmony import */ var _modules_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/countdown */ \"./src/modules/countdown.js\");\n/* harmony import */ var _modules_noDoubleTap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/noDoubleTap */ \"./src/modules/noDoubleTap.js\");\n/* harmony import */ var _modules_sound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sound */ \"./src/modules/sound.js\");\n/* harmony import */ var _modules_volumeControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/volumeControl */ \"./src/modules/volumeControl.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_rsvp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/rsvp */ \"./src/modules/rsvp.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_vidLoadTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_sound__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_volumeControl__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n;(0,_modules_noDoubleTap__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_countdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_rsvp__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/index.js?");

/***/ }),

/***/ "./src/modules/countdown.js":
/*!**********************************!*\
  !*** ./src/modules/countdown.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countdown)\n/* harmony export */ });\nfunction countdown() {\n  const countdownCtn = document.getElementById(\"counter\");\n  const countDownDate = new Date(\"May 26, 2025 17:00:00\").getTime();\n\n  for (let i = 0; i < 5; i++) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"counter-number\");\n    countdownCtn.appendChild(div);\n  }\n\n  for (let i = 0; i < 5; i++) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"counter-label\");\n    countdownCtn.appendChild(div);\n  }\n\n  const countDownUI = document.querySelectorAll(\".counter-number\");\n  const counterLabel = document.querySelectorAll(\".counter-label\");\n\n  counterLabel[0].innerHTML = \"months\";\n  counterLabel[1].innerHTML = \"days\";\n  counterLabel[2].innerHTML = \"hours\";\n  counterLabel[3].innerHTML = \"minutes\";\n  counterLabel[4].innerHTML = \"seconds\";\n\n  const x = setInterval(() => {\n    const now = new Date().getTime();\n    const distance = countDownDate - now;\n\n    if (distance > 0) {\n      // Calculate months using date manipulation\n      const nowDate = new Date();\n      const futureDate = new Date(countDownDate);\n\n      const totalMonths =\n        futureDate.getFullYear() * 12 +\n        futureDate.getMonth() -\n        (nowDate.getFullYear() * 12 + nowDate.getMonth());\n\n      const days = Math.floor(\n        (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)\n      );\n      const hours = Math.floor(\n        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)\n      );\n      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\n      const seconds = Math.floor((distance % (1000 * 60)) / 1000);\n\n      const formatTwoDigits = (num) => (num < 10 ? \"0\" + num : num);\n\n      // Update countdown UI\n      countDownUI[0].innerHTML = formatTwoDigits(totalMonths);\n      countDownUI[1].innerHTML = formatTwoDigits(days);\n      countDownUI[2].innerHTML = formatTwoDigits(hours);\n      countDownUI[3].innerHTML = formatTwoDigits(minutes);\n      countDownUI[4].innerHTML = formatTwoDigits(seconds);\n    } else {\n      // Countdown finished\n      clearInterval(x);\n\n      // Reset counters and display a message\n      for (let i = 0; i < countDownUI.length; i++) {\n        countDownUI[i].innerHTML = \"00\";\n      }\n\n      const messageElement = document.getElementById(\"countdown-message\");\n      if (messageElement) {\n        messageElement.innerHTML = \"Today's the day!\";\n      }\n    }\n  }, 1000);\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/countdown.js?");

/***/ }),

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdown)\n/* harmony export */ });\nfunction dropdown() {\n  const dropdownContainer = document.getElementById(\"dropdown-container\");\n  const menuButton = document.getElementById(\"menu-button\");\n  const menuCloseButton = document.getElementById(\"menu-close-button\");\n  const dropdownMenu = document.getElementById(\"dropdown-menu\");\n  const menulinks = document.querySelectorAll(\"li a\");\n\n  menuButton.addEventListener(\"click\", (e) => {\n    if (e.target === e.currentTarget) {\n      dropdownMenu.classList.add(\"visible\");\n    }\n  });\n\n  window.addEventListener(\"click\", (e) => {\n    const clickedInsideDropdown = dropdownContainer.contains(e.target);\n    const clickedMenuCloseButton = e.target === menuCloseButton;\n    const clickedMenuLink = Array.from(menulinks).some(link => link === e.target);\n\n    if (!clickedInsideDropdown || clickedMenuCloseButton || clickedMenuLink) {\n      dropdownMenu.classList.remove(\"visible\");\n    }\n  });\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/dropdown.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n  document.getElementById(\"home\").addEventListener(\"click\", (e) => {\n    e.preventDefault()\n    document.body.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\",\n    });\n  });\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/noDoubleTap.js":
/*!************************************!*\
  !*** ./src/modules/noDoubleTap.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const menu = document.getElementById(\"dropdown-menu\");\n  const toggleButton = document.getElementById(\"menu-toggle\");\n  let lastTouchEnd = 0;\n\n  document.addEventListener(\n    \"touchend\",\n    (event) => {\n      const now = new Date().getTime();\n      if (now - lastTouchEnd <= 300) {\n        event.preventDefault(); // Prevent double-tap zoom\n      }\n      lastTouchEnd = now;\n    },\n    false\n  );\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/noDoubleTap.js?");

/***/ }),

/***/ "./src/modules/rsvp.js":
/*!*****************************!*\
  !*** ./src/modules/rsvp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rsvp)\n/* harmony export */ });\nfunction rsvp() {\n  const rsvp = document.getElementById(\"rsvp\");\n  const formCtn = document.getElementById(\"rsvp-form-container\");\n  const para = document.getElementById(\"address\");\n\n  rsvp.addEventListener(\n    \"click\",\n    () => {\n      para.remove();\n\n      // Check if the form already exists to prevent duplication\n      if (document.getElementById(\"rsvp-form\")) return;\n\n      const form = document.createElement(\"form\");\n      form.id = \"rsvp-form\";\n\n      // Create Name field\n      const nameLabel = document.createElement(\"label\");\n      nameLabel.setAttribute(\"for\", \"name\");\n      nameLabel.textContent = \"first and last name\";\n      const nameInput = document.createElement(\"input\");\n      nameInput.type = \"text\";\n      nameInput.id = \"name\";\n      nameInput.name = \"name\";\n      nameInput.required = true;\n\n      // Create Attending field (radio buttons)\n      const attendingLabel = document.createElement(\"label\");\n      attendingLabel.setAttribute(\"for\", \"attending\");\n      attendingLabel.textContent = \"bringing plus 1?\";\n      const yesLabel = document.createElement(\"label\");\n      yesLabel.setAttribute(\"for\", \"yes\");\n      yesLabel.textContent = \"yes\";\n      const yesRadio = document.createElement(\"input\");\n      yesRadio.type = \"radio\";\n      yesRadio.id = \"yes\";\n      yesRadio.name = \"attending\";\n      yesRadio.value = \"yes\";\n      yesRadio.required = true;\n      yesLabel.appendChild(yesRadio);\n\n      const noLabel = document.createElement(\"label\");\n      noLabel.setAttribute(\"for\", \"no\");\n      noLabel.textContent = \"no\";\n      const noRadio = document.createElement(\"input\");\n      noRadio.type = \"radio\";\n      noRadio.id = \"no\";\n      noRadio.name = \"attending\";\n      noRadio.value = \"no\";\n      noLabel.appendChild(noRadio);\n\n      // Create Dietary Preference field (dropdown)\n      const mealLabel = document.createElement(\"label\");\n      mealLabel.setAttribute(\"for\", \"diet\");\n      mealLabel.textContent = \"dietary preference\";\n      const mealSelect = document.createElement(\"select\");\n      mealSelect.id = \"diet\";\n      mealSelect.name = \"diet\";\n\n      const anyOption = document.createElement(\"option\");\n      anyOption.value = \"anything\";\n      anyOption.textContent = \"anything\";\n      const vegetarianOption = document.createElement(\"option\");\n      vegetarianOption.value = \"vegetarian\";\n      vegetarianOption.textContent = \"vegetarian\";\n      const veganOption = document.createElement(\"option\");\n      veganOption.value = \"vegan\";\n      veganOption.textContent = \"vegan\";\n\n      // Append options to select element\n      mealSelect.appendChild(anyOption);\n      mealSelect.appendChild(vegetarianOption);\n      mealSelect.appendChild(veganOption);\n\n      // Create Phone Number input\n      const phoneLabel = document.createElement(\"label\");\n      phoneLabel.setAttribute(\"for\", \"phone\");\n      phoneLabel.textContent = \"phone number\";\n      const phoneInput = document.createElement(\"input\");\n      phoneInput.type = \"text\";\n      phoneInput.id = \"phone\";\n      phoneInput.name = \"phone\";\n\n      // Create Email field\n      const emailLabel = document.createElement(\"label\");\n      emailLabel.setAttribute(\"for\", \"email\");\n      emailLabel.textContent = \"email address\";\n      const emailInput = document.createElement(\"input\");\n      emailInput.type = \"email\";\n      emailInput.id = \"email\";\n      emailInput.name = \"email\";\n      emailInput.required = true;\n\n      // Create Submit button\n      const submitButton = document.createElement(\"button\");\n      submitButton.type = \"submit\";\n      submitButton.textContent = \"submit\";\n\n      // Append all elements to the form\n      form.appendChild(nameLabel);\n      form.appendChild(nameInput);\n      form.appendChild(attendingLabel);\n      form.appendChild(yesLabel);\n      form.appendChild(noLabel);\n      form.appendChild(mealLabel);\n      form.appendChild(mealSelect);\n      form.appendChild(phoneLabel);\n      form.appendChild(phoneInput);\n      form.appendChild(emailLabel);\n      form.appendChild(emailInput);\n      form.appendChild(submitButton);\n\n      // Append the form to the body or a specific container\n      formCtn.appendChild(form);\n\n      // Scroll to the form\n      form.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n\n      // Handle form submission\n      form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n\n        // Collect form data\n        const formData = new FormData(form);\n        // Validate email address\n        const email = formData.get(\"email\");\n\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailRegex.test(email)) {\n          alert(\"Please enter a valid email address.\");\n          return;\n        }\n\n        // Collect form data\n        const data = {\n          name: formData.get(\"name\"),\n          attending: formData.get(\"attending\"),\n          diet: formData.get(\"diet\"),\n          phone: formData.get(\"phone\"),\n          email,\n        };\n\n        console.log(data); // Log data for testing (you can send this to Google Sheets or Twilio)\n\n        // Send form data to your server (Google Sheets, SMS, etc.)\n        const serverUrl = \"https://nameless-sea-30482-cb8f6e5a10a5.herokuapp.com/submit-rsvp\";\n        fetch(serverUrl, {\n          method: \"POST\",\n          headers: {\n            \"Content-Type\": \"application/json\",\n          },\n          body: JSON.stringify(data),\n        })\n          .then((response) => {\n            if (!response.ok) {\n              throw new Error(`HTTP error! Status: ${response.status}`);\n            }\n            return response.json();\n          })\n          .then((data) => {\n            if (data.success) {\n              form.remove();\n              const submitted = document.createElement(\"p\");\n              submitted.textContent = \"success! see you soon!\";\n              formCtn.appendChild(submitted);\n            }\n          })\n          .catch((error) => {\n            console.error(error);\n            alert(\n              \"There was an error submitting your rsvp. Call me if this happens!\"\n            );\n          });\n      });\n    },\n    { once: true }\n  );\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/rsvp.js?");

/***/ }),

/***/ "./src/modules/sound.js":
/*!******************************!*\
  !*** ./src/modules/sound.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sound)\n/* harmony export */ });\nfunction sound() {\n  const unmute = document.getElementById(\"unmute\");\n  const mute = document.getElementById(\"mute\");\n  const video = document.querySelector(\"video\");\n\n  const volumeControl = document.getElementById(\"volume-control\");\n\n  unmute.addEventListener(\"click\", (e) => {\n    if (e.target === e.currentTarget) {\n      mute.classList.toggle(\"visible\");\n      unmute.classList.remove(\"visible\");\n      video.muted = false;\n    }\n  });\n\n  mute.addEventListener(\"click\", (e) => {\n    if (e.target === e.currentTarget) {\n      unmute.classList.toggle(\"visible\");\n      mute.classList.remove(\"visible\");\n      volumeControl.classList.toggle(\"visible\");\n      video.muted = true;\n    }\n  });\n\n  video.addEventListener('click', () => {\n    if (video.muted === false) {\n      unmute.classList.toggle(\"visible\");\n      mute.classList.remove(\"visible\");\n      volumeControl.classList.remove(\"visible\");\n      video.muted = true\n    } else if (video.muted === true) {\n      mute.classList.toggle(\"visible\");\n      unmute.classList.remove(\"visible\");\n      volumeControl.classList.toggle(\"visible\");\n      video.muted = false\n    }\n  })\n\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/sound.js?");

/***/ }),

/***/ "./src/modules/vidLoadTest.js":
/*!************************************!*\
  !*** ./src/modules/vidLoadTest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ vidLoadTest)\n/* harmony export */ });\nfunction vidLoadTest() {\n  const videos = document.querySelectorAll(\"video\");\n  let loadedVideos = 0;\n\n  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);\n\n  const video = document.querySelector(\"video\");\n  \n  document.addEventListener(\"DOMContentLoaded\", () => {\n    if (video.readyState < 3) {\n      // If video isn't fully ready, reload it\n      console.log(\"Video failed to load, attempting reload...\");\n      video.load();\n    }\n  });\n\n  videos.forEach((video, i) => {\n    if (video.readyState >= 4) {\n      // Video is already fully buffered\n      // console.log(`buffered:${i}`);\n      loadedVideos++;\n    } else {\n      // Wait for the video to be ready\n      video.addEventListener(\"canplaythrough\", () => {\n        // console.log(`can play through: ${i}`);\n        loadedVideos++;\n        // console.log(`loaded videos: ${loadedVideos}`);\n        video.play = true;\n      });\n    }\n  });\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/vidLoadTest.js?");

/***/ }),

/***/ "./src/modules/vidResizing.js":
/*!************************************!*\
  !*** ./src/modules/vidResizing.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ vidResizing)\n/* harmony export */ });\nfunction vidResizing() {\n  const video = document.querySelector(\"video\");\n  window.addEventListener(\"resize\", () => {\n    video.width = `${window.innerWidth}`;\n    video.height = `${window.innerHeight}`;\n    console.log(`Viewport Width: ${window.innerWidth}`);\n    console.log(`Viewport Height: ${window.innerHeight}`);\n  });\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/vidResizing.js?");

/***/ }),

/***/ "./src/modules/volumeControl.js":
/*!**************************************!*\
  !*** ./src/modules/volumeControl.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ volumeControl)\n/* harmony export */ });\nfunction volumeControl() {\n  const video = document.querySelector(\"video\");\n  const volumeControl = document.getElementById(\"volume-control\");\n  const unmute = document.getElementById(\"unmute\");\n  const mute = document.getElementById(\"mute\");\n\n  // Check if the device is a phone\n  const isPhone =\n    /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(\n      navigator.userAgent\n    );\n\n  if (isPhone) {\n    // Hide the volume control for phones\n    volumeControl.style.display = \"none\";\n    return; // Skip adding event listeners for volume control\n  }\n\n  // Add event listeners for volume control\n  volumeControl.addEventListener(\"input\", () => {\n    video.volume = volumeControl.value;\n  });\n\n  unmute.addEventListener(\"click\", (e) => {\n    if (e.target === e.currentTarget) {\n      volumeControl.classList.toggle(\"visible\");\n    }\n  });\n\n  mute.addEventListener(\"click\", (e) => {\n    if (e.target === e.currentTarget) {\n      volumeControl.classList.remove(\"visible\");\n    }\n  });\n}\n\n\n//# sourceURL=webpack://jason-hailey-wedding/./src/modules/volumeControl.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;