/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/countdown.js":
/*!**********************************!*\
  !*** ./src/modules/countdown.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countdown)
/* harmony export */ });
function countdown() {
  const countdownCtn = document.getElementById("counter");
  const countDownDate = new Date("May 26, 2025 17:00:00").getTime();

  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("counter-number");
    countdownCtn.appendChild(div);
  }

  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("counter-label");
    countdownCtn.appendChild(div);
  }

  const countDownUI = document.querySelectorAll(".counter-number");
  const counterLabel = document.querySelectorAll(".counter-label");

  counterLabel[0].innerHTML = "months";
  counterLabel[1].innerHTML = "days";
  counterLabel[2].innerHTML = "hours";
  counterLabel[3].innerHTML = "minutes";
  counterLabel[4].innerHTML = "seconds";

  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance > 0) {
      // Calculate months using date manipulation
      const nowDate = new Date();
      const futureDate = new Date(countDownDate);

      const totalMonths =
        futureDate.getFullYear() * 12 +
        futureDate.getMonth() -
        (nowDate.getFullYear() * 12 + nowDate.getMonth());

      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const formatTwoDigits = (num) => (num < 10 ? "0" + num : num);

      // Update countdown UI
      countDownUI[0].innerHTML = formatTwoDigits(totalMonths);
      countDownUI[1].innerHTML = formatTwoDigits(days);
      countDownUI[2].innerHTML = formatTwoDigits(hours);
      countDownUI[3].innerHTML = formatTwoDigits(minutes);
      countDownUI[4].innerHTML = formatTwoDigits(seconds);
    } else {
      // Countdown finished
      clearInterval(x);

      // Reset counters and display a message
      for (let i = 0; i < countDownUI.length; i++) {
        countDownUI[i].innerHTML = "00";
      }

      const messageElement = document.getElementById("countdown-message");
      if (messageElement) {
        messageElement.innerHTML = "Today's the day!";
      }
    }
  }, 1000);
}


/***/ }),

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dropdown)
/* harmony export */ });
function dropdown() {
  const dropdownContainer = document.getElementById("dropdown-container");
  const menuButton = document.getElementById("menu-button");
  const menuCloseButton = document.getElementById("menu-close-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const menulinks = document.querySelectorAll("li a");

  menuButton.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      dropdownMenu.classList.add("visible");
    }
  });

  window.addEventListener("click", (e) => {
    const clickedInsideDropdown = dropdownContainer.contains(e.target);
    const clickedMenuCloseButton = e.target === menuCloseButton;
    const clickedMenuLink = Array.from(menulinks).some(link => link === e.target);

    if (!clickedInsideDropdown || clickedMenuCloseButton || clickedMenuLink) {
      dropdownMenu.classList.remove("visible");
    }
  });
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault()
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}


/***/ }),

/***/ "./src/modules/loadVideo.js":
/*!**********************************!*\
  !*** ./src/modules/loadVideo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadVideo)
/* harmony export */ });
/* harmony import */ var _src_videos_bg_video_9_16_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/videos/bg-video-9-16.mp4 */ "./src/videos/bg-video-9-16.mp4");
/* harmony import */ var _src_videos_bg_video_16_9_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/videos/bg-video-16-9.mp4 */ "./src/videos/bg-video-16-9.mp4");



function loadVideo() {
  async function loadVideo() {
    const video = document.getElementById("background-video");
    const container = document.getElementById("video-container");

    await new Promise((resolve) => {
      window.onload = resolve;
    });

    const source = document.createElement("source");
    source.src =
      window.innerWidth <= 500
        ? _src_videos_bg_video_9_16_mp4__WEBPACK_IMPORTED_MODULE_0__
        : _src_videos_bg_video_16_9_mp4__WEBPACK_IMPORTED_MODULE_1__
    source.type = "video/mp4";

    video.appendChild(source);

    try {
      await video.load(); 
      video.style.display = "block";
      console.log(`${source.src}`)
    } catch (error) {
      console.error("Error loading video:", error);
      container.innerHTML = "<p>Video failed to load. Refresh</p>";
    }
  }

  loadVideo();
}


/***/ }),

