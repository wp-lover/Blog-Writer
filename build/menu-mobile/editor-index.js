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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function MobileMenu({
  items
}) {
  const [attributes, setAttribute] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  const menuContainer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [hoverd, setHoverd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
  const liStyles = {
    backgroundColor: hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color
  };
  const linkStyles = {
    color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: meneIconStyles,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        onClick: menuCloserOnclick,
        id: "gsp-sidebar-opener",
        width: "35",
        height: "35",
        viewBox: "0 0 100 80",
        fill: "black",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
          width: "100",
          height: "10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
          y: "30",
          width: "100",
          height: "10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
          y: "60",
          width: "100",
          height: "10"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      ref: menuContainer,
      id: "gsp-sidebar-container",
      style: {
        zIndex: 100,
        left: "0px",
        marginTop: attributes.container_margin_t + "px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          background: attributes.container_bg_color
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
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
              let item = e.view.document.getElementById(ID);
              sidebar_sub_menu(item);
            };
            if (e[0]['has_child']) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                id: ID,
                className: classes + " item-parent",
                style: {
                  background: hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color
                },
                onClick: for_on_click,
                onMouseEnter: () => setHoverd(true),
                onMouseLeave: () => setHoverd(false),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  itemprop: "url",
                  href: link,
                  class: "nav-link",
                  "aria-current": "page",
                  style: {
                    color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color
                  },
                  children: [name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                    class: "",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                      fill: hoverd ? attributes.item_text_hover_color : attributes.item_text_color,
                      id: "path-id-128",
                      d: "M6 9l6 6 6-6"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SubMenu, {
                  item: e,
                  liStyles: liStyles
                })]
              });
            }
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              id: ID,
              className: classes,
              style: {
                background: hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color
              },
              onMouseEnter: () => setHoverd(true),
              onMouseLeave: () => setHoverd(false),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                itemprop: "url",
                href: link,
                class: "nav-link",
                "aria-current": "page",
                style: {
                  color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color
                },
                children: name
              })
            });
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        id: "gsp-sidebar-closer",
        style: {
          opacity: ".5"
        },
        onClick: menuCloserOnclick,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
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
  item,
  liStyles
}) {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
    className: "sub-menu",
    style: {
      display: "none"
    },
    children: item.map(function (e, i) {
      const [hoverd, setHoverd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
      if (i != 0) {
        var link = e[0]['link'] ? e[0]['link'] : '';
        var id = e[0]['ID'] ? e[0]['ID'] : '';
        var name = e[0]['name'] ? e[0]['name'] : '';
        var ID = "nav-item-" + id;
        var classes = "nav-item-" + id + " nav-item";
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
          id: ID,
          className: classes,
          style: {
            background: hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color
          },
          onMouseEnter: () => setHoverd(true),
          onMouseLeave: () => setHoverd(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
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
function sidebar_sub_menu(item) {
  var subMenu = item.querySelector('.sub-menu');

  // if not container class named 'hidden'
  if (subMenu.style.display != "block") {
    subMenu.style.display = "block";
    setTimeout(function () {
      subMenu.style.left = "0px";
    }, 100);
    controll_dropdown_icon(item, '', true);
  } else {
    subMenu.style.left = "-70%";
    setTimeout(function () {
      subMenu.style.display = "none";
    }, 500);
    controll_dropdown_icon(item, '', false);
  }
}
function controll_dropdown_icon(item, fillColor, isOpen) {
  let path = item.querySelector('path');
  if (isOpen) {
    path.setAttribute("d", "M6 15l6-6 6 6");
    path.setAttribute("fill", fillColor);
  } else {
    path.setAttribute("d", "M6 9l6 6 6-6");
    path.setAttribute("fill", fillColor);
  }
}

/***/ }),

/***/ "./src/menu-mobile/components/panel/container-bg-color.js":
/*!****************************************************************!*\
  !*** ./src/menu-mobile/components/panel/container-bg-color.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerBgColor: () => (/* binding */ ContainerBgColor)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ContainerBgColor() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      initialOpen: false,
      title: "Container Background Color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
        onChange: val => {
          setAttributes({
            container_bg_color: val
          });
        },
        enableAlpha: true,
        defaultValue: attributes.container_bg_color
      })
    })
  });
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/menu-mobile/components/panel/settings.js");
/* harmony import */ var _container_bg_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container-bg-color */ "./src/menu-mobile/components/panel/container-bg-color.js");
/* harmony import */ var _item_bg_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-bg-color */ "./src/menu-mobile/components/panel/item-bg-color.js");
/* harmony import */ var _item_text_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-text-color */ "./src/menu-mobile/components/panel/item-text-color.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function EditorPanel() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_settings__WEBPACK_IMPORTED_MODULE_3__.Settings, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_container_bg_color__WEBPACK_IMPORTED_MODULE_4__.ContainerBgColor, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_item_bg_color__WEBPACK_IMPORTED_MODULE_5__.ItemBgColor, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_item_bg_color__WEBPACK_IMPORTED_MODULE_5__.ItemBgHoverColor, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_item_text_color__WEBPACK_IMPORTED_MODULE_6__.ItemTextColor, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_item_text_color__WEBPACK_IMPORTED_MODULE_6__.ItemTextHoverColor, {})]
    })
  });
}

