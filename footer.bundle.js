/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/icon-instagram.png":
/*!************************************!*\
  !*** ./src/img/icon-instagram.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/icon-instagram.75e0546a6b5abe4c0506.png";

/***/ }),

/***/ "./src/img/icon-twitter.png":
/*!**********************************!*\
  !*** ./src/img/icon-twitter.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/icon-twitter.b2c5315fd437610286f0.png";

/***/ }),

/***/ "./src/img/icon-youtube.png":
/*!**********************************!*\
  !*** ./src/img/icon-youtube.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/icon-youtube.376da63f9ae814237719.png";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_icon_twitter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icon-twitter.png */ "./src/img/icon-twitter.png");
/* harmony import */ var _img_icon_instagram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icon-instagram.png */ "./src/img/icon-instagram.png");
/* harmony import */ var _img_icon_youtube_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icon-youtube.png */ "./src/img/icon-youtube.png");




const footer = function() {
  //Create headerElement element, give class of 'header-container' and display nested within <body>
  const footerElement = document.createElement('footer');

  //Create 3 containers to hold address, socials and sitemap
  const addressContainer = document.createElement('div');
  addressContainer.id = "address-container";
  addressContainer.className = "footer-container"
  footerElement.appendChild(addressContainer);

  const socialContainer = document.createElement('div');
  socialContainer.id = "social-container";
  socialContainer.className = "footer-container";
  footerElement.appendChild(socialContainer);

  const sitemapContainer = document.createElement('div');
  sitemapContainer.id = "sitemap-container";
  sitemapContainer.className = "footer-container";
  footerElement.appendChild(sitemapContainer);

  //Build Address (contact) container
  const contactList = document.createElement('ul');
  contactList.innerHTML = "<h2>Contact Us!</h2>";
  addressContainer.appendChild(contactList);

  const contactPhone = document.createElement('li');
  contactPhone.innerHTML = "<h5>Phone:</h5><a href='tel:610-678-6300'>610.678.6300</a>";
  const contactEmail = document.createElement('li');
  contactEmail.innerHTML = "<h5>Email:</h5><a href='mailto:mama@originalmamaspizza.com?'>mama@originalmamaspizza.com</a>";
  const contactHours = document.createElement('li');
  contactHours.innerHTML = "<h5>Hours:</h5><div>Mon - Thur 10AM - 8:30PM<br />Fri 10AM - 10PM<br />Sunday 10AM - 8PM</div>"
  const contactAddress = document.createElement('li');
  contactAddress.innerHTML = "<h5>Address:</h5><address>2661 Shillington Rd<br>Sinking Spring, PA 19608</address>";
  
  contactList.append(contactPhone, contactEmail, contactHours, contactAddress);

  //Build Social container
  const socialList = document.createElement('ul');
  socialList.innerHTML = "<h2>Socials</h2>";
  socialContainer.appendChild(socialList);

  const socialTwitter = document.createElement('li');
  const twitterImage = document.createElement('img');
  twitterImage.src = _img_icon_twitter_png__WEBPACK_IMPORTED_MODULE_0__;
  twitterImage.className = "social-icon";
  twitterImage.id = "twitter-icon";
  socialTwitter.appendChild(twitterImage);
  socialTwitter.innerHTML += "&nbsp&nbspTwitter";

  const socialInsta = document.createElement('li');
  const instaImage = document.createElement('img');
  instaImage.src = _img_icon_instagram_png__WEBPACK_IMPORTED_MODULE_1__;
  instaImage.className = "social-icon";
  instaImage.id = "insta-icon";
  socialInsta.appendChild(instaImage);
  socialInsta.innerHTML += "&nbsp&nbspInstagram";

  const socialYT = document.createElement('li');
  const ytImage = document.createElement('img');
  ytImage.src = _img_icon_youtube_png__WEBPACK_IMPORTED_MODULE_2__;
  ytImage.className = "social-icon";
  ytImage.id = "youtube-icon";
  socialYT.appendChild(ytImage);
  socialYT.innerHTML += "&nbsp&nbspYoutube";
  socialList.append(socialTwitter, socialInsta, socialYT);

  //Build Sitemap
  const sitemapTitle = document.createElement('div');
  sitemapTitle.class = "sitemap-title";
  sitemapTitle.innerHTML = "<h2>Sitemap</h2>";
  sitemapContainer.appendChild(sitemapTitle);
  const sitemapList = document.createElement('ul');
  sitemapContainer.appendChild(sitemapList);

  const homeMap = document.createElement('li');
  homeMap.innerText = "Home";
  const ooMap = document.createElement('li');
  ooMap.innerText = "Order Online";
  const menuMap = document.createElement('li');
  menuMap.innerText = "Menu";
  const specialMap = document.createElement('li');
  specialMap.innerText = "Specials";
  const gcMap = document.createElement('li');
  gcMap.innerText = "Gift Cards";
  const locationMap = document.createElement('li');
  locationMap.innerText = "Locations";
  const careerMap = document.createElement('li');
  careerMap.innerText = "Careers";

  sitemapList.append(homeMap, ooMap, menuMap, specialMap, gcMap, locationMap, careerMap);

  return footerElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0Q7QUFDQTtBQUNBOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrREFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3BhZ2VzL2Zvb3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaWNvblR3aXR0ZXIgZnJvbSBcIi4uL2ltZy9pY29uLXR3aXR0ZXIucG5nXCI7XG5pbXBvcnQgaWNvbkluc3RhIGZyb20gXCIuLi9pbWcvaWNvbi1pbnN0YWdyYW0ucG5nXCI7XG5pbXBvcnQgaWNvbllvdXR1YmUgZnJvbSBcIi4uL2ltZy9pY29uLXlvdXR1YmUucG5nXCI7XG5cbmNvbnN0IGZvb3RlciA9IGZ1bmN0aW9uKCkge1xuICAvL0NyZWF0ZSBoZWFkZXJFbGVtZW50IGVsZW1lbnQsIGdpdmUgY2xhc3Mgb2YgJ2hlYWRlci1jb250YWluZXInIGFuZCBkaXNwbGF5IG5lc3RlZCB3aXRoaW4gPGJvZHk+XG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAvL0NyZWF0ZSAzIGNvbnRhaW5lcnMgdG8gaG9sZCBhZGRyZXNzLCBzb2NpYWxzIGFuZCBzaXRlbWFwXG4gIGNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkcmVzc0NvbnRhaW5lci5pZCA9IFwiYWRkcmVzcy1jb250YWluZXJcIjtcbiAgYWRkcmVzc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvb3Rlci1jb250YWluZXJcIlxuICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGFkZHJlc3NDb250YWluZXIpO1xuXG4gIGNvbnN0IHNvY2lhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzb2NpYWxDb250YWluZXIuaWQgPSBcInNvY2lhbC1jb250YWluZXJcIjtcbiAgc29jaWFsQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyLWNvbnRhaW5lclwiO1xuICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvY2lhbENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2l0ZW1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaXRlbWFwQ29udGFpbmVyLmlkID0gXCJzaXRlbWFwLWNvbnRhaW5lclwiO1xuICBzaXRlbWFwQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyLWNvbnRhaW5lclwiO1xuICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKHNpdGVtYXBDb250YWluZXIpO1xuXG4gIC8vQnVpbGQgQWRkcmVzcyAoY29udGFjdCkgY29udGFpbmVyXG4gIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29udGFjdExpc3QuaW5uZXJIVE1MID0gXCI8aDI+Q29udGFjdCBVcyE8L2gyPlwiO1xuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KTtcblxuICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb250YWN0UGhvbmUuaW5uZXJIVE1MID0gXCI8aDU+UGhvbmU6PC9oNT48YSBocmVmPSd0ZWw6NjEwLTY3OC02MzAwJz42MTAuNjc4LjYzMDA8L2E+XCI7XG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RFbWFpbC5pbm5lckhUTUwgPSBcIjxoNT5FbWFpbDo8L2g1PjxhIGhyZWY9J21haWx0bzptYW1hQG9yaWdpbmFsbWFtYXNwaXp6YS5jb20/Jz5tYW1hQG9yaWdpbmFsbWFtYXNwaXp6YS5jb208L2E+XCI7XG4gIGNvbnN0IGNvbnRhY3RIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RIb3Vycy5pbm5lckhUTUwgPSBcIjxoNT5Ib3Vyczo8L2g1PjxkaXY+TW9uIC0gVGh1ciAxMEFNIC0gODozMFBNPGJyIC8+RnJpIDEwQU0gLSAxMFBNPGJyIC8+U3VuZGF5IDEwQU0gLSA4UE08L2Rpdj5cIlxuICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RBZGRyZXNzLmlubmVySFRNTCA9IFwiPGg1PkFkZHJlc3M6PC9oNT48YWRkcmVzcz4yNjYxIFNoaWxsaW5ndG9uIFJkPGJyPlNpbmtpbmcgU3ByaW5nLCBQQSAxOTYwODwvYWRkcmVzcz5cIjtcbiAgXG4gIGNvbnRhY3RMaXN0LmFwcGVuZChjb250YWN0UGhvbmUsIGNvbnRhY3RFbWFpbCwgY29udGFjdEhvdXJzLCBjb250YWN0QWRkcmVzcyk7XG5cbiAgLy9CdWlsZCBTb2NpYWwgY29udGFpbmVyXG4gIGNvbnN0IHNvY2lhbExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzb2NpYWxMaXN0LmlubmVySFRNTCA9IFwiPGgyPlNvY2lhbHM8L2gyPlwiO1xuICBzb2NpYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlzdCk7XG5cbiAgY29uc3Qgc29jaWFsVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHR3aXR0ZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB0d2l0dGVySW1hZ2Uuc3JjID0gaWNvblR3aXR0ZXI7XG4gIHR3aXR0ZXJJbWFnZS5jbGFzc05hbWUgPSBcInNvY2lhbC1pY29uXCI7XG4gIHR3aXR0ZXJJbWFnZS5pZCA9IFwidHdpdHRlci1pY29uXCI7XG4gIHNvY2lhbFR3aXR0ZXIuYXBwZW5kQ2hpbGQodHdpdHRlckltYWdlKTtcbiAgc29jaWFsVHdpdHRlci5pbm5lckhUTUwgKz0gXCImbmJzcCZuYnNwVHdpdHRlclwiO1xuXG4gIGNvbnN0IHNvY2lhbEluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgaW5zdGFJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbnN0YUltYWdlLnNyYyA9IGljb25JbnN0YTtcbiAgaW5zdGFJbWFnZS5jbGFzc05hbWUgPSBcInNvY2lhbC1pY29uXCI7XG4gIGluc3RhSW1hZ2UuaWQgPSBcImluc3RhLWljb25cIjtcbiAgc29jaWFsSW5zdGEuYXBwZW5kQ2hpbGQoaW5zdGFJbWFnZSk7XG4gIHNvY2lhbEluc3RhLmlubmVySFRNTCArPSBcIiZuYnNwJm5ic3BJbnN0YWdyYW1cIjtcblxuICBjb25zdCBzb2NpYWxZVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHl0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgeXRJbWFnZS5zcmMgPSBpY29uWW91dHViZTtcbiAgeXRJbWFnZS5jbGFzc05hbWUgPSBcInNvY2lhbC1pY29uXCI7XG4gIHl0SW1hZ2UuaWQgPSBcInlvdXR1YmUtaWNvblwiO1xuICBzb2NpYWxZVC5hcHBlbmRDaGlsZCh5dEltYWdlKTtcbiAgc29jaWFsWVQuaW5uZXJIVE1MICs9IFwiJm5ic3AmbmJzcFlvdXR1YmVcIjtcbiAgc29jaWFsTGlzdC5hcHBlbmQoc29jaWFsVHdpdHRlciwgc29jaWFsSW5zdGEsIHNvY2lhbFlUKTtcblxuICAvL0J1aWxkIFNpdGVtYXBcbiAgY29uc3Qgc2l0ZW1hcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpdGVtYXBUaXRsZS5jbGFzcyA9IFwic2l0ZW1hcC10aXRsZVwiO1xuICBzaXRlbWFwVGl0bGUuaW5uZXJIVE1MID0gXCI8aDI+U2l0ZW1hcDwvaDI+XCI7XG4gIHNpdGVtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l0ZW1hcFRpdGxlKTtcbiAgY29uc3Qgc2l0ZW1hcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzaXRlbWFwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpdGVtYXBMaXN0KTtcblxuICBjb25zdCBob21lTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG9tZU1hcC5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgY29uc3Qgb29NYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBvb01hcC5pbm5lclRleHQgPSBcIk9yZGVyIE9ubGluZVwiO1xuICBjb25zdCBtZW51TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbWVudU1hcC5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgY29uc3Qgc3BlY2lhbE1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHNwZWNpYWxNYXAuaW5uZXJUZXh0ID0gXCJTcGVjaWFsc1wiO1xuICBjb25zdCBnY01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGdjTWFwLmlubmVyVGV4dCA9IFwiR2lmdCBDYXJkc1wiO1xuICBjb25zdCBsb2NhdGlvbk1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxvY2F0aW9uTWFwLmlubmVyVGV4dCA9IFwiTG9jYXRpb25zXCI7XG4gIGNvbnN0IGNhcmVlck1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNhcmVlck1hcC5pbm5lclRleHQgPSBcIkNhcmVlcnNcIjtcblxuICBzaXRlbWFwTGlzdC5hcHBlbmQoaG9tZU1hcCwgb29NYXAsIG1lbnVNYXAsIHNwZWNpYWxNYXAsIGdjTWFwLCBsb2NhdGlvbk1hcCwgY2FyZWVyTWFwKTtcblxuICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==