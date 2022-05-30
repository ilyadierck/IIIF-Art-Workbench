"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var actions = _interopRequireWildcard(require("mirador/dist/es/src/state/actions"));

var _selectors = require("mirador/dist/es/src/state/selectors");

var _AddBox = _interopRequireDefault(require("@material-ui/icons/AddBox"));

var _GetApp = _interopRequireDefault(require("@material-ui/icons/GetApp"));

var _MiradorMenuButton = require("mirador/dist/es/src/components/MiradorMenuButton");

var _canvases = require("mirador/dist/es/src/state/selectors/canvases");

var _SingleCanvasDialog = _interopRequireDefault(require("../SingleCanvasDialog"));

var _AnnotationExportDialog = _interopRequireDefault(require("../AnnotationExportDialog"));

var _LocalStorageAdapter = _interopRequireDefault(require("../LocalStorageAdapter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var MiradorAnnotation = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MiradorAnnotation, _Component);

  /** */
  function MiradorAnnotation(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      annotationExportDialogOpen: false,
      singleCanvasDialogOpen: false
    };
    _this.openCreateAnnotationCompanionWindow = _this.openCreateAnnotationCompanionWindow.bind(_assertThisInitialized(_this));
    _this.toggleCanvasExportDialog = _this.toggleCanvasExportDialog.bind(_assertThisInitialized(_this));
    _this.toggleSingleCanvasDialogOpen = _this.toggleSingleCanvasDialogOpen.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = MiradorAnnotation.prototype;

  _proto.openCreateAnnotationCompanionWindow = function openCreateAnnotationCompanionWindow(e) {
    var addCompanionWindow = this.props.addCompanionWindow;
    addCompanionWindow('annotationCreation', {
      position: 'right'
    });
  }
  /** */
  ;

  _proto.toggleSingleCanvasDialogOpen = function toggleSingleCanvasDialogOpen() {
    var singleCanvasDialogOpen = this.state.singleCanvasDialogOpen;
    this.setState({
      singleCanvasDialogOpen: !singleCanvasDialogOpen
    });
  }
  /** */
  ;

  _proto.toggleCanvasExportDialog = function toggleCanvasExportDialog(e) {
    var annotationExportDialogOpen = this.state.annotationExportDialogOpen;
    var newState = {
      annotationExportDialogOpen: !annotationExportDialogOpen
    };
    this.setState(newState);
  }
  /** */
  ;

  _proto.render = function render() {
    var _this$props = this.props,
        canvases = _this$props.canvases,
        config = _this$props.config,
        switchToSingleCanvasView = _this$props.switchToSingleCanvasView,
        TargetComponent = _this$props.TargetComponent,
        targetProps = _this$props.targetProps,
        windowViewType = _this$props.windowViewType;
    var _this$state = this.state,
        annotationExportDialogOpen = _this$state.annotationExportDialogOpen,
        singleCanvasDialogOpen = _this$state.singleCanvasDialogOpen;
    var storageAdapter = config.annotation && config.annotation.adapter('poke');
    var offerExportDialog = config.annotation && storageAdapter instanceof _LocalStorageAdapter["default"] && config.annotation.exportLocalStorageAnnotations;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(TargetComponent, targetProps), /*#__PURE__*/_react["default"].createElement(_MiradorMenuButton.MiradorMenuButton, {
      "aria-label": "Create new annotation",
      onClick: windowViewType === 'single' ? this.openCreateAnnotationCompanionWindow : this.toggleSingleCanvasDialogOpen,
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_AddBox["default"], null)), singleCanvasDialogOpen && /*#__PURE__*/_react["default"].createElement(_SingleCanvasDialog["default"], {
      open: singleCanvasDialogOpen,
      handleClose: this.toggleSingleCanvasDialogOpen,
      switchToSingleCanvasView: switchToSingleCanvasView
    }), offerExportDialog && /*#__PURE__*/_react["default"].createElement(_MiradorMenuButton.MiradorMenuButton, {
      "aria-label": "Export local annotations for visible items",
      onClick: this.toggleCanvasExportDialog,
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_GetApp["default"], null)), offerExportDialog && /*#__PURE__*/_react["default"].createElement(_AnnotationExportDialog["default"], {
      canvases: canvases,
      config: config,
      handleClose: this.toggleCanvasExportDialog,
      open: annotationExportDialogOpen
    }));
  };

  return MiradorAnnotation;
}(_react.Component);

MiradorAnnotation.propTypes = process.env.NODE_ENV !== "production" ? {
  addCompanionWindow: _propTypes["default"].func.isRequired,
  canvases: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    index: _propTypes["default"].number
  })).isRequired,
  config: _propTypes["default"].shape({
    annotation: _propTypes["default"].shape({
      adapter: _propTypes["default"].func,
      exportLocalStorageAnnotations: _propTypes["default"].bool
    })
  }).isRequired,
  switchToSingleCanvasView: _propTypes["default"].func.isRequired,
  TargetComponent: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]).isRequired,
  targetProps: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  windowViewType: _propTypes["default"].string.isRequired
} : {};
/** */

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    addCompanionWindow: function addCompanionWindow(content, additionalProps) {
      return dispatch(actions.addCompanionWindow(props.targetProps.windowId, _extends({
        content: content
      }, additionalProps)));
    },
    switchToSingleCanvasView: function switchToSingleCanvasView() {
      return dispatch(actions.setWindowViewType(props.targetProps.windowId, 'single'));
    }
  };
};
/** */


var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.targetProps.windowId;
  return {
    canvases: (0, _canvases.getVisibleCanvases)(state, {
      windowId: windowId
    }),
    config: state.config,
    windowViewType: (0, _selectors.getWindowViewType)(state, {
      windowId: windowId
    })
  };
};

var _default = {
  component: MiradorAnnotation,
  mapDispatchToProps: mapDispatchToProps,
  mapStateToProps: mapStateToProps,
  mode: 'wrap',
  target: 'AnnotationSettings'
};
exports["default"] = _default;
module.exports = exports.default;