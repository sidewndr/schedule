import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles";
import {Link} from "../link";
import {HeaderTitle} from "../header-title";

export default {
  title: 'Components/Atoms/Link',
  component: Link,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <Link {...args} >
      <HeaderTitle primary />
    </Link>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}