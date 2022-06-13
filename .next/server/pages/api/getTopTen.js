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
exports.id = "pages/api/getTopTen";
exports.ids = ["pages/api/getTopTen"];
exports.modules = {

/***/ "(api)/./pages/api/getTopTen.js":
/*!********************************!*\
  !*** ./pages/api/getTopTen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst ApiKey = \"47d03e5e-4730-4601-85d2-92368a6be061\";\nfunction handler(req, res) {\n    const getData = async ()=>{\n        const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${ApiKey}`, {\n            method: \"GET\",\n            headers: {\n                Accept: \"*/*\"\n            }\n        });\n        const data = await response.json();\n        res.status(200).json({\n            data\n        });\n    };\n    getData();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VG9wVGVuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxFQUE2RTtBQUM3RSxLQUFLLENBQUNBLE1BQU0sR0FBRyxDQUFzQztBQUN0QyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN6QyxLQUFLLENBQUNDLE9BQU8sYUFBZSxDQUFDO1FBQzNCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUN6QixvRkFBb0YsRUFBRU4sTUFBTSxJQUM3RixDQUFDO1lBQ0NPLE1BQU0sRUFBRSxDQUFLO1lBQ2JDLE9BQU8sRUFBRSxDQUFDO2dCQUNSQyxNQUFNLEVBQUUsQ0FBSztZQUNmLENBQUM7UUFDSCxDQUFDO1FBR0gsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDTCxRQUFRLENBQUNNLElBQUk7UUFFaENSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUM7WUFBQ0QsSUFBSTtRQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVETixPQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J0cy1jb2lubWFya2V0Y2FwLWJsb2NrY2hhaW4vLi9wYWdlcy9hcGkvZ2V0VG9wVGVuLmpzPzk1YTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmNvbnN0IEFwaUtleSA9IFwiNDdkMDNlNWUtNDczMC00NjAxLTg1ZDItOTIzNjhhNmJlMDYxXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3Byby1hcGkuY29pbm1hcmtldGNhcC5jb20vdjEvY3J5cHRvY3VycmVuY3kvbGlzdGluZ3MvbGF0ZXN0P0NNQ19QUk9fQVBJX0tFWT0ke0FwaUtleX1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6IFwiKi8qXCIsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSk7XG4gIH07XG5cbiAgZ2V0RGF0YSgpO1xufVxuIl0sIm5hbWVzIjpbIkFwaUtleSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJnZXREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJkYXRhIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTopTen.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTopTen.js"));
module.exports = __webpack_exports__;

})();