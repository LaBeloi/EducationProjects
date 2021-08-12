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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (cssWithMappingToString) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join(\"\");\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === \"string\") {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, \"\"]];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar PostsContext_1 = __webpack_require__(/*! ./shared/context/PostsContext */ \"./src/shared/context/PostsContext.tsx\");\r\nvar commentContext_1 = __webpack_require__(/*! ./shared/context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nfunction AppComponent() {\r\n    var _a = react_1.useState(''), commentValue = _a[0], setCommentValue = _a[1];\r\n    var token = useToken_1.useToken()[0];\r\n    var CommentProvider = commentContext_1.commentContext.Provider;\r\n    return (react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(PostsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(CommentProvider, { value: {\r\n                        value: commentValue,\r\n                        onChange: setCommentValue\r\n                    } },\r\n                    react_1.default.createElement(Layout_1.Layout, null,\r\n                        react_1.default.createElement(Header_1.Header, null),\r\n                        react_1.default.createElement(Content_1.Content, null,\r\n                            react_1.default.createElement(CardsList_1.CardsList, null))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/CommentForm/CommentForm.css":
/*!*****************************************!*\
  !*** ./src/CommentForm/CommentForm.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n});\n\n\n//# sourceURL=webpack:///./src/CommentForm/CommentForm.css?");

/***/ }),

/***/ "./src/CommentForm/CommentForm.tsx":
/*!*****************************************!*\
  !*** ./src/CommentForm/CommentForm.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentContext_1 = __webpack_require__(/*! ../shared/context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar CommentForm_css_1 = __importDefault(__webpack_require__(/*! ./CommentForm.css */ \"./src/CommentForm/CommentForm.css\"));\r\nfunction CommentForm() {\r\n    var _a = react_1.useContext(commentContext_1.commentContext), value = _a.value, onChange = _a.onChange;\r\n    function handleChange(e) {\r\n        onChange(e.target.value);\r\n    }\r\n    function handleSubmit(e) {\r\n        e.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: CommentForm_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: CommentForm_css_1.default.textarea, value: value, onChange: handleChange }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: CommentForm_css_1.default.bnt }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/Post/CommentsPost/Comment/Comment.css":
/*!***************************************************!*\
  !*** ./src/Post/CommentsPost/Comment/Comment.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"comment\": \"Comment__comment--1h1Ug\",\n\t\"likesCounter\": \"Comment__likesCounter--1gnc8\",\n\t\"author\": \"Comment__author--8jNYj\",\n\t\"buttonsField\": \"Comment__buttonsField--AChLl\",\n\t\"buttonsItem\": \"Comment__buttonsItem--3vD9S\",\n\t\"buttonsItem__btn\": \"Comment__buttonsItem__btn--2qHpt\",\n\t\"userArea\": \"Comment__userArea--1_UfN\",\n\t\"textArea\": \"Comment__textArea--SzQcL\",\n\t\"info\": \"Comment__info--3fAgp\"\n});\n\n\n//# sourceURL=webpack:///./src/Post/CommentsPost/Comment/Comment.css?");

/***/ }),

