/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 15px;\n    font-family: helvetica, sans-serif;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    --green: rgb(67, 212, 140);\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-column: 1/3;\n    background-color: var(--green);\n    color: rgb(255, 255, 255);\n    font-family: Roboto, sans-serif;\n    font-weight: bolder;\n    padding: 8px 24px;\n    font-size: 1.5rem;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#logo {\n    background-color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 24px;\n    font-weight: 500;\n    border-right: 1px solid rgb(184, 184, 184);\n    position: relative;\n}\n\n#sidebar img {\n    height: 1.5rem;\n    width: auto;\n}\n\n.menu,\n.submenu {\n    padding: 4px 0px;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.menu:hover,\n.submenu:hover {\n    font-weight: bolder;\n    opacity: 0.8;\n}\n\n#project-container {\n    padding: 8px 15px;\n}\n\n#main {\n    background-color: white;\n    padding: 55px 100px 30px 55px;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 1.3rem;\n    margin-bottom: 1rem;\n}\n\n.todo {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n}\n\n.todo:hover {\n    background-color: whitesmoke;\n}\n\n.project-label {\n    grid-column: 4;\n    font-size: 0.85rem;\n    color: rgb(80, 80, 80);\n    justify-self: right;\n}\n\n.priority-normal,\n.priority-med,\n.priority-high {\n    grid-column: 5;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n\n.priority-normal {\n    background-color: rgb(190, 190, 190);\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-expanded {\n    grid-column: 1/6;\n    font-size: 0.9rem;\n    font-style: italic;\n    color: rgb(49, 49, 49);\n    padding: 0px 0px 0px 40px;\n}\n\n.expanded-todo-button-container {\n    margin-top: 8px;\n    text-align: right;\n}\n\n.expanded-todo-button-container button {\n    background-color: rgba(255, 255, 255, 0);\n    color: rgb(167, 167, 167);\n    border: 1px solid rgb(167, 167, 167);\n    border-radius: 5px;\n    margin-right: 15px;\n    font-size: 0.7rem;\n}\n\n#edit-todo-button:hover {\n    border-color: orange;\n    color: orange;\n    background-color: rgba(255, 166, 0, 0.1);\n}\n\n#trash-todo-button:hover {\n    border-color: red;\n    color: red;\n    background-color: rgba(255, 0, 0, 0.1);\n}\n\n#add-todo-button {\n    background-color: var(--green);\n    color: white;\n    font-size: 2rem;\n    border: 0;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 60px;\n    right: 60px;\n    cursor: pointer;\n}\n\n#add-todo-button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#overlay {\n    background-color: white;\n    opacity: 0.4;\n    z-index: 1000;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n.todo-popup {\n    background-color: white;\n    z-index: 2000;\n    position: fixed;\n    height: 320px;\n    width: 50vw;\n    top: 50%;\n    left: 50%;\n    margin-top: -160px;\n    margin-left: -25vw;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-todo-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#edit-todo-header {\n    background-color: orange;\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n.todo-popup-content {\n    padding: 8px 50px;\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 200px 1fr;\n    align-items: center;\n}\n\n.input-todo-title {\n    grid-column: 1/3;\n    border: 0;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n.input-todo-description {\n    grid-column: 1/3;\n    border: 0;\n    font-family: roboto, sans-serif;\n    resize: none;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n}\n\n.todo-popup-content label {\n    justify-self: end;\n}\n\n.todo-popup-content input[type=\"date\"],\n.todo-popup-content select {\n    border: 0;\n    background-color: rgb(238, 238, 238);\n    width: 270px;\n    height: 1.5rem;\n    justify-self: start;\n}\n\n.todo-popup-button-container {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n    margin-top: 12px;\n}\n\n.todo-popup button {\n    width: 100px;\n    border: 0;\n    border-radius: 8px;\n    padding: 8px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n}\n\n.todo-popup button:hover,\n#add-project-popup button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n.todo-popup .todo-popup-save {\n    background-color: var(--green);\n}\n\n#add-project-button {\n    margin-left: 100px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    color: red;\n}\n\n#add-project-button:hover {\n    transform: scale(1.3);\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#add-project-popup {\n    background-color: white;\n    z-index: 2000;\n    position: absolute;\n    height: 130px;\n    width: 250px;\n    top: 124px;\n    left: 240px;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-project-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-project-title {\n    border: 0;\n    font-size: 1rem;\n    margin: 8px 24px 0px 24px;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-project-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    margin-top: 12px;\n}\n\n#add-project-popup button {\n    width: 80px;\n    border: 0;\n    border-radius: 8px;\n    padding: 6px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n    font-size: 0.8rem;\n}\n\n#add-project-popup #add-project-save {\n    background-color: var(--green);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\n\n:root {\n    font-size: 15px;\n    font-family: helvetica, sans-serif;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    --green: rgb(67, 212, 140);\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-column: 1/3;\n    background-color: var(--green);\n    color: rgb(255, 255, 255);\n    font-family: Roboto, sans-serif;\n    font-weight: bolder;\n    padding: 8px 24px;\n    font-size: 1.5rem;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#logo {\n    background-color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 24px;\n    font-weight: 500;\n    border-right: 1px solid rgb(184, 184, 184);\n    position: relative;\n}\n\n#sidebar img {\n    height: 1.5rem;\n    width: auto;\n}\n\n.menu,\n.submenu {\n    padding: 4px 0px;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.menu:hover,\n.submenu:hover {\n    font-weight: bolder;\n    opacity: 0.8;\n}\n\n#project-container {\n    padding: 8px 15px;\n}\n\n#main {\n    background-color: white;\n    padding: 55px 100px 30px 55px;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 1.3rem;\n    margin-bottom: 1rem;\n}\n\n.todo {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n}\n\n.todo:hover {\n    background-color: whitesmoke;\n}\n\n.project-label {\n    grid-column: 4;\n    font-size: 0.85rem;\n    color: rgb(80, 80, 80);\n    justify-self: right;\n}\n\n.priority-normal,\n.priority-med,\n.priority-high {\n    grid-column: 5;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n\n.priority-normal {\n    background-color: rgb(190, 190, 190);\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-expanded {\n    grid-column: 1/6;\n    font-size: 0.9rem;\n    font-style: italic;\n    color: rgb(49, 49, 49);\n    padding: 0px 0px 0px 40px;\n}\n\n.expanded-todo-button-container {\n    margin-top: 8px;\n    text-align: right;\n}\n\n.expanded-todo-button-container button {\n    background-color: rgba(255, 255, 255, 0);\n    color: rgb(167, 167, 167);\n    border: 1px solid rgb(167, 167, 167);\n    border-radius: 5px;\n    margin-right: 15px;\n    font-size: 0.7rem;\n}\n\n#edit-todo-button:hover {\n    border-color: orange;\n    color: orange;\n    background-color: rgba(255, 166, 0, 0.1);\n}\n\n#trash-todo-button:hover {\n    border-color: red;\n    color: red;\n    background-color: rgba(255, 0, 0, 0.1);\n}\n\n#add-todo-button {\n    background-color: var(--green);\n    color: white;\n    font-size: 2rem;\n    border: 0;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 60px;\n    right: 60px;\n    cursor: pointer;\n}\n\n#add-todo-button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#overlay {\n    background-color: white;\n    opacity: 0.4;\n    z-index: 1000;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n.todo-popup {\n    background-color: white;\n    z-index: 2000;\n    position: fixed;\n    height: 320px;\n    width: 50vw;\n    top: 50%;\n    left: 50%;\n    margin-top: -160px;\n    margin-left: -25vw;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-todo-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#edit-todo-header {\n    background-color: orange;\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n.todo-popup-content {\n    padding: 8px 50px;\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 200px 1fr;\n    align-items: center;\n}\n\n.input-todo-title {\n    grid-column: 1/3;\n    border: 0;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n.input-todo-description {\n    grid-column: 1/3;\n    border: 0;\n    font-family: roboto, sans-serif;\n    resize: none;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n}\n\n.todo-popup-content label {\n    justify-self: end;\n}\n\n.todo-popup-content input[type=\"date\"],\n.todo-popup-content select {\n    border: 0;\n    background-color: rgb(238, 238, 238);\n    width: 270px;\n    height: 1.5rem;\n    justify-self: start;\n}\n\n.todo-popup-button-container {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n    margin-top: 12px;\n}\n\n.todo-popup button {\n    width: 100px;\n    border: 0;\n    border-radius: 8px;\n    padding: 8px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n}\n\n.todo-popup button:hover,\n#add-project-popup button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n.todo-popup .todo-popup-save {\n    background-color: var(--green);\n}\n\n#add-project-button {\n    margin-left: 100px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    color: red;\n}\n\n#add-project-button:hover {\n    transform: scale(1.3);\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#add-project-popup {\n    background-color: white;\n    z-index: 2000;\n    position: absolute;\n    height: 130px;\n    width: 250px;\n    top: 124px;\n    left: 240px;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-project-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-project-title {\n    border: 0;\n    font-size: 1rem;\n    margin: 8px 24px 0px 24px;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-project-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    margin-top: 12px;\n}\n\n#add-project-popup button {\n    width: 80px;\n    border: 0;\n    border-radius: 8px;\n    padding: 6px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n    font-size: 0.8rem;\n}\n\n#add-project-popup #add-project-save {\n    background-color: var(--green);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAllTasks": () => (/* binding */ renderAllTasks),
/* harmony export */   "renderProjectList": () => (/* binding */ renderProjectList)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popups */ "./src/popups.js");




