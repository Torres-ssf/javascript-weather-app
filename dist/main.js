/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Dom/Dom.js":
/*!***********************************!*\
  !*** ./src/components/Dom/Dom.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DomManipul = (() => {\n  // const form = document.getElementById('form');\n\n  // const weatherInput = document.getElementById('weather-input');\n\n  const cityName = document.getElementById('city-name');\n  const wDescription = document.getElementById('w-description');\n  const tempCur = document.getElementById('temp');\n  // const tempMin = document.getElementById('temp-min');\n  // const tempMax = document.getElementById('temp-max');\n  \n\n  // const onSubmitForm = (callback) => {\n  //   form.onsubmit = callback;\n  // };\n\n  // const wInputValue = () => weatherInput.value;\n\n  const setWeather = (weatherObj) => {\n    const { temp, temp_min, temp_max } = weatherObj['main'];\n    const { name } = weatherObj;\n    const { description } = weatherObj['weather'];\n\n    cityName.innerText = name;\n    // tempMin.innerText = temp_min;\n    // tempMax.innerText = temp_max;\n    tempCur.innerText = temp;\n    wDescription.innerText = description;\n  }\n\n  return {\n    // onSubmitForm,\n    // wInputValue,\n    setWeather,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DomManipul);\n\n//# sourceURL=webpack:///./src/components/Dom/Dom.js?");

/***/ }),

/***/ "./src/components/GetWeather/GetWeather.js":
/*!*************************************************!*\
  !*** ./src/components/GetWeather/GetWeather.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GetWeather = (() => {\n  const fetchWeather = async (dataType, cityName) => {\n\n    const request = `${defaultURL}${dataType}?q=${cityName}&APPID=${API_KEY}`;\n\n    const data = processData(await fetchData(request));\n\n    console.log(data);\n\n    return data;\n  }\n\n  const fetchData = async (request) => {\n    try {\n      const response = await fetch(request, { mode: 'cors' });\n\n      if (response.ok) {\n        return response.json();\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  const processData = (rustyData) => {\n    console.log(rustyData);\n    const { name, main } = rustyData;\n    const weather = rustyData['weather'][0];\n    return {\n      name,\n      main,\n      weather\n    };\n  }\n\n  const defaultURL = 'http://api.openweathermap.org/data/2.5/';\n\n  const API_KEY = '5ca8840c0dee5c8795633cf806e88dfc';\n\n  return {\n    fetchWeather\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetWeather);\n\n//# sourceURL=webpack:///./src/components/GetWeather/GetWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_GetWeather_GetWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GetWeather/GetWeather */ \"./src/components/GetWeather/GetWeather.js\");\n/* harmony import */ var _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dom/Dom */ \"./src/components/Dom/Dom.js\");\n\n\n\nconst result = _components_GetWeather_GetWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchWeather('weather', 'Boston');\n\nresult.then(data => {\n  console.log(data);\n  _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setWeather(data);\n});\n\n// DomManipul.onSubmitForm((e) => {\n//   e.preventDefault();\n//   console.log(DomManipul.wInputValue());\n//   const result = GetWeather.fetchWeather('weather', DomManipul.wInputValue());\n//   result.then(data => {\n//     console.log('finaly');\n//     DomManipul.setWeather(data);\n//   });\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });