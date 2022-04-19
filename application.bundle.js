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
/*!**********************************!*\
  !*** ./src/pages/application.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const application = function() {
  const contentContainer = document.querySelector('.content-container');

  const appContainer = document.createElement('div');
  appContainer.className = "app-container";
  contentContainer.appendChild(appContainer);

  const appTitle = document.createElement('div');
  appTitle.className = "app-title";
  appTitle.innerHTML = "Employment Application";
  const appSubTitle = document.createElement('div');
  appSubTitle.className = "app-subtitle";
  appSubTitle.innerHTML = "Let us know what employment opportunities you may be interested in";
  const appForm = document.createElement('form');
  appForm.action = "#";
  appForm.className = "app-form";
  appContainer.append(appTitle, appSubTitle, appForm);

  const divLabel1 = document.createElement('label');
  divLabel1.htmlFor = "app-name";
  divLabel1.innerHTML = "First & Last Name";
  divLabel1.className = "form-label";
  const divInput1 = document.createElement('input');
  divInput1.type = "text";
  divInput1.name = "app-name";
  divInput1.id = "app-name";
  divInput1.className = "form-text-input";

  const divLabel2 = document.createElement('label');
  divLabel2.htmlFor = "app-email";
  divLabel2.innerHTML = "Email";
  divLabel2.className = "form-label";
  const divInput2 = document.createElement('input');
  divInput2.type = "email";
  divInput2.name = "app-email";
  divInput2.id = "app-email";
  divInput2.className = "form-text-input";

  const divLabel3 = document.createElement('label');
  divLabel3.htmlFor = "app-phone";
  divLabel3.innerHTML = "Phone";
  divLabel3.className = "form-label";
  const divInput3 = document.createElement('input');
  divInput3.type = "text";
  divInput3.name = "app-phone";
  divInput3.id = "app-phone";
  divInput3.className = "form-text-input";

  const butSubmit = document.createElement('input');
  butSubmit.type = "button";
  butSubmit.value = "Submit";
  butSubmit.className = "but-submit";

  appForm.append(divLabel1, divInput1, divLabel2, divInput2, divLabel3, divInput3, butSubmit);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (application);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvcGFnZXMvYXBwbGljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBhcHBsaWNhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFwcENvbnRhaW5lci5jbGFzc05hbWUgPSBcImFwcC1jb250YWluZXJcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBDb250YWluZXIpO1xuXG4gIGNvbnN0IGFwcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFwcFRpdGxlLmNsYXNzTmFtZSA9IFwiYXBwLXRpdGxlXCI7XG4gIGFwcFRpdGxlLmlubmVySFRNTCA9IFwiRW1wbG95bWVudCBBcHBsaWNhdGlvblwiO1xuICBjb25zdCBhcHBTdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhcHBTdWJUaXRsZS5jbGFzc05hbWUgPSBcImFwcC1zdWJ0aXRsZVwiO1xuICBhcHBTdWJUaXRsZS5pbm5lckhUTUwgPSBcIkxldCB1cyBrbm93IHdoYXQgZW1wbG95bWVudCBvcHBvcnR1bml0aWVzIHlvdSBtYXkgYmUgaW50ZXJlc3RlZCBpblwiO1xuICBjb25zdCBhcHBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBhcHBGb3JtLmFjdGlvbiA9IFwiI1wiO1xuICBhcHBGb3JtLmNsYXNzTmFtZSA9IFwiYXBwLWZvcm1cIjtcbiAgYXBwQ29udGFpbmVyLmFwcGVuZChhcHBUaXRsZSwgYXBwU3ViVGl0bGUsIGFwcEZvcm0pO1xuXG4gIGNvbnN0IGRpdkxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRpdkxhYmVsMS5odG1sRm9yID0gXCJhcHAtbmFtZVwiO1xuICBkaXZMYWJlbDEuaW5uZXJIVE1MID0gXCJGaXJzdCAmIExhc3QgTmFtZVwiO1xuICBkaXZMYWJlbDEuY2xhc3NOYW1lID0gXCJmb3JtLWxhYmVsXCI7XG4gIGNvbnN0IGRpdklucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRpdklucHV0MS50eXBlID0gXCJ0ZXh0XCI7XG4gIGRpdklucHV0MS5uYW1lID0gXCJhcHAtbmFtZVwiO1xuICBkaXZJbnB1dDEuaWQgPSBcImFwcC1uYW1lXCI7XG4gIGRpdklucHV0MS5jbGFzc05hbWUgPSBcImZvcm0tdGV4dC1pbnB1dFwiO1xuXG4gIGNvbnN0IGRpdkxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRpdkxhYmVsMi5odG1sRm9yID0gXCJhcHAtZW1haWxcIjtcbiAgZGl2TGFiZWwyLmlubmVySFRNTCA9IFwiRW1haWxcIjtcbiAgZGl2TGFiZWwyLmNsYXNzTmFtZSA9IFwiZm9ybS1sYWJlbFwiO1xuICBjb25zdCBkaXZJbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkaXZJbnB1dDIudHlwZSA9IFwiZW1haWxcIjtcbiAgZGl2SW5wdXQyLm5hbWUgPSBcImFwcC1lbWFpbFwiO1xuICBkaXZJbnB1dDIuaWQgPSBcImFwcC1lbWFpbFwiO1xuICBkaXZJbnB1dDIuY2xhc3NOYW1lID0gXCJmb3JtLXRleHQtaW5wdXRcIjtcblxuICBjb25zdCBkaXZMYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkaXZMYWJlbDMuaHRtbEZvciA9IFwiYXBwLXBob25lXCI7XG4gIGRpdkxhYmVsMy5pbm5lckhUTUwgPSBcIlBob25lXCI7XG4gIGRpdkxhYmVsMy5jbGFzc05hbWUgPSBcImZvcm0tbGFiZWxcIjtcbiAgY29uc3QgZGl2SW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGl2SW5wdXQzLnR5cGUgPSBcInRleHRcIjtcbiAgZGl2SW5wdXQzLm5hbWUgPSBcImFwcC1waG9uZVwiO1xuICBkaXZJbnB1dDMuaWQgPSBcImFwcC1waG9uZVwiO1xuICBkaXZJbnB1dDMuY2xhc3NOYW1lID0gXCJmb3JtLXRleHQtaW5wdXRcIjtcblxuICBjb25zdCBidXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBidXRTdWJtaXQudHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJ1dFN1Ym1pdC52YWx1ZSA9IFwiU3VibWl0XCI7XG4gIGJ1dFN1Ym1pdC5jbGFzc05hbWUgPSBcImJ1dC1zdWJtaXRcIjtcblxuICBhcHBGb3JtLmFwcGVuZChkaXZMYWJlbDEsIGRpdklucHV0MSwgZGl2TGFiZWwyLCBkaXZJbnB1dDIsIGRpdkxhYmVsMywgZGl2SW5wdXQzLCBidXRTdWJtaXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBsaWNhdGlvbjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=