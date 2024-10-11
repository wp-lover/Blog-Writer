/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu-mobile/components/mobile-menu.js":
/*!***************************************************!*\
  !*** ./src/menu-mobile/components/mobile-menu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_editor_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/editor-logic */ "./src/menu-mobile/functions/editor-logic.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


// import references from "../functions/references";


function MobileMenu({
  items
}) {
  const menuContainer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const menuCloserOnclick = () => {
    gsp_sidebar_container_control(menuContainer.current);
  }; // onClick ending

  const meneIconStyles = {
    width: "50px",
    height: "50px",
    top: "20px",
    right: "20px",
    zIndex: 99
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: meneIconStyles,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        onClick: menuCloserOnclick,
        id: "gsp-sidebar-opener",
        width: "35",
        height: "35",
        viewBox: "0 0 100 80",
        fill: "black",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          width: "100",
          height: "10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          y: "30",
          width: "100",
          height: "10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          y: "60",
          width: "100",
          height: "10"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      ref: menuContainer,
      id: "gsp-sidebar-container",
      style: {
        zIndex: 100,
        left: "0px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          id: "gsp-mobile-menu",
          className: "mobile-menu",
          children: items.map(function (e) {
            const [hoverd, setHoverd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
            var link = e[0]['link'];
            var id = e[0]['ID'];
            var name = e[0]['name'];
            var ID = "nav-item-" + id;
            var classes = "nav-item-" + id + " nav-item";
            const for_on_click = e => {

              // let item = e.view.document.getElementById(ID);

              // gsp_header_sub_menu(item , attributes.sub_menu_margin_t);
            };
            if (e[0]['has_child']) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                id: ID,
                className: classes + " item-parent",
                onClick: for_on_click,
                onMouseEnter: () => setHoverd(true),
                onMouseLeave: () => setHoverd(false),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  itemprop: "url",
                  href: link,
                  class: "nav-link",
                  "aria-current": "page",
                  children: name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                  class: "",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                    id: "path-id-128",
                    d: "M6 9l6 6 6-6"
                  })
                })]
              });
            }
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              id: ID,
              className: classes,
              onMouseEnter: () => setHoverd(true),
              onMouseLeave: () => setHoverd(false),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                itemprop: "url",
                href: link,
                class: "nav-link",
                "aria-current": "page",
                children: name
              })
            });
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        id: "gsp-sidebar-closer",
        onClick: menuCloserOnclick,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          id: "sidebar_closer_btn",
          children: "X"
        })
      })]
    })]
  });
}
function gsp_sidebar_container_control(element) {
  let display = '';
  if (element.style.left == '0px') {
    element.style.left = "-100vw";
    display = 'none';
  } else {
    element.style.left = "0px";
    display = 'flex';
  }
  setTimeout(() => {
    element.style.display = display;
  }, 500);
}
function SubMenu({
  item
}) {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    className: "sub-menu hidden",
    style: {
      marginTop: attributes.sub_menu_margin_t + 35 + "px"
    },
    children: item.map(function (e, i) {
      const [hoverd, setHoverd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

      // const itemStyles = {
      //     minWidth: styles.minWidth,
      //      background:  hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color,
      //      marginBottom:attributes.child_item_margin_b,
      //      paddingLeft:styles.paddingLeft,
      //      paddingRight:styles.paddingRight,
      //      paddingTop:styles.paddingTop,
      //      paddingBottom:styles.paddingBottom,
      //      borderRadius: "10px",
      //      listStyle:"none"
      //  };

      if (i != 0) {
        var link = e[0]['link'] ? e[0]['link'] : '';
        var id = e[0]['ID'] ? e[0]['ID'] : '';
        var name = e[0]['name'] ? e[0]['name'] : '';
        var ID = "nav-item-" + id;
        var classes = "nav-item-" + id + " nav-item";
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          id: ID,
          className: classes,
          onMouseEnter: () => setHoverd(true),
          onMouseLeave: () => setHoverd(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            itemprop: "url",
            href: link,
            class: "nav-link",
            "aria-current": "page",
            style: {
              color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color,
              textDecoration: "none"
            },
            children: name
          })
        });
      }
    })
  });
}
let styles = null;
function gsp_header_sub_menu(item, marginTop) {
  var child = item.getElementsByClassName('sub-menu');

  // if not container class named 'hidden'
  if (!child[0].classList.contains('hidden')) {
    child[0].style.opacity = 0;
    setTimeout(function () {
      child[0].classList.remove('d-block');
      child[0].classList.add('hidden');
    }, 450);
    controll_dropdown_icon(item, item.getAttribute('color'), false);
  } else {
    child[0].classList.remove('hidden');
    child[0].classList.add('d-block');
    if (styles == null) {
      styles = child[0].style;
    }
    setTimeout(function () {
      child[0].style.opacity = 1;
      child[0].style.marginTop = styles.marginTop;
    }, 100);
    controll_dropdown_icon(item, item.getAttribute('hover_color'), true);
  }
}
function controll_dropdown_icon(item, fillColor, isOpen) {
  let path = item.getElementsByTagName('path')[0];
  if (isOpen) {
    path.setAttribute("d", "M6 15l6-6 6 6");
    path.setAttribute("fill", fillColor);
  } else {
    path.setAttribute("d", "M6 9l6 6 6-6");
    path.setAttribute("fill", fillColor);
  }
}

/***/ }),

