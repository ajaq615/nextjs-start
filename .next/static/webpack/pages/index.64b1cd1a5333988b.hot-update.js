"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\nvar _this = undefined;\n\n\nvar imageLink = \"https://www.peninsula.com/-/media/images/paris/new/dining/loiseau-blanc/ppr-oiseau-blanc-interior-evening-1074/ppr-oiseaublanc.png\";\nvar imageLink2 = \"https://media.timeout.com/images/105387012/750/422/image.jpg\";\nvar imageLink3 = \"https://media.architecturaldigest.com/photos/5852f922dcb583e908275de0/master/w_800%2Cc_limit/paris-restaurants-03.jpg\";\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: imageLink,\n        address: \"35 National Highway, Quezon, San Isidro, Isabela\",\n        description: \"This a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: imageLink2,\n        address: \"35 National Highway, Quezon, San Isidro, Isabela\",\n        description: \"This a second meetup\"\n    },\n    {\n        id: \"m3\",\n        title: \"A Third Meetup\",\n        image: imageLink3,\n        address: \"35 National Highway, Quezon, San Isidro, Isabela\",\n        description: \"This a third meetup\"\n    }, \n];\nvar HomePage = function(props) {\n    var isEmpty = JSON.stringify(props.meetups) === \"{}\";\n    console.log(isEmpty);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\AJ\\\\React\\\\nextjs-start\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            isEmpty ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"No meetups found!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\AJ\\\\React\\\\nextjs-start\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"C:\\\\AJ\\\\React\\\\nextjs-start\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = HomePage;\nvar __N_SSG = true;\n// export const getServerSideProps = (context) => {\n//     const req = context.req;\n//     const res = context.res;\n//     return {\n//         props: {\n//             meetups: DUMMY_MEETUPS\n//         }\n//     }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQzBEO0FBRTFELElBQU1DLFNBQVMsR0FDYixvSUFBb0k7QUFDdEksSUFBTUMsVUFBVSxHQUNkLDhEQUE4RDtBQUNoRSxJQUFNQyxVQUFVLEdBQ2QsdUhBQXVIO0FBQ3pILElBQU1DLGFBQWEsR0FBRztJQUNwQjtRQUNFQyxFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxLQUFLLEVBQUVOLFNBQVM7UUFDaEJPLE9BQU8sRUFBRSxrREFBa0Q7UUFDM0RDLFdBQVcsRUFBRSxxQkFBcUI7S0FDbkM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxLQUFLLEVBQUVMLFVBQVU7UUFDakJNLE9BQU8sRUFBRSxrREFBa0Q7UUFDM0RDLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxLQUFLLEVBQUVKLFVBQVU7UUFDakJLLE9BQU8sRUFBRSxrREFBa0Q7UUFDM0RDLFdBQVcsRUFBRSxxQkFBcUI7S0FDbkM7Q0FDRjtBQUVELElBQU1DLFFBQVEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDMUIsSUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsS0FBSyxDQUFDSSxPQUFPLENBQUMsS0FBSyxJQUFJO0lBQ3REQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7SUFDckIscUJBQ0U7OzBCQUNFLDhEQUFDTSxJQUFFOzBCQUFDLFdBQVM7Ozs7O3FCQUFLO1lBQ2pCTixPQUFPLGlCQUNOLDhEQUFDTyxJQUFFOzBCQUFDLG1CQUFpQjs7Ozs7cUJBQUssaUJBRTFCLDhEQUFDbkIsc0VBQVU7Z0JBQUNlLE9BQU8sRUFBRUosS0FBSyxDQUFDSSxPQUFPOzs7OztxQkFBSTs7b0JBR3ZDLENBQ0g7QUFDSixDQUFDO0FBZEtMLEtBQUFBLFFBQVE7O0FBeUNkLG1EQUFtRDtBQUNuRCwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIscUNBQXFDO0FBQ3JDLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSTtBQUVKLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcblxyXG5jb25zdCBpbWFnZUxpbmsgPVxyXG4gICdodHRwczovL3d3dy5wZW5pbnN1bGEuY29tLy0vbWVkaWEvaW1hZ2VzL3BhcmlzL25ldy9kaW5pbmcvbG9pc2VhdS1ibGFuYy9wcHItb2lzZWF1LWJsYW5jLWludGVyaW9yLWV2ZW5pbmctMTA3NC9wcHItb2lzZWF1YmxhbmMucG5nJztcclxuY29uc3QgaW1hZ2VMaW5rMiA9XHJcbiAgJ2h0dHBzOi8vbWVkaWEudGltZW91dC5jb20vaW1hZ2VzLzEwNTM4NzAxMi83NTAvNDIyL2ltYWdlLmpwZyc7XHJcbmNvbnN0IGltYWdlTGluazMgPVxyXG4gICdodHRwczovL21lZGlhLmFyY2hpdGVjdHVyYWxkaWdlc3QuY29tL3Bob3Rvcy81ODUyZjkyMmRjYjU4M2U5MDgyNzVkZTAvbWFzdGVyL3dfODAwJTJDY19saW1pdC9wYXJpcy1yZXN0YXVyYW50cy0wMy5qcGcnO1xyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiAnbTEnLFxyXG4gICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICBpbWFnZTogaW1hZ2VMaW5rLFxyXG4gICAgYWRkcmVzczogJzM1IE5hdGlvbmFsIEhpZ2h3YXksIFF1ZXpvbiwgU2FuIElzaWRybywgSXNhYmVsYScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgYSBmaXJzdCBtZWV0dXAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdtMicsXHJcbiAgICB0aXRsZTogJ0EgU2Vjb25kIE1lZXR1cCcsXHJcbiAgICBpbWFnZTogaW1hZ2VMaW5rMixcclxuICAgIGFkZHJlc3M6ICczNSBOYXRpb25hbCBIaWdod2F5LCBRdWV6b24sIFNhbiBJc2lkcm8sIElzYWJlbGEnLFxyXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGEgc2Vjb25kIG1lZXR1cCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ20zJyxcclxuICAgIHRpdGxlOiAnQSBUaGlyZCBNZWV0dXAnLFxyXG4gICAgaW1hZ2U6IGltYWdlTGluazMsXHJcbiAgICBhZGRyZXNzOiAnMzUgTmF0aW9uYWwgSGlnaHdheSwgUXVlem9uLCBTYW4gSXNpZHJvLCBJc2FiZWxhJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBhIHRoaXJkIG1lZXR1cCcsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgaXNFbXB0eSA9IEpTT04uc3RyaW5naWZ5KHByb3BzLm1lZXR1cHMpID09PSAne30nO1xyXG4gIGNvbnNvbGUubG9nKGlzRW1wdHkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cclxuICAgICAge2lzRW1wdHkgPyAoXHJcbiAgICAgICAgPGgyPk5vIG1lZXR1cHMgZm91bmQhPC9oMj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAnbW9uZ29kYitzcnY6Ly9hanF1aWRhc29sNjE1OkFqYUJveTYxNUBjbHVzdGVyMC4wM2hzdnFvLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gKGNvbnRleHQpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsImltYWdlTGluayIsImltYWdlTGluazIiLCJpbWFnZUxpbmszIiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJpc0VtcHR5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lZXR1cHMiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});