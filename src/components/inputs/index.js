import styled from "styled-components";

const BaseInput = styled.input`
  box-sizing: border-box;
  appearance: none;
  border: none;
  /* 
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
  width: ${({ fill, width }) => (fill ? "100%" : width ? width : 12)}rem; */
`;

export const TextInput = styled(BaseInput).attrs((props) => ({
  type: props.password ? "password" : "text",
}))`
  padding: 1rem 0.5rem;
  border: ${({ error }) => `1px solid ${error ? "#f70049" : "#ddd"}`};

  margin: 0.2rem 0;
  height: 3rem;
  font-family: "Roboto", sans-serif;
  outline-color: #b3b3b3;
  font-weight: 300;
  border-radius: 0.2rem;

  width: ${({ fill, width }) => {
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
  }};
  color: rgb(0, 0, 0);
  font-size: 1rem;
  padding-left: 0.8rem;
`;
