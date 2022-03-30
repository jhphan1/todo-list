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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 15px;\n    font-family: helvetica, sans-serif;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    --green: rgb(67, 212, 140);\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-column: 1/3;\n    background-color: var(--green);\n    color: rgb(255, 255, 255);\n    font-family: Roboto, sans-serif;\n    font-weight: bolder;\n    padding: 8px 24px;\n    font-size: 1.5rem;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#logo {\n    background-color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 24px;\n    font-weight: 500;\n    border-right: 1px solid rgb(184, 184, 184);\n    position: relative;\n}\n\n#sidebar img {\n    height: 1.5rem;\n    width: auto;\n}\n\n.menu,\n.submenu {\n    padding: 4px 0px;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.menu:hover,\n.submenu:hover {\n    font-weight: bolder;\n    opacity: 0.8;\n}\n\n#project-container {\n    padding: 8px 15px;\n}\n\n#main {\n    background-color: white;\n    padding: 55px 100px 30px 55px;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 1.3rem;\n    margin-bottom: 1rem;\n}\n\n.todo {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n}\n\n.todo:hover {\n    background-color: whitesmoke;\n}\n\n.project-label {\n    grid-column: 4;\n    font-size: 0.85rem;\n    color: rgb(80, 80, 80);\n    justify-self: right;\n}\n\n.priority-normal,\n.priority-med,\n.priority-high {\n    grid-column: 5;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n\n.priority-normal {\n    background-color: rgb(190, 190, 190);\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-expanded {\n    grid-column: 1/6;\n    font-size: 0.9rem;\n    font-style: italic;\n    color: rgb(49, 49, 49);\n    padding: 0px 0px 0px 40px;\n}\n\n.expanded-todo-button-container {\n    margin-top: 8px;\n    text-align: right;\n}\n\n.expanded-todo-button-container button {\n    background-color: rgba(255, 255, 255, 0);\n    color: rgb(167, 167, 167);\n    border: 1px solid rgb(167, 167, 167);\n    border-radius: 5px;\n    margin-right: 15px;\n    font-size: 0.7rem;\n}\n\n#edit-todo-button:hover {\n    border-color: orange;\n    color: orange;\n    background-color: rgba(255, 166, 0, 0.1);\n}\n\n#trash-todo-button:hover {\n    border-color: red;\n    color: red;\n    background-color: rgba(255, 0, 0, 0.1);\n}\n\n#add-todo-button {\n    background-color: var(--green);\n    color: white;\n    font-size: 2rem;\n    border: 0;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 60px;\n    right: 60px;\n    cursor: pointer;\n}\n\n#add-todo-button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#overlay {\n    background-color: white;\n    opacity: 0.4;\n    z-index: 1000;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n#add-todo-popup {\n    background-color: white;\n    z-index: 2000;\n    position: fixed;\n    height: 320px;\n    width: 50vw;\n    top: 50%;\n    left: 50%;\n    margin-top: -160px;\n    margin-left: -25vw;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-todo-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-todo-content {\n    padding: 8px 50px;\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 200px 1fr;\n    align-items: center;\n}\n\n#add-todo-title {\n    grid-column: 1/3;\n    border: 0;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-todo-description {\n    grid-column: 1/3;\n    border: 0;\n    font-family: roboto, sans-serif;\n    resize: none;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n}\n\n#add-todo-content label {\n    justify-self: end;\n}\n\n#add-todo-content input[type=\"date\"],\n#add-todo-content select {\n    border: 0;\n    background-color: rgb(238, 238, 238);\n    width: 270px;\n    height: 1.5rem;\n    justify-self: start;\n}\n\n#add-todo-button-container {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n    margin-top: 12px;\n}\n\n#add-todo-popup button {\n    width: 100px;\n    border: 0;\n    border-radius: 8px;\n    padding: 8px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n}\n\n#add-todo-popup button:hover,\n#add-project-popup button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#add-todo-popup #add-todo-save {\n    background-color: var(--green);\n}\n\n#add-project-button {\n    margin-left: 100px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    color: red;\n}\n\n#add-project-button:hover {\n    transform: scale(1.3);\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#add-project-popup {\n    background-color: white;\n    z-index: 2000;\n    position: absolute;\n    height: 130px;\n    width: 250px;\n    top: 124px;\n    left: 240px;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-project-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-project-title {\n    border: 0;\n    font-size: 1rem;\n    margin: 8px 24px 0px 24px;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-project-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    margin-top: 12px;\n}\n\n#add-project-popup button {\n    width: 80px;\n    border: 0;\n    border-radius: 8px;\n    padding: 6px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n    font-size: 0.8rem;\n}\n\n#add-project-popup #add-project-save {\n    background-color: var(--green);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\n\n:root {\n    font-size: 15px;\n    font-family: helvetica, sans-serif;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    --green: rgb(67, 212, 140);\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-column: 1/3;\n    background-color: var(--green);\n    color: rgb(255, 255, 255);\n    font-family: Roboto, sans-serif;\n    font-weight: bolder;\n    padding: 8px 24px;\n    font-size: 1.5rem;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#logo {\n    background-color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 24px;\n    font-weight: 500;\n    border-right: 1px solid rgb(184, 184, 184);\n    position: relative;\n}\n\n#sidebar img {\n    height: 1.5rem;\n    width: auto;\n}\n\n.menu,\n.submenu {\n    padding: 4px 0px;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.menu:hover,\n.submenu:hover {\n    font-weight: bolder;\n    opacity: 0.8;\n}\n\n#project-container {\n    padding: 8px 15px;\n}\n\n#main {\n    background-color: white;\n    padding: 55px 100px 30px 55px;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 1.3rem;\n    margin-bottom: 1rem;\n}\n\n.todo {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n}\n\n.todo:hover {\n    background-color: whitesmoke;\n}\n\n.project-label {\n    grid-column: 4;\n    font-size: 0.85rem;\n    color: rgb(80, 80, 80);\n    justify-self: right;\n}\n\n.priority-normal,\n.priority-med,\n.priority-high {\n    grid-column: 5;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n\n.priority-normal {\n    background-color: rgb(190, 190, 190);\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-expanded {\n    grid-column: 1/6;\n    font-size: 0.9rem;\n    font-style: italic;\n    color: rgb(49, 49, 49);\n    padding: 0px 0px 0px 40px;\n}\n\n.expanded-todo-button-container {\n    margin-top: 8px;\n    text-align: right;\n}\n\n.expanded-todo-button-container button {\n    background-color: rgba(255, 255, 255, 0);\n    color: rgb(167, 167, 167);\n    border: 1px solid rgb(167, 167, 167);\n    border-radius: 5px;\n    margin-right: 15px;\n    font-size: 0.7rem;\n}\n\n#edit-todo-button:hover {\n    border-color: orange;\n    color: orange;\n    background-color: rgba(255, 166, 0, 0.1);\n}\n\n#trash-todo-button:hover {\n    border-color: red;\n    color: red;\n    background-color: rgba(255, 0, 0, 0.1);\n}\n\n#add-todo-button {\n    background-color: var(--green);\n    color: white;\n    font-size: 2rem;\n    border: 0;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 60px;\n    right: 60px;\n    cursor: pointer;\n}\n\n#add-todo-button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#overlay {\n    background-color: white;\n    opacity: 0.4;\n    z-index: 1000;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n#add-todo-popup {\n    background-color: white;\n    z-index: 2000;\n    position: fixed;\n    height: 320px;\n    width: 50vw;\n    top: 50%;\n    left: 50%;\n    margin-top: -160px;\n    margin-left: -25vw;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-todo-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-todo-content {\n    padding: 8px 50px;\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 200px 1fr;\n    align-items: center;\n}\n\n#add-todo-title {\n    grid-column: 1/3;\n    border: 0;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-todo-description {\n    grid-column: 1/3;\n    border: 0;\n    font-family: roboto, sans-serif;\n    resize: none;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n}\n\n#add-todo-content label {\n    justify-self: end;\n}\n\n#add-todo-content input[type=\"date\"],\n#add-todo-content select {\n    border: 0;\n    background-color: rgb(238, 238, 238);\n    width: 270px;\n    height: 1.5rem;\n    justify-self: start;\n}\n\n#add-todo-button-container {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n    margin-top: 12px;\n}\n\n#add-todo-popup button {\n    width: 100px;\n    border: 0;\n    border-radius: 8px;\n    padding: 8px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n}\n\n#add-todo-popup button:hover,\n#add-project-popup button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#add-todo-popup #add-todo-save {\n    background-color: var(--green);\n}\n\n#add-project-button {\n    margin-left: 100px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    color: red;\n}\n\n#add-project-button:hover {\n    transform: scale(1.3);\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#add-project-popup {\n    background-color: white;\n    z-index: 2000;\n    position: absolute;\n    height: 130px;\n    width: 250px;\n    top: 124px;\n    left: 240px;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-project-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-project-title {\n    border: 0;\n    font-size: 1rem;\n    margin: 8px 24px 0px 24px;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-project-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    margin-top: 12px;\n}\n\n#add-project-popup button {\n    width: 80px;\n    border: 0;\n    border-radius: 8px;\n    padding: 6px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n    font-size: 0.8rem;\n}\n\n#add-project-popup #add-project-save {\n    background-color: var(--green);\n}\n\n"],"sourceRoot":""}]);
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

                    trash.addEventListener("click", _popups__WEBPACK_IMPORTED_MODULE_2__.deleteTodoPopup.displayDeleteTodo);
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