/***/ "./src/menu-mobile/components/panel/editor-panel.js":
/*!**********************************************************!*\
  !*** ./src/menu-mobile/components/panel/editor-panel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function EditorPanel() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_3__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            initialPosition: attributes.menu_container_margin_y,
            label: "Menu Container Margin-Y",
            max: 100,
            min: -100,
            onChange: val => {
              setAttributes({
                menu_container_margin_y: val
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            initialPosition: attributes.item_min_width,
            label: "Item min-width",
            max: 450,
            min: 0,
            onChange: val => {
              setAttributes({
                item_min_width: val
              });
            }
          })]
        })
      })
    })
  });
}

// <ColorsPanel />
// <SpacePanelDesktop />
// <SubMenuSettings />

/***/ }),

/***/ "./src/menu-mobile/functions/context-api.js":
/*!**************************************************!*\
  !*** ./src/menu-mobile/functions/context-api.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextAttributes: () => (/* binding */ ContextAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


// 
const ContextAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();

/***/ }),

/***/ "./src/menu-mobile/functions/editor-logic.js":
/*!***************************************************!*\
  !*** ./src/menu-mobile/functions/editor-logic.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuMobileLogic)
/* harmony export */ });
/* harmony import */ var _references__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./references */ "./src/menu-mobile/functions/references.js");

class MenuMobileLogic {
  /**
   * 
   * @param i [is menu-item id number] 
   */
  gsp_sidebar_sub_menu(i) {
    var item = document.getElementById('nav-item-' + i);
    var child = item.getElementsByClassName('sub-menu');
    if (child[0].style.left == '0px') {
      child[0].style.left = '-600px';
      setTimeout(function () {
        child[0].style.display = 'none';
      }, 550);
    } else {
      child[0].style.display = 'block';
      setTimeout(function () {
        child[0].style.left = '0px';
      }, 100);
    }
  }
}

/***/ }),

/***/ "./src/menu-mobile/functions/references.js":
/*!*************************************************!*\
  !*** ./src/menu-mobile/functions/references.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// references module
const references = {
  mobile_menu_container: null,
  sidebar_menu_closer: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (references);

/***/ }),

/***/ "./src/menu-mobile/editor-index.css":
/*!******************************************!*\
  !*** ./src/menu-mobile/editor-index.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/menu-mobile/block.json":
/*!************************************!*\
  !*** ./src/menu-mobile/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"http://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gsp/menu-mobile","icon":"menu","category":"blog-writer","title":"Menu Mobile","textdomain":"writteninfo","editorScript":"file:./editor-index.js","script":"file:./functions/logic.js","style":"file:./editor-index.css","render":"file:./render.php","supports":{},"attributes":{"is_hidden":{"type":"boolean","default":false},"menu_container_margin_y":{"type":"number","default":0},"item_min_width":{"type":"number","default":100},"has_data":{"type":"boolean","default":false},"item_bg_color":{"type":"string","default":"#eed6d3"},"item_bg_hover_color":{"type":"string","default":"#e8b4b8"},"item_text_color":{"type":"string","default":"black"},"item_text_hover_color":{"type":"string","default":"#a49393"},"submenu_bg":{"type":"string","default":""},"child_item_bg_color":{"type":"string","default":"#eed6d3"},"child_item_bg_hover_color":{"type":"string","default":"#e8b4b8"},"child_item_text_color":{"type":"string","default":"black"},"child_item_text_hover_color":{"type":"string","default":"#a49393"},"item_margin_t":{"type":"number","default":0},"item_margin_l":{"type":"number","default":5},"item_margin_r":{"type":"number","default":5},"item_margin_b":{"type":"number","default":0},"item_padding_t":{"type":"number","default":8},"item_padding_l":{"type":"number","default":8},"item_padding_r":{"type":"number","default":8},"item_padding_b":{"type":"number","default":8},"sub_menu_margin_t":{"type":"number","default":0},"child_item_margin_b":{"type":"number","default":2}}}');

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
/*!*****************************************!*\
  !*** ./src/menu-mobile/editor-index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/menu-mobile/block.json");
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var _components_panel_editor_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/panel/editor-panel */ "./src/menu-mobile/components/panel/editor-panel.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mobile-menu */ "./src/menu-mobile/components/mobile-menu.js");
/* harmony import */ var _editor_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor-index.css */ "./src/menu-mobile/editor-index.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: Edit,
  save: function (props) {
    return null;
  }
});
function Edit(props) {
  // const blockProps = useBlockProps();
  const [menus, setMenus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [isLoading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [loadingMessage, setLoadingMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('Data loading...');
  const {
    attributes,
    setAttributes
  } = props;
  const blocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();

  // Do not make request for data if the block is not selected.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/gsp/v1/menu'
    }).then(menu => {
      if (menu['success']) {
        setMenus(menu['data']['menu']);
        setLoading(false);
      } else {
        alert('Menu-Desktop did not found menu data, pleasse add menu first.');
        setLoadingMessage('Menu-Desktop did not found menu data, pleasse add menu first.');
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_functions_context_api__WEBPACK_IMPORTED_MODULE_5__.ContextAttributes.Provider, {
      value: [attributes, setAttributes],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_panel_editor_panel__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        ...blocksProps,
        children: isLoading == false ? menuWrapper(menus) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
            children: loadingMessage
          })
        })
      })]
    })
  });
}
function menuWrapper(items) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      items: items
    })
  });
}
/******/ })()
;
//# sourceMappingURL=editor-index.js.map