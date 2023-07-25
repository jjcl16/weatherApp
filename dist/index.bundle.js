(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  padding: 0px;
  margin: 0px;
  background-size:     cover;                      /* <------ */
  background-repeat:   no-repeat;
  background-position: center center;

}

#locactionAndSwitchContainer{
  display: flex;
  gap: 2%;
  justify-content: center;
  align-items: center;
  height: 10vh;
  z-index: 1;
}

#top {
  display: flex;
  flex-direction: column;
  gap: 2%;
  justify-content: center;
  align-items: center;  
}

#location{
  height: 4.6vh;
  width: 20vw;
  border: 2px solid black;
  border-radius: 8px;
  text-align: center;
  color: white;
  background-color: rgba(0,0,0,0.2);
  min-width: 120px;
  max-width: 150px;
  text-shadow:  -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
}

::placeholder{
  color: white;
  text-shadow:  -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
}

#switchCF, #switchDH {
  display: flex;
  width: 20vw;
  height: 5vh;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.2);  
  z-index: 1;
  gap: 2%;
  position: relative;  
  color: white;
  min-width: 120px;
  max-width: 150px;
}

#switchCelsius , #switchFarenheit, #switchHour, #switchDay{
  display: flex;
  height: 6vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-shadow:  -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
}

#switchSelector, #switchSelectorDH{
  position: absolute;
  left: 0%;
  border-radius: 8px;
  height: 5vh;
  width: 50%;
  transition: left 0.3s;
  cursor: pointer;
  background-color: rgba(255,255,255,0.3);
  z-index: 2;  
}

#switchSelector.farenheit, #switchSelectorDH.hours{
  left: 50%;
}

#weatherImage{
  height: 100px;
  width: 100px;
  border: none;
}

#dashboard{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;  
  margin: 1%;
}

#temp{
  font-size: xx-large;
  font-weight: 900;
  text-align: left;
}

#footer{
  display: flex;
  flex-direction: column;
  height: 35vh;
  width: 100%;
  align-items: center;
}

#currentInfoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

}

#selectionsContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  top: -100vh;
  z-index: 0;
  transition: top 1s ;
  border-radius: 8px;
}

#selectionsContainer.deploy {
  top: 10vh;
}

.selection {
  border: 1px solid black;
  border-radius: 8px;
  padding: 0.5%;
  margin: 0.5%;
}

#additionalInfo{
  width: 30%;
}

#forecastContainer{
  display: flex;
  height: 30vh;
  width: 80vw;
  overflow-x: auto;
  overflow-y: none;
  gap: 4px;
  
}

.forecastElement{
  flex: 0 0 150px;
  height: 18vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 50px;
  width: 50px;
  border: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,0BAA0B,uBAAuB,YAAY;EAC7D,8BAA8B;EAC9B,kCAAkC;;AAEpC;;AAEA;EACE,aAAa;EACb,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;EACjC,gBAAgB;EAChB,gBAAgB;EAChB;;;gCAG8B;AAChC;;AAEA;EACE,YAAY;EACZ;;;gCAG8B;AAChC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,iCAAiC;EACjC,UAAU;EACV,OAAO;EACP,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,UAAU;EACV,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,qBAAqB;EACrB,eAAe;EACf,uCAAuC;EACvC,UAAU;AACZ;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;;AAEZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,+CAA+C;EAC/C,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,QAAQ;;AAEV;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  background-size:     cover;                      /* <------ */\r\n  background-repeat:   no-repeat;\r\n  background-position: center center;\r\n\r\n}\r\n\r\n#locactionAndSwitchContainer{\r\n  display: flex;\r\n  gap: 2%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 10vh;\r\n  z-index: 1;\r\n}\r\n\r\n#top {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2%;\r\n  justify-content: center;\r\n  align-items: center;  \r\n}\r\n\r\n#location{\r\n  height: 4.6vh;\r\n  width: 20vw;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: rgba(0,0,0,0.2);\r\n  min-width: 120px;\r\n  max-width: 150px;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n::placeholder{\r\n  color: white;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#switchCF, #switchDH {\r\n  display: flex;\r\n  width: 20vw;\r\n  height: 5vh;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  background-color: rgba(0,0,0,0.2);  \r\n  z-index: 1;\r\n  gap: 2%;\r\n  position: relative;  \r\n  color: white;\r\n  min-width: 120px;\r\n  max-width: 150px;\r\n}\r\n\r\n#switchCelsius , #switchFarenheit, #switchHour, #switchDay{\r\n  display: flex;\r\n  height: 6vh;\r\n  width: 50%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#switchSelector, #switchSelectorDH{\r\n  position: absolute;\r\n  left: 0%;\r\n  border-radius: 8px;\r\n  height: 5vh;\r\n  width: 50%;\r\n  transition: left 0.3s;\r\n  cursor: pointer;\r\n  background-color: rgba(255,255,255,0.3);\r\n  z-index: 2;  \r\n}\r\n\r\n#switchSelector.farenheit, #switchSelectorDH.hours{\r\n  left: 50%;\r\n}\r\n\r\n#weatherImage{\r\n  height: 100px;\r\n  width: 100px;\r\n  border: none;\r\n}\r\n\r\n#dashboard{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;  \r\n  margin: 1%;\r\n}\r\n\r\n#temp{\r\n  font-size: xx-large;\r\n  font-weight: 900;\r\n  text-align: left;\r\n}\r\n\r\n#footer{\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 35vh;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n#currentInfoContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n\r\n}\r\n\r\n#selectionsContainer{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  width: 50vw;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  top: -100vh;\r\n  z-index: 0;\r\n  transition: top 1s ;\r\n  border-radius: 8px;\r\n}\r\n\r\n#selectionsContainer.deploy {\r\n  top: 10vh;\r\n}\r\n\r\n.selection {\r\n  border: 1px solid black;\r\n  border-radius: 8px;\r\n  padding: 0.5%;\r\n  margin: 0.5%;\r\n}\r\n\r\n#additionalInfo{\r\n  width: 30%;\r\n}\r\n\r\n#forecastContainer{\r\n  display: flex;\r\n  height: 30vh;\r\n  width: 80vw;\r\n  overflow-x: auto;\r\n  overflow-y: none;\r\n  gap: 4px;\r\n  \r\n}\r\n\r\n.forecastElement{\r\n  flex: 0 0 150px;\r\n  height: 18vh;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nimg {\r\n  height: 50px;\r\n  width: 50px;\r\n  border: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/background.jpg");

/***/ }),

/***/ "./src/assets/images/day/113.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/113.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/113.png");

/***/ }),

/***/ "./src/assets/images/day/116.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/116.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/116.png");

/***/ }),

/***/ "./src/assets/images/day/119.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/119.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/119.png");

/***/ }),

/***/ "./src/assets/images/day/122.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/122.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/122.png");

/***/ }),

/***/ "./src/assets/images/day/143.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/143.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/143.png");

/***/ }),

/***/ "./src/assets/images/day/176.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/176.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/176.png");

/***/ }),

/***/ "./src/assets/images/day/179.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/179.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/179.png");

/***/ }),

/***/ "./src/assets/images/day/182.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/182.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/182.png");

/***/ }),

/***/ "./src/assets/images/day/185.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/185.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/185.png");

/***/ }),

/***/ "./src/assets/images/day/200.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/200.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/200.png");

/***/ }),

/***/ "./src/assets/images/day/227.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/227.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/227.png");

/***/ }),

/***/ "./src/assets/images/day/230.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/230.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/230.png");

/***/ }),

/***/ "./src/assets/images/day/248.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/248.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/248.png");

/***/ }),

/***/ "./src/assets/images/day/260.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/260.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/260.png");

/***/ }),

/***/ "./src/assets/images/day/263.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/263.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/263.png");

/***/ }),

/***/ "./src/assets/images/day/266.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/266.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/266.png");

/***/ }),

/***/ "./src/assets/images/day/281.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/281.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/281.png");

/***/ }),

/***/ "./src/assets/images/day/284.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/284.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/284.png");

/***/ }),

/***/ "./src/assets/images/day/293.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/293.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/293.png");

/***/ }),

/***/ "./src/assets/images/day/296.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/296.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/296.png");

/***/ }),

/***/ "./src/assets/images/day/299.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/299.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/299.png");

/***/ }),

/***/ "./src/assets/images/day/302.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/302.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/302.png");

/***/ }),

/***/ "./src/assets/images/day/305.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/305.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/305.png");

/***/ }),

/***/ "./src/assets/images/day/308.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/308.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/308.png");

/***/ }),

/***/ "./src/assets/images/day/311.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/311.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/311.png");

/***/ }),

/***/ "./src/assets/images/day/314.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/314.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/314.png");

/***/ }),

/***/ "./src/assets/images/day/317.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/317.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/317.png");

/***/ }),

/***/ "./src/assets/images/day/320.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/320.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/320.png");

/***/ }),

/***/ "./src/assets/images/day/323.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/323.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/323.png");

/***/ }),

/***/ "./src/assets/images/day/326.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/326.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/326.png");

/***/ }),

/***/ "./src/assets/images/day/329.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/329.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/329.png");

/***/ }),

/***/ "./src/assets/images/day/332.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/332.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/332.png");

/***/ }),

/***/ "./src/assets/images/day/335.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/335.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/335.png");

/***/ }),

/***/ "./src/assets/images/day/338.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/338.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/338.png");

/***/ }),

/***/ "./src/assets/images/day/350.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/350.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/350.png");

/***/ }),

/***/ "./src/assets/images/day/353.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/353.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/353.png");

/***/ }),

/***/ "./src/assets/images/day/356.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/356.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/356.png");

/***/ }),

/***/ "./src/assets/images/day/359.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/359.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/359.png");

/***/ }),

/***/ "./src/assets/images/day/362.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/362.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/362.png");

/***/ }),

/***/ "./src/assets/images/day/365.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/365.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/365.png");

/***/ }),

/***/ "./src/assets/images/day/368.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/368.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/368.png");

/***/ }),

/***/ "./src/assets/images/day/371.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/371.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/371.png");

/***/ }),

/***/ "./src/assets/images/day/374.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/374.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/374.png");

/***/ }),

/***/ "./src/assets/images/day/377.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/377.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/377.png");

/***/ }),

/***/ "./src/assets/images/day/386.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/386.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/386.png");

/***/ }),

/***/ "./src/assets/images/day/389.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/389.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/389.png");

/***/ }),

/***/ "./src/assets/images/day/392.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/392.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/392.png");

/***/ }),

/***/ "./src/assets/images/day/395.png":
/*!***************************************!*\
  !*** ./src/assets/images/day/395.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/day/395.png");

/***/ }),

/***/ "./src/assets/images/night/113.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/113.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/113.png");

/***/ }),

/***/ "./src/assets/images/night/116.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/116.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/116.png");

/***/ }),

/***/ "./src/assets/images/night/119.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/119.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/119.png");

/***/ }),

/***/ "./src/assets/images/night/122.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/122.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/122.png");

/***/ }),

/***/ "./src/assets/images/night/143.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/143.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/143.png");

/***/ }),

/***/ "./src/assets/images/night/176.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/176.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/176.png");

/***/ }),

/***/ "./src/assets/images/night/179.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/179.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/179.png");

/***/ }),

/***/ "./src/assets/images/night/182.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/182.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/182.png");

/***/ }),

/***/ "./src/assets/images/night/185.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/185.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/185.png");

/***/ }),

/***/ "./src/assets/images/night/200.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/200.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/200.png");

/***/ }),

/***/ "./src/assets/images/night/227.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/227.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/227.png");

/***/ }),

/***/ "./src/assets/images/night/230.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/230.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/230.png");

/***/ }),

/***/ "./src/assets/images/night/248.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/248.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/248.png");

/***/ }),

/***/ "./src/assets/images/night/260.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/260.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/260.png");

/***/ }),

/***/ "./src/assets/images/night/263.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/263.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/263.png");

/***/ }),

/***/ "./src/assets/images/night/266.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/266.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/266.png");

/***/ }),

/***/ "./src/assets/images/night/281.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/281.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/281.png");

/***/ }),

/***/ "./src/assets/images/night/284.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/284.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/284.png");

/***/ }),

/***/ "./src/assets/images/night/293.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/293.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/293.png");

/***/ }),

/***/ "./src/assets/images/night/296.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/296.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/296.png");

/***/ }),

/***/ "./src/assets/images/night/299.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/299.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/299.png");

/***/ }),

/***/ "./src/assets/images/night/302.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/302.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/302.png");

/***/ }),

/***/ "./src/assets/images/night/305.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/305.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/305.png");

/***/ }),

/***/ "./src/assets/images/night/308.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/308.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/308.png");

/***/ }),

/***/ "./src/assets/images/night/311.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/311.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/311.png");

/***/ }),

/***/ "./src/assets/images/night/314.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/314.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/314.png");

/***/ }),

/***/ "./src/assets/images/night/317.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/317.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/317.png");

/***/ }),

/***/ "./src/assets/images/night/320.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/320.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/320.png");

/***/ }),

/***/ "./src/assets/images/night/323.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/323.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/323.png");

/***/ }),

/***/ "./src/assets/images/night/326.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/326.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/326.png");

/***/ }),

/***/ "./src/assets/images/night/329.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/329.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/329.png");

/***/ }),

/***/ "./src/assets/images/night/332.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/332.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/332.png");

/***/ }),

/***/ "./src/assets/images/night/335.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/335.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/335.png");

/***/ }),

/***/ "./src/assets/images/night/338.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/338.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/338.png");

/***/ }),

/***/ "./src/assets/images/night/350.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/350.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/350.png");

/***/ }),

/***/ "./src/assets/images/night/353.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/353.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/353.png");

/***/ }),

/***/ "./src/assets/images/night/356.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/356.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/356.png");

/***/ }),

/***/ "./src/assets/images/night/359.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/359.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/359.png");

/***/ }),

/***/ "./src/assets/images/night/362.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/362.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/362.png");

/***/ }),

/***/ "./src/assets/images/night/365.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/365.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/365.png");

/***/ }),

/***/ "./src/assets/images/night/368.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/368.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/368.png");

/***/ }),

/***/ "./src/assets/images/night/371.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/371.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/371.png");

/***/ }),

/***/ "./src/assets/images/night/374.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/374.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/374.png");

/***/ }),

/***/ "./src/assets/images/night/377.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/377.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/377.png");

/***/ }),

/***/ "./src/assets/images/night/386.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/386.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/386.png");

/***/ }),

/***/ "./src/assets/images/night/389.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/389.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/389.png");

/***/ }),

/***/ "./src/assets/images/night/392.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/392.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/392.png");

/***/ }),

/***/ "./src/assets/images/night/395.png":
/*!*****************************************!*\
  !*** ./src/assets/images/night/395.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/night/395.png");

/***/ }),

/***/ "./node_modules/node-datetime/index.js":
/*!*********************************************!*\
  !*** ./node_modules/node-datetime/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DateTime = __webpack_require__(/*! ./src/datetime */ "./node_modules/node-datetime/src/datetime.js");
var TimedNumber = __webpack_require__(/*! ./src/timednumber */ "./node_modules/node-datetime/src/timednumber.js");
var TimedState = __webpack_require__(/*! ./src/timedstate */ "./node_modules/node-datetime/src/timedstate.js");

// global offsets for datetime
var offsets = {
	days: 0,
	hours: 0
};

// global default format
var globalDefaultFormat = null;

exports.setOffsetInDays = function (d) {

	if (isNaN(d)) {
		throw new Error('invalidOffset');
	}

	offsets.days = d;
};

exports.setOffsetInHours = function (h) {

	if (isNaN(h)) {
		throw new Error('invalidOffset');
	}

	offsets.hours = h;
};

exports.setDefaultFormat = function (format) {
	globalDefaultFormat = format;
};

exports.setWeekNames = function (list) {
	DateTime.setWeekNames(list);
};

exports.setShortWeekNames = function (list) {
	DateTime.setShortWeekNames(list);
};

exports.setMonthName = function (list) {
	DateTime.setMonthName(list);
};

exports.setShortMonthNames = function (list) {
	DateTime.setShortMonthName(list);
};

exports.setPeriod = function (list) {
	DateTime.setPeriod(list);
};

exports.create = function (now, defaultFormat) {

	if (!defaultFormat && globalDefaultFormat) {
		defaultFormat = globalDefaultFormat;
	}

	var d = new DateTime(now, defaultFormat);

	if (offsets.days !== 0) {
		d.offsetInDays(offsets.days);
	}

	if (offsets.hours !== 0) {
		d.offsetInHours(offsets.hours);
	}

	return d;
};

exports.createTimedNumber = function (conf) {
	return new TimedNumber(conf);
};

exports.createTimedState = function (conf) {
	return new TimedState(conf);
};


/***/ }),

/***/ "./node_modules/node-datetime/src/datetime.js":
/*!****************************************************!*\
  !*** ./node_modules/node-datetime/src/datetime.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


var FORMATS = {
	y: getYear,
	Y: getFullYear,
	m: getMonth,
	n: getMonthName,
	f: getMonthFullName,
	d: getDay,
    D: getFormattedDay,
	H: getMilitaryHours,
	I: getHours,
	M: getMinutes,
	S: getSeconds,
	N: getMillisec,
	w: getWeekday,
	W: getFullWeekday,
	p: getPeriod
};

var PERIOD = {
	AM: 'AM',
	PM: 'PM'
};

var WEEKS = {
	ABB: [
		'Sun',
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat'
	],
	FULL: [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]
};

var MONTHS = {
	ABB: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	],
	FULL: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
};

var ONEDAY = 86400000;
var ONEHOUR = 3600000;

function DateTime(now, defaultFormat) {
	this._created = Date.now();
	this._now = (now) ? new Date(now) : new Date();
	this._delta = this._created - this._now.getTime();
	this._defaultFormat = defaultFormat || null;
}

DateTime.setWeekNames = function (names) {
	for (var i = 0, len = names.length; i < len; i++) {
		if (!names[i]) {
			continue;
		}
		WEEKS.FULL[i] = names[i];
	}
};

DateTime.setShortWeekNames = function (names) {
	for (var i = 0, len = names.length; i < len; i++) {
		if (!names[i]) {
			continue;
		}
		WEEKS.ABB[i] = names[i];
	}
};

/**
periods [ 'AM', 'PM' ]
*/
DateTime.setPeriod = function (period) {
	if (period[0]) {
		PERIOD.AM = period[0];
	}
	if (period[1]) {
		PERIOD.PM = period[1];
	}
};

