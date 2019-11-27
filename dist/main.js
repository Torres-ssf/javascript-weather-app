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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/WeatherUtils */ \"./src/utilities/WeatherUtils.js\");\n\n\nconst DomManipul = (() => {\n  const container = document.getElementById('container');\n  const loaderContainer = document.getElementById('loader-container');\n\n  const form = document.getElementById('form');\n  const submitButton = document.getElementById('form-submit');\n  submitButton.addEventListener('animationend', (event) => {\n    if (event.animationName === 'disappear-from-position') {\n      submitButton.classList.remove('appear-submit');\n      submitButton.classList.remove('disapear-submit');\n    }\n  });\n\n  const weatherInput = document.getElementById('weather-input');\n  weatherInput.addEventListener('animationend', (event) => {\n    if (event.animationName === 'hide-from-left') {\n      weatherInput.classList.remove('input-appear');\n      weatherInput.classList.remove('input-disappear');\n    }\n  });\n\n  const sandwButton = document.getElementById('sandw');\n  sandwButton.addEventListener('animationend', (event) => {\n    if (event.animationName === 'unturn') {\n      sandwButton.classList.remove('sand-turn');\n      sandwButton.classList.remove('sand-turn-back');\n    }\n  });\n  sandwButton.onclick = (e) => {\n    const classArr = Array.from(e.target.classList);\n    if (classArr.includes('sand-turn')) {\n      e.target.classList.add('sand-turn-back');\n      weatherInput.classList.add('input-disappear');\n      submitButton.classList.add('disapear-submit');\n    } else {\n      e.target.classList.add('sand-turn');\n      weatherInput.classList.add('input-appear');\n      submitButton.classList.add('appear-submit');\n    }\n  };\n\n  const time = document.getElementById('time');\n\n  const date = document.getElementById('date');\n  date.addEventListener('animationend', (event) => {\n    if (event.animationName === 'appear-from-sky') {\n      date.classList.remove('animate-from-sky');\n    }\n  });\n\n  const cityName = document.getElementById('city-name');\n  cityName.addEventListener('animationend', (event) => {\n    if (event.animationName === 'appear-from-sky') {\n      cityName.classList.remove('animate-from-sky');\n    }\n  });\n\n  const descriptionTag = document.getElementById('w-description');\n  descriptionTag.addEventListener('animationend', (event) => {\n    if (event.animationName === 'appear-from-sky') {\n      descriptionTag.classList.remove('animate-from-sky');\n    }\n  });\n\n  const mainIcon = document.getElementById('main-icon');\n  mainIcon.addEventListener('animationend', (event) => {\n    if (event.animationName === 'appear-from-position') {\n      mainIcon.classList.remove('animate-forecast');\n    }\n  });\n\n  const tempTag = document.getElementById('temp');\n  tempTag.addEventListener('animationend', (event) => {\n    if (event.animationName === 'appear-from-position') {\n      tempTag.classList.remove('animate-forecast');\n    }\n  });\n\n  const foreList = document.getElementById('fore-list');\n  const listArr = Array.from(foreList.children);\n  listArr.forEach((elem) => {\n    elem.addEventListener('animationend', (event) => {\n      if (event.animationName === 'appear-from-position') {\n        elem.classList.remove('animate-forecast');\n      }\n    });\n  });\n\n  const onSubmitForm = (callback) => {\n    form.onsubmit = callback;\n  };\n\n  const toggleLoaderContainer = () => {\n    loaderContainer.classList.toggle('invisible');\n  };\n\n  const toggleWeatherAnimation = () => {\n    date.classList.add('animate-from-sky');\n    cityName.classList.add('animate-from-sky');\n    descriptionTag.classList.add('animate-from-sky');\n    mainIcon.classList.add('animate-forecast');\n    tempTag.classList.add('animate-forecast');\n  };\n\n  const toggleForecastAnimation = () => {\n    let delay = 0;\n    listArr.forEach((elem) => {\n      elem.classList.add('animate-forecast');\n      elem.style.animationDelay = `${delay}ms`;\n      delay += 200;\n    });\n  };\n\n  const wInputValue = () => weatherInput.value;\n\n  const setWeather = (weatherObj, requestType) => {\n    time.innerText = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFriendlyTime();\n    date.innerText = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFriendlyDate();\n\n    let city;\n    let description;\n    let id;\n    let temp;\n    let iconPath;\n\n    switch (requestType) {\n      case 'weather': {\n        ({\n          city,\n          description,\n          id,\n          temp,\n        } = weatherObj);\n\n        container.style.background = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContGrad(id, temp);\n\n        cityName.innerHTML = city;\n\n        descriptionTag.innerText = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].capitalize(description);\n\n        iconPath = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getIconUrl(id);\n        mainIcon.style.background = `${iconPath} no-repeat 50% 50%`;\n        mainIcon.style.backgroundSize = '168px 168px';\n\n        tempTag.innerHTML = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].processTemp(temp);\n        break;\n      }\n\n      case 'forecast': {\n        const { weatherArr } = weatherObj;\n        const forecastList = foreList.children;\n\n        weatherArr.forEach((e, index) => {\n          ({\n            temp,\n            id,\n          } = e);\n\n          const { dtTxt } = e;\n\n          iconPath = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getIconUrl(id, dtTxt);\n\n          const currentItem = forecastList[index];\n\n          currentItem.children[0].innerHTML = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].friendForeTime(dtTxt);\n          currentItem.children[1].style.background = `${iconPath} no-repeat 50% 50%`;\n          currentItem.children[1].style.backgroundSize = '42px 42px';\n          currentItem.children[2].innerHTML = _utilities_WeatherUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].processTemp(temp);\n        });\n        break;\n      }\n      default:\n    }\n  };\n\n  const setErrorMessage = () => {\n    alert('Invalid input, please try a valid one!'); // eslint-disable-line\n  };\n\n  return {\n    onSubmitForm,\n    toggleLoaderContainer,\n    wInputValue,\n    setWeather,\n    setErrorMessage,\n    toggleForecastAnimation,\n    toggleWeatherAnimation,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DomManipul);\n\n\n//# sourceURL=webpack:///./src/components/Dom/Dom.js?");

