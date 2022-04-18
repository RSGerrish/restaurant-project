/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/Boardwalk-Pizza-150x150.png":
/*!*********************************************!*\
  !*** ./src/img/Boardwalk-Pizza-150x150.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Boardwalk-Pizza-150x150.826567e9426f0ba47c88.png";

/***/ }),

/***/ "./src/img/Cheese-Neapolitan-Pizza-150x150.png":
/*!*****************************************************!*\
  !*** ./src/img/Cheese-Neapolitan-Pizza-150x150.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Cheese-Neapolitan-Pizza-150x150.23885064547f8c1c1c45.png";

/***/ }),

/***/ "./src/img/white-pizza-150x150.jpg":
/*!*****************************************!*\
  !*** ./src/img/white-pizza-150x150.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/white-pizza-150x150.a0370202d1d12f5b20d8.jpg";

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
/* harmony import */ var _img_white_pizza_150x150_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/white-pizza-150x150.jpg */ "./src/img/white-pizza-150x150.jpg");
/* harmony import */ var _img_Boardwalk_Pizza_150x150_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Boardwalk-Pizza-150x150.png */ "./src/img/Boardwalk-Pizza-150x150.png");




const menu = function () {
  const contentContainer = document.querySelector('.content-container');

  contentContainer.style.height = "auto";

  const menuContainer = document.createElement('div');
  menuContainer.className = "menu-container";
  contentContainer.appendChild(menuContainer);


  const sectionTitle1 = document.createElement('div');
  sectionTitle1.innerHTML = "<h1>Pizza</h1>"
  sectionTitle1.className = "menu-title";

  const menuItem0 = document.createElement('div');
  menuItem0.innerHTML = "<h3>Neopolitan Slice";
  menuItem0.className = "menu-item";
  const menuDescription0 = document.createElement('div');
  menuDescription0.innerHTML = "<h5>Pizza by the slice</h5>";
  menuDescription0.className = "menu-description";
  const menuPrice0 = document.createElement('div');
  menuPrice0.innerHTML = "<h3>$2.25 Per Slice</h3>";
  menuPrice0.className = "menu-price"
  const br0 = document.createElement('br');

  menuContainer.append(sectionTitle1, menuItem0, menuDescription0, menuPrice0, br0);
  
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

  menuContainer.append(sectionSubTitle1, menuItem1, menuDescription1, menuPrice1, br1);

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
  const br4 = document.createElement('br');

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
  menuPrice4.innerHTML = '<h3>Small (12") $9.00<br />Medium (14") $10.50<br />Large (16") $14.00</h3>';
  menuPrice4.className = "menu-price"; 

  menuCard1.append(menuItem4, menuItemImg4, menuDescription4, menuPrice4);

  const menuCard2 = document.createElement('div');
  menuCard2.className = "menu-card";

  const menuItem5 = document.createElement('div');
  menuItem5.innerHTML = "<h3>White Pizza</h3>";
  menuItem5.className = "menu-item";
  const menuItemImg5 = document.createElement('img');
  menuItemImg5.src = _img_white_pizza_150x150_jpg__WEBPACK_IMPORTED_MODULE_1__;
  menuItemImg5.className = "menu-card-image";
  const menuDescription5 = document.createElement('div');
  menuDescription5.innerHTML = "<h5>Thin round crust with fresh Garlic, Olive Oil and Mozzarella</h5>";
  menuDescription5.className = "menu-description";
  const menuPrice5 = document.createElement('div');
  menuPrice5.innerHTML = '<h3>Small (12") $9.00<br />Medium (14") $10.50<br />Large (16") $14.00</h3>';
  menuPrice5.className = "menu-price"; 

  menuCard2.append(menuItem5, menuItemImg5, menuDescription5, menuPrice5);

  const menuCard3 = document.createElement('div');
  menuCard3.className = "menu-card";

  const menuItem6 = document.createElement('div');
  menuItem6.innerHTML = "<h3>Boardwalk</h3>";
  menuItem6.className = "menu-item";
  const menuItemImg6 = document.createElement('img');
  menuItemImg6.src = _img_Boardwalk_Pizza_150x150_png__WEBPACK_IMPORTED_MODULE_2__;
  menuItemImg6.className = "menu-card-image";
  const menuDescription6 = document.createElement('div');
  menuDescription6.innerHTML = "<h5>Thin round crust with Homemade Sweet Sauce and Mozzarella</h5>";
  menuDescription6.className = "menu-description";
  const menuPrice6 = document.createElement('div');
  menuPrice6.innerHTML = '<h3>Small (12") $9.00<br />Medium (14") $10.50<br />Large (16") $14.00</h3>';
  menuPrice6.className = "menu-price"; 

  menuCard3.append(menuItem6, menuItemImg6, menuDescription6, menuPrice6);

  menuCardContainer1.append(menuCard1, menuCard2, menuCard3);
  menuContainer.append(menuCardContainer1, br4);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndFO0FBQ2I7QUFDUTs7QUFFbkU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9wYWdlcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBwaXp6YUNoZWVzZUltZyBmcm9tIFwiLi4vaW1nL0NoZWVzZS1OZWFwb2xpdGFuLVBpenphLTE1MHgxNTAucG5nXCI7XG5pbXBvcnQgcGl6emFXaGl0ZUltZyBmcm9tIFwiLi4vaW1nL3doaXRlLXBpenphLTE1MHgxNTAuanBnXCI7XG5pbXBvcnQgcGl6emFCb2FyZHdhbGtJbWcgZnJvbSBcIi4uL2ltZy9Cb2FyZHdhbGstUGl6emEtMTUweDE1MC5wbmdcIjtcblxuY29uc3QgbWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gIGNvbnRlbnRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuXG4gIGNvbnN0IHNlY3Rpb25UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvblRpdGxlMS5pbm5lckhUTUwgPSBcIjxoMT5QaXp6YTwvaDE+XCJcbiAgc2VjdGlvblRpdGxlMS5jbGFzc05hbWUgPSBcIm1lbnUtdGl0bGVcIjtcblxuICBjb25zdCBtZW51SXRlbTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0wLmlubmVySFRNTCA9IFwiPGgzPk5lb3BvbGl0YW4gU2xpY2VcIjtcbiAgbWVudUl0ZW0wLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gIGNvbnN0IG1lbnVEZXNjcmlwdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURlc2NyaXB0aW9uMC5pbm5lckhUTUwgPSBcIjxoNT5QaXp6YSBieSB0aGUgc2xpY2U8L2g1PlwiO1xuICBtZW51RGVzY3JpcHRpb24wLmNsYXNzTmFtZSA9IFwibWVudS1kZXNjcmlwdGlvblwiO1xuICBjb25zdCBtZW51UHJpY2UwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVQcmljZTAuaW5uZXJIVE1MID0gXCI8aDM+JDIuMjUgUGVyIFNsaWNlPC9oMz5cIjtcbiAgbWVudVByaWNlMC5jbGFzc05hbWUgPSBcIm1lbnUtcHJpY2VcIlxuICBjb25zdCBicjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKHNlY3Rpb25UaXRsZTEsIG1lbnVJdGVtMCwgbWVudURlc2NyaXB0aW9uMCwgbWVudVByaWNlMCwgYnIwKTtcbiAgXG4gIGNvbnN0IHNlY3Rpb25TdWJUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvblN1YlRpdGxlMS5pbm5lckhUTUwgPSBcIjxoMj5OZW9wb2xpdGFuIFRvcHBpbmdzPC9oMj5cIjtcbiAgc2VjdGlvblN1YlRpdGxlMS5jbGFzc05hbWUgPSBcIm1lbnUtc3VidGl0bGVcIjtcbiAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMS5pbm5lckhUTUwgPSBcIjxoMz5NZWF0PC9oMz5cIjtcbiAgbWVudUl0ZW0xLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gIGNvbnN0IG1lbnVEZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURlc2NyaXB0aW9uMS5pbm5lckhUTUwgPSBcIjxoNT5QZXBwZXJvbmksIEhhbSwgTWVhdGJhbGxzLCBBbmNob3ZpZXMsIFNhdXNhZ2UsIEJhY29uPC9oNT5cIjtcbiAgbWVudURlc2NyaXB0aW9uMS5jbGFzc05hbWUgPSBcIm1lbnUtZGVzY3JpcHRpb25cIjtcbiAgY29uc3QgbWVudVByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51UHJpY2UxLmlubmVySFRNTCA9IFwiPGgzPlNtYWxsICQyLjAwIHwgTWVkaXVtICQyLjI1IHwgTGFyZ2UgJDIuNTA8L2gzPlwiO1xuICBtZW51UHJpY2UxLmNsYXNzTmFtZSA9IFwibWVudS1wcmljZVwiO1xuICBjb25zdCBicjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKHNlY3Rpb25TdWJUaXRsZTEsIG1lbnVJdGVtMSwgbWVudURlc2NyaXB0aW9uMSwgbWVudVByaWNlMSwgYnIxKTtcblxuICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0yLmlubmVySFRNTCA9IFwiPGgzPlZlZ2dpZXM8L2gzPlwiO1xuICBtZW51SXRlbTIuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgY29uc3QgbWVudURlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGVzY3JpcHRpb24yLmlubmVySFRNTCA9IFwiPGg1Pk11c2hyb29tLCBSZWQgT25pb24sIFN3ZWV0IFBlcHBlcnMsIEhvdCBCYW5hbmEgUGVwcGVycywgUGluZWFwcGxlLCBFeHRyYSBDaGVlc2UsIEdhcmxpYywgQnJ1c2NoZXR0YSBUb21hdG9lcywgR3JlZW4gQmVsbCBQZXBwZXJzLCBTcGluYWNoLCBCcm9jY29saSwgQmxhY2sgT2xpdmVzPC9oNT5cIjtcbiAgbWVudURlc2NyaXB0aW9uMi5jbGFzc05hbWUgPSBcIm1lbnUtZGVzY3JpcHRpb25cIjtcbiAgY29uc3QgbWVudVByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51UHJpY2UyLmlubmVySFRNTCA9IFwiPGgzPlNtYWxsICQyLjAwIHwgTWVkaXVtICQyLjI1IHwgTGFyZ2UgJDIuNTA8L2gzPlwiO1xuICBtZW51UHJpY2UyLmNsYXNzTmFtZSA9IFwibWVudS1wcmljZVwiO1xuICBjb25zdCBicjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtMiwgbWVudURlc2NyaXB0aW9uMiwgbWVudVByaWNlMiwgYnIyKTtcblxuIFxuICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0zLmlubmVySFRNTCA9IFwiPGgzPlNwZWNpYWx0eSBUb3BwaW5nczwvaDM+XCI7XG4gIG1lbnVJdGVtMy5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuICBjb25zdCBtZW51RGVzY3JpcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEZXNjcmlwdGlvbjMuaW5uZXJIVE1MID0gXCI8aDU+R3JvdW5kIEJlZWYsIFN0ZWFrLCBDaGlja2VuIFN0ZWFrLCBHcmlsbGVkIENoaWNrZW4gQnJlc3QsIEJyZWFkZWQgRWdncGxhbnQ8L2g1PlwiO1xuICBtZW51RGVzY3JpcHRpb24zLmNsYXNzTmFtZSA9IFwibWVudS1kZXNjcmlwdGlvblwiO1xuICBjb25zdCBtZW51UHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVQcmljZTMuaW5uZXJIVE1MID0gXCI8aDM+U21hbGwgJDMuMDAgfCBNZWRpdW0gJDMuNTAgfCBMYXJnZSAkNC4wMDwvaDM+XCI7XG4gIG1lbnVQcmljZTMuY2xhc3NOYW1lID0gXCJtZW51LXByaWNlXCI7XG4gIGNvbnN0IGJyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW0zLCBtZW51RGVzY3JpcHRpb24zLCBtZW51UHJpY2UzLCBicjMpO1xuICBcbiAgY29uc3QgbWVudUNhcmRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDYXJkQ29udGFpbmVyMS5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZC1jb250YWluZXJcIjtcbiAgY29uc3QgYnI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICBjb25zdCBtZW51Q2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNhcmQxLmNsYXNzTmFtZSA9IFwibWVudS1jYXJkXCI7XG5cbiAgY29uc3QgbWVudUl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtNC5pbm5lckhUTUwgPSBcIjxoMz5DaGVlc2UgUGl6emE8L2gzPlwiO1xuICBtZW51SXRlbTQuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgY29uc3QgbWVudUl0ZW1JbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG1lbnVJdGVtSW1nNC5zcmMgPSBwaXp6YUNoZWVzZUltZztcbiAgbWVudUl0ZW1JbWc0LmNsYXNzTmFtZSA9IFwibWVudS1jYXJkLWltYWdlXCI7XG4gIGNvbnN0IG1lbnVEZXNjcmlwdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURlc2NyaXB0aW9uNC5pbm5lckhUTUwgPSBcIjxoNT5UaGluIHJvdW5kIGNydXN0IHdpdGggUGl6emEgU2F1Y2UgYW5kIE1venphcmVsbGE8L2g1PlwiO1xuICBtZW51RGVzY3JpcHRpb240LmNsYXNzTmFtZSA9IFwibWVudS1kZXNjcmlwdGlvblwiO1xuICBjb25zdCBtZW51UHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVQcmljZTQuaW5uZXJIVE1MID0gJzxoMz5TbWFsbCAoMTJcIikgJDkuMDA8YnIgLz5NZWRpdW0gKDE0XCIpICQxMC41MDxiciAvPkxhcmdlICgxNlwiKSAkMTQuMDA8L2gzPic7XG4gIG1lbnVQcmljZTQuY2xhc3NOYW1lID0gXCJtZW51LXByaWNlXCI7IFxuXG4gIG1lbnVDYXJkMS5hcHBlbmQobWVudUl0ZW00LCBtZW51SXRlbUltZzQsIG1lbnVEZXNjcmlwdGlvbjQsIG1lbnVQcmljZTQpO1xuXG4gIGNvbnN0IG1lbnVDYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q2FyZDIuY2xhc3NOYW1lID0gXCJtZW51LWNhcmRcIjtcblxuICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW01LmlubmVySFRNTCA9IFwiPGgzPldoaXRlIFBpenphPC9oMz5cIjtcbiAgbWVudUl0ZW01LmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gIGNvbnN0IG1lbnVJdGVtSW1nNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SXRlbUltZzUuc3JjID0gcGl6emFXaGl0ZUltZztcbiAgbWVudUl0ZW1JbWc1LmNsYXNzTmFtZSA9IFwibWVudS1jYXJkLWltYWdlXCI7XG4gIGNvbnN0IG1lbnVEZXNjcmlwdGlvbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURlc2NyaXB0aW9uNS5pbm5lckhUTUwgPSBcIjxoNT5UaGluIHJvdW5kIGNydXN0IHdpdGggZnJlc2ggR2FybGljLCBPbGl2ZSBPaWwgYW5kIE1venphcmVsbGE8L2g1PlwiO1xuICBtZW51RGVzY3JpcHRpb241LmNsYXNzTmFtZSA9IFwibWVudS1kZXNjcmlwdGlvblwiO1xuICBjb25zdCBtZW51UHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVQcmljZTUuaW5uZXJIVE1MID0gJzxoMz5TbWFsbCAoMTJcIikgJDkuMDA8YnIgLz5NZWRpdW0gKDE0XCIpICQxMC41MDxiciAvPkxhcmdlICgxNlwiKSAkMTQuMDA8L2gzPic7XG4gIG1lbnVQcmljZTUuY2xhc3NOYW1lID0gXCJtZW51LXByaWNlXCI7IFxuXG4gIG1lbnVDYXJkMi5hcHBlbmQobWVudUl0ZW01LCBtZW51SXRlbUltZzUsIG1lbnVEZXNjcmlwdGlvbjUsIG1lbnVQcmljZTUpO1xuXG4gIGNvbnN0IG1lbnVDYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q2FyZDMuY2xhc3NOYW1lID0gXCJtZW51LWNhcmRcIjtcblxuICBjb25zdCBtZW51SXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW02LmlubmVySFRNTCA9IFwiPGgzPkJvYXJkd2FsazwvaDM+XCI7XG4gIG1lbnVJdGVtNi5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuICBjb25zdCBtZW51SXRlbUltZzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWVudUl0ZW1JbWc2LnNyYyA9IHBpenphQm9hcmR3YWxrSW1nO1xuICBtZW51SXRlbUltZzYuY2xhc3NOYW1lID0gXCJtZW51LWNhcmQtaW1hZ2VcIjtcbiAgY29uc3QgbWVudURlc2NyaXB0aW9uNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGVzY3JpcHRpb242LmlubmVySFRNTCA9IFwiPGg1PlRoaW4gcm91bmQgY3J1c3Qgd2l0aCBIb21lbWFkZSBTd2VldCBTYXVjZSBhbmQgTW96emFyZWxsYTwvaDU+XCI7XG4gIG1lbnVEZXNjcmlwdGlvbjYuY2xhc3NOYW1lID0gXCJtZW51LWRlc2NyaXB0aW9uXCI7XG4gIGNvbnN0IG1lbnVQcmljZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudVByaWNlNi5pbm5lckhUTUwgPSAnPGgzPlNtYWxsICgxMlwiKSAkOS4wMDxiciAvPk1lZGl1bSAoMTRcIikgJDEwLjUwPGJyIC8+TGFyZ2UgKDE2XCIpICQxNC4wMDwvaDM+JztcbiAgbWVudVByaWNlNi5jbGFzc05hbWUgPSBcIm1lbnUtcHJpY2VcIjsgXG5cbiAgbWVudUNhcmQzLmFwcGVuZChtZW51SXRlbTYsIG1lbnVJdGVtSW1nNiwgbWVudURlc2NyaXB0aW9uNiwgbWVudVByaWNlNik7XG5cbiAgbWVudUNhcmRDb250YWluZXIxLmFwcGVuZChtZW51Q2FyZDEsIG1lbnVDYXJkMiwgbWVudUNhcmQzKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUNhcmRDb250YWluZXIxLCBicjQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==