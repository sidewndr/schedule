import React from "react";

import {GlobalStyles} from "../../../../shared/global-styles/global-styles"
import {BtnMenu} from "../btn-menu";

export default {
  title: 'Header/Atoms/BtnMenu',
  component: BtnMenu,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <BtnMenu {...args} />
  </>
)

export const Open = Template.bind({})
Open.args = {
  open: true
}

export const Close = Template.bind({})
Close.args = {
  close: true
}