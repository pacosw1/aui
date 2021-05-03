"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Subtitle = exports.SubHeader = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseH1 = _styledComponents.default.h1.withConfig({
  componentId: "sc-1h2k3q6-0"
})(["", ";margin:0rem;padding:0;"], _styledSystem.typography);

var Header = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1h2k3q6-1"
})(["font-size:", ";font-weight:800;"], function (_ref) {
  var theme = _ref.theme;
  return theme.fontSize["extra-large"];
});
exports.Header = Header;
var SubHeader = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1h2k3q6-2"
})(["font-size:", ";font-size:1.2rem;color:rgb(51,51,51);font-weight:800;padding:0.5rem 0;padding-bottom:0;font-weight:800;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSize.large;
});
exports.SubHeader = SubHeader;
var Subtitle = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1h2k3q6-3"
})(["font-size:", ";padding-bottom:1rem;font-weight:500;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSize.medium;
});
exports.Subtitle = Subtitle;
var Text = (0, _styledComponents.default)(BaseH1).withConfig({
  componentId: "sc-1h2k3q6-4"
})(["font-size:", ";font-weight:300;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontSize.small;
});
exports.Text = Text;