DateTime.setMonthNames = function (names) {
	for (var i = 0, len = names.length; i < len; i++) {
		if (!names[i]) {
			continue;
		}
		MONTHS.FULL[i] = names[i];
	}
};

DateTime.setShortMonthNames = function (names) {
	for (var i = 0, len = names.length; i < len; i++) {
		if (!names[i]) {
			continue;
		}
		MONTHS.ABB[i] = names[i];
	}
};

DateTime.prototype.format = function (format) {

	if (!format && this._defaultFormat) {
		format = this._defaultFormat;
	}

	var str = '';
	for (var i = 0, len = format.length; i < len; i++) {
		str += this._convert(format[i]);
	}
	return str;
};

DateTime.prototype.now = function () {
	return Date.now() - this._delta;
};

DateTime.prototype.epoch = function () {
	return Math.floor(this.getTime() / 1000);
};

DateTime.prototype.getTime = function () {
	return this._now.getTime();
};

DateTime.prototype.offsetInDays = function (offset) {
	var next = new Date(this._now);
	next.setDate(next.getDate() + offset);
	this._now = next;
	this._updateDelta();
};

DateTime.prototype.offsetInHours = function (offset) {
	var next = new Date(this._now);
	next.setHours(next.getHours() + offset);
	this._now = next;
	this._updateDelta();
};

DateTime.prototype.getDatesInRange = function (dateObj) {

    var start = this._now;
    var end = dateObj;
    var defaultFormat = this._defaultFormat;
	
    if (dateObj instanceof DateTime) {
        defaultFormat = defaultFormat || dateObj._defaultFormat;
		end = dateObj._now;
	}

	var list = [];
	var dir = (end.getTime() >= start.getTime()) ? 1 : -1;
	var diff = (dir === 1) ? end.getTime() - start.getTime() : start.getTime() - end.getTime();
	var current = new DateTime(start, defaultFormat);
    var iteration = Math.ceil(diff / ONEDAY);

    for (var i = 0; i <= iteration; i++) {
		list.push(current);
		var next = new DateTime(current.getTime(), defaultFormat);
        next.offsetInDays(1 * dir);	
		current = next;
    }

	return list;
};

DateTime.prototype.getHoursInRange = function (dateObj) {
    
    var start = this._now;
    var end = dateObj;
    var defaultFormat = this._defaultFormat;

	if (dateObj instanceof DateTime) {
	    defaultFormat = defaultFormat || this._defaultFormat;
		end = dateObj._now;
    }

	var list = [];
	var dir = (end.getTime() >= start.getTime()) ? 1 : -1;
	var diff = (dir === 1) ? end.getTime() - start.getTime() : start.getTime() - end.getTime();
	var current = new DateTime(start, defaultFormat);
    var iteration = Math.ceil(diff / ONEHOUR);
	
    for (var i = 0; i <= iteration; i++) {
        list.push(current);
		var next = new DateTime(current.getTime(), defaultFormat);
		next.offsetInHours(1 * dir);	
		current = next;
    }

	return list;
};

DateTime.prototype._convert = function (formatFragment) {
	var converter = FORMATS[formatFragment];

	if (converter) {
		return converter(this._now);
	}
	
	// no converter 
	return formatFragment;
};

DateTime.prototype._updateDelta = function () {
	this._delta = this._created - this._now.getTime();
};

function getYear(d) {
	var year = d.getFullYear().toString();
	return year.substring(year.length - 2);
}

function getFullYear(d) {
	return d.getFullYear();
}

function getMonth(d) {
	return pad(d.getMonth() + 1);
}

function getMonthName(d) {
	return MONTHS.ABB[d.getMonth()];
}

function getMonthFullName(d) {
	return MONTHS.FULL[d.getMonth()];
}

function getDay(d) {
	return pad(d.getDate());
}

function getFormattedDay(d) {
    var _date = d.getDate();
    if (_date > 10) {
        return _date.toString() + 'th';
    }
    var date = _date.toString();
    var lastDigit = parseInt(date[date.length - 1]);
    switch (lastDigit) {
        case 1:
            lastDigit += 'st';
            break;
        case 2:
            lastDigit += 'nd';
            break;
        case 3:
            lastDigit += 'rd';
            break;
        default:
            lastDigit += 'th';
            break;
    }
    return date.substring(0, date.length - 1) + lastDigit;
}

function getMilitaryHours(d) {
	return pad(d.getHours());
}

function getHours(d) {
	var h = d.getHours();
	var hours = (h > 12) ? h - 12 : h; 
	return pad(hours);
}

function getMinutes(d) {
	return pad(d.getMinutes());
}

function getSeconds(d) {
	return pad(d.getSeconds());
}

function getMillisec(d) {
	return mpad(d.getMilliseconds());
}

function getWeekday(d) {
	return WEEKS.ABB[d.getDay()];
}

function getFullWeekday(d) {
	return WEEKS.FULL[d.getDay()];
}

function getPeriod(d) {
	var hours = d.getHours();
	if (hours < 12) {
		return PERIOD.AM;
	}
	return PERIOD.PM;
}

function pad(n) {
	return (n < 10) ? '0' + n : n;
}

function mpad(n) {
	var padded = pad(n);
	return (typeof padded === 'string' || padded < 100) ? '0' + padded : padded; 
}

module.exports = DateTime;


/***/ }),

/***/ "./node_modules/node-datetime/src/timednumber.js":
/*!*******************************************************!*\
  !*** ./node_modules/node-datetime/src/timednumber.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


var INC = 'inc';
var DEC = 'dec';

/*
conf: {
        max: [number],
        min: [number],
        interval: [number], // update interval
        step: [number], // update step e.g. is step = 2, it will inc/dec 2 every interval
        type: [string], // inc: increment, dec: decrement
        init: [number], // cannot be greater than max and smaller than min
	lastUpdate: [*number] // an optional timestamp to conrtol last update state
}
*/
function TimedNumber(conf) {
	this.validate(conf);
	this.conf = conf;
	this.current = this.conf.init;
	this.lastUpdate = this.conf.lastUpdate || Date.now();
}

// public
TimedNumber.prototype.getValue = function () {
	switch (this.conf.type) {
		case INC:
			return this.calculateCurrentValueForInc();
		case DEC:
			return this.calculateCurrentValueForDec();
	}
};

// public
TimedNumber.prototype.inc = function (value) {
	if (!value || isNaN(value)) {
		return false;
	}
	if (this.current + value > this.conf.max) {
		return false;
	}
	
	if (this.current === this.conf.init) {
		// initial mod
		this.lastUpdate = Date.now();
	}

	// if type is inc, increasing means recovering
	this.current += value;

	this.lastUpdate = Date.now();

	return true;
};

// public
TimedNumber.prototype.dec = function (value) {
	if (!value || isNaN(value)) {
		return false;
	}
	if (this.current - value < this.conf.min) {
		return false;
	}
	
	if (this.current === this.conf.init) {
		// initial mod
		this.lastUpdate = Date.now();
	}
	
	// if type is dec, decreasing means recovering
	this.current -= value;

	this.lastUpdate = Date.now();

	return true;
};

// public
TimedNumber.prototype.reset = function () {
	this.current = this.conf.init;
	this.lastUpdate = Date.now();
};

// public
TimedNumber.prototype.getMaxValue = function () {
	return this.conf.max;
};

// public
TimedNumber.prototype.getMinValue = function () {
	return this.conf.min;
};

// public
TimedNumber.prototype.getInterval = function () {
	return this.conf.interval;
};

// public
TimedNumber.prototype.getStep = function () {
	return this.conf.step;
};

// public
TimedNumber.prototype.getLastUpdate = function () {
	return this.lastUpdate;
};

// public
TimedNumber.prototype.toObject = function () {
	var obj = {};
	obj.current = this.current;
	obj.lastUpdate = this.lastUpdate;
	for (var key in this.conf) {
		obj[key] = this.conf[key];
	}
	return obj;
};

// private
TimedNumber.prototype.validate = function (conf) {
	if (!conf.hasOwnProperty('max') || isNaN(conf.max)) {
		throw new Error('invalid max: ' + conf.max);
	}
	if (!conf.hasOwnProperty('min') || isNaN(conf.min) || conf.min >= conf.max) {
		throw new Error('invalid min: ' + conf.min);
	}
	if (!conf.hasOwnProperty('interval') || isNaN(conf.interval) || conf.interval <= 0) {
		throw new Error('invalid interval: ' + conf.interval);
	}
	if (!conf.hasOwnProperty('type') || (conf.type !== INC && conf.type !== DEC)) {
		throw new Error('invalid type: ' + conf.type);
	}
	if (!conf.hasOwnProperty('init') || isNaN(conf.init) || conf.init <= 0) {
		throw new Error('invalid init: ' + conf.init);
	}
	if (!conf.hasOwnProperty('step') || isNaN(conf.step) || conf.step <= 0) {
		throw new Error('invalid step: ' + conf.step);
	}
	if (conf.type === INC && conf.step > conf.max) {
		throw new Error('step must not be greater than max');
	}
	if (conf.type === DEC && conf.step < conf.min) {
		throw new Error('step must not be smaller than min');
	}
};

// private
TimedNumber.prototype.calculateCurrentValueForInc = function () {
	if (this.current === this.conf.max) {
		return this.current;
	}
	var now = Date.now();
	var timePast = now - this.lastUpdate;
	var steps = Math.floor(timePast / this.conf.interval);
	var incValue = this.conf.step * steps;
	this.current = (this.current + incValue <= this.conf.max) ? this.current + incValue : this.conf.max;
	if (incValue) {
		this.lastUpdate = now;
	}
	return this.current;
};

// private
TimedNumber.prototype.calculateCurrentValueForDec = function () {
	if (this.current === this.conf.min) {
		return this.current;
	}
	var now = Date.now();
	var timePast = now - this.lastUpdate;
	var steps = Math.floor(timePast / this.conf.interval);
	var decValue = this.conf.step * steps;	
	this.current = (this.current - decValue >= this.conf.min) ? this.current - decValue : this.conf.min;
	if (decValue) {
		this.lastUpdate = now;
	}
	return this.current;
};

module.exports = TimedNumber;



/***/ }),

/***/ "./node_modules/node-datetime/src/timedstate.js":
/*!******************************************************!*\
  !*** ./node_modules/node-datetime/src/timedstate.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
conf: {
	states: [array], // an array of states
        interval: [number], // update interval
        init: [number], // initial index of states array to start with
	lastUpdate: [*number] // an optional timestamp to conrtol last update state
	loop: [*bool] // if true the progress of states will be a loop
}
*/
function TimedState(conf) {
	this.validate(conf);
	this.conf = conf;
	this.length = this.conf.states.length;
	this.current = this.conf.init;
	this.lastUpdate = this.conf.lastUpdate || Date.now();
}

// public
TimedState.prototype.getState = function () {
	var now = Date.now();
	var timePast = now - this.lastUpdate;
	var steps = Math.floor(timePast / this.conf.interval);
	var nextPos = steps + this.current;	

	if (nextPos >= this.length) {
		if (this.conf.loop) {
			nextPos = (steps + this.current) - (this.length);	
		} else {
			// we don't loop and stop at the end of the state
			nextPos = this.length - 1;
		}
	}

	return this.conf.states[nextPos];
};

// public
TimedState.prototype.forward = function (value) {
	if (!value) {
		// if value is not given it defaults  to 1
		value = 1;
	}
	if (!value || isNaN(value)) {
		return false;
	}
	if (this.current + value >= this.length) {
		return false;
	}
	
	if (this.current === this.conf.init) {
		// initial mod
		this.lastUpdate = Date.now();
	}

	// move the current cursor of the array index forward
	this.current += value;

	this.lastUpdate = Date.now();

	return true;
};

// public
TimedState.prototype.backward = function (value) {
	if (!value) {
		// if value is not given it defaults  to 1
		value = 1;
	}
	if (!value || isNaN(value)) {
		return false;
	}
	if (this.current - value < 0) {
		return false;
	}
	
	if (this.current === this.conf.init) {
		// initial mod
		this.lastUpdate = Date.now();
	}
	
	// move the current cursor of the array index backward
	this.current -= value;

	this.lastUpdate = Date.now();

	return true;
};

// public
TimedState.prototype.reset = function () {
	this.current = this.conf.init;
	this.lastUpdate = Date.now();
};

// public
TimedState.prototype.getStates = function () {
	return this.conf.states.map(function (elm) {
		return elm;
	});
};

// public
TimedState.prototype.getInterval = function () {
	return this.conf.interval;
};

// public
TimedState.prototype.getLastUpdate = function () {
	return this.lastUpdate;
};

// public
TimedState.prototype.toObject = function () {
	var obj = {};
	obj.current = this.current;
	obj.lastUpdate = this.lastUpdate;
	for (var key in this.conf) {
		obj[key] = this.conf[key];
	}
	return obj;
};

// private
TimedState.prototype.validate = function (conf) {
	if (!conf.hasOwnProperty('states') || !Array.isArray(conf.states) || conf.states.length === 0) {
		throw new Error('invalid states: ' + conf.states);
	}
	if (!conf.hasOwnProperty('interval') || isNaN(conf.interval) || conf.interval <= 0) {
		throw new Error('invalid interval: ' + conf.interval);
	}
	if (!conf.hasOwnProperty('init') || isNaN(conf.init) || conf.init < 0) {
		throw new Error('invalid init: ' + conf.init);
	}
};

module.exports = TimedState;



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ApiCreds.js":
/*!*************************!*\
  !*** ./src/ApiCreds.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIKEY_WEATHER_API: () => (/* binding */ APIKEY_WEATHER_API)
/* harmony export */ });
const APIKEY_WEATHER_API = "a86dcd6e23a0483d822164246231707";

/***/ }),

/***/ "./src/ApiSearchLocation.js":
/*!**********************************!*\
  !*** ./src/ApiSearchLocation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchWeatherLocation)
/* harmony export */ });
/* harmony import */ var _ApiCreds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiCreds */ "./src/ApiCreds.js");
/* harmony import */ var _Apiforecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Apiforecast */ "./src/Apiforecast.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");

//import getCurrentWeather from "./ApiCurrentWeather";




async function searchWeatherLocation(e){
  try{    
    const selectionsContainer = document.querySelector("#selectionsContainer"); 
    selectionsContainer.classList.remove("deploy");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_2__["default"])("#selectionsContainer");
    const valueToSearch = e.target.value;
    const urlSearchApi = "http://api.weatherapi.com/v1/search.json?key=" + _ApiCreds__WEBPACK_IMPORTED_MODULE_0__.APIKEY_WEATHER_API + "&q="+valueToSearch;
    let response = await fetch(urlSearchApi, { mode: "cors"});
    let zones = await response.json();
    await insertZonesOnDom(zones);
  }catch (error){
    console.log(error)
  }  
}

async function insertZonesOnDom(zones){
  const selectionsContainer = document.querySelector("#selectionsContainer"); 
  selectionsContainer.classList.remove("deploy");
  try {    
    console.log(zones.length);
    console.log(zones);
    console.log("zones");
    await zones.forEach(zone => {
      const newElement = document.createElement("div");
      newElement.textContent = `${zone.name}, ${zone.region}, ${zone.country}.`;
      newElement.value = zone.url;
      newElement.classList.add("selection");
      newElement.addEventListener("click", callCurrentWeather);
      selectionsContainer.appendChild(newElement);
    });
    selectionsContainer.classList.add("deploy");
  } catch (error) {
    console.log(error)
  }  
  
}

async function callCurrentWeather(e){
  const valueToSearch = e.target.value;
  const searchBox = document.querySelector("#location");
  searchBox.value = "";
  const selectionsContainer = document.querySelector("#selectionsContainer");
  selectionsContainer.classList.remove("deploy");
  (0,_domHelpers__WEBPACK_IMPORTED_MODULE_2__["default"])("#selectionsContainer");
  await (0,_Apiforecast__WEBPACK_IMPORTED_MODULE_1__["default"])(valueToSearch)
}



/***/ }),

/***/ "./src/Apiforecast.js":
/*!****************************!*\
  !*** ./src/Apiforecast.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getForecast)
/* harmony export */ });
/* harmony import */ var node_datetime_src_datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-datetime/src/datetime */ "./node_modules/node-datetime/src/datetime.js");
/* harmony import */ var node_datetime_src_datetime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_datetime_src_datetime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiCreds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiCreds */ "./src/ApiCreds.js");
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageLoader */ "./src/imageLoader.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
//import { Console } from "console";