const renderAllTasks = (() => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on("todos changed", render);

    function render(todos) {
        const main = document.querySelector("#main");

        // Remove current todo elements
        while (main.childNodes.length > 1) {
            main.removeChild(main.lastChild);
        }

        // Render title
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = "All Tasks";
        main.appendChild(title);

        // Render new todos list
        todos.forEach(todo => {
            const todoContainer = document.createElement("div");
            todoContainer.classList.add("todo");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
                // Add checkbox ID
            todoContainer.appendChild(checkbox);

            const todoTitle = document.createElement("span");
            todoTitle.textContent = todo.title;
            todoContainer.appendChild(todoTitle);

            const dueDate = document.createElement("span");
            dueDate.classList.add("due-date");
            dueDate.textContent = todo.dueDate;
            todoContainer.appendChild(dueDate);

            const projectLabel = document.createElement("span");
            projectLabel.classList.add("project-label");
            projectLabel.textContent = todo.project;
            todoContainer.appendChild(projectLabel);

            const priority = document.createElement("span");
            if (todo.priority === "normal") {
                priority.classList.add("priority-normal");
            } else if (todo.priority === "medium") {
                priority.classList.add("priority-med");
            } else if (todo.priority === "high") {
                priority.classList.add("priority-high");
            }
            todoContainer.appendChild(priority);

            main.appendChild(todoContainer);

            // Hidden elements that expand when todo is clicked
            todoContainer.addEventListener("click", () => {
                // Toggle on/off
                if (todoContainer.childNodes.length > 5) {
                    todoContainer.removeChild(todoContainer.lastChild);
                } else {
                    const todoExpanded = document.createElement("div");
                    todoExpanded.classList.add("todo-expanded");
                    todoContainer.appendChild(todoExpanded);

                    const description = document.createElement("div");
                    description.textContent = todo.description;
                    todoExpanded.appendChild(description);

                    const buttonContainer = document.createElement("div");
                    buttonContainer.classList.add("expanded-todo-button-container");
                    todoExpanded.appendChild(buttonContainer);

                    const edit = document.createElement("button");
                    edit.id = "edit-todo-button";
                    edit.textContent = "Edit";
                    buttonContainer.appendChild(edit);

                    const trash = document.createElement("button");
                    trash.id = "trash-todo-button";
                    trash.textContent = "Delete";
                    buttonContainer.appendChild(trash);

                    trash.addEventListener("click", (e) => {
                        let targetObject = e.target.parentNode.parentNode.parentNode.children[1].textContent;
                        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit("User deletes todo", targetObject);
                    });

                    edit.addEventListener("click", _popups__WEBPACK_IMPORTED_MODULE_2__.editTodoPopup.displayEditTodo);
                }
            });
        })
    }
})();

