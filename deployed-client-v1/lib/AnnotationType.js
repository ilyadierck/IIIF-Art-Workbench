"use strict";

exports.__esModule = true;
exports["default"] = MultipleSelectChip;

var React = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _OutlinedInput = _interopRequireDefault(require("@mui/material/OutlinedInput"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _Select = _interopRequireDefault(require("@mui/material/Select"));

var _Chip = _interopRequireDefault(require("@mui/material/Chip"));

var _ListSubheader = _interopRequireDefault(require("@mui/material/ListSubheader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
};
var defaultTypes = ["Text"];
var damageTypes = ["Edge", "Bump(ed)", "Blister", "Shiny", "Crack", "Moldy", "Laminate", "(dis)coloration", "Other object", "Corrosion", "Layer", "Drip", "Seam", "Impact", "Dig", "Tear", "Discoloured", "Fly speck", "Slack", "Disjointed", "Relining", "Chip", "Squashed", "Blanched", "Thickening-out", "Finger print", "Dirty", "Fragile", "Brittle", "Rub", "Scratch", "Moisture", "Curved", "Irregular", "Interstice", "Yellowed", "Joint", "Visible", "Deficient", "Re-mounting", "(semi) dull", "Mould", "Nervure", "Knot", "Darkened", "Undulation", "Oxidation", "Cradle", "Foxing", "Crease", "Dust", "Priming", "Patching", "Inpainting", "Resoration", "Touching up", "Rust", "Rough", "Dirt", "Lifting up", "Stain", "Tension", "Hole", "Wear", "Worm-eaten", "Woodworm", "Varnish"];

function getStyles(name, annotationName, theme) {
  return {
    fontWeight: annotationName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

function MultipleSelectChip() {
  var theme = (0, _styles.useTheme)();

  var _React$useState = React.useState([]),
      annotationName = _React$useState[0],
      setAnnotationName = _React$useState[1];

  var handleChange = function handleChange(event) {
    var value = event.target.value;
    setAnnotationName( // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_FormControl["default"], {
    sx: {
      m: 1,
      width: 200
    }
  }, /*#__PURE__*/React.createElement(_InputLabel["default"], {
    id: "demo-multiple-chip-label"
  }, "Type"), /*#__PURE__*/React.createElement(_Select["default"], {
    multiple: true,
    value: annotationName,
    onChange: handleChange,
    input: /*#__PURE__*/React.createElement(_OutlinedInput["default"], {
      id: "annotationType",
      label: "Annotationtype"
    }),
    renderValue: function renderValue(selected) {
      return /*#__PURE__*/React.createElement(_Box["default"], {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5
        }
      }, selected.map(function (value) {
        return /*#__PURE__*/React.createElement(_Chip["default"], {
          key: value,
          label: value
        });
      }));
    },
    MenuProps: MenuProps
  }, /*#__PURE__*/React.createElement(_ListSubheader["default"], null, "Main"), defaultTypes.map(function (name) {
    return /*#__PURE__*/React.createElement(_MenuItem["default"], {
      key: name,
      value: name,
      style: getStyles(name, annotationName, theme)
    }, name);
  }), /*#__PURE__*/React.createElement(_ListSubheader["default"], null, "Damage"), damageTypes.sort().map(function (name) {
    return /*#__PURE__*/React.createElement(_MenuItem["default"], {
      key: name,
      value: name,
      style: getStyles(name, annotationName, theme)
    }, name);
  }))));
}

module.exports = exports.default;