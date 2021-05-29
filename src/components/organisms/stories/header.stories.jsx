import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {Header} from "../header";

export default {
  title: 'Components/Molecules/Header',
  component: Header,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <Header {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}