import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {NavbarItem} from "../navbar-item";

export default {
  title: 'Components/Atoms/NavbarItem',
  component: NavbarItem,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <NavbarItem {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}