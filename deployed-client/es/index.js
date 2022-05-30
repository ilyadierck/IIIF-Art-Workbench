"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "annotationCreationCompanionWindow", {
  enumerable: true,
  get: function get() {
    return _annotationCreationCompanionWindow["default"];
  }
});
Object.defineProperty(exports, "canvasAnnotationsPlugin", {
  enumerable: true,
  get: function get() {
    return _canvasAnnotationsPlugin["default"];
  }
});
exports["default"] = void 0;
Object.defineProperty(exports, "externalStorageAnnotationPlugin", {
  enumerable: true,
  get: function get() {
    return _externalStorageAnnotationPlugin["default"];
  }
});
Object.defineProperty(exports, "miradorAnnotationPlugin", {
  enumerable: true,
  get: function get() {
    return _miradorAnnotationPlugin["default"];
  }
});
Object.defineProperty(exports, "windowSideBarButtonsPlugin", {
  enumerable: true,
  get: function get() {
    return _windowSideBarButtonsPlugin["default"];
  }
});

var _miradorAnnotationPlugin = _interopRequireDefault(require("./plugins/miradorAnnotationPlugin"));

var _externalStorageAnnotationPlugin = _interopRequireDefault(require("./plugins/externalStorageAnnotationPlugin"));

var _canvasAnnotationsPlugin = _interopRequireDefault(require("./plugins/canvasAnnotationsPlugin"));

var _annotationCreationCompanionWindow = _interopRequireDefault(require("./plugins/annotationCreationCompanionWindow"));

var _windowSideBarButtonsPlugin = _interopRequireDefault(require("./plugins/windowSideBarButtonsPlugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [_miradorAnnotationPlugin["default"], _externalStorageAnnotationPlugin["default"], _canvasAnnotationsPlugin["default"], _annotationCreationCompanionWindow["default"], _windowSideBarButtonsPlugin["default"]];
exports["default"] = _default;