/***/ }),

/***/ "./src/components/GetWeather/GetWeather.js":
/*!*************************************************!*\
  !*** ./src/components/GetWeather/GetWeather.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GetWeather = (() => {\n  const defaultURL = 'http://api.openweathermap.org/data/2.5/';\n\n  const API_KEY = '5ca8840c0dee5c8795633cf806e88dfc';\n\n  const processData = (rustyData, requestType) => {\n    const weatherObj = {};\n\n    switch (requestType) {\n      case 'weather': {\n        const { name, weather, main } = rustyData;\n        const { description, id } = weather[0];\n        const { temp } = main;\n\n        weatherObj.city = name;\n        weatherObj.description = description;\n        weatherObj.id = id;\n        weatherObj.temp = temp;\n\n        break;\n      }\n      case 'forecast': {\n        const { list } = rustyData;\n\n        const forecastArr = [];\n\n        for (let i = 0; i < 5; i += 1) {\n          const item = list[i];\n          const { weather, main } = item;\n          const dtTxt = item.dt_txt;\n          const { temp } = main;\n          const { id } = weather[0];\n\n          forecastArr.push({\n            temp,\n            dtTxt,\n            id,\n          });\n        }\n\n        weatherObj.weatherArr = forecastArr;\n        break;\n      }\n      default:\n\n    }\n\n    weatherObj.requestType = requestType;\n\n    return weatherObj;\n  };\n\n  const fetchData = async (request) => { // eslint-disable-line\n    try {\n      const response = await fetch(request, { mode: 'cors' });\n\n      if (response.ok) {\n        return response.json();\n      }\n    } catch (e) {\n      return undefined;\n    }\n    return undefined;\n  };\n\n  const fetchWeather = async (requestType, cityName) => {\n    let request = `${defaultURL}${requestType}?q=${cityName}&APPID=${API_KEY}&units=metric`;\n\n    if (requestType === 'forecast') request += '&cnt=5';\n\n    const data = processData(await fetchData(request), requestType);\n\n    return data;\n  };\n\n  return {\n    fetchWeather,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetWeather);\n\n\n//# sourceURL=webpack:///./src/components/GetWeather/GetWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_GetWeather_GetWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GetWeather/GetWeather */ \"./src/components/GetWeather/GetWeather.js\");\n/* harmony import */ var _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dom/Dom */ \"./src/components/Dom/Dom.js\");\n\n\n\nconst initFetch = (cityName) => {\n  _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleLoaderContainer();\n  const weather = _components_GetWeather_GetWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchWeather('weather', cityName);\n  const forecast = _components_GetWeather_GetWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchWeather('forecast', cityName);\n\n  weather.then((data) => {\n    _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setWeather(data, 'weather');\n    _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleLoaderContainer();\n    _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleWeatherAnimation();\n  });\n\n  forecast.then((data) => {\n    _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setWeather(data, 'forecast');\n    _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleForecastAnimation();\n  }).catch(() => {\n    _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setErrorMessage();\n    _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleLoaderContainer();\n  });\n};\n\n_components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onSubmitForm((e) => {\n  e.preventDefault();\n  const cityName = _components_Dom_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wInputValue();\n  initFetch(cityName);\n});\n\ninitFetch('California');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utilities/WeatherUtils.js":
