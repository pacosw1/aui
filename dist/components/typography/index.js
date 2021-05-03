"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Subtitle = exports.SubHeader = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseH1 = _styledComponents.default.h1.withConfig({
  componentId: "sc-1w1sivg-0"
})(["box-sizing:border-box;font-family:Roboto,sans-serif;color:", " !important;font-size:", "rem !important;margin:0;padding:0;border:", ";border-top:", ";border-bottom:", ";border-left:", ";border-right:", ";background-color:", ";padding:", ";padding-top:", "rem;padding-bottom:", "rem;padding-left:", "rem;padding-right:", "rem;border-radius:", ";margin:", ";margin-top:", "rem;margin-bottom:", "rem;margin-left:", "rem;margin-right:", "rem;"], function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var border = _ref3.border;
  return border;
}, function (_ref4) {
  var bTob = _ref4.bTob;
  return bTob;
}, function (_ref5) {
  var bBot = _ref5.bBot;
  return bBot;
}, function (_ref6) {
  var bLeft = _ref6.bLeft;
  return bLeft;
}, function (_ref7) {
  var bRight = _ref7.bRight;
  return bRight;
}, function (_ref8) {
  var bgColor = _ref8.bgColor;
  return bgColor;
}, function (_ref9) {
  var padding = _ref9.padding;
  return padding;
}, function (_ref10) {
  var pTop = _ref10.pTop;
  return pTop;
}, function (_ref11) {
  var pBot = _ref11.pBot;
  return pBot;
}, function (_ref12) {
  var pLeft = _ref12.pLeft;
  return pLeft;
}, function (_ref13) {
  var pRight = _ref13.pRight;
  return pRight;
}, function (_ref14) {
  var bRadius = _ref14.bRadius;
  return bRadius;
}, function (_ref15) {
  var margin = _ref15.margin;
  return margin;
}, function (_ref16) {
  var mTop = _ref16.mTop;
  return mTop;
}, function (_ref17) {
  var mBot = _ref17.mBot;
  return mBot;
}, function (_ref18) {
  var mLeft = _ref18.mLeft;
  return mLeft;
}, function (_ref19) {
  var mRight = _ref19.mRight;
  return mRight;
});

var Header = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1w1sivg-1"
})(["font-size:30px;letter-spacing:0.5px;font-weight:700;color:rgba(0,0,0,0.8);padding-bottom:0;"]);
exports.Header = Header;
var SubHeader = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1w1sivg-2"
})(["font-size:1.2rem;color:gb(51,51,51);font-weight:800;padding:0.5rem 0;padding-bottom:0;"]);
exports.SubHeader = SubHeader;
var Subtitle = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1w1sivg-3"
})(["font-size:18px;letter-spacing:0.5px;font-weight:500;color:rgba(0,0,0,0.4);padding-bottom:1rem;"]);
exports.Subtitle = Subtitle;
var Text = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1w1sivg-4"
})(["font-size:16px;letter-spacing:0.2px;font-weight:300;color:rgb(51,51,51);"]);
exports.Text = Text;