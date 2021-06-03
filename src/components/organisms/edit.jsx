import React, {useState} from 'react'
import styled from 'styled-components'
import {Dropdown, DropdownStl} from "../atoms/dropdown";
import {EditCallSchedule} from "../molecules/edit-call-schedule";
import {media} from "../../shared/media/media";
import {useFetch} from "../../api/hooks/useFetch";
import {Loader} from "../atoms/loader";
import {Error} from "../atoms/error";


export const EditStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  ${DropdownStl} {
    margin-bottom: 20px;
  }

  @media ${media.isTablet} {
    width: 400px;
  }

  @media ${media.isDesktop} {
    width: 600px;
  }
`


export const Edit = ({}) => {

  const [dropdownValue, setDropdownValue] = useState(null)

  const queryCallSchedule = '/data/callSchedule?sortBy=%60lessonNumber%60%20asc'
  const [loadingCallSchedule, dataCallSchedule, errorCallSchedule] = useFetch(queryCallSchedule)

  if (loadingCallSchedule) return <Loader />

  if (errorCallSchedule) {
    console.log(dataCallSchedule)
    return <Error />
  }

  const editContent = () => {
    switch (dropdownValue) {
      case 'Звонки':
        return (
          <EditCallSchedule dataCallSchedule={dataCallSchedule} />
        )

      case 'Преподы':
        return (
          <div>Преподы!!!!!</div>
        )

      case 'Распес':
        return (
          <div>Распес!!!!!</div>
        )
    }
  }

  const dropdownData = [
    {
      item: 'Звонки',
    },
    {
      item: 'Преподы',
    },
    {
      item: 'Распес',
    },
  ]

  return (
    <EditStl>
      <Dropdown
        defaultValue={'Выберите таблицу'}
        data={dropdownData}
        selectedValue={dropdownValue}
        onChangeValue={(e) => setDropdownValue(e.target.value)}
      />

      {
        editContent()
      }
    </EditStl>
  )
}