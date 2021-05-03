import React from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./theme";

export const AirUIProvider = (props) => {
  return (
    <ThemeProvider theme={DefaultTheme} props={props}>
      {props.children}
    </ThemeProvider>
  );
};
