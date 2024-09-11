/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header/components/common/margin.js":
/*!************************************************!*\
  !*** ./src/header/components/common/margin.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Margin)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Margin(array) {
  const title = array.props[0];
  const key = array.props[1];
  const initialValue = array.props[2];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      initialPosition: initialValue,
      label: title,
      max: 100,
      min: 0,
      onChange: val => {
        setAttributes({
          key: val
        });
      }
    })
  });
}

/***/ }),

/***/ "./src/header/components/common/padding.js":
/*!*************************************************!*\
  !*** ./src/header/components/common/padding.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Padding)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Padding(array) {
  const title = array.props[0];
  const key = array.props[1];
  const initialValue = array.props[2];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      help: "Please select how transparent you would like this.",
      initialPosition: initialValue,
      label: title,
      max: 100,
      min: 0,
      onChange: val => {
        setAttributes({
          key: val
        });
      }
    })
  });
}

/***/ }),

/***/ "./src/header/components/common/panel-margin.js":
/*!******************************************************!*\
  !*** ./src/header/components/common/panel-margin.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelMargin)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PanelMargin({
  items = [],
  isOpen = false
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      title: "Margin",
      initialOpen: isOpen,
      children: items.map(e => e)
    })
  });
}

/***/ }),

/***/ "./src/header/components/common/panel-padding.js":
/*!*******************************************************!*\
  !*** ./src/header/components/common/panel-padding.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelMargin)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PanelMargin({
  items = [],
  isOpen = false
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      title: "Padding",
      initialOpen: isOpen,
      children: items.map(e => e)
    })
  });
}

/***/ }),

/***/ "./src/header/components/desktop/header-menu.js":
/*!******************************************************!*\
  !*** ./src/header/components/desktop/header-menu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderMenu)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/context-api */ "./src/header/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function HeaderMenu({
  items
}) {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_1__.ContextAttributes);
  const li_styles = {
    mainWidth: '270px',
    background: attributes.item_bg_color,
    marginTop: attributes.item_margin_t + "px",
    marginLeft: attributes.item_margin_l + "px",
    marginRight: attributes.item_margin_r + "px",
    marginBottom: attributes.item_margin_b + "px",
    paddingTop: attributes.item_padding_t + "px",
    paddingLeft: attributes.item_padding_l + "px",
    paddingRight: attributes.item_padding_r + "px",
    paddingBottom: attributes.item_padding_b + "px"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
      id: "gsp-header-container",
      class: "gsp-site-header md:flex md:items-end md:justify-between z-40 md:h-20 min-w-full py-0  px-4",
      style: {
        backgroundColor: attributes.header_bg
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        class: "gsp-site-name bg-slate-400 flex justify-between p-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          class: "gsp-site-name text-white text-xl",
          children: "This is siteName"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          id: "gsp-sidebar-menu-openner",
          class: "md:hidden p-2 bg-black text-white fle",
          children: "open"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        id: "gsp-header-menu",
        class: "header-menu hidden md:flex justify-start",
        children: items.map(function (e) {
          var link = e[0]['link'];
          var id = e[0]['ID'];
          var name = e[0]['name'];
          var ID = "nav-item-" + id;
          var classes = "nav-item-" + id + " nav-item";
          const for_on_click = e => {
            let item = e.view.document.getElementById(ID);
            gsp_header_sub_menu(item, attributes.sub_menu_margin_t);
          };
          if (e[0]['has_child']) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              id: ID,
              className: classes + " item-parent",
              style: li_styles,
              onClick: for_on_click,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                itemprop: "url",
                href: link,
                class: "nav-link",
                "aria-current": "page",
                style: {
                  color: attributes.item_text_color
                },
                children: name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SubMenu, {
                item: e,
                styles: li_styles
              })]
            });
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            id: ID,
            className: classes,
            style: li_styles,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              itemprop: "url",
              href: link,
              class: "nav-link",
              "aria-current": "page",
              style: {
                color: attributes.item_text_color
              },
              children: name
            })
          });
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        class: "hidden md:block ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          class: "p-2 bg-slate-500 text-white rounded-md",
          children: "SIGN-IN"
        })
      })]
    })
  });
}
function SubMenu({
  item,
  styles
}) {
  styles = {
    ...styles
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    className: "sub-menu hidden",
    children: item.map(function (e, i) {
      if (i != 0) {
        var link = e[0]['link'] ? e[0]['link'] : '';
        var id = e[0]['ID'] ? e[0]['ID'] : '';
        var name = e[0]['name'] ? e[0]['name'] : '';
        var ID = "nav-item-" + id;
        var classes = "nav-item-" + id + " nav-item";
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          id: ID,
          className: classes,
          style: styles,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            itemprop: "url",
            href: link,
            class: "nav-link",
            "aria-current": "page",
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

    // controll_dropdown_icon( i , item.getAttribute( 'color' ) , false );
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

    // controll_dropdown_icon( i , item.getAttribute( 'hover_color' ) , true );
  }
}
function controll_dropdown_icon(item, fillColor, isOpen) {
  let path = item.getElementById("path-id-" + i);
  if (isOpen) {
    path.setAttribute("d", "M6 15l6-6 6 6");
    path.setAttribute("fill", fillColor);
  } else {
    path.setAttribute("d", "M6 9l6 6 6-6");
    path.setAttribute("fill", fillColor);
  }
}

/***/ }),

/***/ "./src/header/components/desktop/panels/colors-panel.js":
/*!**************************************************************!*\
  !*** ./src/header/components/desktop/panels/colors-panel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorsPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../functions/context-api */ "./src/header/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ColorsPanel() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
        title: "Colors",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            children: "Header Background Color"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
            onChange: val => {
              setAttributes({
                header_bg: val
              });
            },
            enableAlpha: true,
            defaultValue: attributes.header_bg
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            children: "Item Background Color"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
            onChange: val => {
              setAttributes({
                item_bg_color: val
              });
            },
            enableAlpha: true,
            defaultValue: attributes.item_bg_color
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            children: "Item Text Color"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
            onChange: val => {
              setAttributes({
                item_text_color: val
              });
            },
            enableAlpha: true,
            defaultValue: attributes.item_text_color
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./src/header/components/desktop/panels/space-panel-desktop.js":
/*!*********************************************************************!*\
  !*** ./src/header/components/desktop/panels/space-panel-desktop.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpacePanelDesktop)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../functions/context-api */ "./src/header/functions/context-api.js");
