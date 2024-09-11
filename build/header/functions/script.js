/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header/functions/common-functions.js":
/*!**************************************************!*\
  !*** ./src/header/functions/common-functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gsp_header_sub_menu: () => (/* binding */ gsp_header_sub_menu)
/* harmony export */ });
/**
 * @param i [is menu-item id number] 
 * @param fillColor icon color
 * @param isOpen if sub-mneu open then it should true
 */
function controll_dropdown_icon(i, fillColor, isOpen) {
  let path = document.getElementById("path-id-" + i);
  console.log(path);
  if (isOpen) {
    path.setAttribute("d", "M6 15l6-6 6 6");
    path.setAttribute("fill", fillColor);
  } else {
    path.setAttribute("d", "M6 9l6 6 6-6");
    path.setAttribute("fill", fillColor);
  }
}

/**
 * 
 * @param i [is menu-item id number] 
 */
function gsp_header_sub_menu(i) {
  var item = document.getElementById('nav-item-' + i);
  console.log(item);
  var child = item.getElementsByClassName('sub-menu');

  // if not container class named 'hidden'
  if (!child[0].classList.contains('hidden')) {
    child[0].style.opacity = 0;
    setTimeout(function () {
      child[0].classList.remove('d-block');
      child[0].classList.add('hidden');
    }, 450);
    controll_dropdown_icon(i, item.getAttribute('color'), false);
  } else {
    child[0].classList.remove('hidden');
    child[0].classList.add('d-block');
    setTimeout(function () {
      child[0].style.opacity = 1;
    }, 100);
    if (child[0].style.marginTop != child[0].getAttribute("mt")) {
      child[0].style.marginTop = child[0].getAttribute('mt');
    }
    controll_dropdown_icon(i, item.getAttribute('hover_color'), true);
  }
}

/**
 * 
 * @param i [is menu-item id number] 
 */
function gsp_sidebar_sub_menu(i) {
  var item = document.getElementById('nav-item-' + i);
  var child = item.getElementsByClassName('sub-menu');
  if (child[0].style.left == '0px') {
    child[0].style.left = '-600px';
    setTimeout(function () {
      child[0].style.display = 'none';
    }, 550);
    controll_dropdown_icon(i, item.getAttribute('color'), false);
  } else {
    child[0].style.display = 'block';
    setTimeout(function () {
      child[0].style.left = '0px';
    }, 100);
    controll_dropdown_icon(i, item.getAttribute('hover_color'), true);
  }
}

/***/ }),

/***/ "./src/header/functions/header-menu.js":
/*!*********************************************!*\
  !*** ./src/header/functions/header-menu.js ***!
  \*********************************************/
