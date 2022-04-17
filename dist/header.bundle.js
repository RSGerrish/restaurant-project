/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/logo-200.png":
/*!******************************!*\
  !*** ./src/img/logo-200.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo-200.d7c73e8db0d88561f1e2.png";

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
  !*** ./src/pages/header.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_logo_200_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo-200.png */ "./src/img/logo-200.png");
//import backgroundWoodImage from "../img/dkwood.jpg";


const header = function() {
  //Create headerElement element, give class of 'header-container' and display nested within <body>
  const headerElement = document.createElement('header');

  const headerContainer = document.createElement('div');
  headerContainer.className = "header-container";
  headerElement.appendChild(headerContainer);

  //Create headerLogo element, assign class and nest within <header>
  const headerLogo = document.createElement('div');
  headerLogo.className = "header-logo";
  headerContainer.appendChild(headerLogo);
  
  const logo = document.createElement('img');
  logo.src = _img_logo_200_png__WEBPACK_IMPORTED_MODULE_0__;
  logo.className = "main-logo";
  headerLogo.appendChild(logo);

  //Create navContainer element, assign class and nest within <header>
  const navContainer = document.createElement('nav');
  navContainer.className = "nav-container";
  headerContainer.appendChild(navContainer);

  const linkOO = document.createElement('div');
  linkOO.id = "link-online-order";
  linkOO.className = "btn-nav";
  linkOO.innerText = "Order Online";
  const linkMenu = document.createElement('div');
  linkMenu.id = "link-menu";
  linkMenu.className = "btn-nav";
  linkMenu.innerText = "Menu";
  const linkSpecials = document.createElement('div');
  linkSpecials.id = "link-specials";
  linkSpecials.className = "btn-nav";
  linkSpecials.innerText = "Specials";
  const linkGC = document.createElement('div');
  linkGC.id = "link-gc";
  linkGC.className = "btn-nav";
  linkGC.innerText = "Gift Cards";
  const linkLocs = document.createElement('div');
  linkLocs.id = "link-locations";
  linkLocs.className = "btn-nav";
  linkLocs.innerText = "Locations";
  const linkCareers = document.createElement('div');
  linkCareers.id = "link-careers";
  linkCareers.className = "btn-nav";
  linkCareers.innerText = "Careers";

  navContainer.append(linkOO, linkMenu, linkSpecials, linkGC, linkLocs, linkCareers);

  return headerElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzJDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOENBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3BhZ2VzL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvL2ltcG9ydCBiYWNrZ3JvdW5kV29vZEltYWdlIGZyb20gXCIuLi9pbWcvZGt3b29kLmpwZ1wiO1xuaW1wb3J0IG1haW5Mb2dvIGZyb20gXCIuLi9pbWcvbG9nby0yMDAucG5nXCI7XG5cbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAvL0NyZWF0ZSBoZWFkZXJFbGVtZW50IGVsZW1lbnQsIGdpdmUgY2xhc3Mgb2YgJ2hlYWRlci1jb250YWluZXInIGFuZCBkaXNwbGF5IG5lc3RlZCB3aXRoaW4gPGJvZHk+XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWNvbnRhaW5lclwiO1xuICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgLy9DcmVhdGUgaGVhZGVyTG9nbyBlbGVtZW50LCBhc3NpZ24gY2xhc3MgYW5kIG5lc3Qgd2l0aGluIDxoZWFkZXI+XG4gIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyTG9nby5jbGFzc05hbWUgPSBcImhlYWRlci1sb2dvXCI7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9nby5zcmMgPSBtYWluTG9nbztcbiAgbG9nby5jbGFzc05hbWUgPSBcIm1haW4tbG9nb1wiO1xuICBoZWFkZXJMb2dvLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIC8vQ3JlYXRlIG5hdkNvbnRhaW5lciBlbGVtZW50LCBhc3NpZ24gY2xhc3MgYW5kIG5lc3Qgd2l0aGluIDxoZWFkZXI+XG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXZDb250YWluZXIuY2xhc3NOYW1lID0gXCJuYXYtY29udGFpbmVyXCI7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG4gIGNvbnN0IGxpbmtPTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5rT08uaWQgPSBcImxpbmstb25saW5lLW9yZGVyXCI7XG4gIGxpbmtPTy5jbGFzc05hbWUgPSBcImJ0bi1uYXZcIjtcbiAgbGlua09PLmlubmVyVGV4dCA9IFwiT3JkZXIgT25saW5lXCI7XG4gIGNvbnN0IGxpbmtNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmtNZW51LmlkID0gXCJsaW5rLW1lbnVcIjtcbiAgbGlua01lbnUuY2xhc3NOYW1lID0gXCJidG4tbmF2XCI7XG4gIGxpbmtNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICBjb25zdCBsaW5rU3BlY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlua1NwZWNpYWxzLmlkID0gXCJsaW5rLXNwZWNpYWxzXCI7XG4gIGxpbmtTcGVjaWFscy5jbGFzc05hbWUgPSBcImJ0bi1uYXZcIjtcbiAgbGlua1NwZWNpYWxzLmlubmVyVGV4dCA9IFwiU3BlY2lhbHNcIjtcbiAgY29uc3QgbGlua0dDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmtHQy5pZCA9IFwibGluay1nY1wiO1xuICBsaW5rR0MuY2xhc3NOYW1lID0gXCJidG4tbmF2XCI7XG4gIGxpbmtHQy5pbm5lclRleHQgPSBcIkdpZnQgQ2FyZHNcIjtcbiAgY29uc3QgbGlua0xvY3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlua0xvY3MuaWQgPSBcImxpbmstbG9jYXRpb25zXCI7XG4gIGxpbmtMb2NzLmNsYXNzTmFtZSA9IFwiYnRuLW5hdlwiO1xuICBsaW5rTG9jcy5pbm5lclRleHQgPSBcIkxvY2F0aW9uc1wiO1xuICBjb25zdCBsaW5rQ2FyZWVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5rQ2FyZWVycy5pZCA9IFwibGluay1jYXJlZXJzXCI7XG4gIGxpbmtDYXJlZXJzLmNsYXNzTmFtZSA9IFwiYnRuLW5hdlwiO1xuICBsaW5rQ2FyZWVycy5pbm5lclRleHQgPSBcIkNhcmVlcnNcIjtcblxuICBuYXZDb250YWluZXIuYXBwZW5kKGxpbmtPTywgbGlua01lbnUsIGxpbmtTcGVjaWFscywgbGlua0dDLCBsaW5rTG9jcywgbGlua0NhcmVlcnMpO1xuXG4gIHJldHVybiBoZWFkZXJFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9