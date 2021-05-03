import styled from "styled-components";

const BaseFlexContainer = styled.div`
  display: flex;

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
  width: ${({ fill, width }) =>
    fill ? "100%" : width ? width + " !important" : "unset"};
`;

export const VerticalBox = styled(BaseFlexContainer)`
  flex-direction: column;
  justify-content: ${({ verticalSpacing }) => verticalSpacing};
  align-items: ${({ horizontalSpacing }) => horizontalSpacing};
`;

export const HorizontalBox = styled(BaseFlexContainer)`
  justify-content: ${({ horizontalSpacing }) => horizontalSpacing};
  align-items: ${({ verticalSpacing }) => verticalSpacing};
`;

// flex-direction: ${({ direction }) =>
//   direction === "col" ? "column" : "row"};
// justify-content: ${({ direction, vSpacing, hSpacing }) =>
//   direction === "col" ? vSpacing : hSpacing};
// align-items: ${({ direction, hSpacing, vSpacing }) =>
//   direction === "col" ? hSpacing : vSpacing};
