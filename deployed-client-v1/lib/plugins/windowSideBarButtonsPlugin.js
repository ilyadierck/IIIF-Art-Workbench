"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper plugin that sets hasAnyAnnotations to true so that the annotation
 * companion window button is present
 */
var WindowSideBarButtonWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(WindowSideBarButtonWrapper, _Component);

  function WindowSideBarButtonWrapper() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WindowSideBarButtonWrapper.prototype;

  /** */
  _proto.render = function render() {
    var _this$props = this.props,
        PluginComponents = _this$props.PluginComponents,
        TargetComponent = _this$props.TargetComponent,
        targetProps = _this$props.targetProps;
    targetProps.hasAnyAnnotations = true;
    return /*#__PURE__*/_react["default"].createElement(TargetComponent, _extends({}, targetProps, {
      // eslint-disable-line react/jsx-props-no-spreading
      PluginComponents: PluginComponents
    }));
  };

  return WindowSideBarButtonWrapper;
}(_react.Component);

WindowSideBarButtonWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  PluginComponents: _propTypes["default"].array,
  // eslint-disable-line react/forbid-prop-types
  TargetComponent: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]).isRequired,
  targetProps: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

} : {};
WindowSideBarButtonWrapper.defaultProps = {
  PluginComponents: []
};
var _default = {
  component: WindowSideBarButtonWrapper,
  mode: 'wrap',
  target: 'WindowSideBarButtons'
};
exports["default"] = _default;
module.exports = exports.default;