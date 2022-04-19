/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/pages/giftcards.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const giftcards = function() {
  const contentContainer = document.querySelector('.content-container');

  const gcContainer = document.createElement('div');
  gcContainer.className = "gc-container";
  contentContainer.appendChild(gcContainer);

  const gcContainer2 = document.createElement('div');
  gcContainer2.className = "gc-container-2";
  gcContainer.appendChild(gcContainer2);

  const gcTitle = document.createElement('h1');
  gcTitle.innerHTML = "Check Your Gift Card Balance";
  const formContainer = document.createElement('form');
  formContainer.className = "gc-form";
  formContainer.action = "#";
  gcContainer2.append(gcTitle, formContainer);

  const formContainer2 = document.createElement('div');
  formContainer2.className = "gc-form-2";
  formContainer.appendChild(formContainer2);

  const gcLabel = document.createElement('label');
  gcLabel.htmlFor = "gc-number";
  gcLabel.innerHTML = "Please Enter Your Gift Card Number Below"
  const gcNumber = document.createElement('input');
  gcNumber.type = "text";
  gcNumber.id = "gc-number";
  gcNumber.name = "gc-number";
  gcNumber.pattern = "[0-9]{15}"
  gcNumber.title = "Gift card number should only contain numbers and be 15 digits long";
  const gcSubmit = document.createElement('button');
  gcSubmit.type = "submit";
  gcSubmit.innerHTML = "Submit";
  formContainer2.append(gcLabel, gcNumber, gcSubmit);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (giftcards);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lmdGNhcmRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEdBQUc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvcGFnZXMvZ2lmdGNhcmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZ2lmdGNhcmRzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKTtcblxuICBjb25zdCBnY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnY0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImdjLWNvbnRhaW5lclwiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdjQ29udGFpbmVyKTtcblxuICBjb25zdCBnY0NvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2NDb250YWluZXIyLmNsYXNzTmFtZSA9IFwiZ2MtY29udGFpbmVyLTJcIjtcbiAgZ2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2NDb250YWluZXIyKTtcblxuICBjb25zdCBnY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgZ2NUaXRsZS5pbm5lckhUTUwgPSBcIkNoZWNrIFlvdXIgR2lmdCBDYXJkIEJhbGFuY2VcIjtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImdjLWZvcm1cIjtcbiAgZm9ybUNvbnRhaW5lci5hY3Rpb24gPSBcIiNcIjtcbiAgZ2NDb250YWluZXIyLmFwcGVuZChnY1RpdGxlLCBmb3JtQ29udGFpbmVyKTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQ29udGFpbmVyMi5jbGFzc05hbWUgPSBcImdjLWZvcm0tMlwiO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIyKTtcblxuICBjb25zdCBnY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZ2NMYWJlbC5odG1sRm9yID0gXCJnYy1udW1iZXJcIjtcbiAgZ2NMYWJlbC5pbm5lckhUTUwgPSBcIlBsZWFzZSBFbnRlciBZb3VyIEdpZnQgQ2FyZCBOdW1iZXIgQmVsb3dcIlxuICBjb25zdCBnY051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGdjTnVtYmVyLnR5cGUgPSBcInRleHRcIjtcbiAgZ2NOdW1iZXIuaWQgPSBcImdjLW51bWJlclwiO1xuICBnY051bWJlci5uYW1lID0gXCJnYy1udW1iZXJcIjtcbiAgZ2NOdW1iZXIucGF0dGVybiA9IFwiWzAtOV17MTV9XCJcbiAgZ2NOdW1iZXIudGl0bGUgPSBcIkdpZnQgY2FyZCBudW1iZXIgc2hvdWxkIG9ubHkgY29udGFpbiBudW1iZXJzIGFuZCBiZSAxNSBkaWdpdHMgbG9uZ1wiO1xuICBjb25zdCBnY1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBnY1N1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgZ2NTdWJtaXQuaW5uZXJIVE1MID0gXCJTdWJtaXRcIjtcbiAgZm9ybUNvbnRhaW5lcjIuYXBwZW5kKGdjTGFiZWwsIGdjTnVtYmVyLCBnY1N1Ym1pdCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2lmdGNhcmRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==