/***/ (() => {

class GspHeaderMenuController {
  constructor() {
    this.header = document.getElementById('gsp-header-container');

    // main ul id
    this.headerMenu = document.getElementById('gsp-header-menu');
    if (!this.headerMenu) {
      return;
    }
    this.container_justify_content();
    this.container_item_alignment();
    this.container_bg_color();

    // menu
    this.header_menu_set_position();
    // item styles
    if (this.headerMenu) {
      for (let i = 0; i < this.headerMenu.children.length; i++) {
        this.item_bg_color(i);
        this.item_hover_bg_color(i);
        this.item_color(i);
        this.item_hover_color(i);
        this.item_px(i);
        this.item_py(i);
        this.item_mx(i);
        this.item_my(i);
      }
    }
    // this.run_console();
  }
  run_console() {
    console.log(this.headerMenu.children);
    console.log(this.headerMenu.children.length);
  }
  container_justify_content() {
    if (this.header && this.header.hasAttribute('justify_content')) {
      this.header.style.justifyContent = this.header.getAttribute('justify_content');
    }
  }
  container_bg_color() {
    if (this.header && this.header.hasAttribute('bg_color')) {
      this.header.style.backgroundColor = this.header.getAttribute('bg_color');
    }
  }
  container_item_alignment() {
    if (this.header && this.header.hasAttribute('align_items')) {
      this.header.style.alignItems = this.header.getAttribute('align_items');
    }
  }
  header_menu_set_position() {
    var positioinName = '';
    var value = '0px';
    if (this.headerMenu && this.headerMenu.hasAttribute('position_name')) {
      positioinName = this.headerMenu.getAttribute('position_name');
    } else {
      return;
    }
    if (this.headerMenu && this.headerMenu.hasAttribute('position_value')) {
      value = this.headerMenu.getAttribute('position_value');
    } else {
      return;
    }
    switch (positioinName) {
      case 'top':
        this.headerMenu.style.top = value;
        break;
      case 'bottom':
        this.headerMenu.style.bottom = value;
        break;
      case 'left':
        this.headerMenu.style.left = value;
        break;
      case 'right':
        this.headerMenu.style.right = value;
        break;
      default:
        break;
    }
  }
  item_bg_color(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;
    if (this.headerMenu && items[i].hasAttribute("bg_color")) {
      items[i].style.backgroundColor = items[i].getAttribute("bg_color");
    }
  }
  item_hover_bg_color(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;

    // Set background color on hover
    items[i].addEventListener('mouseover', function () {
      if (items[i].hasAttribute("bg_hover_color")) {
        items[i].style.backgroundColor = items[i].getAttribute("bg_hover_color");
      }
    });
    items[i].addEventListener('mouseout', function () {
      if (items[i].hasAttribute("bg_color")) {
        items[i].style.backgroundColor = items[i].getAttribute("bg_color");
      }
    });
  }
  item_color(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;
    if (this.headerMenu && items[i].hasAttribute("color")) {
      items[i].style.color = items[i].getAttribute("color");
    }
  }
  item_hover_color(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;

    // Set background color on hover
    items[i].addEventListener('mouseover', function () {
      if (items[i].hasAttribute("hover_color")) {
        items[i].style.color = items[i].getAttribute("hover_color");
      }
    });
    items[i].addEventListener('mouseout', function () {
      if (items[i].hasAttribute("color")) {
        items[i].style.color = items[i].getAttribute("color");
      }
    });
  }
  item_px(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;
    if (items[i].hasAttribute("px")) {
      items[i].style.paddingLeft = items[i].getAttribute("px");
      items[i].style.paddingRight = items[i].getAttribute("px");
    }
  }
  item_py(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;
    if (items[i].hasAttribute("py")) {
      items[i].style.paddingTop = items[i].getAttribute("py");
      items[i].style.paddingBottom = items[i].getAttribute("py");
    }
  }
  item_mx(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;
    if (items[i].hasAttribute("mx")) {
      items[i].style.marginLeft = items[i].getAttribute("mx");
      items[i].style.marginRight = items[i].getAttribute("mx");
    }
  }
  item_my(i = 0) {
    if (!this.headerMenu) {
      return;
    }
    var items = this.headerMenu.children;
    if (items[i].hasAttribute("my")) {
      items[i].style.marginTop = items[i].getAttribute("my");
      items[i].style.marginBottom = items[i].getAttribute("my");
    }
  }
}
let gspHeaderContainer = null;
document.addEventListener("DOMContentLoaded", () => gspHeaderContainer = new GspHeaderMenuController());

/***/ }),

/***/ "./src/header/functions/mobile-menu.js":
/*!*********************************************!*\
  !*** ./src/header/functions/mobile-menu.js ***!
  \*********************************************/
