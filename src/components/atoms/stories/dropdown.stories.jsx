import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {Dropdown} from "../dropdown";

export default {
  title: 'Components/Atoms/Dropdown',
  component: Dropdown,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <Dropdown {...args} />
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