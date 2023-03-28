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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//api/new-meetup\n//POST /api/new-meetup\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        try {\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://ajquidasol615:AjaBoy615@cluster0.03hsvqo.mongodb.net/meetups?retryWrites=true&w=majority\");\n            const db = client.db();\n            const meetupsCollection = db.collection(\"meetups\");\n            const result = await meetupsCollection.insertOne({\n                data\n            });\n            console.log(result);\n            client.close();\n            res.status(201).json({\n                message: \"New meetup added!\"\n            });\n        } catch (e) {\n            res.status(500).json({\n                message: \"An error occured!\" + e\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBRWdCO0FBRXRDLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FDdEMsd0dBQXdHLENBQ3pHO1lBQ0QsTUFBTVMsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtZQUV0QixNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQ2xELE1BQU1DLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBUyxDQUFDO2dCQUFFUixJQUFJO2FBQUUsQ0FBQztZQUMxRFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1lBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDO1lBRWZiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxtQkFBbUI7YUFBRSxDQUFDLENBQUM7UUFDekQsRUFBRSxPQUFPQyxDQUFDLEVBQUU7WUFDVmpCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxtQkFBbUIsR0FBR0MsQ0FBQzthQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZW5CLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vYXBpL25ldy1tZWV0dXBcclxuLy9QT1NUIC9hcGkvbmV3LW1lZXR1cFxyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICAnbW9uZ29kYitzcnY6Ly9hanF1aWRhc29sNjE1OkFqYUJveTYxNUBjbHVzdGVyMC4wM2hzdnFvLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZSh7IGRhdGEgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ05ldyBtZWV0dXAgYWRkZWQhJyB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJlZCEnICsgZSB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();