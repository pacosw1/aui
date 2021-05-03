"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalBox = exports.VerticalBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseFlexContainer = _styledComponents.default.div.withConfig({
  componentId: "do4op1-0"
})(["display:flex;border:", ";border-top:", ";border-bottom:", ";border-left:", ";border-right:", ";border-radius:", ";background-color:", ";padding:", ";padding-top:", "rem;padding-bottom:", "rem;padding-left:", "rem;padding-right:", "rem;margin:", ";margin-top:", "rem;margin-bottom:", "rem;margin-left:", "rem;margin-right:", "rem;width:", ";"], function (_ref) {
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
}, function (_ref18) {
  var fill = _ref18.fill,
      width = _ref18.width;
  return fill ? "100%" : width ? width + " !important" : "unset";
});

var VerticalBox = (0, _styledComponents.default)(BaseFlexContainer).withConfig({
  componentId: "do4op1-1"
})(["flex-direction:column;justify-content:", ";align-items:", ";"], function (_ref19) {
  var verticalSpacing = _ref19.verticalSpacing;
  return verticalSpacing;
}, function (_ref20) {
  var horizontalSpacing = _ref20.horizontalSpacing;
  return horizontalSpacing;
});
exports.VerticalBox = VerticalBox;
var HorizontalBox = (0, _styledComponents.default)(BaseFlexContainer).withConfig({
  componentId: "do4op1-2"
})(["justify-content:", ";align-items:", ";"], function (_ref21) {
  var horizontalSpacing = _ref21.horizontalSpacing;
  return horizontalSpacing;
}, function (_ref22) {
  var verticalSpacing = _ref22.verticalSpacing;
  return verticalSpacing;
}); // flex-direction: ${({ direction }) =>
//   direction === "col" ? "column" : "row"};
// justify-content: ${({ direction, vSpacing, hSpacing }) =>
//   direction === "col" ? vSpacing : hSpacing};
// align-items: ${({ direction, hSpacing, vSpacing }) =>
//   direction === "col" ? hSpacing : vSpacing};

exports.HorizontalBox = HorizontalBox;