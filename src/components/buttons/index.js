import styled from "styled-components";
import { system, typography } from "styled-system";

const customTransform = (key, obj) => {
  return `${obj[key]} 0rem`;
};

const BaseButton = styled.button`
  box-sizing: border-box;
  appearance: none;
  outline: none;
  min-width: 10rem;
  border-radius: 0.25rem;
  cursor: pointer;
  height: 3rem;
  border: none;

  ${typography};
  ${system({
    width: {
      property: "width",
      scale: "widths",
    },
    spacingTop: {
      property: "marginTop",
      scale: "paddings",
    },
    spacingBot: {
      property: "marginBottom",
      scale: "paddings",
    },
    spacingVertical: {
      property: "margin",
      scale: "paddings",
      transform: customTransform,
    },
  })};
`;

export const Button = styled(BaseButton)`
  font-weight: 600;
  transition: 0.6s;
  letter-spacing: 0.7px;
  background-color: ${({ color, fill, theme }) =>
    color && fill ? theme.colors[color] : "rgba(0, 0, 0, 0)"};
  border: ${({ color, fill, theme }) =>
    `2px solid ${fill ? "none" : theme.colors[color]}`};
  color: ${({ color, fill, theme }) => (fill ? "white" : theme.colors[color])};

  :hover {
    background-color: ${({ color, fill, theme }) =>
      !fill ? theme.colors[color] : undefined};
    color: ${({ color, fill, theme }) => (!fill ? "white" : undefined)};
  }
`;