/***/ "./src/Post/CommentsPost/Comment/Comment.tsx":
/*!***************************************************!*\
  !*** ./src/Post/CommentsPost/Comment/Comment.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../shared/Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar CommentsPost_1 = __webpack_require__(/*! ../CommentsPost */ \"./src/Post/CommentsPost/CommentsPost.tsx\");\r\nvar Comment_css_1 = __importDefault(__webpack_require__(/*! ./Comment.css */ \"./src/Post/CommentsPost/Comment/Comment.css\"));\r\nfunction Comment(_a) {\r\n    var author = _a.author, created = _a.created, body = _a.body, children = _a.children;\r\n    var now = new Date().getTime() / 1000;\r\n    var time = Math.round(((now - created) / 60) / 60);\r\n    var hour;\r\n    if (time === 1) {\r\n        hour = 'час';\r\n    }\r\n    else if (time === 2 || time === 3 || time === 4) {\r\n        hour = 'часа';\r\n    }\r\n    else\r\n        hour = 'часов';\r\n    return (react_1.default.createElement(\"div\", { className: Comment_css_1.default.comment },\r\n        react_1.default.createElement(\"div\", { className: Comment_css_1.default.likesCounter },\r\n            react_1.default.createElement(\"button\", { className: Comment_css_1.default.like },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\r\n            react_1.default.createElement(\"button\", { className: Comment_css_1.default.disLike },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })))),\r\n        react_1.default.createElement(\"div\", { className: Comment_css_1.default.info },\r\n            react_1.default.createElement(\"div\", { className: Comment_css_1.default.userArea },\r\n                react_1.default.createElement(\"img\", { className: Comment_css_1.default.avatar, src: \"\", alt: \"\\u0410\\u0432\\u0430\\u0442\\u0430\\u0440\" }),\r\n                react_1.default.createElement(\"a\", { className: Comment_css_1.default.author },\r\n                    \" \",\r\n                    author),\r\n                react_1.default.createElement(\"span\", { className: Comment_css_1.default.time },\r\n                    \" \",\r\n                    time,\r\n                    \" \",\r\n                    hour,\r\n                    \" \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n            react_1.default.createElement(\"div\", { className: Comment_css_1.default.textArea }, body),\r\n            react_1.default.createElement(\"ul\", { className: Comment_css_1.default.buttonsField },\r\n                react_1.default.createElement(\"li\", { className: Comment_css_1.default.buttonsItem },\r\n                    react_1.default.createElement(\"button\", { className: Comment_css_1.default.buttonsItem__btn },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments }),\r\n                        \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n                react_1.default.createElement(\"li\", { className: Comment_css_1.default.buttonsItem },\r\n                    react_1.default.createElement(\"button\", { className: Comment_css_1.default.buttonsItem__btn },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share }),\r\n                        \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n                react_1.default.createElement(\"li\", { className: Comment_css_1.default.buttonsItem },\r\n                    react_1.default.createElement(\"button\", { className: Comment_css_1.default.buttonsItem__btn },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.report }),\r\n                        \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\r\n            children &&\r\n                react_1.default.createElement(CommentsPost_1.CommentsPost, { recursionData: children }))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/Post/CommentsPost/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/Post/CommentsPost/CommentsPost.tsx":
/*!************************************************!*\
  !*** ./src/Post/CommentsPost/CommentsPost.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsPost = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentsDataContext_1 = __webpack_require__(/*! ../../shared/context/CommentsDataContext */ \"./src/shared/context/CommentsDataContext.tsx\");\r\nvar Comment_1 = __webpack_require__(/*! ./Comment/Comment */ \"./src/Post/CommentsPost/Comment/Comment.tsx\");\r\nfunction CommentsPost(_a) {\r\n    var _b, _c;\r\n    var recursionData = _a.recursionData;\r\n    var data = react_1.useContext(CommentsDataContext_1.CommentsDataContext);\r\n    console.log(data);\r\n    return (react_1.default.createElement(\"div\", null, recursionData || recursionData !== undefined\r\n        ?\r\n            recursionData.map(function (item) {\r\n                var _a;\r\n                return react_1.default.createElement(Comment_1.Comment, { key: recursionData.indexOf(item), body: item.data.body, created: item.data.created, author: item.data.author, children: item.data.replies instanceof Object ? (_a = item.data) === null || _a === void 0 ? void 0 : _a.replies.data.children : null });\r\n            })\r\n        :\r\n            ((_b = data.comments) === null || _b === void 0 ? void 0 : _b.length) > 0\r\n                ?\r\n                    (_c = data.comments) === null || _c === void 0 ? void 0 : _c.map(function (item) {\r\n                        var _a;\r\n                        return react_1.default.createElement(Comment_1.Comment, { key: (_a = data.comments) === null || _a === void 0 ? void 0 : _a.indexOf(item), body: item.body, created: item.created, author: item.author, children: item.replies instanceof Object ? item.replies.data.children : null });\r\n                    })\r\n                :\r\n                    'Комментариев нету :), вы можете стать первыми!'));\r\n}\r\nexports.CommentsPost = CommentsPost;\r\n\n\n//# sourceURL=webpack:///./src/Post/CommentsPost/CommentsPost.tsx?");

/***/ }),

