"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Dialog to enforce single view for annotation creation / editing
 */
var SingleCanvasDialog = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SingleCanvasDialog, _Component);

  /** */
  function SingleCanvasDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.confirm = _this.confirm.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = SingleCanvasDialog.prototype;

  _proto.confirm = function confirm() {
    var _this$props = this.props,
        handleClose = _this$props.handleClose,
        switchToSingleCanvasView = _this$props.switchToSingleCanvasView;
    switchToSingleCanvasView();
    handleClose();
  }
  /** */
  ;

  _proto.render = function render() {
    var _this$props2 = this.props,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open;
    return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
      "aria-labelledby": "single-canvas-dialog-title",
      fullWidth: true,
      maxWidth: "sm",
      onClose: handleClose,
      onEscapeKeyDown: handleClose,
      open: open
    }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
      id: "single-canvas-dialog-title",
      disableTypography: true
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h2"
    }, "Switch view type to single view?")), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
      variant: "body1",
      color: "inherit"
    }, "Annotations can only be edited in single canvas view type. Switch view type to single view now?")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      onClick: handleClose
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      color: "primary",
      onClick: this.confirm,
      variant: "contained"
    }, "Switch to single view")));
  };

  return SingleCanvasDialog;
}(_react.Component);

SingleCanvasDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  handleClose: _propTypes["default"].func.isRequired,
  open: _propTypes["default"].bool,
  switchToSingleCanvasView: _propTypes["default"].func.isRequired
} : {};
SingleCanvasDialog.defaultProps = {
  open: false
};
var _default = SingleCanvasDialog;
exports["default"] = _default;