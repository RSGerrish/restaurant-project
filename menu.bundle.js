/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/Cheese-Neapolitan-Pizza-150x150.png":
/*!*****************************************************!*\
  !*** ./src/img/Cheese-Neapolitan-Pizza-150x150.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Cheese-Neapolitan-Pizza-150x150.23885064547f8c1c1c45.png";

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
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_Cheese_Neapolitan_Pizza_150x150_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/Cheese-Neapolitan-Pizza-150x150.png */ "./src/img/Cheese-Neapolitan-Pizza-150x150.png");


const menu = function () {
  const contentContainer = document.querySelector('.content-container');

  contentContainer.style.height = "auto";

 

  const menuContainer = document.createElement('div');
  menuContainer.className = "menu-container";
  contentContainer.appendChild(menuContainer);


  const sectionTitle1 = document.createElement('div');
  sectionTitle1.innerHTML = "<h1>Pizza</h1>"
  sectionTitle1.className = "menu-title";
  const sectionSubTitle1 = document.createElement('div');
  sectionSubTitle1.innerHTML = "<h2>Neopolitan Toppings</h2>";
  sectionSubTitle1.className = "menu-subtitle";
  const menuItem1 = document.createElement('div');
  menuItem1.innerHTML = "<h3>Meat</h3>";
  menuItem1.className = "menu-item";
  const menuDescription1 = document.createElement('div');
  menuDescription1.innerHTML = "<h5>Pepperoni, Ham, Meatballs, Anchovies, Sausage, Bacon</h5>";
  menuDescription1.className = "menu-description";
  const menuPrice1 = document.createElement('div');
  menuPrice1.innerHTML = "<h3>Small $2.00 | Medium $2.25 | Large $2.50</h3>";
  menuPrice1.className = "menu-price";
  const br1 = document.createElement('br');

  menuContainer.append(sectionTitle1, sectionSubTitle1, menuItem1, menuDescription1, menuPrice1, br1);


  const menuItem2 = document.createElement('div');
  menuItem2.innerHTML = "<h3>Veggies</h3>";
  menuItem2.className = "menu-item";
  const menuDescription2 = document.createElement('div');
  menuDescription2.innerHTML = "<h5>Mushroom, Red Onion, Sweet Peppers, Hot Banana Peppers, Pineapple, Extra Cheese, Garlic, Bruschetta Tomatoes, Green Bell Peppers, Spinach, Broccoli, Black Olives</h5>";
  menuDescription2.className = "menu-description";
  const menuPrice2 = document.createElement('div');
  menuPrice2.innerHTML = "<h3>Small $2.00 | Medium $2.25 | Large $2.50</h3>";
  menuPrice2.className = "menu-price";
  const br2 = document.createElement('br');

  menuContainer.append(menuItem2, menuDescription2, menuPrice2, br2);

 
  const menuItem3 = document.createElement('div');
  menuItem3.innerHTML = "<h3>Specialty Toppings</h3>";
  menuItem3.className = "menu-item";
  const menuDescription3 = document.createElement('div');
  menuDescription3.innerHTML = "<h5>Ground Beef, Steak, Chicken Steak, Grilled Chicken Brest, Breaded Eggplant</h5>";
  menuDescription3.className = "menu-description";
  const menuPrice3 = document.createElement('div');
  menuPrice3.innerHTML = "<h3>Small $3.00 | Medium $3.50 | Large $4.00</h3>";
  menuPrice3.className = "menu-price";
  const br3 = document.createElement('br');

  menuContainer.append(menuItem3, menuDescription3, menuPrice3, br3);

  
  const menuCardContainer1 = document.createElement('div');
  menuCardContainer1.className = "menu-card-container";
  const menuCard1 = document.createElement('div');
  menuCard1.className = "menu-card";

  const menuItem4 = document.createElement('div');
  menuItem4.innerHTML = "<h3>Cheese Pizza</h3>";
  menuItem4.className = "menu-item";
  const menuItemImg4 = document.createElement('img');
  menuItemImg4.src = _img_Cheese_Neapolitan_Pizza_150x150_png__WEBPACK_IMPORTED_MODULE_0__;
  menuItemImg4.className = "menu-card-image";
  const menuDescription4 = document.createElement('div');
  menuDescription4.innerHTML = "<h5>Thin round crust with Pizza Sauce and Mozzarella</h5>";
  menuDescription4.className = "menu-description";
  const menuPrice4 = document.createElement('div');
  menuPrice4.innerHTML = '<h3>Small (12") $9.00 | Medium (14") $10.50 | Large (16") $14.00</h3>';
  menuPrice4.className = "menu-price"; 
  const br4 = document.createElement('br');

  menuCard1.append(menuItem4, menuItemImg4, menuDescription4, menuPrice4);
  menuCardContainer1.append(menuCard1);
  menuContainer.append(menuCardContainer1, br4);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmd0U7O0FBRXhFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9wYWdlcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBwaXp6YUNoZWVzZUltZyBmcm9tIFwiLi4vaW1nL0NoZWVzZS1OZWFwb2xpdGFuLVBpenphLTE1MHgxNTAucG5nXCI7XG5cbmNvbnN0IG1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKTtcblxuICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuXG4gXG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuXG4gIGNvbnN0IHNlY3Rpb25UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvblRpdGxlMS5pbm5lckhUTUwgPSBcIjxoMT5QaXp6YTwvaDE+XCJcbiAgc2VjdGlvblRpdGxlMS5jbGFzc05hbWUgPSBcIm1lbnUtdGl0bGVcIjtcbiAgY29uc3Qgc2VjdGlvblN1YlRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uU3ViVGl0bGUxLmlubmVySFRNTCA9IFwiPGgyPk5lb3BvbGl0YW4gVG9wcGluZ3M8L2gyPlwiO1xuICBzZWN0aW9uU3ViVGl0bGUxLmNsYXNzTmFtZSA9IFwibWVudS1zdWJ0aXRsZVwiO1xuICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0xLmlubmVySFRNTCA9IFwiPGgzPk1lYXQ8L2gzPlwiO1xuICBtZW51SXRlbTEuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgY29uc3QgbWVudURlc2NyaXB0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGVzY3JpcHRpb24xLmlubmVySFRNTCA9IFwiPGg1PlBlcHBlcm9uaSwgSGFtLCBNZWF0YmFsbHMsIEFuY2hvdmllcywgU2F1c2FnZSwgQmFjb248L2g1PlwiO1xuICBtZW51RGVzY3JpcHRpb24xLmNsYXNzTmFtZSA9IFwibWVudS1kZXNjcmlwdGlvblwiO1xuICBjb25zdCBtZW51UHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVQcmljZTEuaW5uZXJIVE1MID0gXCI8aDM+U21hbGwgJDIuMDAgfCBNZWRpdW0gJDIuMjUgfCBMYXJnZSAkMi41MDwvaDM+XCI7XG4gIG1lbnVQcmljZTEuY2xhc3NOYW1lID0gXCJtZW51LXByaWNlXCI7XG4gIGNvbnN0IGJyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoc2VjdGlvblRpdGxlMSwgc2VjdGlvblN1YlRpdGxlMSwgbWVudUl0ZW0xLCBtZW51RGVzY3JpcHRpb24xLCBtZW51UHJpY2UxLCBicjEpO1xuXG5cbiAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMi5pbm5lckhUTUwgPSBcIjxoMz5WZWdnaWVzPC9oMz5cIjtcbiAgbWVudUl0ZW0yLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gIGNvbnN0IG1lbnVEZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURlc2NyaXB0aW9uMi5pbm5lckhUTUwgPSBcIjxoNT5NdXNocm9vbSwgUmVkIE9uaW9uLCBTd2VldCBQZXBwZXJzLCBIb3QgQmFuYW5hIFBlcHBlcnMsIFBpbmVhcHBsZSwgRXh0cmEgQ2hlZXNlLCBHYXJsaWMsIEJydXNjaGV0dGEgVG9tYXRvZXMsIEdyZWVuIEJlbGwgUGVwcGVycywgU3BpbmFjaCwgQnJvY2NvbGksIEJsYWNrIE9saXZlczwvaDU+XCI7XG4gIG1lbnVEZXNjcmlwdGlvbjIuY2xhc3NOYW1lID0gXCJtZW51LWRlc2NyaXB0aW9uXCI7XG4gIGNvbnN0IG1lbnVQcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudVByaWNlMi5pbm5lckhUTUwgPSBcIjxoMz5TbWFsbCAkMi4wMCB8IE1lZGl1bSAkMi4yNSB8IExhcmdlICQyLjUwPC9oMz5cIjtcbiAgbWVudVByaWNlMi5jbGFzc05hbWUgPSBcIm1lbnUtcHJpY2VcIjtcbiAgY29uc3QgYnIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbTIsIG1lbnVEZXNjcmlwdGlvbjIsIG1lbnVQcmljZTIsIGJyMik7XG5cbiBcbiAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMy5pbm5lckhUTUwgPSBcIjxoMz5TcGVjaWFsdHkgVG9wcGluZ3M8L2gzPlwiO1xuICBtZW51SXRlbTMuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgY29uc3QgbWVudURlc2NyaXB0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGVzY3JpcHRpb24zLmlubmVySFRNTCA9IFwiPGg1Pkdyb3VuZCBCZWVmLCBTdGVhaywgQ2hpY2tlbiBTdGVhaywgR3JpbGxlZCBDaGlja2VuIEJyZXN0LCBCcmVhZGVkIEVnZ3BsYW50PC9oNT5cIjtcbiAgbWVudURlc2NyaXB0aW9uMy5jbGFzc05hbWUgPSBcIm1lbnUtZGVzY3JpcHRpb25cIjtcbiAgY29uc3QgbWVudVByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51UHJpY2UzLmlubmVySFRNTCA9IFwiPGgzPlNtYWxsICQzLjAwIHwgTWVkaXVtICQzLjUwIHwgTGFyZ2UgJDQuMDA8L2gzPlwiO1xuICBtZW51UHJpY2UzLmNsYXNzTmFtZSA9IFwibWVudS1wcmljZVwiO1xuICBjb25zdCBicjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtMywgbWVudURlc2NyaXB0aW9uMywgbWVudVByaWNlMywgYnIzKTtcblxuICBcbiAgY29uc3QgbWVudUNhcmRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDYXJkQ29udGFpbmVyMS5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZC1jb250YWluZXJcIjtcbiAgY29uc3QgbWVudUNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDYXJkMS5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZFwiO1xuXG4gIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbTQuaW5uZXJIVE1MID0gXCI8aDM+Q2hlZXNlIFBpenphPC9oMz5cIjtcbiAgbWVudUl0ZW00LmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gIGNvbnN0IG1lbnVJdGVtSW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SXRlbUltZzQuc3JjID0gcGl6emFDaGVlc2VJbWc7XG4gIG1lbnVJdGVtSW1nNC5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZC1pbWFnZVwiO1xuICBjb25zdCBtZW51RGVzY3JpcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEZXNjcmlwdGlvbjQuaW5uZXJIVE1MID0gXCI8aDU+VGhpbiByb3VuZCBjcnVzdCB3aXRoIFBpenphIFNhdWNlIGFuZCBNb3p6YXJlbGxhPC9oNT5cIjtcbiAgbWVudURlc2NyaXB0aW9uNC5jbGFzc05hbWUgPSBcIm1lbnUtZGVzY3JpcHRpb25cIjtcbiAgY29uc3QgbWVudVByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51UHJpY2U0LmlubmVySFRNTCA9ICc8aDM+U21hbGwgKDEyXCIpICQ5LjAwIHwgTWVkaXVtICgxNFwiKSAkMTAuNTAgfCBMYXJnZSAoMTZcIikgJDE0LjAwPC9oMz4nO1xuICBtZW51UHJpY2U0LmNsYXNzTmFtZSA9IFwibWVudS1wcmljZVwiOyBcbiAgY29uc3QgYnI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICBtZW51Q2FyZDEuYXBwZW5kKG1lbnVJdGVtNCwgbWVudUl0ZW1JbWc0LCBtZW51RGVzY3JpcHRpb240LCBtZW51UHJpY2U0KTtcbiAgbWVudUNhcmRDb250YWluZXIxLmFwcGVuZChtZW51Q2FyZDEpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51Q2FyZENvbnRhaW5lcjEsIGJyNCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9