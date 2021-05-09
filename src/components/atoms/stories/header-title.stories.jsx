import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {HeaderTitle} from "../header-title";

export default {
  title: 'Components/Atoms/HeaderTitle',
  component: HeaderTitle,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <HeaderTitle {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  main: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  navbar: true
}