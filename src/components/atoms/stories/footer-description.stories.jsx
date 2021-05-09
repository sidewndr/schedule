import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {FooterDescription} from "../footer-description";

export default {
  title: 'Components/Atoms/FooterDescription',
  component: FooterDescription,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <FooterDescription {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}