/***/ "./src/Post/Post.tsx":
/*!***************************!*\
  !*** ./src/Post/Post.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/CommentForm/CommentForm.tsx\");\r\nvar CommentsDataContext_1 = __webpack_require__(/*! ../shared/context/CommentsDataContext */ \"./src/shared/context/CommentsDataContext.tsx\");\r\nvar CommentsPost_1 = __webpack_require__(/*! ./CommentsPost/CommentsPost */ \"./src/Post/CommentsPost/CommentsPost.tsx\");\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/Post/post.css\"));\r\nfunction Post(props) {\r\n    var _a, _b;\r\n    var ref = react_1.useRef(null);\r\n    var data = react_1.useContext(CommentsDataContext_1.CommentsDataContext);\r\n    react_1.useEffect(function () {\r\n        function handleClick(e) {\r\n            var _a, _b;\r\n            if (e.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", { className: post_css_1.default.header }, (_a = data.post) === null || _a === void 0 ? void 0 : _a.title),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", { className: post_css_1.default.paragraph }, (_b = data.post) === null || _b === void 0 ? void 0 : _b.selftext)),\r\n        react_1.default.createElement(CommentForm_1.CommentForm, null),\r\n        react_1.default.createElement(CommentsPost_1.CommentsPost, null))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/Post/Post.tsx?");

/***/ }),

