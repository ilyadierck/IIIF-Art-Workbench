"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPaperjs = require("@psychobolt/react-paperjs");

var _paper = require("paper");

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var EditTool = /*#__PURE__*/function (_Component) {
  _inheritsLoose(EditTool, _Component);

  /** */
  function EditTool(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onMouseDrag = _this.onMouseDrag.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = EditTool.prototype;

  _proto.onMouseDown = function onMouseDown(e) {
    var paper = this.props.paper;
    var project = paper.project;
    var paths = (0, _flatten["default"])(project.layers.map(function (layer) {
      return (0, _flatten["default"])((0, _utils.mapChildren)(layer)).map(function (aPath) {
        return aPath;
      });
    }));
    paths.forEach(function (path) {
      if (path.contains(e.point)) {
        path.data.state = 'moving'; // eslint-disable-line no-param-reassign

        return;
      }

      if (path.hitTest(e.point, {
        segments: true,
        tolerance: 15
      })) {
        path.data.state = 'resizing'; // eslint-disable-line no-param-reassign

        path.data.bounds = path.bounds.clone(); // eslint-disable-line no-param-reassign

        path.data.scaleBase = e.point.subtract( // eslint-disable-line no-param-reassign
        path.bounds.center);
      }
    });
  }
  /** */
  ;

  _proto.onMouseDrag = function onMouseDrag(e) {
    var paper = this.props.paper;
    var project = paper.project;
    var paths = (0, _flatten["default"])(project.layers.map(function (layer) {
      return (0, _flatten["default"])((0, _utils.mapChildren)(layer)).map(function (aPath) {
        return aPath;
      });
    }));
    paths.forEach(function (path) {
      if (path.data.state === 'moving') {
        // We need to do the JavaScript version rather than the PaperScript
        // https://github.com/paperjs/paper.js/issues/1486
        path.position = path.position.add( // eslint-disable-line no-param-reassign
        e.point.subtract(e.lastPoint));
      } else if (path.data.state === 'resizing') {
        var bounds = path.data.bounds;
        var scale = e.point.subtract(bounds.center).length / path.data.scaleBase.length;
        var tlVec = bounds.topLeft.subtract(bounds.center).multiply(scale);
        var brVec = bounds.bottomRight.subtract(bounds.center).multiply(scale);
        var newBounds = new _paper.Rectangle(tlVec.add(bounds.center), brVec.add(bounds.center));
        path.bounds = newBounds; // eslint-disable-line no-param-reassign
      }
    });
  }
  /** */
  ;

  _proto.onMouseMove = function onMouseMove(e) {
    var paper = this.props.paper;
    var project = paper.project;
    var paths = (0, _flatten["default"])(project.layers.map(function (layer) {
      return (0, _flatten["default"])((0, _utils.mapChildren)(layer)).map(function (aPath) {
        return aPath;
      });
    }));
    project.activeLayer.selected = false;
    var anySelected = false;
    paths.forEach(function (path) {
      if (path.contains(e.point) || path.hitTest(e.point, {
        segments: true,
        tolerance: 15
      })) {
        var hitTest = path.hitTest(e.point, {
          segments: true,
          tolerance: 15
        });
        var cursor = 'move';

        if (hitTest && hitTest.type === 'segment') {
          var difference = path.position.subtract(hitTest.segment.point); // Find the angle from the center of the path to the handle.

          var roundedAngle = Math.round(Math.atan(difference.y / difference.x) * 180 / Math.PI / 45) * 45;

          switch (true) {
            case roundedAngle === 45:
              cursor = 'nwse-resize';
              break;

            case roundedAngle === -45:
              cursor = 'nesw-resize';
              break;

            case roundedAngle === 0:
              cursor = 'ew-resize';
              break;

            case Math.abs(roundedAngle) === 90:
              cursor = 'ns-resize';
              break;

            default:
              return;
          }
        }

        paper.view.getElement().style.cursor = cursor;
        anySelected = true;
        path.selected = true; // eslint-disable-line no-param-reassign
      }
    });

    if (!anySelected) {
      paper.view.getElement().style.cursor = 'auto';
    }
  }
  /** */
  ;

  _proto.onMouseUp = function onMouseUp(e) {
    var _this$props = this.props,
        onPathAdd = _this$props.onPathAdd,
        paper = _this$props.paper;
    var project = paper.project;
    var paths = (0, _flatten["default"])(project.layers.map(function (layer) {
      return (0, _flatten["default"])((0, _utils.mapChildren)(layer)).map(function (aPath) {
        return aPath;
      });
    }));
    paths.forEach(function (path) {
      path.data.state = null; // eslint-disable-line no-param-reassign

      onPathAdd(path);
    });
    paper.view.getElement().style.cursor = 'auto';
  }
  /** */
  ;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement(_reactPaperjs.Tool, {
      onMouseDown: this.onMouseDown,
      onMouseDrag: this.onMouseDrag,
      onMouseMove: this.onMouseMove,
      onMouseUp: this.onMouseUp
    });
  };

  return EditTool;
}(_react.Component);

EditTool.propTypes = process.env.NODE_ENV !== "production" ? {
  onPathAdd: _propTypes["default"].func.isRequired,
  paper: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

} : {};

var _default = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(EditTool, _extends({
    innerRef: ref
  }, props));
}); // eslint-disable-line


exports["default"] = _default;