/***/ "./src/modules/noDoubleTap.js":
/*!************************************!*\
  !*** ./src/modules/noDoubleTap.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const menu = document.getElementById("dropdown-menu");
  const toggleButton = document.getElementById("menu-toggle");
  let lastTouchEnd = 0;

  document.addEventListener(
    "touchend",
    (event) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault(); // Prevent double-tap zoom
      }
      lastTouchEnd = now;
    },
    false
  );
}


/***/ }),

/***/ "./src/modules/ourStory.js":
/*!*********************************!*\
  !*** ./src/modules/ourStory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ourStory)
/* harmony export */ });
function ourStory() {
  const ourStoryContainer = document.querySelector("#story");
  const languageSwitch = document.getElementById("languageSwitch");

  const translations = {
    english: [
      "They say to marry your best friend—but that wasn’t what we believed at first. We started like something out of a movie, living as the romantic leads in our own Hollywood rom-com. In a city that brings stories to life, we were creating one of our own, lost in a world that felt like it was just ours.",
      "",
      "As time went on, our love story evolved. It became more than just romance—it became friendship, partnership, and a deep sense of belonging. We took care of each other, lifted each other up, and found joy in the simple moments that turned days into years. Somewhere along the way, we realized we had become each other’s best friends.",
      "",
      "Life in LA, with its infamous traffic, has made our time together even more precious. Though we live just far enough apart to only see each other on weekends, our relationship has grown stronger. Distance truly makes the heart grow fonder, and every week for the last three years, we’ve counted down the days until we could be together again.",
      "",
      "On November 23rd, 2024, we said “yes” to forever! After three incredible years of love, laughter, and shared dreams, we’re thrilled to start this next chapter together. Come celebrate our journey of love and friendship as we embark on the adventure of a lifetime—we can’t wait to share this special moment with you!",
    ],

    korean: [
      `사람들은 늘 "가장 친한 친구와 결혼하라"고 말하죠. 하지만 우리는 처음부터 그렇게 믿지는 않았어요. 우리의 이야기는 영화처럼 시작되었고, 정말 영화 속 주인공이 된 기분이었어요. 할리우드라는 영화의 도시에서 우리만의 로맨틱 코미디를 만들어가며, 세상 속에서 오직 우리 둘만의 세상을 살았죠.`,
      "",
      "시간이 지나며 우리의 사랑 이야기도 변했어요. 단순한 로맨스를 넘어 우정, 동반자 관계, 그리고 깊은 소속감이 되었죠. 우리는 서로를 보살피고, 힘들 때마다 서로를 일으켜 세우며, 함께 보내는 소소한 순간들 속에서 행복을 찾았어요. 그러다 보니 어느새, 우리는 정말 서로의 가장 친한 친구가 되어 있더라고요.",
      "",
      "LA의 교통체증은 정말 사실이에요. 주말에만 서로 볼 수 있을 정도로 조금 떨어져 살지만, 이 거리감은 우리의 관계를 더 단단하게 만들어 주었어요. 매주, 지난 3년 동안 우리는 주말이 오기만을 손꼽아 기다렸답니다.",
      "",
      "그리고 2024년 11월 23일, 우리는 서로에게 영원히 함께하자고 약속했어요! 사랑, 웃음, 그리고 꿈을 나눈 지난 3년의 시간을 지나, 이제 새로운 여정을 함께 시작하려 해요. 우리의 사랑과 우정의 여정을 함께 축하하며, 앞으로 펼쳐질 아름다운 모험에 함께해 주세요. 여러분과 함께 이 특별한 순간을 나누고 싶어요!",
    ],
  };

  function createParagraph(textArray) {
    ourStoryContainer.innerHTML = "";

    textArray.forEach((text, index) => {
      if (text === "") {
        ourStoryContainer.appendChild(document.createElement("br"));
      } else {
        const p = document.createElement("p");
        const textNode = document.createTextNode(text);
        p.appendChild(textNode);
        ourStoryContainer.appendChild(p);
      }
    });
  }

  createParagraph(translations.english);

  languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
      createParagraph(translations.korean);
    } else {
      createParagraph(translations.english);
    }
  });
}


/***/ }),

