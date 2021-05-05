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

export const Mobile = Template.bind({})
Mobile.args = {
  mobile: true
}

export const Desktop = Template.bind({})
Desktop.args = {
  desktop: true
}