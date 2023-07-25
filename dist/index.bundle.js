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
  width: 50%;
  color: white;
  font-weight: bold;
  color: white;
  font-weight: bold;
  text-shadow:  -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;

}

#selectionsContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50vw;
  top: -100vh;
  z-index: 0;
  transition: top 1s ;
  border-radius: 8px;
  
  
}

#selectionsContainer.deploy {
  top: 10vh;
}

.selection {
  border: 1px solid white;
  border-radius: 8px;
  padding: 0.5%;
  margin: 0.5%;
  color: white;
  font-weight: bold;
  text-shadow:  -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
}

#additionalInfo{
  width: 30%;
  color: white;
  font-weight: bold;
  color: white;
  font-weight: bold;
  text-shadow:  -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
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
  color: white;
  font-weight: bold;
  text-shadow:  -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
}

img {
  height: 50px;
  width: 50px;
  border: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,0BAA0B,uBAAuB,YAAY;EAC7D,8BAA8B;EAC9B,kCAAkC;;AAEpC;;AAEA;EACE,aAAa;EACb,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;EACjC,gBAAgB;EAChB,gBAAgB;EAChB;;;gCAG8B;AAChC;;AAEA;EACE,YAAY;EACZ;;;gCAG8B;AAChC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,iCAAiC;EACjC,UAAU;EACV,OAAO;EACP,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,UAAU;EACV,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,qBAAqB;EACrB,eAAe;EACf,uCAAuC;EACvC,UAAU;AACZ;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;;AAEhC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,kBAAkB;;;AAGpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,QAAQ;;AAEV;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  background-size:     cover;                      /* <------ */\r\n  background-repeat:   no-repeat;\r\n  background-position: center center;\r\n\r\n}\r\n\r\n#locactionAndSwitchContainer{\r\n  display: flex;\r\n  gap: 2%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 10vh;\r\n  z-index: 1;\r\n}\r\n\r\n#top {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2%;\r\n  justify-content: center;\r\n  align-items: center;  \r\n}\r\n\r\n#location{\r\n  height: 4.6vh;\r\n  width: 20vw;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: rgba(0,0,0,0.2);\r\n  min-width: 120px;\r\n  max-width: 150px;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n::placeholder{\r\n  color: white;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#switchCF, #switchDH {\r\n  display: flex;\r\n  width: 20vw;\r\n  height: 5vh;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  background-color: rgba(0,0,0,0.2);  \r\n  z-index: 1;\r\n  gap: 2%;\r\n  position: relative;  \r\n  color: white;\r\n  min-width: 120px;\r\n  max-width: 150px;\r\n}\r\n\r\n#switchCelsius , #switchFarenheit, #switchHour, #switchDay{\r\n  display: flex;\r\n  height: 6vh;\r\n  width: 50%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#switchSelector, #switchSelectorDH{\r\n  position: absolute;\r\n  left: 0%;\r\n  border-radius: 8px;\r\n  height: 5vh;\r\n  width: 50%;\r\n  transition: left 0.3s;\r\n  cursor: pointer;\r\n  background-color: rgba(255,255,255,0.3);\r\n  z-index: 2;  \r\n}\r\n\r\n#switchSelector.farenheit, #switchSelectorDH.hours{\r\n  left: 50%;\r\n}\r\n\r\n#weatherImage{\r\n  height: 100px;\r\n  width: 100px;\r\n  border: none;\r\n}\r\n\r\n#dashboard{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;  \r\n  margin: 1%;\r\n}\r\n\r\n#temp{\r\n  font-size: xx-large;\r\n  font-weight: 900;\r\n  text-align: left;\r\n}\r\n\r\n#footer{\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 35vh;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n#currentInfoContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 50%;\r\n  color: white;\r\n  font-weight: bold;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n\r\n}\r\n\r\n#selectionsContainer{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  width: 50vw;\r\n  top: -100vh;\r\n  z-index: 0;\r\n  transition: top 1s ;\r\n  border-radius: 8px;\r\n  \r\n  \r\n}\r\n\r\n#selectionsContainer.deploy {\r\n  top: 10vh;\r\n}\r\n\r\n.selection {\r\n  border: 1px solid white;\r\n  border-radius: 8px;\r\n  padding: 0.5%;\r\n  margin: 0.5%;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#additionalInfo{\r\n  width: 30%;\r\n  color: white;\r\n  font-weight: bold;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#forecastContainer{\r\n  display: flex;\r\n  height: 30vh;\r\n  width: 80vw;\r\n  overflow-x: auto;\r\n  overflow-y: none;\r\n  gap: 4px;\r\n  \r\n}\r\n\r\n.forecastElement{\r\n  flex: 0 0 150px;\r\n  height: 18vh;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\nimg {\r\n  height: 50px;\r\n  width: 50px;\r\n  border: none;\r\n}"],"sourceRoot":""}]);
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
      let formated = dt.format("w d n");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsd0JBQXdCLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksUUFBUSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxL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LGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7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cUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ25WYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBVSxDQUFDO0FBQ2pELHNCQUFzQixxRUFBVSxDQUFDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBEQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEVBQUUsd0RBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2I7Ozs7Ozs7Ozs7Ozs7OztBQzFMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUEyQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNEJBQTRCLDJFQUFtRTtBQUMvRiw4QkFBOEIsNkVBQXFFO0FBQzFHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWG9DO0FBQ0o7QUFDaEM7QUFDQSxzREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExMy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTE2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzEyMi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTQzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xNzYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE3OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTgyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xODUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIwMC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjI3LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yMzAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI0OC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjYwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjgxLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yODQucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjk2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwMi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzA1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxMS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzE0LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTcucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyMC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzIzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyOS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzMyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzOC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzUwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzU5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2NS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzY4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzEucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3NC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzc3LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zODYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM4OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzkyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zOTUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTEzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExNi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTIyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE0My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNzYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTc5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4Mi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xODUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjAwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIyNy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMzAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjQ4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2MC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjY2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4MS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yODQucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjkzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzAyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwNS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzExLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTcucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzIwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzI5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzMi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzM4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1MC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzU2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzY1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2OC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzEucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzc0LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3Ny5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zODYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzg5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5Mi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zOTUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vZGUtZGF0ZXRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9kZS1kYXRldGltZS9zcmMvZGF0ZXRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9kZS1kYXRldGltZS9zcmMvdGltZWRudW1iZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9kZS1kYXRldGltZS9zcmMvdGltZWRzdGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0FwaUNyZWRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0FwaVNlYXJjaExvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0FwaWZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3JlYXRlRG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogICAgIGNvdmVyOyAgICAgICAgICAgICAgICAgICAgICAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICAgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4jbG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXHJcbn1cclxuXHJcbiNsb2NhdGlvbntcclxuICBoZWlnaHQ6IDQuNnZoO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xyXG59XHJcblxyXG4jc3dpdGNoQ0YsICNzd2l0Y2hESCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDV2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAgXHJcbiAgei1pbmRleDogMTtcclxuICBnYXA6IDIlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbiNzd2l0Y2hDZWxzaXVzICwgI3N3aXRjaEZhcmVuaGVpdCwgI3N3aXRjaEhvdXIsICNzd2l0Y2hEYXl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDZ2aDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcclxufVxyXG5cclxuI3N3aXRjaFNlbGVjdG9yLCAjc3dpdGNoU2VsZWN0b3JESHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgei1pbmRleDogMjsgIFxyXG59XHJcblxyXG4jc3dpdGNoU2VsZWN0b3IuZmFyZW5oZWl0LCAjc3dpdGNoU2VsZWN0b3JESC5ob3Vyc3tcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbiN3ZWF0aGVySW1hZ2V7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jZGFzaGJvYXJke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgIFxyXG4gIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbiN0ZW1we1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jZm9vdGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2N1cnJlbnRJbmZvQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcblxyXG59XHJcblxyXG4jc2VsZWN0aW9uc0NvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgdG9wOiAtMTAwdmg7XHJcbiAgei1pbmRleDogMDtcclxuICB0cmFuc2l0aW9uOiB0b3AgMXMgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBcclxuICBcclxufVxyXG5cclxuI3NlbGVjdGlvbnNDb250YWluZXIuZGVwbG95IHtcclxuICB0b3A6IDEwdmg7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAwLjUlO1xyXG4gIG1hcmdpbjogMC41JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcbn1cclxuXHJcbiNhZGRpdGlvbmFsSW5mb3tcclxuICB3aWR0aDogMzAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcbn1cclxuXHJcbiNmb3JlY2FzdENvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMzB2aDtcclxuICB3aWR0aDogODB2dztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IG5vbmU7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgXHJcbn1cclxuXHJcbi5mb3JlY2FzdEVsZW1lbnR7XHJcbiAgZmxleDogMCAwIDE1MHB4O1xyXG4gIGhlaWdodDogMTh2aDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCLHVCQUF1QixZQUFZO0VBQzdELDhCQUE4QjtFQUM5QixrQ0FBa0M7O0FBRXBDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEI7OztnQ0FHOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1o7OztnQ0FHOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjs7O2dDQUc4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjs7O2dDQUc4Qjs7QUFFaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7OztBQUdwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjs7O2dDQUc4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTs7QUFFVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7OztnQ0FHOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNsb2NhY3Rpb25BbmRTd2l0Y2hDb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiN0b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbntcXHJcXG4gIGhlaWdodDogNC42dmg7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlcntcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoQ0YsICNzd2l0Y2hESCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTsgIFxcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGdhcDogMiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoQ2Vsc2l1cyAsICNzd2l0Y2hGYXJlbmhlaXQsICNzd2l0Y2hIb3VyLCAjc3dpdGNoRGF5e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNnZoO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2hTZWxlY3RvciwgI3N3aXRjaFNlbGVjdG9yREh7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGhlaWdodDogNXZoO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXHJcXG4gIHotaW5kZXg6IDI7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaFNlbGVjdG9yLmZhcmVuaGVpdCwgI3N3aXRjaFNlbGVjdG9yREguaG91cnN7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVySW1hZ2V7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGFzaGJvYXJke1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgIFxcclxcbiAgbWFyZ2luOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXB7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMzV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnRJbmZvQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbnNDb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgdG9wOiAtMTAwdmg7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogdG9wIDFzIDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIFxcclxcbiAgXFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb25zQ29udGFpbmVyLmRlcGxveSB7XFxyXFxuICB0b3A6IDEwdmg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb24ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAwLjUlO1xcclxcbiAgbWFyZ2luOiAwLjUlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZGl0aW9uYWxJbmZve1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZvcmVjYXN0Q29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIG92ZXJmbG93LXk6IG5vbmU7XFxyXFxuICBnYXA6IDRweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RFbGVtZW50e1xcclxcbiAgZmxleDogMCAwIDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxOHZoO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTE2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTE5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTIyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTQzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTc2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTc5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTgyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTg1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjAwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjI3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjMwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjQ4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjYwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjYzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjY2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjgxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjg0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjkzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjk2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjk5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzAyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzA1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzA4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzExLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzE0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzE3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzIwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzIzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzI2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzI5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzMyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzM1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzM4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzUwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzU5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzYyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzcxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzc0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzc3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzg2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzg5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzkyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzk1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTE5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMjIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE0My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTc2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTg1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIyNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjMwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjYzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjg0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjk5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzA4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzE3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzI2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzM1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzYyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzcxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzg2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zODkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzk1LnBuZ1wiOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIERhdGVUaW1lID0gcmVxdWlyZSgnLi9zcmMvZGF0ZXRpbWUnKTtcbnZhciBUaW1lZE51bWJlciA9IHJlcXVpcmUoJy4vc3JjL3RpbWVkbnVtYmVyJyk7XG52YXIgVGltZWRTdGF0ZSA9IHJlcXVpcmUoJy4vc3JjL3RpbWVkc3RhdGUnKTtcblxuLy8gZ2xvYmFsIG9mZnNldHMgZm9yIGRhdGV0aW1lXG52YXIgb2Zmc2V0cyA9IHtcblx0ZGF5czogMCxcblx0aG91cnM6IDBcbn07XG5cbi8vIGdsb2JhbCBkZWZhdWx0IGZvcm1hdFxudmFyIGdsb2JhbERlZmF1bHRGb3JtYXQgPSBudWxsO1xuXG5leHBvcnRzLnNldE9mZnNldEluRGF5cyA9IGZ1bmN0aW9uIChkKSB7XG5cblx0aWYgKGlzTmFOKGQpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkT2Zmc2V0Jyk7XG5cdH1cblxuXHRvZmZzZXRzLmRheXMgPSBkO1xufTtcblxuZXhwb3J0cy5zZXRPZmZzZXRJbkhvdXJzID0gZnVuY3Rpb24gKGgpIHtcblxuXHRpZiAoaXNOYU4oaCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWRPZmZzZXQnKTtcblx0fVxuXG5cdG9mZnNldHMuaG91cnMgPSBoO1xufTtcblxuZXhwb3J0cy5zZXREZWZhdWx0Rm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuXHRnbG9iYWxEZWZhdWx0Rm9ybWF0ID0gZm9ybWF0O1xufTtcblxuZXhwb3J0cy5zZXRXZWVrTmFtZXMgPSBmdW5jdGlvbiAobGlzdCkge1xuXHREYXRlVGltZS5zZXRXZWVrTmFtZXMobGlzdCk7XG59O1xuXG5leHBvcnRzLnNldFNob3J0V2Vla05hbWVzID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0RGF0ZVRpbWUuc2V0U2hvcnRXZWVrTmFtZXMobGlzdCk7XG59O1xuXG5leHBvcnRzLnNldE1vbnRoTmFtZSA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdERhdGVUaW1lLnNldE1vbnRoTmFtZShsaXN0KTtcbn07XG5cbmV4cG9ydHMuc2V0U2hvcnRNb250aE5hbWVzID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0RGF0ZVRpbWUuc2V0U2hvcnRNb250aE5hbWUobGlzdCk7XG59O1xuXG5leHBvcnRzLnNldFBlcmlvZCA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdERhdGVUaW1lLnNldFBlcmlvZChsaXN0KTtcbn07XG5cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gKG5vdywgZGVmYXVsdEZvcm1hdCkge1xuXG5cdGlmICghZGVmYXVsdEZvcm1hdCAmJiBnbG9iYWxEZWZhdWx0Rm9ybWF0KSB7XG5cdFx0ZGVmYXVsdEZvcm1hdCA9IGdsb2JhbERlZmF1bHRGb3JtYXQ7XG5cdH1cblxuXHR2YXIgZCA9IG5ldyBEYXRlVGltZShub3csIGRlZmF1bHRGb3JtYXQpO1xuXG5cdGlmIChvZmZzZXRzLmRheXMgIT09IDApIHtcblx0XHRkLm9mZnNldEluRGF5cyhvZmZzZXRzLmRheXMpO1xuXHR9XG5cblx0aWYgKG9mZnNldHMuaG91cnMgIT09IDApIHtcblx0XHRkLm9mZnNldEluSG91cnMob2Zmc2V0cy5ob3Vycyk7XG5cdH1cblxuXHRyZXR1cm4gZDtcbn07XG5cbmV4cG9ydHMuY3JlYXRlVGltZWROdW1iZXIgPSBmdW5jdGlvbiAoY29uZikge1xuXHRyZXR1cm4gbmV3IFRpbWVkTnVtYmVyKGNvbmYpO1xufTtcblxuZXhwb3J0cy5jcmVhdGVUaW1lZFN0YXRlID0gZnVuY3Rpb24gKGNvbmYpIHtcblx0cmV0dXJuIG5ldyBUaW1lZFN0YXRlKGNvbmYpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEZPUk1BVFMgPSB7XG5cdHk6IGdldFllYXIsXG5cdFk6IGdldEZ1bGxZZWFyLFxuXHRtOiBnZXRNb250aCxcblx0bjogZ2V0TW9udGhOYW1lLFxuXHRmOiBnZXRNb250aEZ1bGxOYW1lLFxuXHRkOiBnZXREYXksXG4gICAgRDogZ2V0Rm9ybWF0dGVkRGF5LFxuXHRIOiBnZXRNaWxpdGFyeUhvdXJzLFxuXHRJOiBnZXRIb3Vycyxcblx0TTogZ2V0TWludXRlcyxcblx0UzogZ2V0U2Vjb25kcyxcblx0TjogZ2V0TWlsbGlzZWMsXG5cdHc6IGdldFdlZWtkYXksXG5cdFc6IGdldEZ1bGxXZWVrZGF5LFxuXHRwOiBnZXRQZXJpb2Rcbn07XG5cbnZhciBQRVJJT0QgPSB7XG5cdEFNOiAnQU0nLFxuXHRQTTogJ1BNJ1xufTtcblxudmFyIFdFRUtTID0ge1xuXHRBQkI6IFtcblx0XHQnU3VuJyxcblx0XHQnTW9uJyxcblx0XHQnVHVlJyxcblx0XHQnV2VkJyxcblx0XHQnVGh1Jyxcblx0XHQnRnJpJyxcblx0XHQnU2F0J1xuXHRdLFxuXHRGVUxMOiBbXG5cdFx0J1N1bmRheScsXG5cdFx0J01vbmRheScsXG5cdFx0J1R1ZXNkYXknLFxuXHRcdCdXZWRuZXNkYXknLFxuXHRcdCdUaHVyc2RheScsXG5cdFx0J0ZyaWRheScsXG5cdFx0J1NhdHVyZGF5J1xuXHRdXG59O1xuXG52YXIgTU9OVEhTID0ge1xuXHRBQkI6IFtcblx0XHQnSmFuJyxcblx0XHQnRmViJyxcblx0XHQnTWFyJyxcblx0XHQnQXByJyxcblx0XHQnTWF5Jyxcblx0XHQnSnVuJyxcblx0XHQnSnVsJyxcblx0XHQnQXVnJyxcblx0XHQnU2VwJyxcblx0XHQnT2N0Jyxcblx0XHQnTm92Jyxcblx0XHQnRGVjJ1xuXHRdLFxuXHRGVUxMOiBbXG5cdFx0J0phbnVhcnknLFxuXHRcdCdGZWJydWFyeScsXG5cdFx0J01hcmNoJyxcblx0XHQnQXByaWwnLFxuXHRcdCdNYXknLFxuXHRcdCdKdW5lJyxcblx0XHQnSnVseScsXG5cdFx0J0F1Z3VzdCcsXG5cdFx0J1NlcHRlbWJlcicsXG5cdFx0J09jdG9iZXInLFxuXHRcdCdOb3ZlbWJlcicsXG5cdFx0J0RlY2VtYmVyJ1xuXHRdXG59O1xuXG52YXIgT05FREFZID0gODY0MDAwMDA7XG52YXIgT05FSE9VUiA9IDM2MDAwMDA7XG5cbmZ1bmN0aW9uIERhdGVUaW1lKG5vdywgZGVmYXVsdEZvcm1hdCkge1xuXHR0aGlzLl9jcmVhdGVkID0gRGF0ZS5ub3coKTtcblx0dGhpcy5fbm93ID0gKG5vdykgPyBuZXcgRGF0ZShub3cpIDogbmV3IERhdGUoKTtcblx0dGhpcy5fZGVsdGEgPSB0aGlzLl9jcmVhdGVkIC0gdGhpcy5fbm93LmdldFRpbWUoKTtcblx0dGhpcy5fZGVmYXVsdEZvcm1hdCA9IGRlZmF1bHRGb3JtYXQgfHwgbnVsbDtcbn1cblxuRGF0ZVRpbWUuc2V0V2Vla05hbWVzID0gZnVuY3Rpb24gKG5hbWVzKSB7XG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBuYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdGlmICghbmFtZXNbaV0pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRXRUVLUy5GVUxMW2ldID0gbmFtZXNbaV07XG5cdH1cbn07XG5cbkRhdGVUaW1lLnNldFNob3J0V2Vla05hbWVzID0gZnVuY3Rpb24gKG5hbWVzKSB7XG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBuYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdGlmICghbmFtZXNbaV0pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRXRUVLUy5BQkJbaV0gPSBuYW1lc1tpXTtcblx0fVxufTtcblxuLyoqXG5wZXJpb2RzIFsgJ0FNJywgJ1BNJyBdXG4qL1xuRGF0ZVRpbWUuc2V0UGVyaW9kID0gZnVuY3Rpb24gKHBlcmlvZCkge1xuXHRpZiAocGVyaW9kWzBdKSB7XG5cdFx0UEVSSU9ELkFNID0gcGVyaW9kWzBdO1xuXHR9XG5cdGlmIChwZXJpb2RbMV0pIHtcblx0XHRQRVJJT0QuUE0gPSBwZXJpb2RbMV07XG5cdH1cbn07XG5cbkRhdGVUaW1lLnNldE1vbnRoTmFtZXMgPSBmdW5jdGlvbiAobmFtZXMpIHtcblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IG5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0aWYgKCFuYW1lc1tpXSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdE1PTlRIUy5GVUxMW2ldID0gbmFtZXNbaV07XG5cdH1cbn07XG5cbkRhdGVUaW1lLnNldFNob3J0TW9udGhOYW1lcyA9IGZ1bmN0aW9uIChuYW1lcykge1xuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gbmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRpZiAoIW5hbWVzW2ldKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0TU9OVEhTLkFCQltpXSA9IG5hbWVzW2ldO1xuXHR9XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuXG5cdGlmICghZm9ybWF0ICYmIHRoaXMuX2RlZmF1bHRGb3JtYXQpIHtcblx0XHRmb3JtYXQgPSB0aGlzLl9kZWZhdWx0Rm9ybWF0O1xuXHR9XG5cblx0dmFyIHN0ciA9ICcnO1xuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gZm9ybWF0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0c3RyICs9IHRoaXMuX2NvbnZlcnQoZm9ybWF0W2ldKTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIERhdGUubm93KCkgLSB0aGlzLl9kZWx0YTtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5lcG9jaCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUaW1lKCkgLyAxMDAwKTtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5fbm93LmdldFRpbWUoKTtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5vZmZzZXRJbkRheXMgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG5cdHZhciBuZXh0ID0gbmV3IERhdGUodGhpcy5fbm93KTtcblx0bmV4dC5zZXREYXRlKG5leHQuZ2V0RGF0ZSgpICsgb2Zmc2V0KTtcblx0dGhpcy5fbm93ID0gbmV4dDtcblx0dGhpcy5fdXBkYXRlRGVsdGEoKTtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5vZmZzZXRJbkhvdXJzID0gZnVuY3Rpb24gKG9mZnNldCkge1xuXHR2YXIgbmV4dCA9IG5ldyBEYXRlKHRoaXMuX25vdyk7XG5cdG5leHQuc2V0SG91cnMobmV4dC5nZXRIb3VycygpICsgb2Zmc2V0KTtcblx0dGhpcy5fbm93ID0gbmV4dDtcblx0dGhpcy5fdXBkYXRlRGVsdGEoKTtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5nZXREYXRlc0luUmFuZ2UgPSBmdW5jdGlvbiAoZGF0ZU9iaikge1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbm93O1xuICAgIHZhciBlbmQgPSBkYXRlT2JqO1xuICAgIHZhciBkZWZhdWx0Rm9ybWF0ID0gdGhpcy5fZGVmYXVsdEZvcm1hdDtcblx0XG4gICAgaWYgKGRhdGVPYmogaW5zdGFuY2VvZiBEYXRlVGltZSkge1xuICAgICAgICBkZWZhdWx0Rm9ybWF0ID0gZGVmYXVsdEZvcm1hdCB8fCBkYXRlT2JqLl9kZWZhdWx0Rm9ybWF0O1xuXHRcdGVuZCA9IGRhdGVPYmouX25vdztcblx0fVxuXG5cdHZhciBsaXN0ID0gW107XG5cdHZhciBkaXIgPSAoZW5kLmdldFRpbWUoKSA+PSBzdGFydC5nZXRUaW1lKCkpID8gMSA6IC0xO1xuXHR2YXIgZGlmZiA9IChkaXIgPT09IDEpID8gZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKSA6IHN0YXJ0LmdldFRpbWUoKSAtIGVuZC5nZXRUaW1lKCk7XG5cdHZhciBjdXJyZW50ID0gbmV3IERhdGVUaW1lKHN0YXJ0LCBkZWZhdWx0Rm9ybWF0KTtcbiAgICB2YXIgaXRlcmF0aW9uID0gTWF0aC5jZWlsKGRpZmYgLyBPTkVEQVkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gaXRlcmF0aW9uOyBpKyspIHtcblx0XHRsaXN0LnB1c2goY3VycmVudCk7XG5cdFx0dmFyIG5leHQgPSBuZXcgRGF0ZVRpbWUoY3VycmVudC5nZXRUaW1lKCksIGRlZmF1bHRGb3JtYXQpO1xuICAgICAgICBuZXh0Lm9mZnNldEluRGF5cygxICogZGlyKTtcdFxuXHRcdGN1cnJlbnQgPSBuZXh0O1xuICAgIH1cblxuXHRyZXR1cm4gbGlzdDtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5nZXRIb3Vyc0luUmFuZ2UgPSBmdW5jdGlvbiAoZGF0ZU9iaikge1xuICAgIFxuICAgIHZhciBzdGFydCA9IHRoaXMuX25vdztcbiAgICB2YXIgZW5kID0gZGF0ZU9iajtcbiAgICB2YXIgZGVmYXVsdEZvcm1hdCA9IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XG5cblx0aWYgKGRhdGVPYmogaW5zdGFuY2VvZiBEYXRlVGltZSkge1xuXHQgICAgZGVmYXVsdEZvcm1hdCA9IGRlZmF1bHRGb3JtYXQgfHwgdGhpcy5fZGVmYXVsdEZvcm1hdDtcblx0XHRlbmQgPSBkYXRlT2JqLl9ub3c7XG4gICAgfVxuXG5cdHZhciBsaXN0ID0gW107XG5cdHZhciBkaXIgPSAoZW5kLmdldFRpbWUoKSA+PSBzdGFydC5nZXRUaW1lKCkpID8gMSA6IC0xO1xuXHR2YXIgZGlmZiA9IChkaXIgPT09IDEpID8gZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKSA6IHN0YXJ0LmdldFRpbWUoKSAtIGVuZC5nZXRUaW1lKCk7XG5cdHZhciBjdXJyZW50ID0gbmV3IERhdGVUaW1lKHN0YXJ0LCBkZWZhdWx0Rm9ybWF0KTtcbiAgICB2YXIgaXRlcmF0aW9uID0gTWF0aC5jZWlsKGRpZmYgLyBPTkVIT1VSKTtcblx0XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gaXRlcmF0aW9uOyBpKyspIHtcbiAgICAgICAgbGlzdC5wdXNoKGN1cnJlbnQpO1xuXHRcdHZhciBuZXh0ID0gbmV3IERhdGVUaW1lKGN1cnJlbnQuZ2V0VGltZSgpLCBkZWZhdWx0Rm9ybWF0KTtcblx0XHRuZXh0Lm9mZnNldEluSG91cnMoMSAqIGRpcik7XHRcblx0XHRjdXJyZW50ID0gbmV4dDtcbiAgICB9XG5cblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUuX2NvbnZlcnQgPSBmdW5jdGlvbiAoZm9ybWF0RnJhZ21lbnQpIHtcblx0dmFyIGNvbnZlcnRlciA9IEZPUk1BVFNbZm9ybWF0RnJhZ21lbnRdO1xuXG5cdGlmIChjb252ZXJ0ZXIpIHtcblx0XHRyZXR1cm4gY29udmVydGVyKHRoaXMuX25vdyk7XG5cdH1cblx0XG5cdC8vIG5vIGNvbnZlcnRlciBcblx0cmV0dXJuIGZvcm1hdEZyYWdtZW50O1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLl91cGRhdGVEZWx0YSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5fZGVsdGEgPSB0aGlzLl9jcmVhdGVkIC0gdGhpcy5fbm93LmdldFRpbWUoKTtcbn07XG5cbmZ1bmN0aW9uIGdldFllYXIoZCkge1xuXHR2YXIgeWVhciA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuXHRyZXR1cm4geWVhci5zdWJzdHJpbmcoeWVhci5sZW5ndGggLSAyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnVsbFllYXIoZCkge1xuXHRyZXR1cm4gZC5nZXRGdWxsWWVhcigpO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aChkKSB7XG5cdHJldHVybiBwYWQoZC5nZXRNb250aCgpICsgMSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoTmFtZShkKSB7XG5cdHJldHVybiBNT05USFMuQUJCW2QuZ2V0TW9udGgoKV07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnVsbE5hbWUoZCkge1xuXHRyZXR1cm4gTU9OVEhTLkZVTExbZC5nZXRNb250aCgpXTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF5KGQpIHtcblx0cmV0dXJuIHBhZChkLmdldERhdGUoKSk7XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZERheShkKSB7XG4gICAgdmFyIF9kYXRlID0gZC5nZXREYXRlKCk7XG4gICAgaWYgKF9kYXRlID4gMTApIHtcbiAgICAgICAgcmV0dXJuIF9kYXRlLnRvU3RyaW5nKCkgKyAndGgnO1xuICAgIH1cbiAgICB2YXIgZGF0ZSA9IF9kYXRlLnRvU3RyaW5nKCk7XG4gICAgdmFyIGxhc3REaWdpdCA9IHBhcnNlSW50KGRhdGVbZGF0ZS5sZW5ndGggLSAxXSk7XG4gICAgc3dpdGNoIChsYXN0RGlnaXQpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGFzdERpZ2l0ICs9ICdzdCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGFzdERpZ2l0ICs9ICduZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGFzdERpZ2l0ICs9ICdyZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxhc3REaWdpdCArPSAndGgnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBkYXRlLnN1YnN0cmluZygwLCBkYXRlLmxlbmd0aCAtIDEpICsgbGFzdERpZ2l0O1xufVxuXG5mdW5jdGlvbiBnZXRNaWxpdGFyeUhvdXJzKGQpIHtcblx0cmV0dXJuIHBhZChkLmdldEhvdXJzKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRIb3VycyhkKSB7XG5cdHZhciBoID0gZC5nZXRIb3VycygpO1xuXHR2YXIgaG91cnMgPSAoaCA+IDEyKSA/IGggLSAxMiA6IGg7IFxuXHRyZXR1cm4gcGFkKGhvdXJzKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWludXRlcyhkKSB7XG5cdHJldHVybiBwYWQoZC5nZXRNaW51dGVzKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRTZWNvbmRzKGQpIHtcblx0cmV0dXJuIHBhZChkLmdldFNlY29uZHMoKSk7XG59XG5cbmZ1bmN0aW9uIGdldE1pbGxpc2VjKGQpIHtcblx0cmV0dXJuIG1wYWQoZC5nZXRNaWxsaXNlY29uZHMoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtkYXkoZCkge1xuXHRyZXR1cm4gV0VFS1MuQUJCW2QuZ2V0RGF5KCldO1xufVxuXG5mdW5jdGlvbiBnZXRGdWxsV2Vla2RheShkKSB7XG5cdHJldHVybiBXRUVLUy5GVUxMW2QuZ2V0RGF5KCldO1xufVxuXG5mdW5jdGlvbiBnZXRQZXJpb2QoZCkge1xuXHR2YXIgaG91cnMgPSBkLmdldEhvdXJzKCk7XG5cdGlmIChob3VycyA8IDEyKSB7XG5cdFx0cmV0dXJuIFBFUklPRC5BTTtcblx0fVxuXHRyZXR1cm4gUEVSSU9ELlBNO1xufVxuXG5mdW5jdGlvbiBwYWQobikge1xuXHRyZXR1cm4gKG4gPCAxMCkgPyAnMCcgKyBuIDogbjtcbn1cblxuZnVuY3Rpb24gbXBhZChuKSB7XG5cdHZhciBwYWRkZWQgPSBwYWQobik7XG5cdHJldHVybiAodHlwZW9mIHBhZGRlZCA9PT0gJ3N0cmluZycgfHwgcGFkZGVkIDwgMTAwKSA/ICcwJyArIHBhZGRlZCA6IHBhZGRlZDsgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZVRpbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBJTkMgPSAnaW5jJztcbnZhciBERUMgPSAnZGVjJztcblxuLypcbmNvbmY6IHtcbiAgICAgICAgbWF4OiBbbnVtYmVyXSxcbiAgICAgICAgbWluOiBbbnVtYmVyXSxcbiAgICAgICAgaW50ZXJ2YWw6IFtudW1iZXJdLCAvLyB1cGRhdGUgaW50ZXJ2YWxcbiAgICAgICAgc3RlcDogW251bWJlcl0sIC8vIHVwZGF0ZSBzdGVwIGUuZy4gaXMgc3RlcCA9IDIsIGl0IHdpbGwgaW5jL2RlYyAyIGV2ZXJ5IGludGVydmFsXG4gICAgICAgIHR5cGU6IFtzdHJpbmddLCAvLyBpbmM6IGluY3JlbWVudCwgZGVjOiBkZWNyZW1lbnRcbiAgICAgICAgaW5pdDogW251bWJlcl0sIC8vIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gbWF4IGFuZCBzbWFsbGVyIHRoYW4gbWluXG5cdGxhc3RVcGRhdGU6IFsqbnVtYmVyXSAvLyBhbiBvcHRpb25hbCB0aW1lc3RhbXAgdG8gY29ucnRvbCBsYXN0IHVwZGF0ZSBzdGF0ZVxufVxuKi9cbmZ1bmN0aW9uIFRpbWVkTnVtYmVyKGNvbmYpIHtcblx0dGhpcy52YWxpZGF0ZShjb25mKTtcblx0dGhpcy5jb25mID0gY29uZjtcblx0dGhpcy5jdXJyZW50ID0gdGhpcy5jb25mLmluaXQ7XG5cdHRoaXMubGFzdFVwZGF0ZSA9IHRoaXMuY29uZi5sYXN0VXBkYXRlIHx8IERhdGUubm93KCk7XG59XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRzd2l0Y2ggKHRoaXMuY29uZi50eXBlKSB7XG5cdFx0Y2FzZSBJTkM6XG5cdFx0XHRyZXR1cm4gdGhpcy5jYWxjdWxhdGVDdXJyZW50VmFsdWVGb3JJbmMoKTtcblx0XHRjYXNlIERFQzpcblx0XHRcdHJldHVybiB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZUZvckRlYygpO1xuXHR9XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCBpc05hTih2YWx1ZSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHRoaXMuY3VycmVudCArIHZhbHVlID4gdGhpcy5jb25mLm1heCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0aWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5jb25mLmluaXQpIHtcblx0XHQvLyBpbml0aWFsIG1vZFxuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cdH1cblxuXHQvLyBpZiB0eXBlIGlzIGluYywgaW5jcmVhc2luZyBtZWFucyByZWNvdmVyaW5nXG5cdHRoaXMuY3VycmVudCArPSB2YWx1ZTtcblxuXHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuZGVjID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghdmFsdWUgfHwgaXNOYU4odmFsdWUpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICh0aGlzLmN1cnJlbnQgLSB2YWx1ZSA8IHRoaXMuY29uZi5taW4pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29uZi5pbml0KSB7XG5cdFx0Ly8gaW5pdGlhbCBtb2Rcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXHR9XG5cdFxuXHQvLyBpZiB0eXBlIGlzIGRlYywgZGVjcmVhc2luZyBtZWFucyByZWNvdmVyaW5nXG5cdHRoaXMuY3VycmVudCAtPSB2YWx1ZTtcblxuXHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuY3VycmVudCA9IHRoaXMuY29uZi5pbml0O1xuXHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuZ2V0TWF4VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmNvbmYubWF4O1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuZ2V0TWluVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmNvbmYubWluO1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuZ2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmNvbmYuaW50ZXJ2YWw7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5jb25mLnN0ZXA7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5nZXRMYXN0VXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5sYXN0VXBkYXRlO1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0b2JqLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG5cdG9iai5sYXN0VXBkYXRlID0gdGhpcy5sYXN0VXBkYXRlO1xuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25mKSB7XG5cdFx0b2JqW2tleV0gPSB0aGlzLmNvbmZba2V5XTtcblx0fVxuXHRyZXR1cm4gb2JqO1xufTtcblxuLy8gcHJpdmF0ZVxuVGltZWROdW1iZXIucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGNvbmYpIHtcblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdtYXgnKSB8fCBpc05hTihjb25mLm1heCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbWF4OiAnICsgY29uZi5tYXgpO1xuXHR9XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnbWluJykgfHwgaXNOYU4oY29uZi5taW4pIHx8IGNvbmYubWluID49IGNvbmYubWF4KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG1pbjogJyArIGNvbmYubWluKTtcblx0fVxuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ2ludGVydmFsJykgfHwgaXNOYU4oY29uZi5pbnRlcnZhbCkgfHwgY29uZi5pbnRlcnZhbCA8PSAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGludGVydmFsOiAnICsgY29uZi5pbnRlcnZhbCk7XG5cdH1cblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCd0eXBlJykgfHwgKGNvbmYudHlwZSAhPT0gSU5DICYmIGNvbmYudHlwZSAhPT0gREVDKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0eXBlOiAnICsgY29uZi50eXBlKTtcblx0fVxuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCBpc05hTihjb25mLmluaXQpIHx8IGNvbmYuaW5pdCA8PSAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluaXQ6ICcgKyBjb25mLmluaXQpO1xuXHR9XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnc3RlcCcpIHx8IGlzTmFOKGNvbmYuc3RlcCkgfHwgY29uZi5zdGVwIDw9IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgc3RlcDogJyArIGNvbmYuc3RlcCk7XG5cdH1cblx0aWYgKGNvbmYudHlwZSA9PT0gSU5DICYmIGNvbmYuc3RlcCA+IGNvbmYubWF4KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdzdGVwIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiBtYXgnKTtcblx0fVxuXHRpZiAoY29uZi50eXBlID09PSBERUMgJiYgY29uZi5zdGVwIDwgY29uZi5taW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3N0ZXAgbXVzdCBub3QgYmUgc21hbGxlciB0aGFuIG1pbicpO1xuXHR9XG59O1xuXG4vLyBwcml2YXRlXG5UaW1lZE51bWJlci5wcm90b3R5cGUuY2FsY3VsYXRlQ3VycmVudFZhbHVlRm9ySW5jID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbmYubWF4KSB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudDtcblx0fVxuXHR2YXIgbm93ID0gRGF0ZS5ub3coKTtcblx0dmFyIHRpbWVQYXN0ID0gbm93IC0gdGhpcy5sYXN0VXBkYXRlO1xuXHR2YXIgc3RlcHMgPSBNYXRoLmZsb29yKHRpbWVQYXN0IC8gdGhpcy5jb25mLmludGVydmFsKTtcblx0dmFyIGluY1ZhbHVlID0gdGhpcy5jb25mLnN0ZXAgKiBzdGVwcztcblx0dGhpcy5jdXJyZW50ID0gKHRoaXMuY3VycmVudCArIGluY1ZhbHVlIDw9IHRoaXMuY29uZi5tYXgpID8gdGhpcy5jdXJyZW50ICsgaW5jVmFsdWUgOiB0aGlzLmNvbmYubWF4O1xuXHRpZiAoaW5jVmFsdWUpIHtcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBub3c7XG5cdH1cblx0cmV0dXJuIHRoaXMuY3VycmVudDtcbn07XG5cbi8vIHByaXZhdGVcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5jYWxjdWxhdGVDdXJyZW50VmFsdWVGb3JEZWMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29uZi5taW4pIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50O1xuXHR9XG5cdHZhciBub3cgPSBEYXRlLm5vdygpO1xuXHR2YXIgdGltZVBhc3QgPSBub3cgLSB0aGlzLmxhc3RVcGRhdGU7XG5cdHZhciBzdGVwcyA9IE1hdGguZmxvb3IodGltZVBhc3QgLyB0aGlzLmNvbmYuaW50ZXJ2YWwpO1xuXHR2YXIgZGVjVmFsdWUgPSB0aGlzLmNvbmYuc3RlcCAqIHN0ZXBzO1x0XG5cdHRoaXMuY3VycmVudCA9ICh0aGlzLmN1cnJlbnQgLSBkZWNWYWx1ZSA+PSB0aGlzLmNvbmYubWluKSA/IHRoaXMuY3VycmVudCAtIGRlY1ZhbHVlIDogdGhpcy5jb25mLm1pbjtcblx0aWYgKGRlY1ZhbHVlKSB7XG5cdFx0dGhpcy5sYXN0VXBkYXRlID0gbm93O1xuXHR9XG5cdHJldHVybiB0aGlzLmN1cnJlbnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVkTnVtYmVyO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qXG5jb25mOiB7XG5cdHN0YXRlczogW2FycmF5XSwgLy8gYW4gYXJyYXkgb2Ygc3RhdGVzXG4gICAgICAgIGludGVydmFsOiBbbnVtYmVyXSwgLy8gdXBkYXRlIGludGVydmFsXG4gICAgICAgIGluaXQ6IFtudW1iZXJdLCAvLyBpbml0aWFsIGluZGV4IG9mIHN0YXRlcyBhcnJheSB0byBzdGFydCB3aXRoXG5cdGxhc3RVcGRhdGU6IFsqbnVtYmVyXSAvLyBhbiBvcHRpb25hbCB0aW1lc3RhbXAgdG8gY29ucnRvbCBsYXN0IHVwZGF0ZSBzdGF0ZVxuXHRsb29wOiBbKmJvb2xdIC8vIGlmIHRydWUgdGhlIHByb2dyZXNzIG9mIHN0YXRlcyB3aWxsIGJlIGEgbG9vcFxufVxuKi9cbmZ1bmN0aW9uIFRpbWVkU3RhdGUoY29uZikge1xuXHR0aGlzLnZhbGlkYXRlKGNvbmYpO1xuXHR0aGlzLmNvbmYgPSBjb25mO1xuXHR0aGlzLmxlbmd0aCA9IHRoaXMuY29uZi5zdGF0ZXMubGVuZ3RoO1xuXHR0aGlzLmN1cnJlbnQgPSB0aGlzLmNvbmYuaW5pdDtcblx0dGhpcy5sYXN0VXBkYXRlID0gdGhpcy5jb25mLmxhc3RVcGRhdGUgfHwgRGF0ZS5ub3coKTtcbn1cblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG5vdyA9IERhdGUubm93KCk7XG5cdHZhciB0aW1lUGFzdCA9IG5vdyAtIHRoaXMubGFzdFVwZGF0ZTtcblx0dmFyIHN0ZXBzID0gTWF0aC5mbG9vcih0aW1lUGFzdCAvIHRoaXMuY29uZi5pbnRlcnZhbCk7XG5cdHZhciBuZXh0UG9zID0gc3RlcHMgKyB0aGlzLmN1cnJlbnQ7XHRcblxuXHRpZiAobmV4dFBvcyA+PSB0aGlzLmxlbmd0aCkge1xuXHRcdGlmICh0aGlzLmNvbmYubG9vcCkge1xuXHRcdFx0bmV4dFBvcyA9IChzdGVwcyArIHRoaXMuY3VycmVudCkgLSAodGhpcy5sZW5ndGgpO1x0XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHdlIGRvbid0IGxvb3AgYW5kIHN0b3AgYXQgdGhlIGVuZCBvZiB0aGUgc3RhdGVcblx0XHRcdG5leHRQb3MgPSB0aGlzLmxlbmd0aCAtIDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXMuY29uZi5zdGF0ZXNbbmV4dFBvc107XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLmZvcndhcmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdC8vIGlmIHZhbHVlIGlzIG5vdCBnaXZlbiBpdCBkZWZhdWx0cyAgdG8gMVxuXHRcdHZhbHVlID0gMTtcblx0fVxuXHRpZiAoIXZhbHVlIHx8IGlzTmFOKHZhbHVlKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAodGhpcy5jdXJyZW50ICsgdmFsdWUgPj0gdGhpcy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29uZi5pbml0KSB7XG5cdFx0Ly8gaW5pdGlhbCBtb2Rcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXHR9XG5cblx0Ly8gbW92ZSB0aGUgY3VycmVudCBjdXJzb3Igb2YgdGhlIGFycmF5IGluZGV4IGZvcndhcmRcblx0dGhpcy5jdXJyZW50ICs9IHZhbHVlO1xuXG5cdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLmJhY2t3YXJkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHtcblx0XHQvLyBpZiB2YWx1ZSBpcyBub3QgZ2l2ZW4gaXQgZGVmYXVsdHMgIHRvIDFcblx0XHR2YWx1ZSA9IDE7XG5cdH1cblx0aWYgKCF2YWx1ZSB8fCBpc05hTih2YWx1ZSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHRoaXMuY3VycmVudCAtIHZhbHVlIDwgMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0aWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5jb25mLmluaXQpIHtcblx0XHQvLyBpbml0aWFsIG1vZFxuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cdH1cblx0XG5cdC8vIG1vdmUgdGhlIGN1cnJlbnQgY3Vyc29yIG9mIHRoZSBhcnJheSBpbmRleCBiYWNrd2FyZFxuXHR0aGlzLmN1cnJlbnQgLT0gdmFsdWU7XG5cblx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuY3VycmVudCA9IHRoaXMuY29uZi5pbml0O1xuXHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xufTtcblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS5nZXRTdGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmNvbmYuc3RhdGVzLm1hcChmdW5jdGlvbiAoZWxtKSB7XG5cdFx0cmV0dXJuIGVsbTtcblx0fSk7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLmdldEludGVydmFsID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5jb25mLmludGVydmFsO1xufTtcblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS5nZXRMYXN0VXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5sYXN0VXBkYXRlO1xufTtcblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9iaiA9IHt9O1xuXHRvYmouY3VycmVudCA9IHRoaXMuY3VycmVudDtcblx0b2JqLmxhc3RVcGRhdGUgPSB0aGlzLmxhc3RVcGRhdGU7XG5cdGZvciAodmFyIGtleSBpbiB0aGlzLmNvbmYpIHtcblx0XHRvYmpba2V5XSA9IHRoaXMuY29uZltrZXldO1xuXHR9XG5cdHJldHVybiBvYmo7XG59O1xuXG4vLyBwcml2YXRlXG5UaW1lZFN0YXRlLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjb25mKSB7XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnc3RhdGVzJykgfHwgIUFycmF5LmlzQXJyYXkoY29uZi5zdGF0ZXMpIHx8IGNvbmYuc3RhdGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzdGF0ZXM6ICcgKyBjb25mLnN0YXRlcyk7XG5cdH1cblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdpbnRlcnZhbCcpIHx8IGlzTmFOKGNvbmYuaW50ZXJ2YWwpIHx8IGNvbmYuaW50ZXJ2YWwgPD0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbnRlcnZhbDogJyArIGNvbmYuaW50ZXJ2YWwpO1xuXHR9XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IGlzTmFOKGNvbmYuaW5pdCkgfHwgY29uZi5pbml0IDwgMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbml0OiAnICsgY29uZi5pbml0KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lZFN0YXRlO1xuXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBBUElLRVlfV0VBVEhFUl9BUEkgPSBcImE4NmRjZDZlMjNhMDQ4M2Q4MjIxNjQyNDYyMzE3MDdcIjsiLCJpbXBvcnQge0FQSUtFWV9XRUFUSEVSX0FQSX0gZnJvbSBcIi4vQXBpQ3JlZHNcIjtcclxuLy9pbXBvcnQgZ2V0Q3VycmVudFdlYXRoZXIgZnJvbSBcIi4vQXBpQ3VycmVudFdlYXRoZXJcIjtcclxuaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL0FwaWZvcmVjYXN0XCI7XHJcbmltcG9ydCByZW1vdmVDaGlsZHMgZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXJMb2NhdGlvbihlKXtcclxuICB0cnl7ICAgIFxyXG4gICAgY29uc3Qgc2VsZWN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0aW9uc0NvbnRhaW5lclwiKTsgXHJcbiAgICBzZWxlY3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXBsb3lcIik7XHJcbiAgICByZW1vdmVDaGlsZHMoXCIjc2VsZWN0aW9uc0NvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHZhbHVlVG9TZWFyY2ggPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IHVybFNlYXJjaEFwaSA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9XCIgKyBBUElLRVlfV0VBVEhFUl9BUEkgKyBcIiZxPVwiK3ZhbHVlVG9TZWFyY2g7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmxTZWFyY2hBcGksIHsgbW9kZTogXCJjb3JzXCJ9KTtcclxuICAgIGxldCB6b25lcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGF3YWl0IGluc2VydFpvbmVzT25Eb20oem9uZXMpO1xyXG4gIH1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfSAgXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluc2VydFpvbmVzT25Eb20oem9uZXMpe1xyXG4gIGNvbnN0IHNlbGVjdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGlvbnNDb250YWluZXJcIik7IFxyXG4gIHNlbGVjdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlcGxveVwiKTtcclxuICB0cnkgeyAgICBcclxuICAgIGNvbnNvbGUubG9nKHpvbmVzLmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmxvZyh6b25lcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcInpvbmVzXCIpO1xyXG4gICAgYXdhaXQgem9uZXMuZm9yRWFjaCh6b25lID0+IHtcclxuICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt6b25lLm5hbWV9LCAke3pvbmUucmVnaW9ufSwgJHt6b25lLmNvdW50cnl9LmA7XHJcbiAgICAgIG5ld0VsZW1lbnQudmFsdWUgPSB6b25lLnVybDtcclxuICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0aW9uXCIpO1xyXG4gICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxsQ3VycmVudFdlYXRoZXIpO1xyXG4gICAgICBzZWxlY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxlY3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXBsb3lcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH0gIFxyXG4gIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjYWxsQ3VycmVudFdlYXRoZXIoZSl7XHJcbiAgY29uc3QgdmFsdWVUb1NlYXJjaCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb25cIik7XHJcbiAgc2VhcmNoQm94LnZhbHVlID0gXCJcIjtcclxuICBjb25zdCBzZWxlY3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3Rpb25zQ29udGFpbmVyXCIpO1xyXG4gIHNlbGVjdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlcGxveVwiKTtcclxuICByZW1vdmVDaGlsZHMoXCIjc2VsZWN0aW9uc0NvbnRhaW5lclwiKTtcclxuICBhd2FpdCBnZXRGb3JlY2FzdCh2YWx1ZVRvU2VhcmNoKVxyXG59XHJcblxyXG4iLCIvL2ltcG9ydCB7IENvbnNvbGUgfSBmcm9tIFwiY29uc29sZVwiO1xyXG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIm5vZGUtZGF0ZXRpbWUvc3JjL2RhdGV0aW1lXCI7XHJcbmltcG9ydCB7QVBJS0VZX1dFQVRIRVJfQVBJfSBmcm9tIFwiLi9BcGlDcmVkc1wiO1xyXG5pbXBvcnQge2ltYWdlc0RheSwgaW1hZ2VzTmlnaHR9IGZyb20gXCIuL2ltYWdlTG9hZGVyXCI7XHJcbmltcG9ydCByZW1vdmVDaGlsZHMgZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KHVybExvY2F0aW9uKXtcclxuICB0cnl7XHJcbiAgICBsb2NhbFN0b3JhZ2UubGFzdExvY2F0aW9uU2hvd2VkID0gdXJsTG9jYXRpb247XHJcbiAgICBjb25zdCB2YWx1ZVRvU2VhcmNoID0gdXJsTG9jYXRpb247XHJcbiAgICBjb25zdCB1cmxTZWFyY2hBcGkgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9XCIgKyBBUElLRVlfV0VBVEhFUl9BUEkgKyBcIiZxPVwiK3ZhbHVlVG9TZWFyY2ggKyBcIiZkYXlzPTNcIjtcclxuICAgIC8vY29uc29sZS5sb2coe3VybFNlYXJjaEFwaX0pO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsU2VhcmNoQXBpLCB7XHJcbiAgICAgICdtb2RlJzogJ2NvcnMnLFxyXG4gICAgICAnaGVhZGVycyc6IHtcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgIH1cclxuICB9KTtcclxuICAgIC8vY29uc29sZS5sb2coe3Jlc3BvbnNlfSk7XHJcbiAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICBcclxuICAgIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0LmZvcmVjYXN0KTtcclxuICAgIHJlbmRlckN1cnJlbnRXZWF0aGVyKGZvcmVjYXN0LmN1cnJlbnQpO1xyXG4gICAgcmVuZGVyTG9jYXRpb24oZm9yZWNhc3QubG9jYXRpb24pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdC5mb3JlY2FzdCk7XHJcbiAgfWNhdGNoIChlcnJvcil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9ICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoY3VycmVudFdlYXRoZXIpe1xyXG4gIHRyeSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcclxuICAgIGNvbnN0IHN3aXRjaFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hTZWxlY3RvclwiKTtcclxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXJEZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckltYWdlXCIpOyBcclxuICAgIGNvbnN0IGxhc3RVcGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhc3RVcGRhdGVcIik7XHJcbiAgICBjb25zdCByZWFsRmVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVhbEZlZWxcIik7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlcIik7XHJcbiAgICBjb25zdCB3aW5kRGlyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kRGlyXCIpO1xyXG4gICAgY29uc3Qgd2luZFZlbG9jaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kVmVsb2NpdHlcIik7XHJcbiAgICBcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2N1cnJlbnRXZWF0aGVyLmh1bWlkaXR5fSVgO1xyXG4gICAgd2luZERpci50ZXh0Q29udGVudCA9IGBXaW5kIGRpcmVjdGlvbjogJHtjdXJyZW50V2VhdGhlci53aW5kX2Rpcn1gO1xyXG4gICAgd2luZFZlbG9jaXR5LnRleHRDb250ZW50ID0gYFdpbmQgZGlyZWN0aW9uOiAke2N1cnJlbnRXZWF0aGVyLndpbmRfa3BofSBrbS9oYDtcclxuXHJcbiAgICBpZiAoc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJDXCIpe1xyXG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcF9jfSDCukNgO1xyXG4gICAgICByZWFsRmVlbC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7Y3VycmVudFdlYXRoZXIuZmVlbHNsaWtlX2N9IMK6Q2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcF9mfSDCukZgO1xyXG4gICAgICByZWFsRmVlbC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7Y3VycmVudFdlYXRoZXIuZmVlbHNsaWtlX2Z9IMK6RmA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uZGl0aW9uXHJcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24udGV4dDtcclxuICAgIC8vdXBkYXRlXHJcbiAgICBsZXQgZGF0ZXRpbWUgPSByZXF1aXJlKFwibm9kZS1kYXRldGltZVwiKTtcclxuICAgIGxldCBkdCA9IGRhdGV0aW1lLmNyZWF0ZShjdXJyZW50V2VhdGhlci5sYXN0VXBkYXRlKTtcclxuICAgIGxldCBmb3JtYXRlZCA9IGR0LmZvcm1hdChcImQgbiBIOk1cIik7XHJcbiAgICBsYXN0VXBkYXRlLnRleHRDb250ZW50ID0gXCJMYXN0IHVwZGF0ZTogXCIgKyBmb3JtYXRlZDtcclxuICAgIC8vaW1hZ2VcclxuICAgIGxldCBJbWFnZUljb24gPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24uaWNvbjtcclxuICAgIEltYWdlSWNvbiA9IEltYWdlSWNvbi5zcGxpdChcIi9cIik7XHJcbiAgICBsZXQgaW1hZ2VTcmMgPSBcIlwiO1xyXG5cclxuICAgIGlmIChjdXJyZW50V2VhdGhlci5pc19kYXkpe1xyXG4gICAgICBpbWFnZVNyYyA9IGF3YWl0IGltYWdlc0RheVtJbWFnZUljb25bSW1hZ2VJY29uLmxlbmd0aCAtIDFdXS5kZWZhdWx0O1xyXG4gICAgfSBlbHNle1xyXG4gICAgICBpbWFnZVNyYyA9IGF3YWl0IGltYWdlc05pZ2h0W0ltYWdlSWNvbltJbWFnZUljb24ubGVuZ3RoIC0gMV1dLmRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgICB3ZWF0aGVySW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZmluaXNoIHJlbmRlckN1cnJlbnRXZWF0aGVyXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uKGN1cnJlbnRXZWF0aGVyTG9jYXRpb24pe1xyXG4gIHRyeXtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyTG9jYXRpb25cIik7XHJcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyTG9jYXRpb24ubmFtZX0sICR7Y3VycmVudFdlYXRoZXJMb2NhdGlvbi5jb3VudHJ5fS5gO1xyXG4gIH1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3Qpe1xyXG4gIGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhaW5DaGFuY2VcIik7XHJcbiAgY29uc3QgYXJyYXlPZkZvcmVjYXN0ID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcbiAgcmFpbkNoYW5jZS50ZXh0Q29udGVudCA9IGBSYWluIGNoYW5jZTogJHthcnJheU9mRm9yZWNhc3RbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xyXG4gIGNvbnN0IHN3aXRjaFNlbGVjdG9yREggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaFNlbGVjdG9yREhcIik7XHJcbiAgY29uc3QgZGFpbHlPckhvdXJzID0gc3dpdGNoU2VsZWN0b3JESC52YWx1ZTtcclxuICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RDb250YWluZXJcIik7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaFNlbGVjdG9yXCIpO1xyXG4gIFxyXG4gIHJlbW92ZUNoaWxkcyhcIiNmb3JlY2FzdENvbnRhaW5lclwiKTtcclxuXHJcbiAgaWYgKGRhaWx5T3JIb3VycyA9PSBcIkRcIikge1xyXG4gICAgYXdhaXQgIGFycmF5T2ZGb3JlY2FzdC5mb3JFYWNoKCAoZGF5KSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZGF5LmRheSk7XHJcbiAgICAgIGNvbnN0IG5ld0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIG5ld0RheS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RFbGVtZW50XCIpO1xyXG5cclxuICAgICAgY29uc3QgdGVtcFVtYnJhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRlbXBVbWJyYWwuY2xhc3NMaXN0LmFkZChcInRlbXBVbWJyYWxcIik7XHJcblxyXG4gICAgICBjb25zdCByYWluQ2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcmFpbkNoYW5jZS5jbGFzc0xpc3QuYWRkKFwicmFpbkNoYW5jZVwiKTtcclxuICAgICAgcmFpbkNoYW5jZS50ZXh0Q29udGVudCA9IGBSYWluIGNoYW5jZTogJHtkYXkuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xyXG5cclxuICAgICAgbGV0IHRpbWUgPSAoZGF5LmRhdGVfZXBvY2ggKyA4NjQwMCkgKiAxMDAwIC8vIGFkZCBhIGRheSwgYW5kIG11bHRpcGx5IHBlciBzZW5jb2RzXHJcbiAgICAgIGxldCBkYXRldGltZSA9IHJlcXVpcmUoXCJub2RlLWRhdGV0aW1lXCIpO1xyXG4gICAgICBsZXQgbmV3VGltZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gICAgICBsZXQgZHQgPSBkYXRldGltZS5jcmVhdGUobmV3VGltZSk7XHJcbiAgICAgIGxldCBmb3JtYXRlZCA9IGR0LmZvcm1hdChcIncgZCBuXCIpO1xyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdGVkO1xyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRlc2NyaXAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXBcIik7XHJcbiAgICAgIGRlc2NyaXAudGV4dENvbnRlbnQgPSBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgICBpZiggc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJDXCIpe1xyXG4gICAgICAgIHRlbXBVbWJyYWwudGV4dENvbnRlbnQgPSBgICR7ZGF5LmRheS5tYXh0ZW1wX2N9IC0gJHtkYXkuZGF5Lm1pbnRlbXBfY30gIMK6Q2A7XHJcbiAgICAgIH1lbHNlIGlmIChzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9PSBcIkZcIil7XHJcbiAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtkYXkuZGF5Lm1heHRlbXBfZn0gLSAke2RheS5kYXkubWludGVtcF9mfSAgwrpGYDtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZTtcclxuICAgICAgaW1hZ2Uuc3JjID0gXCJcIjtcclxuXHJcbiAgICAgIGxldCBJbWFnZUljb24gPSBkYXkuZGF5LmNvbmRpdGlvbi5pY29uO1xyXG4gICAgICBJbWFnZUljb24gPSBJbWFnZUljb24uc3BsaXQoXCIvXCIpO1xyXG4gICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlc0RheVtJbWFnZUljb25bSW1hZ2VJY29uLmxlbmd0aCAtIDFdXS5kZWZhdWx0O1xyXG4gICAgICBpbWFnZS5zcmMgPSBpbWFnZVNyYztcclxuXHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGRlc2NyaXApO1xyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQodGVtcFVtYnJhbCk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGF5KTtcclxuICAgIH0gKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiRGFpbHlcIik7XHJcbiAgfSBlbHNlIGlmIChkYWlseU9ySG91cnMgPT0gXCJIXCIpIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlO1xyXG4gICAgY29uc3Qgbm93SG91cnMgPSBub3cuZ2V0SG91cnMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IG5vd0hvdXJzOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGhvdXIgPSBhcnJheU9mRm9yZWNhc3RbMF0uaG91cltpbmRleF07XHJcblxyXG4gICAgICBjb25zdCBuZXdEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdEYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0RWxlbWVudFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBVbWJyYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0ZW1wVW1icmFsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wVW1icmFsXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZChcInJhaW5DaGFuY2VcIik7XHJcbiAgICAgIHJhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgUmFpbiBjaGFuY2U6ICR7aG91ci5jaGFuY2Vfb2ZfcmFpbn0lYFxyXG5cclxuXHJcbiAgICAgIC8vbGV0IHRpbWUgPSAoZGF5LmRhdGVfZXBvY2ggKyA4NjQwMCkgKiAxMDAwIC8vIGFkZCBhIGRheSwgYW5kIG11bHRpcGx5IHBlciBzZW5jb2RzXHJcbiAgICAgIC8vbGV0IGRhdGV0aW1lID0gcmVxdWlyZShcIm5vZGUtZGF0ZXRpbWVcIik7XHJcbiAgICAgIC8vbGV0IG5ld1RpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgICAgLy9sZXQgZHQgPSBkYXRldGltZS5jcmVhdGUobmV3VGltZSk7XHJcbiAgICAgIC8vbGV0IGZvcm1hdGVkID0gZHQuZm9ybWF0KFwiZCBuXCIpO1xyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2luZGV4fTowMGA7XHJcblxyXG4gICAgICBjb25zdCBkZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGVzY3JpcC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcFwiKTtcclxuICAgICAgZGVzY3JpcC50ZXh0Q29udGVudCA9IGhvdXIuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAgIGlmKCBzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9PSBcIkNcIil7XHJcbiAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtob3VyLnRlbXBfY30gwrpDYDtcclxuICAgICAgfWVsc2UgaWYgKHN3aXRjaFNlbGVjdG9yLnZhbHVlID09IFwiRlwiKXtcclxuICAgICAgICB0ZW1wVW1icmFsLnRleHRDb250ZW50ID0gYCAke2hvdXIudGVtcF9mfSAgwrpGYDtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZTtcclxuICAgICAgaW1hZ2Uuc3JjID0gXCJcIjtcclxuXHJcbiAgICAgIGxldCBJbWFnZUljb24gPSBob3VyLmNvbmRpdGlvbi5pY29uO1xyXG4gICAgICBJbWFnZUljb24gPSBJbWFnZUljb24uc3BsaXQoXCIvXCIpO1xyXG4gICAgICBsZXQgaW1hZ2VTcmM7XHJcbiAgICAgIGlmIChob3VyLmlzX2RheSl7XHJcbiAgICAgICAgaW1hZ2VTcmMgPSBhd2FpdCBpbWFnZXNEYXlbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzTmlnaHRbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgICAgfVxyXG4gICAgICBpbWFnZS5zcmMgPSBpbWFnZVNyYztcclxuXHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGRlc2NyaXApO1xyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQodGVtcFVtYnJhbCk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGF5KTsgICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKCBub3dIb3VycyAhPSAwICl7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub3dIb3VyczsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGhvdXIgPSBhcnJheU9mRm9yZWNhc3RbMV0uaG91cltpbmRleF07XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbmV3RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdEYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0RWxlbWVudFwiKTtcclxuICBcclxuICAgICAgICBjb25zdCB0ZW1wVW1icmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0ZW1wVW1icmFsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wVW1icmFsXCIpO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZChcInJhaW5DaGFuY2VcIik7XHJcbiAgICAgICAgcmFpbkNoYW5jZS50ZXh0Q29udGVudCA9IGBSYWluIGNoYW5jZTogJHtob3VyLmNoYW5jZV9vZl9yYWlufSVgXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2luZGV4fTowMGA7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGVzY3JpcC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcFwiKTtcclxuICAgICAgICBkZXNjcmlwLnRleHRDb250ZW50ID0gaG91ci5jb25kaXRpb24udGV4dDtcclxuICAgICAgICBpZiggc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJDXCIpe1xyXG4gICAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtob3VyLnRlbXBfY30gwrpDYDtcclxuICAgICAgICB9ZWxzZSBpZiAoc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJGXCIpe1xyXG4gICAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtob3VyLnRlbXBfZn0gIMK6RmA7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IFwiXCI7XHJcbiAgXHJcbiAgICAgICAgbGV0IEltYWdlSWNvbiA9IGhvdXIuY29uZGl0aW9uLmljb247XHJcbiAgICAgICAgSW1hZ2VJY29uID0gSW1hZ2VJY29uLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBsZXQgaW1hZ2VTcmM7XHJcbiAgICAgICAgaWYgKGhvdXIuaXNfZGF5KXtcclxuICAgICAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzRGF5W0ltYWdlSWNvbltJbWFnZUljb24ubGVuZ3RoIC0gMV1dLmRlZmF1bHQ7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgaW1hZ2VTcmMgPSBhd2FpdCBpbWFnZXNOaWdodFtJbWFnZUljb25bSW1hZ2VJY29uLmxlbmd0aCAtIDFdXS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZVNyYztcclxuICBcclxuICAgICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQoZGVzY3JpcCk7XHJcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKHRlbXBVbWJyYWwpO1xyXG4gICAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEYXkpOyAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuLzExMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTMucG5nXCIsXG5cdFwiLi8xMTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTE2LnBuZ1wiLFxuXHRcIi4vMTE5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExOS5wbmdcIixcblx0XCIuLzEyMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMjIucG5nXCIsXG5cdFwiLi8xNDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTQzLnBuZ1wiLFxuXHRcIi4vMTc2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE3Ni5wbmdcIixcblx0XCIuLzE3OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xNzkucG5nXCIsXG5cdFwiLi8xODIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTgyLnBuZ1wiLFxuXHRcIi4vMTg1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE4NS5wbmdcIixcblx0XCIuLzIwMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yMDAucG5nXCIsXG5cdFwiLi8yMjcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjI3LnBuZ1wiLFxuXHRcIi4vMjMwLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIzMC5wbmdcIixcblx0XCIuLzI0OC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNDgucG5nXCIsXG5cdFwiLi8yNjAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjYwLnBuZ1wiLFxuXHRcIi4vMjYzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2My5wbmdcIixcblx0XCIuLzI2Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjYucG5nXCIsXG5cdFwiLi8yODEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjgxLnBuZ1wiLFxuXHRcIi4vMjg0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI4NC5wbmdcIixcblx0XCIuLzI5My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTMucG5nXCIsXG5cdFwiLi8yOTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjk2LnBuZ1wiLFxuXHRcIi4vMjk5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5OS5wbmdcIixcblx0XCIuLzMwMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDIucG5nXCIsXG5cdFwiLi8zMDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzA1LnBuZ1wiLFxuXHRcIi4vMzA4LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwOC5wbmdcIixcblx0XCIuLzMxMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTEucG5nXCIsXG5cdFwiLi8zMTQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzE0LnBuZ1wiLFxuXHRcIi4vMzE3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxNy5wbmdcIixcblx0XCIuLzMyMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjAucG5nXCIsXG5cdFwiLi8zMjMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzIzLnBuZ1wiLFxuXHRcIi4vMzI2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyNi5wbmdcIixcblx0XCIuLzMyOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjkucG5nXCIsXG5cdFwiLi8zMzIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzMyLnBuZ1wiLFxuXHRcIi4vMzM1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzNS5wbmdcIixcblx0XCIuLzMzOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzgucG5nXCIsXG5cdFwiLi8zNTAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzUwLnBuZ1wiLFxuXHRcIi4vMzUzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1My5wbmdcIixcblx0XCIuLzM1Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTYucG5nXCIsXG5cdFwiLi8zNTkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzU5LnBuZ1wiLFxuXHRcIi4vMzYyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2Mi5wbmdcIixcblx0XCIuLzM2NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjUucG5nXCIsXG5cdFwiLi8zNjgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzY4LnBuZ1wiLFxuXHRcIi4vMzcxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3MS5wbmdcIixcblx0XCIuLzM3NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzQucG5nXCIsXG5cdFwiLi8zNzcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzc3LnBuZ1wiLFxuXHRcIi4vMzg2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM4Ni5wbmdcIixcblx0XCIuLzM4OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zODkucG5nXCIsXG5cdFwiLi8zOTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzkyLnBuZ1wiLFxuXHRcIi4vMzk1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuLzExMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExMy5wbmdcIixcblx0XCIuLzExNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExNi5wbmdcIixcblx0XCIuLzExOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExOS5wbmdcIixcblx0XCIuLzEyMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzEyMi5wbmdcIixcblx0XCIuLzE0My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE0My5wbmdcIixcblx0XCIuLzE3Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3Ni5wbmdcIixcblx0XCIuLzE3OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3OS5wbmdcIixcblx0XCIuLzE4Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4Mi5wbmdcIixcblx0XCIuLzE4NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4NS5wbmdcIixcblx0XCIuLzIwMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIwMC5wbmdcIixcblx0XCIuLzIyNy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIyNy5wbmdcIixcblx0XCIuLzIzMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIzMC5wbmdcIixcblx0XCIuLzI0OC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI0OC5wbmdcIixcblx0XCIuLzI2MC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2MC5wbmdcIixcblx0XCIuLzI2My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2My5wbmdcIixcblx0XCIuLzI2Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2Ni5wbmdcIixcblx0XCIuLzI4MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4MS5wbmdcIixcblx0XCIuLzI4NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4NC5wbmdcIixcblx0XCIuLzI5My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5My5wbmdcIixcblx0XCIuLzI5Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5Ni5wbmdcIixcblx0XCIuLzI5OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5OS5wbmdcIixcblx0XCIuLzMwMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwMi5wbmdcIixcblx0XCIuLzMwNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwNS5wbmdcIixcblx0XCIuLzMwOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwOC5wbmdcIixcblx0XCIuLzMxMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxMS5wbmdcIixcblx0XCIuLzMxNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNC5wbmdcIixcblx0XCIuLzMxNy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNy5wbmdcIixcblx0XCIuLzMyMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMC5wbmdcIixcblx0XCIuLzMyMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyMy5wbmdcIixcblx0XCIuLzMyNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyNi5wbmdcIixcblx0XCIuLzMyOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyOS5wbmdcIixcblx0XCIuLzMzMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzMi5wbmdcIixcblx0XCIuLzMzNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzNS5wbmdcIixcblx0XCIuLzMzOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzOC5wbmdcIixcblx0XCIuLzM1MC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1MC5wbmdcIixcblx0XCIuLzM1My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1My5wbmdcIixcblx0XCIuLzM1Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1Ni5wbmdcIixcblx0XCIuLzM1OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1OS5wbmdcIixcblx0XCIuLzM2Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2Mi5wbmdcIixcblx0XCIuLzM2NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2NS5wbmdcIixcblx0XCIuLzM2OC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2OC5wbmdcIixcblx0XCIuLzM3MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3MS5wbmdcIixcblx0XCIuLzM3NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3NC5wbmdcIixcblx0XCIuLzM3Ny5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3Ny5wbmdcIixcblx0XCIuLzM4Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4Ni5wbmdcIixcblx0XCIuLzM4OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4OS5wbmdcIixcblx0XCIuLzM5Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5Mi5wbmdcIixcblx0XCIuLzM5NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodCBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJpbXBvcnQgc2VhcmNoTG9jYXRpb24gZnJvbSBcIi4vQXBpU2VhcmNoTG9jYXRpb25cIjtcclxuLy9pbXBvcnQgZ2V0Q3VycmVudFdlYXRoZXIgZnJvbSBcIi4vQXBpQ3VycmVudFdlYXRoZXJcIjtcclxuaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL0FwaWZvcmVjYXN0XCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURvbSgpe1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kfSlgO1xyXG4gIGNvbnNvbGUubG9nKCBgdXJsKCR7YmFja2dyb3VuZH0pYCk7XHJcblxyXG4vKiogVE9QICovXHJcblxyXG5cclxuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9wXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wKTtcclxuXHJcbiAgLyoqIExvY2F0aW9uIGFuZCBzd2l0Y2ggc2VsZWN0b3IgY29udGFpbmVyKi9cclxuICBjb25zdCBsb2NhY3Rpb25BbmRTd2l0Y2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibG9jYXRpb25cIik7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixcIkxvY2F0aW9uLi4uXCIpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzZWFyY2hMb2NhdGlvbik7XHJcbiAgLyoqIFN3aXRjaCBDZWxzaXVzIEZhcmVuaGVpdCAqL1xyXG4gICAgY29uc3Qgc3dpdGNoQ0YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoQ0Yuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzd2l0Y2hDRlwiKTtcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzd2l0Y2hTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic3dpdGNoU2VsZWN0b3JcIik7ICAgIFxyXG5cclxuICAgIGNvbnN0IHN3aXRjaENlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoQ2Vsc2l1cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaENlbHNpdXNcIik7XHJcbiAgICBzd2l0Y2hDZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RDZWxzaXVzKTtcclxuICAgIHN3aXRjaENlbHNpdXMudGV4dENvbnRlbnQgPSBcIkNcIjtcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hGYXJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoRmFyZW5oZWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3dpdGNoRmFyZW5oZWl0XCIpO1xyXG4gICAgc3dpdGNoRmFyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RGYXJlbmhlaXQpO1xyXG4gICAgc3dpdGNoRmFyZW5oZWl0LnRleHRDb250ZW50ID0gXCJGXCI7XHJcblxyXG4gICAgXHJcbiAgICBzd2l0Y2hDRi5hcHBlbmRDaGlsZChzd2l0Y2hDZWxzaXVzKTtcclxuICAgIHN3aXRjaENGLmFwcGVuZENoaWxkKHN3aXRjaFNlbGVjdG9yKTtcclxuICAgIHN3aXRjaENGLmFwcGVuZENoaWxkKHN3aXRjaEZhcmVuaGVpdCk7XHJcblxyXG4gICAgbG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGxvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzd2l0Y2hDRik7XHJcbiAgXHJcbiAgY29uc3Qgc2VsZWN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2VsZWN0aW9uc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2VsZWN0aW9uc0NvbnRhaW5lclwiKTtcclxuICB0b3AuYXBwZW5kQ2hpbGQobG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVyKTtcclxuICB0b3AuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uc0NvbnRhaW5lcik7XHJcblxyXG4vKiogREFTSEJPQVJEICovXHJcbiAgY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkYXNoYm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIixcImRhc2hib2FyZFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XHJcbiAgLyoqIEN1cnJlbnQgaW5mbyBDb250YWluZXIgKi9cclxuICAgIGNvbnN0IGN1cnJlbnRJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGN1cnJlbnRJbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjdXJyZW50SW5mb0NvbnRhaW5lclwiKVxyXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwid2VhdGhlckRlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3Qgd2VhdGhlckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB3ZWF0aGVySW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcIndlYXRoZXJJbWFnZVwiKVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyTG9jYXRpb25cIik7XHJcbiAgICBjb25zdCBsYXN0VXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxhc3RVcGRhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsYXN0VXBkYXRlXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIixcInRlbXBcIik7XHJcblxyXG4gICAgXHJcbiBcclxuXHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xyXG4gICAgY3VycmVudEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uKTtcclxuICAgIGN1cnJlbnRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApOyAgICAgICAgICAgXHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYXN0VXBkYXRlKTtcclxuICAgIFxyXG4gIFxyXG5cclxuICAgIC8qKiBSaWd0aCBzaWRlIGluZm8gY29udGFpbmVyICovICAgIFxyXG4gICAgY29uc3QgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByYWluQ2hhbmNlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJyYWluQ2hhbmNlXCIpO1xyXG5cclxuICAgIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkaXRpb25hbEluZm9cIik7XHJcblxyXG4gICAgY29uc3QgcmVhbEZlZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVhbEZlZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZWFsRmVlbFwiKTtcclxuICAgICBcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGh1bWlkaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaHVtaWRpdHlcIik7XHJcbiAgICBjb25zdCB3aW5kRGlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdpbmREaXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aW5kRGlyXCIpO1xyXG4gICAgY29uc3Qgd2luZFZlbG9jaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdpbmRWZWxvY2l0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndpbmRWZWxvY2l0eVwiKTtcclxuXHJcbiAgICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKHJlYWxGZWVsKTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKHdpbmREaXIpO1xyXG4gICAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQod2luZFZlbG9jaXR5KTtcclxuXHJcblxyXG5cclxuIGRhc2hib2FyZC5hcHBlbmRDaGlsZChjdXJyZW50SW5mb0NvbnRhaW5lcik7XHJcbiBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQoYWRkaXRpb25hbEluZm8pO1xyXG5cclxuXHJcbi8qKiBGT09URVIgKi9cclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZm9vdGVyXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcblxyXG4gIC8qKiBTd2l0Y2ggZGFpbHkgLyBob3VycyAgKi9cclxuXHJcbiAgY29uc3Qgc3dpdGNoREggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHN3aXRjaERILnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3dpdGNoREhcIik7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoU2VsZWN0b3JESCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzd2l0Y2hTZWxlY3RvckRILnNldEF0dHJpYnV0ZShcImlkXCIsXCJzd2l0Y2hTZWxlY3RvckRIXCIpOyAgXHJcbiAgICBzd2l0Y2hTZWxlY3RvckRILnZhbHVlID0gXCJEXCI7ICBcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoRGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3dpdGNoRGF5XCIpO1xyXG4gICAgc3dpdGNoRGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHNlbGVjdERheXMpO1xyXG4gICAgc3dpdGNoRGF5LnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xyXG5cclxuICAgIGNvbnN0IHN3aXRjaEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoSG91ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaEhvdXJcIik7XHJcbiAgICBzd2l0Y2hIb3VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHNlbGVjdEhvdXJzKTtcclxuICAgIHN3aXRjaEhvdXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcblxyXG4gICAgXHJcbiAgICBzd2l0Y2hESC5hcHBlbmRDaGlsZChzd2l0Y2hEYXkpO1xyXG4gICAgc3dpdGNoREguYXBwZW5kQ2hpbGQoc3dpdGNoU2VsZWN0b3JESCk7XHJcbiAgICBzd2l0Y2hESC5hcHBlbmRDaGlsZChzd2l0Y2hIb3VyKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc3dpdGNoREgpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JlY2FzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcmVjYXN0Q29udGFpbmVyXCIpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcclxuXHJcblxyXG4vKiogRGVmYXVsdCBjb25maWcgKi9cclxuICAvL3RoZW4gaSB0aGluayB0byBpbXBsZW1lbnRhdGUgYW4gaXAgbG9jYXRpb24uXHJcbiAgbG9jYWxTdG9yYWdlLmZpcnN0VXJsTG9jYXRpb24gPSBcInB1ZXJ0by1vcmRhei1ib2xpdmFyLXZlbmV6dWVsYVwiOyBcclxuICBzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9IFwiQ1wiOyAvL2ZpcnN0IGNlbHNpdXNcclxuICAvL2dldEN1cnJlbnRXZWF0aGVyKGxvY2FsU3RvcmFnZS5maXJzdFVybExvY2F0aW9uKTtcclxuICBnZXRGb3JlY2FzdChsb2NhbFN0b3JhZ2UuZmlyc3RVcmxMb2NhdGlvbik7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RGYXJlbmhlaXQoKXtcclxuICBjb25zdCBzd2l0Y2hTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JcIik7XHJcbiAgc3dpdGNoU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImZhcmVuaGVpdFwiKTtcclxuICBzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9IFwiRlwiO1xyXG4gIGdldEZvcmVjYXN0KGxvY2FsU3RvcmFnZS5sYXN0TG9jYXRpb25TaG93ZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RDZWxzaXVzKCl7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaFNlbGVjdG9yXCIpO1xyXG4gIHN3aXRjaFNlbGVjdG9yLnZhbHVlID0gXCJDXCI7XHJcbiAgc3dpdGNoU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZShcImZhcmVuaGVpdFwiKTtcclxuICBnZXRGb3JlY2FzdChsb2NhbFN0b3JhZ2UubGFzdExvY2F0aW9uU2hvd2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0SG91cnMoKXtcclxuICBjb25zdCBzd2l0Y2hTZWxlY3RvckRIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hTZWxlY3RvckRIXCIpO1xyXG4gIHN3aXRjaFNlbGVjdG9yREguY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xyXG4gIHN3aXRjaFNlbGVjdG9yREgudmFsdWUgPSBcIkhcIjtcclxuICBnZXRGb3JlY2FzdChsb2NhbFN0b3JhZ2UubGFzdExvY2F0aW9uU2hvd2VkKTtcclxufVxyXG5mdW5jdGlvbiBzZWxlY3REYXlzKCl7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3JESCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JESFwiKTtcclxuICBzd2l0Y2hTZWxlY3RvckRILmNsYXNzTGlzdC5yZW1vdmUoXCJob3Vyc1wiKTtcclxuICBzd2l0Y2hTZWxlY3RvckRILnZhbHVlID0gXCJEXCI7XHJcbiAgZ2V0Rm9yZWNhc3QobG9jYWxTdG9yYWdlLmxhc3RMb2NhdGlvblNob3dlZCk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDaGlsZHMoc2VsZWN0b3Ipe1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyAgXHJcbiAgd2hpbGUoY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XHJcbiAgfSAgXHJcbn0iLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIGxldCBpbWFnZXMgPSB7fTtcclxuICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbi8vIEltYWdlbiBsb2FkZXJcclxuLy9pbXBvcnQgaW1hZ2VzIGZyb20gXCIuLi9pbWFnZXMvcHJ1ZWJhYS5qcGVnXCI7XHJcbmV4cG9ydCBjb25zdCBpbWFnZXNEYXkgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvZGF5JywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG5leHBvcnQgY29uc3QgaW1hZ2VzTmlnaHQgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvbmlnaHQnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XHJcbi8vaW1wb3J0IGJhY2tncm91ZCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91ZC5qcGdcIjtcclxuLy9jb25zdCBpbWFnZXNOYW1lcyA9IE9iamVjdC5rZXlzKGltYWdlcyk7IiwiaW1wb3J0IGNyZWF0ZURvbSBmcm9tIFwiLi9jcmVhdGVEb21cIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY3JlYXRlRG9tKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9