/***/ "./src/Post/post.css":
/*!***************************!*\
  !*** ./src/Post/post.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"modal\": \"post__modal--2E_Gv\"\n});\n\n\n//# sourceURL=webpack:///./src/Post/post.css?");

/***/ }),

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction useCommentsData(postId) {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get(\"https://oauth.reddit.com/comments/\" + postId, {\r\n            headers: { Authorization: \"bearer \" + token },\r\n        })\r\n            .then(function (res) {\r\n            var result = {};\r\n            result.post = res.data[0].data.children[0].data;\r\n            var postComments = res.data[1].data.children;\r\n            var comments = [];\r\n            for (var _i = 0, postComments_1 = postComments; _i < postComments_1.length; _i++) {\r\n                var i = postComments_1[_i];\r\n                comments.push(i.data);\r\n            }\r\n            result.comments = comments;\r\n            // console.log(result)\r\n            return result;\r\n        })\r\n            .then(function (result) { return setData(result); });\r\n    }, [token]);\r\n    return data;\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction usePostsData() {\r\n    var _a = react_1.useState([]), list = _a[0], setList = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    react_1.useEffect(function () {\r\n        if (token) {\r\n            axios_1.default.get('https://oauth.reddit.com/best', {\r\n                headers: { Authorization: \"bearer \" + token },\r\n                params: {\r\n                    limit: 5,\r\n                }\r\n            })\r\n                .then(function (res) {\r\n                var data = res.data.data.children;\r\n                var dataArr = [];\r\n                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\r\n                    var i = data_1[_i];\r\n                    dataArr.push({ title: i.data.title, name: i.data.author, published: i.data.created, likes: i.data.score, key: i.data.id });\r\n                }\r\n                return dataArr;\r\n            })\r\n                .then(function (dataArr) { setList(dataArr); });\r\n        }\r\n    }, [token]);\r\n    return [list];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];\r\n    react_1.useEffect(function () {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction useUserData() {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.icon_img });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\r\\n  --black: #333333;\\r\\n  --orange: #cc6633;\\r\\n  --green: #a4cc33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white: hsl(0, 0%, var(--whiteLightness));\\r\\n  --greayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--greayF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: \\\"Roboto\\\", serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  margin-block-start: 0;\\r\\n  margin-block-end: 0;\\r\\n  margin-inline-start: 0;\\r\\n  margin-inline-end: 0;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: 0;\\r\\n  background-color: transparent;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemlate = void 0;\r\nvar indexTemlate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>React</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n        window.__token__ = '\" + token + \"'\\n    </script>\\n</head>\\n<body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n    <div id=\\\"modal_root\\\"></div>\\n</body>\\n</html>\\n\"; };\r\nexports.indexTemlate = indexTemlate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemlate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: 'T-aPHbv2gebrDzJXePoyWw', password: 'NNzvtR07OajiM6d_DIjQh8SQrb6qZw' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' },\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexTemplate_1.indexTemlate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"s4\": \"break__s4--2y665\",\n\t\"s8\": \"break__s8--1w4wi\",\n\t\"s12\": \"break__s12--VvXWv\",\n\t\"s16\": \"break__s16--1tvPe\",\n\t\"s20\": \"break__s20--3L9vW\",\n\t\"inline\": \"break__inline--1bIim\",\n\t\"top\": \"break__top--3vWQe\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Burger/Burger.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Burger/Burger.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Burger = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar burger_css_1 = __importDefault(__webpack_require__(/*! ./burger.css */ \"./src/shared/CardsList/Card/Burger/burger.css\"));\r\nfunction Burger() {\r\n    return (react_1.default.createElement(\"button\", { className: burger_css_1.default.burger },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"5\", viewBox: \"0 0 20 5\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"17.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 17.5 2.5)\", fill: \"#D9D9D9\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 10 2.5)\", fill: \"#D9D9D9\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 2.5 2.5)\", fill: \"#D9D9D9\" }))));\r\n}\r\nexports.Burger = Burger;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Burger/Burger.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Burger/DropList/DropList.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Burger/DropList/DropList.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DropList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar dropList_css_1 = __importDefault(__webpack_require__(/*! ./dropList.css */ \"./src/shared/CardsList/Card/Burger/DropList/dropList.css\"));\r\nfunction DropList() {\r\n    return (react_1.default.createElement(\"div\", { className: dropList_css_1.default.container },\r\n        react_1.default.createElement(\"ul\", { className: dropList_css_1.default.list },\r\n            react_1.default.createElement(\"li\", { className: dropList_css_1.default.listItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments }),\r\n                \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\"),\r\n            react_1.default.createElement(\"li\", { className: dropList_css_1.default.listItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share }),\r\n                \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\"),\r\n            react_1.default.createElement(\"li\", { className: dropList_css_1.default.listItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.hide }),\r\n                \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\"),\r\n            react_1.default.createElement(\"li\", { className: dropList_css_1.default.listItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.save }),\r\n                \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"),\r\n            react_1.default.createElement(\"li\", { className: dropList_css_1.default.listItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.report }),\r\n                \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"button\", { className: dropList_css_1.default.btn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\r\n}\r\nexports.DropList = DropList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Burger/DropList/DropList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Burger/DropList/dropList.css":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Burger/DropList/dropList.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"dropList__container--3zqOk\",\n\t\"list\": \"dropList__list--gtryw\",\n\t\"listItem\": \"dropList__listItem--mKQr0\",\n\t\"btn\": \"dropList__btn--1Cgog\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Burger/DropList/dropList.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Burger/burger.css":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Burger/burger.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"burger\": \"burger__burger--2KFqT\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Burger/burger.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ButtonsField/ButtonsField.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/ButtonsField/ButtonsField.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ButtonsField = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar buttonsField_css_1 = __importDefault(__webpack_require__(/*! ./buttonsField.css */ \"./src/shared/CardsList/Card/ButtonsField/buttonsField.css\"));\r\nfunction ButtonsField(_a) {\r\n    var likes = _a.likes;\r\n    return (react_1.default.createElement(\"div\", { className: buttonsField_css_1.default.buttonsField },\r\n        react_1.default.createElement(\"div\", { className: buttonsField_css_1.default.likesCounter },\r\n            react_1.default.createElement(\"button\", { className: buttonsField_css_1.default.like },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\r\n            react_1.default.createElement(\"span\", { className: buttonsField_css_1.default.value }, likes),\r\n            react_1.default.createElement(\"button\", { className: buttonsField_css_1.default.dislike },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })))),\r\n        react_1.default.createElement(\"button\", { className: buttonsField_css_1.default.comments },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: buttonsField_css_1.default.commentsNumber }, \"13\")),\r\n        react_1.default.createElement(\"div\", { className: buttonsField_css_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: buttonsField_css_1.default.shareButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n            react_1.default.createElement(\"button\", { className: buttonsField_css_1.default.saveButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\r\n}\r\nexports.ButtonsField = ButtonsField;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ButtonsField/ButtonsField.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ButtonsField/buttonsField.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/ButtonsField/buttonsField.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"buttonsField\": \"buttonsField__buttonsField--1Ae4c\",\n\t\"likesCounter\": \"buttonsField__likesCounter--2KKV1\",\n\t\"comments\": \"buttonsField__comments--2glGD\",\n\t\"actions\": \"buttonsField__actions--2RvyG\",\n\t\"shareButton\": \"buttonsField__shareButton--1ygkT\",\n\t\"saveButton\": \"buttonsField__saveButton--3fgbQ\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ButtonsField/buttonsField.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Poster_1 = __webpack_require__(/*! ./Poster/Poster */ \"./src/shared/CardsList/Card/Poster/Poster.tsx\");\r\nvar UserField_1 = __webpack_require__(/*! ./UserIdField/UserField */ \"./src/shared/CardsList/Card/UserIdField/UserField.tsx\");\r\nvar ButtonsField_1 = __webpack_require__(/*! ./ButtonsField/ButtonsField */ \"./src/shared/CardsList/Card/ButtonsField/ButtonsField.tsx\");\r\nvar Burger_1 = __webpack_require__(/*! ./Burger/Burger */ \"./src/shared/CardsList/Card/Burger/Burger.tsx\");\r\nvar DropList_1 = __webpack_require__(/*! ./Burger/DropList/DropList */ \"./src/shared/CardsList/Card/Burger/DropList/DropList.tsx\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../Dropdown/Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\r\nvar PostsContext_1 = __webpack_require__(/*! ../../context/PostsContext */ \"./src/shared/context/PostsContext.tsx\");\r\nfunction Card(_a) {\r\n    var id = _a.id;\r\n    var list = react_1.useContext(PostsContext_1.PostsContext);\r\n    var item;\r\n    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {\r\n        var i = list_1[_i];\r\n        if (i.key === id) {\r\n            item = i;\r\n        }\r\n    }\r\n    var now = new Date().getTime() / 1000;\r\n    var time = Math.round(((now - (item === null || item === void 0 ? void 0 : item.published)) / 60) / 60);\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card, id: item === null || item === void 0 ? void 0 : item.key },\r\n        react_1.default.createElement(UserField_1.UserField, { title: item === null || item === void 0 ? void 0 : item.title, name: item === null || item === void 0 ? void 0 : item.name, time: time }),\r\n        react_1.default.createElement(Poster_1.Poster, null),\r\n        react_1.default.createElement(ButtonsField_1.ButtonsField, { likes: item === null || item === void 0 ? void 0 : item.likes }),\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(Burger_1.Burger, null), children: react_1.default.createElement(DropList_1.DropList, null), isOpen: false })));\r\n}\r\nexports.Card = Card;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Poster/Poster.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Poster/Poster.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Poster = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar poster_css_1 = __importDefault(__webpack_require__(/*! ./poster.css */ \"./src/shared/CardsList/Card/Poster/poster.css\"));\r\nfunction Poster() {\r\n    return (react_1.default.createElement(\"div\", { className: poster_css_1.default.poster },\r\n        react_1.default.createElement(\"img\", { className: poster_css_1.default.posterImg, src: \"https://cdn.dribbble.com/users/788099/screenshots/15882693/media/db15dc450c9284164bd2c9ed062f5130.jpg?compress=1&resize=400x300\", alt: \"\" })));\r\n}\r\nexports.Poster = Poster;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Poster/Poster.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Poster/poster.css":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Poster/poster.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"poster\": \"poster__poster--d0vDN\",\n\t\"posterHeader\": \"poster__posterHeader--1mOeJ\",\n\t\"posterImg\": \"poster__posterImg--Yp3eT\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Poster/poster.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserIdField/UserField.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/UserIdField/UserField.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserField = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Post_1 = __webpack_require__(/*! ../../../../Post/Post */ \"./src/Post/Post.tsx\");\r\nvar CommentsDataContext_1 = __webpack_require__(/*! ../../../context/CommentsDataContext */ \"./src/shared/context/CommentsDataContext.tsx\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar userField_css_1 = __importDefault(__webpack_require__(/*! ./userField.css */ \"./src/shared/CardsList/Card/UserIdField/userField.css\"));\r\nfunction UserField(_a) {\r\n    var _b, _c;\r\n    var title = _a.title, name = _a.name, time = _a.time;\r\n    var _d = react_1.useState(false), isMOdalOpened = _d[0], setIsModalOpened = _d[1];\r\n    var ref = react_1.useRef(null);\r\n    var hour;\r\n    if (time === 1) {\r\n        hour = 'час';\r\n    }\r\n    else if (time === 2 || time === 3 || time === 4) {\r\n        hour = 'часа';\r\n    }\r\n    else\r\n        hour = 'часов';\r\n    return (react_1.default.createElement(\"div\", { className: userField_css_1.default.userField, ref: ref },\r\n        react_1.default.createElement(\"div\", { className: userField_css_1.default.seen },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Eye }),\r\n            \"1 \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\"),\r\n        react_1.default.createElement(\"div\", { className: userField_css_1.default.userInfo },\r\n            react_1.default.createElement(\"div\", { className: userField_css_1.default.user },\r\n                react_1.default.createElement(\"img\", { className: userField_css_1.default.userImg, src: \"\", alt: \"\" }),\r\n                react_1.default.createElement(\"a\", { className: userField_css_1.default.userName, href: \"\" }, name)),\r\n            react_1.default.createElement(\"span\", { className: userField_css_1.default.userTime },\r\n                react_1.default.createElement(\"span\", { className: userField_css_1.default.userTimePublished }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n                time,\r\n                \" \",\r\n                hour,\r\n                \" \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        react_1.default.createElement(\"h1\", { className: userField_css_1.default.posterHeader, onClick: function () {\r\n                setIsModalOpened(true);\r\n            } }, title),\r\n        isMOdalOpened && (react_1.default.createElement(CommentsDataContext_1.CommentsDataContextProvider, { postId: (_c = (_b = ref.current) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.id },\r\n            react_1.default.createElement(Post_1.Post, { onClose: function () { setIsModalOpened(false); } })))));\r\n}\r\nexports.UserField = UserField;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserIdField/UserField.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserIdField/userField.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/UserIdField/userField.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userField\": \"userField__userField--vr-f1\",\n\t\"userInfo\": \"userField__userInfo--1Ct1H\",\n\t\"userImg\": \"userField__userImg--3b9iK\",\n\t\"user\": \"userField__user--3CsGU\",\n\t\"userName\": \"userField__userName--39L9V\",\n\t\"userTime\": \"userField__userTime--3ckZt\",\n\t\"userTimePublished\": \"userField__userTimePublished--25UsU\",\n\t\"posterHeader\": \"userField__posterHeader--IK4Wn\",\n\t\"seen\": \"userField__seen--21bJN\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserIdField/userField.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"card\": \"card__card--fbpLh\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardsList_css_1 = __importDefault(__webpack_require__(/*! ./cardsList.css */ \"./src/shared/CardsList/cardsList.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\r\nvar PostsContext_1 = __webpack_require__(/*! ../context/PostsContext */ \"./src/shared/context/PostsContext.tsx\");\r\nfunction CardsList() {\r\n    var list = react_1.useContext(PostsContext_1.PostsContext);\r\n    return (react_1.default.createElement(\"ul\", { className: cardsList_css_1.default.cardsList }, list.map(function (item) { return react_1.default.createElement(Card_1.Card, { key: item.key, id: item.key }); })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardsList.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardsList.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"cardsList\": \"cardsList__cardsList--3Qfuj\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardsList.css?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"content\": \"content__content--3z6rw\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n;\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen;\r\n    var _b = react_1.default.useState(isOpen), isDropdownActive = _b[0], setIsDropdownActive = _b[1];\r\n    var click = function () {\r\n        if (isOpen === false) {\r\n            setIsDropdownActive(!isDropdownActive);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { onClick: function () { return click(); } }, button),\r\n        isDropdownActive && (react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownActive(false); } }, children))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./searchBlock/SearchBlock */ \"./src/shared/Header/searchBlock/SearchBlock.tsx\");\r\nvar TreadTitle_1 = __webpack_require__(/*! ./TreadTitle/TreadTitle */ \"./src/shared/Header/TreadTitle/TreadTitle.tsx\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./Sortblock/SortBlock */ \"./src/shared/Header/Sortblock/SortBlock.tsx\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(TreadTitle_1.TreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/Sortblock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/Sortblock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortBlock_css_1 = __importDefault(__webpack_require__(/*! ./sortBlock.css */ \"./src/shared/Header/Sortblock/sortBlock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortBlock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Sortblock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/Sortblock/sortBlock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/Sortblock/sortBlock.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"sortBlock\": \"sortBlock__sortBlock--2ZyRp\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/Sortblock/sortBlock.css?");

