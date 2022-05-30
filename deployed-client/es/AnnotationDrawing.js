"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OSDReferences = require("mirador/dist/es/src/plugins/OSDReferences");

var _reactPaperjs = require("@psychobolt/react-paperjs");

var _reactPaperjsEditor = require("@psychobolt/react-paperjs-editor");

var _paper = require("paper");

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _EditTool = _interopRequireDefault(require("./EditTool"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var AnnotationDrawing = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AnnotationDrawing, _Component);

  /** */
  function AnnotationDrawing(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.addPath = _this.addPath.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = AnnotationDrawing.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var windowId = this.props.windowId;
    this.OSDReference = _OSDReferences.OSDReferences.get(windowId);
  }
  /** */
  ;

  _proto.addPath = function addPath(path) {
    var _this$props = this.props,
        closed = _this$props.closed,
        strokeWidth = _this$props.strokeWidth,
        updateGeometry = _this$props.updateGeometry; // TODO: Compute xywh of bounding container of layers

    var bounds = path.bounds;
    var x = bounds.x,
        y = bounds.y,
        width = bounds.width,
        height = bounds.height;
    path.closed = closed; // eslint-disable-line no-param-reassign
    // Reset strokeWidth for persistence

    path.strokeWidth = strokeWidth; // eslint-disable-line no-param-reassign

    path.data.state = null; // eslint-disable-line no-param-reassign

    var svgExports = (0, _flatten["default"])(path.project.layers.map(function (layer) {
      return (0, _flatten["default"])((0, _utils.mapChildren)(layer)).map(function (aPath) {
        return aPath.exportSVG({
          asString: true
        });
      });
    }));
    svgExports.unshift("<svg xmlns='http://www.w3.org/2000/svg'>");
    svgExports.push('</svg>');
    updateGeometry({
      svg: svgExports.join(''),
      xywh: [Math.floor(x), Math.floor(y), Math.floor(width), Math.floor(height)].join(',')
    });
  }
  /** */
  ;

  _proto.paperThing = function paperThing() {
    var _this2 = this;

    var _this$props2 = this.props,
        activeTool = _this$props2.activeTool,
        fillColor = _this$props2.fillColor,
        strokeColor = _this$props2.strokeColor,
        strokeWidth = _this$props2.strokeWidth,
        svg = _this$props2.svg;
    if (!activeTool || activeTool === 'cursor') return null; // Setup Paper View to have the same center and zoom as the OSD Viewport

    var viewportZoom = this.OSDReference.viewport.getZoom(true);
    var image1 = this.OSDReference.world.getItemAt(0);
    var center = image1.viewportToImageCoordinates(this.OSDReference.viewport.getCenter(true));
    var flipped = this.OSDReference.viewport.getFlip();
    var viewProps = {
      center: new _paper.Point(center.x, center.y),
      rotation: this.OSDReference.viewport.getRotation(),
      scaling: new _paper.Point(flipped ? -1 : 1, 1),
      zoom: image1.viewportToImageZoom(viewportZoom)
    };
    var ActiveTool = _reactPaperjsEditor.RectangleTool;

    switch (activeTool) {
      case 'rectangle':
        ActiveTool = _reactPaperjsEditor.RectangleTool;
        break;

      case 'ellipse':
        ActiveTool = _reactPaperjsEditor.EllipseTool;
        break;

      case 'polygon':
        ActiveTool = _reactPaperjsEditor.PolygonTool;
        break;

      case 'freehand':
        ActiveTool = _reactPaperjsEditor.FreeformPathTool;
        break;

      case 'edit':
        ActiveTool = _EditTool["default"];
        break;

      default:
        break;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "foo",
      style: {
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactPaperjs.PaperContainer, {
      canvasProps: {
        style: {
          height: '100%',
          width: '100%'
        }
      },
      viewProps: viewProps
    }, (0, _reactPaperjs.renderWithPaperScope)(function (paper) {
      var paths = (0, _flatten["default"])(paper.project.layers.map(function (layer) {
        return (0, _flatten["default"])((0, _utils.mapChildren)(layer)).map(function (aPath) {
          return aPath;
        });
      }));

      if (svg && paths.length === 0) {
        paper.project.importSVG(svg);
      }

      paper.settings.handleSize = 10; // eslint-disable-line no-param-reassign

      paper.settings.hitTolerance = 10; // eslint-disable-line no-param-reassign

      return /*#__PURE__*/_react["default"].createElement(ActiveTool, {
        onPathAdd: _this2.addPath,
        pathProps: {
          fillColor: fillColor,
          strokeColor: strokeColor,
          strokeWidth: strokeWidth / paper.view.zoom
        },
        paper: paper
      });
    })));
  }
  /** */
  ;

  _proto.render = function render() {
    var windowId = this.props.windowId;
    this.OSDReference = _OSDReferences.OSDReferences.get(windowId).current;
    return /*#__PURE__*/_reactDom["default"].createPortal(this.paperThing(), this.OSDReference.element);
  };

  return AnnotationDrawing;
}(_react.Component);

AnnotationDrawing.propTypes = process.env.NODE_ENV !== "production" ? {
  activeTool: _propTypes["default"].string,
  closed: _propTypes["default"].bool,
  fillColor: _propTypes["default"].string,
  strokeColor: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  svg: _propTypes["default"].string,
  updateGeometry: _propTypes["default"].func.isRequired,
  windowId: _propTypes["default"].string.isRequired
} : {};
AnnotationDrawing.defaultProps = {
  activeTool: null,
  closed: true,
  fillColor: null,
  strokeColor: '#00BFFF',
  strokeWidth: 1,
  svg: null
};
var _default = AnnotationDrawing;
exports["default"] = _default;