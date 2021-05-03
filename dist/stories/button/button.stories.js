"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _buttons = require("../../components/buttons");

var _typography = require("../../components/typography");

var _defaultProvider = require("../defaultProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Example/Button",
  component: _buttons.Button
};
exports.default = _default;

var ButtonTemplate = function ButtonTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_defaultProvider.TestProvider, null, /*#__PURE__*/_react.default.createElement(_typography.Text, null, "Hello"), /*#__PURE__*/_react.default.createElement(_buttons.Button, args, args.text), /*#__PURE__*/_react.default.createElement(_typography.Text, null, "Hello"));
};

var Primary = ButtonTemplate.bind({});
exports.Primary = Primary;
Primary.args = {
  text: "Hello World",
  height: 3,
  fill: false,
  label: "Button"
};
var Secondary = ButtonTemplate.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  color: "primary",
  text: "Hello World",
  height: 3,
  fill: true,
  width: "small",
  spacingTop: "medium",
  spacingBot: "small",
  spacingVertical: "small"
}; // export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };