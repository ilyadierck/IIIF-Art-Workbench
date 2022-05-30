"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DeleteForever = _interopRequireDefault(require("@material-ui/icons/DeleteForever"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _ToggleButton = _interopRequireDefault(require("@material-ui/lab/ToggleButton"));

var _ToggleButtonGroup = _interopRequireDefault(require("@material-ui/lab/ToggleButtonGroup"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _AnnotationActionsContext = _interopRequireDefault(require("./AnnotationActionsContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var CanvasListItem = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CanvasListItem, _Component);

  /** */
  function CanvasListItem(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isHovering: false
    };
    _this.handleMouseHover = _this.handleMouseHover.bind(_assertThisInitialized(_this));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = CanvasListItem.prototype;

  _proto.handleDelete = function handleDelete() {
    var _this$context = this.context,
        canvases = _this$context.canvases,
        receiveAnnotation = _this$context.receiveAnnotation,
        storageAdapter = _this$context.storageAdapter;
    var annotationid = this.props.annotationid;
    canvases.forEach(function (canvas) {
      var adapter = storageAdapter(canvas.id);
      adapter["delete"](annotationid).then(function (annoPage) {
        receiveAnnotation(canvas.id, adapter.annotationPageId, annoPage);
      });
    });
  }
  /** */
  ;

  _proto.handleEdit = function handleEdit() {
    var _this$context2 = this.context,
        addCompanionWindow = _this$context2.addCompanionWindow,
        canvases = _this$context2.canvases,
        annotationsOnCanvases = _this$context2.annotationsOnCanvases;
    var annotationid = this.props.annotationid;
    var annotation;
    canvases.some(function (canvas) {
      if (annotationsOnCanvases[canvas.id]) {
        Object.entries(annotationsOnCanvases[canvas.id]).forEach(function (_ref, i) {
          var key = _ref[0],
              value = _ref[1];

          if (value.json && value.json.items) {
            annotation = value.json.items.find(function (anno) {
              return anno.id === annotationid;
            });
          }
        });
      }

      return annotation;
    });
    addCompanionWindow('annotationCreation', {
      annotationid: annotationid,
      position: 'right'
    });
  }
  /** */
  ;

  _proto.handleMouseHover = function handleMouseHover() {
    this.setState(function (prevState) {
      return {
        isHovering: !prevState.isHovering
      };
    });
  }
  /** */
  ;

  _proto.editable = function editable() {
    var _this$context3 = this.context,
        annotationsOnCanvases = _this$context3.annotationsOnCanvases,
        canvases = _this$context3.canvases;
    var annotationid = this.props.annotationid;
    var annoIds = canvases.map(function (canvas) {
      if (annotationsOnCanvases[canvas.id]) {
        return (0, _flatten["default"])(Object.entries(annotationsOnCanvases[canvas.id]).map(function (_ref2, i) {
          var key = _ref2[0],
              value = _ref2[1];

          if (value.json && value.json.items) {
            return value.json.items.map(function (item) {
              return item.id;
            });
          }

          return [];
        }));
      }

      return [];
    });
    return (0, _flatten["default"])(annoIds).includes(annotationid);
  }
  /** */
  ;

  _proto.render = function render() {
    var children = this.props.children;
    var isHovering = this.state.isHovering;
    var _this$context4 = this.context,
        windowViewType = _this$context4.windowViewType,
        toggleSingleCanvasDialogOpen = _this$context4.toggleSingleCanvasDialogOpen;
    var _this$context5 = this.context,
        annotationsOnCanvases = _this$context5.annotationsOnCanvases,
        canvases = _this$context5.canvases;
    return /*#__PURE__*/_react["default"].createElement("div", {
      onMouseEnter: this.handleMouseHover,
      onMouseLeave: this.handleMouseHover
    }, isHovering && this.editable() && /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        position: 'relative',
        top: -20,
        zIndex: 10000
      }
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
      "aria-label": "annotation tools",
      size: "small",
      style: {
        position: 'absolute',
        right: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      "aria-label": "Edit",
      onClick: windowViewType === 'single' ? this.handleEdit : toggleSingleCanvasDialogOpen,
      value: "edit"
    }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      "aria-label": "Delete",
      onClick: this.handleDelete,
      value: "delete"
    }, /*#__PURE__*/_react["default"].createElement(_DeleteForever["default"], null)))), /*#__PURE__*/_react["default"].createElement("li", this.props, children));
  };

  return CanvasListItem;
}(_react.Component);

CanvasListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  annotationid: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]).isRequired
} : {};
CanvasListItem.contextType = _AnnotationActionsContext["default"];
var _default = CanvasListItem;
exports["default"] = _default;