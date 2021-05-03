"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseInput = _styledComponents.default.input.withConfig({
  componentId: "utr5f7-0"
})(["box-sizing:border-box;appearance:none;border:none;"]);

var TextInput = (0, _styledComponents.default)(BaseInput).attrs(function (props) {
  return {
    type: props.password ? "password" : "text"
  };
}).withConfig({
  componentId: "utr5f7-1"
})(["padding:1rem 0.5rem;border:", ";margin:0.2rem 0;height:3rem;font-family:\"Roboto\",sans-serif;outline-color:#b3b3b3;font-weight:300;border-radius:0.2rem;width:", ";color:rgb(0,0,0);font-size:1rem;padding-left:0.8rem;"], function (_ref) {
  var error = _ref.error;
  return "1px solid ".concat(error ? "#f70049" : "#ddd");
}, function (_ref2) {
  var fill = _ref2.fill,
      width = _ref2.width;

  if (fill) {
    return "100%";
  }

  switch (width) {
    case "small":
      return "10rem";

    case "medium":
      return "15rem";

    case "large":
      return "25rem";

    default:
      return "15rem";
  }
});
exports.TextInput = TextInput;