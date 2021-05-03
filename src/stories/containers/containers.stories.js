import React from "react";
import { Box } from "../../components/containers";
import { Header, Subtitle, Text } from "../../components/typography";

export default {
  title: "Example/Containers",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <Box {...args}>
    <Header>A story of love</Header>
    <Subtitle>How I came to be in this world</Subtitle>

    <Text>My name is paco sainz, and today you will learn my story</Text>
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  password: false,
};
