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
  height: 45vh;
  width: 100%;
  align-items: center;
  gap: 3%
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  max-width: 400px;
  height: 5vh;
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.3);
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
  padding-left: 10%;
  width: 45%;
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
  height: 38vh;
  width: 80vw;
  overflow-x: auto;
  overflow-y: none;
  gap: 4px;
  
}

.forecastElement{
  border: 2px solid black;
  border-radius: 8px;
  background-color: rgba(255, 253, 253, 0.438);
  flex: 0 0 150px;
  min-height: 160px;

  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,0BAA0B,uBAAuB,YAAY;EAC7D,8BAA8B;EAC9B,kCAAkC;;AAEpC;;AAEA;EACE,aAAa;EACb,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;EACjC,gBAAgB;EAChB,gBAAgB;EAChB;;;gCAG8B;AAChC;;AAEA;EACE,YAAY;EACZ;;;gCAG8B;AAChC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,iCAAiC;EACjC,UAAU;EACV,OAAO;EACP,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,UAAU;EACV,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,qBAAqB;EACrB,eAAe;EACf,uCAAuC;EACvC,UAAU;AACZ;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;;AAEhC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,kBAAkB;;;AAGpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,iCAAiC;EACjC,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,QAAQ;;AAEV;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,4CAA4C;EAC5C,eAAe;EACf,iBAAiB;;EAEjB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  background-size:     cover;                      /* <------ */\r\n  background-repeat:   no-repeat;\r\n  background-position: center center;\r\n\r\n}\r\n\r\n#locactionAndSwitchContainer{\r\n  display: flex;\r\n  gap: 2%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 10vh;\r\n  z-index: 1;\r\n}\r\n\r\n#top {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2%;\r\n  justify-content: center;\r\n  align-items: center;  \r\n}\r\n\r\n#location{\r\n  height: 4.6vh;\r\n  width: 20vw;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: rgba(0,0,0,0.2);\r\n  min-width: 120px;\r\n  max-width: 150px;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n::placeholder{\r\n  color: white;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#switchCF, #switchDH {\r\n  display: flex;\r\n  width: 20vw;\r\n  height: 5vh;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  background-color: rgba(0,0,0,0.2);  \r\n  z-index: 1;\r\n  gap: 2%;\r\n  position: relative;  \r\n  color: white;\r\n  min-width: 120px;\r\n  max-width: 150px;\r\n}\r\n\r\n#switchCelsius , #switchFarenheit, #switchHour, #switchDay{\r\n  display: flex;\r\n  height: 6vh;\r\n  width: 50%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#switchSelector, #switchSelectorDH{\r\n  position: absolute;\r\n  left: 0%;\r\n  border-radius: 8px;\r\n  height: 5vh;\r\n  width: 50%;\r\n  transition: left 0.3s;\r\n  cursor: pointer;\r\n  background-color: rgba(255,255,255,0.3);\r\n  z-index: 2;  \r\n}\r\n\r\n#switchSelector.farenheit, #switchSelectorDH.hours{\r\n  left: 50%;\r\n}\r\n\r\n#weatherImage{\r\n  height: 100px;\r\n  width: 100px;\r\n  border: none;\r\n}\r\n\r\n#dashboard{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;  \r\n  margin: 1%;\r\n}\r\n\r\n#temp{\r\n  font-size: xx-large;\r\n  font-weight: 900;\r\n  text-align: left;\r\n}\r\n\r\n#footer{\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 45vh;\r\n  width: 100%;\r\n  align-items: center;\r\n  gap: 3%\r\n}\r\n\r\n#currentInfoContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 50%;\r\n  color: white;\r\n  font-weight: bold;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n\r\n}\r\n\r\n#selectionsContainer{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  width: 50vw;\r\n  top: -100vh;\r\n  z-index: 0;\r\n  transition: top 1s ;\r\n  border-radius: 8px;\r\n  \r\n  \r\n}\r\n\r\n#selectionsContainer.deploy {\r\n  top: 10vh;\r\n}\r\n\r\n.selection {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n  height: 5vh;\r\n  border: 1px solid white;\r\n  border-radius: 8px;\r\n  background-color: rgba(0,0,0,0.3);\r\n  padding: 0.5%;\r\n  margin: 0.5%;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#additionalInfo{\r\n  padding-left: 10%;\r\n  width: 45%;\r\n  color: white;\r\n  font-weight: bold;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\n#forecastContainer{\r\n  display: flex;\r\n  height: 38vh;\r\n  width: 80vw;\r\n  overflow-x: auto;\r\n  overflow-y: none;\r\n  gap: 4px;\r\n  \r\n}\r\n\r\n.forecastElement{\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  background-color: rgba(255, 253, 253, 0.438);\r\n  flex: 0 0 150px;\r\n  min-height: 160px;\r\n\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n  font-weight: bold;\r\n  text-shadow:  -1px 1px 0 #000,\r\n                1px 1px 0 #000,\r\n                1px -1px 0 #000,\r\n                -1px -1px 0 #000;\r\n}\r\n\r\nimg {\r\n  height: 50px;\r\n  width: 50px;\r\n  border: none;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLHdCQUF3QixhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsUUFBUSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksZUFBZSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsK0JBQStCLG9CQUFvQiw2QkFBNkIscUNBQXFDLG9CQUFvQixtQkFBbUIsbUJBQW1CLGtCQUFrQix1REFBdUQsa0RBQWtELHlDQUF5QyxTQUFTLHFDQUFxQyxvQkFBb0IsY0FBYyw4QkFBOEIsMEJBQTBCLG1CQUFtQixpQkFBaUIsS0FBSyxjQUFjLG9CQUFvQiw2QkFBNkIsY0FBYyw4QkFBOEIsNEJBQTRCLEtBQUssa0JBQWtCLG9CQUFvQixrQkFBa0IsOEJBQThCLHlCQUF5Qix5QkFBeUIsbUJBQW1CLHdDQUF3Qyx1QkFBdUIsdUJBQXVCLGdKQUFnSixLQUFLLHNCQUFzQixtQkFBbUIsZ0pBQWdKLEtBQUssOEJBQThCLG9CQUFvQixrQkFBa0Isa0JBQWtCLHFDQUFxQywwQkFBMEIsOEJBQThCLHlCQUF5QiwwQ0FBMEMsaUJBQWlCLGNBQWMsMkJBQTJCLG1CQUFtQix1QkFBdUIsdUJBQXVCLEtBQUssbUVBQW1FLG9CQUFvQixrQkFBa0IsaUJBQWlCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLG1CQUFtQix3QkFBd0IsZ0pBQWdKLEtBQUssMkNBQTJDLHlCQUF5QixlQUFlLHlCQUF5QixrQkFBa0IsaUJBQWlCLDRCQUE0QixzQkFBc0IsOENBQThDLG1CQUFtQixLQUFLLDJEQUEyRCxnQkFBZ0IsS0FBSyxzQkFBc0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsS0FBSyxtQkFBbUIsb0JBQW9CLHFDQUFxQyw4QkFBOEIsaUJBQWlCLEtBQUssY0FBYywwQkFBMEIsdUJBQXVCLHVCQUF1QixLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLG1CQUFtQixrQkFBa0IsMEJBQTBCLGtCQUFrQiwrQkFBK0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGlCQUFpQixtQkFBbUIsd0JBQXdCLG1CQUFtQix3QkFBd0IsZ0pBQWdKLFNBQVMsNkJBQTZCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQix5QkFBeUIsa0JBQWtCLGtCQUFrQixpQkFBaUIsMEJBQTBCLHlCQUF5QixpQkFBaUIscUNBQXFDLGdCQUFnQixLQUFLLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQix1QkFBdUIsdUJBQXVCLGtCQUFrQiw4QkFBOEIseUJBQXlCLHdDQUF3QyxvQkFBb0IsbUJBQW1CLG1CQUFtQix3QkFBd0IsZ0pBQWdKLEtBQUssd0JBQXdCLHdCQUF3QixpQkFBaUIsbUJBQW1CLHdCQUF3QixtQkFBbUIsd0JBQXdCLGdKQUFnSixLQUFLLDJCQUEyQixvQkFBb0IsbUJBQW1CLGtCQUFrQix1QkFBdUIsdUJBQXVCLGVBQWUsV0FBVyx5QkFBeUIsOEJBQThCLHlCQUF5QixtREFBbUQsc0JBQXNCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLG1CQUFtQix3QkFBd0IsZ0pBQWdKLEtBQUssYUFBYSxtQkFBbUIsa0JBQWtCLG1CQUFtQixLQUFLLG1CQUFtQjtBQUMzNk47QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDalAxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUVBQWUscUJBQXVCLHFDQUFxQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTNFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0F4RSxpRUFBZSxxQkFBdUIsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFFLGlFQUFlLHFCQUF1QixvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0ExRSxpRUFBZSxxQkFBdUIsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7QUNBN0Q7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLG9FQUFnQjtBQUN2QyxrQkFBa0IsbUJBQU8sQ0FBQywwRUFBbUI7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsd0VBQWtCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDblZhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25MYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDOUM7QUFDd0M7QUFDQTtBQUN4QztBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFZO0FBQ2hCO0FBQ0EsMkVBQTJFLHlEQUFrQjtBQUM3RiwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVUsSUFBSSxZQUFZLElBQUksYUFBYTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBWTtBQUNkLFFBQVEsd0RBQVc7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBLFdBQVcsVUFBVTtBQUM2QjtBQUNKO0FBQ087QUFDYjtBQUN4QztBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUseURBQWtCO0FBQy9GLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHdCQUF3QjtBQUNoRSw2Q0FBNkMsd0JBQXdCO0FBQ3JFLGtEQUFrRCx5QkFBeUI7QUFDM0U7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQsMkNBQTJDLDRCQUE0QjtBQUN2RSxNQUFNO0FBQ04sNEJBQTRCLHVCQUF1QjtBQUNuRCwyQ0FBMkMsNEJBQTRCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyw0REFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbURBQVM7QUFDaEMsTUFBTTtBQUNOLHVCQUF1QixxREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEIsSUFBSSwrQkFBK0I7QUFDN0YsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNENBQTRDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDZCQUE2QjtBQUM1RTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsNERBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtQkFBbUIsSUFBSSxvQkFBb0I7QUFDaEYsT0FBTztBQUNQLHFDQUFxQyxtQkFBbUIsSUFBSSxvQkFBb0I7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xELE9BQU87QUFDUCxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFTO0FBQ2xDLFFBQVE7QUFDUix5QkFBeUIscURBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9CQUFvQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQsU0FBUztBQUNULHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQVM7QUFDcEMsVUFBVTtBQUNWLDJCQUEyQixxREFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFaUQ7QUFDakQ7QUFDd0M7QUFDZ0I7QUFDeEQ7QUFDZTtBQUNmO0FBQ0Esc0NBQXNDLHFFQUFVLENBQUM7QUFDakQsc0JBQXNCLHFFQUFVLENBQUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMERBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsRUFBRSx3REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDMUxlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQSxrQ0FBa0MsMkNBQTJDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyw0QkFBNEIsMkVBQW1FO0FBQy9GLDhCQUE4Qiw2RUFBcUU7QUFDMUc7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNYb0M7QUFDSjtBQUNoQztBQUNBLHNEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTEzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExOS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTIyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xNDMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE3Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTc5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xODIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE4NS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjAwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yMjcucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIzMC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjQ4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjY2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yODEucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI4NC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjkzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzAyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwOC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzExLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTQucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxNy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzIwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyNi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzI5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzNS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzM4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzU2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2Mi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzY1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3MS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzc0LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzcucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM4Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzg5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zOTIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM5NS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTE2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExOS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMjIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTQzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNzkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTgyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4NS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMDAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjI3LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIzMC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNDgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjYwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjgxLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4NC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTMucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjk2LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5OS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDIucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzA1LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwOC5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTEucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzE0LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNy5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjAucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzIzLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyNi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzMyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzNS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzgucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzUwLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1My5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTYucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzU5LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2Mi5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjUucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzY4LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3MS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzQucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzc3LnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4Ni5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zODkucG5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzkyLnBuZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5NS5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9kZS1kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub2RlLWRhdGV0aW1lL3NyYy9kYXRldGltZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub2RlLWRhdGV0aW1lL3NyYy90aW1lZG51bWJlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub2RlLWRhdGV0aW1lL3NyYy90aW1lZHN0YXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQXBpQ3JlZHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQXBpU2VhcmNoTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQXBpZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jcmVhdGVEb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tSGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogICBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNsb2NhY3Rpb25BbmRTd2l0Y2hDb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbiN0b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcclxufVxyXG5cclxuI2xvY2F0aW9ue1xyXG4gIGhlaWdodDogNC42dmg7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcbn1cclxuXHJcbiNzd2l0Y2hDRiwgI3N3aXRjaERIIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7ICBcclxuICB6LWluZGV4OiAxO1xyXG4gIGdhcDogMiU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuI3N3aXRjaENlbHNpdXMgLCAjc3dpdGNoRmFyZW5oZWl0LCAjc3dpdGNoSG91ciwgI3N3aXRjaERheXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xyXG59XHJcblxyXG4jc3dpdGNoU2VsZWN0b3IsICNzd2l0Y2hTZWxlY3RvckRIe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICB6LWluZGV4OiAyOyAgXHJcbn1cclxuXHJcbiNzd2l0Y2hTZWxlY3Rvci5mYXJlbmhlaXQsICNzd2l0Y2hTZWxlY3RvckRILmhvdXJze1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuI3dlYXRoZXJJbWFnZXtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNkYXNoYm9hcmR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyAgXHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuI3RlbXB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNmb290ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogNDV2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMyVcclxufVxyXG5cclxuI2N1cnJlbnRJbmZvQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcblxyXG59XHJcblxyXG4jc2VsZWN0aW9uc0NvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgdG9wOiAtMTAwdmg7XHJcbiAgei1pbmRleDogMDtcclxuICB0cmFuc2l0aW9uOiB0b3AgMXMgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBcclxuICBcclxufVxyXG5cclxuI3NlbGVjdGlvbnNDb250YWluZXIuZGVwbG95IHtcclxuICB0b3A6IDEwdmg7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICBwYWRkaW5nOiAwLjUlO1xyXG4gIG1hcmdpbjogMC41JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcbn1cclxuXHJcbiNhZGRpdGlvbmFsSW5mb3tcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogNDUlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XHJcbn1cclxuXHJcbiNmb3JlY2FzdENvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMzh2aDtcclxuICB3aWR0aDogODB2dztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IG5vbmU7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgXHJcbn1cclxuXHJcbi5mb3JlY2FzdEVsZW1lbnR7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC40MzgpO1xyXG4gIGZsZXg6IDAgMCAxNTBweDtcclxuICBtaW4taGVpZ2h0OiAxNjBweDtcclxuXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxyXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQix1QkFBdUIsWUFBWTtFQUM3RCw4QkFBOEI7RUFDOUIsa0NBQWtDOztBQUVwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7OztnQ0FHOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjs7O2dDQUc4Qjs7QUFFaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7OztBQUdwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjs7O2dDQUc4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFROztBQUVWOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCOzs7Z0NBRzhCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogICAgIGNvdmVyOyAgICAgICAgICAgICAgICAgICAgICAvKiA8LS0tLS0tICovXFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogICBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMiU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9wIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb257XFxyXFxuICBoZWlnaHQ6IDQuNnZoO1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXJ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaENGLCAjc3dpdGNoREgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7ICBcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBnYXA6IDIlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaENlbHNpdXMgLCAjc3dpdGNoRmFyZW5oZWl0LCAjc3dpdGNoSG91ciwgI3N3aXRjaERheXtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDZ2aDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoU2VsZWN0b3IsICNzd2l0Y2hTZWxlY3RvckRIe1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3M7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XFxyXFxuICB6LWluZGV4OiAyOyAgXFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2hTZWxlY3Rvci5mYXJlbmhlaXQsICNzd2l0Y2hTZWxlY3RvckRILmhvdXJze1xcclxcbiAgbGVmdDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlckltYWdle1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rhc2hib2FyZHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7ICBcXHJcXG4gIG1hcmdpbjogMSU7XFxyXFxufVxcclxcblxcclxcbiN0ZW1we1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDQ1dmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMlXFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50SW5mb0NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb25zQ29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIHRvcDogLTEwMHZoO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHRyYW5zaXRpb246IHRvcCAxcyA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uc0NvbnRhaW5lci5kZXBsb3kge1xcclxcbiAgdG9wOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNXZoO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuICBwYWRkaW5nOiAwLjUlO1xcclxcbiAgbWFyZ2luOiAwLjUlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZGl0aW9uYWxJbmZve1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtc2hhZG93OiAgLTFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAtMXB4IC0xcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9yZWNhc3RDb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzOHZoO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteTogbm9uZTtcXHJcXG4gIGdhcDogNHB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdEVsZW1lbnR7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC40MzgpO1xcclxcbiAgZmxleDogMCAwIDE1MHB4O1xcclxcbiAgbWluLWhlaWdodDogMTYwcHg7XFxyXFxuXFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1zaGFkb3c6ICAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIDFweCAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgICAgICAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzEyMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE0My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE3Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE3OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE4Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE4NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIwMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIyNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIzMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI0OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI4MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI4NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM4Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM4OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM5Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM5NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzExOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTIyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNDMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE3Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMTc5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xODIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzE4NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjAwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMjcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzIzMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjQ4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI2My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjY2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yODEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI4NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMjkzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzI5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzAyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMwOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzExLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMxNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzIwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMyNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzI5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzMzNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzM4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM2Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzc0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM4Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQvMzg5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zOTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldHMvaW1hZ2VzL25pZ2h0LzM5NS5wbmdcIjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBEYXRlVGltZSA9IHJlcXVpcmUoJy4vc3JjL2RhdGV0aW1lJyk7XG52YXIgVGltZWROdW1iZXIgPSByZXF1aXJlKCcuL3NyYy90aW1lZG51bWJlcicpO1xudmFyIFRpbWVkU3RhdGUgPSByZXF1aXJlKCcuL3NyYy90aW1lZHN0YXRlJyk7XG5cbi8vIGdsb2JhbCBvZmZzZXRzIGZvciBkYXRldGltZVxudmFyIG9mZnNldHMgPSB7XG5cdGRheXM6IDAsXG5cdGhvdXJzOiAwXG59O1xuXG4vLyBnbG9iYWwgZGVmYXVsdCBmb3JtYXRcbnZhciBnbG9iYWxEZWZhdWx0Rm9ybWF0ID0gbnVsbDtcblxuZXhwb3J0cy5zZXRPZmZzZXRJbkRheXMgPSBmdW5jdGlvbiAoZCkge1xuXG5cdGlmIChpc05hTihkKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZE9mZnNldCcpO1xuXHR9XG5cblx0b2Zmc2V0cy5kYXlzID0gZDtcbn07XG5cbmV4cG9ydHMuc2V0T2Zmc2V0SW5Ib3VycyA9IGZ1bmN0aW9uIChoKSB7XG5cblx0aWYgKGlzTmFOKGgpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkT2Zmc2V0Jyk7XG5cdH1cblxuXHRvZmZzZXRzLmhvdXJzID0gaDtcbn07XG5cbmV4cG9ydHMuc2V0RGVmYXVsdEZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcblx0Z2xvYmFsRGVmYXVsdEZvcm1hdCA9IGZvcm1hdDtcbn07XG5cbmV4cG9ydHMuc2V0V2Vla05hbWVzID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0RGF0ZVRpbWUuc2V0V2Vla05hbWVzKGxpc3QpO1xufTtcblxuZXhwb3J0cy5zZXRTaG9ydFdlZWtOYW1lcyA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdERhdGVUaW1lLnNldFNob3J0V2Vla05hbWVzKGxpc3QpO1xufTtcblxuZXhwb3J0cy5zZXRNb250aE5hbWUgPSBmdW5jdGlvbiAobGlzdCkge1xuXHREYXRlVGltZS5zZXRNb250aE5hbWUobGlzdCk7XG59O1xuXG5leHBvcnRzLnNldFNob3J0TW9udGhOYW1lcyA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdERhdGVUaW1lLnNldFNob3J0TW9udGhOYW1lKGxpc3QpO1xufTtcblxuZXhwb3J0cy5zZXRQZXJpb2QgPSBmdW5jdGlvbiAobGlzdCkge1xuXHREYXRlVGltZS5zZXRQZXJpb2QobGlzdCk7XG59O1xuXG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIChub3csIGRlZmF1bHRGb3JtYXQpIHtcblxuXHRpZiAoIWRlZmF1bHRGb3JtYXQgJiYgZ2xvYmFsRGVmYXVsdEZvcm1hdCkge1xuXHRcdGRlZmF1bHRGb3JtYXQgPSBnbG9iYWxEZWZhdWx0Rm9ybWF0O1xuXHR9XG5cblx0dmFyIGQgPSBuZXcgRGF0ZVRpbWUobm93LCBkZWZhdWx0Rm9ybWF0KTtcblxuXHRpZiAob2Zmc2V0cy5kYXlzICE9PSAwKSB7XG5cdFx0ZC5vZmZzZXRJbkRheXMob2Zmc2V0cy5kYXlzKTtcblx0fVxuXG5cdGlmIChvZmZzZXRzLmhvdXJzICE9PSAwKSB7XG5cdFx0ZC5vZmZzZXRJbkhvdXJzKG9mZnNldHMuaG91cnMpO1xuXHR9XG5cblx0cmV0dXJuIGQ7XG59O1xuXG5leHBvcnRzLmNyZWF0ZVRpbWVkTnVtYmVyID0gZnVuY3Rpb24gKGNvbmYpIHtcblx0cmV0dXJuIG5ldyBUaW1lZE51bWJlcihjb25mKTtcbn07XG5cbmV4cG9ydHMuY3JlYXRlVGltZWRTdGF0ZSA9IGZ1bmN0aW9uIChjb25mKSB7XG5cdHJldHVybiBuZXcgVGltZWRTdGF0ZShjb25mKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBGT1JNQVRTID0ge1xuXHR5OiBnZXRZZWFyLFxuXHRZOiBnZXRGdWxsWWVhcixcblx0bTogZ2V0TW9udGgsXG5cdG46IGdldE1vbnRoTmFtZSxcblx0ZjogZ2V0TW9udGhGdWxsTmFtZSxcblx0ZDogZ2V0RGF5LFxuICAgIEQ6IGdldEZvcm1hdHRlZERheSxcblx0SDogZ2V0TWlsaXRhcnlIb3Vycyxcblx0STogZ2V0SG91cnMsXG5cdE06IGdldE1pbnV0ZXMsXG5cdFM6IGdldFNlY29uZHMsXG5cdE46IGdldE1pbGxpc2VjLFxuXHR3OiBnZXRXZWVrZGF5LFxuXHRXOiBnZXRGdWxsV2Vla2RheSxcblx0cDogZ2V0UGVyaW9kXG59O1xuXG52YXIgUEVSSU9EID0ge1xuXHRBTTogJ0FNJyxcblx0UE06ICdQTSdcbn07XG5cbnZhciBXRUVLUyA9IHtcblx0QUJCOiBbXG5cdFx0J1N1bicsXG5cdFx0J01vbicsXG5cdFx0J1R1ZScsXG5cdFx0J1dlZCcsXG5cdFx0J1RodScsXG5cdFx0J0ZyaScsXG5cdFx0J1NhdCdcblx0XSxcblx0RlVMTDogW1xuXHRcdCdTdW5kYXknLFxuXHRcdCdNb25kYXknLFxuXHRcdCdUdWVzZGF5Jyxcblx0XHQnV2VkbmVzZGF5Jyxcblx0XHQnVGh1cnNkYXknLFxuXHRcdCdGcmlkYXknLFxuXHRcdCdTYXR1cmRheSdcblx0XVxufTtcblxudmFyIE1PTlRIUyA9IHtcblx0QUJCOiBbXG5cdFx0J0phbicsXG5cdFx0J0ZlYicsXG5cdFx0J01hcicsXG5cdFx0J0FwcicsXG5cdFx0J01heScsXG5cdFx0J0p1bicsXG5cdFx0J0p1bCcsXG5cdFx0J0F1ZycsXG5cdFx0J1NlcCcsXG5cdFx0J09jdCcsXG5cdFx0J05vdicsXG5cdFx0J0RlYydcblx0XSxcblx0RlVMTDogW1xuXHRcdCdKYW51YXJ5Jyxcblx0XHQnRmVicnVhcnknLFxuXHRcdCdNYXJjaCcsXG5cdFx0J0FwcmlsJyxcblx0XHQnTWF5Jyxcblx0XHQnSnVuZScsXG5cdFx0J0p1bHknLFxuXHRcdCdBdWd1c3QnLFxuXHRcdCdTZXB0ZW1iZXInLFxuXHRcdCdPY3RvYmVyJyxcblx0XHQnTm92ZW1iZXInLFxuXHRcdCdEZWNlbWJlcidcblx0XVxufTtcblxudmFyIE9ORURBWSA9IDg2NDAwMDAwO1xudmFyIE9ORUhPVVIgPSAzNjAwMDAwO1xuXG5mdW5jdGlvbiBEYXRlVGltZShub3csIGRlZmF1bHRGb3JtYXQpIHtcblx0dGhpcy5fY3JlYXRlZCA9IERhdGUubm93KCk7XG5cdHRoaXMuX25vdyA9IChub3cpID8gbmV3IERhdGUobm93KSA6IG5ldyBEYXRlKCk7XG5cdHRoaXMuX2RlbHRhID0gdGhpcy5fY3JlYXRlZCAtIHRoaXMuX25vdy5nZXRUaW1lKCk7XG5cdHRoaXMuX2RlZmF1bHRGb3JtYXQgPSBkZWZhdWx0Rm9ybWF0IHx8IG51bGw7XG59XG5cbkRhdGVUaW1lLnNldFdlZWtOYW1lcyA9IGZ1bmN0aW9uIChuYW1lcykge1xuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gbmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRpZiAoIW5hbWVzW2ldKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0V0VFS1MuRlVMTFtpXSA9IG5hbWVzW2ldO1xuXHR9XG59O1xuXG5EYXRlVGltZS5zZXRTaG9ydFdlZWtOYW1lcyA9IGZ1bmN0aW9uIChuYW1lcykge1xuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gbmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRpZiAoIW5hbWVzW2ldKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0V0VFS1MuQUJCW2ldID0gbmFtZXNbaV07XG5cdH1cbn07XG5cbi8qKlxucGVyaW9kcyBbICdBTScsICdQTScgXVxuKi9cbkRhdGVUaW1lLnNldFBlcmlvZCA9IGZ1bmN0aW9uIChwZXJpb2QpIHtcblx0aWYgKHBlcmlvZFswXSkge1xuXHRcdFBFUklPRC5BTSA9IHBlcmlvZFswXTtcblx0fVxuXHRpZiAocGVyaW9kWzFdKSB7XG5cdFx0UEVSSU9ELlBNID0gcGVyaW9kWzFdO1xuXHR9XG59O1xuXG5EYXRlVGltZS5zZXRNb250aE5hbWVzID0gZnVuY3Rpb24gKG5hbWVzKSB7XG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBuYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdGlmICghbmFtZXNbaV0pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRNT05USFMuRlVMTFtpXSA9IG5hbWVzW2ldO1xuXHR9XG59O1xuXG5EYXRlVGltZS5zZXRTaG9ydE1vbnRoTmFtZXMgPSBmdW5jdGlvbiAobmFtZXMpIHtcblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IG5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0aWYgKCFuYW1lc1tpXSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdE1PTlRIUy5BQkJbaV0gPSBuYW1lc1tpXTtcblx0fVxufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcblxuXHRpZiAoIWZvcm1hdCAmJiB0aGlzLl9kZWZhdWx0Rm9ybWF0KSB7XG5cdFx0Zm9ybWF0ID0gdGhpcy5fZGVmYXVsdEZvcm1hdDtcblx0fVxuXG5cdHZhciBzdHIgPSAnJztcblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGZvcm1hdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHN0ciArPSB0aGlzLl9jb252ZXJ0KGZvcm1hdFtpXSk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5ub3cgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5fZGVsdGE7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUuZXBvY2ggPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VGltZSgpIC8gMTAwMCk7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuX25vdy5nZXRUaW1lKCk7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUub2Zmc2V0SW5EYXlzID0gZnVuY3Rpb24gKG9mZnNldCkge1xuXHR2YXIgbmV4dCA9IG5ldyBEYXRlKHRoaXMuX25vdyk7XG5cdG5leHQuc2V0RGF0ZShuZXh0LmdldERhdGUoKSArIG9mZnNldCk7XG5cdHRoaXMuX25vdyA9IG5leHQ7XG5cdHRoaXMuX3VwZGF0ZURlbHRhKCk7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUub2Zmc2V0SW5Ib3VycyA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcblx0dmFyIG5leHQgPSBuZXcgRGF0ZSh0aGlzLl9ub3cpO1xuXHRuZXh0LnNldEhvdXJzKG5leHQuZ2V0SG91cnMoKSArIG9mZnNldCk7XG5cdHRoaXMuX25vdyA9IG5leHQ7XG5cdHRoaXMuX3VwZGF0ZURlbHRhKCk7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUuZ2V0RGF0ZXNJblJhbmdlID0gZnVuY3Rpb24gKGRhdGVPYmopIHtcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX25vdztcbiAgICB2YXIgZW5kID0gZGF0ZU9iajtcbiAgICB2YXIgZGVmYXVsdEZvcm1hdCA9IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XG5cdFxuICAgIGlmIChkYXRlT2JqIGluc3RhbmNlb2YgRGF0ZVRpbWUpIHtcbiAgICAgICAgZGVmYXVsdEZvcm1hdCA9IGRlZmF1bHRGb3JtYXQgfHwgZGF0ZU9iai5fZGVmYXVsdEZvcm1hdDtcblx0XHRlbmQgPSBkYXRlT2JqLl9ub3c7XG5cdH1cblxuXHR2YXIgbGlzdCA9IFtdO1xuXHR2YXIgZGlyID0gKGVuZC5nZXRUaW1lKCkgPj0gc3RhcnQuZ2V0VGltZSgpKSA/IDEgOiAtMTtcblx0dmFyIGRpZmYgPSAoZGlyID09PSAxKSA/IGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCkgOiBzdGFydC5nZXRUaW1lKCkgLSBlbmQuZ2V0VGltZSgpO1xuXHR2YXIgY3VycmVudCA9IG5ldyBEYXRlVGltZShzdGFydCwgZGVmYXVsdEZvcm1hdCk7XG4gICAgdmFyIGl0ZXJhdGlvbiA9IE1hdGguY2VpbChkaWZmIC8gT05FREFZKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGl0ZXJhdGlvbjsgaSsrKSB7XG5cdFx0bGlzdC5wdXNoKGN1cnJlbnQpO1xuXHRcdHZhciBuZXh0ID0gbmV3IERhdGVUaW1lKGN1cnJlbnQuZ2V0VGltZSgpLCBkZWZhdWx0Rm9ybWF0KTtcbiAgICAgICAgbmV4dC5vZmZzZXRJbkRheXMoMSAqIGRpcik7XHRcblx0XHRjdXJyZW50ID0gbmV4dDtcbiAgICB9XG5cblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5EYXRlVGltZS5wcm90b3R5cGUuZ2V0SG91cnNJblJhbmdlID0gZnVuY3Rpb24gKGRhdGVPYmopIHtcbiAgICBcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9ub3c7XG4gICAgdmFyIGVuZCA9IGRhdGVPYmo7XG4gICAgdmFyIGRlZmF1bHRGb3JtYXQgPSB0aGlzLl9kZWZhdWx0Rm9ybWF0O1xuXG5cdGlmIChkYXRlT2JqIGluc3RhbmNlb2YgRGF0ZVRpbWUpIHtcblx0ICAgIGRlZmF1bHRGb3JtYXQgPSBkZWZhdWx0Rm9ybWF0IHx8IHRoaXMuX2RlZmF1bHRGb3JtYXQ7XG5cdFx0ZW5kID0gZGF0ZU9iai5fbm93O1xuICAgIH1cblxuXHR2YXIgbGlzdCA9IFtdO1xuXHR2YXIgZGlyID0gKGVuZC5nZXRUaW1lKCkgPj0gc3RhcnQuZ2V0VGltZSgpKSA/IDEgOiAtMTtcblx0dmFyIGRpZmYgPSAoZGlyID09PSAxKSA/IGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCkgOiBzdGFydC5nZXRUaW1lKCkgLSBlbmQuZ2V0VGltZSgpO1xuXHR2YXIgY3VycmVudCA9IG5ldyBEYXRlVGltZShzdGFydCwgZGVmYXVsdEZvcm1hdCk7XG4gICAgdmFyIGl0ZXJhdGlvbiA9IE1hdGguY2VpbChkaWZmIC8gT05FSE9VUik7XG5cdFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGl0ZXJhdGlvbjsgaSsrKSB7XG4gICAgICAgIGxpc3QucHVzaChjdXJyZW50KTtcblx0XHR2YXIgbmV4dCA9IG5ldyBEYXRlVGltZShjdXJyZW50LmdldFRpbWUoKSwgZGVmYXVsdEZvcm1hdCk7XG5cdFx0bmV4dC5vZmZzZXRJbkhvdXJzKDEgKiBkaXIpO1x0XG5cdFx0Y3VycmVudCA9IG5leHQ7XG4gICAgfVxuXG5cdHJldHVybiBsaXN0O1xufTtcblxuRGF0ZVRpbWUucHJvdG90eXBlLl9jb252ZXJ0ID0gZnVuY3Rpb24gKGZvcm1hdEZyYWdtZW50KSB7XG5cdHZhciBjb252ZXJ0ZXIgPSBGT1JNQVRTW2Zvcm1hdEZyYWdtZW50XTtcblxuXHRpZiAoY29udmVydGVyKSB7XG5cdFx0cmV0dXJuIGNvbnZlcnRlcih0aGlzLl9ub3cpO1xuXHR9XG5cdFxuXHQvLyBubyBjb252ZXJ0ZXIgXG5cdHJldHVybiBmb3JtYXRGcmFnbWVudDtcbn07XG5cbkRhdGVUaW1lLnByb3RvdHlwZS5fdXBkYXRlRGVsdGEgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX2RlbHRhID0gdGhpcy5fY3JlYXRlZCAtIHRoaXMuX25vdy5nZXRUaW1lKCk7XG59O1xuXG5mdW5jdGlvbiBnZXRZZWFyKGQpIHtcblx0dmFyIHllYXIgPSBkLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcblx0cmV0dXJuIHllYXIuc3Vic3RyaW5nKHllYXIubGVuZ3RoIC0gMik7XG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxZZWFyKGQpIHtcblx0cmV0dXJuIGQuZ2V0RnVsbFllYXIoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGgoZCkge1xuXHRyZXR1cm4gcGFkKGQuZ2V0TW9udGgoKSArIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aE5hbWUoZCkge1xuXHRyZXR1cm4gTU9OVEhTLkFCQltkLmdldE1vbnRoKCldO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aEZ1bGxOYW1lKGQpIHtcblx0cmV0dXJuIE1PTlRIUy5GVUxMW2QuZ2V0TW9udGgoKV07XG59XG5cbmZ1bmN0aW9uIGdldERheShkKSB7XG5cdHJldHVybiBwYWQoZC5nZXREYXRlKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXkoZCkge1xuICAgIHZhciBfZGF0ZSA9IGQuZ2V0RGF0ZSgpO1xuICAgIGlmIChfZGF0ZSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBfZGF0ZS50b1N0cmluZygpICsgJ3RoJztcbiAgICB9XG4gICAgdmFyIGRhdGUgPSBfZGF0ZS50b1N0cmluZygpO1xuICAgIHZhciBsYXN0RGlnaXQgPSBwYXJzZUludChkYXRlW2RhdGUubGVuZ3RoIC0gMV0pO1xuICAgIHN3aXRjaCAobGFzdERpZ2l0KSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGxhc3REaWdpdCArPSAnc3QnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxhc3REaWdpdCArPSAnbmQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxhc3REaWdpdCArPSAncmQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsYXN0RGlnaXQgKz0gJ3RoJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZS5zdWJzdHJpbmcoMCwgZGF0ZS5sZW5ndGggLSAxKSArIGxhc3REaWdpdDtcbn1cblxuZnVuY3Rpb24gZ2V0TWlsaXRhcnlIb3VycyhkKSB7XG5cdHJldHVybiBwYWQoZC5nZXRIb3VycygpKTtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cnMoZCkge1xuXHR2YXIgaCA9IGQuZ2V0SG91cnMoKTtcblx0dmFyIGhvdXJzID0gKGggPiAxMikgPyBoIC0gMTIgOiBoOyBcblx0cmV0dXJuIHBhZChob3Vycyk7XG59XG5cbmZ1bmN0aW9uIGdldE1pbnV0ZXMoZCkge1xuXHRyZXR1cm4gcGFkKGQuZ2V0TWludXRlcygpKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Vjb25kcyhkKSB7XG5cdHJldHVybiBwYWQoZC5nZXRTZWNvbmRzKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRNaWxsaXNlYyhkKSB7XG5cdHJldHVybiBtcGFkKGQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrZGF5KGQpIHtcblx0cmV0dXJuIFdFRUtTLkFCQltkLmdldERheSgpXTtcbn1cblxuZnVuY3Rpb24gZ2V0RnVsbFdlZWtkYXkoZCkge1xuXHRyZXR1cm4gV0VFS1MuRlVMTFtkLmdldERheSgpXTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVyaW9kKGQpIHtcblx0dmFyIGhvdXJzID0gZC5nZXRIb3VycygpO1xuXHRpZiAoaG91cnMgPCAxMikge1xuXHRcdHJldHVybiBQRVJJT0QuQU07XG5cdH1cblx0cmV0dXJuIFBFUklPRC5QTTtcbn1cblxuZnVuY3Rpb24gcGFkKG4pIHtcblx0cmV0dXJuIChuIDwgMTApID8gJzAnICsgbiA6IG47XG59XG5cbmZ1bmN0aW9uIG1wYWQobikge1xuXHR2YXIgcGFkZGVkID0gcGFkKG4pO1xuXHRyZXR1cm4gKHR5cGVvZiBwYWRkZWQgPT09ICdzdHJpbmcnIHx8IHBhZGRlZCA8IDEwMCkgPyAnMCcgKyBwYWRkZWQgOiBwYWRkZWQ7IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVUaW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSU5DID0gJ2luYyc7XG52YXIgREVDID0gJ2RlYyc7XG5cbi8qXG5jb25mOiB7XG4gICAgICAgIG1heDogW251bWJlcl0sXG4gICAgICAgIG1pbjogW251bWJlcl0sXG4gICAgICAgIGludGVydmFsOiBbbnVtYmVyXSwgLy8gdXBkYXRlIGludGVydmFsXG4gICAgICAgIHN0ZXA6IFtudW1iZXJdLCAvLyB1cGRhdGUgc3RlcCBlLmcuIGlzIHN0ZXAgPSAyLCBpdCB3aWxsIGluYy9kZWMgMiBldmVyeSBpbnRlcnZhbFxuICAgICAgICB0eXBlOiBbc3RyaW5nXSwgLy8gaW5jOiBpbmNyZW1lbnQsIGRlYzogZGVjcmVtZW50XG4gICAgICAgIGluaXQ6IFtudW1iZXJdLCAvLyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIG1heCBhbmQgc21hbGxlciB0aGFuIG1pblxuXHRsYXN0VXBkYXRlOiBbKm51bWJlcl0gLy8gYW4gb3B0aW9uYWwgdGltZXN0YW1wIHRvIGNvbnJ0b2wgbGFzdCB1cGRhdGUgc3RhdGVcbn1cbiovXG5mdW5jdGlvbiBUaW1lZE51bWJlcihjb25mKSB7XG5cdHRoaXMudmFsaWRhdGUoY29uZik7XG5cdHRoaXMuY29uZiA9IGNvbmY7XG5cdHRoaXMuY3VycmVudCA9IHRoaXMuY29uZi5pbml0O1xuXHR0aGlzLmxhc3RVcGRhdGUgPSB0aGlzLmNvbmYubGFzdFVwZGF0ZSB8fCBEYXRlLm5vdygpO1xufVxuXG4vLyBwdWJsaWNcblRpbWVkTnVtYmVyLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0c3dpdGNoICh0aGlzLmNvbmYudHlwZSkge1xuXHRcdGNhc2UgSU5DOlxuXHRcdFx0cmV0dXJuIHRoaXMuY2FsY3VsYXRlQ3VycmVudFZhbHVlRm9ySW5jKCk7XG5cdFx0Y2FzZSBERUM6XG5cdFx0XHRyZXR1cm4gdGhpcy5jYWxjdWxhdGVDdXJyZW50VmFsdWVGb3JEZWMoKTtcblx0fVxufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghdmFsdWUgfHwgaXNOYU4odmFsdWUpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICh0aGlzLmN1cnJlbnQgKyB2YWx1ZSA+IHRoaXMuY29uZi5tYXgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29uZi5pbml0KSB7XG5cdFx0Ly8gaW5pdGlhbCBtb2Rcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXHR9XG5cblx0Ly8gaWYgdHlwZSBpcyBpbmMsIGluY3JlYXNpbmcgbWVhbnMgcmVjb3ZlcmluZ1xuXHR0aGlzLmN1cnJlbnQgKz0gdmFsdWU7XG5cblx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmRlYyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IGlzTmFOKHZhbHVlKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAodGhpcy5jdXJyZW50IC0gdmFsdWUgPCB0aGlzLmNvbmYubWluKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHRpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbmYuaW5pdCkge1xuXHRcdC8vIGluaXRpYWwgbW9kXG5cdFx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblx0fVxuXHRcblx0Ly8gaWYgdHlwZSBpcyBkZWMsIGRlY3JlYXNpbmcgbWVhbnMgcmVjb3ZlcmluZ1xuXHR0aGlzLmN1cnJlbnQgLT0gdmFsdWU7XG5cblx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmN1cnJlbnQgPSB0aGlzLmNvbmYuaW5pdDtcblx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmdldE1heFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5jb25mLm1heDtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmdldE1pblZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5jb25mLm1pbjtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLmdldEludGVydmFsID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5jb25mLmludGVydmFsO1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuY29uZi5zdGVwO1xufTtcblxuLy8gcHVibGljXG5UaW1lZE51bWJlci5wcm90b3R5cGUuZ2V0TGFzdFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubGFzdFVwZGF0ZTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWROdW1iZXIucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdG9iai5jdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuXHRvYmoubGFzdFVwZGF0ZSA9IHRoaXMubGFzdFVwZGF0ZTtcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuY29uZikge1xuXHRcdG9ialtrZXldID0gdGhpcy5jb25mW2tleV07XG5cdH1cblx0cmV0dXJuIG9iajtcbn07XG5cbi8vIHByaXZhdGVcblRpbWVkTnVtYmVyLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjb25mKSB7XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnbWF4JykgfHwgaXNOYU4oY29uZi5tYXgpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG1heDogJyArIGNvbmYubWF4KTtcblx0fVxuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ21pbicpIHx8IGlzTmFOKGNvbmYubWluKSB8fCBjb25mLm1pbiA+PSBjb25mLm1heCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBtaW46ICcgKyBjb25mLm1pbik7XG5cdH1cblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdpbnRlcnZhbCcpIHx8IGlzTmFOKGNvbmYuaW50ZXJ2YWwpIHx8IGNvbmYuaW50ZXJ2YWwgPD0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbnRlcnZhbDogJyArIGNvbmYuaW50ZXJ2YWwpO1xuXHR9XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgndHlwZScpIHx8IChjb25mLnR5cGUgIT09IElOQyAmJiBjb25mLnR5cGUgIT09IERFQykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZTogJyArIGNvbmYudHlwZSk7XG5cdH1cblx0aWYgKCFjb25mLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgaXNOYU4oY29uZi5pbml0KSB8fCBjb25mLmluaXQgPD0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbml0OiAnICsgY29uZi5pbml0KTtcblx0fVxuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ3N0ZXAnKSB8fCBpc05hTihjb25mLnN0ZXApIHx8IGNvbmYuc3RlcCA8PSAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHN0ZXA6ICcgKyBjb25mLnN0ZXApO1xuXHR9XG5cdGlmIChjb25mLnR5cGUgPT09IElOQyAmJiBjb25mLnN0ZXAgPiBjb25mLm1heCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignc3RlcCBtdXN0IG5vdCBiZSBncmVhdGVyIHRoYW4gbWF4Jyk7XG5cdH1cblx0aWYgKGNvbmYudHlwZSA9PT0gREVDICYmIGNvbmYuc3RlcCA8IGNvbmYubWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdzdGVwIG11c3Qgbm90IGJlIHNtYWxsZXIgdGhhbiBtaW4nKTtcblx0fVxufTtcblxuLy8gcHJpdmF0ZVxuVGltZWROdW1iZXIucHJvdG90eXBlLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZUZvckluYyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5jb25mLm1heCkge1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnQ7XG5cdH1cblx0dmFyIG5vdyA9IERhdGUubm93KCk7XG5cdHZhciB0aW1lUGFzdCA9IG5vdyAtIHRoaXMubGFzdFVwZGF0ZTtcblx0dmFyIHN0ZXBzID0gTWF0aC5mbG9vcih0aW1lUGFzdCAvIHRoaXMuY29uZi5pbnRlcnZhbCk7XG5cdHZhciBpbmNWYWx1ZSA9IHRoaXMuY29uZi5zdGVwICogc3RlcHM7XG5cdHRoaXMuY3VycmVudCA9ICh0aGlzLmN1cnJlbnQgKyBpbmNWYWx1ZSA8PSB0aGlzLmNvbmYubWF4KSA/IHRoaXMuY3VycmVudCArIGluY1ZhbHVlIDogdGhpcy5jb25mLm1heDtcblx0aWYgKGluY1ZhbHVlKSB7XG5cdFx0dGhpcy5sYXN0VXBkYXRlID0gbm93O1xuXHR9XG5cdHJldHVybiB0aGlzLmN1cnJlbnQ7XG59O1xuXG4vLyBwcml2YXRlXG5UaW1lZE51bWJlci5wcm90b3R5cGUuY2FsY3VsYXRlQ3VycmVudFZhbHVlRm9yRGVjID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbmYubWluKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudDtcblx0fVxuXHR2YXIgbm93ID0gRGF0ZS5ub3coKTtcblx0dmFyIHRpbWVQYXN0ID0gbm93IC0gdGhpcy5sYXN0VXBkYXRlO1xuXHR2YXIgc3RlcHMgPSBNYXRoLmZsb29yKHRpbWVQYXN0IC8gdGhpcy5jb25mLmludGVydmFsKTtcblx0dmFyIGRlY1ZhbHVlID0gdGhpcy5jb25mLnN0ZXAgKiBzdGVwcztcdFxuXHR0aGlzLmN1cnJlbnQgPSAodGhpcy5jdXJyZW50IC0gZGVjVmFsdWUgPj0gdGhpcy5jb25mLm1pbikgPyB0aGlzLmN1cnJlbnQgLSBkZWNWYWx1ZSA6IHRoaXMuY29uZi5taW47XG5cdGlmIChkZWNWYWx1ZSkge1xuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IG5vdztcblx0fVxuXHRyZXR1cm4gdGhpcy5jdXJyZW50O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lZE51bWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuY29uZjoge1xuXHRzdGF0ZXM6IFthcnJheV0sIC8vIGFuIGFycmF5IG9mIHN0YXRlc1xuICAgICAgICBpbnRlcnZhbDogW251bWJlcl0sIC8vIHVwZGF0ZSBpbnRlcnZhbFxuICAgICAgICBpbml0OiBbbnVtYmVyXSwgLy8gaW5pdGlhbCBpbmRleCBvZiBzdGF0ZXMgYXJyYXkgdG8gc3RhcnQgd2l0aFxuXHRsYXN0VXBkYXRlOiBbKm51bWJlcl0gLy8gYW4gb3B0aW9uYWwgdGltZXN0YW1wIHRvIGNvbnJ0b2wgbGFzdCB1cGRhdGUgc3RhdGVcblx0bG9vcDogWypib29sXSAvLyBpZiB0cnVlIHRoZSBwcm9ncmVzcyBvZiBzdGF0ZXMgd2lsbCBiZSBhIGxvb3Bcbn1cbiovXG5mdW5jdGlvbiBUaW1lZFN0YXRlKGNvbmYpIHtcblx0dGhpcy52YWxpZGF0ZShjb25mKTtcblx0dGhpcy5jb25mID0gY29uZjtcblx0dGhpcy5sZW5ndGggPSB0aGlzLmNvbmYuc3RhdGVzLmxlbmd0aDtcblx0dGhpcy5jdXJyZW50ID0gdGhpcy5jb25mLmluaXQ7XG5cdHRoaXMubGFzdFVwZGF0ZSA9IHRoaXMuY29uZi5sYXN0VXBkYXRlIHx8IERhdGUubm93KCk7XG59XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBub3cgPSBEYXRlLm5vdygpO1xuXHR2YXIgdGltZVBhc3QgPSBub3cgLSB0aGlzLmxhc3RVcGRhdGU7XG5cdHZhciBzdGVwcyA9IE1hdGguZmxvb3IodGltZVBhc3QgLyB0aGlzLmNvbmYuaW50ZXJ2YWwpO1xuXHR2YXIgbmV4dFBvcyA9IHN0ZXBzICsgdGhpcy5jdXJyZW50O1x0XG5cblx0aWYgKG5leHRQb3MgPj0gdGhpcy5sZW5ndGgpIHtcblx0XHRpZiAodGhpcy5jb25mLmxvb3ApIHtcblx0XHRcdG5leHRQb3MgPSAoc3RlcHMgKyB0aGlzLmN1cnJlbnQpIC0gKHRoaXMubGVuZ3RoKTtcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB3ZSBkb24ndCBsb29wIGFuZCBzdG9wIGF0IHRoZSBlbmQgb2YgdGhlIHN0YXRlXG5cdFx0XHRuZXh0UG9zID0gdGhpcy5sZW5ndGggLSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzLmNvbmYuc3RhdGVzW25leHRQb3NdO1xufTtcblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHtcblx0XHQvLyBpZiB2YWx1ZSBpcyBub3QgZ2l2ZW4gaXQgZGVmYXVsdHMgIHRvIDFcblx0XHR2YWx1ZSA9IDE7XG5cdH1cblx0aWYgKCF2YWx1ZSB8fCBpc05hTih2YWx1ZSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHRoaXMuY3VycmVudCArIHZhbHVlID49IHRoaXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHRpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbmYuaW5pdCkge1xuXHRcdC8vIGluaXRpYWwgbW9kXG5cdFx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcblx0fVxuXG5cdC8vIG1vdmUgdGhlIGN1cnJlbnQgY3Vyc29yIG9mIHRoZSBhcnJheSBpbmRleCBmb3J3YXJkXG5cdHRoaXMuY3VycmVudCArPSB2YWx1ZTtcblxuXHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS5iYWNrd2FyZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0Ly8gaWYgdmFsdWUgaXMgbm90IGdpdmVuIGl0IGRlZmF1bHRzICB0byAxXG5cdFx0dmFsdWUgPSAxO1xuXHR9XG5cdGlmICghdmFsdWUgfHwgaXNOYU4odmFsdWUpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICh0aGlzLmN1cnJlbnQgLSB2YWx1ZSA8IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29uZi5pbml0KSB7XG5cdFx0Ly8gaW5pdGlhbCBtb2Rcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXHR9XG5cdFxuXHQvLyBtb3ZlIHRoZSBjdXJyZW50IGN1cnNvciBvZiB0aGUgYXJyYXkgaW5kZXggYmFja3dhcmRcblx0dGhpcy5jdXJyZW50IC09IHZhbHVlO1xuXG5cdHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBwdWJsaWNcblRpbWVkU3RhdGUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmN1cnJlbnQgPSB0aGlzLmNvbmYuaW5pdDtcblx0dGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUuZ2V0U3RhdGVzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5jb25mLnN0YXRlcy5tYXAoZnVuY3Rpb24gKGVsbSkge1xuXHRcdHJldHVybiBlbG07XG5cdH0pO1xufTtcblxuLy8gcHVibGljXG5UaW1lZFN0YXRlLnByb3RvdHlwZS5nZXRJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuY29uZi5pbnRlcnZhbDtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUuZ2V0TGFzdFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubGFzdFVwZGF0ZTtcbn07XG5cbi8vIHB1YmxpY1xuVGltZWRTdGF0ZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0b2JqLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG5cdG9iai5sYXN0VXBkYXRlID0gdGhpcy5sYXN0VXBkYXRlO1xuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25mKSB7XG5cdFx0b2JqW2tleV0gPSB0aGlzLmNvbmZba2V5XTtcblx0fVxuXHRyZXR1cm4gb2JqO1xufTtcblxuLy8gcHJpdmF0ZVxuVGltZWRTdGF0ZS5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoY29uZikge1xuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ3N0YXRlcycpIHx8ICFBcnJheS5pc0FycmF5KGNvbmYuc3RhdGVzKSB8fCBjb25mLnN0YXRlcy5sZW5ndGggPT09IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgc3RhdGVzOiAnICsgY29uZi5zdGF0ZXMpO1xuXHR9XG5cdGlmICghY29uZi5oYXNPd25Qcm9wZXJ0eSgnaW50ZXJ2YWwnKSB8fCBpc05hTihjb25mLmludGVydmFsKSB8fCBjb25mLmludGVydmFsIDw9IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW50ZXJ2YWw6ICcgKyBjb25mLmludGVydmFsKTtcblx0fVxuXHRpZiAoIWNvbmYuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCBpc05hTihjb25mLmluaXQpIHx8IGNvbmYuaW5pdCA8IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5pdDogJyArIGNvbmYuaW5pdCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZWRTdGF0ZTtcblxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQVBJS0VZX1dFQVRIRVJfQVBJID0gXCJhODZkY2Q2ZTIzYTA0ODNkODIyMTY0MjQ2MjMxNzA3XCI7IiwiaW1wb3J0IHtBUElLRVlfV0VBVEhFUl9BUEl9IGZyb20gXCIuL0FwaUNyZWRzXCI7XHJcbi8vaW1wb3J0IGdldEN1cnJlbnRXZWF0aGVyIGZyb20gXCIuL0FwaUN1cnJlbnRXZWF0aGVyXCI7XHJcbmltcG9ydCBnZXRGb3JlY2FzdCBmcm9tIFwiLi9BcGlmb3JlY2FzdFwiO1xyXG5pbXBvcnQgcmVtb3ZlQ2hpbGRzIGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyTG9jYXRpb24oZSl7XHJcbiAgdHJ5eyAgICBcclxuICAgIGNvbnN0IHNlbGVjdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGlvbnNDb250YWluZXJcIik7IFxyXG4gICAgc2VsZWN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGVwbG95XCIpO1xyXG4gICAgcmVtb3ZlQ2hpbGRzKFwiI3NlbGVjdGlvbnNDb250YWluZXJcIik7XHJcbiAgICBjb25zdCB2YWx1ZVRvU2VhcmNoID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB1cmxTZWFyY2hBcGkgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PVwiICsgQVBJS0VZX1dFQVRIRVJfQVBJICsgXCImcT1cIit2YWx1ZVRvU2VhcmNoO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsU2VhcmNoQXBpLCB7IG1vZGU6IFwiY29yc1wifSk7XHJcbiAgICBsZXQgem9uZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBhd2FpdCBpbnNlcnRab25lc09uRG9tKHpvbmVzKTtcclxuICB9Y2F0Y2ggKGVycm9yKXtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH0gIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbnNlcnRab25lc09uRG9tKHpvbmVzKXtcclxuICBjb25zdCBzZWxlY3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3Rpb25zQ29udGFpbmVyXCIpOyBcclxuICBzZWxlY3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXBsb3lcIik7XHJcbiAgdHJ5IHsgICAgXHJcbiAgICBjb25zb2xlLmxvZyh6b25lcy5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2coem9uZXMpO1xyXG4gICAgY29uc29sZS5sb2coXCJ6b25lc1wiKTtcclxuICAgIGF3YWl0IHpvbmVzLmZvckVhY2goem9uZSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gYCR7em9uZS5uYW1lfSwgJHt6b25lLnJlZ2lvbn0sICR7em9uZS5jb3VudHJ5fS5gO1xyXG4gICAgICBuZXdFbGVtZW50LnZhbHVlID0gem9uZS51cmw7XHJcbiAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvblwiKTtcclxuICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbEN1cnJlbnRXZWF0aGVyKTtcclxuICAgICAgc2VsZWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgc2VsZWN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVwbG95XCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9ICBcclxuICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2FsbEN1cnJlbnRXZWF0aGVyKGUpe1xyXG4gIGNvbnN0IHZhbHVlVG9TZWFyY2ggPSBlLnRhcmdldC52YWx1ZTtcclxuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uXCIpO1xyXG4gIHNlYXJjaEJveC52YWx1ZSA9IFwiXCI7XHJcbiAgY29uc3Qgc2VsZWN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0aW9uc0NvbnRhaW5lclwiKTtcclxuICBzZWxlY3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXBsb3lcIik7XHJcbiAgcmVtb3ZlQ2hpbGRzKFwiI3NlbGVjdGlvbnNDb250YWluZXJcIik7XHJcbiAgYXdhaXQgZ2V0Rm9yZWNhc3QodmFsdWVUb1NlYXJjaClcclxufVxyXG5cclxuIiwiLy9pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSBcImNvbnNvbGVcIjtcclxuaW1wb3J0IERhdGVUaW1lIGZyb20gXCJub2RlLWRhdGV0aW1lL3NyYy9kYXRldGltZVwiO1xyXG5pbXBvcnQge0FQSUtFWV9XRUFUSEVSX0FQSX0gZnJvbSBcIi4vQXBpQ3JlZHNcIjtcclxuaW1wb3J0IHtpbWFnZXNEYXksIGltYWdlc05pZ2h0fSBmcm9tIFwiLi9pbWFnZUxvYWRlclwiO1xyXG5pbXBvcnQgcmVtb3ZlQ2hpbGRzIGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdCh1cmxMb2NhdGlvbil7XHJcbiAgdHJ5e1xyXG4gICAgbG9jYWxTdG9yYWdlLmxhc3RMb2NhdGlvblNob3dlZCA9IHVybExvY2F0aW9uO1xyXG4gICAgY29uc3QgdmFsdWVUb1NlYXJjaCA9IHVybExvY2F0aW9uO1xyXG4gICAgY29uc3QgdXJsU2VhcmNoQXBpID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PVwiICsgQVBJS0VZX1dFQVRIRVJfQVBJICsgXCImcT1cIit2YWx1ZVRvU2VhcmNoICsgXCImZGF5cz0zXCI7XHJcbiAgICAvL2NvbnNvbGUubG9nKHt1cmxTZWFyY2hBcGl9KTtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybFNlYXJjaEFwaSwge1xyXG4gICAgICAnbW9kZSc6ICdjb3JzJyxcclxuICAgICAgJ2hlYWRlcnMnOiB7XHJcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHtyZXNwb25zZX0pO1xyXG4gICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgXHJcbiAgICByZW5kZXJGb3JlY2FzdChmb3JlY2FzdC5mb3JlY2FzdCk7XHJcbiAgICByZW5kZXJDdXJyZW50V2VhdGhlcihmb3JlY2FzdC5jdXJyZW50KTtcclxuICAgIHJlbmRlckxvY2F0aW9uKGZvcmVjYXN0LmxvY2F0aW9uKTtcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3QuZm9yZWNhc3QpO1xyXG4gIH1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfSAgXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyKXtcclxuICB0cnkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcik7XHJcbiAgICBjb25zdCBzd2l0Y2hTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JcIik7XHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xyXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyRGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXJJbWFnZVwiKTsgXHJcbiAgICBjb25zdCBsYXN0VXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXN0VXBkYXRlXCIpO1xyXG4gICAgY29uc3QgcmVhbEZlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlYWxGZWVsXCIpO1xyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkaXR5XCIpO1xyXG4gICAgY29uc3Qgd2luZERpciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZERpclwiKTtcclxuICAgIGNvbnN0IHdpbmRWZWxvY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZFZlbG9jaXR5XCIpO1xyXG4gICAgXHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtjdXJyZW50V2VhdGhlci5odW1pZGl0eX0lYDtcclxuICAgIHdpbmREaXIudGV4dENvbnRlbnQgPSBgV2luZCBkaXJlY3Rpb246ICR7Y3VycmVudFdlYXRoZXIud2luZF9kaXJ9YDtcclxuICAgIHdpbmRWZWxvY2l0eS50ZXh0Q29udGVudCA9IGBXaW5kIGRpcmVjdGlvbjogJHtjdXJyZW50V2VhdGhlci53aW5kX2twaH0ga20vaGA7XHJcblxyXG4gICAgaWYgKHN3aXRjaFNlbGVjdG9yLnZhbHVlID09IFwiQ1wiKXtcclxuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLnRlbXBfY30gwrpDYDtcclxuICAgICAgcmVhbEZlZWwudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2N1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9jfSDCukNgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLnRlbXBfZn0gwrpGYDtcclxuICAgICAgcmVhbEZlZWwudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2N1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9mfSDCukZgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbmRpdGlvblxyXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAvL3VwZGF0ZVxyXG4gICAgbGV0IGRhdGV0aW1lID0gcmVxdWlyZShcIm5vZGUtZGF0ZXRpbWVcIik7XHJcbiAgICBsZXQgZHQgPSBkYXRldGltZS5jcmVhdGUoY3VycmVudFdlYXRoZXIubGFzdFVwZGF0ZSk7XHJcbiAgICBsZXQgZm9ybWF0ZWQgPSBkdC5mb3JtYXQoXCJkIG4gSDpNXCIpO1xyXG4gICAgbGFzdFVwZGF0ZS50ZXh0Q29udGVudCA9IFwiTGFzdCB1cGRhdGU6IFwiICsgZm9ybWF0ZWQ7XHJcbiAgICAvL2ltYWdlXHJcbiAgICBsZXQgSW1hZ2VJY29uID0gY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLmljb247XHJcbiAgICBJbWFnZUljb24gPSBJbWFnZUljb24uc3BsaXQoXCIvXCIpO1xyXG4gICAgbGV0IGltYWdlU3JjID0gXCJcIjtcclxuXHJcbiAgICBpZiAoY3VycmVudFdlYXRoZXIuaXNfZGF5KXtcclxuICAgICAgaW1hZ2VTcmMgPSBhd2FpdCBpbWFnZXNEYXlbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgIH0gZWxzZXtcclxuICAgICAgaW1hZ2VTcmMgPSBhd2FpdCBpbWFnZXNOaWdodFtJbWFnZUljb25bSW1hZ2VJY29uLmxlbmd0aCAtIDFdXS5kZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgd2VhdGhlckltYWdlLnNyYyA9IGltYWdlU3JjO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImZpbmlzaCByZW5kZXJDdXJyZW50V2VhdGhlclwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb2NhdGlvbihjdXJyZW50V2VhdGhlckxvY2F0aW9uKXtcclxuICB0cnl7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckxvY2F0aW9uXCIpO1xyXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlckxvY2F0aW9uLm5hbWV9LCAke2N1cnJlbnRXZWF0aGVyTG9jYXRpb24uY291bnRyeX0uYDtcclxuICB9Y2F0Y2ggKGVycm9yKXtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KXtcclxuICBjb25zdCByYWluQ2hhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWluQ2hhbmNlXCIpO1xyXG4gIGNvbnN0IGFycmF5T2ZGb3JlY2FzdCA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG4gIHJhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgUmFpbiBjaGFuY2U6ICR7YXJyYXlPZkZvcmVjYXN0WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcclxuICBjb25zdCBzd2l0Y2hTZWxlY3RvckRIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hTZWxlY3RvckRIXCIpO1xyXG4gIGNvbnN0IGRhaWx5T3JIb3VycyA9IHN3aXRjaFNlbGVjdG9yREgudmFsdWU7XHJcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvcmVjYXN0Q29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHN3aXRjaFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hTZWxlY3RvclwiKTtcclxuICBcclxuICByZW1vdmVDaGlsZHMoXCIjZm9yZWNhc3RDb250YWluZXJcIik7XHJcblxyXG4gIGlmIChkYWlseU9ySG91cnMgPT0gXCJEXCIpIHtcclxuICAgIGF3YWl0ICBhcnJheU9mRm9yZWNhc3QuZm9yRWFjaCggKGRheSkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGRheS5kYXkpO1xyXG4gICAgICBjb25zdCBuZXdEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdEYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0RWxlbWVudFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBVbWJyYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0ZW1wVW1icmFsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wVW1icmFsXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZChcInJhaW5DaGFuY2VcIik7XHJcbiAgICAgIHJhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgUmFpbiBjaGFuY2U6ICR7ZGF5LmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcclxuXHJcbiAgICAgIGxldCB0aW1lID0gKGRheS5kYXRlX2Vwb2NoICsgODY0MDApICogMTAwMCAvLyBhZGQgYSBkYXksIGFuZCBtdWx0aXBseSBwZXIgc2VuY29kc1xyXG4gICAgICBsZXQgZGF0ZXRpbWUgPSByZXF1aXJlKFwibm9kZS1kYXRldGltZVwiKTtcclxuICAgICAgbGV0IG5ld1RpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgICAgbGV0IGR0ID0gZGF0ZXRpbWUuY3JlYXRlKG5ld1RpbWUpO1xyXG4gICAgICBsZXQgZm9ybWF0ZWQgPSBkdC5mb3JtYXQoXCJ3IGQgblwiKTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XHJcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXRlZDtcclxuXHJcbiAgICAgIGNvbnN0IGRlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkZXNjcmlwLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwXCIpO1xyXG4gICAgICBkZXNjcmlwLnRleHRDb250ZW50ID0gZGF5LmRheS5jb25kaXRpb24udGV4dDtcclxuICAgICAgaWYoIHN3aXRjaFNlbGVjdG9yLnZhbHVlID09IFwiQ1wiKXtcclxuICAgICAgICB0ZW1wVW1icmFsLnRleHRDb250ZW50ID0gYCAke2RheS5kYXkubWF4dGVtcF9jfSAtICR7ZGF5LmRheS5taW50ZW1wX2N9ICDCukNgO1xyXG4gICAgICB9ZWxzZSBpZiAoc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJGXCIpe1xyXG4gICAgICAgIHRlbXBVbWJyYWwudGV4dENvbnRlbnQgPSBgICR7ZGF5LmRheS5tYXh0ZW1wX2Z9IC0gJHtkYXkuZGF5Lm1pbnRlbXBfZn0gIMK6RmA7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2U7XHJcbiAgICAgIGltYWdlLnNyYyA9IFwiXCI7XHJcblxyXG4gICAgICBsZXQgSW1hZ2VJY29uID0gZGF5LmRheS5jb25kaXRpb24uaWNvbjtcclxuICAgICAgSW1hZ2VJY29uID0gSW1hZ2VJY29uLnNwbGl0KFwiL1wiKTtcclxuICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZXNEYXlbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XHJcblxyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChkZXNjcmlwKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKHRlbXBVbWJyYWwpO1xyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQocmFpbkNoYW5jZSk7XHJcbiAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RheSk7XHJcbiAgICB9ICk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcIkRhaWx5XCIpO1xyXG4gIH0gZWxzZSBpZiAoZGFpbHlPckhvdXJzID09IFwiSFwiKSB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZTtcclxuICAgIGNvbnN0IG5vd0hvdXJzID0gbm93LmdldEhvdXJzKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSBub3dIb3VyczsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBob3VyID0gYXJyYXlPZkZvcmVjYXN0WzBdLmhvdXJbaW5kZXhdO1xyXG5cclxuICAgICAgY29uc3QgbmV3RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbmV3RGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdEVsZW1lbnRcIik7XHJcblxyXG4gICAgICBjb25zdCB0ZW1wVW1icmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGVtcFVtYnJhbC5jbGFzc0xpc3QuYWRkKFwidGVtcFVtYnJhbFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICByYWluQ2hhbmNlLmNsYXNzTGlzdC5hZGQoXCJyYWluQ2hhbmNlXCIpO1xyXG4gICAgICByYWluQ2hhbmNlLnRleHRDb250ZW50ID0gYFJhaW4gY2hhbmNlOiAke2hvdXIuY2hhbmNlX29mX3JhaW59JWBcclxuXHJcblxyXG4gICAgICAvL2xldCB0aW1lID0gKGRheS5kYXRlX2Vwb2NoICsgODY0MDApICogMTAwMCAvLyBhZGQgYSBkYXksIGFuZCBtdWx0aXBseSBwZXIgc2VuY29kc1xyXG4gICAgICAvL2xldCBkYXRldGltZSA9IHJlcXVpcmUoXCJub2RlLWRhdGV0aW1lXCIpO1xyXG4gICAgICAvL2xldCBuZXdUaW1lID0gbmV3IERhdGUodGltZSk7XHJcbiAgICAgIC8vbGV0IGR0ID0gZGF0ZXRpbWUuY3JlYXRlKG5ld1RpbWUpO1xyXG4gICAgICAvL2xldCBmb3JtYXRlZCA9IGR0LmZvcm1hdChcImQgblwiKTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XHJcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHtpbmRleH06MDBgO1xyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRlc2NyaXAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXBcIik7XHJcbiAgICAgIGRlc2NyaXAudGV4dENvbnRlbnQgPSBob3VyLmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgICBpZiggc3dpdGNoU2VsZWN0b3IudmFsdWUgPT0gXCJDXCIpe1xyXG4gICAgICAgIHRlbXBVbWJyYWwudGV4dENvbnRlbnQgPSBgICR7aG91ci50ZW1wX2N9IMK6Q2A7XHJcbiAgICAgIH1lbHNlIGlmIChzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9PSBcIkZcIil7XHJcbiAgICAgICAgdGVtcFVtYnJhbC50ZXh0Q29udGVudCA9IGAgJHtob3VyLnRlbXBfZn0gIMK6RmA7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2U7XHJcbiAgICAgIGltYWdlLnNyYyA9IFwiXCI7XHJcblxyXG4gICAgICBsZXQgSW1hZ2VJY29uID0gaG91ci5jb25kaXRpb24uaWNvbjtcclxuICAgICAgSW1hZ2VJY29uID0gSW1hZ2VJY29uLnNwbGl0KFwiL1wiKTtcclxuICAgICAgbGV0IGltYWdlU3JjO1xyXG4gICAgICBpZiAoaG91ci5pc19kYXkpe1xyXG4gICAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzRGF5W0ltYWdlSWNvbltJbWFnZUljb24ubGVuZ3RoIC0gMV1dLmRlZmF1bHQ7XHJcbiAgICAgIH0gZWxzZXtcclxuICAgICAgICBpbWFnZVNyYyA9IGF3YWl0IGltYWdlc05pZ2h0W0ltYWdlSWNvbltJbWFnZUljb24ubGVuZ3RoIC0gMV1dLmRlZmF1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XHJcblxyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChkZXNjcmlwKTtcclxuICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKHRlbXBVbWJyYWwpO1xyXG4gICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQocmFpbkNoYW5jZSk7XHJcbiAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RheSk7ICAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZiggbm93SG91cnMgIT0gMCApe1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm93SG91cnM7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBob3VyID0gYXJyYXlPZkZvcmVjYXN0WzFdLmhvdXJbaW5kZXhdO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IG5ld0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3RGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdEVsZW1lbnRcIik7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgdGVtcFVtYnJhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGVtcFVtYnJhbC5jbGFzc0xpc3QuYWRkKFwidGVtcFVtYnJhbFwiKTtcclxuICBcclxuICAgICAgICBjb25zdCByYWluQ2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByYWluQ2hhbmNlLmNsYXNzTGlzdC5hZGQoXCJyYWluQ2hhbmNlXCIpO1xyXG4gICAgICAgIHJhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgUmFpbiBjaGFuY2U6ICR7aG91ci5jaGFuY2Vfb2ZfcmFpbn0lYFxyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xyXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHtpbmRleH06MDBgO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRlc2NyaXAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXBcIik7XHJcbiAgICAgICAgZGVzY3JpcC50ZXh0Q29udGVudCA9IGhvdXIuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAgICAgaWYoIHN3aXRjaFNlbGVjdG9yLnZhbHVlID09IFwiQ1wiKXtcclxuICAgICAgICAgIHRlbXBVbWJyYWwudGV4dENvbnRlbnQgPSBgICR7aG91ci50ZW1wX2N9IMK6Q2A7XHJcbiAgICAgICAgfWVsc2UgaWYgKHN3aXRjaFNlbGVjdG9yLnZhbHVlID09IFwiRlwiKXtcclxuICAgICAgICAgIHRlbXBVbWJyYWwudGV4dENvbnRlbnQgPSBgICR7aG91ci50ZW1wX2Z9ICDCukZgO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBcIlwiO1xyXG4gIFxyXG4gICAgICAgIGxldCBJbWFnZUljb24gPSBob3VyLmNvbmRpdGlvbi5pY29uO1xyXG4gICAgICAgIEltYWdlSWNvbiA9IEltYWdlSWNvbi5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgbGV0IGltYWdlU3JjO1xyXG4gICAgICAgIGlmIChob3VyLmlzX2RheSl7XHJcbiAgICAgICAgICBpbWFnZVNyYyA9IGF3YWl0IGltYWdlc0RheVtJbWFnZUljb25bSW1hZ2VJY29uLmxlbmd0aCAtIDFdXS5kZWZhdWx0O1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIGltYWdlU3JjID0gYXdhaXQgaW1hZ2VzTmlnaHRbSW1hZ2VJY29uW0ltYWdlSWNvbi5sZW5ndGggLSAxXV0uZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XHJcbiAgXHJcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgICAgIG5ld0RheS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgbmV3RGF5LmFwcGVuZENoaWxkKGRlc2NyaXApO1xyXG4gICAgICAgIG5ld0RheS5hcHBlbmRDaGlsZCh0ZW1wVW1icmFsKTtcclxuICAgICAgICBuZXdEYXkuYXBwZW5kQ2hpbGQocmFpbkNoYW5jZSk7XHJcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGF5KTsgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi8xMTMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTEzLnBuZ1wiLFxuXHRcIi4vMTE2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzExNi5wbmdcIixcblx0XCIuLzExOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xMTkucG5nXCIsXG5cdFwiLi8xMjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTIyLnBuZ1wiLFxuXHRcIi4vMTQzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE0My5wbmdcIixcblx0XCIuLzE3Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xNzYucG5nXCIsXG5cdFwiLi8xNzkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMTc5LnBuZ1wiLFxuXHRcIi4vMTgyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzE4Mi5wbmdcIixcblx0XCIuLzE4NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8xODUucG5nXCIsXG5cdFwiLi8yMDAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjAwLnBuZ1wiLFxuXHRcIi4vMjI3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzIyNy5wbmdcIixcblx0XCIuLzIzMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yMzAucG5nXCIsXG5cdFwiLi8yNDgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjQ4LnBuZ1wiLFxuXHRcIi4vMjYwLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI2MC5wbmdcIixcblx0XCIuLzI2My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yNjMucG5nXCIsXG5cdFwiLi8yNjYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjY2LnBuZ1wiLFxuXHRcIi4vMjgxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI4MS5wbmdcIixcblx0XCIuLzI4NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yODQucG5nXCIsXG5cdFwiLi8yOTMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMjkzLnBuZ1wiLFxuXHRcIi4vMjk2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzI5Ni5wbmdcIixcblx0XCIuLzI5OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8yOTkucG5nXCIsXG5cdFwiLi8zMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzAyLnBuZ1wiLFxuXHRcIi4vMzA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMwNS5wbmdcIixcblx0XCIuLzMwOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMDgucG5nXCIsXG5cdFwiLi8zMTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzExLnBuZ1wiLFxuXHRcIi4vMzE0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMxNC5wbmdcIixcblx0XCIuLzMxNy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMTcucG5nXCIsXG5cdFwiLi8zMjAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzIwLnBuZ1wiLFxuXHRcIi4vMzIzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMyMy5wbmdcIixcblx0XCIuLzMyNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMjYucG5nXCIsXG5cdFwiLi8zMjkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzI5LnBuZ1wiLFxuXHRcIi4vMzMyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzMzMi5wbmdcIixcblx0XCIuLzMzNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zMzUucG5nXCIsXG5cdFwiLi8zMzgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzM4LnBuZ1wiLFxuXHRcIi4vMzUwLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1MC5wbmdcIixcblx0XCIuLzM1My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNTMucG5nXCIsXG5cdFwiLi8zNTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzU2LnBuZ1wiLFxuXHRcIi4vMzU5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM1OS5wbmdcIixcblx0XCIuLzM2Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNjIucG5nXCIsXG5cdFwiLi8zNjUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzY1LnBuZ1wiLFxuXHRcIi4vMzY4LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM2OC5wbmdcIixcblx0XCIuLzM3MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zNzEucG5nXCIsXG5cdFwiLi8zNzQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzc0LnBuZ1wiLFxuXHRcIi4vMzc3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM3Ny5wbmdcIixcblx0XCIuLzM4Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zODYucG5nXCIsXG5cdFwiLi8zODkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kYXkvMzg5LnBuZ1wiLFxuXHRcIi4vMzkyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5LzM5Mi5wbmdcIixcblx0XCIuLzM5NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2RheS8zOTUucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGF5IHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi8xMTMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTMucG5nXCIsXG5cdFwiLi8xMTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTYucG5nXCIsXG5cdFwiLi8xMTkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMTkucG5nXCIsXG5cdFwiLi8xMjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xMjIucG5nXCIsXG5cdFwiLi8xNDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNDMucG5nXCIsXG5cdFwiLi8xNzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNzYucG5nXCIsXG5cdFwiLi8xNzkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xNzkucG5nXCIsXG5cdFwiLi8xODIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xODIucG5nXCIsXG5cdFwiLi8xODUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8xODUucG5nXCIsXG5cdFwiLi8yMDAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMDAucG5nXCIsXG5cdFwiLi8yMjcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMjcucG5nXCIsXG5cdFwiLi8yMzAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yMzAucG5nXCIsXG5cdFwiLi8yNDgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNDgucG5nXCIsXG5cdFwiLi8yNjAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjAucG5nXCIsXG5cdFwiLi8yNjMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjMucG5nXCIsXG5cdFwiLi8yNjYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yNjYucG5nXCIsXG5cdFwiLi8yODEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yODEucG5nXCIsXG5cdFwiLi8yODQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yODQucG5nXCIsXG5cdFwiLi8yOTMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTMucG5nXCIsXG5cdFwiLi8yOTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTYucG5nXCIsXG5cdFwiLi8yOTkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8yOTkucG5nXCIsXG5cdFwiLi8zMDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDIucG5nXCIsXG5cdFwiLi8zMDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDUucG5nXCIsXG5cdFwiLi8zMDgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMDgucG5nXCIsXG5cdFwiLi8zMTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTEucG5nXCIsXG5cdFwiLi8zMTQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTQucG5nXCIsXG5cdFwiLi8zMTcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMTcucG5nXCIsXG5cdFwiLi8zMjAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjAucG5nXCIsXG5cdFwiLi8zMjMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjMucG5nXCIsXG5cdFwiLi8zMjYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjYucG5nXCIsXG5cdFwiLi8zMjkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMjkucG5nXCIsXG5cdFwiLi8zMzIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzIucG5nXCIsXG5cdFwiLi8zMzUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzUucG5nXCIsXG5cdFwiLi8zMzgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zMzgucG5nXCIsXG5cdFwiLi8zNTAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTAucG5nXCIsXG5cdFwiLi8zNTMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTMucG5nXCIsXG5cdFwiLi8zNTYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTYucG5nXCIsXG5cdFwiLi8zNTkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNTkucG5nXCIsXG5cdFwiLi8zNjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjIucG5nXCIsXG5cdFwiLi8zNjUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjUucG5nXCIsXG5cdFwiLi8zNjgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNjgucG5nXCIsXG5cdFwiLi8zNzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzEucG5nXCIsXG5cdFwiLi8zNzQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzQucG5nXCIsXG5cdFwiLi8zNzcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zNzcucG5nXCIsXG5cdFwiLi8zODYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zODYucG5nXCIsXG5cdFwiLi8zODkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zODkucG5nXCIsXG5cdFwiLi8zOTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zOTIucG5nXCIsXG5cdFwiLi8zOTUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uaWdodC8zOTUucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbmlnaHQgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiaW1wb3J0IHNlYXJjaExvY2F0aW9uIGZyb20gXCIuL0FwaVNlYXJjaExvY2F0aW9uXCI7XHJcbi8vaW1wb3J0IGdldEN1cnJlbnRXZWF0aGVyIGZyb20gXCIuL0FwaUN1cnJlbnRXZWF0aGVyXCI7XHJcbmltcG9ydCBnZXRGb3JlY2FzdCBmcm9tIFwiLi9BcGlmb3JlY2FzdFwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEb20oKXtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZH0pYDtcclxuICBjb25zb2xlLmxvZyggYHVybCgke2JhY2tncm91bmR9KWApO1xyXG5cclxuLyoqIFRPUCAqL1xyXG5cclxuXHJcbiAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b3Auc2V0QXR0cmlidXRlKFwiaWRcIixcInRvcFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHRvcCk7XHJcblxyXG4gIC8qKiBMb2NhdGlvbiBhbmQgc3dpdGNoIHNlbGVjdG9yIGNvbnRhaW5lciovXHJcbiAgY29uc3QgbG9jYWN0aW9uQW5kU3dpdGNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhY3Rpb25BbmRTd2l0Y2hDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImxvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIixcImxvY2F0aW9uXCIpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJMb2NhdGlvbi4uLlwiKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc2VhcmNoTG9jYXRpb24pO1xyXG4gIC8qKiBTd2l0Y2ggQ2Vsc2l1cyBGYXJlbmhlaXQgKi9cclxuICAgIGNvbnN0IHN3aXRjaENGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN3aXRjaENGLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3dpdGNoQ0ZcIik7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoU2VsZWN0b3Iuc2V0QXR0cmlidXRlKFwiaWRcIixcInN3aXRjaFNlbGVjdG9yXCIpOyAgICBcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hDZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN3aXRjaENlbHNpdXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzd2l0Y2hDZWxzaXVzXCIpO1xyXG4gICAgc3dpdGNoQ2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0Q2Vsc2l1cyk7XHJcbiAgICBzd2l0Y2hDZWxzaXVzLnRleHRDb250ZW50ID0gXCJDXCI7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoRmFyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN3aXRjaEZhcmVuaGVpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaEZhcmVuaGVpdFwiKTtcclxuICAgIHN3aXRjaEZhcmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0RmFyZW5oZWl0KTtcclxuICAgIHN3aXRjaEZhcmVuaGVpdC50ZXh0Q29udGVudCA9IFwiRlwiO1xyXG5cclxuICAgIFxyXG4gICAgc3dpdGNoQ0YuYXBwZW5kQ2hpbGQoc3dpdGNoQ2Vsc2l1cyk7XHJcbiAgICBzd2l0Y2hDRi5hcHBlbmRDaGlsZChzd2l0Y2hTZWxlY3Rvcik7XHJcbiAgICBzd2l0Y2hDRi5hcHBlbmRDaGlsZChzd2l0Y2hGYXJlbmhlaXQpO1xyXG5cclxuICAgIGxvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBsb2NhY3Rpb25BbmRTd2l0Y2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc3dpdGNoQ0YpO1xyXG4gIFxyXG4gIGNvbnN0IHNlbGVjdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlbGVjdGlvbnNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcInNlbGVjdGlvbnNDb250YWluZXJcIik7XHJcbiAgdG9wLmFwcGVuZENoaWxkKGxvY2FjdGlvbkFuZFN3aXRjaENvbnRhaW5lcik7XHJcbiAgdG9wLmFwcGVuZENoaWxkKHNlbGVjdGlvbnNDb250YWluZXIpO1xyXG5cclxuLyoqIERBU0hCT0FSRCAqL1xyXG4gIGNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGFzaGJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkYXNoYm9hcmRcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChkYXNoYm9hcmQpO1xyXG4gIC8qKiBDdXJyZW50IGluZm8gQ29udGFpbmVyICovXHJcbiAgICBjb25zdCBjdXJyZW50SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY3VycmVudEluZm9Db250YWluZXJcIilcclxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIixcIndlYXRoZXJEZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgd2VhdGhlckltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ3ZWF0aGVySW1hZ2VcIilcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvY2F0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlckxvY2F0aW9uXCIpO1xyXG4gICAgY29uc3QgbGFzdFVwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsYXN0VXBkYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGFzdFVwZGF0ZVwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0ZW1wXCIpO1xyXG5cclxuICAgIFxyXG4gXHJcblxyXG4gICAgY3VycmVudEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcclxuICAgIGN1cnJlbnRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjcmlwdGlvbik7XHJcbiAgICBjdXJyZW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTsgICAgICAgICAgIFxyXG4gICAgY3VycmVudEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG4gICAgY3VycmVudEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobGFzdFVwZGF0ZSk7XHJcbiAgICBcclxuICBcclxuXHJcbiAgICAvKiogUmlndGggc2lkZSBpbmZvIGNvbnRhaW5lciAqLyAgICBcclxuICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmFpbkNoYW5jZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicmFpbkNoYW5jZVwiKTtcclxuXHJcbiAgICBjb25zdCBhZGRpdGlvbmFsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRpdGlvbmFsSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZGl0aW9uYWxJbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IHJlYWxGZWVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlYWxGZWVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVhbEZlZWxcIik7XHJcbiAgICAgXHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBodW1pZGl0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImh1bWlkaXR5XCIpO1xyXG4gICAgY29uc3Qgd2luZERpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aW5kRGlyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2luZERpclwiKTtcclxuICAgIGNvbnN0IHdpbmRWZWxvY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aW5kVmVsb2NpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aW5kVmVsb2NpdHlcIik7XHJcblxyXG4gICAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQocmFpbkNoYW5jZSk7XHJcbiAgICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChyZWFsRmVlbCk7XHJcbiAgICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcbiAgICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZCh3aW5kRGlyKTtcclxuICAgIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKHdpbmRWZWxvY2l0eSk7XHJcblxyXG5cclxuXHJcbiBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQoY3VycmVudEluZm9Db250YWluZXIpO1xyXG4gZGFzaGJvYXJkLmFwcGVuZENoaWxkKGFkZGl0aW9uYWxJbmZvKTtcclxuXHJcblxyXG4vKiogRk9PVEVSICovXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImZvb3RlclwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG5cclxuICAvKiogU3dpdGNoIGRhaWx5IC8gaG91cnMgICovXHJcblxyXG4gIGNvbnN0IHN3aXRjaERIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzd2l0Y2hESC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaERIXCIpO1xyXG5cclxuICAgIGNvbnN0IHN3aXRjaFNlbGVjdG9yREggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoU2VsZWN0b3JESC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic3dpdGNoU2VsZWN0b3JESFwiKTsgIFxyXG4gICAgc3dpdGNoU2VsZWN0b3JESC52YWx1ZSA9IFwiRFwiOyAgXHJcblxyXG4gICAgY29uc3Qgc3dpdGNoRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN3aXRjaERheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaERheVwiKTtcclxuICAgIHN3aXRjaERheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzZWxlY3REYXlzKTtcclxuICAgIHN3aXRjaERheS50ZXh0Q29udGVudCA9IFwiRGFpbHlcIjtcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN3aXRjaEhvdXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzd2l0Y2hIb3VyXCIpO1xyXG4gICAgc3dpdGNoSG91ci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzZWxlY3RIb3Vycyk7XHJcbiAgICBzd2l0Y2hIb3VyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xyXG5cclxuICAgIFxyXG4gICAgc3dpdGNoREguYXBwZW5kQ2hpbGQoc3dpdGNoRGF5KTtcclxuICAgIHN3aXRjaERILmFwcGVuZENoaWxkKHN3aXRjaFNlbGVjdG9yREgpO1xyXG4gICAgc3dpdGNoREguYXBwZW5kQ2hpbGQoc3dpdGNoSG91cik7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHN3aXRjaERIKTtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9yZWNhc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JlY2FzdENvbnRhaW5lclwiKTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb3JlY2FzdENvbnRhaW5lcik7XHJcblxyXG5cclxuLyoqIERlZmF1bHQgY29uZmlnICovXHJcbiAgLy90aGVuIGkgdGhpbmsgdG8gaW1wbGVtZW50YXRlIGFuIGlwIGxvY2F0aW9uLlxyXG4gIGxvY2FsU3RvcmFnZS5maXJzdFVybExvY2F0aW9uID0gXCJwdWVydG8tb3JkYXotYm9saXZhci12ZW5lenVlbGFcIjsgXHJcbiAgc3dpdGNoU2VsZWN0b3IudmFsdWUgPSBcIkNcIjsgLy9maXJzdCBjZWxzaXVzXHJcbiAgLy9nZXRDdXJyZW50V2VhdGhlcihsb2NhbFN0b3JhZ2UuZmlyc3RVcmxMb2NhdGlvbik7XHJcbiAgZ2V0Rm9yZWNhc3QobG9jYWxTdG9yYWdlLmZpcnN0VXJsTG9jYXRpb24pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0RmFyZW5oZWl0KCl7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaFNlbGVjdG9yXCIpO1xyXG4gIHN3aXRjaFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJmYXJlbmhlaXRcIik7XHJcbiAgc3dpdGNoU2VsZWN0b3IudmFsdWUgPSBcIkZcIjtcclxuICBnZXRGb3JlY2FzdChsb2NhbFN0b3JhZ2UubGFzdExvY2F0aW9uU2hvd2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0Q2Vsc2l1cygpe1xyXG4gIGNvbnN0IHN3aXRjaFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hTZWxlY3RvclwiKTtcclxuICBzd2l0Y2hTZWxlY3Rvci52YWx1ZSA9IFwiQ1wiO1xyXG4gIHN3aXRjaFNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJmYXJlbmhlaXRcIik7XHJcbiAgZ2V0Rm9yZWNhc3QobG9jYWxTdG9yYWdlLmxhc3RMb2NhdGlvblNob3dlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdEhvdXJzKCl7XHJcbiAgY29uc3Qgc3dpdGNoU2VsZWN0b3JESCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoU2VsZWN0b3JESFwiKTtcclxuICBzd2l0Y2hTZWxlY3RvckRILmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcclxuICBzd2l0Y2hTZWxlY3RvckRILnZhbHVlID0gXCJIXCI7XHJcbiAgZ2V0Rm9yZWNhc3QobG9jYWxTdG9yYWdlLmxhc3RMb2NhdGlvblNob3dlZCk7XHJcbn1cclxuZnVuY3Rpb24gc2VsZWN0RGF5cygpe1xyXG4gIGNvbnN0IHN3aXRjaFNlbGVjdG9yREggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaFNlbGVjdG9yREhcIik7XHJcbiAgc3dpdGNoU2VsZWN0b3JESC5jbGFzc0xpc3QucmVtb3ZlKFwiaG91cnNcIik7XHJcbiAgc3dpdGNoU2VsZWN0b3JESC52YWx1ZSA9IFwiRFwiO1xyXG4gIGdldEZvcmVjYXN0KGxvY2FsU3RvcmFnZS5sYXN0TG9jYXRpb25TaG93ZWQpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRzKHNlbGVjdG9yKXtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgIFxyXG4gIHdoaWxlKGNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA+IDApe1xyXG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gIH0gIFxyXG59IiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICBsZXQgaW1hZ2VzID0ge307XHJcbiAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcblxyXG4vLyBJbWFnZW4gbG9hZGVyXHJcbi8vaW1wb3J0IGltYWdlcyBmcm9tIFwiLi4vaW1hZ2VzL3BydWViYWEuanBlZ1wiO1xyXG5leHBvcnQgY29uc3QgaW1hZ2VzRGF5ID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2RheScsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcclxuZXhwb3J0IGNvbnN0IGltYWdlc05pZ2h0ID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL25pZ2h0JywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG4vL2ltcG9ydCBiYWNrZ3JvdWQgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdWQuanBnXCI7XHJcbi8vY29uc3QgaW1hZ2VzTmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXMpOyIsImltcG9ydCBjcmVhdGVEb20gZnJvbSBcIi4vY3JlYXRlRG9tXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNyZWF0ZURvbSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==