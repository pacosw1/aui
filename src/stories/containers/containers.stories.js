import React from "react";
import { Button } from "../../components/buttons";
import { Box } from "../../components/containers";
import { Header, Subtitle, Text } from "../../components/typography";
import { TestProvider } from "../defaultProvider";

export default {
  title: "Example/Containers",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <TestProvider>
    <Box {...args}>
      <Header fontSize="small">A story of love</Header>
      <Subtitle>How I came to be in this world</Subtitle>

      <Text>My name is paco sainz, and today you will learn my story</Text>
      <Button spacingTop="large" fill={false} color={"error"}>
        Hello
      </Button>
    </Box>
  </TestProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  password: false,
};
