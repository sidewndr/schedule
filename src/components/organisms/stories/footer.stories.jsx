import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {Footer} from "../footer";

export default {
  title: 'Components/Molecules/Footer',
  component: Footer,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <Footer {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}