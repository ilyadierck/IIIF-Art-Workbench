"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _ToggleButton = _interopRequireDefault(require("@material-ui/lab/ToggleButton"));

var _ToggleButtonGroup = _interopRequireDefault(require("@material-ui/lab/ToggleButtonGroup"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _RadioButtonUnchecked = _interopRequireDefault(require("@material-ui/icons/RadioButtonUnchecked"));

var _Timeline = _interopRequireDefault(require("@material-ui/icons/Timeline"));

var _Gesture = _interopRequireDefault(require("@material-ui/icons/Gesture"));

var _ChangeHistory = _interopRequireDefault(require("@material-ui/icons/ChangeHistory"));

var _ShowChart = _interopRequireDefault(require("@material-ui/icons/ShowChart"));

var _FormatColorFill = _interopRequireDefault(require("@material-ui/icons/FormatColorFill"));

var _BorderColor = _interopRequireDefault(require("@material-ui/icons/BorderColor"));

var _LineWeight = _interopRequireDefault(require("@material-ui/icons/LineWeight"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _FormatShapes = _interopRequireDefault(require("@material-ui/icons/FormatShapes"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _reactColor = require("react-color");

var _uuid = require("uuid");

var _styles = require("@material-ui/core/styles");

var _CompanionWindow = _interopRequireDefault(require("mirador/dist/es/src/containers/CompanionWindow"));

var _AnnotationDrawing = _interopRequireDefault(require("./AnnotationDrawing"));

var _TextEditor = _interopRequireDefault(require("./TextEditor"));

var _WebAnnotation = _interopRequireDefault(require("./WebAnnotation"));

var _Cursor = _interopRequireDefault(require("./icons/Cursor"));

var _AnnotationType = _interopRequireDefault(require("./AnnotationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var AnnotationCreation = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AnnotationCreation, _Component);

  /** */
  function AnnotationCreation(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var annoState = {};

    if (props.annotation) {
      if (Array.isArray(props.annotation.body)) {
        annoState.tags = [];
        props.annotation.body.forEach(function (body) {
          if (body.purpose === 'tagging') {
            annoState.tags.push(body.value);
          } else {
            annoState.annoBody = body.value;
          }
        });
      } else {
        annoState.annoBody = props.annotation.body.value;
      }

      if (props.annotation.target.selector) {
        if (Array.isArray(props.annotation.target.selector)) {
          props.annotation.target.selector.forEach(function (selector) {
            if (selector.type === 'SvgSelector') {
              annoState.svg = selector.value;
            } else if (selector.type === 'FragmentSelector') {
              annoState.xywh = selector.value.replace('xywh=', '');
            }
          });
        } else {
          annoState.svg = props.annotation.target.selector.value;
        }
      }
    }

    _this.state = _extends({
      activeTool: 'cursor',
      annoBody: '',
      closedMode: 'closed',
      colorPopoverOpen: false,
      currentColorType: false,
      fillColor: null,
      lineWeightPopoverOpen: false,
      popoverAnchorEl: null,
      popoverLineWeightAnchorEl: null,
      strokeColor: '#00BFFF',
      strokeWidth: 1,
      svg: null,
      xywh: null
    }, annoState);
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));
    _this.updateBody = _this.updateBody.bind(_assertThisInitialized(_this));
    _this.updateGeometry = _this.updateGeometry.bind(_assertThisInitialized(_this));
    _this.changeTool = _this.changeTool.bind(_assertThisInitialized(_this));
    _this.changeClosedMode = _this.changeClosedMode.bind(_assertThisInitialized(_this));
    _this.openChooseColor = _this.openChooseColor.bind(_assertThisInitialized(_this));
    _this.openChooseLineWeight = _this.openChooseLineWeight.bind(_assertThisInitialized(_this));
    _this.handleLineWeightSelect = _this.handleLineWeightSelect.bind(_assertThisInitialized(_this));
    _this.handleCloseLineWeight = _this.handleCloseLineWeight.bind(_assertThisInitialized(_this));
    _this.closeChooseColor = _this.closeChooseColor.bind(_assertThisInitialized(_this));
    _this.updateStrokeColor = _this.updateStrokeColor.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = AnnotationCreation.prototype;

  _proto.handleCloseLineWeight = function handleCloseLineWeight(e) {
    this.setState({
      lineWeightPopoverOpen: false,
      popoverLineWeightAnchorEl: null
    });
  }
  /** */
  ;

  _proto.handleLineWeightSelect = function handleLineWeightSelect(e) {
    this.setState({
      lineWeightPopoverOpen: false,
      popoverLineWeightAnchorEl: null,
      strokeWidth: e.currentTarget.value
    });
  }
  /** */
  ;

  _proto.openChooseColor = function openChooseColor(e) {
    this.setState({
      colorPopoverOpen: true,
      currentColorType: e.currentTarget.value,
      popoverAnchorEl: e.currentTarget
    });
  }
  /** */
  ;

  _proto.openChooseLineWeight = function openChooseLineWeight(e) {
    this.setState({
      lineWeightPopoverOpen: true,
      popoverLineWeightAnchorEl: e.currentTarget
    });
  }
  /** */
  ;

  _proto.closeChooseColor = function closeChooseColor(e) {
    this.setState({
      colorPopoverOpen: false,
      currentColorType: null,
      popoverAnchorEl: null
    });
  }
  /** */
  ;

  _proto.updateStrokeColor = function updateStrokeColor(color) {
    var _this$setState;

    var currentColorType = this.state.currentColorType;
    this.setState((_this$setState = {}, _this$setState[currentColorType] = color.hex, _this$setState));
  }
  /** */
  ;

  _proto.submitForm = function submitForm(e) {
    e.preventDefault();
    var annotationType = document.querySelector("#annotationType").value.split(",");
    var _this$props = this.props,
        annotation = _this$props.annotation,
        canvases = _this$props.canvases,
        closeCompanionWindow = _this$props.closeCompanionWindow,
        receiveAnnotation = _this$props.receiveAnnotation,
        config = _this$props.config;
    var _this$state = this.state,
        annoBody = _this$state.annoBody,
        tags = _this$state.tags,
        xywh = _this$state.xywh,
        svg = _this$state.svg;
    canvases.forEach(function (canvas) {
      var storageAdapter = config.annotation.adapter(canvas.id);
      var anno = new _WebAnnotation["default"]({
        body: annoBody,
        canvasId: canvas.id,
        id: annotation && annotation.id || "" + (0, _uuid.v4)(),
        manifestId: canvas.options.resource.id,
        svg: svg,
        tags: annotationType,
        xywh: xywh
      }).toJson();

      if (annotation) {
        storageAdapter.update(anno, annotationType).then(function (annoPage) {
          receiveAnnotation(canvas.id, storageAdapter.annotationPageId, annoPage);
        });
      } else {
        storageAdapter.create(anno, annotationType).then(function (annoPage) {
          receiveAnnotation(canvas.id, storageAdapter.annotationPageId, annoPage);
        });
      }
    });
    this.setState({
      activeTool: null
    });
    closeCompanionWindow();
  }
  /** */
  ;

  _proto.changeTool = function changeTool(e, tool) {
    this.setState({
      activeTool: tool
    });
  }
  /** */
  ;

  _proto.changeClosedMode = function changeClosedMode(e) {
    this.setState({
      closedMode: e.currentTarget.value
    });
  }
  /** */
  ;

  _proto.updateBody = function updateBody(annoBody) {
    this.setState({
      annoBody: annoBody
    });
  }
  /** */
  ;

  _proto.updateGeometry = function updateGeometry(_ref) {
    var svg = _ref.svg,
        xywh = _ref.xywh;
    this.setState({
      svg: svg,
      xywh: xywh
    });
  }
  /** */
  ;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        annotation = _this$props2.annotation,
        classes = _this$props2.classes,
        closeCompanionWindow = _this$props2.closeCompanionWindow,
        id = _this$props2.id,
        windowId = _this$props2.windowId;
    var _this$state2 = this.state,
        activeTool = _this$state2.activeTool,
        colorPopoverOpen = _this$state2.colorPopoverOpen,
        currentColorType = _this$state2.currentColorType,
        fillColor = _this$state2.fillColor,
        popoverAnchorEl = _this$state2.popoverAnchorEl,
        strokeColor = _this$state2.strokeColor,
        popoverLineWeightAnchorEl = _this$state2.popoverLineWeightAnchorEl,
        lineWeightPopoverOpen = _this$state2.lineWeightPopoverOpen,
        strokeWidth = _this$state2.strokeWidth,
        closedMode = _this$state2.closedMode,
        annoBody = _this$state2.annoBody,
        svg = _this$state2.svg;
    return /*#__PURE__*/_react["default"].createElement(_CompanionWindow["default"], {
      title: annotation ? 'Edit annotation' : 'New annotation',
      windowId: windowId,
      id: id
    }, /*#__PURE__*/_react["default"].createElement(_AnnotationDrawing["default"], {
      activeTool: activeTool,
      fillColor: fillColor,
      strokeColor: strokeColor,
      strokeWidth: strokeWidth,
      closed: closedMode === 'closed',
      svg: svg,
      updateGeometry: this.updateGeometry,
      windowId: windowId
    }), /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: this.submitForm
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "overline"
    }, "Target")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
      elevation: 0,
      className: classes.paper
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
      className: classes.grouped,
      value: activeTool,
      exclusive: true,
      onChange: this.changeTool,
      "aria-label": "tool selection",
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "cursor",
      "aria-label": "select cursor"
    }, /*#__PURE__*/_react["default"].createElement(_Cursor["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "edit",
      "aria-label": "select cursor"
    }, /*#__PURE__*/_react["default"].createElement(_FormatShapes["default"], null))), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
      flexItem: true,
      orientation: "vertical",
      className: classes.divider
    }), /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
      className: classes.grouped,
      value: activeTool,
      exclusive: true,
      onChange: this.changeTool,
      "aria-label": "tool selection",
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "rectangle",
      "aria-label": "add a rectangle"
    }, /*#__PURE__*/_react["default"].createElement(_CheckBoxOutlineBlank["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "ellipse",
      "aria-label": "add a circle"
    }, /*#__PURE__*/_react["default"].createElement(_RadioButtonUnchecked["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "polygon",
      "aria-label": "add a polygon"
    }, /*#__PURE__*/_react["default"].createElement(_Timeline["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "freehand",
      "aria-label": "free hand polygon"
    }, /*#__PURE__*/_react["default"].createElement(_Gesture["default"], null)))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "overline"
    }, "Style")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
      "aria-label": "style selection",
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "strokeColor",
      "aria-label": "select color",
      onClick: this.openChooseColor
    }, /*#__PURE__*/_react["default"].createElement(_BorderColor["default"], {
      style: {
        fill: strokeColor
      }
    }), /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "strokeColor",
      "aria-label": "select line weight",
      onClick: this.openChooseLineWeight
    }, /*#__PURE__*/_react["default"].createElement(_LineWeight["default"], null), /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "fillColor",
      "aria-label": "select color",
      onClick: this.openChooseColor
    }, /*#__PURE__*/_react["default"].createElement(_FormatColorFill["default"], {
      style: {
        fill: fillColor
      }
    }), /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], null))), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
      flexItem: true,
      orientation: "vertical",
      className: classes.divider
    }),
    /* close / open polygon mode only for freehand drawing mode. */
    activeTool === 'freehand' ? /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
      size: "small",
      value: closedMode,
      onChange: this.changeClosedMode
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "closed"
    }, /*#__PURE__*/_react["default"].createElement(_ChangeHistory["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      value: "open"
    }, /*#__PURE__*/_react["default"].createElement(_ShowChart["default"], null))) : null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "overline"
    }, "Annotation type")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_AnnotationType["default"], null))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "overline"
    }, "Content")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement(_TextEditor["default"], {
      annoHtml: annoBody,
      updateAnnotationBody: this.updateBody
    }))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      onClick: closeCompanionWindow
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "contained",
      color: "primary",
      type: "submit"
    }, "Save")), /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
      open: lineWeightPopoverOpen,
      anchorEl: popoverLineWeightAnchorEl
    }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], null, /*#__PURE__*/_react["default"].createElement(_ClickAwayListener["default"], {
      onClickAway: this.handleCloseLineWeight
    }, /*#__PURE__*/_react["default"].createElement(_MenuList["default"], null, [1, 3, 5, 10, 50].map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        key: option,
        onClick: _this2.handleLineWeightSelect,
        value: option
      }, option);
    }))))), /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
      open: colorPopoverOpen,
      anchorEl: popoverAnchorEl,
      onClose: this.closeChooseColor
    }, /*#__PURE__*/_react["default"].createElement(_reactColor.SketchPicker // eslint-disable-next-line react/destructuring-assignment
    , {
      color: this.state[currentColorType] || {},
      onChangeComplete: this.updateStrokeColor
    })));
  };

  return AnnotationCreation;
}(_react.Component);
/** */


var styles = function styles(theme) {
  return {
    divider: {
      margin: theme.spacing(1, 0.5)
    },
    grouped: {
      '&:first-child': {
        borderRadius: theme.shape.borderRadius
      },
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius
      },
      border: 'none',
      margin: theme.spacing(0.5)
    },
    paper: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  };
};

AnnotationCreation.propTypes = process.env.NODE_ENV !== "production" ? {
  annotation: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  canvases: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    index: _propTypes["default"].number
  })),
  classes: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  closeCompanionWindow: _propTypes["default"].func,
  config: _propTypes["default"].shape({
    annotation: _propTypes["default"].shape({
      adapter: _propTypes["default"].func
    })
  }).isRequired,
  id: _propTypes["default"].string.isRequired,
  receiveAnnotation: _propTypes["default"].func.isRequired,
  windowId: _propTypes["default"].string.isRequired
} : {};
AnnotationCreation.defaultProps = {
  annotation: null,
  canvases: [],
  closeCompanionWindow: function closeCompanionWindow() {}
};

var _default = (0, _styles.withStyles)(styles)(AnnotationCreation);

exports["default"] = _default;
module.exports = exports.default;