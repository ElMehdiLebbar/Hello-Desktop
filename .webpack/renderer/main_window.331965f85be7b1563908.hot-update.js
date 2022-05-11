"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatehello_seule"]("main_window",{

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var seule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seule */ \"./node_modules/seule/index.js\");\n/* harmony import */ var seule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seule__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var seule_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seule/model */ \"./node_modules/seule/model/index.js\");\n/* harmony import */ var seule_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(seule_model__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n//Importing an Instance class from the Seule module to create new Seule Application\n\n\n//You can not use CSS files directly in html pages, but you can call it with _Css method\n\n\n\n(0,seule_model__WEBPACK_IMPORTED_MODULE_2__._Css)(_css_main_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//Importing css for a specific application\n\n\nnew seule__WEBPACK_IMPORTED_MODULE_0__.Instance({\n    el: (\"#app\"),\n    style:_css_index_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    data:{\n        greeting: \"...\"\n    },\n    async handlers(app){\n        //For security reasons you cannot select element inside #app, otherwise we need to use Scope Selector\n        const {Scope} = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! seule/selectors */ \"./node_modules/seule/selectors/index.js\", 23));\n\n        //To use Seule events, we need to import Events function from events module\n        const {Events} = await __webpack_require__.e(/*! import() */ \"node_modules_seule_events_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! seule/events */ \"./node_modules/seule/events/index.js\", 23));\n        //Initialize the event methods\n        Events();\n\n        const\n            scope = Scope(app),\n            btn = scope.Select(\"button\");\n\n        \n        btn.Click(()=> {\n            const greeting_msg = window.myAPI.sayHello(\"El Mehdi\");\n        })\n\n\n    }\n})\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVuZGVyZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQytCOztBQUUvQjtBQUNxQzs7QUFFTDtBQUNoQyxpREFBSSxDQUFDLHFEQUFROztBQUViO0FBQ2lDOztBQUVqQyxJQUFJLDJDQUFRO0FBQ1o7QUFDQSxVQUFVLHNEQUFHO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZSxPQUFPLFFBQVEsNEpBQXlCOztBQUV2RDtBQUNBLGVBQWUsUUFBUSxRQUFRLGlNQUFzQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby5zZXVsZS8uL3NyYy9yZW5kZXJlci5qcz81YmQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0aW5nIGFuIEluc3RhbmNlIGNsYXNzIGZyb20gdGhlIFNldWxlIG1vZHVsZSB0byBjcmVhdGUgbmV3IFNldWxlIEFwcGxpY2F0aW9uXG5pbXBvcnQge0luc3RhbmNlfSBmcm9tIFwic2V1bGVcIjtcblxuLy9Zb3UgY2FuIG5vdCB1c2UgQ1NTIGZpbGVzIGRpcmVjdGx5IGluIGh0bWwgcGFnZXMsIGJ1dCB5b3UgY2FuIGNhbGwgaXQgd2l0aCBfQ3NzIG1ldGhvZFxuaW1wb3J0IG1haW5fY3NzIGZyb20gXCIuL2Nzcy9tYWluLmNzc1wiXG5cbmltcG9ydCB7X0Nzc30gZnJvbSBcInNldWxlL21vZGVsXCJcbl9Dc3MobWFpbl9jc3MpO1xuXG4vL0ltcG9ydGluZyBjc3MgZm9yIGEgc3BlY2lmaWMgYXBwbGljYXRpb25cbmltcG9ydCBjc3MgZnJvbSBcIi4vY3NzL2luZGV4LmNzc1wiXG5cbm5ldyBJbnN0YW5jZSh7XG4gICAgZWw6IChcIiNhcHBcIiksXG4gICAgc3R5bGU6Y3NzLFxuICAgIGRhdGE6e1xuICAgICAgICBncmVldGluZzogXCIuLi5cIlxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlcnMoYXBwKXtcbiAgICAgICAgLy9Gb3Igc2VjdXJpdHkgcmVhc29ucyB5b3UgY2Fubm90IHNlbGVjdCBlbGVtZW50IGluc2lkZSAjYXBwLCBvdGhlcndpc2Ugd2UgbmVlZCB0byB1c2UgU2NvcGUgU2VsZWN0b3JcbiAgICAgICAgY29uc3Qge1Njb3BlfSA9IGF3YWl0IGltcG9ydChcInNldWxlL3NlbGVjdG9yc1wiKTtcblxuICAgICAgICAvL1RvIHVzZSBTZXVsZSBldmVudHMsIHdlIG5lZWQgdG8gaW1wb3J0IEV2ZW50cyBmdW5jdGlvbiBmcm9tIGV2ZW50cyBtb2R1bGVcbiAgICAgICAgY29uc3Qge0V2ZW50c30gPSBhd2FpdCBpbXBvcnQoXCJzZXVsZS9ldmVudHNcIik7XG4gICAgICAgIC8vSW5pdGlhbGl6ZSB0aGUgZXZlbnQgbWV0aG9kc1xuICAgICAgICBFdmVudHMoKTtcblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgc2NvcGUgPSBTY29wZShhcHApLFxuICAgICAgICAgICAgYnRuID0gc2NvcGUuU2VsZWN0KFwiYnV0dG9uXCIpO1xuXG4gICAgICAgIFxuICAgICAgICBidG4uQ2xpY2soKCk9PiB7XG4gICAgICAgICAgICBjb25zdCBncmVldGluZ19tc2cgPSB3aW5kb3cubXlBUEkuc2F5SGVsbG8oXCJFbCBNZWhkaVwiKTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxufSlcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/renderer.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("09850afca37187988627")
/******/ })();
/******/ 
/******/ }
);