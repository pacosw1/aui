"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavContainerPreview = exports.NavbarPreview = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _navbar = require("../../components/navbar");

var _typography = require("../../components/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Navbar',
  component: _navbar.Navbar,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_navbar.Navbar, args, /*#__PURE__*/_react.default.createElement(_navbar.NavContainer, {
    left: true,
    spacing: 0
  }, /*#__PURE__*/_react.default.createElement(_typography.SubHeader, null, "Hello")), /*#__PURE__*/_react.default.createElement(_navbar.NavContainer, {
    spacing: 2,
    left: false
  }, /*#__PURE__*/_react.default.createElement(_typography.Text, null, "Hello"), /*#__PURE__*/_react.default.createElement(_typography.Text, null, "Hello"), /*#__PURE__*/_react.default.createElement(_typography.Text, null, "Hello")));
};

var NavbarPreview = Template.bind({});
exports.NavbarPreview = NavbarPreview;
NavbarPreview.args = {
  hidden: false
};

var NavContainerTemplate = function NavContainerTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_navbar.NavContainer, null, /*#__PURE__*/_react.default.createElement(_typography.Text, null, "Hello"));
};

var NavContainerPreview = NavContainerTemplate.bind({});
exports.NavContainerPreview = NavContainerPreview;
NavContainerPreview.args = {};