// INDEX.JS - application logic
//     --Todos array
//         Create a todo
//         Complete a todo
//         Change todo properties

//     Projects array
//         Create a project
//         Delete a project

//     Completed Todos array?

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

    // Subscribe to when a user adds new todo or project
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User inputs new todo", addTodo);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User inputs new project", addProject);

    function addTodo(userInput) {
        let title;
        let description;
        let date;
        let project;
        let priority;

        // Error check user input from addTodoPopup
        // $$TODO: Check if title already exists
        if (!userInput[0]) {
            return alert("Please add title.");
        } else {
            title = userInput[0];
        }

        description = userInput[1];

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
            // $$ TODO: More error checking
                // Does title already exist?
                // Character limits
        } else {
            projects.push(userInput);
            _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("Projects changed", projects);
        }
    }

    return { projects };
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
/* harmony export */   "deleteTodoPopup": () => (/* binding */ deleteTodoPopup),
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
        addTodoPopup.id = "add-todo-popup";

        const header = document.createElement("div");
        header.id = "add-todo-header";
        header.textContent = "New Task"
        addTodoPopup.appendChild(header);

        const content = document.createElement("form");
        content.id = "add-todo-content";
        addTodoPopup.appendChild(content);

        const title = document.createElement("input");
        title.id = "add-todo-title";
        title.placeholder = "Add title";
        title.maxlength = "30";
        title.required = true;
        content.appendChild(title);

        const description = document.createElement("textarea");
        description.id = "add-todo-description";
        description.placeholder = "Add description";
        description.maxlength = "150";
        description.cols = "50";
        description.rows = "4";
        content.appendChild(description);

        const dateLabel = document.createElement("label");
        dateLabel.for = "add-todo-date";
        dateLabel.textContent = "Due date: ";
        content.appendChild(dateLabel);

        const date = document.createElement("input");
        date.type = "date";
        date.id = "add-todo-date";
        date.required = true;
        content.appendChild(date);

        const projectLabel = document.createElement("label");
        projectLabel.for = "add-todo-project";
        projectLabel.textContent = "Add to project: ";
        content.appendChild(projectLabel);

        const projectSelect = document.createElement("select");
        projectSelect.id = "add-todo-project";
        projectSelect.required = true;

        _index__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach(project => {
            let option = document.createElement("option");
            option.value = project;
            option.textContent = project;
            projectSelect.appendChild(option);
        });

        content.appendChild(projectSelect);

        const priorityLabel = document.createElement("label");
        priorityLabel.for = "add-todo-priority";
        priorityLabel.textContent = "Add priority level: ";
        content.appendChild(priorityLabel);

        const priority = document.createElement("select");
        priority.id = "add-todo-priority";
        priority.required = true;

        const priority1 = document.createElement("option");
        priority1.value = "normal";
        priority1.textContent = "Normal";
        priority.appendChild(priority1);

        const priority2 = document.createElement("option");
        priority2.value = "med";
        priority2.textContent = "Medium";
        priority.appendChild(priority2);

        const priority3 = document.createElement("option");
        priority3.value = "high";
        priority3.textContent = "High";
        priority.appendChild(priority3);

        content.appendChild(priority);

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "add-todo-button-container";
        addTodoPopup.appendChild(buttonContainer);

        const save = document.createElement("button");
        save.id = "add-todo-save";
        save.textContent = "Save";
        buttonContainer.appendChild(save);

        // Publish "Add new todo" event
        save.addEventListener("click", () => {
            _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit("User inputs new todo", [title.value, description.value, date.value, projectSelect.options[projectSelect.selectedIndex].value, priority.options[priority.selectedIndex].value]);
        })

        const cancel = document.createElement("button");
        cancel.id = "add-todo-cancel";
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
        const addTodoPopup = document.querySelector("#add-todo-popup");
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
        title.placeholder = "Add title";
        title.maxlength = "30";
        title.required = true;
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
        console.log(this);
        e.stopPropagation();
    }

    return { displayEditTodo };
})();

