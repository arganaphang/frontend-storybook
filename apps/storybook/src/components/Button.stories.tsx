import { Button } from "ui";
import type { Meta, StoryObj } from "@storybook/react";

export const Primary: StoryObj<typeof Button> = {
  name: "Primary Button",
  render: () => <Button onClick={() => alert("Heh")}>Hello Click Me!</Button>,
};

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;
