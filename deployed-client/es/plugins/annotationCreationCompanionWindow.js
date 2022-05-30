"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var actions = _interopRequireWildcard(require("mirador/dist/es/src/state/actions"));

var _companionWindows = require("mirador/dist/es/src/state/selectors/companionWindows");

var _canvases = require("mirador/dist/es/src/state/selectors/canvases");

var _AnnotationCreation = _interopRequireDefault(require("../AnnotationCreation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var id = _ref.id,
      windowId = _ref.windowId;
  return {
    closeCompanionWindow: function closeCompanionWindow() {
      return dispatch(actions.removeCompanionWindow(windowId, id));
    },
    receiveAnnotation: function receiveAnnotation(targetId, annoId, annotation) {
      return dispatch(actions.receiveAnnotation(targetId, annoId, annotation));
    }
  };
};
/** */


function mapStateToProps(state, _ref2) {
  var companionWindowId = _ref2.id,
      windowId = _ref2.windowId;

  var _getCompanionWindow = (0, _companionWindows.getCompanionWindow)(state, {
    companionWindowId: companionWindowId,
    windowId: windowId
  }),
      annotationid = _getCompanionWindow.annotationid;

  var canvases = (0, _canvases.getVisibleCanvases)(state, {
    windowId: windowId
  });
  var annotation;
  canvases.forEach(function (canvas) {
    var annotationsOnCanvas = state.annotations[canvas.id];
    Object.values(annotationsOnCanvas || {}).forEach(function (value, i) {
      if (value.json && value.json.items) {
        annotation = value.json.items.find(function (anno) {
          return anno.id === annotationid;
        });
      }
    });
  });
  return {
    annotation: annotation,
    canvases: canvases,
    config: state.config
  };
}

var _default = {
  companionWindowKey: 'annotationCreation',
  component: _AnnotationCreation["default"],
  mapDispatchToProps: mapDispatchToProps,
  mapStateToProps: mapStateToProps
};
exports["default"] = _default;