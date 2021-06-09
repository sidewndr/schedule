import React, {useEffect} from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {ScheduleDay, ScheduleDayStl} from "../atoms/schedule-day";
import {RowStl, ScheduleLesson, ScheduleLessonStl} from "../atoms/schedule-lesson";


const ScheduleCardStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: ${colors.primary} 1px solid;
  
  ${ScheduleDayStl} {
    margin-bottom: 15px;
  }
  
  ${ScheduleLessonStl}:not(:last-child) {
    margin-bottom: 6px;
  }

  ${ScheduleLessonStl}:last-child ${RowStl}:nth-child(3) {
    margin-bottom: 0;
  }

  ${ScheduleLessonStl}:last-child ${RowStl}:last-child {
    display: none;
  }
`

const ScheduleLessonListStl = styled.div`
  padding: 0 15px 10px 15px ;
`


export const ScheduleCard = ({dataSchedule, dataCallSchedule, day, group, teacher}) => {

  const dataAll = []
  const dataObject = [{
    lesson: {lesson: '—'},
    group: {group: ''},
    teacher: {
      name: '',
      classroom: ''
    }
  }]

  dataSchedule.sort((a, b) => (a.lessonNumber.lessonNumber) > (b.lessonNumber.lessonNumber) ? 1 : -1)

  dataCallSchedule.forEach((item) => {
    const arr = dataSchedule.filter((el) => el.lessonNumber.lessonNumber === item.lessonNumber)

    if (arr.length === 0) {
      dataAll.push({
        ...dataObject,
        ...item
      })
    } else {
      dataAll.push({
        ...arr,
        ...item
      })
    }
  })

  useEffect(() => {
    console.log(dataAll)
  }, [dataAll])

  return (
    <ScheduleCardStl>
      <ScheduleDay day={day} />

      <ScheduleLessonListStl>
        {
          group &&
          dataAll.map((item, index) => (
            <ScheduleLesson
              key={index}
              lessonNumber={item.lessonNumber}
              timeFrom={item.timeFrom}
              timeTo={item.timeTo}
              lesson={item[0].lesson.lesson}
              teacher={item[0].teacher.name}
              classroom={item[0].teacher.classroom}
            />
          ))
        }

        {
          teacher &&
          dataAll.map((item, index) => (
            <ScheduleLesson
              key={index}
              lessonNumber={item.lessonNumber}
              timeFrom={item.timeFrom}
              timeTo={item.timeTo}
              lesson={item[0].lesson.lesson}
              teacher={item[0].group.group}
              classroom={item[0].teacher.classroom}
            />
          ))
        }
      </ScheduleLessonListStl>
    </ScheduleCardStl>
  )
}