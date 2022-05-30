"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var actions = _interopRequireWildcard(require("mirador/dist/es/src/state/actions"));

var _canvases = require("mirador/dist/es/src/state/selectors/canvases");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var ExternalStorageAnnotation = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ExternalStorageAnnotation, _Component);

  /** */
  function ExternalStorageAnnotation(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.retrieveAnnotations = _this.retrieveAnnotations.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = ExternalStorageAnnotation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var canvases = this.props.canvases;
    this.retrieveAnnotations(canvases);
  }
  /** */
  ;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var canvases = this.props.canvases;
    var currentCanvasIds = canvases.map(function (canvas) {
      return canvas.id;
    });
    var prevCanvasIds = prevProps.canvases.map(function (canvas) {
      return canvas.id;
    });

    if (!(0, _isEqual["default"])(currentCanvasIds, prevCanvasIds)) {
      this.retrieveAnnotations(canvases);
    }
  }
  /** */
  ;

  _proto.retrieveAnnotations = function retrieveAnnotations(canvases) {
    var _this$props = this.props,
        config = _this$props.config,
        receiveAnnotation = _this$props.receiveAnnotation;
    canvases.forEach(function (canvas) {
      var storageAdapter = config.annotation.adapter(canvas.id);
      storageAdapter.all().then(function (annoPage) {
        if (annoPage) {
          receiveAnnotation(canvas.id, storageAdapter.annotationPageId, annoPage);
        }
      });
    });
  }
  /** */
  ;

  _proto.render = function render() {
    var _this$props2 = this.props,
        PluginComponents = _this$props2.PluginComponents,
        TargetComponent = _this$props2.TargetComponent,
        targetProps = _this$props2.targetProps;
    return /*#__PURE__*/_react["default"].createElement(TargetComponent, _extends({}, targetProps, {
      // eslint-disable-line react/jsx-props-no-spreading
      PluginComponents: PluginComponents
    }));
  };

  return ExternalStorageAnnotation;
}(_react.Component);

ExternalStorageAnnotation.propTypes = process.env.NODE_ENV !== "production" ? {
  canvases: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    index: _propTypes["default"].number
  })),
  config: _propTypes["default"].shape({
    annotation: _propTypes["default"].shape({
      adapter: _propTypes["default"].func
    })
  }).isRequired,
  PluginComponents: _propTypes["default"].array,
  // eslint-disable-line react/forbid-prop-types
  receiveAnnotation: _propTypes["default"].func.isRequired,
  TargetComponent: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]).isRequired,
  targetProps: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

} : {};
ExternalStorageAnnotation.defaultProps = {
  canvases: [],
  PluginComponents: []
};
/** */

var mapDispatchToProps = {
  receiveAnnotation: actions.receiveAnnotation
};
/** */

function mapStateToProps(state, _ref) {
  var targetProps = _ref.targetProps;
  return {
    canvases: (0, _canvases.getVisibleCanvases)(state, {
      windowId: targetProps.windowId
    }),
    config: state.config
  };
}

var _default = {
  component: ExternalStorageAnnotation,
  mapDispatchToProps: mapDispatchToProps,
  mapStateToProps: mapStateToProps,
  mode: 'wrap',
  target: 'Window'
};
exports["default"] = _default;