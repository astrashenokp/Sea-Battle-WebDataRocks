/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image_82cdbe.png */ \"./src/image_82cdbe.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    background-image: linear-gradient(rgba(15, 43, 70, 0.7), rgba(15, 43, 70, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    text-align: center;\n    margin: 0;\n    padding: 20px;\n    color: white;\n}\n\n.header {\n    margin-bottom: 20px;\n}\n\n#game-status {\n    color: #333;\n    padding: 12px 24px;\n    border-radius: 6px;\n    background-color: #e0e0e0;\n    display: inline-block;\n    margin-bottom: 15px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n#controls {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    margin-bottom: 20px;\n}\n\n.action-btn {\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.action-btn:hover:not(:disabled) {\n    background-color: #45a049;\n}\n\n.ready-btn {\n    background-color: #2196F3;\n}\n\n.ready-btn:hover:not(:disabled) {\n    background-color: #1e88e5;\n}\n\n.play-again-btn {\n    display: none;\n    background-color: #f9a825;\n    color: #1b1b1b;\n}\n\n.play-again-btn:hover:not(:disabled) {\n    background-color: #fbc02d;\n}\n\n.action-btn:disabled {\n    background-color: #607d8b;\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n\n.boards-container {\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n    margin-top: 20px;\n    flex-wrap: wrap;\n}\n\n.board {\n    width: 404px !important;\n    height: 404px !important;\n    border: 3px solid #4a90d9;\n    background-color: #dff3ff;\n    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);\n    overflow: hidden !important;\n    position: relative !important;\n    contain: strict;\n}\n\n.board .wdr-root,\n.board .wdr-pivot-view,\n.board .wdr-grid-view,\n.board .wdr-content,\n.board .wdr-grid,\n.board .wdr-grid-layout {\n    position: absolute !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 400px !important;\n    height: 400px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    margin: 0 !important;\n}\n\n.board .wdr-grid-container {\n    position: absolute !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 400px !important;\n    height: 400px !important;\n    overflow: hidden !important;\n}\n\n.board .wdr-grid-sheet {\n    position: absolute !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 400px !important;\n    height: 400px !important;\n    overflow: hidden !important;\n}\n\n.board .wdr-cell:not(.battle-cell),\n.board .wdr-grid-h-scroll,\n.board .wdr-grid-v-scroll,\n.board .wdr-space,\n.board .wdr-grid-column-captions,\n.board .wdr-grid-row-captions,\n.board .wdr-grid-headers,\n.board .wdr-ui-element,\n.board .wdr-sheet-selection-canvas,\n.board .wdr-sheet-selection-canvas-outer {\n    display: none !important;\n}\n\n.board .wdr-cell.battle-cell {\n    width: 40px !important;\n    height: 40px !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: 1px solid #3c7fba !important;\n    box-sizing: border-box !important;\n    cursor: default;\n    position: absolute !important;\n    overflow: hidden !important;\n    font-size: 0 !important;\n    line-height: 0 !important;\n}\n\n.battle-grid-overlay {\n    position: absolute;\n    inset: 0;\n    z-index: 5;\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n    background-color: #86c7f2;\n}\n\n.battle-overlay-cell {\n    width: 40px;\n    height: 40px;\n    padding: 0;\n    margin: 0;\n    border: 1px solid #3c7fba;\n    box-sizing: border-box;\n    position: relative;\n    font-size: 0;\n}\n\nbutton.battle-overlay-cell {\n    cursor: crosshair;\n}\n\nbutton.battle-overlay-cell:hover {\n    filter: brightness(1.14);\n}\n\n.cell-water {\n    background-color: #86c7f2 !important;\n}\n\n.cell-ship {\n    background-color: #384653 !important;\n}\n\n.cell-miss {\n    background-color: #86c7f2 !important;\n}\n\n.cell-miss::after {\n    content: '';\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background-color: #ffcc00;\n    border: 2px solid #5d3b00;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.45);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.cell-hit {\n    background-color: #b71c1c !important;\n}\n\n.cell-hit::before,\n.cell-hit::after {\n    content: '';\n    width: 26px;\n    height: 4px;\n    border-radius: 999px;\n    background-color: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\n.cell-hit::before {\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.cell-hit::after {\n    transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n#board-enemy .wdr-cell.battle-cell {\n    cursor: crosshair;\n}\n\n#board-enemy .wdr-cell.battle-cell:hover {\n    filter: brightness(1.14);\n}\n\n@media (max-width: 520px) {\n    body {\n        padding: 12px;\n    }\n\n    .boards-container {\n        gap: 24px;\n    }\n\n    .board {\n        width: min(400px, calc(100vw - 32px));\n        height: min(400px, calc(100vw - 32px));\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sea-battle/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://sea-battle/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://sea-battle/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://sea-battle/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://sea-battle/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sea-battle/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://sea-battle/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://sea-battle/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://sea-battle/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://sea-battle/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://sea-battle/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/gameBoard.js"
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateEmptyBoard: () => (/* binding */ generateEmptyBoard),\n/* harmony export */   generateRandomFleet: () => (/* binding */ generateRandomFleet),\n/* harmony export */   initWebDataRocks: () => (/* binding */ initWebDataRocks)\n/* harmony export */ });\nfunction generateRandomFleet() {\n    const grid = Array.from({ length: 10 }, () => Array(10).fill(0));\n    const fleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\n    let shipId = 1;\n\n    const canPlace = (r, c, size, isVertical) => {\n        if (isVertical && r + size > 10) return false;\n        if (!isVertical && c + size > 10) return false;\n\n        for (let i = -1; i <= size; i++) {\n            for (let j = -1; j <= 1; j++) {\n                const checkR = r + (isVertical ? i : j);\n                const checkC = c + (isVertical ? j : i);\n\n                if (checkR >= 0 && checkR < 10 && checkC >= 0 && checkC < 10) {\n                    if (grid[checkR][checkC] > 0) return false;\n                }\n            }\n        }\n\n        return true;\n    };\n\n    fleet.forEach(size => {\n        let placed = false;\n\n        while (!placed) {\n            const isVertical = Math.random() < 0.5;\n            const r = Math.floor(Math.random() * 10);\n            const c = Math.floor(Math.random() * 10);\n\n            if (canPlace(r, c, size, isVertical)) {\n                for (let i = 0; i < size; i++) {\n                    if (isVertical) grid[r + i][c] = shipId;\n                    else grid[r][c + i] = shipId;\n                }\n\n                shipId++;\n                placed = true;\n            }\n        }\n    });\n\n    const data = [];\n\n    for (let r = 0; r < 10; r++) {\n        for (let c = 0; c < 10; c++) {\n            const id = grid[r][c];\n            data.push({\n                x: String(c + 1),\n                y: String(r + 1),\n                status: id > 0 ? 1 : 0,\n                shipId: id > 0 ? id : null\n            });\n        }\n    }\n\n    return data;\n}\n\nfunction generateEmptyBoard() {\n    const data = [];\n\n    for (let r = 0; r < 10; r++) {\n        for (let c = 0; c < 10; c++) {\n            data.push({ x: String(c + 1), y: String(r + 1), status: 0 });\n        }\n    }\n\n    return data;\n}\n\nfunction initWebDataRocks(containerId, data, onCellClick) {\n    const container = document.querySelector(containerId);\n    if (!container) return { updateData: () => {} };\n\n    let currentData = data;\n    const boardId = containerId.replace('#', '');\n    let renderedColumns = [];\n    let renderedRows = [];\n\n    const getCell = (boardData, x, y) => {\n        return boardData.find(cell => cell.x === String(x) && cell.y === String(y));\n    };\n\n    const getStatusClass = (status) => {\n        if (status === 1) return 'cell-ship';\n        if (status === 2) return 'cell-miss';\n        if (status === 3) return 'cell-hit';\n        return 'cell-water';\n    };\n\n    const renderBattleGridOverlay = () => {\n        let overlay = container.querySelector('.battle-grid-overlay');\n\n        if (!overlay) {\n            overlay = document.createElement('div');\n            overlay.className = 'battle-grid-overlay';\n            container.appendChild(overlay);\n        }\n\n        overlay.innerHTML = '';\n\n        for (let y = 1; y <= 10; y++) {\n            for (let x = 1; x <= 10; x++) {\n                const cellData = getCell(currentData, x, y) || { status: 0 };\n                const cell = document.createElement(onCellClick ? 'button' : 'div');\n\n                cell.id = `cell-${boardId}-${x}-${y}`;\n                cell.className = `battle-overlay-cell ${getStatusClass(cellData.status)}`;\n                cell.dataset.x = String(x);\n                cell.dataset.y = String(y);\n                cell.setAttribute('aria-label', `Cell ${x}, ${y}`);\n\n                if (onCellClick) {\n                    cell.type = 'button';\n                    cell.addEventListener('click', () => onCellClick(String(x), String(y)));\n                }\n\n                overlay.appendChild(cell);\n            }\n        }\n    };\n\n    const applyCellIdsByLoop = () => {\n        renderBattleGridOverlay();\n\n        container.querySelectorAll('.battle-marker').forEach(marker => {\n            const cell = marker.closest('.wdr-cell');\n            if (!cell) return;\n\n            cell.classList.add('battle-cell');\n            cell.dataset.wdrColumn = marker.dataset.wdrColumn;\n            cell.dataset.wdrRow = marker.dataset.wdrRow;\n        });\n\n        const battleCells = Array.from(container.querySelectorAll('.wdr-cell.battle-cell'));\n        const columns = [...new Set(battleCells.map(cell => Number(cell.dataset.wdrColumn)).filter(Number.isFinite))]\n            .sort((a, b) => a - b)\n            .slice(0, 10);\n        const rows = [...new Set(battleCells.map(cell => Number(cell.dataset.wdrRow)).filter(Number.isFinite))]\n            .sort((a, b) => a - b)\n            .slice(0, 10);\n        renderedColumns = columns;\n        renderedRows = rows;\n\n        container.querySelectorAll(\n            [\n                '.wdr-cell:not(.battle-cell)',\n                '.wdr-grid-h-scroll',\n                '.wdr-grid-v-scroll',\n                '.wdr-space',\n                '.wdr-grid-column-captions',\n                '.wdr-grid-row-captions',\n                '.wdr-grid-headers',\n                '.wdr-ui-element',\n                '.wdr-sheet-selection-canvas',\n                '.wdr-sheet-selection-canvas-outer'\n            ].join(', ')\n        ).forEach(element => element.style.setProperty('display', 'none', 'important'));\n\n        container.querySelectorAll(\n            '.wdr-root, .wdr-pivot-view, .wdr-grid-view, .wdr-content, .wdr-grid, .wdr-grid-layout'\n        ).forEach(element => {\n            element.style.setProperty('position', 'absolute', 'important');\n            element.style.setProperty('top', '0', 'important');\n            element.style.setProperty('left', '0', 'important');\n            element.style.setProperty('width', '400px', 'important');\n            element.style.setProperty('height', '400px', 'important');\n            element.style.setProperty('overflow', 'hidden', 'important');\n            element.style.setProperty('padding', '0', 'important');\n            element.style.setProperty('margin', '0', 'important');\n        });\n\n        const gridSheet = container.querySelector('.wdr-grid-sheet');\n        if (gridSheet) {\n            gridSheet.style.setProperty('position', 'absolute', 'important');\n            gridSheet.style.setProperty('top', '0', 'important');\n            gridSheet.style.setProperty('left', '0', 'important');\n            gridSheet.style.setProperty('width', '400px', 'important');\n            gridSheet.style.setProperty('height', '400px', 'important');\n            gridSheet.style.setProperty('overflow', 'hidden', 'important');\n        }\n\n        const gridContainer = container.querySelector('.wdr-grid-container');\n        if (gridContainer) {\n            gridContainer.style.setProperty('top', '0', 'important');\n            gridContainer.style.setProperty('left', '0', 'important');\n            gridContainer.style.setProperty('width', '400px', 'important');\n            gridContainer.style.setProperty('height', '400px', 'important');\n            gridContainer.style.setProperty('overflow', 'hidden', 'important');\n        }\n\n        const stateClasses = ['cell-water', 'cell-ship', 'cell-miss', 'cell-hit'];\n\n        for (let y = 1; y <= 10; y++) {\n            for (let x = 1; x <= 10; x++) {\n                const columnIndex = columns[x - 1];\n                const rowIndex = rows[y - 1];\n                const cell = container.querySelector(`.battle-cell[data-wdr-column=\"${columnIndex}\"][data-wdr-row=\"${rowIndex}\"]`);\n                const cellData = getCell(currentData, x, y) || { status: 0 };\n\n                if (!cell) continue;\n\n                cell.id = `cell-${boardId}-${x}-${y}`;\n                cell.dataset.x = String(x);\n                cell.dataset.y = String(y);\n                cell.classList.add('battle-cell');\n                cell.classList.remove(...stateClasses);\n                cell.classList.add(getStatusClass(cellData.status));\n                cell.setAttribute('aria-label', `Cell ${x}, ${y}`);\n\n                cell.style.setProperty('position', 'absolute', 'important');\n                cell.style.setProperty('left', `${(x - 1) * 40}px`, 'important');\n                cell.style.setProperty('top', `${(y - 1) * 40}px`, 'important');\n                cell.style.setProperty('width', '40px', 'important');\n                cell.style.setProperty('height', '40px', 'important');\n                cell.style.setProperty('min-width', '0', 'important');\n                cell.style.setProperty('padding', '0', 'important');\n                cell.style.setProperty('display', 'block', 'important');\n                cell.style.setProperty('visibility', 'visible', 'important');\n                cell.style.setProperty('opacity', '1', 'important');\n                cell.style.setProperty('overflow', 'hidden', 'important');\n            }\n        }\n    };\n\n    const pivot = new WebDataRocks({\n        container: containerId,\n        toolbar: false,\n        report: {\n            dataSource: { data },\n            slice: {\n                rows: [{ uniqueName: 'y' }],\n                columns: [{ uniqueName: 'x' }],\n                measures: [{\n                    uniqueName: 'status',\n                    aggregation: 'max',\n                    width: 40\n                }]\n            },\n            options: {\n                grid: {\n                    showHeaders: false,\n                    showGrandTotals: 'off',\n                    showTotals: 'off',\n                    showFilter: false,\n                    showReportFiltersArea: false,\n                    cellsPerPage: 100,\n                    type: 'classic'\n                },\n                configuratorActive: false,\n                configuratorButton: false,\n                drillThrough: false,\n                sorting: 'off'\n            },\n            formats: [{\n                name: '',\n                nullValue: ' ',\n                maxDecimalPlaces: 0\n            }]\n        },\n        reportcomplete: () => setTimeout(applyCellIdsByLoop, 0),\n        reportchange: () => setTimeout(applyCellIdsByLoop, 0),\n        aftergriddraw: applyCellIdsByLoop,\n        customizeCell: (cellBuilder, cellData) => {\n            if (cellData.type !== 'value') return;\n\n            const columnIndex = Number(cellData.columnIndex);\n            const rowIndex = Number(cellData.rowIndex);\n\n            cellBuilder.attr = {\n                ...cellBuilder.attr,\n                'data-wdr-column': String(columnIndex),\n                'data-wdr-row': String(rowIndex)\n            };\n            cellBuilder.style = {\n                ...cellBuilder.style,\n                position: 'absolute',\n                width: '40px',\n                height: '40px',\n                minWidth: '0',\n                padding: '0',\n                visibility: 'visible',\n                opacity: '1',\n                overflow: 'hidden'\n            };\n            cellBuilder.text = `<span class=\"battle-marker\" data-wdr-column=\"${columnIndex}\" data-wdr-row=\"${rowIndex}\"></span>`;\n            cellBuilder.addClass('battle-cell');\n            cellBuilder.addClass(getStatusClass(Number(cellData.value)));\n        }\n    });\n\n    pivot.on('reportcomplete', applyCellIdsByLoop);\n    pivot.on('update', () => setTimeout(applyCellIdsByLoop, 0));\n    setTimeout(applyCellIdsByLoop, 0);\n    setTimeout(applyCellIdsByLoop, 100);\n\n    pivot.on('cellclick', (cell) => {\n        if (cell.type === 'value' && onCellClick) {\n            const x = renderedColumns.indexOf(Number(cell.columnIndex)) + 1;\n            const y = renderedRows.indexOf(Number(cell.rowIndex)) + 1;\n\n            if (x > 0 && y > 0) {\n                onCellClick(String(x), String(y));\n            }\n        }\n    });\n\n    const updateWebDataRocks = pivot.updateData.bind(pivot);\n\n    pivot.updateData = (newDataSource) => {\n        currentData = newDataSource.data || currentData;\n        renderBattleGridOverlay();\n        const result = updateWebDataRocks(newDataSource);\n        setTimeout(applyCellIdsByLoop, 0);\n        return result;\n    };\n\n    return pivot;\n}\n\n\n//# sourceURL=webpack://sea-battle/./src/gameBoard.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n\nconst statusElement = document.getElementById('game-status');\nconst randomizeBtn = document.getElementById('randomize-btn');\nconst readyBtn = document.getElementById('ready-btn');\nconst playAgainBtn = document.getElementById('play-again-btn');\nconst controls = document.getElementById('controls');\n\nlet myBoardData = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.generateRandomFleet)();\nlet enemyBoardData = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.generateEmptyBoard)();\n\nlet myPivot = null;\nlet enemyPivot = null;\nlet ws = null;\nlet myPlayerId = null;\n\nlet isMyTurn = false;\nlet enemyHitsOnMe = 0;\nlet gameStarted = false;\nlet amIReady = false;\n\nconst bgMusic = new Audio('./music.mp3');\nbgMusic.loop = true;\n\nconst formatCoord = (x, y) => `(${x}, ${y})`;\n\nconst showGameControls = () => {\n    if (controls) controls.style.display = 'flex';\n    if (randomizeBtn) randomizeBtn.style.display = '';\n    if (readyBtn) readyBtn.style.display = '';\n    if (playAgainBtn) playAgainBtn.style.display = 'none';\n};\n\nconst showPlayAgain = () => {\n    if (controls) controls.style.display = 'flex';\n    if (randomizeBtn) randomizeBtn.style.display = 'none';\n    if (readyBtn) readyBtn.style.display = 'none';\n    if (playAgainBtn) playAgainBtn.style.display = 'inline-block';\n};\n\nconst resetLocalGame = () => {\n    myBoardData = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.generateRandomFleet)();\n    enemyBoardData = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.generateEmptyBoard)();\n    myPlayerId = null;\n    isMyTurn = false;\n    enemyHitsOnMe = 0;\n    gameStarted = false;\n    amIReady = false;\n\n    if (myPivot) myPivot.updateData({ data: myBoardData });\n    if (enemyPivot) enemyPivot.updateData({ data: enemyBoardData });\n    if (randomizeBtn) randomizeBtn.disabled = false;\n    if (readyBtn) readyBtn.disabled = !(ws && ws.readyState === WebSocket.OPEN);\n\n    showGameControls();\n    statusElement.innerText = 'New round! Prepare your fleet and click Ready.';\n    statusElement.style.backgroundColor = '#e3f2fd';\n};\n\ndocument.addEventListener('click', () => {\n    bgMusic.play().catch(() => {});\n}, { once: true });\n\nwindow.addEventListener('beforeunload', (e) => {\n    e.preventDefault();\n    e.returnValue = '';\n});\n\nif (randomizeBtn) {\n    randomizeBtn.addEventListener('click', () => {\n        if (!amIReady && !gameStarted) {\n            myBoardData = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.generateRandomFleet)();\n            myPivot.updateData({ data: myBoardData });\n        }\n    });\n}\n\nif (readyBtn) {\n    readyBtn.addEventListener('click', () => {\n        if (ws && ws.readyState === WebSocket.OPEN) {\n            amIReady = true;\n            randomizeBtn.disabled = true;\n            readyBtn.disabled = true;\n            statusElement.innerText = 'Waiting for opponent to get ready...';\n            statusElement.style.backgroundColor = '#fff3e0';\n            ws.send(JSON.stringify({ type: 'READY' }));\n        }\n    });\n}\n\nif (playAgainBtn) {\n    playAgainBtn.addEventListener('click', () => {\n        if (ws && ws.readyState === WebSocket.OPEN) {\n            ws.send(JSON.stringify({ type: 'PLAY_AGAIN' }));\n        } else {\n            resetLocalGame();\n        }\n    });\n}\n\nconst wsUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')\n    ? 'ws://localhost:8080'\n    : `${window.location.protocol === 'https:' ? 'wss' : 'ws'}://${window.location.host}`;\n\nws = new WebSocket(wsUrl);\n\nws.onopen = () => {\n    statusElement.innerText = 'Connected! Waiting for opponent...';\n    statusElement.style.backgroundColor = '#fff3e0';\n};\n\nws.onmessage = (event) => {\n    const data = JSON.parse(event.data);\n\n    if (data.type === 'connected') {\n        statusElement.innerText = data.message;\n        statusElement.style.backgroundColor = '#e3f2fd';\n        if (!amIReady && readyBtn) readyBtn.disabled = false;\n    }\n    else if (data.type === 'OPPONENT_READY') {\n        if (!amIReady) {\n            statusElement.innerText = 'Opponent is ready! Click Ready to start.';\n            statusElement.style.backgroundColor = '#fff9c4';\n        }\n    }\n    else if (data.type === 'start') {\n        gameStarted = true;\n        myPlayerId = data.player;\n        isMyTurn = (myPlayerId === 1);\n        statusElement.innerText = data.message;\n        statusElement.style.backgroundColor = isMyTurn ? '#c8e6c9' : '#ffe082';\n        if (controls) controls.style.display = 'none';\n    }\n    else if (data.type === 'error' || data.type === 'DISCONNECT') {\n        statusElement.innerText = data.message;\n        statusElement.style.backgroundColor = '#ffebee';\n        isMyTurn = false;\n        gameStarted = false;\n        showPlayAgain();\n    }\n    else if (data.type === 'PLAY_AGAIN') {\n        resetLocalGame();\n    }\n    else if (data.type === 'SHOOT') {\n        if (data.playerId !== myPlayerId) {\n            const targetCell = myBoardData.find(c => c.x === data.x && c.y === data.y);\n            let isHit = false;\n            let sunkSurrounding = [];\n\n            if (targetCell) {\n                if (targetCell.status === 1 || targetCell.status === 3) {\n                    targetCell.status = 3;\n                    isHit = true;\n                    enemyHitsOnMe++;\n\n                    if (targetCell.shipId) {\n                        const shipCells = myBoardData.filter(c => c.shipId === targetCell.shipId);\n                        const isSunk = shipCells.every(c => c.status === 3);\n\n                        if (isSunk) {\n                            shipCells.forEach(sc => {\n                                const shipX = parseInt(sc.x);\n                                const shipY = parseInt(sc.y);\n                                for (let dx = -1; dx <= 1; dx++) {\n                                    for (let dy = -1; dy <= 1; dy++) {\n                                        const nx = shipX + dx;\n                                        const ny = shipY + dy;\n                                        if (nx >= 1 && nx <= 10 && ny >= 1 && ny <= 10) {\n                                            const adjCell = myBoardData.find(c => c.x === String(nx) && c.y === String(ny));\n                                            if (adjCell && adjCell.status === 0) {\n                                                adjCell.status = 2;\n                                                sunkSurrounding.push({ x: adjCell.x, y: adjCell.y });\n                                            }\n                                        }\n                                    }\n                                }\n                            });\n                        }\n                    }\n                } else {\n                    targetCell.status = 2;\n                }\n                myPivot.updateData({ data: myBoardData });\n            }\n\n            ws.send(JSON.stringify({\n                type: 'RESULT',\n                playerId: myPlayerId,\n                x: data.x,\n                y: data.y,\n                hit: isHit,\n                gameOver: enemyHitsOnMe >= 20,\n                sunkSurrounding: sunkSurrounding\n            }));\n\n            if (enemyHitsOnMe >= 20) {\n                statusElement.innerText = 'FLEET DESTROYED! You lose...';\n                statusElement.style.backgroundColor = '#ffcdd2';\n                isMyTurn = false;\n                gameStarted = false;\n                showPlayAgain();\n            } else {\n                if (isHit) {\n                    isMyTurn = false;\n                    statusElement.innerText = `Enemy HIT at ${formatCoord(data.x, data.y)}! They get another turn.`;\n                    statusElement.style.backgroundColor = '#ffe082';\n                } else {\n                    isMyTurn = true;\n                    statusElement.innerText = `Enemy missed at ${formatCoord(data.x, data.y)}. Your turn!`;\n                    statusElement.style.backgroundColor = '#c8e6c9';\n                }\n            }\n        }\n    }\n    else if (data.type === 'RESULT') {\n        if (data.playerId !== myPlayerId) {\n            const targetCell = enemyBoardData.find(c => c.x === data.x && c.y === data.y);\n            if (targetCell) {\n                targetCell.status = data.hit ? 3 : 2;\n            }\n\n            if (data.sunkSurrounding && data.sunkSurrounding.length > 0) {\n                data.sunkSurrounding.forEach(coord => {\n                    const adjCell = enemyBoardData.find(c => c.x === coord.x && c.y === coord.y);\n                    if (adjCell) {\n                        adjCell.status = 2;\n                    }\n                });\n            }\n            enemyPivot.updateData({ data: enemyBoardData });\n\n            if (data.gameOver) {\n                statusElement.innerText = 'VICTORY! Enemy fleet destroyed!';\n                statusElement.style.backgroundColor = '#c8e6c9';\n                isMyTurn = false;\n                gameStarted = false;\n                showPlayAgain();\n            } else {\n                if (data.hit) {\n                    isMyTurn = true;\n                    statusElement.innerText = `You HIT at ${formatCoord(data.x, data.y)}! Shoot again!`;\n                    statusElement.style.backgroundColor = '#c8e6c9';\n                } else {\n                    isMyTurn = false;\n                    statusElement.innerText = `You missed at ${formatCoord(data.x, data.y)}. Waiting for opponent...`;\n                    statusElement.style.backgroundColor = '#ffe082';\n                }\n            }\n        }\n    }\n};\n\nmyPivot = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.initWebDataRocks)(\"#board-mine\", myBoardData, null);\n\nenemyPivot = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.initWebDataRocks)(\"#board-enemy\", enemyBoardData, (x, y) => {\n    if (!gameStarted) {\n        alert(\"Game hasn't started yet! Press Ready and wait for opponent.\");\n        return;\n    }\n    if (!isMyTurn) {\n        alert(\"It's the opponent's turn! Please wait.\");\n        return;\n    }\n\n    isMyTurn = false;\n    statusElement.innerText = `Shooting at ${formatCoord(x, y)}...`;\n    statusElement.style.backgroundColor = '#e3f2fd';\n\n    ws.send(JSON.stringify({\n        type: 'SHOOT',\n        playerId: myPlayerId,\n        x: x,\n        y: y\n    }));\n});\n\n\n//# sourceURL=webpack://sea-battle/./src/index.js?\n}");

/***/ },

/***/ "./src/image_82cdbe.png"
/*!******************************!*\
  !*** ./src/image_82cdbe.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b224545ade0fe6bdd295.png\";\n\n//# sourceURL=webpack://sea-battle/./src/image_82cdbe.png?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;