/* harmony import */ var _common_margin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/margin */ "./src/header/components/common/margin.js");
/* harmony import */ var _common_padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/padding */ "./src/header/components/common/padding.js");
/* harmony import */ var _common_panel_margin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/panel-margin */ "./src/header/components/common/panel-margin.js");
/* harmony import */ var _common_panel_padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/panel-padding */ "./src/header/components/common/panel-padding.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function SpacePanelDesktop() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_1__.ContextAttributes);
  const margins = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_margin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: ["Margin-Left", "margin_l", attributes.item_margin_l]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_margin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: ["Margin-Right", "margin_r", attributes.item_margin_r]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_margin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: ["Margin-Bottom", "margin_b", attributes.item_margin_b]
  })];
  const padings = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_padding__WEBPACK_IMPORTED_MODULE_3__["default"], {
    props: ["Padding-Top", "padding_t", attributes.item_padding_t]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_padding__WEBPACK_IMPORTED_MODULE_3__["default"], {
    props: ["Padding-Left", "padding_l", attributes.item_padding_l]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_padding__WEBPACK_IMPORTED_MODULE_3__["default"], {
    props: ["Padding-Left", "padding_r", attributes.item_padding_r]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_padding__WEBPACK_IMPORTED_MODULE_3__["default"], {
    props: ["Padding-Bottom", "padding_b", attributes.item_padding_b]
  })];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_panel_margin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: margins
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_panel_padding__WEBPACK_IMPORTED_MODULE_5__["default"], {
      items: padings
    })]
  });
}

/***/ }),

