"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _containers = require("../../components/containers");

var _typography = require("../../components/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Example/Containers",
  component: _containers.Box,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_containers.Box, args, /*#__PURE__*/_react.default.createElement(_typography.Header, null, "A story of love"), /*#__PURE__*/_react.default.createElement(_typography.Subtitle, null, "How I came to be in this world"), /*#__PURE__*/_react.default.createElement(_typography.Text, null, "My name is paco sainz, and today you will learn my story"));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  password: false
};