(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1026:function(e,t,n){"use strict";var o=n(26),r=n(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,o(n(27)).default)(c.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"ListSharp");t.default=i},1050:function(e,t,n){"use strict";n.r(t);var o=n(13),r=n(15),c=n(931),i=n(9),a=n(346),l=n(17),u=n(31),f=n(0),s=n.n(f),p=n(913),v=n(918),h=n(101),d=n(1026),m=n.n(d);function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,o,r=w(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=r.call(this,e)).openCollectionDialog=t.openCollectionDialog.bind(j(t)),t}return t=c,(n=[{key:"openCollectionDialog",value:function(){var e=this.props,t=e.collectionPath,n=e.manifestId,o=e.showCollectionDialog,r=e.windowId;o(n,t.slice(0,-1),r)}},{key:"render",value:function(){var e=this.props.t;return s.a.createElement(v.a,{container:!0,justify:"center",alignItems:"center"},s.a.createElement(v.a,{container:!0,direction:"column",alignItems:"center"},s.a.createElement(h.a,{variant:"h4",paragraph:!0},s.a.createElement("em",null,e("noItemSelected"))),s.a.createElement(p.a,{color:"primary",variant:"contained",onClick:this.openCollectionDialog,startIcon:s.a.createElement(m.a,null)},e("showCollection"))))}}])&&b(t.prototype,n),o&&b(t,o),c}(f.Component);z.defaultProps={collectionPath:[],manifestId:null,t:function(){},windowId:null};var H={showCollectionDialog:a.j},I=Object(o.compose)(Object(c.a)(),Object(i.a)((function(e){return{}})),Object(r.b)((function(e,t){var n=t.windowId,o=Object(u.e)(e,{windowId:n})||{};return{collectionPath:o.collectionPath,manifestId:o.manifestId}}),H),Object(l.a)("SelectCollection"));t.default=I(z)}}]);
//# sourceMappingURL=5.26ff168b.js.map