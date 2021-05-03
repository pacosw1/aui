"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = exports.NavContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = _styledComponents.default.div.withConfig({
  componentId: "sc-1bg9sh7-0"
})(["box-sizing:border-box;width:100%;height:4.5rem;border-bottom:1px solid #dddd;display:flex;padding:0 1rem;justify-content:space-between;border:", ";border-top:", ";border-bottom:", ";border-left:", ";border-right:", ";background-color:", ";padding:", "rem;padding-top:", "rem;padding-bottom:", "rem;padding-left:", "rem;padding-right:", "rem;margin:", "rem;margin-top:", "rem;margin-bottom:", "rem;margin-left:", "rem;margin-right:", "rem;width:\"100%\";"], function (_ref) {
  var border = _ref.border;
  return border;
}, function (_ref2) {
  var bTob = _ref2.bTob;
  return bTob;
}, function (_ref3) {
  var bBot = _ref3.bBot;
  return bBot;
}, function (_ref4) {
  var bLeft = _ref4.bLeft;
  return bLeft;
}, function (_ref5) {
  var bRight = _ref5.bRight;
  return bRight;
}, function (_ref6) {
  var bgColor = _ref6.bgColor;
  return bgColor;
}, function (_ref7) {
  var padding = _ref7.padding;
  return padding;
}, function (_ref8) {
  var pTop = _ref8.pTop;
  return pTop;
}, function (_ref9) {
  var pBot = _ref9.pBot;
  return pBot;
}, function (_ref10) {
  var pLeft = _ref10.pLeft;
  return pLeft;
}, function (_ref11) {
  var pRight = _ref11.pRight;
  return pRight;
}, function (_ref12) {
  var margin = _ref12.margin;
  return margin;
}, function (_ref13) {
  var mTop = _ref13.mTop;
  return mTop;
}, function (_ref14) {
  var mBot = _ref14.mBot;
  return mBot;
}, function (_ref15) {
  var mLeft = _ref15.mLeft;
  return mLeft;
}, function (_ref16) {
  var mRight = _ref16.mRight;
  return mRight;
});

var NavContainer = _styledComponents.default.div.withConfig({
  componentId: "sc-1bg9sh7-1"
})(["display:flex;align-items:center;justify-content:", ";> *{padding-right:", " !important;padding-left:", " !important;}"], function (_ref17) {
  var left = _ref17.left;
  return left ? "flex-start" : "flex-end";
}, function (_ref18) {
  var spacing = _ref18.spacing,
      left = _ref18.left;
  return left ? spacing + "rem" : "unset";
}, function (_ref19) {
  var spacing = _ref19.spacing,
      left = _ref19.left;
  return !left ? spacing + "rem" : "unset";
});

exports.NavContainer = NavContainer;

var Navbar = function Navbar(_ref20) {
  var children = _ref20.children,
      hidden = _ref20.hidden;
  if (hidden) return null;
  return /*#__PURE__*/_react.default.createElement(Nav, {
    hidden: hidden
  }, children);
};

exports.Navbar = Navbar;