/***/ }),

/***/ "./src/shared/Header/TreadTitle/TreadTitle.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Header/TreadTitle/TreadTitle.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar treadTitle_css_1 = __importDefault(__webpack_require__(/*! ./treadTitle.css */ \"./src/shared/Header/TreadTitle/treadTitle.css\"));\r\nfunction TreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: treadTitle_css_1.default.treadTitle }, \"Header\"));\r\n}\r\nexports.TreadTitle = TreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/TreadTitle/TreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/TreadTitle/treadTitle.css":
/*!*****************************************************!*\
  !*** ./src/shared/Header/TreadTitle/treadTitle.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"treadTitle\": \"treadTitle__treadTitle--2XQ8a\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/TreadTitle/treadTitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"header__header--1FWjL\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/searchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/searchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar shearchBlock_css_1 = __importDefault(__webpack_require__(/*! ./shearchBlock.css */ \"./src/shared/Header/searchBlock/shearchBlock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/Header/searchBlock/UserBlock/UserBlock.tsx\");\r\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nfunction SearchBlock() {\r\n    var _a = react_1.useContext(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;\r\n    return (react_1.default.createElement(\"div\", { className: shearchBlock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/searchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/searchBlock/UserBlock/UserBlock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/searchBlock/UserBlock/UserBlock.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"UserBlock__userBox--qZgsp\",\n\t\"avatarBox\": \"UserBlock__avatarBox--CRYoJ\",\n\t\"avatarImage\": \"UserBlock__avatarImage--3pyWj\",\n\t\"username\": \"UserBlock__username--3wRIP\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/searchBlock/UserBlock/UserBlock.css?");

