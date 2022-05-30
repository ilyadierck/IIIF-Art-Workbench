"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _draftJs = require("draft-js");

var _ToggleButton = _interopRequireDefault(require("@material-ui/lab/ToggleButton"));

var _ToggleButtonGroup = _interopRequireDefault(require("@material-ui/lab/ToggleButtonGroup"));

var _FormatBold = _interopRequireDefault(require("@material-ui/icons/FormatBold"));

var _FormatItalic = _interopRequireDefault(require("@material-ui/icons/FormatItalic"));

var _styles = require("@material-ui/core/styles");

var _draftJsExportHtml = require("draft-js-export-html");

var _draftJsImportHtml = require("draft-js-import-html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** */
var TextEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TextEditor, _Component);

  /** */
  function TextEditor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      editorState: _draftJs.EditorState.createWithContent((0, _draftJsImportHtml.stateFromHTML)(props.annoHtml))
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.handleKeyCommand = _this.handleKeyCommand.bind(_assertThisInitialized(_this));
    _this.handleFormating = _this.handleFormating.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  var _proto = TextEditor.prototype;

  _proto.handleFormating = function handleFormating(e, newFormat) {
    var editorState = this.state.editorState;
    this.onChange(_draftJs.RichUtils.toggleInlineStyle(editorState, newFormat));
  }
  /** */
  ;

  _proto.handleKeyCommand = function handleKeyCommand(command, editorState) {
    var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }
  /** */
  ;

  _proto.onChange = function onChange(editorState) {
    var updateAnnotationBody = this.props.updateAnnotationBody;
    this.setState({
      editorState: editorState
    });

    if (updateAnnotationBody) {
      var options = {
        inlineStyles: {
          BOLD: {
            element: 'b'
          },
          ITALIC: {
            element: 'i'
          }
        }
      };
      updateAnnotationBody((0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent(), options).toString());
    }
  }
  /** */
  ;

  _proto.render = function render() {
    var classes = this.props.classes;
    var editorState = this.state.editorState;
    var currentStyle = editorState.getCurrentInlineStyle();
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ToggleButtonGroup["default"], {
      size: "small",
      value: currentStyle.toArray()
    }, /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      onClick: this.handleFormating,
      value: "BOLD"
    }, /*#__PURE__*/_react["default"].createElement(_FormatBold["default"], null)), /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
      onClick: this.handleFormating,
      value: "ITALIC"
    }, /*#__PURE__*/_react["default"].createElement(_FormatItalic["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.editorRoot
    }, /*#__PURE__*/_react["default"].createElement(_draftJs.Editor, {
      editorState: editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange
    })));
  };

  return TextEditor;
}(_react.Component);
/** */


var styles = function styles(theme) {
  return {
    editorRoot: {
      borderColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
      borderRadius: theme.shape.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      fontFamily: theme.typography.fontFamily,
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      minHeight: theme.typography.fontSize * 6,
      padding: theme.spacing(1)
    }
  };
};

TextEditor.propTypes = process.env.NODE_ENV !== "production" ? {
  annoHtml: _propTypes["default"].string,
  classes: _propTypes["default"].shape({
    editorRoot: _propTypes["default"].string
  }).isRequired,
  updateAnnotationBody: _propTypes["default"].func
} : {};
TextEditor.defaultProps = {
  annoHtml: '',
  updateAnnotationBody: function updateAnnotationBody() {}
};

var _default = (0, _styles.withStyles)(styles)(TextEditor);

exports["default"] = _default;
module.exports = exports.default;