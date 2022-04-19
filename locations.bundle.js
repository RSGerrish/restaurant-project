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
  !*** ./src/pages/locations.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const locations = function() {
  const contentContainer = document.querySelector('.content-container');

  const mainContainer = document.createElement('main');
  contentContainer.appendChild(mainContainer);

  const locContainer = document.createElement('div');
  locContainer.className = "loc-container";
  mainContainer.appendChild(locContainer);

  const locCard1 = document.createElement('div');
  locCard1.className = "loc-card";
  locCard1.id = "loc-card-1";
  const locTitle1 = document.createElement('div');
  locTitle1.className = "loc-title";
  locTitle1.innerHTML = "Sinking Spring";
  const locPhone1 = document.createElement('div');
  locPhone1.className = "loc-phone";
  locPhone1.innerHTML = "<a href='tel:6106786300'>610.678.6300</a>";
  const locAddress1 = document.createElement('address');
  locAddress1.className = "loc-address";
  locAddress1.innerHTML = "2661 Shillington Road<br />Sinking Spring, PA 19608";
  const locButton1 = document.createElement('button');
  locButton1.className = "loc-button";
  locButton1.id = "loc-button-1";
  locButton1.innerHTML = "Order Online";
  locCard1.append(locTitle1, locPhone1, locAddress1, locButton1);

  const locCard2 = document.createElement('div');
  locCard2.className = "loc-card";
  locCard2.id = "loc-card-2";
  const locTitle2 = document.createElement('div');
  locTitle2.className = "loc-title";
  locTitle2.innerHTML = "Wyomissing";
  const locPhone2 = document.createElement('div');
  locPhone2.className = "loc-phone";
  locPhone2.innerHTML = "<a href='tel:6103749355'>610.374.9355</a>";
  const locAddress2 = document.createElement('address');
  locAddress2.className = "loc-address";
  locAddress2.innerHTML = "1814 State Hill Rd<br />Wyomissing, PA 19610";
  const locButton2 = document.createElement('button');
  locButton2.className = "loc-button";
  locButton2.id = "loc-button-2";
  locButton2.innerHTML = "Order Online";
  locCard2.append(locTitle2, locPhone2, locAddress2, locButton2);

  const clessCard = document.createElement('div');
  clessCard.className = "cless-card";
  const clessTitle = document.createElement('div');
  clessTitle.className = "cless-title";
  clessTitle.innerHTML = "Contactless Curbside Pick-up & Delivery. Order Online or Over the Phone";
  const dInstruct = document.createElement('ol');
  dInstruct.innerHTML = "Delivery Instructions Needed";
    const dInstructItem1 = document.createElement('li');
    dInstructItem1.innerHTML = "Please let us know how we should notify you upon arrival";
    const dInstructItem2 = document.createElement('li');
    dInstructItem2.innerHTML = "Let us know where you want us to drop the food";
    const dInstructItem3 = document.createElement('li');
    dInstructItem3.innerHTML = "Will you be paying by phone or online?";
    dInstruct.append(dInstructItem1, dInstructItem2, dInstructItem3);
  const cInstruct = document.createElement('ol');
  cInstruct.innerHTML = "Curbside Pick-up Instructions Needed";
    const cInstructItem1 = document.createElement('li');
    cInstructItem1.innerHTML = "Let us know the make & color of your vehicle";
    const cInstructItem2 = document.createElement('li');
    cInstructItem2.innerHTML = "We'll let you know your order number";
    const cInstructItem3 = document.createElement('li');
    cInstructItem3.innerHTML = "Will you be paying by phone or online?"
    const cInstructItem4 = document.createElement('li');
    cInstructItem4.innerHTML = "Please call upon arrival with your ticket number";
    cInstruct.append(cInstructItem1, cInstructItem2, cInstructItem3, cInstructItem4);
  clessCard.append(clessTitle, dInstruct, cInstruct);
  
  locContainer.append(locCard1, locCard2, clessCard);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locations);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3BhZ2VzL2xvY2F0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGxvY2F0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICBjb25zdCBsb2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibG9jLWNvbnRhaW5lclwiO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY0NvbnRhaW5lcik7XG5cbiAgY29uc3QgbG9jQ2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jQ2FyZDEuY2xhc3NOYW1lID0gXCJsb2MtY2FyZFwiO1xuICBsb2NDYXJkMS5pZCA9IFwibG9jLWNhcmQtMVwiO1xuICBjb25zdCBsb2NUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jVGl0bGUxLmNsYXNzTmFtZSA9IFwibG9jLXRpdGxlXCI7XG4gIGxvY1RpdGxlMS5pbm5lckhUTUwgPSBcIlNpbmtpbmcgU3ByaW5nXCI7XG4gIGNvbnN0IGxvY1Bob25lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NQaG9uZTEuY2xhc3NOYW1lID0gXCJsb2MtcGhvbmVcIjtcbiAgbG9jUGhvbmUxLmlubmVySFRNTCA9IFwiPGEgaHJlZj0ndGVsOjYxMDY3ODYzMDAnPjYxMC42NzguNjMwMDwvYT5cIjtcbiAgY29uc3QgbG9jQWRkcmVzczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhZGRyZXNzJyk7XG4gIGxvY0FkZHJlc3MxLmNsYXNzTmFtZSA9IFwibG9jLWFkZHJlc3NcIjtcbiAgbG9jQWRkcmVzczEuaW5uZXJIVE1MID0gXCIyNjYxIFNoaWxsaW5ndG9uIFJvYWQ8YnIgLz5TaW5raW5nIFNwcmluZywgUEEgMTk2MDhcIjtcbiAgY29uc3QgbG9jQnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb2NCdXR0b24xLmNsYXNzTmFtZSA9IFwibG9jLWJ1dHRvblwiO1xuICBsb2NCdXR0b24xLmlkID0gXCJsb2MtYnV0dG9uLTFcIjtcbiAgbG9jQnV0dG9uMS5pbm5lckhUTUwgPSBcIk9yZGVyIE9ubGluZVwiO1xuICBsb2NDYXJkMS5hcHBlbmQobG9jVGl0bGUxLCBsb2NQaG9uZTEsIGxvY0FkZHJlc3MxLCBsb2NCdXR0b24xKTtcblxuICBjb25zdCBsb2NDYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NDYXJkMi5jbGFzc05hbWUgPSBcImxvYy1jYXJkXCI7XG4gIGxvY0NhcmQyLmlkID0gXCJsb2MtY2FyZC0yXCI7XG4gIGNvbnN0IGxvY1RpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NUaXRsZTIuY2xhc3NOYW1lID0gXCJsb2MtdGl0bGVcIjtcbiAgbG9jVGl0bGUyLmlubmVySFRNTCA9IFwiV3lvbWlzc2luZ1wiO1xuICBjb25zdCBsb2NQaG9uZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jUGhvbmUyLmNsYXNzTmFtZSA9IFwibG9jLXBob25lXCI7XG4gIGxvY1Bob25lMi5pbm5lckhUTUwgPSBcIjxhIGhyZWY9J3RlbDo2MTAzNzQ5MzU1Jz42MTAuMzc0LjkzNTU8L2E+XCI7XG4gIGNvbnN0IGxvY0FkZHJlc3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpO1xuICBsb2NBZGRyZXNzMi5jbGFzc05hbWUgPSBcImxvYy1hZGRyZXNzXCI7XG4gIGxvY0FkZHJlc3MyLmlubmVySFRNTCA9IFwiMTgxNCBTdGF0ZSBIaWxsIFJkPGJyIC8+V3lvbWlzc2luZywgUEEgMTk2MTBcIjtcbiAgY29uc3QgbG9jQnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb2NCdXR0b24yLmNsYXNzTmFtZSA9IFwibG9jLWJ1dHRvblwiO1xuICBsb2NCdXR0b24yLmlkID0gXCJsb2MtYnV0dG9uLTJcIjtcbiAgbG9jQnV0dG9uMi5pbm5lckhUTUwgPSBcIk9yZGVyIE9ubGluZVwiO1xuICBsb2NDYXJkMi5hcHBlbmQobG9jVGl0bGUyLCBsb2NQaG9uZTIsIGxvY0FkZHJlc3MyLCBsb2NCdXR0b24yKTtcblxuICBjb25zdCBjbGVzc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2xlc3NDYXJkLmNsYXNzTmFtZSA9IFwiY2xlc3MtY2FyZFwiO1xuICBjb25zdCBjbGVzc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNsZXNzVGl0bGUuY2xhc3NOYW1lID0gXCJjbGVzcy10aXRsZVwiO1xuICBjbGVzc1RpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdGxlc3MgQ3VyYnNpZGUgUGljay11cCAmIERlbGl2ZXJ5LiBPcmRlciBPbmxpbmUgb3IgT3ZlciB0aGUgUGhvbmVcIjtcbiAgY29uc3QgZEluc3RydWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcbiAgZEluc3RydWN0LmlubmVySFRNTCA9IFwiRGVsaXZlcnkgSW5zdHJ1Y3Rpb25zIE5lZWRlZFwiO1xuICAgIGNvbnN0IGRJbnN0cnVjdEl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkSW5zdHJ1Y3RJdGVtMS5pbm5lckhUTUwgPSBcIlBsZWFzZSBsZXQgdXMga25vdyBob3cgd2Ugc2hvdWxkIG5vdGlmeSB5b3UgdXBvbiBhcnJpdmFsXCI7XG4gICAgY29uc3QgZEluc3RydWN0SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRJbnN0cnVjdEl0ZW0yLmlubmVySFRNTCA9IFwiTGV0IHVzIGtub3cgd2hlcmUgeW91IHdhbnQgdXMgdG8gZHJvcCB0aGUgZm9vZFwiO1xuICAgIGNvbnN0IGRJbnN0cnVjdEl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkSW5zdHJ1Y3RJdGVtMy5pbm5lckhUTUwgPSBcIldpbGwgeW91IGJlIHBheWluZyBieSBwaG9uZSBvciBvbmxpbmU/XCI7XG4gICAgZEluc3RydWN0LmFwcGVuZChkSW5zdHJ1Y3RJdGVtMSwgZEluc3RydWN0SXRlbTIsIGRJbnN0cnVjdEl0ZW0zKTtcbiAgY29uc3QgY0luc3RydWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcbiAgY0luc3RydWN0LmlubmVySFRNTCA9IFwiQ3VyYnNpZGUgUGljay11cCBJbnN0cnVjdGlvbnMgTmVlZGVkXCI7XG4gICAgY29uc3QgY0luc3RydWN0SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNJbnN0cnVjdEl0ZW0xLmlubmVySFRNTCA9IFwiTGV0IHVzIGtub3cgdGhlIG1ha2UgJiBjb2xvciBvZiB5b3VyIHZlaGljbGVcIjtcbiAgICBjb25zdCBjSW5zdHJ1Y3RJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY0luc3RydWN0SXRlbTIuaW5uZXJIVE1MID0gXCJXZSdsbCBsZXQgeW91IGtub3cgeW91ciBvcmRlciBudW1iZXJcIjtcbiAgICBjb25zdCBjSW5zdHJ1Y3RJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY0luc3RydWN0SXRlbTMuaW5uZXJIVE1MID0gXCJXaWxsIHlvdSBiZSBwYXlpbmcgYnkgcGhvbmUgb3Igb25saW5lP1wiXG4gICAgY29uc3QgY0luc3RydWN0SXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNJbnN0cnVjdEl0ZW00LmlubmVySFRNTCA9IFwiUGxlYXNlIGNhbGwgdXBvbiBhcnJpdmFsIHdpdGggeW91ciB0aWNrZXQgbnVtYmVyXCI7XG4gICAgY0luc3RydWN0LmFwcGVuZChjSW5zdHJ1Y3RJdGVtMSwgY0luc3RydWN0SXRlbTIsIGNJbnN0cnVjdEl0ZW0zLCBjSW5zdHJ1Y3RJdGVtNCk7XG4gIGNsZXNzQ2FyZC5hcHBlbmQoY2xlc3NUaXRsZSwgZEluc3RydWN0LCBjSW5zdHJ1Y3QpO1xuICBcbiAgbG9jQ29udGFpbmVyLmFwcGVuZChsb2NDYXJkMSwgbG9jQ2FyZDIsIGNsZXNzQ2FyZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=