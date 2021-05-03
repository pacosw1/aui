"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryButton = exports.MenuButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../colors/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseButton = _styledComponents.default.button.withConfig({
  componentId: "sc-7yp5d5-0"
})(["box-sizing:border-box;appearance:none;outline:none;border-radius:0.25rem;color:", ";width:", ";min-width:\"10rem\";margin:", ";font-size:", "rem;cursor:pointer;letter-spacing:1.2px;height:", ";"], function (_ref) {
  var color = _ref.color;
  return color ? color : null;
}, function (_ref2) {
  var fill = _ref2.fill,
      width = _ref2.width;
  return fill ? "100%" : width ? width : "10rem";
}, function (_ref3) {
  var margin = _ref3.margin;
  return margin;
}, function (_ref4) {
  var fontSize = _ref4.fontSize;
  return fontSize;
}, function (_ref5) {
  var height = _ref5.height;
  return height ? height + "rem" : "3rem";
});

var MenuButton = (0, _styledComponents.default)(BaseButton).withConfig({
  componentId: "sc-7yp5d5-1"
})(["padding:0.8rem;font-weight:600;letter-spacing:0.7px;border:none;background-color:", ";"], function (_ref6) {
  var color = _ref6.color;
  return color ? color : "#FFFFFF";
});
exports.MenuButton = MenuButton;
var SecondaryButton = (0, _styledComponents.default)(BaseButton).withConfig({
  componentId: "sc-7yp5d5-2"
})(["padding:0.8rem;font-weight:600;letter-spacing:0.7px;background-color:rgba(0,0,0,0);border:", ";"], function (_ref7) {
  var color = _ref7.color;
  return "2px solid ".concat(color ? color : "rgba(0,0,0,0.5)");
});
exports.SecondaryButton = SecondaryButton;