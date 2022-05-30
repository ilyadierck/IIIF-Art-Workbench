"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _GetApp = _interopRequireDefault(require("@material-ui/icons/GetApp"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var styles = function styles(theme) {
  return {
    listitem: {
      '&:focus': {
        backgroundColor: theme.palette.action.focus
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    }
  };
};
/** */


var AnnotationExportDialog = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AnnotationExportDialog, _Component);

  /** */
  function AnnotationExportDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      exportLinks: []
    };
    _this.closeDialog = _this.closeDialog.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = AnnotationExportDialog.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var _this$props = this.props,
        canvases = _this$props.canvases,
        config = _this$props.config,
        open = _this$props.open;

    var _ref = prevProps || {},
        prevOpen = _ref.open;

    if (prevOpen !== open && open) {
      /** */
      var reducer = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(acc, canvas) {
          var store, resolvedAcc, content, label, data, url;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  store = config.annotation.adapter(canvas.id);
                  _context.next = 3;
                  return acc;

                case 3:
                  resolvedAcc = _context.sent;
                  _context.next = 6;
                  return store.all();

                case 6:
                  content = _context.sent;

                  if (!content) {
                    _context.next = 12;
                    break;
                  }

                  // eslint-disable-next-line no-underscore-dangle
                  label = canvas.__jsonld && canvas.__jsonld.label || canvas.id;
                  data = new Blob([JSON.stringify(content)], {
                    type: 'application/json'
                  });
                  url = window.URL.createObjectURL(data);
                  return _context.abrupt("return", [].concat(resolvedAcc, [{
                    canvasId: canvas.id,
                    id: content.id || content['@id'],
                    label: label,
                    url: url
                  }]));

                case 12:
                  return _context.abrupt("return", resolvedAcc);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function reducer(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      if (canvases && canvases.length > 0) {
        canvases.reduce(reducer, []).then(function (exportLinks) {
          _this2.setState({
            exportLinks: exportLinks
          });
        });
      }
    }
  }
  /** */
  ;

  _proto.closeDialog = function closeDialog() {
    var handleClose = this.props.handleClose;
    this.setState({
      exportLinks: []
    });
    handleClose();
  }
  /** */
  ;

  _proto.render = function render() {
    var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open;
    var exportLinks = this.state.exportLinks;
    return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
      "aria-labelledby": "annotation-export-dialog-title",
      id: "annotation-export-dialog",
      onClose: handleClose,
      onEscapeKeyDown: this.closeDialog,
      open: open
    }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
      id: "annotation-export-dialog-title",
      disableTypography: true
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h2"
    }, "Export Annotations")), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, exportLinks === undefined || exportLinks.length === 0 ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body1"
    }, "No annotations stored yet.") : /*#__PURE__*/_react["default"].createElement(_MenuList["default"], null, exportLinks.map(function (dl) {
      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        button: true,
        className: classes.listitem,
        component: "a",
        key: dl.canvasId,
        "aria-label": "Export annotations for " + dl.label,
        href: dl.url,
        download: dl.id + ".json"
      }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_GetApp["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], null, "Export annotations for \"" + dl.label + "\""));
    }))));
  };

  return AnnotationExportDialog;
}(_react.Component);

AnnotationExportDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  canvases: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string
  })).isRequired,
  classes: _propTypes["default"].objectOf(_propTypes["default"].string),
  config: _propTypes["default"].shape({
    annotation: _propTypes["default"].shape({
      adapter: _propTypes["default"].func
    })
  }).isRequired,
  handleClose: _propTypes["default"].func.isRequired,
  open: _propTypes.bool.isRequired
} : {};
AnnotationExportDialog.defaultProps = {
  classes: {}
};

var _default = (0, _core.withStyles)(styles)(AnnotationExportDialog);

exports["default"] = _default;