(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1027:function(e,t,n){"use strict";var r=n(26),o=n(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),c=(0,r(n(27)).default)(a.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutlineSharp");t.default=c},1028:function(e,t,n){"use strict";var r=n(26),o=n(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),c=(0,r(n(27)).default)(a.createElement("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"RemoveCircleOutlineSharp");t.default=c},1029:function(e,t,n){"use strict";var r=n(26),o=n(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),c=(0,r(n(27)).default)(a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutlineSharp");t.default=c},1046:function(e,t,n){"use strict";n.r(t);var r=n(13),o=n(17),a=n(0),c=n.n(a),i=n(15),u=n(392),l=n(9),s=n(307),f=n(31),p=n(54),d=n.n(p),v=n(495),b=n(101),h=n(931),y=n(398),w=n(75),m=n(1027),O=n.n(m),j=n(1028),g=n.n(j),E=n(498);function C(e){return c.a.createElement(E.a,e,c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"}),c.a.createElement("path",{d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"})))}var _=n(55);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o=I(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).handleZoomInClick=t.handleZoomInClick.bind(R(t)),t.handleZoomOutClick=t.handleZoomOutClick.bind(R(t)),t}return t=a,(n=[{key:"handleZoomInClick",value:function(){var e=this.props,t=e.windowId;(0,e.updateViewport)(t,{zoom:2*e.viewer.zoom})}},{key:"handleZoomOutClick",value:function(){var e=this.props,t=e.windowId;(0,e.updateViewport)(t,{zoom:e.viewer.zoom/2})}},{key:"render",value:function(){var e=this.props,t=e.displayDivider,n=e.showZoomControls,r=e.classes,o=e.t,a=e.zoomToWorld;return n?c.a.createElement("div",{className:r.zoom_controls},c.a.createElement(_.a,{"aria-label":o("zoomIn"),onClick:this.handleZoomInClick},c.a.createElement(O.a,null)),c.a.createElement(_.a,{"aria-label":o("zoomOut"),onClick:this.handleZoomOutClick},c.a.createElement(g.a,null)),c.a.createElement(_.a,{"aria-label":o("zoomReset"),onClick:function(){return a(!1)}},c.a.createElement(C,null)),t&&c.a.createElement("span",{className:r.divider})):c.a.createElement(c.a.Fragment,null)}}])&&P(t.prototype,n),r&&P(t,r),a}(a.Component);z.defaultProps={displayDivider:!0,showZoomControls:!1,t:function(e){return e},updateViewport:function(){},viewer:{},windowId:""};var S={updateViewport:y.d},T=Object(r.compose)(Object(h.a)(),Object(l.a)((function(e){return{divider:{borderRight:"1px solid #808080",display:"inline-block",height:"24px",margin:"12px 6px"},ListItem:{paddingBottom:0,paddingTop:0},zoom_controls:{display:"flex",flexDirection:"row",justifyContent:"center"}}})),Object(i.b)((function(e,t){var n=t.windowId;return{showZoomControls:Object(w.f)(e),viewer:Object(f.d)(e,{windowId:n})}}),S),Object(o.a)("ZoomControls"))(z),Z=n(37);function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=W(e);if(t){var o=W(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(a,e);var t,n,r,o=M(a);function a(){return D(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.canvasCount,n=e.canvasIndex,r=e.canvasLabel,o=e.classes,a=e.t;return c.a.createElement("div",{className:d()(Object(Z.a)("osd-info"),o.osdInfo)},c.a.createElement(b.a,{display:"inline",variant:"caption",className:Object(Z.a)("canvas-count")},a("pagination",{current:n+1,total:t})),c.a.createElement(b.a,{display:"inline",variant:"caption",className:Object(Z.a)("canvas-label")},r&&" • ".concat(r)))}}])&&B(t.prototype,n),r&&B(t,r),a}(a.Component);H.defaultProps={canvasLabel:void 0,t:function(){}};var L=n(39),F=n(58),J=Object(r.compose)(Object(l.a)({osdInfo:{order:2,overflow:"hidden",paddingBottom:3,textOverflow:"ellipsis",unicodeBidi:"plaintext",whiteSpace:"nowrap",width:"100%"}}),Object(h.a)(),Object(i.b)((function(e,t){var n=t.windowId,r=Object(L.f)(e,{windowId:n}),o=Object(F.a)(e,{windowId:n}),a=(Object(L.g)(e,{windowId:n})||{}).id;return{canvasCount:r.length,canvasIndex:o,canvasLabel:Object(L.e)(e,{canvasId:a,windowId:n})}}),null),Object(o.a)("ViewerInfo"))(H),q=n(1029),G=n.n(q);function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=$(e);if(t){var o=$(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,n,r,o=X(a);function a(){return K(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.hasNextCanvas,n=e.hasPreviousCanvas,r=e.setNextCanvas,o=e.setPreviousCanvas,a=e.t,i=e.classes,u="ltr",l={},s={};switch(e.viewingDirection){case"top-to-bottom":l={transform:"rotate(270deg)"},s={transform:"rotate(90deg)"};break;case"bottom-to-top":l={transform:"rotate(90deg)"},s={transform:"rotate(270deg)"};break;case"right-to-left":u="rtl",l={},s={transform:"rotate(180deg)"};break;default:l={transform:"rotate(180deg)"},s={}}return c.a.createElement("div",{className:d()(Object(Z.a)("osd-navigation"),i.osdNavigation),dir:u},c.a.createElement(_.a,{"aria-label":a("previousCanvas"),className:Object(Z.a)("previous-canvas-button"),disabled:!n,onClick:function(){n&&o()}},c.a.createElement(G.a,{style:l})),c.a.createElement(_.a,{"aria-label":a("nextCanvas"),className:Object(Z.a)("next-canvas-button"),disabled:!t,onClick:function(){t&&r()}},c.a.createElement(G.a,{style:s})))}}])&&Q(t.prototype,n),r&&Q(t,r),a}(a.Component);ee.defaultProps={hasNextCanvas:!1,hasPreviousCanvas:!1,setNextCanvas:function(){},setPreviousCanvas:function(){},viewingDirection:""};var te=Object(r.compose)(Object(l.a)({osdNavigation:{order:1}}),Object(h.a)(),Object(i.b)((function(e,t){var n=t.windowId;return{hasNextCanvas:!!Object(L.h)(e,{windowId:n}),hasPreviousCanvas:!!Object(L.i)(e,{windowId:n}),viewingDirection:Object(F.e)(e,{windowId:n})}}),(function(e,t){var n=t.windowId;return{setNextCanvas:function(){return e(y.b(n))},setPreviousCanvas:function(){return e(y.c(n))}}})),Object(o.a)("ViewerNavigation"))(ee),ne=n(102);function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ue(e);if(t){var o=ue(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ie(this,n)}}function ie(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(a,e);var t,n,r,o=ce(a);function a(){return re(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"canvasNavControlsAreStacked",value:function(){var e=this.props.size;return e&&e.width&&e.width<=253}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.visible,r=e.windowId,o=e.zoomToWorld;return n?c.a.createElement(v.a,{square:!0,className:d()(t.controls,Object(Z.a)("canvas-nav"),t.canvasNav,this.canvasNavControlsAreStacked()?Object(Z.a)("canvas-nav-stacked"):null,this.canvasNavControlsAreStacked()?t.canvasNavStacked:null),elevation:0},c.a.createElement(T,{displayDivider:!this.canvasNavControlsAreStacked(),windowId:r,zoomToWorld:o}),c.a.createElement(te,{windowId:r}),c.a.createElement(J,{windowId:r}),c.a.createElement(ne.a,this.props)):c.a.createElement(b.a,{variant:"srOnly",component:"div"},c.a.createElement(J,{windowId:r}))}}])&&oe(t.prototype,n),r&&oe(t,r),a}(a.Component);le.defaultProps={classes:{},visible:!0};var se=Object(r.compose)(Object(i.b)((function(e,t){var n=t.windowId;return{visible:Object(f.i)(e).focusedWindowId===n}})),Object(l.a)((function(e){return{canvasNav:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",textAlign:"center"},canvasNavStacked:{flexDirection:"column"},controls:{backgroundColor:Object(s.fade)(e.palette.background.paper,.5),bottom:0,position:"absolute",width:"100%",zIndex:50}}})),Object(u.withSize)(),Object(o.a)("WindowCanvasNavigationControls"))(le);function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=be(e);if(t){var o=be(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ve(this,n)}}function ve(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var he=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,1048))})),ye=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(i,e);var t,n,r,o=de(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={},t}return t=i,r=[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}],(n=[{key:"render",value:function(){var e=this.props.windowId;return this.state.hasError?c.a.createElement(c.a.Fragment,null):c.a.createElement(a.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(he,{windowId:e},c.a.createElement(se,{windowId:e})))}}])&&fe(t.prototype,n),r&&fe(t,r),i}(a.Component),we=Object(r.compose)(Object(o.a)("WindowViewer"));t.default=we(ye)}}]);
//# sourceMappingURL=4.c14d77a1.js.map