const renderProjectList = (() => {
    const projectContainer = document.querySelector("#project-container");

    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on("Projects changed", render)

    function render(projects) {
        // Remove current project elements
        while (projectContainer.childNodes.length > 0) {
            projectContainer.removeChild(projectContainer.lastChild);
        }

        // Generate new list
        projects.forEach(project => {
            const submenu = document.createElement("div");
            submenu.classList.add("submenu");
            
            const icon = document.createElement("img");
            icon.src = "../src/img/project-item.png";
            icon.alt = "project-item";
            submenu.appendChild(icon);

            const title = document.createElement("span");
            title.textContent = project;
            submenu.appendChild(title);

            projectContainer.appendChild(submenu);
        })
    }
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popups */ "./src/popups.js");






const app = (() => {
    let todos = [];
    let projects = [];

    // todo factory function
    function todoFactory(title, description, dueDate, project, priority) {
        return { title, description, dueDate, project, priority };
    }

    // Pre-fill todos array
    const todo1 = todoFactory("Haircut at 9", "Haircut at 9 at Great Clips with Aaron as your barber", "2022-03-15", "Personal", "medium");
    const todo2 = todoFactory("Shop for paint", "Go to Sherwin Williams next to barber and pick out sample colors for guest bedroom", "2022-03-15", "Personal", "normal");
    const todo3 = todoFactory("Send work schedule", "Email Bob my work schedule for next month", "2022-03-15", "Work", "high");
    todos.push(todo1, todo2, todo3);

    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("todos changed", todos);

    // Pre-fill projects array
    projects[0] = "Personal";

    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("Projects changed", projects);

    // Subscribe to user input events
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User inputs new todo", addTodo);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User inputs new project", addProject);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User edits todo", editTodo);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User deletes todo", deleteTodo);

    function addTodo(userInput) {
        let title;
        let description;
        let date;
        let project;
        let priority;

        // Error check user input from addTodoPopup
        if (!userInput[0]) {
            return alert("Please add title.");
        } else if (todos.find(todo => todo.title === userInput[0])) {
            return alert("That title already exists.");
        } else if (userInput[0].length > 60) {
            return alert("Title cannot exceed 60 characters.");
        } else {
            title = userInput[0];
        }

        if (userInput[1].length > 200) {
            return alert("Description cannot exceed 200 characters.");
        } else {
            description = userInput[1];
        }

        if (!userInput[2]) {
            return alert("Please add due date.");
        } else {
            date = userInput[2];
        }

        if (!userInput[3]) {
            return alert("Please assign to a project.");
        } else {
            project = userInput[3];
        }

        if (!userInput[4]) {
            return alert("Please select a priority level.");
        } else {
            priority = userInput[4];
        }

        // Create new todo object and add to array
        const aTodo = todoFactory(title, description, date, project, priority);
        todos.push(aTodo);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("todos changed", todos);
    }

    function addProject(userInput) {
        if (!userInput) {
            return alert("Please add title.");
        } else if (projects.find(project => project === userInput)) {
            return alert("That title already exists.");
        } else if (userInput.length > 20) {
            return alert("Project title cannot exceed 12 characters.");
        } else {
            projects.push(userInput);
            _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("Projects changed", projects);
        }
    }

    function editTodo(userInput) {
        let targetTodo = userInput[5];
        let title;
        let description;
        let date;
        let project;
        let priority;

        // Error check user input from addTodoPopup
        if (!userInput[0]) {
            return alert("Please add title.");
        // Checks if title already exists and is also not the todo being edited
        } else if (todos.find(todo => todo.title === userInput[0]) && userInput[0] !== targetTodo) {
            return alert("That title already exists.");
        } else if (userInput[0].length > 60) {
            return alert("Title cannot exceed 60 characters.");
        } else {
            title = userInput[0];
        }

        if (userInput[1].length > 200) {
            return alert("Description cannot exceed 200 characters.");
        } else {
            description = userInput[1];
        }

        if (!userInput[2]) {
            return alert("Please add due date.");
        } else {
            date = userInput[2];
        }

        if (!userInput[3]) {
            return alert("Please assign to a project.");
        } else {
            project = userInput[3];
        }

        if (!userInput[4]) {
            return alert("Please select a priority level.");
        } else {
            priority = userInput[4];
        }

        // Edit todo object
        todos.forEach(todo => {
            if (todo.title === targetTodo) {
                todo.title = title;
                todo.description = description;
                todo.dueDate = date;
                todo.project = project;
                todo.priority = priority;
            }
        })
    
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("todos changed", todos);
    }

    function deleteTodo(targetObject) {
        todos = todos.filter(todo => todo.title !== targetObject);

        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("todos changed", todos);
    }

    return { todos, projects };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/popups.js":
/*!***********************!*\
  !*** ./src/popups.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTodoPopup": () => (/* binding */ editTodoPopup)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");





const addTodoPopup = (() => {
    // add-todo button
    const addTodoButton = document.querySelector("#add-todo-button");
    addTodoButton.addEventListener("click", displayAddTodo);

    function displayAddTodo() {
        // Generate Add Todo Popup
        const body = document.querySelector("body");

        const addTodoPopup = document.createElement("div");
        addTodoPopup.classList.add("todo-popup");

        const header = document.createElement("div");
        header.id = "add-todo-header";
        header.textContent = "New Task"
        addTodoPopup.appendChild(header);

        const content = document.createElement("form");
        content.classList.add("todo-popup-content");
        addTodoPopup.appendChild(content);

        const title = document.createElement("input");
        title.classList.add("input-todo-title");
        title.placeholder = "Add title";
        title.autofocus = "true";
        content.appendChild(title);

        const description = document.createElement("textarea");
        description.classList.add("input-todo-description");
        description.placeholder = "Add description";
        description.cols = "50";
        description.rows = "4";
        content.appendChild(description);

        const dateLabel = document.createElement("label");
        dateLabel.for = "todo-date";
        dateLabel.textContent = "Due date: ";
        content.appendChild(dateLabel);

        const date = document.createElement("input");
        date.type = "date";
        date.id = "todo-date";
        content.appendChild(date);

        const projectLabel = document.createElement("label");
        projectLabel.for = "todo-project";
        projectLabel.textContent = "Add to project: ";
        content.appendChild(projectLabel);

        const projectSelect = document.createElement("select");
        projectSelect.id = "todo-project";

        _index__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach(project => {
            let option = document.createElement("option");
            option.value = project;
            option.textContent = project;
            projectSelect.appendChild(option);
        });

        content.appendChild(projectSelect);

        const priorityLabel = document.createElement("label");
        priorityLabel.for = "todo-priority";
        priorityLabel.textContent = "Add priority level: ";
        content.appendChild(priorityLabel);

        const priority = document.createElement("select");
        priority.id = "todo-priority";

        const priority1 = document.createElement("option");
        priority1.value = "normal";
        priority1.textContent = "Normal";
        priority.appendChild(priority1);

        const priority2 = document.createElement("option");
        priority2.value = "medium";
        priority2.textContent = "Medium";
        priority.appendChild(priority2);

        const priority3 = document.createElement("option");
        priority3.value = "high";
        priority3.textContent = "High";
        priority.appendChild(priority3);

        content.appendChild(priority);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("todo-popup-button-container");
        addTodoPopup.appendChild(buttonContainer);

        const save = document.createElement("button");
        save.classList.add("todo-popup-save");
        save.textContent = "Save";
        buttonContainer.appendChild(save);

        // Publish "Add new todo" event
        save.addEventListener("click", () => {
            _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit("User inputs new todo", [title.value, description.value, date.value, projectSelect.options[projectSelect.selectedIndex].value, priority.options[priority.selectedIndex].value]);
        })

        const cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        buttonContainer.appendChild(cancel);

        // Cancel button closes popup
        cancel.addEventListener("click", removeAddTodoPopup);

        // Create transparent overlay behind popup
        const addTodoOverlay = document.createElement("div");
        addTodoOverlay.id = "overlay";

        // If new todo successfully added, close popup
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on("todos changed", removeAddTodoPopup);

        body.appendChild(addTodoPopup);
        body.appendChild(addTodoOverlay);
    }

    function removeAddTodoPopup() {
        const body = document.querySelector("body");
        const addTodoPopup = document.querySelector(".todo-popup");
        const addTodoOverlay = document.querySelector("#overlay");
        console.log(body.removeChild(addTodoPopup));
        console.log(body.removeChild(addTodoOverlay));
    }
})();

