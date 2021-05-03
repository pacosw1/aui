import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../theme";

export const TestProvider = (props) => {
  return (
    <ThemeProvider theme={DefaultTheme} props={props}>
      {props.children}
    </ThemeProvider>
  );
};
