import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {CallSchedule} from "../call-schedule";

export default {
  title: 'Components/Atoms/CallSchedule',
  component: CallSchedule,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <CallSchedule {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}