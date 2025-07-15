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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\nclass App{\r\n    constructor(){\r\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n        window.addEventListener('DONContentLoaded',this.handleRouteChanging.bind(this));\r\n        window.addEventListener('popstate',this.handleRouteChanging.bind(this));\r\n    };\r\n    handleRouteChanging(){\r\n        this.router.openRoute();\r\n    };\r\n}\r\n\r\n(new App());\n\n//# sourceURL=webpack://backpractic/./src/app.js?\n}");

/***/ }),

/***/ "./src/components/products.js":
/*!************************************!*\
  !*** ./src/components/products.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Products: () => (/* binding */ Products)\n/* harmony export */ });\nclass Products {\r\n    constructor() {\r\n        this.productsElement = document.querySelector('.products');\r\n        this.getProducts().then(products => this.fillProducts(products));\r\n    };\r\n    async getProducts() {\r\n        const response = await fetch('/api/products');\r\n        return await response.json();\r\n    };\r\n    fillProducts(products) {\r\n        if (products && products.length > 0) {\r\n            products.forEach(product => {\r\n                const productEl = document.createElement('div');\r\n                productEl.className = 'product';\r\n\r\n                const titleEl = document.createElement('div');\r\n                titleEl.className = 'title';\r\n                titleEl.innerText = product.title;\r\n\r\n                const descriptionEl = document.createElement('div');\r\n                descriptionEl.className = 'description';\r\n                descriptionEl.innerText = product.description;\r\n\r\n                const priceEl = document.createElement('div');\r\n                priceEl.className = 'price';\r\n                priceEl.innerText = product.price + ' $';\r\n\r\n                productEl.appendChild(titleEl);\r\n                productEl.appendChild(descriptionEl);\r\n                productEl.appendChild(priceEl);\r\n\r\n                this.productsElement.appendChild(productEl);\r\n            });\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack://backpractic/./src/components/products.js?\n}");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/products.js */ \"./src/components/products.js\");\n\r\n\r\nclass Router {\r\n    constructor() {\r\n        this.routes = [\r\n            {\r\n                route: '#/',\r\n                title: 'Главная',\r\n                view: 'views/index.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/about',\r\n                title: 'О нас',\r\n                view: 'views/about.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/contact',\r\n                title: 'Контакты',\r\n                view: 'views/contact.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/products',\r\n                title: 'Товары',\r\n                view: 'views/products.html',\r\n                load: () => {\r\n                    new _components_products_js__WEBPACK_IMPORTED_MODULE_0__.Products();\r\n                }\r\n            },\r\n        ];\r\n    };\r\n    async openRoute() {\r\n        const newRoute = this.routes.find(item => {\r\n            const onlyHash = window.location.hash.split('?')[0];\r\n            return onlyHash === item.route;\r\n        });\r\n        if (!newRoute) {\r\n            window.location.href = '#/';\r\n            return;\r\n        };\r\n        //document.getElementById('title').innerText = newRoute.title;\r\n        document.getElementById('app').innerHTML =\r\n            await fetch(newRoute.view).then(response => response.text());\r\n        newRoute.load();\r\n    }\r\n}\n\n//# sourceURL=webpack://backpractic/./src/router.js?\n}");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;