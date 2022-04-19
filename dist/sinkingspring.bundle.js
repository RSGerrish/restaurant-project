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
/*!************************************!*\
  !*** ./src/pages/sinkingspring.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import backgroundSinkingSpring from "../img/Sinking-Spring.jpg";

const sinkingspring = function() {
  //Identify main container of site
  const contentContainer = document.querySelector('.content-container');

  const mainContainer = document.createElement('div');
  mainContainer.className = "main-container";
  contentContainer.appendChild(mainContainer);

  const dimContainer = document.createElement('div');
  dimContainer.className = "dim-container";
  dimContainer.id = "dim-container";
  mainContainer.appendChild(dimContainer);

  const dimmerContainer = document.createElement('div');
  dimmerContainer.className = "dim-container";
  dimmerContainer.id = "dimmer-container";
  dimContainer.appendChild(dimmerContainer);

  const infoContainer = document.createElement('div');
  infoContainer.className = "info-container";
  dimmerContainer.appendChild(infoContainer);

  const nameTele = document.createElement('h1');
  nameTele.innerText = "SINKING SPRING - 610.678.6300";
  infoContainer.appendChild(nameTele);

  const addy = document.createElement('h4');
  addy.innerText = "2661 SHILLINGTON ROAD SINKING SPRING, PA 19608"
  infoContainer.appendChild(addy);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sinkingspring);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lua2luZ3NwcmluZy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGFBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9wYWdlcy9zaW5raW5nc3ByaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgYmFja2dyb3VuZFNpbmtpbmdTcHJpbmcgZnJvbSBcIi4uL2ltZy9TaW5raW5nLVNwcmluZy5qcGdcIjtcblxuY29uc3Qgc2lua2luZ3NwcmluZyA9IGZ1bmN0aW9uKCkge1xuICAvL0lkZW50aWZ5IG1haW4gY29udGFpbmVyIG9mIHNpdGVcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1haW4tY29udGFpbmVyXCI7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgY29uc3QgZGltQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImRpbS1jb250YWluZXJcIjtcbiAgZGltQ29udGFpbmVyLmlkID0gXCJkaW0tY29udGFpbmVyXCI7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGltQ29udGFpbmVyKTtcblxuICBjb25zdCBkaW1tZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGltbWVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGltLWNvbnRhaW5lclwiO1xuICBkaW1tZXJDb250YWluZXIuaWQgPSBcImRpbW1lci1jb250YWluZXJcIjtcbiAgZGltQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpbW1lckNvbnRhaW5lcik7XG5cbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5mby1jb250YWluZXJcIjtcbiAgZGltbWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gIGNvbnN0IG5hbWVUZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbmFtZVRlbGUuaW5uZXJUZXh0ID0gXCJTSU5LSU5HIFNQUklORyAtIDYxMC42NzguNjMwMFwiO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVUZWxlKTtcblxuICBjb25zdCBhZGR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgYWRkeS5pbm5lclRleHQgPSBcIjI2NjEgU0hJTExJTkdUT04gUk9BRCBTSU5LSU5HIFNQUklORywgUEEgMTk2MDhcIlxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHkpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmtpbmdzcHJpbmc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9