/***/ (() => {

class GspSidebarMenuController {
  constructor() {
    // this is sidebar menu container
    this.menuContainer = document.getElementById('gsp-sidebar-menu-container');

    // this is the main [ul] tag for menu
    this.sidebarMenu = document.getElementById('gsp-sidebar-manu');

    // sidebar menu closer container
    this.menuCloser = document.getElementById('gsp-sidebar-menu-closer');

    // sidebar menu openner button
    this.menuOpenner = document.getElementById('gsp-sidebar-menu-openner');
    this.width = document.documentElement.clientWidth;
    if (this.menuCloser) {
      this.menuCloser.onclick = () => this.close_menu();
      this.menuOpenner.onclick = () => this.open_menu();

      // item styles
      for (let i = 0; i < this.sidebarMenu.children.length; i++) {
        this.item_bg_color(i);
        this.item_hover_bg_color(i);
        this.item_color(i);
        this.item_hover_color(i);
        this.item_px(i);
        this.item_py(i);
        this.item_mx(i);
        this.item_my(i);
      }
    }
  }
  open_menu() {
    this.menuContainer.classList.remove('hidden');
    this.menuContainer.classList.add('flex');
    setTimeout(() => this.menuContainer.style.left = '0px', 100);
  }
  close_menu() {
    this.menuContainer.style.left = '-' + this.width + 'px';
    setTimeout(function () {
      this.menuContainer.classList.remove('flex');
      this.menuContainer.classList.add('hidden');
    }.bind(this), 500);
  }
  item_bg_color(i = 0) {
    var items = this.sidebarMenu.children;
    if (items[i].hasAttribute("bg_color")) {
      items[i].style.backgroundColor = items[i].getAttribute("bg_color");
    }
  }
  item_hover_bg_color(i = 0) {
    var items = this.sidebarMenu.children;

    // Set background color on hover
    items[i].addEventListener('mouseover', function () {
      if (items[i].hasAttribute("bg_hover_color")) {
        items[i].style.backgroundColor = items[i].getAttribute("bg_hover_color");
      }
    });
    items[i].addEventListener('mouseout', function () {
      if (items[i].hasAttribute("bg_color")) {
        items[i].style.backgroundColor = items[i].getAttribute("bg_color");
      }
    });
  }
  item_color(i = 0) {
    var items = this.sidebarMenu.children;
    if (items[i].hasAttribute("color")) {
      items[i].style.color = items[i].getAttribute("color");
    }
  }
  item_hover_color(i = 0) {
    var items = this.sidebarMenu.children;

    // Set background color on hover
    items[i].addEventListener('mouseover', function () {
      if (items[i].hasAttribute("hover_color")) {
        items[i].style.color = items[i].getAttribute("hover_color");
      }
    });
    items[i].addEventListener('mouseout', function () {
      if (items[i].hasAttribute("color")) {
        items[i].style.color = items[i].getAttribute("color");
      }
    });
  }
  item_px(i = 0) {
    var items = this.sidebarMenu.children;
    if (items[i].hasAttribute("px")) {
      items[i].style.paddingLeft = items[i].getAttribute("px");
      items[i].style.paddingRight = items[i].getAttribute("px");
    }
  }
  item_py(i = 0) {
    var items = this.sidebarMenu.children;
    if (items[i].hasAttribute("py")) {
      items[i].style.paddingTop = items[i].getAttribute("py");
      items[i].style.paddingBottom = items[i].getAttribute("py");
    }
  }
  item_mx(i = 0) {
    var items = this.sidebarMenu.children;
    if (items[i].hasAttribute("mx")) {
      items[i].style.marginLeft = items[i].getAttribute("mx");
      items[i].style.marginRight = items[i].getAttribute("mx");
    }
  }
  item_my(i = 0) {
    var items = this.sidebarMenu.children;
    if (items[i].hasAttribute("my")) {
      items[i].style.marginTop = items[i].getAttribute("my");
      items[i].style.marginBottom = items[i].getAttribute("my");
    }
  }
} // class ending

let gspSidebarMenuContainer = null;
document.addEventListener("DOMContentLoaded", () => gspSidebarMenuContainer = new GspSidebarMenuController());

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************!*\
  !*** ./src/header/functions/script.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-menu */ "./src/header/functions/header-menu.js");
/* harmony import */ var _header_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-menu */ "./src/header/functions/mobile-menu.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-functions */ "./src/header/functions/common-functions.js");



})();

/******/ })()
;
//# sourceMappingURL=script.js.map