const addProjectPopup = (() => {
    const addProjectButton = document.querySelector("#add-project-button");
    addProjectButton.addEventListener("click", displayAddProject);

    function displayAddProject() {
        // Generate Add Todo Popup. Anchor to sidebar.
        const sidebar = document.querySelector("#sidebar");

        const addProjectPopup = document.createElement("div");
        addProjectPopup.id = "add-project-popup";
        sidebar.appendChild(addProjectPopup);

        const header = document.createElement("div");
        header.id = "add-project-header";
        header.textContent = "New Project"
        addProjectPopup.appendChild(header);

        const title = document.createElement("input");
        title.id = "add-project-title";
        title.autofocus = "true";
        title.placeholder = "Add title";
        addProjectPopup.appendChild(title);

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "add-project-button-container";
        addProjectPopup.appendChild(buttonContainer);

        const save = document.createElement("button");
        save.id = "add-project-save";
        save.textContent = "Save";
        buttonContainer.appendChild(save);

        // Send user input to app for error checking
        save.addEventListener("click", () => {
            _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit("User inputs new project", title.value);
        })

        const cancel = document.createElement("button");
        cancel.id = "add-project-cancel";
        cancel.textContent = "Cancel";
        buttonContainer.appendChild(cancel);

        // Create transparent overlay behind popup
        const overlay = document.createElement("div");
        overlay.id = "overlay";
        sidebar.appendChild(overlay);

        // Ways to close popup
        cancel.addEventListener("click", removeAddProjectPopup);
        overlay.addEventListener("click", removeAddProjectPopup);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on("Projects changed", removeAddProjectPopup);
    }

    function removeAddProjectPopup() {
        const sidebar = document.querySelector("#sidebar");
        const addProjectPopup = document.querySelector("#add-project-popup");
        const overlay = document.querySelector("#overlay");
        sidebar.removeChild(addProjectPopup);
        sidebar.removeChild(overlay);
    }
})();

const editTodoPopup = (() => {
    function displayEditTodo(e) {
        // Find todo object associated with this edit button
        let targetTodo = e.target.parentNode.parentNode.parentNode.children[1].textContent;

        // Create placeholders to be used in editTodoPopup form
        let titlePlaceholder;
        let descriptionPlaceholder;
        let datePlaceholder;
        let projectPlaceholder;
        let priorityPlaceholder;

        _index__WEBPACK_IMPORTED_MODULE_1__["default"].todos.forEach(todo => {
            if (todo.title === targetTodo) {
                titlePlaceholder = todo.title;
                descriptionPlaceholder = todo.description;
                datePlaceholder = todo.dueDate;
                projectPlaceholder = todo.project;
                priorityPlaceholder = todo.priority;
            }
        })

        // Generate Edit Todo Popup
        const body = document.querySelector("body");

        const editTodoPopup = document.createElement("div");
        editTodoPopup.classList.add("todo-popup");

        const header = document.createElement("div");
        header.id = "edit-todo-header";
        header.textContent = "Edit Task"
        editTodoPopup.appendChild(header);

        const content = document.createElement("form");
        content.classList.add("todo-popup-content");
        editTodoPopup.appendChild(content);

        const title = document.createElement("input");
        title.classList.add("input-todo-title");
        title.value = titlePlaceholder;
        title.autofocus = true;
        content.appendChild(title);

        const description = document.createElement("textarea");
        description.classList.add("input-todo-description");
        description.value = descriptionPlaceholder;
        description.cols = "50";
        description.rows = "4";
        content.appendChild(description);

        const dateLabel = document.createElement("label");
        dateLabel.for = "todo-date";
        dateLabel.textContent = "Due date: ";
        content.appendChild(dateLabel);

        const date = document.createElement("input");
        date.type = "date";
        date.id = "todo-date";
        date.value = datePlaceholder;
        content.appendChild(date);

        const projectLabel = document.createElement("label");
        projectLabel.for = "todo-project";
        projectLabel.textContent = "Add to project: ";
        content.appendChild(projectLabel);

        const projectSelect = document.createElement("select");
        projectSelect.id = "todo-project";

        _index__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach(project => {
            let option = document.createElement("option");
            option.value = project;
            option.textContent = project;
            projectSelect.appendChild(option);
        });

        projectSelect.value = projectPlaceholder;

        content.appendChild(projectSelect);

        const priorityLabel = document.createElement("label");
        priorityLabel.for = "todo-priority";
        priorityLabel.textContent = "Add priority level: ";
        content.appendChild(priorityLabel);

        const priority = document.createElement("select");
        priority.id = "todo-priority";

        const priority1 = document.createElement("option");
        priority1.value = "normal";
        priority1.textContent = "Normal";
        priority.appendChild(priority1);

        const priority2 = document.createElement("option");
        priority2.value = "medium";
        priority2.textContent = "Medium";
        priority.appendChild(priority2);

        const priority3 = document.createElement("option");
        priority3.value = "high";
        priority3.textContent = "High";
        priority.appendChild(priority3);

        priority.value = priorityPlaceholder;
        content.appendChild(priority);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("todo-popup-button-container");
        editTodoPopup.appendChild(buttonContainer);

        const save = document.createElement("button");
        save.classList.add("todo-popup-save");
        save.textContent = "Save";
        buttonContainer.appendChild(save);

        // Publish Edit Todo event
        save.addEventListener("click", () => {
            _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit("User edits todo", [title.value, description.value, date.value, projectSelect.options[projectSelect.selectedIndex].value, priority.options[priority.selectedIndex].value, targetTodo]);
        })

        const cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        buttonContainer.appendChild(cancel);

        // Cancel button closes popup
        cancel.addEventListener("click", removeEditTodoPopup);

        // Create transparent overlay behind popup
        const overlay = document.createElement("div");
        overlay.id = "overlay";

        // If new todo successfully edited, close popup
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on("todos changed", removeEditTodoPopup);

        body.appendChild(editTodoPopup);
        body.appendChild(overlay);

        // Click event listener stops on button (doesn't collapse expanded todo)
        e.stopPropagation();
    }

    function removeEditTodoPopup() {
        const body = document.querySelector("body");
        const editTodoPopup = document.querySelector(".todo-popup");
        const overlay = document.querySelector("#overlay");
        console.log(body.removeChild(editTodoPopup));
        console.log(body.removeChild(overlay));
    }

    return { displayEditTodo };
})();



/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//events - a super-basic Javascript (publish subscribe) pattern
// Credit to @learncodeacademy on GitHub

