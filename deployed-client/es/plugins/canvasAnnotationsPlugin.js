"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _canvases = require("mirador/dist/es/src/state/selectors/canvases");

var actions = _interopRequireWildcard(require("mirador/dist/es/src/state/actions"));

var _selectors = require("mirador/dist/es/src/state/selectors");

var _CanvasListItem = _interopRequireDefault(require("../CanvasListItem"));

var _AnnotationActionsContext = _interopRequireDefault(require("../AnnotationActionsContext"));

var _SingleCanvasDialog = _interopRequireDefault(require("../SingleCanvasDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var CanvasAnnotationsWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CanvasAnnotationsWrapper, _Component);

  /** */
  function CanvasAnnotationsWrapper(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      singleCanvasDialogOpen: false
    };
    _this.toggleSingleCanvasDialogOpen = _this.toggleSingleCanvasDialogOpen.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = CanvasAnnotationsWrapper.prototype;

  _proto.toggleSingleCanvasDialogOpen = function toggleSingleCanvasDialogOpen() {
    var singleCanvasDialogOpen = this.state.singleCanvasDialogOpen;
    this.setState({
      singleCanvasDialogOpen: !singleCanvasDialogOpen
    });
  }
  /** */
  ;

  _proto.render = function render() {
    var _this$props = this.props,
        addCompanionWindow = _this$props.addCompanionWindow,
        annotationsOnCanvases = _this$props.annotationsOnCanvases,
        canvases = _this$props.canvases,
        config = _this$props.config,
        receiveAnnotation = _this$props.receiveAnnotation,
        switchToSingleCanvasView = _this$props.switchToSingleCanvasView,
        TargetComponent = _this$props.TargetComponent,
        targetProps = _this$props.targetProps,
        windowViewType = _this$props.windowViewType;
    var singleCanvasDialogOpen = this.state.singleCanvasDialogOpen;

    var props = _extends({}, targetProps, {
      listContainerComponent: _CanvasListItem["default"]
    });

    return /*#__PURE__*/_react["default"].createElement(_AnnotationActionsContext["default"].Provider, {
      value: {
        addCompanionWindow: addCompanionWindow,
        annotationsOnCanvases: annotationsOnCanvases,
        canvases: canvases,
        config: config,
        receiveAnnotation: receiveAnnotation,
        storageAdapter: config.annotation.adapter,
        toggleSingleCanvasDialogOpen: this.toggleSingleCanvasDialogOpen,
        windowId: targetProps.windowId,
        windowViewType: windowViewType
      }
    }, /*#__PURE__*/_react["default"].createElement(TargetComponent, props), windowViewType !== 'single' && /*#__PURE__*/_react["default"].createElement(_SingleCanvasDialog["default"], {
      handleClose: this.toggleSingleCanvasDialogOpen,
      open: singleCanvasDialogOpen,
      switchToSingleCanvasView: switchToSingleCanvasView
    }));
  };

  return CanvasAnnotationsWrapper;
}(_react.Component);

CanvasAnnotationsWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  addCompanionWindow: _propTypes["default"].func.isRequired,
  annotationsOnCanvases: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  canvases: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    index: _propTypes["default"].number
  })),
  config: _propTypes["default"].shape({
    annotation: _propTypes["default"].shape({
      adapter: _propTypes["default"].func
    })
  }).isRequired,
  receiveAnnotation: _propTypes["default"].func.isRequired,
  switchToSingleCanvasView: _propTypes["default"].func.isRequired,
  TargetComponent: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]).isRequired,
  targetProps: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  windowViewType: _propTypes["default"].string.isRequired
} : {};
CanvasAnnotationsWrapper.defaultProps = {
  annotationsOnCanvases: {},
  canvases: []
};
/** */

function mapStateToProps(state, _ref) {
  var windowId = _ref.targetProps.windowId;
  var canvases = (0, _canvases.getVisibleCanvases)(state, {
    windowId: windowId
  });
  var annotationsOnCanvases = {};
  canvases.forEach(function (canvas) {
    var anno = state.annotations[canvas.id];

    if (anno) {
      annotationsOnCanvases[canvas.id] = anno;
    }
  });
  return {
    annotationsOnCanvases: annotationsOnCanvases,
    canvases: canvases,
    config: state.config,
    windowViewType: (0, _selectors.getWindowViewType)(state, {
      windowId: windowId
    })
  };
}
/** */


var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    addCompanionWindow: function addCompanionWindow(content, additionalProps) {
      return dispatch(actions.addCompanionWindow(props.targetProps.windowId, _extends({
        content: content
      }, additionalProps)));
    },
    receiveAnnotation: function receiveAnnotation(targetId, id, annotation) {
      return dispatch(actions.receiveAnnotation(targetId, id, annotation));
    },
    switchToSingleCanvasView: function switchToSingleCanvasView() {
      return dispatch(actions.setWindowViewType(props.targetProps.windowId, 'single'));
    }
  };
};

var _default = {
  component: CanvasAnnotationsWrapper,
  mapDispatchToProps: mapDispatchToProps,
  mapStateToProps: mapStateToProps,
  mode: 'wrap',
  target: 'CanvasAnnotations'
};
exports["default"] = _default;