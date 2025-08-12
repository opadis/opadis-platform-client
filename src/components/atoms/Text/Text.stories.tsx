import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Title: Story = {
  args: {
    type: "title",
    label: "HOLA",
  },
};

export const Subtitle: Story = {
  args: {
    type: "subtitle",
    label: "Hola",
  },
};

export const Body: Story = {
  args: {
    type: "body",
    label: "hola",
  },
};
