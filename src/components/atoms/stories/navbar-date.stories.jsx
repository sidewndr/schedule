import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {NavbarDate} from "../navbar-date";

export default {
  title: 'Components/Atoms/NavbarDate',
  component: NavbarDate,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <NavbarDate {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}