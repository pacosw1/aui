import React from "react";
import { Button, MenuButton, SecondaryButton } from "../../components/buttons";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <MenuButton {...args}>{args.text}</MenuButton>;
const MenuBtnTemplate = (args) => (
  <MenuButton {...args}>{args.text}</MenuButton>
);

const SecondaryMenuBtn = (args) => (
  <SecondaryButton {...args}>{args.text}</SecondaryButton>
);

export const Primary = MenuBtnTemplate.bind({});
Primary.args = {
  text: "Hello World",
  height: 3,

  fill: false,
  label: "Button",
};

export const Secondary = SecondaryMenuBtn.bind({});
Secondary.args = {
  text: "Hello World",
  height: 3,

  fill: false,
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
