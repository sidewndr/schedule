import React, {useState} from 'react'
import styled from 'styled-components'
import {Dropdown, DropdownStl} from "../atoms/dropdown";
import {EditCallSchedule} from "./edit-call-schedule";
import {EditGroups} from "./edit-groups";
import {EditTeachers} from "./edit-teachers";
import {EditLessons} from "./edit-lessons";
import {EditSchedule} from "./edit-schedule";


export const EditStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  & > ${DropdownStl} {
    margin-bottom: 20px;
  }
`


export const Edit = () => {

  const [dropdownValue, setDropdownValue] = useState(null)

  const editContent = () => {
    switch (dropdownValue) {
      case 'Звонки':
        return (
          <EditCallSchedule />
        )

      case 'Группы':
        return (
          <EditGroups />
        )

      case 'Преподаватели':
        return (
          <EditTeachers />
        )

      case 'Дисциплины':
        return (
          <EditLessons />
        )

      case 'Расписание':
        return (
          <EditSchedule />
        )
    }
  }

  const dropdownData = [
    {
      item: 'Звонки'
    },
    {
      item: 'Группы'
    },
    {
      item: 'Преподаватели'
    },
    {
      item: 'Дисциплины'
    },
    {
      item: 'Расписание'
    }
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