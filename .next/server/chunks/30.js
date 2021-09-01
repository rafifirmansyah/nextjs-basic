exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 6066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(4795);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header/index.tsx




function Header() {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: (Header_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (Header_module_default()).list,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Header_module_default()).item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Header_module_default()).item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/blog",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Blog"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Header_module_default()).item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/users",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Users"
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(2202);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/index.tsx


function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (Footer_module_default()).title,
      children: "made with love @cisauk"
    })
  });
}
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(5667);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout/index.tsx







function Layout(props) {
  const {
    children,
    pageTitle
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["NextJS Basic | ", pageTitle]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Website NextJS Basic"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Layout_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Layout_module_default()).content,
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })]
  });
}

/***/ }),

/***/ 2202:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Footer_title__8WFkX"
};


/***/ }),

/***/ 4795:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__3BetX",
	"list": "Header_list__3eyR4",
	"item": "Header_item__1qvUh"
};


/***/ }),

/***/ 5667:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__1SPwL",
	"content": "Layout_content__ITFy4"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;