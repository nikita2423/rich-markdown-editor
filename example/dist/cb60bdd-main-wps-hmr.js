webpackHotUpdate("main",{

/***/ "./src/menus/tableRow.tsx":
/*!********************************!*\
  !*** ./src/menus/tableRow.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst PlusIcon_1 = __importDefault(__webpack_require__(/*! ../icons/PlusIcon */ \"./src/icons/PlusIcon.js\"));\nconst PlusIcon_2 = __importDefault(__webpack_require__(/*! ../icons/PlusIcon */ \"./src/icons/PlusIcon.js\"));\nconst PlusIcon_3 = __importDefault(__webpack_require__(/*! ../icons/PlusIcon */ \"./src/icons/PlusIcon.js\"));\nfunction tableRowMenuItems(state, index, dictionary) {\n    return [\n        {\n            name: \"addRowAfter\",\n            tooltip: dictionary.addRowBefore,\n            icon: PlusIcon_2.default,\n            attrs: { index: index - 1 },\n            active: () => false,\n            visible: index !== 0,\n        },\n        {\n            name: \"addRowAfter\",\n            tooltip: dictionary.addRowAfter,\n            icon: PlusIcon_3.default,\n            attrs: { index },\n            active: () => false,\n        },\n        {\n            name: \"separator\",\n        },\n        {\n            name: \"deleteRow\",\n            tooltip: dictionary.deleteRow,\n            icon: PlusIcon_1.default,\n            active: () => false,\n        },\n    ];\n}\nexports.default = tableRowMenuItems;\n\n\n//# sourceURL=webpack:///./src/menus/tableRow.tsx?");

/***/ })

})