/***/ }),

/***/ "./src/shared/Header/searchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/searchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../Break/Break */ \"./src/shared/Break/Break.tsx\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nvar UserBlock_css_1 = __importDefault(__webpack_require__(/*! ./UserBlock.css */ \"./src/shared/Header/searchBlock/UserBlock/UserBlock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=T-aPHbv2gebrDzJXePoyWw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: UserBlock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.avatarBox }, avatarSrc ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'User avatar', className: UserBlock_css_1.default.avatarImage }) : react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Anonimus })),\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Anonimus'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/searchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/searchBlock/shearchBlock.css":
/*!********************************************************!*\
  !*** ./src/shared/Header/searchBlock/shearchBlock.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"searchBlock\": \"shearchBlock__searchBlock--u9YjH\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/searchBlock/shearchBlock.css?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Report_1 = __webpack_require__(/*! ../Icons/Report */ \"./src/shared/Icons/Report.tsx\");\r\nvar Share_1 = __webpack_require__(/*! ../Icons/Share */ \"./src/shared/Icons/Share.tsx\");\r\nvar Save_1 = __webpack_require__(/*! ../Icons/Save */ \"./src/shared/Icons/Save.tsx\");\r\nvar Comments_1 = __webpack_require__(/*! ../Icons/Comments */ \"./src/shared/Icons/Comments.tsx\");\r\nvar Hide_1 = __webpack_require__(/*! ../Icons/Hide */ \"./src/shared/Icons/Hide.tsx\");\r\nvar Eye_1 = __webpack_require__(/*! ../Icons/Eye */ \"./src/shared/Icons/Eye.tsx\");\r\nvar Anonimus_1 = __webpack_require__(/*! ../Icons/Anonimus */ \"./src/shared/Icons/Anonimus.tsx\");\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"report\"] = \"Report\";\r\n    EIcons[\"save\"] = \"Save\";\r\n    EIcons[\"share\"] = \"Share\";\r\n    EIcons[\"comments\"] = \"Comments\";\r\n    EIcons[\"hide\"] = \"Hide\";\r\n    EIcons[\"Eye\"] = \"Eye\";\r\n    EIcons[\"Anonimus\"] = \"Anonimus\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\n;\r\nfunction Icon(_a) {\r\n    var name = _a.name, size = _a.size;\r\n    switch (name) {\r\n        case 'Save':\r\n            return (react_1.default.createElement(Save_1.Save, { size: size }));\r\n        case 'Share':\r\n            return (react_1.default.createElement(Share_1.Share, { size: size }));\r\n        case 'Comments':\r\n            return (react_1.default.createElement(Comments_1.Comments, { size: size }));\r\n        case 'Report':\r\n            return (react_1.default.createElement(Report_1.Report, { size: size }));\r\n        case 'Hide':\r\n            return (react_1.default.createElement(Hide_1.Hide, { size: size }));\r\n        case 'Eye':\r\n            return (react_1.default.createElement(Eye_1.Eye, { size: size }));\r\n        case 'Anonimus':\r\n            return (react_1.default.createElement(Anonimus_1.Anonimus, { size: size }));\r\n        default:\r\n            return null;\r\n    }\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Anonimus.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/Anonimus.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Anonimus = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Anonimus(_a) {\r\n    var _b = _a.size, size = _b === void 0 ? 50 : _b;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.Anonimus = Anonimus;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Anonimus.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Comments.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/Comments.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Comments(_a) {\r\n    var _b = _a.size, size = _b === void 0 ? 14 : _b;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Eye.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icons/Eye.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Eye = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Eye(_a) {\r\n    var _b = _a.size, size = _b === void 0 ? 16 : _b;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: 16 - 5, viewBox: \"0 0 16 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z\", fill: \"#999999\" })));\r\n}\r\nexports.Eye = Eye;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Eye.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Hide.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Hide.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Hide = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Hide(_a) {\r\n    var _b = _a.size, size = _b === void 0 ? 14 : _b;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.Hide = Hide;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Hide.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Report.tsx":