var events = {
    events: {},
    on: function (eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === fn) {
            this.events[eventName].splice(i, 1);
            break;
          }
        };
      }
    },
    emit: function (eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLCtHQUErRyxXQUFXLHNCQUFzQix5Q0FBeUMsNkJB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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVc7QUFDdkIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtEQUFTOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBUztBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsNERBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLCtEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvREFBVztBQUN2QixTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0RBQVM7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeFZEO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7O1VDNUJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICAtLWdyZWVuOiByZ2IoNjcsIDIxMiwgMTQwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc2lkZWJhciBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5tZW51LFxcbi5zdWJtZW51IHtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51OmhvdmVyLFxcbi5zdWJtZW51OmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNTVweCAxMDBweCAzMHB4IDU1cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIDEwMHB4IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4ucHJvamVjdC1sYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiA0O1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufVxcblxcbi5wcmlvcml0eS1ub3JtYWwsXFxuLnByaW9yaXR5LW1lZCxcXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGdyaWQtY29sdW1uOiA1O1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcmlvcml0eS1ub3JtYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1leHBhbmRlZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDQwcHg7XFxufVxcblxcbi5leHBhbmRlZC10b2RvLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZXhwYW5kZWQtdG9kby1idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4jZWRpdC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjEpO1xcbn1cXG5cXG4jdHJhc2gtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XFxufVxcblxcbiNhZGQtdG9kby1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA2MHB4O1xcbiAgICByaWdodDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggZ3JleTtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4udG9kby1wb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBncmV5O1xcbn1cXG5cXG4jYWRkLXRvZG8taGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcblxcbiNlZGl0LXRvZG8taGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcblxcbi50b2RvLXBvcHVwLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA4cHggNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtdG9kby10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uaW5wdXQtdG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4udG9kby1wb3B1cC1jb250ZW50IGxhYmVsIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50b2RvLXBvcHVwLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbi50b2RvLXBvcHVwLWNvbnRlbnQgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi50b2RvLXBvcHVwLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4udG9kby1wb3B1cCBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi50b2RvLXBvcHVwIGJ1dHRvbjpob3ZlcixcXG4jYWRkLXByb2plY3QtcG9wdXAgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggZ3JleTtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4udG9kby1wb3B1cCAudG9kby1wb3B1cC1zYXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgdG9wOiAxMjRweDtcXG4gICAgbGVmdDogMjQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggZ3JleTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtdGl0bGUge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiA4cHggMjRweCAwcHggMjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAgI2FkZC1wcm9qZWN0LXNhdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFD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cGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIC0tZ3JlZW46IHJnYig2NywgMjEyLCAxNDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE4NCwgMTg0LCAxODQpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNzaWRlYmFyIGltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLm1lbnUsXFxuLnN1Ym1lbnUge1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnU6aG92ZXIsXFxuLnN1Ym1lbnU6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1NXB4IDEwMHB4IDMwcHggNTVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gMTAwcHggYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5wcm9qZWN0LWxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQ7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuLnByaW9yaXR5LW5vcm1hbCxcXG4ucHJpb3JpdHktbWVkLFxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgZ3JpZC1jb2x1bW46IDU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByaW9yaXR5LW5vcm1hbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWV4cGFuZGVkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNDBweDtcXG59XFxuXFxuLmV4cGFuZGVkLXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5leHBhbmRlZC10b2RvLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NywgMTY3LCAxNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbiNlZGl0LXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuMSk7XFxufVxcblxcbiN0cmFzaC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDYwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCBncmV5O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi50b2RvLXBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDIwMDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IC0xNjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGdyZXk7XFxufVxcblxcbiNhZGQtdG9kby1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI2VkaXQtdG9kby1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuLnRvZG8tcG9wdXAtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC10b2RvLXRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5pbnB1dC10b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi50b2RvLXBvcHVwLWNvbnRlbnQgbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRvZG8tcG9wdXAtY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuLnRvZG8tcG9wdXAtY29udGVudCBzZWxlY3Qge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnRvZG8tcG9wdXAtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbi50b2RvLXBvcHVwIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnRvZG8tcG9wdXAgYnV0dG9uOmhvdmVyLFxcbiNhZGQtcHJvamVjdC1wb3B1cCBidXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCBncmV5O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi50b2RvLXBvcHVwIC50b2RvLXBvcHVwLXNhdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDIwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICB0b3A6IDEyNHB4O1xcbiAgICBsZWZ0OiAyNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBncmV5O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC10aXRsZSB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDhweCAyNHB4IDBweCAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCBidXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCAjYWRkLXByb2plY3Qtc2F2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZWRpdFRvZG9Qb3B1cCB9IGZyb20gXCIuL3BvcHVwc1wiO1xuXG5jb25zdCByZW5kZXJBbGxUYXNrcyA9ICgoKSA9PiB7XG4gICAgZXZlbnRzLm9uKFwidG9kb3MgY2hhbmdlZFwiLCByZW5kZXIpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKHRvZG9zKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgdG9kbyBlbGVtZW50c1xuICAgICAgICB3aGlsZSAobWFpbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIC8vIFJlbmRlciBuZXcgdG9kb3MgbGlzdFxuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGNoZWNrYm94IElEXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1sYWJlbFwiKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdDtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW5vcm1hbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy8gSGlkZGVuIGVsZW1lbnRzIHRoYXQgZXhwYW5kIHdoZW4gdG9kbyBpcyBjbGlja2VkXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVG9nZ2xlIG9uL29mZlxuICAgICAgICAgICAgICAgIGlmICh0b2RvQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRXhwYW5kZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRXhwYW5kZWQuY2xhc3NMaXN0LmFkZChcInRvZG8tZXhwYW5kZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0V4cGFuZGVkKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkLXRvZG8tYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVkLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIGVkaXQuaWQgPSBcImVkaXQtdG9kby1idXR0b25cIjtcbiAgICAgICAgICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB0cmFzaC5pZCA9IFwidHJhc2gtdG9kby1idXR0b25cIjtcbiAgICAgICAgICAgICAgICAgICAgdHJhc2gudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQodHJhc2gpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldE9iamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJVc2VyIGRlbGV0ZXMgdG9kb1wiLCB0YXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kb1BvcHVwLmRpc3BsYXlFZGl0VG9kbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxufSkoKTtcblxuY29uc3QgcmVuZGVyUHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgZXZlbnRzLm9uKFwiUHJvamVjdHMgY2hhbmdlZFwiLCByZW5kZXIpXG5cbiAgICBmdW5jdGlvbiByZW5kZXIocHJvamVjdHMpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcHJvamVjdCBlbGVtZW50c1xuICAgICAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IGxpc3RcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc3VibWVudS5jbGFzc0xpc3QuYWRkKFwic3VibWVudVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vc3JjL2ltZy9wcm9qZWN0LWl0ZW0ucG5nXCI7XG4gICAgICAgICAgICBpY29uLmFsdCA9IFwicHJvamVjdC1pdGVtXCI7XG4gICAgICAgICAgICBzdWJtZW51LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgc3VibWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWVudSk7XG4gICAgICAgIH0pXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgcmVuZGVyQWxsVGFza3MsIHJlbmRlclByb2plY3RMaXN0IH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3MsIHJlbmRlclByb2plY3RMaXN0IH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgeyBlZGl0VG9kb1BvcHVwIH0gZnJvbSAnLi9wb3B1cHMnO1xuXG5cbmNvbnN0IGFwcCA9ICgoKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICAvLyB0b2RvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiB0b2RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkgfTtcbiAgICB9XG5cbiAgICAvLyBQcmUtZmlsbCB0b2RvcyBhcnJheVxuICAgIGNvbnN0IHRvZG8xID0gdG9kb0ZhY3RvcnkoXCJIYWlyY3V0IGF0IDlcIiwgXCJIYWlyY3V0IGF0IDkgYXQgR3JlYXQgQ2xpcHMgd2l0aCBBYXJvbiBhcyB5b3VyIGJhcmJlclwiLCBcIjIwMjItMDMtMTVcIiwgXCJQZXJzb25hbFwiLCBcIm1lZGl1bVwiKTtcbiAgICBjb25zdCB0b2RvMiA9IHRvZG9GYWN0b3J5KFwiU2hvcCBmb3IgcGFpbnRcIiwgXCJHbyB0byBTaGVyd2luIFdpbGxpYW1zIG5leHQgdG8gYmFyYmVyIGFuZCBwaWNrIG91dCBzYW1wbGUgY29sb3JzIGZvciBndWVzdCBiZWRyb29tXCIsIFwiMjAyMi0wMy0xNVwiLCBcIlBlcnNvbmFsXCIsIFwibm9ybWFsXCIpO1xuICAgIGNvbnN0IHRvZG8zID0gdG9kb0ZhY3RvcnkoXCJTZW5kIHdvcmsgc2NoZWR1bGVcIiwgXCJFbWFpbCBCb2IgbXkgd29yayBzY2hlZHVsZSBmb3IgbmV4dCBtb250aFwiLCBcIjIwMjItMDMtMTVcIiwgXCJXb3JrXCIsIFwiaGlnaFwiKTtcbiAgICB0b2Rvcy5wdXNoKHRvZG8xLCB0b2RvMiwgdG9kbzMpO1xuXG4gICAgZXZlbnRzLmVtaXQoXCJ0b2RvcyBjaGFuZ2VkXCIsIHRvZG9zKTtcblxuICAgIC8vIFByZS1maWxsIHByb2plY3RzIGFycmF5XG4gICAgcHJvamVjdHNbMF0gPSBcIlBlcnNvbmFsXCI7XG5cbiAgICBldmVudHMuZW1pdChcIlByb2plY3RzIGNoYW5nZWRcIiwgcHJvamVjdHMpO1xuXG4gICAgLy8gU3Vic2NyaWJlIHRvIHVzZXIgaW5wdXQgZXZlbnRzXG4gICAgZXZlbnRzLm9uKFwiVXNlciBpbnB1dHMgbmV3IHRvZG9cIiwgYWRkVG9kbyk7XG4gICAgZXZlbnRzLm9uKFwiVXNlciBpbnB1dHMgbmV3IHByb2plY3RcIiwgYWRkUHJvamVjdCk7XG4gICAgZXZlbnRzLm9uKFwiVXNlciBlZGl0cyB0b2RvXCIsIGVkaXRUb2RvKTtcbiAgICBldmVudHMub24oXCJVc2VyIGRlbGV0ZXMgdG9kb1wiLCBkZWxldGVUb2RvKTtcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8odXNlcklucHV0KSB7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgZGF0ZTtcbiAgICAgICAgbGV0IHByb2plY3Q7XG4gICAgICAgIGxldCBwcmlvcml0eTtcblxuICAgICAgICAvLyBFcnJvciBjaGVjayB1c2VyIGlucHV0IGZyb20gYWRkVG9kb1BvcHVwXG4gICAgICAgIGlmICghdXNlcklucHV0WzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgYWRkIHRpdGxlLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdXNlcklucHV0WzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVGhhdCB0aXRsZSBhbHJlYWR5IGV4aXN0cy5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0WzBdLmxlbmd0aCA+IDYwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJUaXRsZSBjYW5ub3QgZXhjZWVkIDYwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSB1c2VySW5wdXRbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlcklucHV0WzFdLmxlbmd0aCA+IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRGVzY3JpcHRpb24gY2Fubm90IGV4Y2VlZCAyMDAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHVzZXJJbnB1dFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlcklucHV0WzJdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgYWRkIGR1ZSBkYXRlLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGUgPSB1c2VySW5wdXRbMl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXJJbnB1dFszXSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGFzc2lnbiB0byBhIHByb2plY3QuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdCA9IHVzZXJJbnB1dFszXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlcklucHV0WzRdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWwuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJpb3JpdHkgPSB1c2VySW5wdXRbNF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgbmV3IHRvZG8gb2JqZWN0IGFuZCBhZGQgdG8gYXJyYXlcbiAgICAgICAgY29uc3QgYVRvZG8gPSB0b2RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByb2plY3QsIHByaW9yaXR5KTtcbiAgICAgICAgdG9kb3MucHVzaChhVG9kbyk7XG4gICAgICAgIGV2ZW50cy5lbWl0KFwidG9kb3MgY2hhbmdlZFwiLCB0b2Rvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCh1c2VySW5wdXQpIHtcbiAgICAgICAgaWYgKCF1c2VySW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBhZGQgdGl0bGUuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0ID09PSB1c2VySW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJUaGF0IHRpdGxlIGFscmVhZHkgZXhpc3RzLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXQubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlByb2plY3QgdGl0bGUgY2Fubm90IGV4Y2VlZCAxMiBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2godXNlcklucHV0KTtcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KFwiUHJvamVjdHMgY2hhbmdlZFwiLCBwcm9qZWN0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0VG9kbyh1c2VySW5wdXQpIHtcbiAgICAgICAgbGV0IHRhcmdldFRvZG8gPSB1c2VySW5wdXRbNV07XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgZGF0ZTtcbiAgICAgICAgbGV0IHByb2plY3Q7XG4gICAgICAgIGxldCBwcmlvcml0eTtcblxuICAgICAgICAvLyBFcnJvciBjaGVjayB1c2VyIGlucHV0IGZyb20gYWRkVG9kb1BvcHVwXG4gICAgICAgIGlmICghdXNlcklucHV0WzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgYWRkIHRpdGxlLlwiKTtcbiAgICAgICAgLy8gQ2hlY2tzIGlmIHRpdGxlIGFscmVhZHkgZXhpc3RzIGFuZCBpcyBhbHNvIG5vdCB0aGUgdG9kbyBiZWluZyBlZGl0ZWRcbiAgICAgICAgfSBlbHNlIGlmICh0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdXNlcklucHV0WzBdKSAmJiB1c2VySW5wdXRbMF0gIT09IHRhcmdldFRvZG8pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRoYXQgdGl0bGUgYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dFswXS5sZW5ndGggPiA2MCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVGl0bGUgY2Fubm90IGV4Y2VlZCA2MCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpdGxlID0gdXNlcklucHV0WzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXJJbnB1dFsxXS5sZW5ndGggPiAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkRlc2NyaXB0aW9uIGNhbm5vdCBleGNlZWQgMjAwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB1c2VySW5wdXRbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXJJbnB1dFsyXSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGFkZCBkdWUgZGF0ZS5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gdXNlcklucHV0WzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1c2VySW5wdXRbM10pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBhc3NpZ24gdG8gYSBwcm9qZWN0LlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3QgPSB1c2VySW5wdXRbM107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXJJbnB1dFs0XSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHByaW9yaXR5IGxldmVsLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gdXNlcklucHV0WzRdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRWRpdCB0b2RvIG9iamVjdFxuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udGl0bGUgPT09IHRhcmdldFRvZG8pIHtcbiAgICAgICAgICAgICAgICB0b2RvLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICAgICAgdG9kby5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIGV2ZW50cy5lbWl0KFwidG9kb3MgY2hhbmdlZFwiLCB0b2Rvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyh0YXJnZXRPYmplY3QpIHtcbiAgICAgICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnRpdGxlICE9PSB0YXJnZXRPYmplY3QpO1xuXG4gICAgICAgIGV2ZW50cy5lbWl0KFwidG9kb3MgY2hhbmdlZFwiLCB0b2Rvcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG9kb3MsIHByb2plY3RzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7IiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCBhcHAgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzLCByZW5kZXJQcm9qZWN0TGlzdCB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuXG5cbmNvbnN0IGFkZFRvZG9Qb3B1cCA9ICgoKSA9PiB7XG4gICAgLy8gYWRkLXRvZG8gYnV0dG9uXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tYnV0dG9uXCIpO1xuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZGRUb2RvKTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRUb2RvKCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBBZGQgVG9kbyBQb3B1cFxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAgICAgY29uc3QgYWRkVG9kb1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkVG9kb1BvcHVwLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwXCIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlci5pZCA9IFwiYWRkLXRvZG8taGVhZGVyXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIlxuICAgICAgICBhZGRUb2RvUG9wdXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXAtY29udGVudFwiKTtcbiAgICAgICAgYWRkVG9kb1BvcHVwLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIkFkZCB0aXRsZVwiO1xuICAgICAgICB0aXRsZS5hdXRvZm9jdXMgPSBcInRydWVcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiQWRkIGRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbHMgPSBcIjUwXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnJvd3MgPSBcIjRcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkYXRlTGFiZWwuZm9yID0gXCJ0b2RvLWRhdGVcIjtcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICAgICAgZGF0ZS5pZCA9IFwidG9kby1kYXRlXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuZm9yID0gXCJ0b2RvLXByb2plY3RcIjtcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgdG8gcHJvamVjdDogXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5pZCA9IFwidG9kby1wcm9qZWN0XCI7XG5cbiAgICAgICAgYXBwLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuZm9yID0gXCJ0b2RvLXByaW9yaXR5XCI7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBwcmlvcml0eSBsZXZlbDogXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBwcmlvcml0eS5pZCA9IFwidG9kby1wcmlvcml0eVwiO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5MS52YWx1ZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIHByaW9yaXR5MS50ZXh0Q29udGVudCA9IFwiTm9ybWFsXCI7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5MSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJpb3JpdHkyLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICAgICAgcHJpb3JpdHkyLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkyKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eTMudmFsdWUgPSBcImhpZ2hcIjtcbiAgICAgICAgcHJpb3JpdHkzLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Myk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGFkZFRvZG9Qb3B1cC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzYXZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwLXNhdmVcIik7XG4gICAgICAgIHNhdmUudGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmUpO1xuXG4gICAgICAgIC8vIFB1Ymxpc2ggXCJBZGQgbmV3IHRvZG9cIiBldmVudFxuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuZW1pdChcIlVzZXIgaW5wdXRzIG5ldyB0b2RvXCIsIFt0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGUudmFsdWUsIHByb2plY3RTZWxlY3Qub3B0aW9uc1twcm9qZWN0U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlLCBwcmlvcml0eS5vcHRpb25zW3ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlXSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgLy8gQ2FuY2VsIGJ1dHRvbiBjbG9zZXMgcG9wdXBcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVBZGRUb2RvUG9wdXApO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0cmFuc3BhcmVudCBvdmVybGF5IGJlaGluZCBwb3B1cFxuICAgICAgICBjb25zdCBhZGRUb2RvT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZFRvZG9PdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG5cbiAgICAgICAgLy8gSWYgbmV3IHRvZG8gc3VjY2Vzc2Z1bGx5IGFkZGVkLCBjbG9zZSBwb3B1cFxuICAgICAgICBldmVudHMub24oXCJ0b2RvcyBjaGFuZ2VkXCIsIHJlbW92ZUFkZFRvZG9Qb3B1cCk7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhZGRUb2RvUG9wdXApO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFkZFRvZG9PdmVybGF5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZGRUb2RvUG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXBvcHVwXCIpO1xuICAgICAgICBjb25zdCBhZGRUb2RvT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keS5yZW1vdmVDaGlsZChhZGRUb2RvUG9wdXApKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keS5yZW1vdmVDaGlsZChhZGRUb2RvT3ZlcmxheSkpO1xuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGFkZFByb2plY3RQb3B1cCA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZGRQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRQcm9qZWN0KCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBBZGQgVG9kbyBQb3B1cC4gQW5jaG9yIHRvIHNpZGViYXIuXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkUHJvamVjdFBvcHVwLmlkID0gXCJhZGQtcHJvamVjdC1wb3B1cFwiO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RQb3B1cCk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyLmlkID0gXCJhZGQtcHJvamVjdC1oZWFkZXJcIjtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG4gICAgICAgIGFkZFByb2plY3RQb3B1cC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5pZCA9IFwiYWRkLXByb2plY3QtdGl0bGVcIjtcbiAgICAgICAgdGl0bGUuYXV0b2ZvY3VzID0gXCJ0cnVlXCI7XG4gICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJBZGQgdGl0bGVcIjtcbiAgICAgICAgYWRkUHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuaWQgPSBcImFkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIjtcbiAgICAgICAgYWRkUHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3Qgc2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmUuaWQgPSBcImFkZC1wcm9qZWN0LXNhdmVcIjtcbiAgICAgICAgc2F2ZS50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZSk7XG5cbiAgICAgICAgLy8gU2VuZCB1c2VyIGlucHV0IHRvIGFwcCBmb3IgZXJyb3IgY2hlY2tpbmdcbiAgICAgICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJVc2VyIGlucHV0cyBuZXcgcHJvamVjdFwiLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsLmlkID0gXCJhZGQtcHJvamVjdC1jYW5jZWxcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRyYW5zcGFyZW50IG92ZXJsYXkgYmVoaW5kIHBvcHVwXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAgICAgLy8gV2F5cyB0byBjbG9zZSBwb3B1cFxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUFkZFByb2plY3RQb3B1cCk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUFkZFByb2plY3RQb3B1cCk7XG4gICAgICAgIGV2ZW50cy5vbihcIlByb2plY3RzIGNoYW5nZWRcIiwgcmVtb3ZlQWRkUHJvamVjdFBvcHVwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZGRQcm9qZWN0UG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXBcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG4gICAgICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoYWRkUHJvamVjdFBvcHVwKTtcbiAgICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICB9XG59KSgpO1xuXG5jb25zdCBlZGl0VG9kb1BvcHVwID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkaXNwbGF5RWRpdFRvZG8oZSkge1xuICAgICAgICAvLyBGaW5kIHRvZG8gb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVkaXQgYnV0dG9uXG4gICAgICAgIGxldCB0YXJnZXRUb2RvID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVycyB0byBiZSB1c2VkIGluIGVkaXRUb2RvUG9wdXAgZm9ybVxuICAgICAgICBsZXQgdGl0bGVQbGFjZWhvbGRlcjtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uUGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBkYXRlUGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBwcm9qZWN0UGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBwcmlvcml0eVBsYWNlaG9sZGVyO1xuXG4gICAgICAgIGFwcC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udGl0bGUgPT09IHRhcmdldFRvZG8pIHtcbiAgICAgICAgICAgICAgICB0aXRsZVBsYWNlaG9sZGVyID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblBsYWNlaG9sZGVyID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBkYXRlUGxhY2Vob2xkZXIgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdFBsYWNlaG9sZGVyID0gdG9kby5wcm9qZWN0O1xuICAgICAgICAgICAgICAgIHByaW9yaXR5UGxhY2Vob2xkZXIgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIEVkaXQgVG9kbyBQb3B1cFxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVkaXRUb2RvUG9wdXAuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXBcIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyLmlkID0gXCJlZGl0LXRvZG8taGVhZGVyXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCJcbiAgICAgICAgZWRpdFRvZG9Qb3B1cC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3B1cC1jb250ZW50XCIpO1xuICAgICAgICBlZGl0VG9kb1BvcHVwLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSB0aXRsZVBsYWNlaG9sZGVyO1xuICAgICAgICB0aXRsZS5hdXRvZm9jdXMgPSB0cnVlO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImlucHV0LXRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb25QbGFjZWhvbGRlcjtcbiAgICAgICAgZGVzY3JpcHRpb24uY29scyA9IFwiNTBcIjtcbiAgICAgICAgZGVzY3JpcHRpb24ucm93cyA9IFwiNFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGRhdGVMYWJlbC5mb3IgPSBcInRvZG8tZGF0ZVwiO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOiBcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICBkYXRlLmlkID0gXCJ0b2RvLWRhdGVcIjtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IGRhdGVQbGFjZWhvbGRlcjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSBcInRvZG8tcHJvamVjdFwiO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCB0byBwcm9qZWN0OiBcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmlkID0gXCJ0b2RvLXByb2plY3RcIjtcblxuICAgICAgICBhcHAucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0UGxhY2Vob2xkZXI7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmZvciA9IFwidG9kby1wcmlvcml0eVwiO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgcHJpb3JpdHkgbGV2ZWw6IFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcHJpb3JpdHkuaWQgPSBcInRvZG8tcHJpb3JpdHlcIjtcblxuICAgICAgICBjb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eTEudmFsdWUgPSBcIm5vcm1hbFwiO1xuICAgICAgICBwcmlvcml0eTEudGV4dENvbnRlbnQgPSBcIk5vcm1hbFwiO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTEpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5Mi52YWx1ZSA9IFwibWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5Mi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Mik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJpb3JpdHkzLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgICAgIHByaW9yaXR5My50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTMpO1xuXG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHlQbGFjZWhvbGRlcjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGVkaXRUb2RvUG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3B1cC1zYXZlXCIpO1xuICAgICAgICBzYXZlLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlKTtcblxuICAgICAgICAvLyBQdWJsaXNoIEVkaXQgVG9kbyBldmVudFxuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuZW1pdChcIlVzZXIgZWRpdHMgdG9kb1wiLCBbdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbcHJvamVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSwgcHJpb3JpdHkub3B0aW9uc1twcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZSwgdGFyZ2V0VG9kb10pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIC8vIENhbmNlbCBidXR0b24gY2xvc2VzIHBvcHVwXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRWRpdFRvZG9Qb3B1cCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRyYW5zcGFyZW50IG92ZXJsYXkgYmVoaW5kIHBvcHVwXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG5cbiAgICAgICAgLy8gSWYgbmV3IHRvZG8gc3VjY2Vzc2Z1bGx5IGVkaXRlZCwgY2xvc2UgcG9wdXBcbiAgICAgICAgZXZlbnRzLm9uKFwidG9kb3MgY2hhbmdlZFwiLCByZW1vdmVFZGl0VG9kb1BvcHVwKTtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVkaXRUb2RvUG9wdXApO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgICAgIC8vIENsaWNrIGV2ZW50IGxpc3RlbmVyIHN0b3BzIG9uIGJ1dHRvbiAoZG9lc24ndCBjb2xsYXBzZSBleHBhbmRlZCB0b2RvKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVkaXRUb2RvUG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wb3B1cFwiKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keS5yZW1vdmVDaGlsZChlZGl0VG9kb1BvcHVwKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXlFZGl0VG9kbyB9O1xufSkoKTtcblxuZXhwb3J0IHsgZWRpdFRvZG9Qb3B1cCB9OyIsIi8vZXZlbnRzIC0gYSBzdXBlci1iYXNpYyBKYXZhc2NyaXB0IChwdWJsaXNoIHN1YnNjcmliZSkgcGF0dGVyblxuLy8gQ3JlZGl0IHRvIEBsZWFybmNvZGVhY2FkZW15IG9uIEdpdEh1YlxuXG52YXIgZXZlbnRzID0ge1xuICAgIGV2ZW50czoge30sXG4gICAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBlbWl0OiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICBmbihkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9