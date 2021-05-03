"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseFlexContainer = _styledComponents.default.div.withConfig({
  componentId: "sbcyg6-0"
})(["box-sizing:border-box;appearance:none;", ";", ";"], _styledSystem.flexbox, _styledSystem.layout);

var Box = (0, _styledComponents.default)(BaseFlexContainer).withConfig({
  componentId: "sbcyg6-1"
})(["border-radius:0.2rem;width:100%;border:1px solid rgba(0,0,0,0.3);height:100%;padding:1rem;"]); // flex-direction: ${({ direction }) =>
//   direction === "col" ? "column" : "row"};
// justify-content: ${({ direction, vSpacing, hSpacing }) =>
//   direction === "col" ? vSpacing : hSpacing};
// align-items: ${({ direction, hSpacing, vSpacing }) =>
//   direction === "col" ? hSpacing : vSpacing};

exports.Box = Box;