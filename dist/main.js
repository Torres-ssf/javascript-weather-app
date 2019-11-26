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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/WeatherUtils */ \"./src/utilities/WeatherUtils.js\");\n\n\nconst DomManipul = (() => {\n  const container = document.getElementById('container');\n  // const form = document.getElementById('form');\n\n  // const weatherInput = document.getElementById('weather-input');\n  const time = document.getElementById('time');\n  const date = document.getElementById('date');\n  const cityName = document.getElementById('city-name');\n  const descriptionTag = document.getElementById('w-description');\n  const mainIcon = document.getElementById('main-icon');\n  const tempTag = document.getElementById('temp');\n  const foreList = document.getElementById('fore-list');\n\n  // const onSubmitForm = (callback) => {\n  //   form.onsubmit = callback;\n  // };\n\n  // const wInputValue = () => weatherInput.value;\n\n  const setWeather = (weatherObj) => {\n\n    time.innerText = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFriendlyTime();\n    date.innerText = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFriendlyDate();\n\n    const { city, weatherArr } = weatherObj;\n    const forecastList = foreList.children;\n\n    cityName.innerText = city;\n\n    weatherArr.map((e, index) => {\n      const { temp, description, dt_txt, id } = e;\n      const backGroundStyle = `${_utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getIconUrl(id, dt_txt)} no-repeat 50% 50%`;\n\n      if (index == 0) {\n        container.style.background = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContGrad(id, temp, dt_txt);\n        descriptionTag.innerText = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].capitalize(description);\n        mainIcon.style.background = backGroundStyle;\n        mainIcon.style.backgroundSize = '168px 168px';\n        tempTag.innerHTML = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].processTemp(temp);\n      }\n      const currentItem = forecastList[index];\n\n      currentItem.children[0].innerHTML = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].friendForeTime(dt_txt);\n      currentItem.children[1].style.background = backGroundStyle;\n      currentItem.children[1].style.backgroundSize = '42px 42px';\n      currentItem.children[2].innerHTML = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].processTemp(temp);\n    });\n  }\n\n  return {\n    // onSubmitForm,\n    // wInputValue,\n    setWeather,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DomManipul);\n\n//# sourceURL=webpack:///./src/components/Dom/Dom.js?");

/***/ }),

/***/ "./src/components/GetWeather/GetWeather.js":
/*!*************************************************!*\
  !*** ./src/components/GetWeather/GetWeather.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/WeatherUtils */ \"./src/utilities/WeatherUtils.js\");\n\n\nconst GetWeather = (() => {\n  const fetchWeather = async (dataType, cityName) => {\n\n    const request = `${defaultURL}${dataType}?q=${cityName}&APPID=${API_KEY}&units=metric`;\n\n    console.log(request);\n\n    const data = processData(await fetchData(request), 1);\n\n    return data;\n  }\n\n  const fetchData = async (request) => {\n    try {\n      const response = await fetch(request, { mode: 'cors' });\n\n      if (response.ok) {\n        return response.json();\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  const processData = (rustyData, typeOfRequest) => {\n\n    const weatherObj = {};\n\n    console.log(rustyData);\n\n    switch (typeOfRequest) {\n      case _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].REQUEST_TYPE_FORECAST:\n\n        const city = rustyData['city']['name'];\n\n        weatherObj['city'] = city;\n\n        const forecastArr = [];\n\n        const list = rustyData['list'];\n\n        for (let i = 0; i < 5; i++) {\n          const item = list[i];\n          const { weather, main, dt_txt } = item;\n          const { temp } = main;\n          const { id, description } = weather[0];\n\n          forecastArr.push({\n            temp,\n            dt_txt,\n            id,\n            description,\n          });\n        }\n\n        weatherObj['weatherArr'] = forecastArr;\n        break;\n\n      default:\n        console.log('estoy default');\n    }\n\n    return weatherObj;\n  }\n\n  const defaultURL = 'http://api.openweathermap.org/data/2.5/';\n\n  const API_KEY = '5ca8840c0dee5c8795633cf806e88dfc';\n\n  return {\n    fetchWeather\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetWeather);\n\n//# sourceURL=webpack:///./src/components/GetWeather/GetWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_GetWeather_GetWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GetWeather/GetWeather */ \"./src/components/GetWeather/GetWeather.js\");\n/* harmony import */ var _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dom/Dom */ \"./src/components/Dom/Dom.js\");\n\n\n\nconst result = _components_GetWeather_GetWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchWeather('forecast', 'Sweden');\n\nresult.then(data => {\n  console.log(data);\n  _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setWeather(data);\n});\n\n// DomManipul.onSubmitForm((e) => {\n//   e.preventDefault();\n//   console.log(DomManipul.wInputValue());\n//   const result = GetWeather.fetchWeather('weather', DomManipul.wInputValue());\n//   result.then(data => {\n//     console.log('finaly');\n//     DomManipul.setWeather(data);\n//   });\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utilities/WeatherUtils.js":
/*!***************************************!*\
  !*** ./src/utilities/WeatherUtils.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst WeatherUtils = (() => {\n  const REQUEST_TYPE_FORECAST = 1;\n\n  const CLEAR_HOT_DAY_COLORS = ['#ebb382', '#d05375'];\n  const CLEAR_COOL_DAY_COLORS = ['#C5D382', '#628A4B'];\n  const CLEAR_NIGHT_COLORS = ['#215A6E', '#031425'];\n  const RAIN_COLORS = ['#6FAAD0', '#485188'];\n  const SNOW_COLORS = ['#FFFFFF', '#C5C2CD'];\n  const FOG_COLORS = ['#C2C9D3', '#596369'];\n\n  const processTemp = (temp) => {\n    return roundTemp(temp) + '&deg';\n  }\n\n  const friendForeTime = (time) => {\n    const timeArr = time.split(' ')[1];\n    return timeArr.substring(0, 5);\n  }\n\n  const capitalize = (string) => {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n  }\n\n  const roundTemp = (temp) => {\n    return Math.round(temp);\n  }\n\n  const getFriendlyDate = () => {\n    const [weekDay, month, day] = [...new Date().toString().split(' ')];\n    return `${weekDay}, ${day} ${month}`;\n  }\n\n  const getFriendlyTime = () => {\n    const [, , , , time] = [...new Date().toString().split(' ')];\n    return time.slice(0, 5);\n  }\n\n  const getContGrad = (id, temp, dt) => {\n    const condition = decipherID(id, isSunUp(dt));\n\n    let colorsArr = [];\n\n    if (condition === 'clear' || condition === 'clouds') {\n      colorsArr = temp > 26 ? CLEAR_HOT_DAY_COLORS\n        : CLEAR_COOL_DAY_COLORS\n    } else if (condition === 'clear-night' || condition === 'clouds-night') {\n      colorsArr = CLEAR_NIGHT_COLORS;\n    } else if (condition === 'thunderstorm' || condition === 'drizzle' || condition === 'rain') {\n      colorsArr = RAIN_COLORS;\n    } else if (condition === 'snow') {\n      colorsArr = SNOW_COLORS;\n    } else if (condition === 'mist') {\n      colorsArr = FOG_COLORS;\n    }\n\n    return generateGradient(colorsArr[0], colorsArr[1]);\n  }\n\n  const generateGradient = (color1, color2) => {\n    return `linear-gradient(145deg, ${color1} 20%, ${color2} 80%)`;\n  }\n\n  const getIconUrl = (id, dt) => {\n    const condition = decipherID(id, isSunUp(dt));\n    return `url(../assets/weatherIcons/${condition}.svg)`;\n  }\n\n  const decipherID = (id, sunUp) => {\n    if (id < 233) {\n      return 'thunderstorm';\n    } else if (id < 322) {\n      return 'drizzle';\n    } else if (id < 532) {\n      return 'rain';\n    } else if (id < 623) {\n      return 'snow';\n    } else if (id < 782) {\n      return 'mist';\n    } else if (id == 800) {\n      return sunUp ? 'clear' : 'clear-night';\n    } else {\n      return sunUp ? 'clouds' : 'clouds-night';\n    }\n  }\n\n  const isSunUp = (dt) => {\n    const hour = parseInt(dt.split(' ')[1].substring(0, 2));\n    console.log(hour);\n    return hour >= 6 && hour < 21;\n  }\n\n  return {\n    REQUEST_TYPE_FORECAST,\n    processTemp,\n    friendForeTime,\n    capitalize,\n    getIconUrl,\n    getContGrad,\n    getFriendlyDate,\n    getFriendlyTime\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherUtils);\n\n//# sourceURL=webpack:///./src/utilities/WeatherUtils.js?");

/***/ })

/******/ });