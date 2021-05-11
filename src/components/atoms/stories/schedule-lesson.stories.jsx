import React from "react";

import {GlobalStyles} from "../../../shared/global-styles/global-styles";
import {ScheduleLesson} from "../schedule-lesson";

export default {
  title: 'Components/Atoms/ScheduleLesson',
  component: ScheduleLesson,
}

const Template = (args) => (
  <>
    <GlobalStyles />
    <ScheduleLesson {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}