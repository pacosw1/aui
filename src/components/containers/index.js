import styled from "styled-components";

const BaseFlexContainer = styled.div`
  box-sizing: border-box;
  appearance: none;
  border: ${({ border }) => border};
  border-top: ${({ bTob }) => bTob};
  border-bottom: ${({ bBot }) => bBot};
  border-left: ${({ bLeft }) => bLeft};
  border-right: ${({ bRight }) => bRight};
  border-radius: ${({ bRadius }) => bRadius};

  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ padding }) => padding};
  padding-top: ${({ pTop }) => pTop}rem;
  padding-bottom: ${({ pBot }) => pBot}rem;
  padding-left: ${({ pLeft }) => pLeft}rem;
  padding-right: ${({ pRight }) => pRight}rem;

  margin: ${({ margin }) => margin};
  margin-top: ${({ mTop }) => mTop}rem;
  margin-bottom: ${({ mBot }) => mBot}rem;
  margin-left: ${({ mLeft }) => mLeft}rem;
  margin-right: ${({ mRight }) => mRight}rem;
`;

export const Box = styled(BaseFlexContainer)`
  border-radius: 0.2rem;
  width: 100%;
  min-height: ${({ minHeight }) => minHeight}rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: 100%;
  padding: 1rem;
`;

// flex-direction: ${({ direction }) =>
//   direction === "col" ? "column" : "row"};
// justify-content: ${({ direction, vSpacing, hSpacing }) =>
//   direction === "col" ? vSpacing : hSpacing};
// align-items: ${({ direction, hSpacing, vSpacing }) =>
//   direction === "col" ? hSpacing : vSpacing};