async function getForecast(urlLocation){
  try{
    localStorage.lastLocationShowed = urlLocation;
    const valueToSearch = urlLocation;
    const urlSearchApi = "http://api.weatherapi.com/v1/forecast.json?key=" + _ApiCreds__WEBPACK_IMPORTED_MODULE_1__.APIKEY_WEATHER_API + "&q="+valueToSearch + "&days=3";
    //console.log({urlSearchApi});
    let response = await fetch(urlSearchApi, {
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
  });
    //console.log({response});
    let forecast = await response.json();  
    renderForecast(forecast.forecast);
    renderCurrentWeather(forecast.current);
    renderLocation(forecast.location);
    //console.log(forecast.forecast);
  }catch (error){
    console.log(error)
  }  
}

async function renderCurrentWeather(currentWeather){
  try {
    //console.log(currentWeather);
    const switchSelector = document.querySelector("#switchSelector");
    const temp = document.querySelector("#temp");
    const weatherDescription = document.querySelector("#weatherDescription");
    const weatherImage = document.querySelector("#weatherImage"); 
    const lastUpdate = document.querySelector("#lastUpdate");
    const realFeel = document.querySelector("#realFeel");
    const humidity = document.querySelector("#humidity");
    const windDir = document.querySelector("#windDir");
    const windVelocity = document.querySelector("#windVelocity");
    
    humidity.textContent = `Humidity: ${currentWeather.humidity}%`;
    windDir.textContent = `Wind direction: ${currentWeather.wind_dir}`;
    windVelocity.textContent = `Wind direction: ${currentWeather.wind_kph} km/h`;

    if (switchSelector.value == "C"){
      temp.textContent = `${currentWeather.temp_c} ºC`;
      realFeel.textContent = `Feels like ${currentWeather.feelslike_c} ºC`;
    } else {
      temp.textContent = `${currentWeather.temp_f} ºF`;
      realFeel.textContent = `Feels like ${currentWeather.feelslike_f} ºF`;
    }

    // condition
    weatherDescription.textContent = currentWeather.condition.text;
    //update
    let datetime = __webpack_require__(/*! node-datetime */ "./node_modules/node-datetime/index.js");
    let dt = datetime.create(currentWeather.lastUpdate);
    let formated = dt.format("d n H:M");
    lastUpdate.textContent = "Last update: " + formated;
    //image
    let ImageIcon = currentWeather.condition.icon;
    ImageIcon = ImageIcon.split("/");
    let imageSrc = "";

    if (currentWeather.is_day){
      imageSrc = await _imageLoader__WEBPACK_IMPORTED_MODULE_2__.imagesDay[ImageIcon[ImageIcon.length - 1]].default;
    } else{
      imageSrc = await _imageLoader__WEBPACK_IMPORTED_MODULE_2__.imagesNight[ImageIcon[ImageIcon.length - 1]].default;
    }
    weatherImage.src = imageSrc;
    //console.log("finish renderCurrentWeather");
  } catch (error) {
    console.log(error)
  }
  
}

function renderLocation(currentWeatherLocation){
  try{
    const location = document.querySelector("#weatherLocation");
    location.textContent = `${currentWeatherLocation.name}, ${currentWeatherLocation.country}.`;
  }catch (error){
    console.log(error);
  }
  
}

async function renderForecast(forecast){
  const rainChance = document.querySelector("#rainChance");
  const arrayOfForecast = forecast.forecastday;
  rainChance.textContent = `Rain chance: ${arrayOfForecast[0].day.daily_chance_of_rain}%`;
  const switchSelectorDH = document.querySelector("#switchSelectorDH");
  const dailyOrHours = switchSelectorDH.value;
  const forecastContainer = document.querySelector("#forecastContainer");
  const switchSelector = document.querySelector("#switchSelector");
  
  (0,_domHelpers__WEBPACK_IMPORTED_MODULE_3__["default"])("#forecastContainer");

  if (dailyOrHours == "D") {
    await  arrayOfForecast.forEach( (day) => {
      //console.log(day.day);
      const newDay = document.createElement("div");
      newDay.classList.add("forecastElement");

      const tempUmbral = document.createElement("div");
      tempUmbral.classList.add("tempUmbral");

      const rainChance = document.createElement("div");
      rainChance.classList.add("rainChance");
      rainChance.textContent = `Rain chance: ${day.day.daily_chance_of_rain}%`;

      let time = (day.date_epoch + 86400) * 1000 // add a day, and multiply per sencods
      let datetime = __webpack_require__(/*! node-datetime */ "./node_modules/node-datetime/index.js");
      let newTime = new Date(time);
      let dt = datetime.create(newTime);
      let formated = dt.format("d n");
      const date = document.createElement("div");
      date.classList.add("date");
      date.textContent = formated;

      const descrip = document.createElement("div");
      descrip.classList.add("descrip");
      descrip.textContent = day.day.condition.text;
      if( switchSelector.value == "C"){
        tempUmbral.textContent = ` ${day.day.maxtemp_c} - ${day.day.mintemp_c}  ºC`;
      }else if (switchSelector.value == "F"){
        tempUmbral.textContent = ` ${day.day.maxtemp_f} - ${day.day.mintemp_f}  ºF`;
      }      
      const image = new Image;
      image.src = "";

      let ImageIcon = day.day.condition.icon;
      ImageIcon = ImageIcon.split("/");
      const imageSrc = _imageLoader__WEBPACK_IMPORTED_MODULE_2__.imagesDay[ImageIcon[ImageIcon.length - 1]].default;
      image.src = imageSrc;

      newDay.appendChild(date);
      newDay.appendChild(image);
      newDay.appendChild(descrip);
      newDay.appendChild(tempUmbral);
      newDay.appendChild(rainChance);
      forecastContainer.appendChild(newDay);
    } );

    //console.log("Daily");
  } else if (dailyOrHours == "H") {
    const now = new Date;
    const nowHours = now.getHours();

    for (let index = nowHours; index < 24; index++) {
      const hour = arrayOfForecast[0].hour[index];

      const newDay = document.createElement("div");
      newDay.classList.add("forecastElement");

      const tempUmbral = document.createElement("div");
      tempUmbral.classList.add("tempUmbral");

      const rainChance = document.createElement("div");
      rainChance.classList.add("rainChance");
      rainChance.textContent = `Rain chance: ${hour.chance_of_rain}%`


      //let time = (day.date_epoch + 86400) * 1000 // add a day, and multiply per sencods
      //let datetime = require("node-datetime");
      //let newTime = new Date(time);
      //let dt = datetime.create(newTime);
      //let formated = dt.format("d n");
      const date = document.createElement("div");
      date.classList.add("date");
      date.textContent = `${index}:00`;

      const descrip = document.createElement("div");
      descrip.classList.add("descrip");
      descrip.textContent = hour.condition.text;
      if( switchSelector.value == "C"){
        tempUmbral.textContent = ` ${hour.temp_c} ºC`;
      }else if (switchSelector.value == "F"){
        tempUmbral.textContent = ` ${hour.temp_f}  ºF`;
      }      
      const image = new Image;
      image.src = "";

      let ImageIcon = hour.condition.icon;
      ImageIcon = ImageIcon.split("/");
      let imageSrc;
      if (hour.is_day){
        imageSrc = await _imageLoader__WEBPACK_IMPORTED_MODULE_2__.imagesDay[ImageIcon[ImageIcon.length - 1]].default;
      } else{
        imageSrc = await _imageLoader__WEBPACK_IMPORTED_MODULE_2__.imagesNight[ImageIcon[ImageIcon.length - 1]].default;
      }
      image.src = imageSrc;

      newDay.appendChild(date);
      newDay.appendChild(image);
      newDay.appendChild(descrip);
      newDay.appendChild(tempUmbral);
      newDay.appendChild(rainChance);
      forecastContainer.appendChild(newDay);       
      
    }

    if( nowHours != 0 ){
      for (let index = 0; index < nowHours; index++) {
        const hour = arrayOfForecast[1].hour[index];
  
        const newDay = document.createElement("div");
        newDay.classList.add("forecastElement");
  
        const tempUmbral = document.createElement("div");
        tempUmbral.classList.add("tempUmbral");
  
        const rainChance = document.createElement("div");
        rainChance.classList.add("rainChance");
        rainChance.textContent = `Rain chance: ${hour.chance_of_rain}%`

        const date = document.createElement("div");
        date.classList.add("date");
        date.textContent = `${index}:00`;
  
        const descrip = document.createElement("div");
        descrip.classList.add("descrip");
        descrip.textContent = hour.condition.text;
        if( switchSelector.value == "C"){
          tempUmbral.textContent = ` ${hour.temp_c} ºC`;
        }else if (switchSelector.value == "F"){
          tempUmbral.textContent = ` ${hour.temp_f}  ºF`;
        }      
        const image = new Image;
        image.src = "";
  
        let ImageIcon = hour.condition.icon;
        ImageIcon = ImageIcon.split("/");
        let imageSrc;
        if (hour.is_day){
          imageSrc = await _imageLoader__WEBPACK_IMPORTED_MODULE_2__.imagesDay[ImageIcon[ImageIcon.length - 1]].default;
        } else{
          imageSrc = await _imageLoader__WEBPACK_IMPORTED_MODULE_2__.imagesNight[ImageIcon[ImageIcon.length - 1]].default;
        }
        image.src = imageSrc;
  
        newDay.appendChild(date);
        newDay.appendChild(image);
        newDay.appendChild(descrip);
        newDay.appendChild(tempUmbral);
        newDay.appendChild(rainChance);
        forecastContainer.appendChild(newDay);       
        
      }
    }

  }
}


/***/ }),

/***/ "./src/assets/images/day sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*************************************************************************!*\
  !*** ./src/assets/images/day/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./113.png": "./src/assets/images/day/113.png",
	"./116.png": "./src/assets/images/day/116.png",
	"./119.png": "./src/assets/images/day/119.png",
	"./122.png": "./src/assets/images/day/122.png",
	"./143.png": "./src/assets/images/day/143.png",
	"./176.png": "./src/assets/images/day/176.png",
	"./179.png": "./src/assets/images/day/179.png",
	"./182.png": "./src/assets/images/day/182.png",
	"./185.png": "./src/assets/images/day/185.png",
	"./200.png": "./src/assets/images/day/200.png",
	"./227.png": "./src/assets/images/day/227.png",
	"./230.png": "./src/assets/images/day/230.png",
	"./248.png": "./src/assets/images/day/248.png",
	"./260.png": "./src/assets/images/day/260.png",
	"./263.png": "./src/assets/images/day/263.png",
	"./266.png": "./src/assets/images/day/266.png",
	"./281.png": "./src/assets/images/day/281.png",
	"./284.png": "./src/assets/images/day/284.png",
	"./293.png": "./src/assets/images/day/293.png",
	"./296.png": "./src/assets/images/day/296.png",
	"./299.png": "./src/assets/images/day/299.png",
	"./302.png": "./src/assets/images/day/302.png",
	"./305.png": "./src/assets/images/day/305.png",
	"./308.png": "./src/assets/images/day/308.png",
	"./311.png": "./src/assets/images/day/311.png",
	"./314.png": "./src/assets/images/day/314.png",
	"./317.png": "./src/assets/images/day/317.png",
	"./320.png": "./src/assets/images/day/320.png",
	"./323.png": "./src/assets/images/day/323.png",
	"./326.png": "./src/assets/images/day/326.png",
	"./329.png": "./src/assets/images/day/329.png",
	"./332.png": "./src/assets/images/day/332.png",
	"./335.png": "./src/assets/images/day/335.png",
	"./338.png": "./src/assets/images/day/338.png",
	"./350.png": "./src/assets/images/day/350.png",
	"./353.png": "./src/assets/images/day/353.png",
	"./356.png": "./src/assets/images/day/356.png",
	"./359.png": "./src/assets/images/day/359.png",
	"./362.png": "./src/assets/images/day/362.png",
	"./365.png": "./src/assets/images/day/365.png",
	"./368.png": "./src/assets/images/day/368.png",
	"./371.png": "./src/assets/images/day/371.png",
	"./374.png": "./src/assets/images/day/374.png",
	"./377.png": "./src/assets/images/day/377.png",
	"./386.png": "./src/assets/images/day/386.png",
	"./389.png": "./src/assets/images/day/389.png",
	"./392.png": "./src/assets/images/day/392.png",
	"./395.png": "./src/assets/images/day/395.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/day sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/assets/images/night sync \\.(png%7Cjpe?g%7Csvg)$":
/*!***************************************************************************!*\
  !*** ./src/assets/images/night/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./113.png": "./src/assets/images/night/113.png",
	"./116.png": "./src/assets/images/night/116.png",
	"./119.png": "./src/assets/images/night/119.png",
	"./122.png": "./src/assets/images/night/122.png",
	"./143.png": "./src/assets/images/night/143.png",
	"./176.png": "./src/assets/images/night/176.png",
	"./179.png": "./src/assets/images/night/179.png",
	"./182.png": "./src/assets/images/night/182.png",
	"./185.png": "./src/assets/images/night/185.png",
	"./200.png": "./src/assets/images/night/200.png",
	"./227.png": "./src/assets/images/night/227.png",
	"./230.png": "./src/assets/images/night/230.png",
	"./248.png": "./src/assets/images/night/248.png",
	"./260.png": "./src/assets/images/night/260.png",
	"./263.png": "./src/assets/images/night/263.png",
	"./266.png": "./src/assets/images/night/266.png",
	"./281.png": "./src/assets/images/night/281.png",
	"./284.png": "./src/assets/images/night/284.png",
	"./293.png": "./src/assets/images/night/293.png",
	"./296.png": "./src/assets/images/night/296.png",
	"./299.png": "./src/assets/images/night/299.png",
	"./302.png": "./src/assets/images/night/302.png",
	"./305.png": "./src/assets/images/night/305.png",
	"./308.png": "./src/assets/images/night/308.png",
	"./311.png": "./src/assets/images/night/311.png",
	"./314.png": "./src/assets/images/night/314.png",
	"./317.png": "./src/assets/images/night/317.png",
	"./320.png": "./src/assets/images/night/320.png",
	"./323.png": "./src/assets/images/night/323.png",
	"./326.png": "./src/assets/images/night/326.png",
	"./329.png": "./src/assets/images/night/329.png",
	"./332.png": "./src/assets/images/night/332.png",
	"./335.png": "./src/assets/images/night/335.png",
	"./338.png": "./src/assets/images/night/338.png",
	"./350.png": "./src/assets/images/night/350.png",
	"./353.png": "./src/assets/images/night/353.png",
	"./356.png": "./src/assets/images/night/356.png",
	"./359.png": "./src/assets/images/night/359.png",
	"./362.png": "./src/assets/images/night/362.png",
	"./365.png": "./src/assets/images/night/365.png",
	"./368.png": "./src/assets/images/night/368.png",
	"./371.png": "./src/assets/images/night/371.png",
	"./374.png": "./src/assets/images/night/374.png",
	"./377.png": "./src/assets/images/night/377.png",
	"./386.png": "./src/assets/images/night/386.png",
	"./389.png": "./src/assets/images/night/389.png",
	"./392.png": "./src/assets/images/night/392.png",
	"./395.png": "./src/assets/images/night/395.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/night sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/createDom.js":
/*!**************************!*\
  !*** ./src/createDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDom)
/* harmony export */ });
/* harmony import */ var _ApiSearchLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiSearchLocation */ "./src/ApiSearchLocation.js");
/* harmony import */ var _Apiforecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Apiforecast */ "./src/Apiforecast.js");
/* harmony import */ var _assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/background.jpg */ "./src/assets/images/background.jpg");

//import getCurrentWeather from "./ApiCurrentWeather";



