import styled from "styled-components";
import { menu, primary as prim, secondary } from "../colors/index";

const BaseButton = styled.button`
  box-sizing: border-box;
  appearance: none;
  outline: none;
  border-radius: 0.25rem;
  color: ${({ color }) => (color ? color : null)};

  width: ${({ fill, width }) => (fill ? "100%" : width ? width : "10rem")};
  min-width: "10rem";

  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize}rem;

  cursor: pointer;

  letter-spacing: 1.2px;

  /* :focus {
    border-width: 1.2px;
  } */

  height: ${({ height }) => (height ? height + "rem" : "3rem")};

  /* :hover {
    filter: brightness(0.98);
    background-color: ${({ invert, bColor }) => (invert ? bColor : null)};
    color: ${({ invert, invertTextColor }) =>
    invert ? invertTextColor : null};
  } */
`;

export const MenuButton = styled(BaseButton)`
  padding: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  border: none;

  background-color: ${({ color }) => (color ? color : "#FFFFFF")};
`;

export const SecondaryButton = styled(BaseButton)`
  padding: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  background-color: rgba(0, 0, 0, 0);
  border: ${({ color }) => `2px solid ${color ? color : "rgba(0,0,0,0.5)"}`};
`;
