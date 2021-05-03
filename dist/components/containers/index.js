"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseFlexContainer = _styledComponents.default.div.withConfig({
  componentId: "x4meg0-0"
})(["box-sizing:border-box;appearance:none;border:", ";border-top:", ";border-bottom:", ";border-left:", ";border-right:", ";border-radius:", ";background-color:", ";padding:", ";padding-top:", "rem;padding-bottom:", "rem;padding-left:", "rem;padding-right:", "rem;margin:", ";margin-top:", "rem;margin-bottom:", "rem;margin-left:", "rem;margin-right:", "rem;"], function (_ref) {
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
  var bRadius = _ref6.bRadius;
  return bRadius;
}, function (_ref7) {
  var bgColor = _ref7.bgColor;
  return bgColor;
}, function (_ref8) {
  var padding = _ref8.padding;
  return padding;
}, function (_ref9) {
  var pTop = _ref9.pTop;
  return pTop;
}, function (_ref10) {
  var pBot = _ref10.pBot;
  return pBot;
}, function (_ref11) {
  var pLeft = _ref11.pLeft;
  return pLeft;
}, function (_ref12) {
  var pRight = _ref12.pRight;
  return pRight;
}, function (_ref13) {
  var margin = _ref13.margin;
  return margin;
}, function (_ref14) {
  var mTop = _ref14.mTop;
  return mTop;
}, function (_ref15) {
  var mBot = _ref15.mBot;
  return mBot;
}, function (_ref16) {
  var mLeft = _ref16.mLeft;
  return mLeft;
}, function (_ref17) {
  var mRight = _ref17.mRight;
  return mRight;
});

var Box = (0, _styledComponents.default)(BaseFlexContainer).withConfig({
  componentId: "x4meg0-1"
})(["border-radius:0.2rem;width:100%;min-height:", "rem;border:1px solid rgba(0,0,0,0.3);height:100%;padding:1rem;"], function (_ref18) {
  var minHeight = _ref18.minHeight;
  return minHeight;
}); // flex-direction: ${({ direction }) =>
//   direction === "col" ? "column" : "row"};
// justify-content: ${({ direction, vSpacing, hSpacing }) =>
//   direction === "col" ? vSpacing : hSpacing};
// align-items: ${({ direction, hSpacing, vSpacing }) =>
//   direction === "col" ? hSpacing : vSpacing};

exports.Box = Box;