/***/ "./src/header/components/desktop/panels/sub-menu-panel.js":
/*!****************************************************************!*\
  !*** ./src/header/components/desktop/panels/sub-menu-panel.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SubMenuSettings)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../functions/context-api */ "./src/header/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function SubMenuSettings() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Margin, {})
  });
}
function Margin() {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_2__.ContextAttributes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      title: "Dropdown Menu Margin",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          initialPosition: attributes.sub_menu_margin_t,
          label: "Container Margin-Top",
          max: 100,
          min: 0,
          onChange: val => {
            setAttributes();
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          initialPosition: attributes.child_item_margin_b,
          label: "Item Margin-Bottom",
          max: 100,
          min: 0,
          onChange: val => {
            setAttributes();
          }
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/header/components/editor-panel.js":
/*!***********************************************!*\
  !*** ./src/header/components/editor-panel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _desktop_panels_colors_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop/panels/colors-panel */ "./src/header/components/desktop/panels/colors-panel.js");
/* harmony import */ var _desktop_panels_sub_menu_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop/panels/sub-menu-panel */ "./src/header/components/desktop/panels/sub-menu-panel.js");
/* harmony import */ var _desktop_panels_space_panel_desktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop/panels/space-panel-desktop */ "./src/header/components/desktop/panels/space-panel-desktop.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const onSelect = tabName => {

  // if (tabName == 'desktop') {
  //     isDesktop.value = true;
  // } else {
  //     isDesktop.value = false;
  // }
};
function EditorPanel() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
        className: "my-tab-panel",
        activeClass: "active-tab",
        onSelect: onSelect,
        tabs: [{
          name: 'desktop',
          title: 'Desktop View',
          className: 'tab-one'
        }, {
          name: 'mobile',
          title: 'Mobile View',
          className: 'tab-two'
        }],
        children: tab => {
          return tab.name == 'desktop' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DesktopHeaderMenu, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MobileSidebaMenu, {});
        }
      })
    })
  });
}
function DesktopHeaderMenu() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_desktop_panels_colors_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_desktop_panels_space_panel_desktop__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_desktop_panels_sub_menu_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
}
function MobileSidebaMenu() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_desktop_panels_space_panel_desktop__WEBPACK_IMPORTED_MODULE_4__["default"], {})
  });
}

/***/ }),

/***/ "./src/header/components/mobile/sidebar-menu.js":
/*!******************************************************!*\
  !*** ./src/header/components/mobile/sidebar-menu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarMenu)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/context-api */ "./src/header/functions/context-api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function SidebarMenu({
  items
}) {
  const [attributes, setAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_functions_context_api__WEBPACK_IMPORTED_MODULE_1__.ContextAttributes);
  const li_styles = {
    mainWidth: '270px',
    background: attributes.sidebar_item_bg_color,
    color: attributes.sidebar_item_text_color,
    marginTop: attributes.sidebar_item_margin_t + "px",
    marginLeft: attributes.sidebar_item_margin_l + "px",
    marginRight: attributes.sidebar_item_margin_r + "px",
    marginBottom: attributes.sidebar_item_margin_b + "px",
    paddingTop: attributes.sidebar_item_padding_t + "px",
    paddingLeft: attributes.sidebar_item_padding_l + "px",
    paddingRight: attributes.sidebar_item_padding_r + "px",
    paddingBottom: attributes.sidebar_item_padding_b + "px"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    id: "gsp-sidebar-menu-container",
    class: "hidden md:hidden justify-start min-w-full min-h-full inset-0 fixed overflow-y-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        id: "gsp-sidebar-manu",
        class: "nav-primary-menu",
        children: items.map(function (e) {
          var link = e[0]['link'];
          var id = e[0]['ID'];
          var name = e[0]['name'];
          var ID = "nav-item-" + id;
          var classes = "nav-item-" + id + " nav-item";
          const for_on_click = e => {
            let item = e.view.document.getElementById(ID);
            // gsp_header_sub_menu(item , states.sub_menu_margin_t);
          };
          if (e[0]['has_child']) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              id: ID,
              className: classes + " item-parent",
              style: li_styles,
              onClick: for_on_click,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                itemprop: "url",
                href: link,
                class: "nav-link",
                "aria-current": "page",
                children: name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SubMenu, {
                item: e,
                styles: li_styles
              })]
            });
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            id: ID,
            className: classes,
            style: li_styles,
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
      id: "gsp-sidebar-menu-closer",
      class: "menu-closer-box w-1/5 min-h-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        class: "w-15 h-15 mt-2 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          class: "menu-icon mr-2 pr-2 pl-2 pt-0 text-center bg-red-600  text-xl absolute right-0",
          children: "x"
        })
      })
    })]
  });
}
function SubMenu({
  item,
  styles
}) {
  // const [attributes , setAttributes] = useContext(ContextAttributes);

  styles = {
    ...styles
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    className: "sub-menu hidden",
    children: item.map(function (e, i) {
      if (i != 0) {
        var link = e[0]['link'] ? e[0]['link'] : '';
        var id = e[0]['ID'] ? e[0]['ID'] : '';
        var name = e[0]['name'] ? e[0]['name'] : '';
        var ID = "nav-item-" + id;
        var classes = "nav-item-" + id + " nav-item";
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          id: ID,
          className: classes,
          style: styles,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            itemprop: "url",
            href: link,
            class: "nav-link",
            "aria-current": "page",
            children: name
          })
        });
      }
    })
  });
}

/***/ }),

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

