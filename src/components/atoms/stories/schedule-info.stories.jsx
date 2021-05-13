import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {ScheduleInfo} from "../schedule-info";

export default {
  title: 'Components/Atoms/ScheduleInfo',
  component: ScheduleInfo,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <ScheduleInfo {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}