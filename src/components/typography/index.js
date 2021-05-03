import styled from "styled-components";

const BaseH1 = styled.h1`
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  color: ${({ color }) => color} !important;
  font-size: ${({ size }) => size}rem !important;
  margin: 0;
  padding: 0;

  border: ${({ border }) => border};
  border-top: ${({ bTob }) => bTob};
  border-bottom: ${({ bBot }) => bBot};
  border-left: ${({ bLeft }) => bLeft};
  border-right: ${({ bRight }) => bRight};

  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ padding }) => padding};
  padding-top: ${({ pTop }) => pTop}rem;
  padding-bottom: ${({ pBot }) => pBot}rem;
  padding-left: ${({ pLeft }) => pLeft}rem;
  padding-right: ${({ pRight }) => pRight}rem;
  border-radius: ${({ bRadius }) => bRadius};

  margin: ${({ margin }) => margin};
  margin-top: ${({ mTop }) => mTop}rem;
  margin-bottom: ${({ mBot }) => mBot}rem;
  margin-left: ${({ mLeft }) => mLeft}rem;
  margin-right: ${({ mRight }) => mRight}rem;
`;

export const Header = styled(BaseH1)`
  font-size: 30px;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  padding-bottom: 0;
`;

export const SubHeader = styled(BaseH1)`
  font-size: 1.2rem;
  color: gb(51, 51, 51);
  font-weight: 800;
  padding: 0.5rem 0;
  padding-bottom: 0;
`;

export const Subtitle = styled(BaseH1)`
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);

  padding-bottom: 1rem;
`;

export const Text = styled(BaseH1)`
  font-size: 16px;
  letter-spacing: 0.2px;
  font-weight: 300;
  color: rgb(51, 51, 51);
`;
