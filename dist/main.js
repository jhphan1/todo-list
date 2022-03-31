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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 15px;\n    font-family: helvetica, sans-serif;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    --green: rgb(67, 212, 140);\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-column: 1/3;\n    background-color: var(--green);\n    color: rgb(255, 255, 255);\n    font-family: Roboto, sans-serif;\n    font-weight: bolder;\n    padding: 8px 24px;\n    font-size: 1.5rem;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#logo {\n    background-color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 24px;\n    font-weight: 500;\n    border-right: 1px solid rgb(184, 184, 184);\n    position: relative;\n}\n\n#sidebar img {\n    height: 1.5rem;\n    width: auto;\n}\n\n.menu,\n.submenu {\n    padding: 4px 0px;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.menu:hover,\n.submenu:hover {\n    font-weight: bolder;\n    opacity: 0.8;\n}\n\n#project-container {\n    padding: 8px 15px;\n}\n\n#main {\n    background-color: white;\n    padding: 55px 100px 30px 55px;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 1.3rem;\n    margin-bottom: 1rem;\n}\n\n.todo {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n}\n\n.todo-completed {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n    text-decoration: line-through;\n    opacity: 0.5;\n}\n\n.todo:hover {\n    background-color: whitesmoke;\n}\n\n.project-label {\n    grid-column: 4;\n    font-size: 0.85rem;\n    color: rgb(80, 80, 80);\n    justify-self: right;\n}\n\n.priority-normal,\n.priority-med,\n.priority-high {\n    grid-column: 5;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n\n.priority-normal {\n    background-color: rgb(190, 190, 190);\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-expanded {\n    grid-column: 1/6;\n    font-size: 0.9rem;\n    font-style: italic;\n    color: rgb(49, 49, 49);\n    padding: 0px 0px 0px 40px;\n}\n\n.expanded-todo-button-container {\n    margin-top: 8px;\n    text-align: right;\n}\n\n.expanded-todo-button-container button {\n    background-color: rgba(255, 255, 255, 0);\n    color: rgb(167, 167, 167);\n    border: 1px solid rgb(167, 167, 167);\n    border-radius: 5px;\n    margin-right: 15px;\n    font-size: 0.7rem;\n}\n\n#edit-todo-button:hover {\n    border-color: orange;\n    color: orange;\n    background-color: rgba(255, 166, 0, 0.1);\n}\n\n#trash-todo-button:hover {\n    border-color: red;\n    color: red;\n    background-color: rgba(255, 0, 0, 0.1);\n}\n\n#add-todo-button {\n    background-color: var(--green);\n    color: white;\n    font-size: 2rem;\n    border: 0;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 60px;\n    right: 60px;\n    cursor: pointer;\n}\n\n#add-todo-button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#overlay {\n    background-color: white;\n    opacity: 0.4;\n    z-index: 1000;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n.todo-popup {\n    background-color: white;\n    z-index: 2000;\n    position: fixed;\n    height: 320px;\n    width: 50vw;\n    top: 50%;\n    left: 50%;\n    margin-top: -160px;\n    margin-left: -25vw;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-todo-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#edit-todo-header {\n    background-color: orange;\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n.todo-popup-content {\n    padding: 8px 50px;\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 200px 1fr;\n    align-items: center;\n}\n\n.input-todo-title {\n    grid-column: 1/3;\n    border: 0;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n.input-todo-description {\n    grid-column: 1/3;\n    border: 0;\n    font-family: roboto, sans-serif;\n    resize: none;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n}\n\n.todo-popup-content label {\n    justify-self: end;\n}\n\n.todo-popup-content input[type=\"date\"],\n.todo-popup-content select {\n    border: 0;\n    background-color: rgb(238, 238, 238);\n    width: 270px;\n    height: 1.5rem;\n    justify-self: start;\n}\n\n.todo-popup-button-container {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n    margin-top: 12px;\n}\n\n.todo-popup button {\n    width: 100px;\n    border: 0;\n    border-radius: 8px;\n    padding: 8px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n}\n\n.todo-popup button:hover,\n#add-project-popup button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n.todo-popup .todo-popup-save {\n    background-color: var(--green);\n}\n\n#add-project-button {\n    margin-left: 100px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    color: red;\n}\n\n#add-project-button:hover {\n    transform: scale(1.3);\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#add-project-popup {\n    background-color: white;\n    z-index: 2000;\n    position: absolute;\n    height: 130px;\n    width: 250px;\n    top: 124px;\n    left: 240px;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-project-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-project-title {\n    border: 0;\n    font-size: 1rem;\n    margin: 8px 24px 0px 24px;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-project-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    margin-top: 12px;\n}\n\n#add-project-popup button {\n    width: 80px;\n    border: 0;\n    border-radius: 8px;\n    padding: 6px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n    font-size: 0.8rem;\n}\n\n#add-project-popup #add-project-save {\n    background-color: var(--green);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\n\n:root {\n    font-size: 15px;\n    font-family: helvetica, sans-serif;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    --green: rgb(67, 212, 140);\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-column: 1/3;\n    background-color: var(--green);\n    color: rgb(255, 255, 255);\n    font-family: Roboto, sans-serif;\n    font-weight: bolder;\n    padding: 8px 24px;\n    font-size: 1.5rem;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#logo {\n    background-color: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 24px;\n    font-weight: 500;\n    border-right: 1px solid rgb(184, 184, 184);\n    position: relative;\n}\n\n#sidebar img {\n    height: 1.5rem;\n    width: auto;\n}\n\n.menu,\n.submenu {\n    padding: 4px 0px;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.menu:hover,\n.submenu:hover {\n    font-weight: bolder;\n    opacity: 0.8;\n}\n\n#project-container {\n    padding: 8px 15px;\n}\n\n#main {\n    background-color: white;\n    padding: 55px 100px 30px 55px;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 1.3rem;\n    margin-bottom: 1rem;\n}\n\n.todo {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n}\n\n.todo-completed {\n    border-bottom: 1px solid whitesmoke;\n    padding: 8px 8px;\n    display: grid;\n    grid-template-columns: auto 1fr auto 100px auto;\n    align-items: center;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n    text-decoration: line-through;\n    opacity: 0.5;\n}\n\n.todo:hover {\n    background-color: whitesmoke;\n}\n\n.project-label {\n    grid-column: 4;\n    font-size: 0.85rem;\n    color: rgb(80, 80, 80);\n    justify-self: right;\n}\n\n.priority-normal,\n.priority-med,\n.priority-high {\n    grid-column: 5;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n\n.priority-normal {\n    background-color: rgb(190, 190, 190);\n}\n\n.priority-med {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-expanded {\n    grid-column: 1/6;\n    font-size: 0.9rem;\n    font-style: italic;\n    color: rgb(49, 49, 49);\n    padding: 0px 0px 0px 40px;\n}\n\n.expanded-todo-button-container {\n    margin-top: 8px;\n    text-align: right;\n}\n\n.expanded-todo-button-container button {\n    background-color: rgba(255, 255, 255, 0);\n    color: rgb(167, 167, 167);\n    border: 1px solid rgb(167, 167, 167);\n    border-radius: 5px;\n    margin-right: 15px;\n    font-size: 0.7rem;\n}\n\n#edit-todo-button:hover {\n    border-color: orange;\n    color: orange;\n    background-color: rgba(255, 166, 0, 0.1);\n}\n\n#trash-todo-button:hover {\n    border-color: red;\n    color: red;\n    background-color: rgba(255, 0, 0, 0.1);\n}\n\n#add-todo-button {\n    background-color: var(--green);\n    color: white;\n    font-size: 2rem;\n    border: 0;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 60px;\n    right: 60px;\n    cursor: pointer;\n}\n\n#add-todo-button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n#overlay {\n    background-color: white;\n    opacity: 0.4;\n    z-index: 1000;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n.todo-popup {\n    background-color: white;\n    z-index: 2000;\n    position: fixed;\n    height: 320px;\n    width: 50vw;\n    top: 50%;\n    left: 50%;\n    margin-top: -160px;\n    margin-left: -25vw;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-todo-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#edit-todo-header {\n    background-color: orange;\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n.todo-popup-content {\n    padding: 8px 50px;\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 200px 1fr;\n    align-items: center;\n}\n\n.input-todo-title {\n    grid-column: 1/3;\n    border: 0;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n.input-todo-description {\n    grid-column: 1/3;\n    border: 0;\n    font-family: roboto, sans-serif;\n    resize: none;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n}\n\n.todo-popup-content label {\n    justify-self: end;\n}\n\n.todo-popup-content input[type=\"date\"],\n.todo-popup-content select {\n    border: 0;\n    background-color: rgb(238, 238, 238);\n    width: 270px;\n    height: 1.5rem;\n    justify-self: start;\n}\n\n.todo-popup-button-container {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n    margin-top: 12px;\n}\n\n.todo-popup button {\n    width: 100px;\n    border: 0;\n    border-radius: 8px;\n    padding: 8px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n}\n\n.todo-popup button:hover,\n#add-project-popup button:hover {\n    box-shadow: 0px 0px 4px grey;\n    opacity: 0.9;\n}\n\n.todo-popup .todo-popup-save {\n    background-color: var(--green);\n}\n\n#add-project-button {\n    margin-left: 100px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    color: red;\n}\n\n#add-project-button:hover {\n    transform: scale(1.3);\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#add-project-popup {\n    background-color: white;\n    z-index: 2000;\n    position: absolute;\n    height: 130px;\n    width: 250px;\n    top: 124px;\n    left: 240px;\n    border-radius: 8px;\n    box-shadow: 0px 0px 5px grey;\n}\n\n#add-project-header {\n    background-color: var(--green);\n    color: white;\n    font-weight: bold;\n    border-radius: 8px 8px 0 0;\n    padding: 8px 15px;\n}\n\n#add-project-title {\n    border: 0;\n    font-size: 1rem;\n    margin: 8px 24px 0px 24px;\n    border-bottom: 1px solid grey;\n    height: 2rem;\n}\n\n#add-project-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    margin-top: 12px;\n}\n\n#add-project-popup button {\n    width: 80px;\n    border: 0;\n    border-radius: 8px;\n    padding: 6px;\n    color: white;\n    font-weight: bold;\n    background-color: grey;\n    font-size: 0.8rem;\n}\n\n#add-project-popup #add-project-save {\n    background-color: var(--green);\n}"],"sourceRoot":""}]);
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

        // Sort todos array by due date (ascending order)
        todos.sort((a, b) => {
            if (a.dueDate < b.dueDate) return -1;
            if (a.dueDate > b.dueDate) return 1;
            if (a.dueDate == b.dueDate) return 0;
        })

        // Sort completed todos to the bottom of list
        todos.sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            if (a.completed && b.completed || !a.completed && !b.completed) return 0;
        })

        // Render new todos list
        todos.forEach(todo => {
            const todoContainer = document.createElement("div");
            // Change appearance of todo based on 'completed' property
            if (todo.completed === false) {
                todoContainer.classList.add("todo");
            } else {
                todoContainer.classList.add("todo-completed");
            }

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            // Render with checked box if todo completed
            checkbox.checked = (todo.completed) ? true : false;
            // Tell app when user completes/un-completes todo
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit("User completes todo", todoTitle.textContent);
                } else {
                    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit("User un-completes todo", todoTitle.textContent);
                }
            })
            // Clicking checkbox doesn't expand todo
            checkbox.addEventListener("click", e => e.stopPropagation());
            
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
        let completed = false;
        return { title, description, dueDate, project, priority, completed };
    }

    // Pre-fill todos array
    const todo1 = todoFactory("Haircut at 9", "Haircut at 9 at Great Clips with Aaron as your barber", "2022-03-17", "Personal", "medium");
    const todo2 = todoFactory("Shop for paint", "Go to Sherwin Williams next to barber and pick out sample colors for guest bedroom", "2022-03-16", "Personal", "normal");
    const todo3 = todoFactory("Send work schedule", "Email Bob my work schedule for next month", "2022-03-23", "Work", "high");
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
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User completes todo", completeTodo);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on("User un-completes todo", uncompleteTodo);

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

    function completeTodo(targetObject) {
        todos.forEach(todo => {
            if (todo.title === targetObject) {
                todo.completed = true;
            }
        });

        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit("todos changed", todos);
    }

    function uncompleteTodo(targetObject) {
        todos.forEach(todo => {
            if (todo.title === targetObject) {
                todo.completed = false;
            }
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFh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OztBQUVBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBUztBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsNERBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLCtEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvREFBVztBQUN2QixTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0RBQVM7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeFZEO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7O1VDNUJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICAtLWdyZWVuOiByZ2IoNjcsIDIxMiwgMTQwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc2lkZWJhciBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5tZW51LFxcbi5zdWJtZW51IHtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51OmhvdmVyLFxcbi5zdWJtZW51OmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNTVweCAxMDBweCAzMHB4IDU1cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIDEwMHB4IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tY29tcGxldGVkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byAxMDBweCBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICByb3ctZ2FwOiAwLjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLnByb2plY3QtbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogNDtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4ucHJpb3JpdHktbm9ybWFsLFxcbi5wcmlvcml0eS1tZWQsXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBncmlkLWNvbHVtbjogNTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9ybWFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tZXhwYW5kZWQge1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA0MHB4O1xcbn1cXG5cXG4uZXhwYW5kZWQtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmV4cGFuZGVkLXRvZG8tYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBjb2xvcjogcmdiKDE2NywgMTY3LCAxNjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY3LCAxNjcsIDE2Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuI2VkaXQtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC4xKTtcXG59XFxuXFxuI3RyYXNoLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4jYWRkLXRvZG8tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNjBweDtcXG4gICAgcmlnaHQ6IDYwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnRvZG8tcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTE2MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggZ3JleTtcXG59XFxuXFxuI2FkZC10b2RvLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jZWRpdC10b2RvLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4udG9kby1wb3B1cC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogOHB4IDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXRvZG8tdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmlucHV0LXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnRvZG8tcG9wdXAtY29udGVudCBsYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udG9kby1wb3B1cC1jb250ZW50IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4udG9kby1wb3B1cC1jb250ZW50IHNlbGVjdCB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbiAgICB3aWR0aDogMjcwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udG9kby1wb3B1cC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLnRvZG8tcG9wdXAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4udG9kby1wb3B1cCBidXR0b246aG92ZXIsXFxuI2FkZC1wcm9qZWN0LXBvcHVwIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnRvZG8tcG9wdXAgLnRvZG8tcG9wdXAtc2F2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjAwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHRvcDogMTI0cHg7XFxuICAgIGxlZnQ6IDI0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGdyZXk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXRpdGxlIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogOHB4IDI0cHggMHB4IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwICNhZGQtcHJvamVjdC1zYXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFX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RUE7SUFDSSw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICAtLWdyZWVuOiByZ2IoNjcsIDIxMiwgMTQwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc2lkZWJhciBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5tZW51LFxcbi5zdWJtZW51IHtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51OmhvdmVyLFxcbi5zdWJtZW51OmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNTVweCAxMDBweCAzMHB4IDU1cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIDEwMHB4IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tY29tcGxldGVkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byAxMDBweCBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICByb3ctZ2FwOiAwLjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLnByb2plY3QtbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogNDtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4ucHJpb3JpdHktbm9ybWFsLFxcbi5wcmlvcml0eS1tZWQsXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBncmlkLWNvbHVtbjogNTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9ybWFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tZXhwYW5kZWQge1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA0MHB4O1xcbn1cXG5cXG4uZXhwYW5kZWQtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmV4cGFuZGVkLXRvZG8tYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBjb2xvcjogcmdiKDE2NywgMTY3LCAxNjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY3LCAxNjcsIDE2Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuI2VkaXQtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC4xKTtcXG59XFxuXFxuI3RyYXNoLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4jYWRkLXRvZG8tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNjBweDtcXG4gICAgcmlnaHQ6IDYwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnRvZG8tcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTE2MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggZ3JleTtcXG59XFxuXFxuI2FkZC10b2RvLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jZWRpdC10b2RvLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4udG9kby1wb3B1cC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogOHB4IDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXRvZG8tdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmlucHV0LXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnRvZG8tcG9wdXAtY29udGVudCBsYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udG9kby1wb3B1cC1jb250ZW50IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4udG9kby1wb3B1cC1jb250ZW50IHNlbGVjdCB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbiAgICB3aWR0aDogMjcwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udG9kby1wb3B1cC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLnRvZG8tcG9wdXAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4udG9kby1wb3B1cCBidXR0b246aG92ZXIsXFxuI2FkZC1wcm9qZWN0LXBvcHVwIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnRvZG8tcG9wdXAgLnRvZG8tcG9wdXAtc2F2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjAwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHRvcDogMTI0cHg7XFxuICAgIGxlZnQ6IDI0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGdyZXk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXRpdGxlIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogOHB4IDI0cHggMHB4IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwICNhZGQtcHJvamVjdC1zYXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBlZGl0VG9kb1BvcHVwIH0gZnJvbSBcIi4vcG9wdXBzXCI7XG5cbmNvbnN0IHJlbmRlckFsbFRhc2tzID0gKCgpID0+IHtcbiAgICBldmVudHMub24oXCJ0b2RvcyBjaGFuZ2VkXCIsIHJlbmRlcik7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIodG9kb3MpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcblxuICAgICAgICAvLyBSZW1vdmUgY3VycmVudCB0b2RvIGVsZW1lbnRzXG4gICAgICAgIHdoaWxlIChtYWluLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgLy8gU29ydCB0b2RvcyBhcnJheSBieSBkdWUgZGF0ZSAoYXNjZW5kaW5nIG9yZGVyKVxuICAgICAgICB0b2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChhLmR1ZURhdGUgPT0gYi5kdWVEYXRlKSByZXR1cm4gMDtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBTb3J0IGNvbXBsZXRlZCB0b2RvcyB0byB0aGUgYm90dG9tIG9mIGxpc3RcbiAgICAgICAgdG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuY29tcGxldGVkICYmICFiLmNvbXBsZXRlZCkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoIWEuY29tcGxldGVkICYmIGIuY29tcGxldGVkKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoYS5jb21wbGV0ZWQgJiYgYi5jb21wbGV0ZWQgfHwgIWEuY29tcGxldGVkICYmICFiLmNvbXBsZXRlZCkgcmV0dXJuIDA7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gUmVuZGVyIG5ldyB0b2RvcyBsaXN0XG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIC8vIENoYW5nZSBhcHBlYXJhbmNlIG9mIHRvZG8gYmFzZWQgb24gJ2NvbXBsZXRlZCcgcHJvcGVydHlcbiAgICAgICAgICAgIGlmICh0b2RvLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgLy8gUmVuZGVyIHdpdGggY2hlY2tlZCBib3ggaWYgdG9kbyBjb21wbGV0ZWRcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSAodG9kby5jb21wbGV0ZWQpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgLy8gVGVsbCBhcHAgd2hlbiB1c2VyIGNvbXBsZXRlcy91bi1jb21wbGV0ZXMgdG9kb1xuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJVc2VyIGNvbXBsZXRlcyB0b2RvXCIsIHRvZG9UaXRsZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJVc2VyIHVuLWNvbXBsZXRlcyB0b2RvXCIsIHRvZG9UaXRsZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIENsaWNraW5nIGNoZWNrYm94IGRvZXNuJ3QgZXhwYW5kIHRvZG9cbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1sYWJlbFwiKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdDtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW5vcm1hbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy8gSGlkZGVuIGVsZW1lbnRzIHRoYXQgZXhwYW5kIHdoZW4gdG9kbyBpcyBjbGlja2VkXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVG9nZ2xlIG9uL29mZlxuICAgICAgICAgICAgICAgIGlmICh0b2RvQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRXhwYW5kZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRXhwYW5kZWQuY2xhc3NMaXN0LmFkZChcInRvZG8tZXhwYW5kZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0V4cGFuZGVkKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkLXRvZG8tYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVkLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIGVkaXQuaWQgPSBcImVkaXQtdG9kby1idXR0b25cIjtcbiAgICAgICAgICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB0cmFzaC5pZCA9IFwidHJhc2gtdG9kby1idXR0b25cIjtcbiAgICAgICAgICAgICAgICAgICAgdHJhc2gudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQodHJhc2gpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldE9iamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJVc2VyIGRlbGV0ZXMgdG9kb1wiLCB0YXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kb1BvcHVwLmRpc3BsYXlFZGl0VG9kbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxufSkoKTtcblxuY29uc3QgcmVuZGVyUHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgZXZlbnRzLm9uKFwiUHJvamVjdHMgY2hhbmdlZFwiLCByZW5kZXIpXG5cbiAgICBmdW5jdGlvbiByZW5kZXIocHJvamVjdHMpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcHJvamVjdCBlbGVtZW50c1xuICAgICAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IGxpc3RcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc3VibWVudS5jbGFzc0xpc3QuYWRkKFwic3VibWVudVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vc3JjL2ltZy9wcm9qZWN0LWl0ZW0ucG5nXCI7XG4gICAgICAgICAgICBpY29uLmFsdCA9IFwicHJvamVjdC1pdGVtXCI7XG4gICAgICAgICAgICBzdWJtZW51LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgc3VibWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWVudSk7XG4gICAgICAgIH0pXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgcmVuZGVyQWxsVGFza3MsIHJlbmRlclByb2plY3RMaXN0IH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3MsIHJlbmRlclByb2plY3RMaXN0IH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgeyBlZGl0VG9kb1BvcHVwIH0gZnJvbSAnLi9wb3B1cHMnO1xuXG5cbmNvbnN0IGFwcCA9ICgoKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICAvLyB0b2RvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiB0b2RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgY29tcGxldGVkIH07XG4gICAgfVxuXG4gICAgLy8gUHJlLWZpbGwgdG9kb3MgYXJyYXlcbiAgICBjb25zdCB0b2RvMSA9IHRvZG9GYWN0b3J5KFwiSGFpcmN1dCBhdCA5XCIsIFwiSGFpcmN1dCBhdCA5IGF0IEdyZWF0IENsaXBzIHdpdGggQWFyb24gYXMgeW91ciBiYXJiZXJcIiwgXCIyMDIyLTAzLTE3XCIsIFwiUGVyc29uYWxcIiwgXCJtZWRpdW1cIik7XG4gICAgY29uc3QgdG9kbzIgPSB0b2RvRmFjdG9yeShcIlNob3AgZm9yIHBhaW50XCIsIFwiR28gdG8gU2hlcndpbiBXaWxsaWFtcyBuZXh0IHRvIGJhcmJlciBhbmQgcGljayBvdXQgc2FtcGxlIGNvbG9ycyBmb3IgZ3Vlc3QgYmVkcm9vbVwiLCBcIjIwMjItMDMtMTZcIiwgXCJQZXJzb25hbFwiLCBcIm5vcm1hbFwiKTtcbiAgICBjb25zdCB0b2RvMyA9IHRvZG9GYWN0b3J5KFwiU2VuZCB3b3JrIHNjaGVkdWxlXCIsIFwiRW1haWwgQm9iIG15IHdvcmsgc2NoZWR1bGUgZm9yIG5leHQgbW9udGhcIiwgXCIyMDIyLTAzLTIzXCIsIFwiV29ya1wiLCBcImhpZ2hcIik7XG4gICAgdG9kb3MucHVzaCh0b2RvMSwgdG9kbzIsIHRvZG8zKTtcblxuICAgIGV2ZW50cy5lbWl0KFwidG9kb3MgY2hhbmdlZFwiLCB0b2Rvcyk7XG5cbiAgICAvLyBQcmUtZmlsbCBwcm9qZWN0cyBhcnJheVxuICAgIHByb2plY3RzWzBdID0gXCJQZXJzb25hbFwiO1xuXG4gICAgZXZlbnRzLmVtaXQoXCJQcm9qZWN0cyBjaGFuZ2VkXCIsIHByb2plY3RzKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byB1c2VyIGlucHV0IGV2ZW50c1xuICAgIGV2ZW50cy5vbihcIlVzZXIgaW5wdXRzIG5ldyB0b2RvXCIsIGFkZFRvZG8pO1xuICAgIGV2ZW50cy5vbihcIlVzZXIgaW5wdXRzIG5ldyBwcm9qZWN0XCIsIGFkZFByb2plY3QpO1xuICAgIGV2ZW50cy5vbihcIlVzZXIgZWRpdHMgdG9kb1wiLCBlZGl0VG9kbyk7XG4gICAgZXZlbnRzLm9uKFwiVXNlciBkZWxldGVzIHRvZG9cIiwgZGVsZXRlVG9kbyk7XG4gICAgZXZlbnRzLm9uKFwiVXNlciBjb21wbGV0ZXMgdG9kb1wiLCBjb21wbGV0ZVRvZG8pO1xuICAgIGV2ZW50cy5vbihcIlVzZXIgdW4tY29tcGxldGVzIHRvZG9cIiwgdW5jb21wbGV0ZVRvZG8pO1xuXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh1c2VySW5wdXQpIHtcbiAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBkYXRlO1xuICAgICAgICBsZXQgcHJvamVjdDtcbiAgICAgICAgbGV0IHByaW9yaXR5O1xuXG4gICAgICAgIC8vIEVycm9yIGNoZWNrIHVzZXIgaW5wdXQgZnJvbSBhZGRUb2RvUG9wdXBcbiAgICAgICAgaWYgKCF1c2VySW5wdXRbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBhZGQgdGl0bGUuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLnRpdGxlID09PSB1c2VySW5wdXRbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJUaGF0IHRpdGxlIGFscmVhZHkgZXhpc3RzLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXRbMF0ubGVuZ3RoID4gNjApIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRpdGxlIGNhbm5vdCBleGNlZWQgNjAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZSA9IHVzZXJJbnB1dFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VySW5wdXRbMV0ubGVuZ3RoID4gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJEZXNjcmlwdGlvbiBjYW5ub3QgZXhjZWVkIDIwMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gdXNlcklucHV0WzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1c2VySW5wdXRbMl0pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBhZGQgZHVlIGRhdGUuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZSA9IHVzZXJJbnB1dFsyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlcklucHV0WzNdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgYXNzaWduIHRvIGEgcHJvamVjdC5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0ID0gdXNlcklucHV0WzNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1c2VySW5wdXRbNF0pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBwcmlvcml0eSBsZXZlbC5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmlvcml0eSA9IHVzZXJJbnB1dFs0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgdG9kbyBvYmplY3QgYW5kIGFkZCB0byBhcnJheVxuICAgICAgICBjb25zdCBhVG9kbyA9IHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpO1xuICAgICAgICB0b2Rvcy5wdXNoKGFUb2RvKTtcbiAgICAgICAgZXZlbnRzLmVtaXQoXCJ0b2RvcyBjaGFuZ2VkXCIsIHRvZG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHVzZXJJbnB1dCkge1xuICAgICAgICBpZiAoIXVzZXJJbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGFkZCB0aXRsZS5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QgPT09IHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRoYXQgdGl0bGUgYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dC5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUHJvamVjdCB0aXRsZSBjYW5ub3QgZXhjZWVkIDEyIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaCh1c2VySW5wdXQpO1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJQcm9qZWN0cyBjaGFuZ2VkXCIsIHByb2plY3RzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRUb2RvKHVzZXJJbnB1dCkge1xuICAgICAgICBsZXQgdGFyZ2V0VG9kbyA9IHVzZXJJbnB1dFs1XTtcbiAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBkYXRlO1xuICAgICAgICBsZXQgcHJvamVjdDtcbiAgICAgICAgbGV0IHByaW9yaXR5O1xuXG4gICAgICAgIC8vIEVycm9yIGNoZWNrIHVzZXIgaW5wdXQgZnJvbSBhZGRUb2RvUG9wdXBcbiAgICAgICAgaWYgKCF1c2VySW5wdXRbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBhZGQgdGl0bGUuXCIpO1xuICAgICAgICAvLyBDaGVja3MgaWYgdGl0bGUgYWxyZWFkeSBleGlzdHMgYW5kIGlzIGFsc28gbm90IHRoZSB0b2RvIGJlaW5nIGVkaXRlZFxuICAgICAgICB9IGVsc2UgaWYgKHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLnRpdGxlID09PSB1c2VySW5wdXRbMF0pICYmIHVzZXJJbnB1dFswXSAhPT0gdGFyZ2V0VG9kbykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVGhhdCB0aXRsZSBhbHJlYWR5IGV4aXN0cy5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0WzBdLmxlbmd0aCA+IDYwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJUaXRsZSBjYW5ub3QgZXhjZWVkIDYwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSB1c2VySW5wdXRbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlcklucHV0WzFdLmxlbmd0aCA+IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRGVzY3JpcHRpb24gY2Fubm90IGV4Y2VlZCAyMDAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHVzZXJJbnB1dFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlcklucHV0WzJdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgYWRkIGR1ZSBkYXRlLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGUgPSB1c2VySW5wdXRbMl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXJJbnB1dFszXSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGFzc2lnbiB0byBhIHByb2plY3QuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdCA9IHVzZXJJbnB1dFszXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlcklucHV0WzRdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWwuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJpb3JpdHkgPSB1c2VySW5wdXRbNF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFZGl0IHRvZG8gb2JqZWN0XG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50aXRsZSA9PT0gdGFyZ2V0VG9kbykge1xuICAgICAgICAgICAgICAgIHRvZG8udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgdG9kby5kdWVEYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICB0b2RvLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICAgICAgICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgZXZlbnRzLmVtaXQoXCJ0b2RvcyBjaGFuZ2VkXCIsIHRvZG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvKHRhcmdldE9iamVjdCkge1xuICAgICAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8udGl0bGUgIT09IHRhcmdldE9iamVjdCk7XG5cbiAgICAgICAgZXZlbnRzLmVtaXQoXCJ0b2RvcyBjaGFuZ2VkXCIsIHRvZG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZVRvZG8odGFyZ2V0T2JqZWN0KSB7XG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50aXRsZSA9PT0gdGFyZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudHMuZW1pdChcInRvZG9zIGNoYW5nZWRcIiwgdG9kb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY29tcGxldGVUb2RvKHRhcmdldE9iamVjdCkge1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udGl0bGUgPT09IHRhcmdldE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50cy5lbWl0KFwidG9kb3MgY2hhbmdlZFwiLCB0b2Rvcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG9kb3MsIHByb2plY3RzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7IiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCBhcHAgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzLCByZW5kZXJQcm9qZWN0TGlzdCB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuXG5cbmNvbnN0IGFkZFRvZG9Qb3B1cCA9ICgoKSA9PiB7XG4gICAgLy8gYWRkLXRvZG8gYnV0dG9uXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tYnV0dG9uXCIpO1xuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZGRUb2RvKTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRUb2RvKCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBBZGQgVG9kbyBQb3B1cFxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAgICAgY29uc3QgYWRkVG9kb1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkVG9kb1BvcHVwLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwXCIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlci5pZCA9IFwiYWRkLXRvZG8taGVhZGVyXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIlxuICAgICAgICBhZGRUb2RvUG9wdXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXAtY29udGVudFwiKTtcbiAgICAgICAgYWRkVG9kb1BvcHVwLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIkFkZCB0aXRsZVwiO1xuICAgICAgICB0aXRsZS5hdXRvZm9jdXMgPSBcInRydWVcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiQWRkIGRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbHMgPSBcIjUwXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnJvd3MgPSBcIjRcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkYXRlTGFiZWwuZm9yID0gXCJ0b2RvLWRhdGVcIjtcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICAgICAgZGF0ZS5pZCA9IFwidG9kby1kYXRlXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuZm9yID0gXCJ0b2RvLXByb2plY3RcIjtcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgdG8gcHJvamVjdDogXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5pZCA9IFwidG9kby1wcm9qZWN0XCI7XG5cbiAgICAgICAgYXBwLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuZm9yID0gXCJ0b2RvLXByaW9yaXR5XCI7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBwcmlvcml0eSBsZXZlbDogXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBwcmlvcml0eS5pZCA9IFwidG9kby1wcmlvcml0eVwiO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5MS52YWx1ZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIHByaW9yaXR5MS50ZXh0Q29udGVudCA9IFwiTm9ybWFsXCI7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5MSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJpb3JpdHkyLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICAgICAgcHJpb3JpdHkyLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkyKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eTMudmFsdWUgPSBcImhpZ2hcIjtcbiAgICAgICAgcHJpb3JpdHkzLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Myk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGFkZFRvZG9Qb3B1cC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzYXZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwLXNhdmVcIik7XG4gICAgICAgIHNhdmUudGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmUpO1xuXG4gICAgICAgIC8vIFB1Ymxpc2ggXCJBZGQgbmV3IHRvZG9cIiBldmVudFxuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuZW1pdChcIlVzZXIgaW5wdXRzIG5ldyB0b2RvXCIsIFt0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGUudmFsdWUsIHByb2plY3RTZWxlY3Qub3B0aW9uc1twcm9qZWN0U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlLCBwcmlvcml0eS5vcHRpb25zW3ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlXSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgLy8gQ2FuY2VsIGJ1dHRvbiBjbG9zZXMgcG9wdXBcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVBZGRUb2RvUG9wdXApO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0cmFuc3BhcmVudCBvdmVybGF5IGJlaGluZCBwb3B1cFxuICAgICAgICBjb25zdCBhZGRUb2RvT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZFRvZG9PdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG5cbiAgICAgICAgLy8gSWYgbmV3IHRvZG8gc3VjY2Vzc2Z1bGx5IGFkZGVkLCBjbG9zZSBwb3B1cFxuICAgICAgICBldmVudHMub24oXCJ0b2RvcyBjaGFuZ2VkXCIsIHJlbW92ZUFkZFRvZG9Qb3B1cCk7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhZGRUb2RvUG9wdXApO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFkZFRvZG9PdmVybGF5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZGRUb2RvUG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXBvcHVwXCIpO1xuICAgICAgICBjb25zdCBhZGRUb2RvT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keS5yZW1vdmVDaGlsZChhZGRUb2RvUG9wdXApKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keS5yZW1vdmVDaGlsZChhZGRUb2RvT3ZlcmxheSkpO1xuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGFkZFByb2plY3RQb3B1cCA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZGRQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRQcm9qZWN0KCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBBZGQgVG9kbyBQb3B1cC4gQW5jaG9yIHRvIHNpZGViYXIuXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkUHJvamVjdFBvcHVwLmlkID0gXCJhZGQtcHJvamVjdC1wb3B1cFwiO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RQb3B1cCk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyLmlkID0gXCJhZGQtcHJvamVjdC1oZWFkZXJcIjtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG4gICAgICAgIGFkZFByb2plY3RQb3B1cC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5pZCA9IFwiYWRkLXByb2plY3QtdGl0bGVcIjtcbiAgICAgICAgdGl0bGUuYXV0b2ZvY3VzID0gXCJ0cnVlXCI7XG4gICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJBZGQgdGl0bGVcIjtcbiAgICAgICAgYWRkUHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuaWQgPSBcImFkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIjtcbiAgICAgICAgYWRkUHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3Qgc2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmUuaWQgPSBcImFkZC1wcm9qZWN0LXNhdmVcIjtcbiAgICAgICAgc2F2ZS50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZSk7XG5cbiAgICAgICAgLy8gU2VuZCB1c2VyIGlucHV0IHRvIGFwcCBmb3IgZXJyb3IgY2hlY2tpbmdcbiAgICAgICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJVc2VyIGlucHV0cyBuZXcgcHJvamVjdFwiLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsLmlkID0gXCJhZGQtcHJvamVjdC1jYW5jZWxcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRyYW5zcGFyZW50IG92ZXJsYXkgYmVoaW5kIHBvcHVwXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAgICAgLy8gV2F5cyB0byBjbG9zZSBwb3B1cFxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUFkZFByb2plY3RQb3B1cCk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUFkZFByb2plY3RQb3B1cCk7XG4gICAgICAgIGV2ZW50cy5vbihcIlByb2plY3RzIGNoYW5nZWRcIiwgcmVtb3ZlQWRkUHJvamVjdFBvcHVwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZGRQcm9qZWN0UG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXBcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG4gICAgICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoYWRkUHJvamVjdFBvcHVwKTtcbiAgICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICB9XG59KSgpO1xuXG5jb25zdCBlZGl0VG9kb1BvcHVwID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkaXNwbGF5RWRpdFRvZG8oZSkge1xuICAgICAgICAvLyBGaW5kIHRvZG8gb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVkaXQgYnV0dG9uXG4gICAgICAgIGxldCB0YXJnZXRUb2RvID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVycyB0byBiZSB1c2VkIGluIGVkaXRUb2RvUG9wdXAgZm9ybVxuICAgICAgICBsZXQgdGl0bGVQbGFjZWhvbGRlcjtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uUGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBkYXRlUGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBwcm9qZWN0UGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBwcmlvcml0eVBsYWNlaG9sZGVyO1xuXG4gICAgICAgIGFwcC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udGl0bGUgPT09IHRhcmdldFRvZG8pIHtcbiAgICAgICAgICAgICAgICB0aXRsZVBsYWNlaG9sZGVyID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblBsYWNlaG9sZGVyID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBkYXRlUGxhY2Vob2xkZXIgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdFBsYWNlaG9sZGVyID0gdG9kby5wcm9qZWN0O1xuICAgICAgICAgICAgICAgIHByaW9yaXR5UGxhY2Vob2xkZXIgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIEVkaXQgVG9kbyBQb3B1cFxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVkaXRUb2RvUG9wdXAuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXBcIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyLmlkID0gXCJlZGl0LXRvZG8taGVhZGVyXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCJcbiAgICAgICAgZWRpdFRvZG9Qb3B1cC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3B1cC1jb250ZW50XCIpO1xuICAgICAgICBlZGl0VG9kb1BvcHVwLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSB0aXRsZVBsYWNlaG9sZGVyO1xuICAgICAgICB0aXRsZS5hdXRvZm9jdXMgPSB0cnVlO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImlucHV0LXRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb25QbGFjZWhvbGRlcjtcbiAgICAgICAgZGVzY3JpcHRpb24uY29scyA9IFwiNTBcIjtcbiAgICAgICAgZGVzY3JpcHRpb24ucm93cyA9IFwiNFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGRhdGVMYWJlbC5mb3IgPSBcInRvZG8tZGF0ZVwiO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOiBcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICBkYXRlLmlkID0gXCJ0b2RvLWRhdGVcIjtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IGRhdGVQbGFjZWhvbGRlcjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSBcInRvZG8tcHJvamVjdFwiO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCB0byBwcm9qZWN0OiBcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmlkID0gXCJ0b2RvLXByb2plY3RcIjtcblxuICAgICAgICBhcHAucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0UGxhY2Vob2xkZXI7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmZvciA9IFwidG9kby1wcmlvcml0eVwiO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgcHJpb3JpdHkgbGV2ZWw6IFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcHJpb3JpdHkuaWQgPSBcInRvZG8tcHJpb3JpdHlcIjtcblxuICAgICAgICBjb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcmlvcml0eTEudmFsdWUgPSBcIm5vcm1hbFwiO1xuICAgICAgICBwcmlvcml0eTEudGV4dENvbnRlbnQgPSBcIk5vcm1hbFwiO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTEpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByaW9yaXR5Mi52YWx1ZSA9IFwibWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5Mi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Mik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJpb3JpdHkzLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgICAgIHByaW9yaXR5My50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTMpO1xuXG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHlQbGFjZWhvbGRlcjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGVkaXRUb2RvUG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3B1cC1zYXZlXCIpO1xuICAgICAgICBzYXZlLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlKTtcblxuICAgICAgICAvLyBQdWJsaXNoIEVkaXQgVG9kbyBldmVudFxuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuZW1pdChcIlVzZXIgZWRpdHMgdG9kb1wiLCBbdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbcHJvamVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSwgcHJpb3JpdHkub3B0aW9uc1twcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZSwgdGFyZ2V0VG9kb10pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIC8vIENhbmNlbCBidXR0b24gY2xvc2VzIHBvcHVwXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRWRpdFRvZG9Qb3B1cCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRyYW5zcGFyZW50IG92ZXJsYXkgYmVoaW5kIHBvcHVwXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG5cbiAgICAgICAgLy8gSWYgbmV3IHRvZG8gc3VjY2Vzc2Z1bGx5IGVkaXRlZCwgY2xvc2UgcG9wdXBcbiAgICAgICAgZXZlbnRzLm9uKFwidG9kb3MgY2hhbmdlZFwiLCByZW1vdmVFZGl0VG9kb1BvcHVwKTtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVkaXRUb2RvUG9wdXApO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgICAgIC8vIENsaWNrIGV2ZW50IGxpc3RlbmVyIHN0b3BzIG9uIGJ1dHRvbiAoZG9lc24ndCBjb2xsYXBzZSBleHBhbmRlZCB0b2RvKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVkaXRUb2RvUG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wb3B1cFwiKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keS5yZW1vdmVDaGlsZChlZGl0VG9kb1BvcHVwKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXlFZGl0VG9kbyB9O1xufSkoKTtcblxuZXhwb3J0IHsgZWRpdFRvZG9Qb3B1cCB9OyIsIi8vZXZlbnRzIC0gYSBzdXBlci1iYXNpYyBKYXZhc2NyaXB0IChwdWJsaXNoIHN1YnNjcmliZSkgcGF0dGVyblxuLy8gQ3JlZGl0IHRvIEBsZWFybmNvZGVhY2FkZW15IG9uIEdpdEh1YlxuXG52YXIgZXZlbnRzID0ge1xuICAgIGV2ZW50czoge30sXG4gICAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBlbWl0OiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICBmbihkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9