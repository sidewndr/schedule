import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {Dropdown, DropdownStl} from "../atoms/dropdown";
import {getCourses} from "../../api/getData/getCourses";
import {getGroups} from "../../api/getData/getGroups";


const DropdownsListStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${DropdownStl}:nth-child(1){
    margin-bottom: 25px;
  }

  ${DropdownStl}:nth-child(2){
    margin-bottom: 70px;
  }
`


export const DropdownsList = () => {

  const [course, setCourse] = useState('')
  const [group, setGroup] = useState('')
  let history = useHistory()

  useEffect(() => {
    if (group !== '') {
      const setUrlCourse = encodeURI(course.replace(/ /g, '+'))
      const setUrlGroup = encodeURI(group.replace(/ /g, '+'))

      history.push(`/schedule?course=${setUrlCourse}&group=${setUrlGroup}`)
    }
  }, [course, group, history])

  const handleChangeValueCourse = (e) => {
    setCourse(e.target.value)
  }

  const handleChangeValueGroup = (e) => {
    setGroup(e.target.value)
  }


  return (
    <DropdownsListStl>
      <Dropdown
        mobile
        defaultValue={'КУРС'}
        data={getCourses()}
        onChangeValue={handleChangeValueCourse}
      />

      {
        course === ''
          ? <Dropdown
              mobile
              isHidden
            />
          : <Dropdown
              mobile
              defaultValue={'ГРУППА'}
              data={getGroups(course)}
              onChangeValue={handleChangeValueGroup}
            />
      }

      <Dropdown mobile defaultValue={'ПРЕПОДАВАТЕЛЬ'} />
    </DropdownsListStl>
  )
}