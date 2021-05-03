"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customTransform = function customTransform(key, obj) {
  return "".concat(obj[key], " 0rem");
};

var BaseButton = _styledComponents.default.button.withConfig({
  componentId: "s53mse-0"
})(["box-sizing:border-box;appearance:none;outline:none;min-width:10rem;border-radius:0.25rem;cursor:pointer;height:3rem;border:none;", ";", ";"], _styledSystem.typography, (0, _styledSystem.system)({
  width: {
    property: "width",
    scale: "widths"
  },
  spacingTop: {
    property: "marginTop",
    scale: "paddings"
  },
  spacingBot: {
    property: "marginBottom",
    scale: "paddings"
  },
  spacingVertical: {
    property: "margin",
    scale: "paddings",
    transform: customTransform
  }
}));

var Button = (0, _styledComponents.default)(BaseButton).withConfig({
  componentId: "s53mse-1"
})(["font-weight:600;transition:0.6s;letter-spacing:0.7px;background-color:", ";border:", ";color:", ";:hover{background-color:", ";color:", ";}"], function (_ref) {
  var color = _ref.color,
      fill = _ref.fill,
      theme = _ref.theme;
  return color && fill ? theme.colors[color] : "rgba(0, 0, 0, 0)";
}, function (_ref2) {
  var color = _ref2.color,
      fill = _ref2.fill,
      theme = _ref2.theme;
  return "2px solid ".concat(fill ? "none" : theme.colors[color]);
}, function (_ref3) {
  var color = _ref3.color,
      fill = _ref3.fill,
      theme = _ref3.theme;
  return fill ? "white" : theme.colors[color];
}, function (_ref4) {
  var color = _ref4.color,
      fill = _ref4.fill,
      theme = _ref4.theme;
  return !fill ? theme.colors[color] : undefined;
}, function (_ref5) {
  var color = _ref5.color,
      fill = _ref5.fill,
      theme = _ref5.theme;
  return !fill ? "white" : undefined;
});
exports.Button = Button;