function createDom(){
  const body = document.querySelector("body");
  body.style.backgroundImage = `url(${_assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`;
  console.log( `url(${_assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`);

/** TOP */


  const top = document.createElement("div");
  top.setAttribute("id","top");
  body.appendChild(top);

  /** Location and switch selector container*/
  const locactionAndSwitchContainer = document.createElement("div");
  locactionAndSwitchContainer.setAttribute("id","locactionAndSwitchContainer");

  const input = document.createElement("input");
  input.setAttribute("id","location");
  input.setAttribute("placeholder","Location...");
  input.setAttribute("type","text");
  input.addEventListener("change", _ApiSearchLocation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  /** Switch Celsius Farenheit */
    const switchCF = document.createElement("div");
    switchCF.setAttribute("id", "switchCF");

    const switchSelector = document.createElement("div");
    switchSelector.setAttribute("id","switchSelector");    

    const switchCelsius = document.createElement("div");
    switchCelsius.setAttribute("id", "switchCelsius");
    switchCelsius.addEventListener("click", selectCelsius);
    switchCelsius.textContent = "C";

    const switchFarenheit = document.createElement("div");
    switchFarenheit.setAttribute("id", "switchFarenheit");
    switchFarenheit.addEventListener("click", selectFarenheit);
    switchFarenheit.textContent = "F";

    
    switchCF.appendChild(switchCelsius);
    switchCF.appendChild(switchSelector);
    switchCF.appendChild(switchFarenheit);

    locactionAndSwitchContainer.appendChild(input);
    locactionAndSwitchContainer.appendChild(switchCF);
  
  const selectionsContainer = document.createElement("div");
  selectionsContainer.setAttribute("id","selectionsContainer");
  top.appendChild(locactionAndSwitchContainer);
  top.appendChild(selectionsContainer);

/** DASHBOARD */
  const dashboard = document.createElement("div");
  dashboard.setAttribute("id","dashboard");
  body.appendChild(dashboard);
  /** Current info Container */
    const currentInfoContainer = document.createElement("div");
    currentInfoContainer.setAttribute("id","currentInfoContainer")
    const weatherDescription = document.createElement("div");
    weatherDescription.setAttribute("id","weatherDescription");
    const weatherImage = new Image();
    weatherImage.setAttribute("id","weatherImage")
    const location = document.createElement("div");
    location.setAttribute("id", "weatherLocation");
    const lastUpdate = document.createElement("div");
    lastUpdate.setAttribute("id", "lastUpdate");
    
    const temp = document.createElement("div");
    temp.setAttribute("id","temp");

    
 

    currentInfoContainer.appendChild(weatherImage);
    currentInfoContainer.appendChild(weatherDescription);
    currentInfoContainer.appendChild(temp);           
    currentInfoContainer.appendChild(location);
    currentInfoContainer.appendChild(lastUpdate);
    
  

    /** Rigth side info container */    
    const rainChance = document.createElement("div");
    rainChance.setAttribute("id","rainChance");

    const additionalInfo = document.createElement("div");
    additionalInfo.setAttribute("id", "additionalInfo");

    const realFeel = document.createElement("div");
    realFeel.setAttribute("id", "realFeel");
     
    const humidity = document.createElement("div");
    humidity.setAttribute("id", "humidity");
    const windDir = document.createElement("div");
    windDir.setAttribute("id", "windDir");
    const windVelocity = document.createElement("div");
    windVelocity.setAttribute("id", "windVelocity");

    additionalInfo.appendChild(rainChance);
    additionalInfo.appendChild(realFeel);
    additionalInfo.appendChild(humidity);
    additionalInfo.appendChild(windDir);
    additionalInfo.appendChild(windVelocity);



 dashboard.appendChild(currentInfoContainer);
 dashboard.appendChild(additionalInfo);


/** FOOTER */
  const footer = document.createElement("div");
  footer.setAttribute("id","footer");
  body.appendChild(footer);


  /** Switch daily / hours  */

  const switchDH = document.createElement("div");
  switchDH.setAttribute("id", "switchDH");

    const switchSelectorDH = document.createElement("div");
    switchSelectorDH.setAttribute("id","switchSelectorDH");  
    switchSelectorDH.value = "D";  

    const switchDay = document.createElement("div");
    switchDay.setAttribute("id", "switchDay");
    switchDay.addEventListener("click",selectDays);
    switchDay.textContent = "Daily";

    const switchHour = document.createElement("div");
    switchHour.setAttribute("id", "switchHour");
    switchHour.addEventListener("click",selectHours);
    switchHour.textContent = "Hours";

    
    switchDH.appendChild(switchDay);
    switchDH.appendChild(switchSelectorDH);
    switchDH.appendChild(switchHour);

    footer.appendChild(switchDH);

  const forecastContainer = document.createElement("div");
    forecastContainer.setAttribute("id", "forecastContainer");
    footer.appendChild(forecastContainer);


/** Default config */
  //then i think to implementate an ip location.
  localStorage.firstUrlLocation = "puerto-ordaz-bolivar-venezuela"; 
  switchSelector.value = "C"; //first celsius
  //getCurrentWeather(localStorage.firstUrlLocation);
  (0,_Apiforecast__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.firstUrlLocation);

}

function selectFarenheit(){
  const switchSelector = document.querySelector("#switchSelector");
  switchSelector.classList.add("farenheit");
  switchSelector.value = "F";
  (0,_Apiforecast__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.lastLocationShowed);
}

function selectCelsius(){
  const switchSelector = document.querySelector("#switchSelector");
  switchSelector.value = "C";
  switchSelector.classList.remove("farenheit");
  (0,_Apiforecast__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.lastLocationShowed);
}

function selectHours(){
  const switchSelectorDH = document.querySelector("#switchSelectorDH");
  switchSelectorDH.classList.add("hours");
  switchSelectorDH.value = "H";
  (0,_Apiforecast__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.lastLocationShowed);
}
function selectDays(){
  const switchSelectorDH = document.querySelector("#switchSelectorDH");
  switchSelectorDH.classList.remove("hours");
  switchSelectorDH.value = "D";
  (0,_Apiforecast__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.lastLocationShowed);
}

/***/ }),

/***/ "./src/domHelpers.js":
/*!***************************!*\
  !*** ./src/domHelpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeChilds)
/* harmony export */ });
function removeChilds(selector){
  const container = document.querySelector(selector);  
  while(container.childElementCount > 0){
    container.removeChild(container.lastChild);
  }  
}

/***/ }),

/***/ "./src/imageLoader.js":
/*!****************************!*\
  !*** ./src/imageLoader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imagesDay: () => (/* binding */ imagesDay),