/***/ "./src/modules/rsvp.js":
/*!*****************************!*\
  !*** ./src/modules/rsvp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rsvp)
/* harmony export */ });
function rsvp() {
  const rsvp = document.getElementById("rsvp");
  const formCtn = document.getElementById("rsvp-form-container");
  const para = document.getElementById("address");

  rsvp.addEventListener(
    "click",
    () => {
      para.remove();

      // Check if the form already exists to prevent duplication
      if (document.getElementById("rsvp-form")) return;

      const form = document.createElement("form");
      form.id = "rsvp-form";

      // Create Name field
      const nameLabel = document.createElement("label");
      nameLabel.setAttribute("for", "name");
      nameLabel.textContent = "first and last name";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = "name";
      nameInput.name = "name";
      nameInput.required = true;

      // Create Attending field (radio buttons)
      // const attendingLabel = document.createElement("label");
      // attendingLabel.setAttribute("for", "attending");
      // attendingLabel.textContent = "bringing plus 1?";
      // const yesLabel = document.createElement("label");
      // yesLabel.setAttribute("for", "yes");
      // yesLabel.textContent = "yes";
      // const yesRadio = document.createElement("input");
      // yesRadio.type = "radio";
      // yesRadio.id = "yes";
      // yesRadio.name = "attending";
      // yesRadio.value = "yes";
      // yesRadio.required = true;
      // yesLabel.appendChild(yesRadio);

      // const noLabel = document.createElement("label");
      // noLabel.setAttribute("for", "no");
      // noLabel.textContent = "no";
      // const noRadio = document.createElement("input");
      // noRadio.type = "radio";
      // noRadio.id = "no";
      // noRadio.name = "attending";
      // noRadio.value = "no";
      // noLabel.appendChild(noRadio);

      // Create Dietary Preference field (dropdown)
      const mealLabel = document.createElement("label");
      mealLabel.setAttribute("for", "diet");
      mealLabel.textContent = "dietary preference";
      const mealSelect = document.createElement("select");
      mealSelect.id = "diet";
      mealSelect.name = "diet";

      const anyOption = document.createElement("option");
      anyOption.value = "anything";
      anyOption.textContent = "anything";
      const vegetarianOption = document.createElement("option");
      vegetarianOption.value = "vegetarian";
      vegetarianOption.textContent = "vegetarian";
      const veganOption = document.createElement("option");
      veganOption.value = "vegan";
      veganOption.textContent = "vegan";

      // Append options to select element
      mealSelect.appendChild(anyOption);
      mealSelect.appendChild(vegetarianOption);
      mealSelect.appendChild(veganOption);

      // Create Phone Number input
      const phoneLabel = document.createElement("label");
      phoneLabel.setAttribute("for", "phone");
      phoneLabel.textContent = "phone number";
      const phoneInput = document.createElement("input");
      phoneInput.type = "text";
      phoneInput.id = "phone";
      phoneInput.name = "phone";

      // Create Email field
      const emailLabel = document.createElement("label");
      emailLabel.setAttribute("for", "email");
      emailLabel.textContent = "email address";
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.id = "email";
      emailInput.name = "email";
      emailInput.required = true;

      // Create Submit button
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "submit";

      // Append all elements to the form
      form.appendChild(nameLabel);
      form.appendChild(nameInput);
      // form.appendChild(attendingLabel);
      // form.appendChild(yesLabel);
      // form.appendChild(noLabel);
      form.appendChild(mealLabel);
      form.appendChild(mealSelect);
      form.appendChild(phoneLabel);
      form.appendChild(phoneInput);
      form.appendChild(emailLabel);
      form.appendChild(emailInput);
      form.appendChild(submitButton);

      // Append the form to the body or a specific container
      formCtn.appendChild(form);

      // Scroll to the form
      form.scrollIntoView({ behavior: "smooth", block: "start" });

      // Create loader container
      const loader = document.createElement("div");
      loader.classList.add("loader");

      // Create bouncing heart
      const bouncingHeart = document.createElement("div");
      bouncingHeart.classList.add("bouncing-heart");

      // Create loader text
      const loaderText = document.createElement("div");
      loaderText.classList.add("loader-text");
      loaderText.textContent = "Submitting form";

      // Append heart and text to loader
      loader.appendChild(bouncingHeart);
      loader.appendChild(loaderText);


      // Handle form submission
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        document.body.appendChild(loader);

        // Collect form data
        const formData = new FormData(form);
        // Validate email address
        const email = formData.get("email");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }

        // Collect form data
        const data = {
          name: formData.get("name"),
          attending: formData.get("attending"),
          diet: formData.get("diet"),
          phone: formData.get("phone"),
          email,
        };

        console.log(data); // Log data for testing (you can send this to Google Sheets or Twilio)

        // Send form data to your server (Google Sheets, SMS, etc.)
        const serverUrl =
          "https://nameless-sea-30482-cb8f6e5a10a5.herokuapp.com/submit-rsvp";
        fetch(serverUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            if (data.success) {
              form.remove();
              document.getElementById("rsvp").remove();
              const submitted = document.createElement("h2");
              submitted.textContent = "success! see you soon!";
              formCtn.appendChild(submitted);
            }
          })
          .catch((error) => {
            console.error(error);
            alert(
              "There was an error submitting your rsvp. Call me if this happens! 404-232-9562"
            );
          })
          .finally(() => {
            // Remove the loader
            if (document.body.contains(loader)) {
              document.body.removeChild(loader);
            }
          });
      });
    },
    { once: true }
  );
}


