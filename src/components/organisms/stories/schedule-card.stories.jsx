import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles"
import {ScheduleCard} from "../schedule-card";

export default {
  title: 'Components/Organisms/ScheduleCard',
  component: ScheduleCard,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <ScheduleCard {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}