/* harmony export */   imagesNight: () => (/* binding */ imagesNight)
/* harmony export */ });
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Imagen loader
//import images from "../images/pruebaa.jpeg";
const imagesDay = importAll(__webpack_require__("./src/assets/images/day sync \\.(png%7Cjpe?g%7Csvg)$"));
const imagesNight = importAll(__webpack_require__("./src/assets/images/night sync \\.(png%7Cjpe?g%7Csvg)$"));
//import backgroud from "./assets/images/backgroud.jpg";
//const imagesNames = Object.keys(images);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDom */ "./src/createDom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_createDom__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsK0JBQStCLG9CQUFvQiw2QkFBNkIscUNBQXFDLG9CQUFvQixtQkFBbUIsbUJBQW1CLGtCQUFrQix1REFBdUQsa0RBQWtELHlDQUF5QyxTQUFTLHFDQUFxQyxvQkFBb0IsY0FBYyw4QkFBOEIsMEJBQTBCLG1CQUFtQixpQkFBaUIsS0FBSyxjQUFjLG9CQUFvQiw2QkFBNkIsY0FBYyw4QkFBOEIsNEJBQTRCLEtBQUssa0JBQWtCLG9CQUFvQixrQkFBa0IsOEJBQThCLHlCQUF5Qix5QkFBeUIsbUJBQW1CLHdDQUF3Qyx1QkFBdUIsdUJBQXVCLGdKQUFnSixLQUFLLHNCQUFzQixtQkFBbUIsZ0pBQWdKLEtBQUssOEJBQThCLG9CQUFvQixrQkFBa0Isa0JBQWtCLHFDQUFxQywwQkFBMEIsOEJBQThCLHlCQUF5QiwwQ0FBMEMsaUJBQWlCLGNBQWMsMkJBQTJCLG1CQUFtQix1QkFBdUIsdUJBQXVCLEtBQUssbUVBQW1FLG9CQUFvQixrQkFBa0IsaUJBQWlCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLG1CQUFtQix3QkFBd0IsZ0pBQWdKLEtBQUssMkNBQTJDLHlCQUF5QixlQUFlLHlCQUF5QixrQkFBa0IsaUJBQWlCLDRCQUE0QixzQkFBc0IsOENBQThDLG1CQUFtQixLQUFLLDJEQUEyRCxnQkFBZ0IsS0FBSyxzQkFBc0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsS0FBSyxtQkFBbUIsb0JBQW9CLHFDQUFxQyw4QkFBOEIsaUJBQWlCLEtBQUssY0FBYywwQkFBMEIsdUJBQXVCLHVCQUF1QixLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLG1CQUFtQixrQkFBa0IsMEJBQTBCLEtBQUssK0JBQStCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixpQkFBaUIsU0FBUyw2QkFBNkIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixrQkFBa0Isc0RBQXNELGtCQUFrQixpQkFBaUIsMEJBQTBCLHlCQUF5QixLQUFLLHFDQUFxQyxnQkFBZ0IsS0FBSyxvQkFBb0IsOEJBQThCLHlCQUF5QixvQkFBb0IsbUJBQW1CLEtBQUssd0JBQXdCLGlCQUFpQixLQUFLLDJCQUEyQixvQkFBb0IsbUJBQW1CLGtCQUFrQix1QkFBdUIsdUJBQXVCLGVBQWUsV0FBVyx5QkFBeUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxhQUFhLG1CQUFtQixrQkFBa0IsbUJBQW1CLEtBQUssbUJBQW1CO0FBQy84SztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUN0TTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpRUFBZSxxQkFBdUIscUNBQXFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBM0UsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7OztBQ0E3RDs7QUFFYixlQUFlLG1CQUFPLENBQUMsb0VBQWdCO0FBQ3ZDLGtCQUFrQixtQkFBTyxDQUFDLDBFQUFtQjtBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyx3RUFBa0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNuVmE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkxhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYk87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUM5QztBQUN3QztBQUNBO0FBQ3hDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVk7QUFDaEI7QUFDQSwyRUFBMkUseURBQWtCO0FBQzdGLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVSxJQUFJLFlBQVksSUFBSSxhQUFhO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFZO0FBQ2QsUUFBUSx3REFBVztBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREEsV0FBVyxVQUFVO0FBQzZCO0FBQ0o7QUFDTztBQUNiO0FBQ3hDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSx5REFBa0I7QUFDL0YsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msd0JBQXdCO0FBQ2hFLDZDQUE2Qyx3QkFBd0I7QUFDckUsa0RBQWtELHlCQUF5QjtBQUMzRTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRCwyQ0FBMkMsNEJBQTRCO0FBQ3ZFLE1BQU07QUFDTiw0QkFBNEIsdUJBQXVCO0FBQ25ELDJDQUEyQyw0QkFBNEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLDREQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtREFBUztBQUNoQyxNQUFNO0FBQ04sdUJBQXVCLHFEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QixJQUFJLCtCQUErQjtBQUM3RixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBNEM7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNkJBQTZCO0FBQzVFO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyw0REFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQixJQUFJLG9CQUFvQjtBQUNoRixPQUFPO0FBQ1AscUNBQXFDLG1CQUFtQixJQUFJLG9CQUFvQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbURBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQsT0FBTztBQUNQLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQVM7QUFDbEMsUUFBUTtBQUNSLHlCQUF5QixxREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsb0JBQW9CO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRCxTQUFTO0FBQ1QsdUNBQXVDLGNBQWM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBUztBQUNwQyxVQUFVO0FBQ1YsMkJBQTJCLHFEQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVpRDtBQUNqRDtBQUN3QztBQUNnQjtBQUN4RDtBQUNlO0FBQ2Y7QUFDQSxzQ0FBc0MscUVBQVUsQ0FBQztBQUNqRCxzQkFBc0IscUVBQVUsQ0FBQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwREFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxFQUFFLHdEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiOzs7Ozs7Ozs7Ozs7Ozs7QUMxTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBLGtDQUFrQywyQ0FBMkM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDRCQUE0QiwyRUFBbUU7QUFDL0YsOEJBQThCLDZFQUFxRTtBQUMxRztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hvQztBQUNKO0FBQ2hDO0FBQ0Esc0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExNi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTE5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMjIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE0My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTc2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xNzkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE4Mi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTg1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yMDAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIyNy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjMwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNDgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2MC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjYzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI4MS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjg0LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjk5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwNS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzA4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTEucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxNC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzE3LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyMy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzI2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzMi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzM1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1MC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzUzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzYyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2OC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzcxLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzQucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3Ny5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzg2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zODkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM5Mi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzk1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExMy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTE5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzEyMi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNDMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTc2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xODIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTg1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIwMC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMjcucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjMwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI0OC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjYzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yODEucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjg0LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjk5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwMi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzA4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxMS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTQucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzE3LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzI2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyOS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzM1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzOC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzUzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzYyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2NS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzcxLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3NC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzcucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzg2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zOTIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzk1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub2RlLWRhdGV0aW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vZGUtZGF0ZXRpbWUvc3JjL2RhdGV0aW1lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vZGUtZGF0ZXRpbWUvc3JjL3RpbWVkbnVtYmVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vZGUtZGF0ZXRpbWUvc3JjL3RpbWVkc3RhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BcGlDcmVkcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BcGlTZWFyY2hMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BcGlmb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NyZWF0ZURvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb21IZWxwZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6ICAgICBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cclxufVxyXG5cclxuI2xvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMiU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuI3RvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMiU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxyXG59XHJcblxyXG4jbG9jYXRpb257XHJcbiAgaGVpZ2h0OiA0LjZ2aDtcclxuICB3aWR0aDogMjB2dztcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcclxufVxyXG5cclxuI3N3aXRjaENGLCAjc3dpdGNoREgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTsgIFxyXG4gIHotaW5kZXg6IDE7XHJcbiAgZ2FwOiAyJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4jc3dpdGNoQ2Vsc2l1cyAsICNzd2l0Y2hGYXJlbmhlaXQsICNzd2l0Y2hIb3VyLCAjc3dpdGNoRGF5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2dmg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcbn1cclxuXHJcbiNzd2l0Y2hTZWxlY3RvciwgI3N3aXRjaFNlbGVjdG9yREh7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IDV2aDtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gIHotaW5kZXg6IDI7ICBcclxufVxyXG5cclxuI3N3aXRjaFNlbGVjdG9yLmZhcmVuaGVpdCwgI3N3aXRjaFNlbGVjdG9yREguaG91cnN7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4jd2VhdGhlckltYWdle1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2Rhc2hib2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7ICBcclxuICBtYXJnaW46IDElO1xyXG59XHJcblxyXG4jdGVtcHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI2Zvb3RlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjdXJyZW50SW5mb0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwJTtcclxuXHJcbn1cclxuXHJcbiNzZWxlY3Rpb25zQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTB2dztcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0b3A6IC0xMDB2aDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHRyYW5zaXRpb246IHRvcCAxcyA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4jc2VsZWN0aW9uc0NvbnRhaW5lci5kZXBsb3kge1xyXG4gIHRvcDogMTB2aDtcclxufVxyXG5cclxuLnNlbGVjdGlvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDAuNSU7XHJcbiAgbWFyZ2luOiAwLjUlO1xyXG59XHJcblxyXG4jYWRkaXRpb25hbEluZm97XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuI2ZvcmVjYXN0Q29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogbm9uZTtcclxuICBnYXA6IDRweDtcclxuICBcclxufVxyXG5cclxuLmZvcmVjYXN0RWxlbWVudHtcclxuICBmbGV4OiAwIDAgMTUwcHg7XHJcbiAgaGVpZ2h0OiAxOHZoO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQix1QkFBdUIsWUFBWTtFQUM3RCw4QkFBOEI7RUFDOUIsa0NBQWtDOztBQUVwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7OztnQ0FHOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwrQ0FBK0M7RUFDL0MsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFROztBQUVWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNsb2NhY3Rpb25BbmRTd2l0Y2hDb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiN0b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbntcXHJcXG4gIGhlaWdodDogNC42dmg7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlcntcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoQ0YsICNzd2l0Y2hESCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTsgIFxcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGdhcDogMiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoQ2Vsc2l1cyAsICNzd2l0Y2hGYXJlbmhlaXQsICNzd2l0Y2hIb3VyLCAjc3dpdGNoRGF5e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNnZoO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2hTZWxlY3RvciwgI3N3aXRjaFNlbGVjdG9yREh7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGhlaWdodDogNXZoO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXHJcXG4gIHotaW5kZXg6IDI7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaFNlbGVjdG9yLmZhcmVuaGVpdCwgI3N3aXRjaFNlbGVjdG9yREguaG91cnN7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVySW1hZ2V7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGFzaGJvYXJke1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgIFxcclxcbiAgbWFyZ2luOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXB7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMzV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnRJbmZvQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbnNDb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0b3A6IC0xMDB2aDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMXMgO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uc0NvbnRhaW5lci5kZXBsb3kge1xcclxcbiAgdG9wOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0aW9uIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogMC41JTtcXHJcXG4gIG1hcmdpbjogMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZGl0aW9uYWxJbmZve1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZvcmVjYXN0Q29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIG92ZXJmbG93LXk6IG5vbmU7XFxyXFxuICBnYXA6IDRweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RFbGVtZW50e1xcclxcbiAgZmxleDogMCAwIDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxOHZoO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xMjIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xNDMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xNzYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xNzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xODIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8xODUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yMDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yMjcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yMzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yNDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yODEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yODQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zODYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zODkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zOTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL2RheS8zOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTE2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzEyMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTQzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNzYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTgyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xODUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIwMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjI3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI0OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjYwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjgxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yODQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjk2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzA1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzE0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzIzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzMyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzUwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzU5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzc3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zODYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzkyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zOTUucG5nXCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGF0ZVRpbWUgPSByZXF1aXJlKCcuL3NyYy9kYXRldGltZScpO1xudmFyIFRpbWVkTnVtYmVyID0gcmVxdWlyZSgnLi9zcmMvdGltZWRudW1iZXInKTtcbnZhciBUaW1lZFN0YXRlID0gcmVxdWlyZSgnLi9zcmMvdGltZWRzdGF0ZScpO1xuXG4vLyBnbG9iYWwgb2Zmc2V0cyBmb3IgZGF0ZXRpbWVcbnZhciBvZmZzZXRzID0ge1xuXHRkYXlzOiAwLFxuXHRob3VyczogMFxufTtcblxuLy8gZ2xvYmFsIGRlZmF1bHQgZm9ybWF0XG52YXIgZ2xvYmFsRGVmYXVsdEZvcm1hdCA9IG51bGw7XG5cbmV4cG9ydHMuc2V0T2Zmc2V0SW5EYXlzID0gZnVuY3Rpb24gKGQpIHtcblxuXHRpZiAoaXNOYU4oZCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWRPZmZzZXQnKTtcblx0fVxuXG5cdG9mZnNldHMuZGF5cyA9IGQ7XG59O1xuXG5leHBvcnRzLnNldE9mZnNldEluSG91cnMgPSBmdW5jdGlvbiAoaCkge1xuXG5cdGlmIChpc05hTihoKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZE9mZnNldCcpO1xuXHR9XG5cblx0b2Zmc2V0cy5ob3VycyA9IGg7XG59O1xuXG5leHBvcnRzLnNldERlZmF1bHRGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG5cdGdsb2JhbERlZmF1bHRGb3JtYXQgPSBmb3JtYXQ7XG59O1xuXG5leHBvcnRzLnNldFdlZWtOYW1lcyA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdERhdGVUaW1lLnNldFdlZWtOYW1lcyhsaXN0KTtcbn07XG5cbmV4cG9ydHMuc2V0U2hvcnRXZWVrTmFtZXMgPSBmdW5jdGlvbiAobGlzdCkge1xuXHREYXRlVGltZS5zZXRTaG9ydFdlZWtOYW1lcyhsaXN0KTtcbn07XG5cbmV4cG9ydHMuc2V0TW9udGhOYW1lID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0RGF0ZVRpbWUuc2V0TW9udGhOYW1lKGxpc3QpO1xufTtcblxuZXhwb3J0cy5zZXRTaG9ydE1vbnRoTmFtZXMgPSBmdW5jdGlvbiAobGlzdCkge1xuXHREYXRlVGltZS5zZXRTaG9ydE1vbnRoTmFtZShsaXN0KTtcbn07XG5cbmV4cG9ydHMuc2V0UGVyaW9kID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0RGF0ZVRpbWUuc2V0UGVyaW9kKGxpc3QpO1xufTtcblxuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiAobm93LCBkZWZhdWx0Rm9ybWF0KSB7XG5cblx0aWYgKCFkZWZhdWx0Rm9ybWF0ICYmIGdsb2JhbERlZmF1bHRGb3JtYXQpIHtcblx0XHRkZWZhdWx0Rm9ybWF0ID0gZ2xvYmFsRGVmYXVsdEZvcm1hdDtcblx0fVxuXG5cdHZhciBkID0gbmV3IERhdGVUaW1lKG5vdywgZGVmYXVsdEZvcm1hdCk7XG5cblx0aWYgKG9mZnNldHMuZGF5cyAhPT0gMCkge1xuXHRcdGQub2Zmc2V0SW5EYXlzKG9mZnNldHMuZGF5cyk7XG5cdH1cblxuXHRpZiAob2Zmc2V0cy5ob3VycyAhPT0gMCkge1xuXHRcdGQub2Zmc2V0SW5Ib3VycyhvZmZzZXRzLmhvdXJzKTtcblx0fVxuXG5cdHJldHVybiBkO1xufTtcblxuZXhwb3J0cy5jcmVhdGVUaW1lZE51bWJlciA9IGZ1bmN0aW9uIChjb25mKSB7XG5cdHJldHVybiBuZXcgVGltZWROdW1iZXIoY29uZik7XG59O1xuXG5leHBvcnRzLmNyZWF0ZVRpbWVkU3RhdGUgPSBmdW5jdGlvbiAoY29uZikge1xuXHRyZXR1cm4gbmV3IFRpbWVkU3RhdGUoY29uZik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRk9STUFUUyA9IHtcblx0eTogZ2V0WWVhcixcblx0WTogZ2V0RnVsbFllYXIsXG5cdG06IGdldE1vbnRoLFxuXHRuOiBnZXRNb250aE5hbWUsXG5cdGY6IGdldE1vbnRoRnVsbE5hbWUsXG5cdGQ6IGdldERheSxcbiAgICBEOiBnZXRGb3JtYXR0ZWREYXksXG5cdEg6IGdldE1pbGl0YXJ5SG91cnMsXG5cdEk6IGdldEhvdXJzLFxuXHRNOiBnZXRNaW51dGVzLFxuXHRTOiBnZXRTZWNvbmRzLFxuXHROOiBnZXRNaWxsaXNlYyxcblx0dzogZ2V0V2Vla2RheSxcblx0VzogZ2V0RnVsbFdlZWtkYXksXG5cdHA6IGdldFBlcmlvZFxufTtcblxudmFyIFBFUklPRCA9IHtcblx0QU06ICdBTScsXG5cdFBNOiAnUE0nXG59O1xuXG52YXIgV0VFS1MgPSB7XG5cdEFCQjogW1xuXHRcdCdTdW4nLFxuXHRcdCdNb24nLFxuXHRcdCdUdWUnLFxuXHRcdCdXZWQnLFxuXHRcdCdUaHUnLFxuXHRcdCdGcmknLFxuXHRcdCdTYXQnXG5cdF0sXG5cdEZVTEw6IFtcblx0XHQnU3VuZGF5Jyxcblx0XHQnTW9uZGF5Jyxcblx0XHQnVHVlc2RheScsXG5cdFx0J1dlZG5lc2RheScsXG5cdFx0J1RodXJzZGF5Jyxcblx0XHQnRnJpZGF5Jyxcblx0XHQnU2F0dXJkYXknXG5cdF1cbn07XG5cbnZhciBNT05USFMgPSB7XG5cdEFCQjogW1xuXHRcdCdKYW4nLFxuXHRcdCdGZWInLFxuXHRcdCdNYXInLFxuXHRcdCdBcHInLFxuXHRcdCdNYXknLFxuXHRcdCdKdW4nLFxuXHRcdCdKdWwnLFxuXHRcdCdBdWcnLFxuXHRcdCdTZXAnLFxuXHRcdCdPY3QnLFxuXHRcdCdOb3YnLFxuXHRcdCdEZWMnXG5cdF0sXG5cdEZVTEw6IFtcblx0XHQnSmFudWFyeScsXG5cdFx0J0ZlYnJ1YXJ5Jyxcblx0XHQnTWFyY2gnLFxuXHRcdCdBcHJpbCcsXG5cdFx0J01heScsXG5cdFx0J0p1bmUnLFxuXHRcdCdKdWx5Jyxcblx0XHQnQXVndXN0Jyxcblx0XHQnU2VwdGVtYmVyJyxcblx0XHQnT2N0b2JlcicsXG5cdFx0J05vdmVtYmVyJyxcblx0XHQnRGVjZW1iZXInXG5cdF1cbn07XG5cbnZhciBPTkVEQVkgPSA4NjQwMDAwMDtcbnZhciBPTkVIT1VSID0gMzYwMDAwMDtcblxuZnVuY3Rpb24gRGF0ZVRpbWUobm93LCBkZWZhdWx0Rm9ybWF0KSB7XG5cdHRoaXMuX2NyZWF0ZWQgPSBEYXRlLm5vdygpO1xuXHR0aGlzLl9ub3cgPSAobm93KSA/IG5ldyBEYXRlKG5vdykgOiBuZXcgRGF0ZSgpO1xuXHR0aGlzLl9kZWx0YSA9IHRoaXMuX2NyZWF0ZWQgLSB0aGlzLl9ub3cuZ2V0VGltZSgpO1xuXHR0aGlzLl9kZWZhdWx0Rm9ybWF0ID0gZGVmYXVsdEZvcm1hdCB8fCBudWxsO1xufVxuXG5EYXRlVGltZS5zZXRXZWVrTmFtZXMgPSBmdW5jdGlvbiAobmFtZXMpIHtcblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IG5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0aWYgKCFuYW1lc1tpXSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdFdFRUtTLkZVTExbaV0gPSBuYW1lc1tpXTtcblx0fVxufTtcblxuRGF0ZVRpbWUuc2V0U2hvcnRXZWVrTmFtZXMgPSBmdW5jdGlvbiAobmFtZXMpIHtcblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IG5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0aWYgKCFuYW1lc1tpXSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdFdFRUtTLkFCQltpXSA9IG5hbWVzW2ldO1xuXHR9XG59O1xuXG4vKipcbnBlcmlvZHMgWyAnQU0nLCAnUE0nIF1cbiovXG5EYXRlVGltZS5zZXRQZXJpb2QgPSBmdW5jdGlvbiAocGVyaW9kKSB7XG5cdGlmIChwZXJpb2RbMF0pIHtcblx0XHRQRVJJT0QuQU0gPSBwZXJpb2RbMF07XG5cdH1cblx0aWYgKHBlcmlvZFsxXSkge1xuXHRcdFBFUklPRC5QTSA9IHBlcmlvZFsxXTtcblx0fVxufTtcblxuRGF0ZVRpbWUuc2V0TW9udGhOYW1lcyA9IGZ1bmN0aW9uIChuYW1lcykge1xuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gbmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRpZiAoIW5hbWVzW2ldKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0TU9OVEhTLkZVTExbaV0gPSBuYW1lc1tpXTtcblx0fVxufTtcblxuRGF0ZVRpbWUuc2V0U2hvcnRNb250aE5hbWVzID0gZnVuY3Rpb24gKG5hbWVzKSB7XG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBuYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdGlmICghbmFtZXNbaV0pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRNT05USFMuQUJCW2ldID0gbmFtZXNbaV07XG5cdH1cbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG5cblx0aWYgKCFmb3JtYXQgJiYgdGhpcy5fZGVmYXVsdEZvcm1hdCkge1xuXHRcdGZvcm1hdCA9IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XG5cdH1cblxuXHR2YXIgc3RyID0gJyc7XG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBmb3JtYXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRzdHIgKz0gdGhpcy5fY29udmVydChmb3JtYXRbaV0pO1xuXHR9XG5cdHJldHVybiBzdHI7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUubm93ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuX2RlbHRhO1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLmVwb2NoID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRpbWUoKSAvIDEwMDApO1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLl9ub3cuZ2V0VGltZSgpO1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLm9mZnNldEluRGF5cyA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcblx0dmFyIG5leHQgPSBuZXcgRGF0ZSh0aGlzLl9ub3cpO1xuXHRuZXh0LnNldERhdGUobmV4dC5nZXREYXRlKCkgKyBvZmZzZXQpO1xuXHR0aGlzLl9ub3cgPSBuZXh0O1xuXHR0aGlzLl91cGRhdGVEZWx0YSgpO1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLm9mZnNldEluSG91cnMgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG5cdHZhciBuZXh0ID0gbmV3IERhdGUodGhpcy5fbm93KTtcblx0bmV4dC5zZXRIb3VycyhuZXh0LmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuXHR0aGlzLl9ub3cgPSBuZXh0O1xuXHR0aGlzLl91cGRhdGVEZWx0YSgpO1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLmdldERhdGVzSW5SYW5nZSA9IGZ1bmN0aW9uIChkYXRlT2JqKSB7XG5cbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9ub3c7XG4gICAgdmFyIGVuZCA9IGRhdGVPYmo7XG4gICAgdmFyIGRlZmF1bHRGb3JtYXQgPSB0aGlzLl9kZWZhdWx0Rm9ybWF0O1xuXHRcbiAgICBpZiAoZGF0ZU9iaiBpbnN0YW5jZW9mIERhdGVUaW1lKSB7XG4gICAgICAgIGRlZmF1bHRGb3JtYXQgPSBkZWZhdWx0Rm9ybWF0IHx8IGRhdGVPYmouX2RlZmF1bHRGb3JtYXQ7XG5cdFx0ZW5kID0gZGF0ZU9iai5fbm93O1xuXHR9XG5cblx0dmFyIGxpc3QgPSBbXTtcblx0dmFyIGRpciA9IChlbmQuZ2V0VGltZSgpID49IHN0YXJ0LmdldFRpbWUoKSkgPyAxIDogLTE7XG5cdHZhciBkaWZmID0gKGRpciA9PT0gMSkgPyBlbmQuZ2V0VGltZSgpIC0gc3RhcnQuZ2V0VGltZSgpIDogc3RhcnQuZ2V0VGltZSgpIC0gZW5kLmdldFRpbWUoKTtcblx0dmFyIGN1cnJlbnQgPSBuZXcgRGF0ZVRpbWUoc3RhcnQsIGRlZmF1bHRGb3JtYXQpO1xuICAgIHZhciBpdGVyYXRpb24gPSBNYXRoLmNlaWwoZGlmZiAvIE9ORURBWSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBpdGVyYXRpb247IGkrKykge1xuXHRcdGxpc3QucHVzaChjdXJyZW50KTtcblx0XHR2YXIgbmV4dCA9IG5ldyBEYXRlVGltZShjdXJyZW50LmdldFRpbWUoKSwgZGVmYXVsdEZvcm1hdCk7XG4gICAgICAgIG5leHQub2Zmc2V0SW5EYXlzKDEgKiBkaXIpO1x0XG5cdFx0Y3VycmVudCA9IG5leHQ7XG4gICAgfVxuXG5cdHJldHVybiBsaXN0O1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLmdldEhvdXJzSW5SYW5nZSA9IGZ1bmN0aW9uIChkYXRlT2JqKSB7XG4gICAgXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbm93O1xuICAgIHZhciBlbmQgPSBkYXRlT2JqO1xuICAgIHZhciBkZWZhdWx0Rm9ybWF0ID0gdGhpcy5fZGVmYXVsdEZvcm1hdDtcblxuXHRpZiAoZGF0ZU9iaiBpbnN0YW5jZW9mIERhdGVUaW1lKSB7XG5cdCAgICBkZWZhdWx0Rm9ybWF0ID0gZGVmYXVsdEZvcm1hdCB8fCB0aGlzLl9kZWZhdWx0Rm9ybWF0O1xuXHRcdGVuZCA9IGRhdGVPYmouX25vdztcbiAgICB9XG5cblx0dmFyIGxpc3QgPSBbXTtcblx0dmFyIGRpciA9IChlbmQuZ2V0VGltZSgpID49IHN0YXJ0LmdldFRpbWUoKSkgPyAxIDogLTE7XG5cdHZhciBkaWZmID0gKGRpciA9PT0gMSkgPyBlbmQuZ2V0VGltZSgpIC0gc3RhcnQuZ2V0VGltZSgpIDogc3RhcnQuZ2V0VGltZSgpIC0gZW5kLmdldFRpbWUoKTtcblx0dmFyIGN1cnJlbnQgPSBuZXcgRGF0ZVRpbWUoc3RhcnQsIGRlZmF1bHRGb3JtYXQpO1xuICAgIHZhciBpdGVyYXRpb24gPSBNYXRoLmNlaWwoZGlmZiAvIE9ORUhPVVIpO1xuXHRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBpdGVyYXRpb247IGkrKykge1xuICAgICAgICBsaXN0LnB1c2goY3VycmVudCk7XG5cdFx0dmFyIG5leHQgPSBuZXcgRGF0ZVRpbWUoY3VycmVudC5nZXRUaW1lKCksIGRlZmF1bHRGb3JtYXQpO1xuXHRcdG5leHQub2Zmc2V0SW5Ib3VycygxICogZGlyKTtcdFxuXHRcdGN1cnJlbnQgPSBuZXh0O1xuICAgIH1cblxuXHRyZXR1cm4gbGlzdDtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5fY29udmVydCA9IGZ1bmN0aW9uIChmb3JtYXRGcmFnbWVudCkge1xuXHR2YXIgY29udmVydGVyID0gRk9STUFUU1tmb3JtYXRGcmFnbWVudF07XG5cblx0aWYgKGNvbnZlcnRlcikge1xuXHRcdHJldHVybiBjb252ZXJ0ZXIodGhpcy5fbm93KTtcblx0fVxuXHRcblx0Ly8gbm8gY29udmVydGVyIFxuXHRyZXR1cm4gZm9ybWF0RnJhZ21lbnQ7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUuX3VwZGF0ZURlbHRhID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl9kZWx0YSA9IHRoaXMuX2NyZWF0ZWQgLSB0aGlzLl9ub3cuZ2V0VGltZSgpO1xufTtcblxuZnVuY3Rpb24gZ2V0WWVhcihkKSB7XG5cdHZhciB5ZWFyID0gZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG5cdHJldHVybiB5ZWFyLnN1YnN0cmluZyh5ZWFyLmxlbmd0aCAtIDIpO1xufVxuXG5mdW5jdGlvbiBnZXRGdWxsWWVhcihkKSB7XG5cdHJldHVybiBkLmdldEZ1bGxZZWFyKCk7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoKGQpIHtcblx0cmV0dXJuIHBhZChkLmdldE1vbnRoKCkgKyAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGhOYW1lKGQpIHtcblx0cmV0dXJuIE1PTlRIUy5BQkJbZC5nZXRNb250aCgpXTtcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGhGdWxsTmFtZShkKSB7XG5cdHJldHVybiBNT05USFMuRlVMTFtkLmdldE1vbnRoKCldO1xufVxuXG5mdW5jdGlvbiBnZXREYXkoZCkge1xuXHRyZXR1cm4gcGFkKGQuZ2V0RGF0ZSgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF5KGQpIHtcbiAgICB2YXIgX2RhdGUgPSBkLmdldERhdGUoKTtcbiAgICBpZiAoX2RhdGUgPiAxMCkge1xuICAgICAgICByZXR1cm4gX2RhdGUudG9TdHJpbmcoKSArICd0aCc7XG4gICAgfVxuICAgIHZhciBkYXRlID0gX2RhdGUudG9TdHJpbmcoKTtcbiAgICB2YXIgbGFzdERpZ2l0ID0gcGFyc2VJbnQoZGF0ZVtkYXRlLmxlbmd0aCAtIDFdKTtcbiAgICBzd2l0Y2ggKGxhc3REaWdpdCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBsYXN0RGlnaXQgKz0gJ3N0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsYXN0RGlnaXQgKz0gJ25kJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsYXN0RGlnaXQgKz0gJ3JkJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGFzdERpZ2l0ICs9ICd0aCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGRhdGUuc3Vic3RyaW5nKDAsIGRhdGUubGVuZ3RoIC0gMSkgKyBsYXN0RGlnaXQ7XG59XG5cbmZ1bmN0aW9uIGdldE1pbGl0YXJ5SG91cnMoZCkge1xuXHRyZXR1cm4gcGFkKGQuZ2V0SG91cnMoKSk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJzKGQpIHtcblx0dmFyIGggPSBkLmdldEhvdXJzKCk7XG5cdHZhciBob3VycyA9IChoID4gMTIpID8gaCAtIDEyIDogaDsgXG5cdHJldHVybiBwYWQoaG91cnMpO1xufVxuXG5mdW5jdGlvbiBnZXRNaW51dGVzKGQpIHtcblx0cmV0dXJuIHBhZChkLmdldE1pbnV0ZXMoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFNlY29uZHMoZCkge1xuXHRyZXR1cm4gcGFkKGQuZ2V0U2Vjb25kcygpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWlsbGlzZWMoZCkge1xuXHRyZXR1cm4gbXBhZChkLmdldE1pbGxpc2Vjb25kcygpKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla2RheShkKSB7XG5cdHJldHVybiBXRUVLUy5BQkJbZC5nZXREYXkoKV07XG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxXZWVrZGF5KGQpIHtcblx0cmV0dXJuIFdFRUtTLkZVTExbZC5nZXREYXkoKV07XG59XG5cbmZ1bmN0aW9uIGdldFBlcmlvZChkKSB7XG5cdHZhciBob3VycyA9IGQuZ2V0SG91cnMoKTtcblx0aWYgKGhvdXJzIDwgMTIpIHtcblx0XHRyZXR1cm4gUEVSSU9ELkFNO1xuXHR9XG5cdHJldHVybiBQRVJJT0QuUE07XG59XG5cbmZ1bmN0aW9uIHBhZChuKSB7XG5cdHJldHVybiAobiA8IDEwKSA/ICcwJyArIG4gOiBuO1xufVxuXG5mdW5jdGlvbiBtcGFkKG4pIHtcblx0dmFyIHBhZGRlZCA9IHBhZChuKTtcblx0cmV0dXJuICh0eXBlb2YgcGFkZGVkID09PSAnc3RyaW5nJyB8fCBwYWRkZWQgPCAxMDApID8gJzAnICsgcGFkZGVkIDogcGFkZGVkOyBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlVGltZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElOQyA9ICdpbmMnO1xudmFyIERFQyA9ICdkZWMnO1xuXG4vKlxuY29uZjoge1xuICAgICAgICBtYXg6IFtudW1iZXJdLFxuICAgICAgICBtaW46IFtudW1iZXJdLFxuICAgICAgICBpbnRlcnZhbDogW251bWJlcl0sIC8vIHVwZGF0ZSBpbnRlcnZhbFxuICAgICAgICBzdGVwOiBbbnVtYmVyXSwgLy8gdXBkYXRlIHN0ZXAgZS5nLiBpcyBzdGVwID0gMiwgaXQgd2lsbCBpbmMvZGVjIDIgZXZlcnkgaW50ZXJ2YWxcbiAgICAgICAgdHlwZTogW3N0cmluZ10sIC8vIGluYzogaW5jcmVtZW50LCBkZWM6IGRlY3JlbWVudFxuICAgICAgICBpbml0OiBbbnVtYmVyXSwgLy8gY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiBtYXggYW5kIHNtYWxsZXIgdGhhbiBtaW5cblx0bGFzdFVwZGF0ZTogWypudW1iZXJdIC8vIGFuIG9wdGlvbmFsIHRpbWVzdGFtcCB0byBjb25ydG9sIGxhc3QgdXBkYXRlIHN0YXRlXG59XG4qL1xuZnVuY3Rpb24gVGltZWROdW1iZXIoY29uZikge1xuXHR0aGlzLnZhbGlkYXRlKGNvbmYpO1xuXHR0aGlzLmNvbmYgPSBjb25mO1xuXHR0aGlzLmN1cnJlbnQgPSB0aGlzLmNvbmYuaW5pdDtcblx0dGhpcy5sYXN0VXBkYXRlID0gdGhpcy5jb25mLmxhc3RVcGRhdGUgfHwgRGF0ZS5ub3coKTtcbn1cblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHN3aXRjaCAodGhpcy5jb25mLnR5cGUpIHtcblx0XHRjYXNlIElOQzpcblx0XHRcdHJldHVybiB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZUZvckluYygpO1xuXHRcdGNhc2UgREVDOlxuXHRcdFx0cmV0dXJuIHRoaXMuY2FsY3VsYXRlQ3VycmVudFZhbHVlRm9yRGVjKCk7XG5cdH1cbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IGlzTmFOKHZhbHVlKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAodGhpcy5jdXJyZW50ICsgdmFsdWUgPiB0aGlzLmNvbmYubWF4KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHRpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbmYuaW5pdCkge1xuXHRcdC8vIGluaXRpYWwgbW9kXG5cdFx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblx0fVxuXG5cdC8vIGlmIHR5cGUgaXMgaW5jLCBpbmNyZWFzaW5nIG1lYW5zIHJlY292ZXJpbmdcblx0dGhpcy5jdXJyZW50ICs9IHZhbHVlO1xuXG5cdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5kZWMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCBpc05hTih2YWx1ZSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHRoaXMuY3VycmVudCAtIHZhbHVlIDwgdGhpcy5jb25mLm1pbikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0aWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5jb25mLmluaXQpIHtcblx0XHQvLyBpbml0aWFsIG1vZFxuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cdH1cblx0XG5cdC8vIGlmIHR5cGUgaXMgZGVjLCBkZWNyZWFzaW5nIG1lYW5zIHJlY292ZXJpbmdcblx0dGhpcy5jdXJyZW50IC09IHZhbHVlO1xuXG5cdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jdXJyZW50ID0gdGhpcy5jb25mLmluaXQ7XG5cdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5nZXRNYXhWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuY29uZi5tYXg7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5nZXRNaW5WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuY29uZi5taW47XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5nZXRJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuY29uZi5pbnRlcnZhbDtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmNvbmYuc3RlcDtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmdldExhc3RVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmxhc3RVcGRhdGU7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9iaiA9IHt9O1xuXHRvYmouY3VycmVudCA9IHRoaXMuY3VycmVudDtcblx0b2JqLmxhc3RVcGRhdGUgPSB0aGlzLmxhc3RVcGRhdGU7XG5cdGZvciAodmFyIGtleSBpbiB0aGlzLmNvbmYpIHtcblx0XHRvYmpba2V5XSA9IHRoaXMuY29uZltrZXldO1xuXHR9XG5cdHJldHVybiBvYmo7XG59O1xuXG4vLyBwcml2YXRlXG5UaW1lZE51bWJlci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoY29uZikge1xuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ21heCcpIHx8IGlzTmFOKGNvbmYubWF4KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBtYXg6ICcgKyBjb25mLm1heCk7XG5cdH1cblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdtaW4nKSB8fCBpc05hTihjb25mLm1pbikgfHwgY29uZi5taW4gPj0gY29uZi5tYXgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbWluOiAnICsgY29uZi5taW4pO1xuXHR9XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnaW50ZXJ2YWwnKSB8fCBpc05hTihjb25mLmludGVydmFsKSB8fCBjb25mLmludGVydmFsIDw9IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW50ZXJ2YWw6ICcgKyBjb25mLmludGVydmFsKTtcblx0fVxuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSB8fCAoY29uZi50eXBlICE9PSBJTkMgJiYgY29uZi50eXBlICE9PSBERUMpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHR5cGU6ICcgKyBjb25mLnR5cGUpO1xuXHR9XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IGlzTmFOKGNvbmYuaW5pdCkgfHwgY29uZi5pbml0IDw9IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5pdDogJyArIGNvbmYuaW5pdCk7XG5cdH1cblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdzdGVwJykgfHwgaXNOYU4oY29uZi5zdGVwKSB8fCBjb25mLnN0ZXAgPD0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzdGVwOiAnICsgY29uZi5zdGVwKTtcblx0fVxuXHRpZiAoY29uZi50eXBlID09PSBJTkMgJiYgY29uZi5zdGVwID4gY29uZi5tYXgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3N0ZXAgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIG1heCcpO1xuXHR9XG5cdGlmIChjb25mLnR5cGUgPT09IERFQyAmJiBjb25mLnN0ZXAgPCBjb25mLm1pbikge1xuXHRcdHRocm93IG5ldyBFcnJvcignc3RlcCBtdXN0IG5vdCBiZSBzbWFsbGVyIHRoYW4gbWluJyk7XG5cdH1cbn07XG5cbi8vIHByaXZhdGVcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5jYWxjdWxhdGVDdXJyZW50VmFsdWVGb3JJbmMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29uZi5tYXgpIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50O1xuXHR9XG5cdHZhciBub3cgPSBEYXRlLm5vdygpO1xuXHR2YXIgdGltZVBhc3QgPSBub3cgLSB0aGlzLmxhc3RVcGRhdGU7XG5cdHZhciBzdGVwcyA9IE1hdGguZmxvb3IodGltZVBhc3QgLyB0aGlzLmNvbmYuaW50ZXJ2YWwpO1xuXHR2YXIgaW5jVmFsdWUgPSB0aGlzLmNvbmYuc3RlcCAqIHN0ZXBzO1xuXHR0aGlzLmN1cnJlbnQgPSAodGhpcy5jdXJyZW50ICsgaW5jVmFsdWUgPD0gdGhpcy5jb25mLm1heCkgPyB0aGlzLmN1cnJlbnQgKyBpbmNWYWx1ZSA6IHRoaXMuY29uZi5tYXg7XG5cdGlmIChpbmNWYWx1ZSkge1xuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IG5vdztcblx0fVxuXHRyZXR1cm4gdGhpcy5jdXJyZW50O1xufTtcblxuLy8gcHJpdmF0ZVxuVGltZWROdW1iZXIucHJvdG90eXBlLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZUZvckRlYyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5jb25mLm1pbikge1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnQ7XG5cdH1cblx0dmFyIG5vdyA9IERhdGUubm93KCk7XG5cdHZhciB0aW1lUGFzdCA9IG5vdyAtIHRoaXMubGFzdFVwZGF0ZTtcblx0dmFyIHN0ZXBzID0gTWF0aC5mbG9vcih0aW1lUGFzdCAvIHRoaXMuY29uZi5pbnRlcnZhbCk7XG5cdHZhciBkZWNWYWx1ZSA9IHRoaXMuY29uZi5zdGVwICogc3RlcHM7XHRcblx0dGhpcy5jdXJyZW50ID0gKHRoaXMuY3VycmVudCAtIGRlY1ZhbHVlID49IHRoaXMuY29uZi5taW4pID8gdGhpcy5jdXJyZW50IC0gZGVjVmFsdWUgOiB0aGlzLmNvbmYubWluO1xuXHRpZiAoZGVjVmFsdWUpIHtcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBub3c7XG5cdH1cblx0cmV0dXJuIHRoaXMuY3VycmVudDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZWROdW1iZXI7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLypcbmNvbmY6IHtcblx0c3RhdGVzOiBbYXJyYXldLCAvLyBhbiBhcnJheSBvZiBzdGF0ZXNcbiAgICAgICAgaW50ZXJ2YWw6IFtudW1iZXJdLCAvLyB1cGRhdGUgaW50ZXJ2YWxcbiAgICAgICAgaW5pdDogW251bWJlcl0sIC8vIGluaXRpYWwgaW5kZXggb2Ygc3RhdGVzIGFycmF5IHRvIHN0YXJ0IHdpdGhcblx0bGFzdFVwZGF0ZTogWypudW1iZXJdIC8vIGFuIG9wdGlvbmFsIHRpbWVzdGFtcCB0byBjb25ydG9sIGxhc3QgdXBkYXRlIHN0YXRlXG5cdGxvb3A6IFsqYm9vbF0gLy8gaWYgdHJ1ZSB0aGUgcHJvZ3Jlc3Mgb2Ygc3RhdGVzIHdpbGwgYmUgYSBsb29wXG59XG4qL1xuZnVuY3Rpb24gVGltZWRTdGF0ZShjb25mKSB7XG5cdHRoaXMudmFsaWRhdGUoY29uZik7XG5cdHRoaXMuY29uZiA9IGNvbmY7XG5cdHRoaXMubGVuZ3RoID0gdGhpcy5jb25mLnN0YXRlcy5sZW5ndGg7XG5cdHRoaXMuY3VycmVudCA9IHRoaXMuY29uZi5pbml0O1xuXHR0aGlzLmxhc3RVcGRhdGUgPSB0aGlzLmNvbmYubGFzdFVwZGF0ZSB8fCBEYXRlLm5vdygpO1xufVxuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbm93ID0gRGF0ZS5ub3coKTtcblx0dmFyIHRpbWVQYXN0ID0gbm93IC0gdGhpcy5sYXN0VXBkYXRlO1xuXHR2YXIgc3RlcHMgPSBNYXRoLmZsb29yKHRpbWVQYXN0IC8gdGhpcy5jb25mLmludGVydmFsKTtcblx0dmFyIG5leHRQb3MgPSBzdGVwcyArIHRoaXMuY3VycmVudDtcdFxuXG5cdGlmIChuZXh0UG9zID49IHRoaXMubGVuZ3RoKSB7XG5cdFx0aWYgKHRoaXMuY29uZi5sb29wKSB7XG5cdFx0XHRuZXh0UG9zID0gKHN0ZXBzICsgdGhpcy5jdXJyZW50KSAtICh0aGlzLmxlbmd0aCk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2UgZG9uJ3QgbG9vcCBhbmQgc3RvcCBhdCB0aGUgZW5kIG9mIHRoZSBzdGF0ZVxuXHRcdFx0bmV4dFBvcyA9IHRoaXMubGVuZ3RoIC0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5jb25mLnN0YXRlc1tuZXh0UG9zXTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0Ly8gaWYgdmFsdWUgaXMgbm90IGdpdmVuIGl0IGRlZmF1bHRzICB0byAxXG5cdFx0dmFsdWUgPSAxO1xuXHR9XG5cdGlmICghdmFsdWUgfHwgaXNOYU4odmFsdWUpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICh0aGlzLmN1cnJlbnQgKyB2YWx1ZSA+PSB0aGlzLmxlbmd0aCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0aWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5jb25mLmluaXQpIHtcblx0XHQvLyBpbml0aWFsIG1vZFxuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cdH1cblxuXHQvLyBtb3ZlIHRoZSBjdXJyZW50IGN1cnNvciBvZiB0aGUgYXJyYXkgaW5kZXggZm9yd2FyZFxuXHR0aGlzLmN1cnJlbnQgKz0gdmFsdWU7XG5cblx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUuYmFja3dhcmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdC8vIGlmIHZhbHVlIGlzIG5vdCBnaXZlbiBpdCBkZWZhdWx0cyAgdG8gMVxuXHRcdHZhbHVlID0gMTtcblx0fVxuXHRpZiAoIXZhbHVlIHx8IGlzTmFOKHZhbHVlKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAodGhpcy5jdXJyZW50IC0gdmFsdWUgPCAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHRpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbmYuaW5pdCkge1xuXHRcdC8vIGluaXRpYWwgbW9kXG5cdFx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblx0fVxuXHRcblx0Ly8gbW92ZSB0aGUgY3VycmVudCBjdXJzb3Igb2YgdGhlIGFycmF5IGluZGV4IGJhY2t3YXJkXG5cdHRoaXMuY3VycmVudCAtPSB2YWx1ZTtcblxuXHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jdXJyZW50ID0gdGhpcy5jb25mLmluaXQ7XG5cdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLmdldFN0YXRlcyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuY29uZi5zdGF0ZXMubWFwKGZ1bmN0aW9uIChlbG0pIHtcblx0XHRyZXR1cm4gZWxtO1xuXHR9KTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUuZ2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmNvbmYuaW50ZXJ2YWw7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLmdldExhc3RVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmxhc3RVcGRhdGU7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdG9iai5jdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuXHRvYmoubGFzdFVwZGF0ZSA9IHRoaXMubGFzdFVwZGF0ZTtcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuY29uZikge1xuXHRcdG9ialtrZXldID0gdGhpcy5jb25mW2tleV07XG5cdH1cblx0cmV0dXJuIG9iajtcbn07XG5cbi8vIHByaXZhdGVcblRpbWVkU3RhdGUucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGNvbmYpIHtcblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdzdGF0ZXMnKSB8fCAhQXJyYXkuaXNBcnJheShjb25mLnN0YXRlcykgfHwgY29uZi5zdGF0ZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHN0YXRlczogJyArIGNvbmYuc3RhdGVzKTtcblx0fVxuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ2ludGVydmFsJykgfHwgaXNOYU4oY29uZi5pbnRlcnZhbCkgfHwgY29uZi5pbnRlcnZhbCA8PSAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGludGVydmFsOiAnICsgY29uZi5pbnRlcnZhbCk7XG5cdH1cblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgaXNOYU4oY29uZi5pbml0KSB8fCBjb25mLmluaXQgPCAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluaXQ6ICcgKyBjb25mLmluaXQpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVkU3RhdGU7XG5cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEFQSUtFWV9XRUFUSEVSX0FQSSA9IFwiYTg2ZGNkNmUyM2EwNDgzZDgyMjE2NDI0NjIzMTcwN1wiOyIsImltcG9ydCB7QVBJS0VZX1dFQVRIRVJfQVBJfSBmcm9tIFwiLi9BcGlDcmVkc1wiO1xyXG4vL2ltcG9ydCBnZXRDdXJyZW50V2VhdGhlciBmcm9tIFwiLi9BcGlDdXJyZW50V2VhdGhlclwiO1xyXG5pbXBvcnQgZ2V0Rm9yZWNhc3QgZnJvbSBcIi4vQXBpZm9yZWNhc3RcIjtcclxuaW1wb3J0IHJlbW92ZUNoaWxkcyBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2VhdGhlckxvY2F0aW9uKGUpe1xyXG4gIHRyeXsgICAgXHJcbiAgICBjb25zdCBzZWxlY3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3Rpb25zQ29udGFpbmVyXCIpOyBcclxuICAgIHNlbGVjdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlcGxveVwiKTtcclxuICAgIHJlbW92ZUNoaWxkcyhcIiNzZWxlY3Rpb25zQ29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdmFsdWVUb1NlYXJjaCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgdXJsU2VhcmNoQXBpID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT1cIiArIEFQSUtFWV9XRUFUSEVSX0FQSSArIFwiJnE9XCIrdmFsdWVUb1NlYXJjaDtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybFNlYXJjaEFwaSwgeyBtb2RlOiBcImNvcnNcIn0pO1xyXG4gICAgbGV0IHpvbmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgYXdhaXQgaW5zZXJ0Wm9uZXNPbkRvbSh6b25lcyk7XHJcbiAgfWNhdGNoIChlcnJvcil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9ICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0Wm9uZXNPbkRvbSh6b25lcyl7XHJcbiAgY29uc3Qgc2VsZWN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0aW9uc0NvbnRhaW5lclwiKTsgXHJcbiAgc2VsZWN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGVwbG95XCIpO1xyXG4gIHRyeSB7ICAgIFxyXG4gICAgY29uc29sZS5sb2coem9uZXMubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKHpvbmVzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiem9uZXNcIik7XHJcbiAgICBhd2FpdCB6b25lcy5mb3JFYWNoKHpvbmUgPT4ge1xyXG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGAke3pvbmUubmFtZX0sICR7em9uZS5yZWdpb259LCAke3pvbmUuY291bnRyeX0uYDtcclxuICAgICAgbmV3RWxlbWVudC52YWx1ZSA9IHpvbmUudXJsO1xyXG4gICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb25cIik7XHJcbiAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxDdXJyZW50V2VhdGhlcik7XHJcbiAgICAgIHNlbGVjdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlcGxveVwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfSAgXHJcbiAgXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNhbGxDdXJyZW50V2VhdGhlcihlKXtcclxuICBjb25zdCB2YWx1ZVRvU2VhcmNoID0gZS50YXJnZXQudmFsdWU7XHJcbiAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblwiKTtcclxuICBzZWFyY2hCb3gudmFsdWUgPSBcIlwiO1xyXG4gIGNvbnN0IHNlbGVjdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGlvbnNDb250YWluZXJcIik7XHJcbiAgc2VsZWN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGVwbG95XCIpO1xyXG4gIHJlbW92ZUNoaWxkcyhcIiNzZWxlY3Rpb25zQ29udGFpbmVyXCIpO1xyXG4gIGF3YWl0IGdldEZvcmVjYXN0KHZhbHVlVG9TZWFyY2gpXHJcbn1cclxuXHJcbiIsIi8vaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwibm9kZS1kYXRldGltZS9zcmMvZGF0ZXRpbWVcIjtcclxuaW1wb3J0IHtBUElLRVlfV0VBVEhFUl9BUEl9IGZyb20gXCIuL0FwaUNyZWRzXCI7XHJcbmltcG9ydCB7aW1hZ2VzRGF5LCBpbWFnZXNOaWdodH0gZnJvbSBcIi4vaW1hZ2VMb2FkZXJcIjtcclxuaW1wb3J0IHJlbW92ZUNoaWxkcyBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QodXJsTG9jYXRpb24pe1xyXG4gIHRyeXtcclxuICAgIGxvY2FsU3RvcmFnZS5sYXN0TG9jYXRpb25TaG93ZWQgPSB1cmxMb2NhdGlvbjtcclxuICAgIGNvbnN0IHZhbHVlVG9TZWFyY2ggPSB1cmxMb2NhdGlvbjtcclxuICAgIGNvbnN0IHVybFNlYXJjaEFwaSA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1cIiArIEFQSUtFWV9XRUFUSEVSX0FQSSArIFwiJnE9XCIrdmFsdWVUb1NlYXJjaCArIFwiJmRheXM9M1wiO1xyXG4gICAgLy9jb25zb2xlLmxvZyh7dXJsU2VhcmNoQXBpfSk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmxTZWFyY2hBcGksIHtcclxuICAgICAgJ21vZGUnOiAnY29ycycsXHJcbiAgICAgICdoZWFkZXJzJzoge1xyXG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgfVxyXG4gIH0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyh7cmVzcG9uc2V9KTtcclxuICAgIGxldCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIFxyXG4gICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QuZm9yZWNhc3QpO1xyXG4gICAgcmVuZGVyQ3VycmVudFdlYXRoZXIoZm9yZWNhc3QuY3VycmVudCk7XHJcbiAgICByZW5kZXJMb2NhdGlvbihmb3JlY2FzdC5sb2NhdGlvbik7XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0LmZvcmVjYXN0KTtcclxuICB9Y2F0Y2ggKGVycm9yKXtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH0gIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlcil7XHJcbiAgdHJ5IHtcclxuICAgIC8vY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xyXG4gICAgY29uc3Qgc3dpdGNoU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaFNlbGVjdG9yXCIpO1xyXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcclxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckRlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3Qgd2VhdGhlckltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVySW1hZ2VcIik7IFxyXG4gICAgY29uc3QgbGFzdFVwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdFVwZGF0ZVwiKTtcclxuICAgIGNvbnN0IHJlYWxGZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWFsRmVlbFwiKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodW1pZGl0eVwiKTtcclxuICAgIGNvbnN0IHdpbmREaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmREaXJcIik7XHJcbiAgICBjb25zdCB3aW5kVmVsb2NpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmRWZWxvY2l0eVwiKTtcclxuICAgIFxyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7Y3VycmVudFdlYXRoZXIuaHVtaWRpdHl9JWA7XHJcbiAgICB3aW5kRGlyLnRleHRDb250ZW50ID0gYFdpbmQgZGlyZWN0aW9uOiAke2N1cnJlbnRXZWF0aGVyLndpbmRfZGlyfWA7XHJcbiAgICB3aW5kVmVsb2NpdHkudGV4dENvbnRlbnQgPSBgV2luZCBkaXJlY3Rpb246ICR7Y3VycmVudFdlYXRoZXIud2luZF9rcGh9IGttL2hgO1xyXG5cclxuICAgIGlmIChzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9PSBcIkNcIil7XHJcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci50ZW1wX2N9IMK6Q2A7XHJcbiAgICAgIHJlYWxGZWVsLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfY30gwrpDYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci50ZW1wX2Z9IMK6RmA7XHJcbiAgICAgIHJlYWxGZWVsLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfZn0gwrpGYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25kaXRpb25cclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgLy91cGRhdGVcclxuICAgIGxldCBkYXRldGltZSA9IHJlcXVpcmUoXCJub2RlLWRhdGV0aW1lXCIpO1xyXG4gICAgbGV0IGR0ID0gZGF0ZXRpbWUuY3JlYXRlKGN1cnJlbnRXZWF0aGVyLmxhc3RVcGRhdGUpO1xyXG4gICAgbGV0IGZvcm1hdGVkID0gZHQuZm9ybWF0KFwiZCBuIEg6TVwiKTtcclxuICAgIGxhc3RVcGRhdGUudGV4dENvbnRlbnQgPSBcIkxhc3QgdXBkYXRlOiBcIiArIGZvcm1hdGVkO1xyXG4gICAgLy9pbWFnZVxyXG4gICAgbGV0IEltYWdlSWNvbiA9IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi5pY29uO1xyXG4gICAgSW1hZ2VJY29uID0gSW1hZ2VJY29uLnNwbGl0KFwiL1wiKTtcclxuICAgIGxldCBpbWFnZVNyYyA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRXZWF0aGVyLmlzX2RheSl7XHJcbiAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzRGF5W0ltYWdlSWNvbltJbWFnZUljb24ubGVuZ3RoIC0gMV1dLmRlZmF1bHQ7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzTmlnaHRbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgIH1cclxuICAgIHdlYXRoZXJJbWFnZS5zcmMgPSBpbWFnZVNyYztcclxuICAgIC8vY29uc29sZS5sb2coXCJmaW5pc2ggcmVuZGVyQ3VycmVudFdlYXRoZXJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTG9jYXRpb24oY3VycmVudFdlYXRoZXJMb2NhdGlvbil7XHJcbiAgdHJ5e1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXJMb2NhdGlvblwiKTtcclxuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJMb2NhdGlvbi5uYW1lfSwgJHtjdXJyZW50V2VhdGhlckxvY2F0aW9uLmNvdW50cnl9LmA7XHJcbiAgfWNhdGNoIChlcnJvcil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCl7XHJcbiAgY29uc3QgcmFpbkNoYW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFpbkNoYW5jZVwiKTtcclxuICBjb25zdCBhcnJheU9mRm9yZWNhc3QgPSBmb3JlY2FzdC5mb3JlY2FzdGRheTtcclxuICByYWluQ2hhbmNlLnRleHRDb250ZW50ID0gYFJhaW4gY2hhbmNlOiAke2FycmF5T2ZGb3JlY2FzdFswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3JESCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JESFwiKTtcclxuICBjb25zdCBkYWlseU9ySG91cnMgPSBzd2l0Y2hTZWxlY3RvckRILnZhbHVlO1xyXG4gIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JlY2FzdENvbnRhaW5lclwiKTtcclxuICBjb25zdCBzd2l0Y2hTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JcIik7XHJcbiAgXHJcbiAgcmVtb3ZlQ2hpbGRzKFwiI2ZvcmVjYXN0Q29udGFpbmVyXCIpO1xyXG5cclxuICBpZiAoZGFpbHlPckhvdXJzID09IFwiRFwiKSB7XHJcbiAgICBhd2FpdCAgYXJyYXlPZkZvcmVjYXN0LmZvckVhY2goIChkYXkpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhkYXkuZGF5KTtcclxuICAgICAgY29uc3QgbmV3RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbmV3RGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdEVsZW1lbnRcIik7XHJcblxyXG4gICAgICBjb25zdCB0ZW1wVW1icmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGVtcFVtYnJhbC5jbGFzc0xpc3QuYWRkKFwidGVtcFVtYnJhbFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICByYWluQ2hhbmNlLmNsYXNzTGlzdC5hZGQoXCJyYWluQ2hhbmNlXCIpO1xyXG4gICAgICByYWluQ2hhbmNlLnRleHRDb250ZW50ID0gYFJhaW4gY2hhbmNlOiAke2RheS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XHJcblxyXG4gICAgICBsZXQgdGltZSA9IChkYXkuZGF0ZV9lcG9jaCArIDg2NDAwKSAqIDEwMDAgLy8gYWRkIGEgZGF5LCBhbmQgbXVsdGlwbHkgcGVyIHNlbmNvZHNcclxuICAgICAgbGV0IGRhdGV0aW1lID0gcmVxdWlyZShcIm5vZGUtZGF0ZXRpbWVcIik7XHJcbiAgICAgIGxldCBuZXdUaW1lID0gbmV3IERhdGUodGltZSk7XHJcbiAgICAgIGxldCBkdCA9IGRhdGV0aW1lLmNyZWF0ZShuZXdUaW1lKTtcclxuICAgICAgbGV0IGZvcm1hdGVkID0gZHQuZm9ybWF0KFwiZCBuXCIpO1xyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdGVkO1xyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRlc2NyaXAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXBcIik7XHJcbiAgICAgIGRlc2NyaXAudGV4dENvbnRlbnQgPSBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgICBpZiggc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJDXCIpe1xyXG4gICAgICAgIHRlbXBVbWJyYWwudGV4dENvbnRlbnQgPSBgICR7ZGF5LmRheS5tYXh0ZW1wX2N9IC0gJHtkYXkuZGF5Lm1pbnRlbXBfY30gIMK6Q2A7XHJcbiAgICAgIH1lbHNlIGlmIChzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9PSBcIkZcIil7XHJcbiAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtkYXkuZGF5Lm1heHRlbXBfZn0gLSAke2RheS5kYXkubWludGVtcF9mfSAgwrpGYDtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZTtcclxuICAgICAgaW1hZ2Uuc3JjID0gXCJcIjtcclxuXHJcbiAgICAgIGxldCBJbWFnZUljb24gPSBkYXkuZGF5LmNvbmRpdGlvbi5pY29uO1xyXG4gICAgICBJbWFnZUljb24gPSBJbWFnZUljb24uc3BsaXQoXCIvXCIpO1xyXG4gICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlc0RheVtJbWFnZUljb25bSW1hZ2VJY29uLmxlbmd0aCAtIDFdXS5kZWZhdWx0O1xyXG4gICAgICBpbWFnZS5zcmMgPSBpbWFnZVNyYztcclxuXHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGRlc2NyaXApO1xyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQodGVtcFVtYnJhbCk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGF5KTtcclxuICAgIH0gKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiRGFpbHlcIik7XHJcbiAgfSBlbHNlIGlmIChkYWlseU9ySG91cnMgPT0gXCJIXCIpIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlO1xyXG4gICAgY29uc3Qgbm93SG91cnMgPSBub3cuZ2V0SG91cnMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IG5vd0hvdXJzOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGhvdXIgPSBhcnJheU9mRm9yZWNhc3RbMF0uaG91cltpbmRleF07XHJcblxyXG4gICAgICBjb25zdCBuZXdEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdEYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0RWxlbWVudFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBVbWJyYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0ZW1wVW1icmFsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wVW1icmFsXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZChcInJhaW5DaGFuY2VcIik7XHJcbiAgICAgIHJhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgUmFpbiBjaGFuY2U6ICR7aG91ci5jaGFuY2Vfb2ZfcmFpbn0lYFxyXG5cclxuXHJcbiAgICAgIC8vbGV0IHRpbWUgPSAoZGF5LmRhdGVfZXBvY2ggKyA4NjQwMCkgKiAxMDAwIC8vIGFkZCBhIGRheSwgYW5kIG11bHRpcGx5IHBlciBzZW5jb2RzXHJcbiAgICAgIC8vbGV0IGRhdGV0aW1lID0gcmVxdWlyZShcIm5vZGUtZGF0ZXRpbWVcIik7XHJcbiAgICAgIC8vbGV0IG5ld1RpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgICAgLy9sZXQgZHQgPSBkYXRldGltZS5jcmVhdGUobmV3VGltZSk7XHJcbiAgICAgIC8vbGV0IGZvcm1hdGVkID0gZHQuZm9ybWF0KFwiZCBuXCIpO1xyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2luZGV4fTowMGA7XHJcblxyXG4gICAgICBjb25zdCBkZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGVzY3JpcC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcFwiKTtcclxuICAgICAgZGVzY3JpcC50ZXh0Q29udGVudCA9IGhvdXIuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAgIGlmKCBzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9PSBcIkNcIil7XHJcbiAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtob3VyLnRlbXBfY30gwrpDYDtcclxuICAgICAgfWVsc2UgaWYgKHN3aXRjaFNlbGVjdG9yLnZhbHVlID09IFwiRlwiKXtcclxuICAgICAgICB0ZW1wVW1icmFsLnRleHRDb250ZW50ID0gYCAke2hvdXIudGVtcF9mfSAgwrpGYDtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZTtcclxuICAgICAgaW1hZ2Uuc3JjID0gXCJcIjtcclxuXHJcbiAgICAgIGxldCBJbWFnZUljb24gPSBob3VyLmNvbmRpdGlvbi5pY29uO1xyXG4gICAgICBJbWFnZUljb24gPSBJbWFnZUljb24uc3BsaXQoXCIvXCIpO1xyXG4gICAgICBsZXQgaW1hZ2VTcmM7XHJcbiAgICAgIGlmIChob3VyLmlzX2RheSl7XHJcbiAgICAgICAgaW1hZ2VTcmMgPSBhd2FpdCBpbWFnZXNEYXlbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzTmlnaHRbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgICAgfVxyXG4gICAgICBpbWFnZS5zcmMgPSBpbWFnZVNyYztcclxuXHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGRlc2NyaXApO1xyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQodGVtcFVtYnJhbCk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGF5KTsgICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKCBub3dIb3VycyAhPSAwICl7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub3dIb3VyczsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGhvdXIgPSBhcnJheU9mRm9yZWNhc3RbMV0uaG91cltpbmRleF07XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbmV3RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdEYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0RWxlbWVudFwiKTtcclxuICBcclxuICAgICAgICBjb25zdCB0ZW1wVW1icmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0ZW1wVW1icmFsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wVW1icmFsXCIpO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZChcInJhaW5DaGFuY2VcIik7XHJcbiAgICAgICAgcmFpbkNoYW5jZS50ZXh0Q29udGVudCA9IGBSYWluIGNoYW5jZTogJHtob3VyLmNoYW5jZV9vZl9yYWlufSVgXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2luZGV4fTowMGA7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGVzY3JpcC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcFwiKTtcclxuICAgICAgICBkZXNjcmlwLnRleHRDb250ZW50ID0gaG91ci5jb25kaXRpb24udGV4dDtcclxuICAgICAgICBpZiggc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJDXCIpe1xyXG4gICAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtob3VyLnRlbXBfY30gwrpDYDtcclxuICAgICAgICB9ZWxzZSBpZiAoc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJGXCIpe1xyXG4gICAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtob3VyLnRlbXBfZn0gIMK6RmA7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IFwiXCI7XHJcbiAgXHJcbiAgICAgICAgbGV0IEltYWdlSWNvbiA9IGhvdXIuY29uZGl0aW9uLmljb247XHJcbiAgICAgICAgSW1hZ2VJY29uID0gSW1hZ2VJY29uLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBsZXQgaW1hZ2VTcmM7XHJcbiAgICAgICAgaWYgKGhvdXIuaXNfZGF5KXtcclxuICAgICAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzRGF5W0ltYWdlSWNvbltJbWFnZUljb24ubGVuZ3RoIC0gMV1dLmRlZmF1bHQ7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgaW1hZ2VTcmMgPSBhd2FpdCBpbWFnZXNOaWdodFtJbWFnZUljb25bSW1hZ2VJY29uLmxlbmd0aCAtIDFdXS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZVNyYztcclxuICBcclxuICAgICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQoZGVzY3JpcCk7XHJcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKHRlbXBVbWJyYWwpO1xyXG4gICAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEYXkpOyAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuLzExMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTMucG5nXCIsXG5cdFwiLi8xMTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTE2LnBuZ1wiLFxuXHRcIi4vMTE5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExOS5wbmdcIixcblx0XCIuLzEyMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMjIucG5nXCIsXG5cdFwiLi8xNDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTQzLnBuZ1wiLFxuXHRcIi4vMTc2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE3Ni5wbmdcIixcblx0XCIuLzE3OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xNzkucG5nXCIsXG5cdFwiLi8xODIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTgyLnBuZ1wiLFxuXHRcIi4vMTg1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE4NS5wbmdcIixcblx0XCIuLzIwMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yMDAucG5nXCIsXG5cdFwiLi8yMjcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjI3LnBuZ1wiLFxuXHRcIi4vMjMwLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIzMC5wbmdcIixcblx0XCIuLzI0OC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNDgucG5nXCIsXG5cdFwiLi8yNjAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjYwLnBuZ1wiLFxuXHRcIi4vMjYzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2My5wbmdcIixcblx0XCIuLzI2Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjYucG5nXCIsXG5cdFwiLi8yODEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjgxLnBuZ1wiLFxuXHRcIi4vMjg0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI4NC5wbmdcIixcblx0XCIuLzI5My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTMucG5nXCIsXG5cdFwiLi8yOTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjk2LnBuZ1wiLFxuXHRcIi4vMjk5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5OS5wbmdcIixcblx0XCIuLzMwMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDIucG5nXCIsXG5cdFwiLi8zMDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzA1LnBuZ1wiLFxuXHRcIi4vMzA4LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwOC5wbmdcIixcblx0XCIuLzMxMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTEucG5nXCIsXG5cdFwiLi8zMTQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzE0LnBuZ1wiLFxuXHRcIi4vMzE3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxNy5wbmdcIixcblx0XCIuLzMyMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjAucG5nXCIsXG5cdFwiLi8zMjMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzIzLnBuZ1wiLFxuXHRcIi4vMzI2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyNi5wbmdcIixcblx0XCIuLzMyOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjkucG5nXCIsXG5cdFwiLi8zMzIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzMyLnBuZ1wiLFxuXHRcIi4vMzM1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzNS5wbmdcIixcblx0XCIuLzMzOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzgucG5nXCIsXG5cdFwiLi8zNTAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzUwLnBuZ1wiLFxuXHRcIi4vMzUzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1My5wbmdcIixcblx0XCIuLzM1Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTYucG5nXCIsXG5cdFwiLi8zNTkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzU5LnBuZ1wiLFxuXHRcIi4vMzYyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2Mi5wbmdcIixcblx0XCIuLzM2NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjUucG5nXCIsXG5cdFwiLi8zNjgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzY4LnBuZ1wiLFxuXHRcIi4vMzcxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3MS5wbmdcIixcblx0XCIuLzM3NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzQucG5nXCIsXG5cdFwiLi8zNzcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzc3LnBuZ1wiLFxuXHRcIi4vMzg2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM4Ni5wbmdcIixcblx0XCIuLzM4OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zODkucG5nXCIsXG5cdFwiLi8zOTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzkyLnBuZ1wiLFxuXHRcIi4vMzk1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuLzExMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExMy5wbmdcIixcblx0XCIuLzExNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExNi5wbmdcIixcblx0XCIuLzExOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExOS5wbmdcIixcblx0XCIuLzEyMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzEyMi5wbmdcIixcblx0XCIuLzE0My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE0My5wbmdcIixcblx0XCIuLzE3Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3Ni5wbmdcIixcblx0XCIuLzE3OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3OS5wbmdcIixcblx0XCIuLzE4Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4Mi5wbmdcIixcblx0XCIuLzE4NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4NS5wbmdcIixcblx0XCIuLzIwMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIwMC5wbmdcIixcblx0XCIuLzIyNy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIyNy5wbmdcIixcblx0XCIuLzIzMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIzMC5wbmdcIixcblx0XCIuLzI0OC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI0OC5wbmdcIixcblx0XCIuLzI2MC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2MC5wbmdcIixcblx0XCIuLzI2My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2My5wbmdcIixcblx0XCIuLzI2Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2Ni5wbmdcIixcblx0XCIuLzI4MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4MS5wbmdcIixcblx0XCIuLzI4NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4NC5wbmdcIixcblx0XCIuLzI5My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5My5wbmdcIixcblx0XCIuLzI5Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5Ni5wbmdcIixcblx0XCIuLzI5OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5OS5wbmdcIixcblx0XCIuLzMwMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwMi5wbmdcIixcblx0XCIuLzMwNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwNS5wbmdcIixcblx0XCIuLzMwOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwOC5wbmdcIixcblx0XCIuLzMxMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxMS5wbmdcIixcblx0XCIuLzMxNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNC5wbmdcIixcblx0XCIuLzMxNy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNy5wbmdcIixcblx0XCIuLzMyMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMC5wbmdcIixcblx0XCIuLzMyMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMy5wbmdcIixcblx0XCIuLzMyNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyNi5wbmdcIixcblx0XCIuLzMyOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyOS5wbmdcIixcblx0XCIuLzMzMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzMi5wbmdcIixcblx0XCIuLzMzNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzNS5wbmdcIixcblx0XCIuLzMzOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzOC5wbmdcIixcblx0XCIuLzM1MC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1MC5wbmdcIixcblx0XCIuLzM1My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1My5wbmdcIixcblx0XCIuLzM1Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1Ni5wbmdcIixcblx0XCIuLzM1OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1OS5wbmdcIixcblx0XCIuLzM2Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2Mi5wbmdcIixcblx0XCIuLzM2NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2NS5wbmdcIixcblx0XCIuLzM2OC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2OC5wbmdcIixcblx0XCIuLzM3MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3MS5wbmdcIixcblx0XCIuLzM3NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3NC5wbmdcIixcblx0XCIuLzM3Ny5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3Ny5wbmdcIixcblx0XCIuLzM4Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4Ni5wbmdcIixcblx0XCIuLzM4OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4OS5wbmdcIixcblx0XCIuLzM5Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5Mi5wbmdcIixcblx0XCIuLzM5NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodCBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJpbXBvcnQgc2VhcmNoTG9jYXRpb24gZnJvbSBcIi4vQXBpU2VhcmNoTG9jYXRpb25cIjtcclxuLy9pbXBvcnQgZ2V0Q3VycmVudFdlYXRoZXIgZnJvbSBcIi4vQXBpQ3VycmVudFdlYXRoZXJcIjtcclxuaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL0FwaWZvcmVjYXN0XCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURvbSgpe1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kfSlgO1xyXG4gIGNvbnNvbGUubG9nKCBgdXJsKCR7YmFja2dyb3VuZH0pYCk7XHJcblxyXG4vKiogVE9QICovXHJcblxyXG5cclxuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9wXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wKTtcclxuXHJcbiAgLyoqIExvY2F0aW9uIGFuZCBzd2l0Y2ggc2VsZWN0b3IgY29udGFpbmVyKi9cclxuICBjb25zdCBsb2NhY3Rpb25BbmRTd2l0Y2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibG9jYXRpb25cIik7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixcIkxvY2F0aW9uLi4uXCIpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzZWFyY2hMb2NhdGlvbik7XHJcbiAgLyoqIFN3aXRjaCBDZWxzaXVzIEZhcmVuaGVpdCAqL1xyXG4gICAgY29uc3Qgc3dpdGNoQ0YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoQ0Yuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzd2l0Y2hDRlwiKTtcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzd2l0Y2hTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic3dpdGNoU2VsZWN0b3JcIik7ICAgIFxyXG5cclxuICAgIGNvbnN0IHN3aXRjaENlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoQ2Vsc2l1cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaENlbHNpdXNcIik7XHJcbiAgICBzd2l0Y2hDZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RDZWxzaXVzKTtcclxuICAgIHN3aXRjaENlbHNpdXMudGV4dENvbnRlbnQgPSBcIkNcIjtcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hGYXJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoRmFyZW5oZWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3dpdGNoRmFyZW5oZWl0XCIpO1xyXG4gICAgc3dpdGNoRmFyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RGYXJlbmhlaXQpO1xyXG4gICAgc3dpdGNoRmFyZW5oZWl0LnRleHRDb250ZW50ID0gXCJGXCI7XHJcblxyXG4gICAgXHJcbiAgICBzd2l0Y2hDRi5hcHBlbmRDaGlsZChzd2l0Y2hDZWxzaXVzKTtcclxuICAgIHN3aXRjaENGLmFwcGVuZENoaWxkKHN3aXRjaFNlbGVjdG9yKTtcclxuICAgIHN3aXRjaENGLmFwcGVuZENoaWxkKHN3aXRjaEZhcmVuaGVpdCk7XHJcblxyXG4gICAgbG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGxvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzd2l0Y2hDRik7XHJcbiAgXHJcbiAgY29uc3Qgc2VsZWN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2VsZWN0aW9uc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2VsZWN0aW9uc0NvbnRhaW5lclwiKTtcclxuICB0b3AuYXBwZW5kQ2hpbGQobG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVyKTtcclxuICB0b3AuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uc0NvbnRhaW5lcik7XHJcblxyXG4vKiogREFTSEJPQVJEICovXHJcbiAgY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkYXNoYm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIixcImRhc2hib2FyZFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XHJcbiAgLyoqIEN1cnJlbnQgaW5mbyBDb250YWluZXIgKi9cclxuICAgIGNvbnN0IGN1cnJlbnRJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGN1cnJlbnRJbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjdXJyZW50SW5mb0NvbnRhaW5lclwiKVxyXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwid2VhdGhlckRlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3Qgd2VhdGhlckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB3ZWF0aGVySW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcIndlYXRoZXJJbWFnZVwiKVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyTG9jYXRpb25cIik7XHJcbiAgICBjb25zdCBsYXN0VXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxhc3RVcGRhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsYXN0VXBkYXRlXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIixcInRlbXBcIik7XHJcblxyXG4gICAgXHJcbiBcclxuXHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xyXG4gICAgY3VycmVudEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uKTtcclxuICAgIGN1cnJlbnRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApOyAgICAgICAgICAgXHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYXN0VXBkYXRlKTtcclxuICAgIFxyXG4gIFxyXG5cclxuICAgIC8qKiBSaWd0aCBzaWRlIGluZm8gY29udGFpbmVyICovICAgIFxyXG4gICAgY29uc3QgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByYWluQ2hhbmNlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJyYWluQ2hhbmNlXCIpO1xyXG5cclxuICAgIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkaXRpb25hbEluZm9cIik7XHJcblxyXG4gICAgY29uc3QgcmVhbEZlZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVhbEZlZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZWFsRmVlbFwiKTtcclxuICAgICBcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGh1bWlkaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaHVtaWRpdHlcIik7XHJcbiAgICBjb25zdCB3aW5kRGlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdpbmREaXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aW5kRGlyXCIpO1xyXG4gICAgY29uc3Qgd2luZFZlbG9jaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdpbmRWZWxvY2l0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndpbmRWZWxvY2l0eVwiKTtcclxuXHJcbiAgICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKHJlYWxGZWVsKTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKHdpbmREaXIpO1xyXG4gICAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQod2luZFZlbG9jaXR5KTtcclxuXHJcblxyXG5cclxuIGRhc2hib2FyZC5hcHBlbmRDaGlsZChjdXJyZW50SW5mb0NvbnRhaW5lcik7XHJcbiBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQoYWRkaXRpb25hbEluZm8pO1xyXG5cclxuXHJcbi8qKiBGT09URVIgKi9cclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZm9vdGVyXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcblxyXG4gIC8qKiBTd2l0Y2ggZGFpbHkgLyBob3VycyAgKi9cclxuXHJcbiAgY29uc3Qgc3dpdGNoREggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHN3aXRjaERILnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3dpdGNoREhcIik7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoU2VsZWN0b3JESCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzd2l0Y2hTZWxlY3RvckRILnNldEF0dHJpYnV0ZShcImlkXCIsXCJzd2l0Y2hTZWxlY3RvckRIXCIpOyAgXHJcbiAgICBzd2l0Y2hTZWxlY3RvckRILnZhbHVlID0gXCJEXCI7ICBcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoRGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3dpdGNoRGF5XCIpO1xyXG4gICAgc3dpdGNoRGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHNlbGVjdERheXMpO1xyXG4gICAgc3dpdGNoRGF5LnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xyXG5cclxuICAgIGNvbnN0IHN3aXRjaEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaEhvdXJcIik7XHJcbiAgICBzd2l0Y2hIb3VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHNlbGVjdEhvdXJzKTtcclxuICAgIHN3aXRjaEhvdXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcblxyXG4gICAgXHJcbiAgICBzd2l0Y2hESC5hcHBlbmRDaGlsZChzd2l0Y2hEYXkpO1xyXG4gICAgc3dpdGNoREguYXBwZW5kQ2hpbGQoc3dpdGNoU2VsZWN0b3JESCk7XHJcbiAgICBzd2l0Y2hESC5hcHBlbmRDaGlsZChzd2l0Y2hIb3VyKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc3dpdGNoREgpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JlY2FzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcmVjYXN0Q29udGFpbmVyXCIpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcclxuXHJcblxyXG4vKiogRGVmYXVsdCBjb25maWcgKi9cclxuICAvL3RoZW4gaSB0aGluayB0byBpbXBsZW1lbnRhdGUgYW4gaXAgbG9jYXRpb24uXHJcbiAgbG9jYWxTdG9yYWdlLmZpcnN0VXJsTG9jYXRpb24gPSBcInB1ZXJ0by1vcmRhei1ib2xpdmFyLXZlbmV6dWVsYVwiOyBcclxuICBzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9IFwiQ1wiOyAvL2ZpcnN0IGNlbHNpdXNcclxuICAvL2dldEN1cnJlbnRXZWF0aGVyKGxvY2FsU3RvcmFnZS5maXJzdFVybExvY2F0aW9uKTtcclxuICBnZXRGb3JlY2FzdChsb2NhbFN0b3JhZ2UuZmlyc3RVcmxMb2NhdGlvbik7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RGYXJlbmhlaXQoKXtcclxuICBjb25zdCBzd2l0Y2hTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JcIik7XHJcbiAgc3dpdGNoU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImZhcmVuaGVpdFwiKTtcclxuICBzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9IFwiRlwiO1xyXG4gIGdldEZvcmVjYXN0KGxvY2FsU3RvcmFnZS5sYXN0TG9jYXRpb25TaG93ZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RDZWxzaXVzKCl7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaFNlbGVjdG9yXCIpO1xyXG4gIHN3aXRjaFNlbGVjdG9yLnZhbHVlID0gXCJDXCI7XHJcbiAgc3dpdGNoU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZShcImZhcmVuaGVpdFwiKTtcclxuICBnZXRGb3JlY2FzdChsb2NhbFN0b3JhZ2UubGFzdExvY2F0aW9uU2hvd2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0SG91cnMoKXtcclxuICBjb25zdCBzd2l0Y2hTZWxlY3RvckRIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hTZWxlY3RvckRIXCIpO1xyXG4gIHN3aXRjaFNlbGVjdG9yREguY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xyXG4gIHN3aXRjaFNlbGVjdG9yREgudmFsdWUgPSBcIkhcIjtcclxuICBnZXRGb3JlY2FzdChsb2NhbFN0b3JhZ2UubGFzdExvY2F0aW9uU2hvd2VkKTtcclxufVxyXG5mdW5jdGlvbiBzZWxlY3REYXlzKCl7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3JESCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JESFwiKTtcclxuICBzd2l0Y2hTZWxlY3RvckRILmNsYXNzTGlzdC5yZW1vdmUoXCJob3Vyc1wiKTtcclxuICBzd2l0Y2hTZWxlY3RvckRILnZhbHVlID0gXCJEXCI7XHJcbiAgZ2V0Rm9yZWNhc3QobG9jYWxTdG9yYWdlLmxhc3RMb2NhdGlvblNob3dlZCk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDaGlsZHMoc2VsZWN0b3Ipe1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyAgXHJcbiAgd2hpbGUoY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XHJcbiAgfSAgXHJcbn0iLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIGxldCBpbWFnZXMgPSB7fTtcclxuICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbi8vIEltYWdlbiBsb2FkZXJcclxuLy9pbXBvcnQgaW1hZ2VzIGZyb20gXCIuLi9pbWFnZXMvcHJ1ZWJhYS5qcGVnXCI7XHJcbmV4cG9ydCBjb25zdCBpbWFnZXNEYXkgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvZGF5JywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG5leHBvcnQgY29uc3QgaW1hZ2VzTmlnaHQgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvbmlnaHQnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XHJcbi8vaW1wb3J0IGJhY2tncm91ZCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91ZC5qcGdcIjtcclxuLy9jb25zdCBpbWFnZXNOYW1lcyA9IE9iamVjdC5rZXlzKGltYWdlcyk7IiwiaW1wb3J0IGNyZWF0ZURvbSBmcm9tIFwiLi9jcmVhdGVEb21cIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY3JlYXRlRG9tKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9