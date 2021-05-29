import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {Dropdown, DropdownStl} from "../atoms/dropdown";
import {getCourses, getGroups} from "../../tests/mocks/mock";
import {media} from "../../shared/media/media";


export const DropdownsListStl = styled.div`
  display: flex;
  flex-direction: column;
  
  ${DropdownStl}:nth-child(1){
    margin-bottom: 25px;
  }

  ${DropdownStl}:nth-child(2){
    margin-bottom: 70px;
  }
  
  @media ${media.isDesktop} {
    margin-right: 240px;
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
        defaultValue={'КУРС'}
        data={getCourses()}
        onChangeValue={handleChangeValueCourse}
      />

      {
        course === ''
          ? <Dropdown isHidden />
          : <Dropdown
              defaultValue={'ГРУППА'}
              data={getGroups(course)}
              onChangeValue={handleChangeValueGroup}
            />
      }

      <Dropdown defaultValue={'ПРЕПОДАВАТЕЛЬ'} />
    </DropdownsListStl>
  )
}