/*!*************************************!*\
  !*** ./src/shared/Icons/Report.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Report = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Report(_a) {\r\n    var _b = _a.size, size = _b === void 0 ? 14 : _b;\r\n    return (react_1.default.createElement(\"svg\", { width: size + 2, height: size, viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.Report = Report;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Report.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Save.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Save.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Save = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Save(_a) {\r\n    var _b = _a.size, size = _b === void 0 ? 14 : _b;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.Save = Save;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Save.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Share.tsx":
/*!************************************!*\
  !*** ./src/shared/Icons/Share.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Share = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Share(_a) {\r\n    var _b = _a.size, size = _b === void 0 ? 14 : _b;\r\n    return (react_1.default.createElement(\"svg\", { width: size - 2, height: size, viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.Share = Share;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Share.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"layout\": \"layout__layout--1BrJT\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"greyF4\"] = \"grayF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\n;\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize, _g = props.bold, bold = _g === void 0 ? false : _g;\r\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _d));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"s28\": \"text__s28--1Y0UD\",\n\t\"s20\": \"text__s20--1rcCY\",\n\t\"s16\": \"text__s16--357-u\",\n\t\"s14\": \"text__s14--1yRIX\",\n\t\"s12\": \"text__s12--2VLJ9\",\n\t\"s10\": \"text__s10--34Ke5\",\n\t\"bold\": \"text__bold--3b6dr\",\n\t\"black\": \"text__black--195ax\",\n\t\"orange\": \"text__orange--KcfSv\",\n\t\"green\": \"text__green--1DoOT\",\n\t\"white\": \"text__white--3mLIt\",\n\t\"greyF4\": \"text__greyF4--XwDMR\",\n\t\"greyF3\": \"text__greyF3--1d406\",\n\t\"greyD9\": \"text__greyD9--OiOU9\",\n\t\"greyC4\": \"text__greyC4--3LoNh\",\n\t\"grey99\": \"text__grey99--3D1fM\",\n\t\"grey66\": \"text__grey66--219B_\",\n\t\"m28\": \"text__m28--3V7S6\",\n\t\"m20\": \"text__m20--Wd-DD\",\n\t\"m16\": \"text__m16--18mow\",\n\t\"m14\": \"text__m14--1mzQ-\",\n\t\"m12\": \"text__m12--ote0y\",\n\t\"m10\": \"text__m10--2mNG-\",\n\t\"t28\": \"text__t28--1l9fS\",\n\t\"t20\": \"text__t20--1VzKx\",\n\t\"t16\": \"text__t16--1X1iF\",\n\t\"t14\": \"text__t14--1vRqk\",\n\t\"t12\": \"text__t12--1xY59\",\n\t\"t10\": \"text__t10--3ZtjN\",\n\t\"d28\": \"text__d28--1ibsu\",\n\t\"d20\": \"text__d20--3jXqu\",\n\t\"d16\": \"text__d16--2YSFB\",\n\t\"d14\": \"text__d14--23tcT\",\n\t\"d12\": \"text__d12--1Jnvi\",\n\t\"d10\": \"text__d10--BMyk4\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/shared/context/CommentsDataContext.tsx":
/*!****************************************************!*\
  !*** ./src/shared/context/CommentsDataContext.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsDataContextProvider = exports.CommentsDataContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nexports.CommentsDataContext = react_1.default.createContext({});\r\nfunction CommentsDataContextProvider(_a) {\r\n    var children = _a.children, postId = _a.postId;\r\n    var data = useCommentsData_1.useCommentsData(postId);\r\n    return (react_1.default.createElement(exports.CommentsDataContext.Provider, { value: data }, children));\r\n}\r\nexports.CommentsDataContextProvider = CommentsDataContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/CommentsDataContext.tsx?");

/***/ }),

/***/ "./src/shared/context/PostsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/PostsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.PostsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.PostsContext = react_1.default.createContext([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = usePostsData_1.usePostsData()[0];\r\n    return (react_1.default.createElement(exports.PostsContext.Provider, { value: data }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/PostsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/commentContext.ts":
/*!**********************************************!*\
  !*** ./src/shared/context/commentContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.commentContext = react_1.default.createContext({\r\n    value: '',\r\n    onChange: function () { }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/context/commentContext.ts?");

/***/ }),

/***/ "./src/shared/context/tokenContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.tokenContext = react_1.default.createContext('');\r\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = useUserData_1.useUserData()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });