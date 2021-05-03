import React from "react";
import { Button } from "../../components/buttons";
import { Header, Text } from "../../components/typography";
import { TestProvider } from "../defaultProvider";

export default {
  title: "Example/Button",
  component: Button,
};

const ButtonTemplate = (args) => (
  <TestProvider>
    <Text>Hello</Text>
    <Button {...args}>{args.text}</Button>
    <Text>Hello</Text>
  </TestProvider>
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  text: "Hello World",
  height: 3,
  fill: false,
  label: "Button",
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  color: "primary",
  text: "Hello World",
  height: 3,
  fill: true,
  width: "small",
  spacingTop: "medium",
  spacingBot: "small",
  spacingVertical: "small",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
