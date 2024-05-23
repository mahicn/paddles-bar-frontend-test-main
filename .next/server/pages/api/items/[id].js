"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/items/[id]";
exports.ids = ["pages/api/items/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/items/[id].js":
/*!*********************************!*\
  !*** ./pages/api/items/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    const file = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(process.cwd() + \"/public/db.json\", \"utf8\");\n    const data = JSON.parse(file);\n    const record = data.items.find((record)=>record.id === Number(req.query.id));\n    res.status(200).json({\n        data: record\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaXRlbXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBNkU7QUFFekM7QUFHckIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsT0FBTSxNQUFNSixpREFBVyxDQUFDTSxRQUFRQyxHQUFHLEtBQUssbUJBQW1CO0lBRWpFLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ047SUFFeEIsTUFBTU8sU0FBT0gsS0FBS0ksS0FBSyxDQUFDQyxJQUFJLENBQUNGLENBQUFBLFNBQVNBLE9BQU9HLEVBQUUsS0FBS0MsT0FBT2IsSUFBSWMsS0FBSyxDQUFDRixFQUFFO0lBRXZFWCxJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVWLE1BQU1HO0lBQU87QUFDdEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29uY2UtdXBvbi1hLXRlc3QvLi9wYWdlcy9hcGkvaXRlbXMvW2lkXS5qcz8yOWFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblxuICAgIGNvbnN0IGZpbGU9IGF3YWl0IGZzLnJlYWRGaWxlKHByb2Nlc3MuY3dkKCkgKyAnL3B1YmxpYy9kYi5qc29uJywgJ3V0ZjgnKVxuXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZmlsZSk7XG5cbiAgICBjb25zdCByZWNvcmQ9ZGF0YS5pdGVtcy5maW5kKHJlY29yZD0+IHJlY29yZC5pZCA9PT0gTnVtYmVyKHJlcS5xdWVyeS5pZCkpXG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlY29yZCB9KVxuICB9XG4gICJdLCJuYW1lcyI6WyJwcm9taXNlcyIsImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGUiLCJyZWFkRmlsZSIsInByb2Nlc3MiLCJjd2QiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVjb3JkIiwiaXRlbXMiLCJmaW5kIiwiaWQiLCJOdW1iZXIiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/items/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/items/[id].js"));
module.exports = __webpack_exports__;

})();