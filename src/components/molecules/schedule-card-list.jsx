import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ScheduleCard} from "../organisms/schedule-card";
import {media} from "../../shared/media/media";
import {useFetch} from "../../api/hooks/useFetch";
import {Loader} from "../atoms/loader";
import {Error} from "../atoms/error";


export const ScheduleCardListStl = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;
  
  @media ${media.isTablet} {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  }  
  
  @media ${media.isDesktop} {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  }
`


export const ScheduleCardList = ({course, group, teacher}) => {

  const createQuerySchedule = () => {
    if (course && group) {
      return `/data/schedule?pageSize=100&where=group.course%3D'${course}'%20and%20group.group%3D'${group}'&loadRelations=day%2Cgroup%2ClessonNumber%2Clesson%2Cteacher`
    } else if (teacher) {
      return `/data/schedule?pageSize=100&where=teacher.name%3D'${teacher}'&loadRelations=day%2Cgroup%2ClessonNumber%2Clesson%2Cteacher`
    }
  }

  const [querySchedule, setQuerySchedule] = useState(createQuerySchedule)
  const [loadingSchedule, dataSchedule, errorSchedule] = useFetch(querySchedule)

  const queryCallSchedule = '/data/callSchedule?pageSize=100&property=lessonNumber&property=timeFrom&property=timeTo&sortBy=%60lessonNumber%60%20asc'
  const [loadingCallSchedule, dataCallSchedule, errorCallSchedule] = useFetch(queryCallSchedule)

  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  const [sortedData, setSortedData] = useState([])

  useEffect(() => {
    const arr = []

    if (dataSchedule !== undefined) {
      days.forEach((item) => {
        const values = dataSchedule.filter((el) => el.day.day === item)
        arr.push([...values])
      })
    }

    setSortedData(arr)
  }, [dataSchedule])


  if (loadingSchedule || loadingCallSchedule) return <Loader />

  if (errorSchedule || errorCallSchedule) {
    console.log(errorSchedule || errorCallSchedule)
    return <Error />
  }

  return (
    <ScheduleCardListStl>
      {
        sortedData.map((item, index) => (
          <ScheduleCard
            dataSchedule={item}
            dataCallSchedule={dataCallSchedule}
            day={days[index]}
            key={index}

            group={group}
            teacher={teacher}
          />
        ))
      }
    </ScheduleCardListStl>
  )
}