/***/ }),

/***/ "./src/modules/sound.js":
/*!******************************!*\
  !*** ./src/modules/sound.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sound)
/* harmony export */ });
function sound() {
  const unmute = document.getElementById("unmute");
  const mute = document.getElementById("mute");
  const video = document.querySelector("video");

  const volumeControl = document.getElementById("volume-control");

  unmute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      mute.classList.toggle("visible");
      unmute.classList.remove("visible");
      video.muted = false;
    }
  });

  mute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      unmute.classList.toggle("visible");
      mute.classList.remove("visible");
      volumeControl.classList.toggle("visible");
      video.muted = true;
    }
  });

  video.addEventListener('click', () => {
    if (video.muted === false) {
      unmute.classList.toggle("visible");
      mute.classList.remove("visible");
      volumeControl.classList.remove("visible");
      video.muted = true
    } else if (video.muted === true) {
      mute.classList.toggle("visible");
      unmute.classList.remove("visible");
      volumeControl.classList.toggle("visible");
      video.muted = false
    }
  })

}


/***/ }),

/***/ "./src/modules/volumeControl.js":
/*!**************************************!*\
  !*** ./src/modules/volumeControl.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ volumeControl)
/* harmony export */ });
function volumeControl() {
  const video = document.querySelector("video");
  const volumeControl = document.getElementById("volume-control");
  const unmute = document.getElementById("unmute");
  const mute = document.getElementById("mute");

  // Check if the device is a phone
  const isPhone =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );

  if (isPhone) {
    // Hide the volume control for phones
    volumeControl.style.display = "none";
    return; // Skip adding event listeners for volume control
  }

  // Add event listeners for volume control
  volumeControl.addEventListener("input", () => {
    video.volume = volumeControl.value;
  });

  unmute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      volumeControl.classList.toggle("visible");
    }
  });

  mute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      volumeControl.classList.remove("visible");
    }
  });
}


/***/ }),

/***/ "./src/videos/bg-video-16-9.mp4":
/*!**************************************!*\
  !*** ./src/videos/bg-video-16-9.mp4 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e17dac46bfb694bbdc4f.mp4";

/***/ }),

/***/ "./src/videos/bg-video-9-16.mp4":
/*!**************************************!*\
  !*** ./src/videos/bg-video-9-16.mp4 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8af2f0c0369dbd9f074.mp4";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loadVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadVideo */ "./src/modules/loadVideo.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdown */ "./src/modules/dropdown.js");
/* harmony import */ var _modules_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countdown */ "./src/modules/countdown.js");
/* harmony import */ var _modules_noDoubleTap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/noDoubleTap */ "./src/modules/noDoubleTap.js");
/* harmony import */ var _modules_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sound */ "./src/modules/sound.js");
/* harmony import */ var _modules_volumeControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/volumeControl */ "./src/modules/volumeControl.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_rsvp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/rsvp */ "./src/modules/rsvp.js");
/* harmony import */ var _modules_ourStory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/ourStory */ "./src/modules/ourStory.js");











(0,_modules_noDoubleTap__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_home__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_sound__WEBPACK_IMPORTED_MODULE_5__["default"])()
;(0,_modules_volumeControl__WEBPACK_IMPORTED_MODULE_6__["default"])()
;(0,_modules_countdown__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_ourStory__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_modules_rsvp__WEBPACK_IMPORTED_MODULE_8__["default"])()
;(0,_modules_loadVideo__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.b800f6edb264e3eb189c.js.map