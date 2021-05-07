import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles";
import {Input} from "./input";

export default {
  title: 'TITLE/TITLE/Input',
  component: Input,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <Input {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}