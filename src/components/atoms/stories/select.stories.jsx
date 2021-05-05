import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {SelectBox} from "../select-box";

export default {
  title: 'Components/Atoms/SelectBox',
  component: SelectBox,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <SelectBox {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}