/***/ "./src/header/functions/context-api.js":
/*!*********************************************!*\
  !*** ./src/header/functions/context-api.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextAttributes: () => (/* binding */ ContextAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


// 
const ContextAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();

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

/***/ }),

/***/ "./src/header/functions/script.js":
/*!****************************************!*\
  !*** ./src/header/functions/script.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-menu */ "./src/header/functions/header-menu.js");
/* harmony import */ var _header_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-menu */ "./src/header/functions/mobile-menu.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-functions */ "./src/header/functions/common-functions.js");




/***/ }),

/***/ "./src/header/index.js":
/*!*****************************!*\
  !*** ./src/header/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/header/block.json");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/header/style.css");
/* harmony import */ var _functions_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/script */ "./src/header/functions/script.js");
/* harmony import */ var _functions_context_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/context-api */ "./src/header/functions/context-api.js");
/* harmony import */ var _components_editor_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/editor-panel */ "./src/header/components/editor-panel.js");
/* harmony import */ var _components_desktop_header_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/desktop/header-menu */ "./src/header/components/desktop/header-menu.js");
/* harmony import */ var _components_mobile_sidebar_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mobile/sidebar-menu */ "./src/header/components/mobile/sidebar-menu.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: Edit,
  save: function (props) {
    return null;
  }
});
function Edit(props) {
  // const blockProps = useBlockProps();
  const [menus, setMenus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    attributes,
    setAttributes
  } = props;
  const blocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();

  // Do not make request for data if the block is not selected.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/gsp/v1/menu'
    }).then(menus => {
      // setMenus(menus);
      console.log(menus);
      setMenus(menus['data']['menu']);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_functions_context_api__WEBPACK_IMPORTED_MODULE_7__.ContextAttributes.Provider, {
      value: [attributes, setAttributes],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_editor_panel__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        ...blocksProps,
        children: menus.length > 0 ? menuWrapper(menus) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          children: "Data loading..."
        })
      })]
    })
  });
}
function menuWrapper(items) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_desktop_header_menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      items: items
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_mobile_sidebar_menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
      items: items
    })]
  });
}

/***/ }),

/***/ "./src/header/style.css":
/*!******************************!*\
  !*** ./src/header/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/header/block.json":
/*!*******************************!*\
  !*** ./src/header/block.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"http://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gsp/header","title":"Site Header","textdomain":"writteninfo","editorScript":"file:./index.js","script":"file:./functions/script.js","style":"file:./style-index.css","render":"file:./render.php","attributes":{"is_desktop":{"type":"boolean","default":true},"header_bg":{"type":"string","default":""},"title_text":{"type":"string","default":""},"item_bg_color":{"type":"string","default":""},"item_bg_hover_color":{"type":"string","default":""},"item_text_color":{"type":"string","default":""},"item_text_hover_color":{"type":"string","default":""},"submenu_bg":{"type":"string","default":""},"child_item_bg_color":{"type":"string","default":""},"child_item_bg_hover_color":{"type":"string","default":""},"child_item_text_color":{"type":"string","default":""},"child_item_text_hover_color":{"type":"string","default":""},"item_margin_t":{"type":"number","default":0},"item_margin_l":{"type":"number","default":5},"item_margin_r":{"type":"number","default":5},"item_margin_b":{"type":"number","default":0},"item_padding_t":{"type":"number","default":0},"item_padding_l":{"type":"number","default":8},"item_padding_r":{"type":"number","default":8},"item_padding_b":{"type":"number","default":0},"sub_menu_margin_t":{"type":"number","default":10},"child_item_margin_b":{"type":"number","default":8},"sidebar_bg":{"type":"string","default":""},"sidebar_item_bg_color":{"type":"string","default":""},"sidebar_item_bg_hover_color":{"type":"string","default":""},"sidebar_item_text_color":{"type":"string","default":""},"sidebar_item_text_hover_color":{"type":"string","default":""},"sidebar_item_margin_t":{"type":"number","default":0},"sidebar_item_margin_l":{"type":"number","default":0},"sidebar_item_margin_r":{"type":"number","default":0},"sidebar_item_margin_b":{"type":"number","default":10},"sidebar_item_padding_t":{"type":"number","default":8},"sidebar_item_padding_l":{"type":"number","default":8},"sidebar_item_padding_r":{"type":"number","default":8},"sidebar_item_padding_b":{"type":"number","default":0}}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"header/index": 0,
/******/ 			"header/style-index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkblog_writer"] = self["webpackChunkblog_writer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["header/style-index"], () => (__webpack_require__("./src/header/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map