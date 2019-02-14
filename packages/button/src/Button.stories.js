import React from "react";
import { storiesOf } from "@storybook/react";
import { defaultTheme } from "core";

import { Button } from ".";

storiesOf("Button", module)
  .add("default button", () => (
    <Button>Button</Button>
  ))
  .add("primary button", () => (
    <Button hierachy="primary">Button</Button>
  ))
  .add("secondary button", () => (
    <Button hierachy="secondary">Button</Button>
  ))
  .add("success button", () => (
    <Button hierachy="success">Button</Button>
  ))
  .add("disabled button", () => (
    <Button disabled>Button</Button>
  ));
