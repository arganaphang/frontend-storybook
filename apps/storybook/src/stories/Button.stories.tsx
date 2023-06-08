import { Button } from "ui";
import type { Meta, StoryObj } from "@storybook/react";

export const Primary: StoryObj<typeof Button> = {
  name: "Primary Button",
  render: () => <Button />,
  args: {
    variant: "secondary",
  },
};

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