// <ColorsPanel />
// <SpacePanelDesktop />
// <SubMenuSettings />

/***/ }),

/***/ "./src/menu-mobile/components/panel/item-bg-color.js":
/*!***********************************************************!*\
  !*** ./src/menu-mobile/components/panel/item-bg-color.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemBgColor: () => (/* binding */ ItemBgColor),
/* harmony export */   ItemBgHoverColor: () => (/* binding */ ItemBgHoverColor)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ItemBgColor() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      initialOpen: false,
      title: "Item Background Color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
        onChange: val => {
          setAttributes({
            item_bg_color: val
          });
        },
        enableAlpha: true,
        defaultValue: attributes.item_bg_color
      })
    })
  });
}
function ItemBgHoverColor() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      initialOpen: false,
      title: "Item Background Hover Color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
        onChange: val => {
          setAttributes({
            item_bg_hover_color: val
          });
        },
        enableAlpha: true,
        defaultValue: attributes.item_bg_hover_color
      })
    })
  });
}

/***/ }),

/***/ "./src/menu-mobile/components/panel/item-text-color.js":
/*!*************************************************************!*\
  !*** ./src/menu-mobile/components/panel/item-text-color.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemTextColor: () => (/* binding */ ItemTextColor),
/* harmony export */   ItemTextHoverColor: () => (/* binding */ ItemTextHoverColor)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ItemTextColor() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      initialOpen: false,
      title: "Item Text Color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
        onChange: val => {
          setAttributes({
            item_text_color: val
          });
        },
        enableAlpha: true,
        defaultValue: attributes.item_text_color
      })
    })
  });
}
function ItemTextHoverColor() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      initialOpen: false,
      title: "Item Text Hover Color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
        onChange: val => {
          setAttributes({
            item_text_hover_color: val
          });
        },
        enableAlpha: true,
        defaultValue: attributes.item_text_hover_color
      })
    })
  });
}

/***/ }),

/***/ "./src/menu-mobile/components/panel/settings.js":
/*!******************************************************!*\
  !*** ./src/menu-mobile/components/panel/settings.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Settings: () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/context-api */ "./src/menu-mobile/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Settings() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      initialOpen: true,
      title: "Settings",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        initialPosition: attributes.container_margin_t,
        label: "Container Margin-Top",
        max: 100,
        min: -100,
        onChange: val => {
          setAttributes({
            container_margin_t: val
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
        label: "Hide on Desktop",
        checked: attributes.is_hidden_desktop,
        onChange: val => setAttributes({
          is_hidden_desktop: val
        })
      })]
    })
  });
}

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

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"http://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gsp/menu-mobile","icon":"menu","category":"blog-writer","title":"Menu Mobile","textdomain":"writteninfo","editorScript":"file:./editor-index.js","viewScript":"file:./functions/logic.js","style":"file:./editor-index.css","render":"file:./render.php","supports":{},"attributes":{"is_hidden_desktop":{"type":"boolean","default":false},"has_data":{"type":"boolean","default":false},"container_margin_t":{"type":"number","default":0},"container_bg_color":{"type":"string","default":"white"},"submenu_bg":{"type":"string","default":""},"item_bg_color":{"type":"string","default":"#eed6d3"},"item_bg_hover_color":{"type":"string","default":"#e8b4b8"},"item_text_color":{"type":"string","default":"black"},"item_text_hover_color":{"type":"string","default":"#a49393"}}}');

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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
    });
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