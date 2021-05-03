import styled from "styled-components";
import React from "react";

const Nav = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid #dddd;

  display: flex;
  padding: 0 1rem;
  justify-content: space-between;

  border: ${({ border }) => border};
  border-top: ${({ bTob }) => bTob};
  border-bottom: ${({ bBot }) => bBot};
  border-left: ${({ bLeft }) => bLeft};
  border-right: ${({ bRight }) => bRight};

  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ padding }) => padding}rem;
  padding-top: ${({ pTop }) => pTop}rem;
  padding-bottom: ${({ pBot }) => pBot}rem;
  padding-left: ${({ pLeft }) => pLeft}rem;
  padding-right: ${({ pRight }) => pRight}rem;

  margin: ${({ margin }) => margin}rem;
  margin-top: ${({ mTop }) => mTop}rem;
  margin-bottom: ${({ mBot }) => mBot}rem;
  margin-left: ${({ mLeft }) => mLeft}rem;
  margin-right: ${({ mRight }) => mRight}rem;
  width: "100%";
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ left }) => (left ? "flex-start" : "flex-end")};

  > * {
    padding-right: ${({ spacing, left }) =>
      left ? spacing + "rem" : "unset"} !important;
    padding-left: ${({ spacing, left }) =>
      !left ? spacing + "rem" : "unset"} !important;
  }
`;

export const Navbar = ({ children, hidden }) => {
  if (hidden) return null;

  return <Nav hidden={hidden}>{children}</Nav>;
};
