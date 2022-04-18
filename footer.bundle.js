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
  contactPhone.innerHTML = "<h3>Phone: <a href='tel:610-678-6300'>610.678.6300</a></h3>";
  const contactEmail = document.createElement('li');
  contactEmail.innerHTML = "<h3>Email: <a href='mailto:mama@originalmamaspizza.com?'>mama@originalmamaspizza.com</a></h3>";
  const contactAddress = document.createElement('li');
  contactAddress.innerHTML = "<h3><address>2661 Shillington Rd<br>Sinking Spring, PA 19608</address></h3>";
  
  contactList.append(contactPhone, contactEmail, contactAddress);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0Q7QUFDQTtBQUNBOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixvREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvcGFnZXMvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpY29uVHdpdHRlciBmcm9tIFwiLi4vaW1nL2ljb24tdHdpdHRlci5wbmdcIjtcbmltcG9ydCBpY29uSW5zdGEgZnJvbSBcIi4uL2ltZy9pY29uLWluc3RhZ3JhbS5wbmdcIjtcbmltcG9ydCBpY29uWW91dHViZSBmcm9tIFwiLi4vaW1nL2ljb24teW91dHViZS5wbmdcIjtcblxuY29uc3QgZm9vdGVyID0gZnVuY3Rpb24oKSB7XG4gIC8vQ3JlYXRlIGhlYWRlckVsZW1lbnQgZWxlbWVudCwgZ2l2ZSBjbGFzcyBvZiAnaGVhZGVyLWNvbnRhaW5lcicgYW5kIGRpc3BsYXkgbmVzdGVkIHdpdGhpbiA8Ym9keT5cbiAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIC8vQ3JlYXRlIDMgY29udGFpbmVycyB0byBob2xkIGFkZHJlc3MsIHNvY2lhbHMgYW5kIHNpdGVtYXBcbiAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRyZXNzQ29udGFpbmVyLmlkID0gXCJhZGRyZXNzLWNvbnRhaW5lclwiO1xuICBhZGRyZXNzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyLWNvbnRhaW5lclwiXG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcik7XG5cbiAgY29uc3Qgc29jaWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNvY2lhbENvbnRhaW5lci5pZCA9IFwic29jaWFsLWNvbnRhaW5lclwiO1xuICBzb2NpYWxDb250YWluZXIuY2xhc3NOYW1lID0gXCJmb290ZXItY29udGFpbmVyXCI7XG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoc29jaWFsQ29udGFpbmVyKTtcblxuICBjb25zdCBzaXRlbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpdGVtYXBDb250YWluZXIuaWQgPSBcInNpdGVtYXAtY29udGFpbmVyXCI7XG4gIHNpdGVtYXBDb250YWluZXIuY2xhc3NOYW1lID0gXCJmb290ZXItY29udGFpbmVyXCI7XG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoc2l0ZW1hcENvbnRhaW5lcik7XG5cbiAgLy9CdWlsZCBBZGRyZXNzIChjb250YWN0KSBjb250YWluZXJcbiAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb250YWN0TGlzdC5pbm5lckhUTUwgPSBcIjxoMj5Db250YWN0IFVzITwvaDI+XCI7XG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuXG4gIGNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RQaG9uZS5pbm5lckhUTUwgPSBcIjxoMz5QaG9uZTogPGEgaHJlZj0ndGVsOjYxMC02NzgtNjMwMCc+NjEwLjY3OC42MzAwPC9hPjwvaDM+XCI7XG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RFbWFpbC5pbm5lckhUTUwgPSBcIjxoMz5FbWFpbDogPGEgaHJlZj0nbWFpbHRvOm1hbWFAb3JpZ2luYWxtYW1hc3BpenphLmNvbT8nPm1hbWFAb3JpZ2luYWxtYW1hc3BpenphLmNvbTwvYT48L2gzPlwiO1xuICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RBZGRyZXNzLmlubmVySFRNTCA9IFwiPGgzPjxhZGRyZXNzPjI2NjEgU2hpbGxpbmd0b24gUmQ8YnI+U2lua2luZyBTcHJpbmcsIFBBIDE5NjA4PC9hZGRyZXNzPjwvaDM+XCI7XG4gIFxuICBjb250YWN0TGlzdC5hcHBlbmQoY29udGFjdFBob25lLCBjb250YWN0RW1haWwsIGNvbnRhY3RBZGRyZXNzKTtcblxuICAvL0J1aWxkIFNvY2lhbCBjb250YWluZXJcbiAgY29uc3Qgc29jaWFsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNvY2lhbExpc3QuaW5uZXJIVE1MID0gXCI8aDI+U29jaWFsczwvaDI+XCI7XG4gIHNvY2lhbENvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxMaXN0KTtcblxuICBjb25zdCBzb2NpYWxUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgdHdpdHRlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHR3aXR0ZXJJbWFnZS5zcmMgPSBpY29uVHdpdHRlcjtcbiAgdHdpdHRlckltYWdlLmNsYXNzTmFtZSA9IFwic29jaWFsLWljb25cIjtcbiAgdHdpdHRlckltYWdlLmlkID0gXCJ0d2l0dGVyLWljb25cIjtcbiAgc29jaWFsVHdpdHRlci5hcHBlbmRDaGlsZCh0d2l0dGVySW1hZ2UpO1xuICBzb2NpYWxUd2l0dGVyLmlubmVySFRNTCArPSBcIiZuYnNwJm5ic3BUd2l0dGVyXCI7XG5cbiAgY29uc3Qgc29jaWFsSW5zdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBpbnN0YUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGluc3RhSW1hZ2Uuc3JjID0gaWNvbkluc3RhO1xuICBpbnN0YUltYWdlLmNsYXNzTmFtZSA9IFwic29jaWFsLWljb25cIjtcbiAgaW5zdGFJbWFnZS5pZCA9IFwiaW5zdGEtaWNvblwiO1xuICBzb2NpYWxJbnN0YS5hcHBlbmRDaGlsZChpbnN0YUltYWdlKTtcbiAgc29jaWFsSW5zdGEuaW5uZXJIVE1MICs9IFwiJm5ic3AmbmJzcEluc3RhZ3JhbVwiO1xuXG4gIGNvbnN0IHNvY2lhbFlUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgeXRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB5dEltYWdlLnNyYyA9IGljb25Zb3V0dWJlO1xuICB5dEltYWdlLmNsYXNzTmFtZSA9IFwic29jaWFsLWljb25cIjtcbiAgeXRJbWFnZS5pZCA9IFwieW91dHViZS1pY29uXCI7XG4gIHNvY2lhbFlULmFwcGVuZENoaWxkKHl0SW1hZ2UpO1xuICBzb2NpYWxZVC5pbm5lckhUTUwgKz0gXCImbmJzcCZuYnNwWW91dHViZVwiO1xuICBzb2NpYWxMaXN0LmFwcGVuZChzb2NpYWxUd2l0dGVyLCBzb2NpYWxJbnN0YSwgc29jaWFsWVQpO1xuXG4gIC8vQnVpbGQgU2l0ZW1hcFxuICBjb25zdCBzaXRlbWFwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2l0ZW1hcFRpdGxlLmNsYXNzID0gXCJzaXRlbWFwLXRpdGxlXCI7XG4gIHNpdGVtYXBUaXRsZS5pbm5lckhUTUwgPSBcIjxoMj5TaXRlbWFwPC9oMj5cIjtcbiAgc2l0ZW1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaXRlbWFwVGl0bGUpO1xuICBjb25zdCBzaXRlbWFwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNpdGVtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l0ZW1hcExpc3QpO1xuXG4gIGNvbnN0IGhvbWVNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob21lTWFwLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICBjb25zdCBvb01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG9vTWFwLmlubmVyVGV4dCA9IFwiT3JkZXIgT25saW5lXCI7XG4gIGNvbnN0IG1lbnVNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51TWFwLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICBjb25zdCBzcGVjaWFsTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc3BlY2lhbE1hcC5pbm5lclRleHQgPSBcIlNwZWNpYWxzXCI7XG4gIGNvbnN0IGdjTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgZ2NNYXAuaW5uZXJUZXh0ID0gXCJHaWZ0IENhcmRzXCI7XG4gIGNvbnN0IGxvY2F0aW9uTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbG9jYXRpb25NYXAuaW5uZXJUZXh0ID0gXCJMb2NhdGlvbnNcIjtcbiAgY29uc3QgY2FyZWVyTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY2FyZWVyTWFwLmlubmVyVGV4dCA9IFwiQ2FyZWVyc1wiO1xuXG4gIHNpdGVtYXBMaXN0LmFwcGVuZChob21lTWFwLCBvb01hcCwgbWVudU1hcCwgc3BlY2lhbE1hcCwgZ2NNYXAsIGxvY2F0aW9uTWFwLCBjYXJlZXJNYXApO1xuXG4gIHJldHVybiBmb290ZXJFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9