/*!***************************************!*\
  !*** ./src/utilities/WeatherUtils.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst WeatherUtils = (() => {\n  const CLEAR_HOT_DAY_COLORS = ['#ebb382', '#d05375'];\n  const CLEAR_COOL_DAY_COLORS = ['#C5D382', '#628A4B'];\n  const CLEAR_NIGHT_COLORS = ['#215A6E', '#031425'];\n  const RAIN_COLORS = ['#6FAAD0', '#485188'];\n  const SNOW_COLORS = ['#FFFFFF', '#C5C2CD'];\n  const FOG_COLORS = ['#C2C9D3', '#596369'];\n\n  const roundTemp = temp => Math.round(temp);\n\n  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);\n\n  const generateGradient = (color1, color2) => `linear-gradient(145deg, ${color1} 20%, ${color2} 80%)`;\n\n  const friendForeTime = (time) => {\n    const timeArr = time.split(' ')[1];\n    return timeArr.substring(0, 5);\n  };\n\n  const getFriendlyDate = () => {\n    const [weekDay, month, day] = [...new Date().toString().split(' ')];\n    return `${weekDay}, ${day} ${month}`;\n  };\n\n  const getFriendlyTime = () => {\n    const [, , , , time] = [...new Date().toString().split(' ')];\n    return time.slice(0, 5);\n  };\n\n  const processTemp = temp => `${roundTemp(temp)}&deg`;\n\n  const decipherID = (id, sunUp) => {\n    if (id < 233) {\n      return 'thunderstorm';\n    } if (id < 322) {\n      return 'drizzle';\n    } if (id < 532) {\n      return 'rain';\n    } if (id < 623) {\n      return 'snow';\n    } if (id < 782) {\n      return 'mist';\n    } if (id === 800) {\n      return sunUp ? 'clear' : 'clear-night';\n    }\n    return sunUp ? 'clouds' : 'clouds-night';\n  };\n\n  const isSunUp = (dt) => {\n    const hour = dt === undefined ? new Date().getHours()\n      : parseInt(dt.split(' ')[1].substring(0, 2), 6);\n\n    return hour >= 6 && hour < 19;\n  };\n\n  const getContGrad = (id, temp, dt) => {\n    const condition = decipherID(id, isSunUp(dt));\n\n    let colorsArr = [];\n\n    if (condition === 'clear' || condition === 'clouds') {\n      colorsArr = temp > 26 ? CLEAR_HOT_DAY_COLORS\n        : CLEAR_COOL_DAY_COLORS;\n    } else if (condition === 'clear-night' || condition === 'clouds-night') {\n      colorsArr = CLEAR_NIGHT_COLORS;\n    } else if (condition === 'thunderstorm' || condition === 'drizzle' || condition === 'rain') {\n      colorsArr = RAIN_COLORS;\n    } else if (condition === 'snow') {\n      colorsArr = SNOW_COLORS;\n    } else if (condition === 'mist') {\n      colorsArr = FOG_COLORS;\n    }\n\n    return generateGradient(colorsArr[0], colorsArr[1]);\n  };\n\n  const getIconUrl = (id, dt) => {\n    const condition = decipherID(id, isSunUp(dt));\n    return `url(../assets/weatherIcons/${condition}.svg)`;\n  };\n\n  return {\n    processTemp,\n    friendForeTime,\n    capitalize,\n    getIconUrl,\n    getContGrad,\n    getFriendlyDate,\n    getFriendlyTime,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherUtils);\n\n\n//# sourceURL=webpack:///./src/utilities/WeatherUtils.js?");

/***/ })

/******/ });