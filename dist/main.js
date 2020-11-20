/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body, html {\\n  height: auto;\\n  width: 400px;\\n  margin: 0;\\n  padding: 0;\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\n}\\n\\n.modal-header {\\n  background-color: #88c5da;\\n}\\n.modal-header .header-container {\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  margin: 0;\\n  padding: 10px;\\n}\\n.modal-header .header-container .header-title {\\n  margin: 5px;\\n  font-size: 35px;\\n}\\n.modal-header .header-container .header-icon {\\n  margin: 5px;\\n  transition: 200ms ease-in-out;\\n  cursor: pointer;\\n}\\n.modal-header .header-container .header-icon:hover {\\n  transform: scale(1.3);\\n  color: #faa070;\\n}\\n\\n.modal-content {\\n  background-color: #faa070;\\n}\\n.modal-content .word-container {\\n  text-align: center;\\n  font-size: 28px;\\n  margin: 0;\\n  padding: 10px;\\n}\\n.modal-content hr {\\n  border: none;\\n  border-top: 3px solid #88c5da;\\n  border-radius: 5px;\\n  width: 90%;\\n}\\n.modal-content .definition-container {\\n  margin: 5px 5px 0px 5px;\\n  padding: 5px 20px;\\n  position: relative;\\n}\\n.modal-content .definition-container .part-of-speech {\\n  font-size: 18px;\\n  font-style: italic;\\n  margin-bottom: 10px;\\n}\\n.modal-content .definition-container .definition {\\n  font-size: 20px;\\n}\\n.modal-content .definition-container .error-container {\\n  font-size: 20px;\\n  text-align: center;\\n  padding: 10px;\\n  font-weight: 600;\\n}\\n.modal-content .definition-container:after {\\n  content: \\\"\\\";\\n  background: lightblue;\\n  position: absolute;\\n  height: 2px;\\n  bottom: 0;\\n  left: 50%;\\n  width: 30%;\\n  transform: translateX(-50%);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Word-of-The-Day/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Word-of-The-Day/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://Word-of-The-Day/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Word-of-The-Day/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _renderError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderError.js */ \"./src/renderError.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\r\n\r\n\r\n\r\n// Configuration object for Wordnik GET URLs\r\nconst Wordnik = {\r\n    apiKey: \"qexbnl8z23x2ptwjlymloyj6fd4zkcy7ddb6a2yjbrdiyttwk\",\r\n    hasDictionaryDef: \"true\",\r\n    limit: \"200\",\r\n    includeRelated: \"false\",\r\n    useCanonical: \"false\",\r\n    includeTags: \"false\",\r\n}\r\n\r\n// Using concatenation because tabbed string literals are formed with a newline. \r\n// Gets a random word json\r\nlet randomWordURL = \r\n    `http://api.wordnik.com/v4/words.json/randomWord?` +\r\n    `hasDictionaryDef=${Wordnik.hasDictionaryDef}&` +\r\n    `api_key=${Wordnik.apiKey}`\r\n\r\n\r\nconst getWordDefinitionURL = (word) => {\r\n    \r\n    let wordDefinitionURL = \r\n        `http://api.wordnik.com:80/v4/word.json/` +\r\n        `${word}/definitions?` +\r\n        `limit=${Wordnik.limit}&` +\r\n        `includeRelated=${Wordnik.includeRelated}&` +\r\n        `useCanonical=${Wordnik.useCanonical}&` +\r\n        `includeTags=${Wordnik.includeTags}&` +\r\n        `api_key=${Wordnik.apiKey}`\r\n\r\n    return wordDefinitionURL\r\n}\r\n\r\n\r\n// Gets word json from Wordnik servers\r\nconst getWordJSON = async () => {\r\n    const wordObject = await fetch(randomWordURL)\r\n    const wordJson = await wordObject.json()\r\n\r\n    if (wordObject.status != 200) throw wordObject.status\r\n    else return wordJson\r\n}\r\n\r\n// Gets definitions json from Wordnik servers\r\nconst getDefinitionsJSON = async (wordJSON) => {\r\n    const wordDefinition = await fetch(getWordDefinitionURL(wordJSON.word))\r\n    const wordDefinitionJson = await wordDefinition.json()\r\n\r\n    if (wordDefinition.status != 200) throw wordDefinition.status\r\n    else return wordDefinitionJson\r\n}\r\n\r\n// Takes word json and returns word\r\nconst getWord = (wordJSON) => {\r\n    let word = wordJSON.word\r\n    return word\r\n}\r\n\r\n// Take definitions json array and outputs array of definitions\r\nconst getDefinitions = (definitionJSON) => {\r\n    let definitions = []\r\n    \r\n    // Return all definitions or first 3 if larger than 3\r\n    for(let i=0; i<3 && i < definitionJSON.length; i++) {\r\n        definitions.push(definitionJSON[i])\r\n    }\r\n    \r\n    return definitions\r\n}\r\n\r\n// Main function which executes all above elements\r\nconst main = async () => {\r\n    try {\r\n        let wordJSON = await getWordJSON()\r\n        let definitionsJSON = await getDefinitionsJSON(wordJSON)\r\n        let word = getWord(wordJSON)\r\n        let definitions = getDefinitions(definitionsJSON)\r\n        ;(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.RenderWords)(word, definitions)\r\n    }\r\n    catch(err) {\r\n        (0,_renderError_js__WEBPACK_IMPORTED_MODULE_1__.RenderError)(err)\r\n    }\r\n}\r\n\r\n// Event listener to clear content and refresh with new word when book symbol pressed\r\nconst descriptionContainer = document.querySelector (\".description-container\")\r\nconst refresh = document.querySelector(\".header-icon\")\r\n\r\nrefresh.addEventListener(\"click\", () => {\r\n    descriptionContainer.innerHTML = \"\"\r\n    main()\r\n})\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Word-of-The-Day/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! namespace exports */
/*! export RenderWords [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderWords\": () => /* binding */ RenderWords\n/* harmony export */ });\nconst descriptionContainer = document.querySelector(\".description-container\")\r\n\r\n// Renders a new word along with its definitions\r\nconst RenderWords = (word, definitions) => {\r\n    // Create the word container to display the word\r\n    const wordContainer = document.createElement(\"h2\")\r\n    wordContainer.classList.add(\"word-container\")\r\n    wordContainer.textContent = word\r\n    descriptionContainer.appendChild(wordContainer)\r\n\r\n    // Create a horizontal rule to separate word from information\r\n    const horizontalRule = document.createElement(\"hr\")\r\n    descriptionContainer.appendChild(horizontalRule)\r\n    \r\n    // Iterate through each definition, creating dom element\r\n    definitions.forEach(def => {\r\n        // If for some reason there is no text associated with definition, skip iteration\r\n        if(def.text == undefined) return\r\n\r\n        // removes any formatting that comes with the text such as <xref> or <em>\r\n        const formatRegex = new RegExp(\"<.*?>\", \"g\") \r\n        let cleanText = def.text.replace(formatRegex, \"\")\r\n\r\n        // If part of speech (noun, verb, etc) is missing, use \"unknown\"\r\n        if(def.partOfSpeech == undefined) def.partOfSpeech = \"unknown\" \r\n\r\n        // Create container to house all information\r\n        const infoContainer = document.createElement(\"div\")\r\n        infoContainer.classList.add(\"definition-container\")\r\n\r\n        // Create container to house part of speech\r\n        const partOfSpeechContainer = document.createElement(\"div\")\r\n        partOfSpeechContainer.classList.add(\"part-of-speech\")\r\n        partOfSpeechContainer.textContent = def.partOfSpeech\r\n\r\n        // Create container to house definition\r\n        const definitionContainer = document.createElement(\"div\")\r\n        definitionContainer.classList.add(\"definition\")\r\n        definitionContainer.textContent = cleanText\r\n\r\n        // Append part of speech and definition to info container, then add break \r\n        infoContainer.appendChild(partOfSpeechContainer)\r\n        infoContainer.appendChild(definitionContainer)\r\n        infoContainer.appendChild(document.createElement(\"br\"))\r\n\r\n        // Append info container to high-level description container\r\n        descriptionContainer.appendChild(infoContainer)\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Word-of-The-Day/./src/render.js?");

/***/ }),

/***/ "./src/renderError.js":
/*!****************************!*\
  !*** ./src/renderError.js ***!
  \****************************/
/*! namespace exports */
/*! export RenderError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderError\": () => /* binding */ RenderError\n/* harmony export */ });\nconst descriptionContainer = document.querySelector(\".description-container\")\r\n\r\n// Render errors for user feedback\r\nconst RenderError = (err) => {\r\n\r\n    // Object container all HTTP codes\r\n    const statusCodes = { \r\n        '100': 'Continue',\r\n        '101': 'Switching Protocols',\r\n        '102': 'Processing',\r\n        '200': 'OK',\r\n        '201': 'Created',\r\n        '202': 'Accepted',\r\n        '203': 'Non-Authoritative Information',\r\n        '204': 'No Content',\r\n        '205': 'Reset Content',\r\n        '206': 'Partial Content',\r\n        '207': 'Multi-Status',\r\n        '300': 'Multiple Choices',\r\n        '301': 'Moved Permanently',\r\n        '302': 'Moved Temporarily',\r\n        '303': 'See Other',\r\n        '304': 'Not Modified',\r\n        '305': 'Use Proxy',\r\n        '307': 'Temporary Redirect',\r\n        '400': 'Bad Request',\r\n        '401': 'Unauthorized',\r\n        '402': 'Payment Required',\r\n        '403': 'Forbidden',\r\n        '404': 'Not Found',\r\n        '405': 'Method Not Allowed',\r\n        '406': 'Not Acceptable',\r\n        '407': 'Proxy Authentication Required',\r\n        '408': 'Request Time-out',\r\n        '409': 'Conflict',\r\n        '410': 'Gone',\r\n        '411': 'Length Required',\r\n        '412': 'Precondition Failed',\r\n        '413': 'Request Entity Too Large',\r\n        '414': 'Request-URI Too Large',\r\n        '415': 'Unsupported Media Type',\r\n        '416': 'Requested Range Not Satisfiable',\r\n        '417': 'Expectation Failed',\r\n        '418': 'I\\'m a teapot',\r\n        '422': 'Unprocessable Entity',\r\n        '423': 'Locked',\r\n        '424': 'Failed Dependency',\r\n        '425': 'Unordered Collection',\r\n        '426': 'Upgrade Required',\r\n        '428': 'Precondition Required',\r\n        '429': 'Too Many Requests',\r\n        '431': 'Request Header Fields Too Large',\r\n        '500': 'Internal Server Error',\r\n        '501': 'Not Implemented',\r\n        '502': 'Bad Gateway',\r\n        '503': 'Service Unavailable',\r\n        '504': 'Gateway Time-out',\r\n        '505': 'HTTP Version Not Supported',\r\n        '506': 'Variant Also Negotiates',\r\n        '507': 'Insufficient Storage',\r\n        '509': 'Bandwidth Limit Exceeded',\r\n        '510': 'Not Extended',\r\n        '511': 'Network Authentication Required' \r\n    }\r\n\r\n    // Create error container, get error message, and append to description container\r\n    const errorContainer = document.createElement(\"div\")\r\n    errorContainer.textContent = `Error code ${err}: ${statusCodes[err]}`\r\n    errorContainer.classList.add(\"error-container\")\r\n    descriptionContainer.appendChild(errorContainer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Word-of-The-Day/./src/renderError.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;