const deleteTodoPopup = (() => {
    function displayDeleteTodo(e) {
        console.log(this);
        e.stopPropagation();
    }

    return { displayDeleteTodo };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZIQUE2SDtBQUM3SDtBQUNBLGlEQUFpRCxzQkFBc0IseUNBQXlDLDZCQUE2QixzQ0FBc0MsaUNBQWlDLEdBQUcsVUFBVSxnQkFBZ0Isb0JBQW9CLHVDQUF1QyxtQ0FBbUMsb0JBQW9CLEdBQUcsYUFBYSx1QkFBdUIscUNBQXFDLGdDQUFnQyxzQ0FBc0MsMEJBQTBCLHdCQUF3Qix3QkFBd0Isb0JBQW9CLGdCQUFnQiwwQkFBMEIsR0FBRyxXQUFXLDhCQUE4QixtQkFBbUIsa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsY0FBYywyQ0FBMkMsb0JBQW9CLHVCQUF1QixpREFBaUQseUJBQXlCLEdBQUcsa0JBQWtCLHFCQUFxQixrQkFBa0IsR0FBRyxzQkFBc0IsdUJBQXVCLG9CQUFvQixrQkFBa0IsMEJBQTBCLEdBQUcsa0NBQWtDLDBCQUEwQixtQkFBbUIsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsV0FBVyw4QkFBOEIsb0NBQW9DLEdBQUcsWUFBWSx3QkFBd0Isd0JBQXdCLDBCQUEwQixHQUFHLFdBQVcsMENBQTBDLHVCQUF1QixvQkFBb0Isc0RBQXNELDBCQUEwQix1QkFBdUIsc0JBQXNCLEdBQUcsaUJBQWlCLG1DQUFtQyxHQUFHLG9CQUFvQixxQkFBcUIseUJBQXlCLDZCQUE2QiwwQkFBMEIsR0FBRyx1REFBdUQscUJBQXFCLG1CQUFtQixrQkFBa0IseUJBQXlCLEdBQUcsc0JBQXNCLDJDQUEyQyxHQUFHLG1CQUFtQiwrQkFBK0IsR0FBRyxvQkFBb0IsNEJBQTRCLEdBQUcsb0JBQW9CLHVCQUF1Qix3QkFBd0IseUJBQXlCLDZCQUE2QixnQ0FBZ0MsR0FBRyxxQ0FBcUMsc0JBQXNCLHdCQUF3QixHQUFHLDRDQUE0QywrQ0FBK0MsZ0NBQWdDLDJDQUEyQyx5QkFBeUIseUJBQXlCLHdCQUF3QixHQUFHLDZCQUE2QiwyQkFBMkIsb0JBQW9CLCtDQUErQyxHQUFHLDhCQUE4Qix3QkFBd0IsaUJBQWlCLDZDQUE2QyxHQUFHLHNCQUFzQixxQ0FBcUMsbUJBQW1CLHNCQUFzQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsc0JBQXNCLG1CQUFtQixrQkFBa0Isc0JBQXNCLEdBQUcsNEJBQTRCLG1DQUFtQyxtQkFBbUIsR0FBRyxjQUFjLDhCQUE4QixtQkFBbUIsb0JBQW9CLHNCQUFzQixtQkFBbUIsa0JBQWtCLGFBQWEsY0FBYyxHQUFHLHFCQUFxQiw4QkFBOEIsb0JBQW9CLHNCQUFzQixvQkFBb0Isa0JBQWtCLGVBQWUsZ0JBQWdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLG1DQUFtQyxHQUFHLHNCQUFzQixxQ0FBcUMsbUJBQW1CLHdCQUF3QixpQ0FBaUMsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixvQkFBb0IsZUFBZSx1Q0FBdUMsMEJBQTBCLEdBQUcscUJBQXFCLHVCQUF1QixnQkFBZ0Isc0JBQXNCLG9DQUFvQyxtQkFBbUIsR0FBRywyQkFBMkIsdUJBQXVCLGdCQUFnQixzQ0FBc0MsbUJBQW1CLHNCQUFzQixvQ0FBb0MsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsdUVBQXVFLGdCQUFnQiwyQ0FBMkMsbUJBQW1CLHFCQUFxQiwwQkFBMEIsR0FBRyxnQ0FBZ0MsdUJBQXVCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLHVCQUF1QixHQUFHLDRCQUE0QixtQkFBbUIsZ0JBQWdCLHlCQUF5QixtQkFBbUIsbUJBQW1CLHdCQUF3Qiw2QkFBNkIsR0FBRyxvRUFBb0UsbUNBQW1DLG1CQUFtQixHQUFHLG9DQUFvQyxxQ0FBcUMsR0FBRyx5QkFBeUIseUJBQXlCLDBCQUEwQix3QkFBd0IsaUJBQWlCLEdBQUcsK0JBQStCLDRCQUE0QixtQkFBbUIsc0JBQXNCLEdBQUcsd0JBQXdCLDhCQUE4QixvQkFBb0IseUJBQXlCLG9CQUFvQixtQkFBbUIsaUJBQWlCLGtCQUFrQix5QkFBeUIsbUNBQW1DLEdBQUcseUJBQXlCLHFDQUFxQyxtQkFBbUIsd0JBQXdCLGlDQUFpQyx3QkFBd0IsR0FBRyx3QkFBd0IsZ0JBQWdCLHNCQUFzQixnQ0FBZ0Msb0NBQW9DLG1CQUFtQixHQUFHLG1DQUFtQyxvQkFBb0IsOEJBQThCLGdCQUFnQix1QkFBdUIsR0FBRywrQkFBK0Isa0JBQWtCLGdCQUFnQix5QkFBeUIsbUJBQW1CLG1CQUFtQix3QkFBd0IsNkJBQTZCLHdCQUF3QixHQUFHLDBDQUEwQyxxQ0FBcUMsR0FBRyxXQUFXLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksK0dBQStHLFdBQVcsc0JBQXNCLHlDQUF5Qyw2QkFBNkIsc0NBQXNDLGlDQUFpQyxHQUFHLFVBQVUsZ0JBQWdCLG9CQUFvQix1Q0FBdUMsbUNBQW1DLG9CQUFvQixHQUFHLGFBQWEsdUJBQXVCLHFDQUFxQyxnQ0FBZ0Msc0NBQXNDLDBCQUEwQix3QkFBd0Isd0JBQXdCLG9CQUFvQixnQkFBZ0IsMEJBQTBCLEdBQUcsV0FBVyw4QkFBOEIsbUJBQW1CLGtCQUFrQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLGNBQWMsMkNBQTJDLG9CQUFvQix1QkFBdUIsaURBQWlELHlCQUF5QixHQUFHLGtCQUFrQixxQkFBcUIsa0JBQWtCLEdBQUcsc0JBQXNCLHVCQUF1QixvQkFBb0Isa0JBQWtCLDBCQUEwQixHQUFHLGtDQUFrQywwQkFBMEIsbUJBQW1CLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLFdBQVcsOEJBQThCLG9DQUFvQyxHQUFHLFlBQVksd0JBQXdCLHdCQUF3QiwwQkFBMEIsR0FBRyxXQUFXLDBDQUEwQyx1QkFBdUIsb0JBQW9CLHNEQUFzRCwwQkFBMEIsdUJBQXVCLHNCQUFzQixHQUFHLGlCQUFpQixtQ0FBbUMsR0FBRyxvQkFBb0IscUJBQXFCLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLEdBQUcsdURBQXVELHFCQUFxQixtQkFBbUIsa0JBQWtCLHlCQUF5QixHQUFHLHNCQUFzQiwyQ0FBMkMsR0FBRyxtQkFBbUIsK0JBQStCLEdBQUcsb0JBQW9CLDRCQUE0QixHQUFHLG9CQUFvQix1QkFBdUIsd0JBQXdCLHlCQUF5Qiw2QkFBNkIsZ0NBQWdDLEdBQUcscUNBQXFDLHNCQUFzQix3QkFBd0IsR0FBRyw0Q0FBNEMsK0NBQStDLGdDQUFnQywyQ0FBMkMseUJBQXlCLHlCQUF5Qix3QkFBd0IsR0FBRyw2QkFBNkIsMkJBQTJCLG9CQUFvQiwrQ0FBK0MsR0FBRyw4QkFBOEIsd0JBQXdCLGlCQUFpQiw2Q0FBNkMsR0FBRyxzQkFBc0IscUNBQXFDLG1CQUFtQixzQkFBc0IsZ0JBQWdCLG1CQUFtQixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLHNCQUFzQixtQkFBbUIsa0JBQWtCLHNCQUFzQixHQUFHLDRCQUE0QixtQ0FBbUMsbUJBQW1CLEdBQUcsY0FBYyw4QkFBOEIsbUJBQW1CLG9CQUFvQixzQkFBc0IsbUJBQW1CLGtCQUFrQixhQUFhLGNBQWMsR0FBRyxxQkFBcUIsOEJBQThCLG9CQUFvQixzQkFBc0Isb0JBQW9CLGtCQUFrQixlQUFlLGdCQUFnQix5QkFBeUIseUJBQXlCLHlCQUF5QixtQ0FBbUMsR0FBRyxzQkFBc0IscUNBQXFDLG1CQUFtQix3QkFBd0IsaUNBQWlDLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0Isb0JBQW9CLGVBQWUsdUNBQXVDLDBCQUEwQixHQUFHLHFCQUFxQix1QkFBdUIsZ0JBQWdCLHNCQUFzQixvQ0FBb0MsbUJBQW1CLEdBQUcsMkJBQTJCLHVCQUF1QixnQkFBZ0Isc0NBQXNDLG1CQUFtQixzQkFBc0Isb0NBQW9DLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHVFQUF1RSxnQkFBZ0IsMkNBQTJDLG1CQUFtQixxQkFBcUIsMEJBQTBCLEdBQUcsZ0NBQWdDLHVCQUF1QixvQkFBb0IsOEJBQThCLGdCQUFnQix1QkFBdUIsR0FBRyw0QkFBNEIsbUJBQW1CLGdCQUFnQix5QkFBeUIsbUJBQW1CLG1CQUFtQix3QkFBd0IsNkJBQTZCLEdBQUcsb0VBQW9FLG1DQUFtQyxtQkFBbUIsR0FBRyxvQ0FBb0MscUNBQXFDLEdBQUcseUJBQXlCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLGlCQUFpQixHQUFHLCtCQUErQiw0QkFBNEIsbUJBQW1CLHNCQUFzQixHQUFHLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLHlCQUF5QixvQkFBb0IsbUJBQW1CLGlCQUFpQixrQkFBa0IseUJBQXlCLG1DQUFtQyxHQUFHLHlCQUF5QixxQ0FBcUMsbUJBQW1CLHdCQUF3QixpQ0FBaUMsd0JBQXdCLEdBQUcsd0JBQXdCLGdCQUFnQixzQkFBc0IsZ0NBQWdDLG9DQUFvQyxtQkFBbUIsR0FBRyxtQ0FBbUMsb0JBQW9CLDhCQUE4QixnQkFBZ0IsdUJBQXVCLEdBQUcsK0JBQStCLGtCQUFrQixnQkFBZ0IseUJBQXlCLG1CQUFtQixtQkFBbUIsd0JBQXdCLDZCQUE2Qix3QkFBd0IsR0FBRywwQ0FBMEMscUNBQXFDLEdBQUcsdUJBQXVCO0FBQzc1ZTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOEI7QUFDSjtBQUNnQzs7QUFFMUQ7QUFDQSxJQUFJLGtEQUFTOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCxzRUFBaUM7QUFDckYsbURBQW1ELGtFQUE2QjtBQUNoRjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUEsSUFBSSxrREFBUzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIb0I7QUFDUztBQUMwQztBQUNkOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksb0RBQVc7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLG9EQUFXOztBQUVmO0FBQ0EsSUFBSSxrREFBUztBQUNiLElBQUksa0RBQVM7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdZO0FBQ0o7QUFDOEM7OztBQUd4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsK0RBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtEQUFTOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVc7QUFDdkIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TkQ7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7VUM1QnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIC0tZ3JlZW46IHJnYig2NywgMjEyLCAxNDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE4NCwgMTg0LCAxODQpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNzaWRlYmFyIGltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLm1lbnUsXFxuLnN1Ym1lbnUge1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnU6aG92ZXIsXFxuLnN1Ym1lbnU6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1NXB4IDEwMHB4IDMwcHggNTVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gMTAwcHggYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5wcm9qZWN0LWxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQ7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuLnByaW9yaXR5LW5vcm1hbCxcXG4ucHJpb3JpdHktbWVkLFxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgZ3JpZC1jb2x1bW46IDU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByaW9yaXR5LW5vcm1hbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWV4cGFuZGVkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNDBweDtcXG59XFxuXFxuLmV4cGFuZGVkLXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5leHBhbmRlZC10b2RvLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NywgMTY3LCAxNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbiNlZGl0LXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuMSk7XFxufVxcblxcbiN0cmFzaC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDYwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCBncmV5O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbiNhZGQtdG9kby1wb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBncmV5O1xcbn1cXG5cXG4jYWRkLXRvZG8taGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcblxcbiNhZGQtdG9kby1jb250ZW50IHtcXG4gICAgcGFkZGluZzogOHB4IDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC10b2RvLXRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNhZGQtdG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4jYWRkLXRvZG8tY29udGVudCBsYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jYWRkLXRvZG8tY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuI2FkZC10b2RvLWNvbnRlbnQgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbiNhZGQtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuI2FkZC10b2RvLXBvcHVwIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2FkZC10b2RvLXBvcHVwIGJ1dHRvbjpob3ZlcixcXG4jYWRkLXByb2plY3QtcG9wdXAgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggZ3JleTtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4jYWRkLXRvZG8tcG9wdXAgI2FkZC10b2RvLXNhdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDIwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICB0b3A6IDEyNHB4O1xcbiAgICBsZWZ0OiAyNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBncmV5O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC10aXRsZSB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDhweCAyNHB4IDBweCAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCBidXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCAjYWRkLXByb2plY3Qtc2F2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0FB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WUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICAtLWdyZWVuOiByZ2IoNjcsIDIxMiwgMTQwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc2lkZWJhciBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5tZW51LFxcbi5zdWJtZW51IHtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51OmhvdmVyLFxcbi5zdWJtZW51OmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNTVweCAxMDBweCAzMHB4IDU1cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIDEwMHB4IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4ucHJvamVjdC1sYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiA0O1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufVxcblxcbi5wcmlvcml0eS1ub3JtYWwsXFxuLnByaW9yaXR5LW1lZCxcXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGdyaWQtY29sdW1uOiA1O1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcmlvcml0eS1ub3JtYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XFxufVxcblxcbi5wcmlvcml0eS1tZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1leHBhbmRlZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDQwcHg7XFxufVxcblxcbi5leHBhbmRlZC10b2RvLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZXhwYW5kZWQtdG9kby1idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4jZWRpdC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjEpO1xcbn1cXG5cXG4jdHJhc2gtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XFxufVxcblxcbiNhZGQtdG9kby1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA2MHB4O1xcbiAgICByaWdodDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggZ3JleTtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jYWRkLXRvZG8tcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTE2MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggZ3JleTtcXG59XFxuXFxuI2FkZC10b2RvLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jYWRkLXRvZG8tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtdG9kby10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jYWRkLXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuI2FkZC10b2RvLWNvbnRlbnQgbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI2FkZC10b2RvLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbiNhZGQtdG9kby1jb250ZW50IHNlbGVjdCB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbiAgICB3aWR0aDogMjcwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jYWRkLXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbiNhZGQtdG9kby1wb3B1cCBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNhZGQtdG9kby1wb3B1cCBidXR0b246aG92ZXIsXFxuI2FkZC1wcm9qZWN0LXBvcHVwIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuI2FkZC10b2RvLXBvcHVwICNhZGQtdG9kby1zYXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgdG9wOiAxMjRweDtcXG4gICAgbGVmdDogMjQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggZ3JleTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtdGl0bGUge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiA4cHggMjRweCAwcHggMjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAgI2FkZC1wcm9qZWN0LXNhdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCBhcHAgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGVkaXRUb2RvUG9wdXAsIGRlbGV0ZVRvZG9Qb3B1cCB9IGZyb20gXCIuL3BvcHVwc1wiO1xuXG5jb25zdCByZW5kZXJBbGxUYXNrcyA9ICgoKSA9PiB7XG4gICAgZXZlbnRzLm9uKFwidG9kb3MgY2hhbmdlZFwiLCByZW5kZXIpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKHRvZG9zKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgdG9kbyBlbGVtZW50c1xuICAgICAgICB3aGlsZSAobWFpbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIC8vIFJlbmRlciBuZXcgdG9kb3MgbGlzdFxuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGNoZWNrYm94IElEXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1sYWJlbFwiKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdDtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW5vcm1hbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy8gSGlkZGVuIGVsZW1lbnRzIHRoYXQgZXhwYW5kIHdoZW4gdG9kbyBpcyBjbGlja2VkXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVG9nZ2xlIG9uL29mZlxuICAgICAgICAgICAgICAgIGlmICh0b2RvQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRXhwYW5kZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRXhwYW5kZWQuY2xhc3NMaXN0LmFkZChcInRvZG8tZXhwYW5kZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0V4cGFuZGVkKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkLXRvZG8tYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVkLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIGVkaXQuaWQgPSBcImVkaXQtdG9kby1idXR0b25cIjtcbiAgICAgICAgICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB0cmFzaC5pZCA9IFwidHJhc2gtdG9kby1idXR0b25cIjtcbiAgICAgICAgICAgICAgICAgICAgdHJhc2gudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQodHJhc2gpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvUG9wdXAuZGlzcGxheURlbGV0ZVRvZG8pO1xuICAgICAgICAgICAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kb1BvcHVwLmRpc3BsYXlFZGl0VG9kbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxufSkoKTtcblxuY29uc3QgcmVuZGVyUHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgZXZlbnRzLm9uKFwiUHJvamVjdHMgY2hhbmdlZFwiLCByZW5kZXIpXG5cbiAgICBmdW5jdGlvbiByZW5kZXIocHJvamVjdHMpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcHJvamVjdCBlbGVtZW50c1xuICAgICAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IGxpc3RcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc3VibWVudS5jbGFzc0xpc3QuYWRkKFwic3VibWVudVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vc3JjL2ltZy9wcm9qZWN0LWl0ZW0ucG5nXCI7XG4gICAgICAgICAgICBpY29uLmFsdCA9IFwicHJvamVjdC1pdGVtXCI7XG4gICAgICAgICAgICBzdWJtZW51LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgc3VibWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWVudSk7XG4gICAgICAgIH0pXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgcmVuZGVyQWxsVGFza3MsIHJlbmRlclByb2plY3RMaXN0IH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3MsIHJlbmRlclByb2plY3RMaXN0IH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgeyBlZGl0VG9kb1BvcHVwLCBkZWxldGVUb2RvUG9wdXAgfSBmcm9tICcuL3BvcHVwcyc7XG5cbi8vIElOREVYLkpTIC0gYXBwbGljYXRpb24gbG9naWNcbi8vICAgICAtLVRvZG9zIGFycmF5XG4vLyAgICAgICAgIENyZWF0ZSBhIHRvZG9cbi8vICAgICAgICAgQ29tcGxldGUgYSB0b2RvXG4vLyAgICAgICAgIENoYW5nZSB0b2RvIHByb3BlcnRpZXNcblxuLy8gICAgIFByb2plY3RzIGFycmF5XG4vLyAgICAgICAgIENyZWF0ZSBhIHByb2plY3Rcbi8vICAgICAgICAgRGVsZXRlIGEgcHJvamVjdFxuXG4vLyAgICAgQ29tcGxldGVkIFRvZG9zIGFycmF5P1xuXG5jb25zdCBhcHAgPSAoKCkgPT4ge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgLy8gdG9kbyBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5IH07XG4gICAgfVxuXG4gICAgLy8gUHJlLWZpbGwgdG9kb3MgYXJyYXlcbiAgICBjb25zdCB0b2RvMSA9IHRvZG9GYWN0b3J5KFwiSGFpcmN1dCBhdCA5XCIsIFwiSGFpcmN1dCBhdCA5IGF0IEdyZWF0IENsaXBzIHdpdGggQWFyb24gYXMgeW91ciBiYXJiZXJcIiwgXCIyMDIyLTAzLTE1XCIsIFwiUGVyc29uYWxcIiwgXCJtZWRpdW1cIik7XG4gICAgY29uc3QgdG9kbzIgPSB0b2RvRmFjdG9yeShcIlNob3AgZm9yIHBhaW50XCIsIFwiR28gdG8gU2hlcndpbiBXaWxsaWFtcyBuZXh0IHRvIGJhcmJlciBhbmQgcGljayBvdXQgc2FtcGxlIGNvbG9ycyBmb3IgZ3Vlc3QgYmVkcm9vbVwiLCBcIjIwMjItMDMtMTVcIiwgXCJQZXJzb25hbFwiLCBcIm5vcm1hbFwiKTtcbiAgICBjb25zdCB0b2RvMyA9IHRvZG9GYWN0b3J5KFwiU2VuZCB3b3JrIHNjaGVkdWxlXCIsIFwiRW1haWwgQm9iIG15IHdvcmsgc2NoZWR1bGUgZm9yIG5leHQgbW9udGhcIiwgXCIyMDIyLTAzLTE1XCIsIFwiV29ya1wiLCBcImhpZ2hcIik7XG4gICAgdG9kb3MucHVzaCh0b2RvMSwgdG9kbzIsIHRvZG8zKTtcblxuICAgIGV2ZW50cy5lbWl0KFwidG9kb3MgY2hhbmdlZFwiLCB0b2Rvcyk7XG5cbiAgICAvLyBQcmUtZmlsbCBwcm9qZWN0cyBhcnJheVxuICAgIHByb2plY3RzWzBdID0gXCJQZXJzb25hbFwiO1xuXG4gICAgZXZlbnRzLmVtaXQoXCJQcm9qZWN0cyBjaGFuZ2VkXCIsIHByb2plY3RzKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byB3aGVuIGEgdXNlciBhZGRzIG5ldyB0b2RvIG9yIHByb2plY3RcbiAgICBldmVudHMub24oXCJVc2VyIGlucHV0cyBuZXcgdG9kb1wiLCBhZGRUb2RvKTtcbiAgICBldmVudHMub24oXCJVc2VyIGlucHV0cyBuZXcgcHJvamVjdFwiLCBhZGRQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8odXNlcklucHV0KSB7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgZGF0ZTtcbiAgICAgICAgbGV0IHByb2plY3Q7XG4gICAgICAgIGxldCBwcmlvcml0eTtcblxuICAgICAgICAvLyBFcnJvciBjaGVjayB1c2VyIGlucHV0IGZyb20gYWRkVG9kb1BvcHVwXG4gICAgICAgIC8vICQkVE9ETzogQ2hlY2sgaWYgdGl0bGUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgaWYgKCF1c2VySW5wdXRbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBhZGQgdGl0bGUuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSB1c2VySW5wdXRbMF07XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjcmlwdGlvbiA9IHVzZXJJbnB1dFsxXTtcblxuICAgICAgICBpZiAoIXVzZXJJbnB1dFsyXSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGFkZCBkdWUgZGF0ZS5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gdXNlcklucHV0WzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1c2VySW5wdXRbM10pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBhc3NpZ24gdG8gYSBwcm9qZWN0LlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3QgPSB1c2VySW5wdXRbM107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXJJbnB1dFs0XSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHByaW9yaXR5IGxldmVsLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gdXNlcklucHV0WzRdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyB0b2RvIG9iamVjdCBhbmQgYWRkIHRvIGFycmF5XG4gICAgICAgIGNvbnN0IGFUb2RvID0gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0LCBwcmlvcml0eSk7XG4gICAgICAgIHRvZG9zLnB1c2goYVRvZG8pO1xuICAgICAgICBldmVudHMuZW1pdChcInRvZG9zIGNoYW5nZWRcIiwgdG9kb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QodXNlcklucHV0KSB7XG4gICAgICAgIGlmICghdXNlcklucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgYWRkIHRpdGxlLlwiKTtcbiAgICAgICAgICAgIC8vICQkIFRPRE86IE1vcmUgZXJyb3IgY2hlY2tpbmdcbiAgICAgICAgICAgICAgICAvLyBEb2VzIHRpdGxlIGFscmVhZHkgZXhpc3Q/XG4gICAgICAgICAgICAgICAgLy8gQ2hhcmFjdGVyIGxpbWl0c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaCh1c2VySW5wdXQpO1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJQcm9qZWN0cyBjaGFuZ2VkXCIsIHByb2plY3RzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHByb2plY3RzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7IiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCBhcHAgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzLCByZW5kZXJQcm9qZWN0TGlzdCB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuXG5cbmNvbnN0IGFkZFRvZG9Qb3B1cCA9ICgoKSA9PiB7XG4gICAgLy8gYWRkLXRvZG8gYnV0dG9uXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tYnV0dG9uXCIpO1xuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZGRUb2RvKTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRUb2RvKCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBBZGQgVG9kbyBQb3B1cFxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAgICAgY29uc3QgYWRkVG9kb1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkVG9kb1BvcHVwLmlkID0gXCJhZGQtdG9kby1wb3B1cFwiO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlci5pZCA9IFwiYWRkLXRvZG8taGVhZGVyXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIlxuICAgICAgICBhZGRUb2RvUG9wdXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnRlbnQuaWQgPSBcImFkZC10b2RvLWNvbnRlbnRcIjtcbiAgICAgICAgYWRkVG9kb1BvcHVwLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5pZCA9IFwiYWRkLXRvZG8tdGl0bGVcIjtcbiAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIkFkZCB0aXRsZVwiO1xuICAgICAgICB0aXRsZS5tYXhsZW5ndGggPSBcIjMwXCI7XG4gICAgICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlkID0gXCJhZGQtdG9kby1kZXNjcmlwdGlvblwiO1xuICAgICAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiQWRkIGRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLm1heGxlbmd0aCA9IFwiMTUwXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbHMgPSBcIjUwXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnJvd3MgPSBcIjRcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkYXRlTGFiZWwuZm9yID0gXCJhZGQtdG9kby1kYXRlXCI7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6IFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGUuaWQgPSBcImFkZC10b2RvLWRhdGVcIjtcbiAgICAgICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuZm9yID0gXCJhZGQtdG9kby1wcm9qZWN0XCI7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIHRvIHByb2plY3Q6IFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHByb2plY3RTZWxlY3QuaWQgPSBcImFkZC10b2RvLXByb2plY3RcIjtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgYXBwLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuZm9yID0gXCJhZGQtdG9kby1wcmlvcml0eVwiO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgcHJpb3JpdHkgbGV2ZWw6IFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcHJpb3JpdHkuaWQgPSBcImFkZC10b2RvLXByaW9yaXR5XCI7XG4gICAgICAgIHByaW9yaXR5LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eTEudmFsdWUgPSBcIm5vcm1hbFwiO1xuICAgICAgICBwcmlvcml0eTEudGV4dENvbnRlbnQgPSBcIk5vcm1hbFwiO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTEpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5Mi52YWx1ZSA9IFwibWVkXCI7XG4gICAgICAgIHByaW9yaXR5Mi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Mik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJpb3JpdHkzLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgICAgIHByaW9yaXR5My50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTMpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9IFwiYWRkLXRvZG8tYnV0dG9uLWNvbnRhaW5lclwiO1xuICAgICAgICBhZGRUb2RvUG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZS5pZCA9IFwiYWRkLXRvZG8tc2F2ZVwiO1xuICAgICAgICBzYXZlLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlKTtcblxuICAgICAgICAvLyBQdWJsaXNoIFwiQWRkIG5ldyB0b2RvXCIgZXZlbnRcbiAgICAgICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJVc2VyIGlucHV0cyBuZXcgdG9kb1wiLCBbdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbcHJvamVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSwgcHJpb3JpdHkub3B0aW9uc1twcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZV0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbC5pZCA9IFwiYWRkLXRvZG8tY2FuY2VsXCI7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIC8vIENhbmNlbCBidXR0b24gY2xvc2VzIHBvcHVwXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlQWRkVG9kb1BvcHVwKTtcblxuICAgICAgICAvLyBDcmVhdGUgdHJhbnNwYXJlbnQgb3ZlcmxheSBiZWhpbmQgcG9wdXBcbiAgICAgICAgY29uc3QgYWRkVG9kb092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRUb2RvT3ZlcmxheS5pZCA9IFwib3ZlcmxheVwiO1xuXG4gICAgICAgIC8vIElmIG5ldyB0b2RvIHN1Y2Nlc3NmdWxseSBhZGRlZCwgY2xvc2UgcG9wdXBcbiAgICAgICAgZXZlbnRzLm9uKFwidG9kb3MgY2hhbmdlZFwiLCByZW1vdmVBZGRUb2RvUG9wdXApO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYWRkVG9kb1BvcHVwKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhZGRUb2RvT3ZlcmxheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRkVG9kb1BvcHVwKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tcG9wdXBcIik7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5LnJlbW92ZUNoaWxkKGFkZFRvZG9Qb3B1cCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5LnJlbW92ZUNoaWxkKGFkZFRvZG9PdmVybGF5KSk7XG4gICAgfVxufSkoKTtcblxuY29uc3QgYWRkUHJvamVjdFBvcHVwID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUFkZFByb2plY3QpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3QoKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIEFkZCBUb2RvIFBvcHVwLiBBbmNob3IgdG8gc2lkZWJhci5cbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRQcm9qZWN0UG9wdXAuaWQgPSBcImFkZC1wcm9qZWN0LXBvcHVwXCI7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFBvcHVwKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXIuaWQgPSBcImFkZC1wcm9qZWN0LWhlYWRlclwiO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCJcbiAgICAgICAgYWRkUHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRpdGxlLmlkID0gXCJhZGQtcHJvamVjdC10aXRsZVwiO1xuICAgICAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiQWRkIHRpdGxlXCI7XG4gICAgICAgIHRpdGxlLm1heGxlbmd0aCA9IFwiMzBcIjtcbiAgICAgICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBhZGRQcm9qZWN0UG9wdXAuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9IFwiYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lclwiO1xuICAgICAgICBhZGRQcm9qZWN0UG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZS5pZCA9IFwiYWRkLXByb2plY3Qtc2F2ZVwiO1xuICAgICAgICBzYXZlLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlKTtcblxuICAgICAgICAvLyBTZW5kIHVzZXIgaW5wdXQgdG8gYXBwIGZvciBlcnJvciBjaGVja2luZ1xuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuZW1pdChcIlVzZXIgaW5wdXRzIG5ldyBwcm9qZWN0XCIsIHRpdGxlLnZhbHVlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImFkZC1wcm9qZWN0LWNhbmNlbFwiO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICAvLyBDcmVhdGUgdHJhbnNwYXJlbnQgb3ZlcmxheSBiZWhpbmQgcG9wdXBcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXkuaWQgPSBcIm92ZXJsYXlcIjtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgICAgICAvLyBXYXlzIHRvIGNsb3NlIHBvcHVwXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlQWRkUHJvamVjdFBvcHVwKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlQWRkUHJvamVjdFBvcHVwKTtcbiAgICAgICAgZXZlbnRzLm9uKFwiUHJvamVjdHMgY2hhbmdlZFwiLCByZW1vdmVBZGRQcm9qZWN0UG9wdXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFkZFByb2plY3RQb3B1cCgpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cFwiKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChhZGRQcm9qZWN0UG9wdXApO1xuICAgICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGVkaXRUb2RvUG9wdXAgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlFZGl0VG9kbyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXlFZGl0VG9kbyB9O1xufSkoKTtcblxuY29uc3QgZGVsZXRlVG9kb1BvcHVwID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkaXNwbGF5RGVsZXRlVG9kbyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXlEZWxldGVUb2RvIH07XG59KSgpO1xuXG5leHBvcnQgeyBlZGl0VG9kb1BvcHVwLCBkZWxldGVUb2RvUG9wdXAgfTsiLCIvL2V2ZW50cyAtIGEgc3VwZXItYmFzaWMgSmF2YXNjcmlwdCAocHVibGlzaCBzdWJzY3JpYmUpIHBhdHRlcm5cbi8vIENyZWRpdCB0byBAbGVhcm5jb2RlYWNhZGVteSBvbiBHaXRIdWJcblxudmFyIGV2ZW50cyA9IHtcbiAgICBldmVudHM6IHt9LFxuICAgIG9uOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudE5hbWUsIGZuKSB7XG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgZm4oZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==