import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {Dropdown, DropdownStl} from "../atoms/dropdown";
import {useFetch} from "../../api/hooks/useFetch";
import {Loader} from "../atoms/loader";
import {Error} from "../atoms/error";


export const DropdownsListStl = styled.div`
  display: flex;
  flex-direction: column;
  
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
  const [teacher, setTeacher] = useState('')

  const queryGetCourses = '/data/groups?pageSize=100&property=course%20as%20item&sortBy=%60course%60%20asc&groupBy=course'
  const [loadingCourses, dataCourses, errorCourses] = useFetch(queryGetCourses)

  const queryGetGroups = `/data/groups?pageSize=100&where=course%3D'${course}'&property=group%20as%20item&sortBy=%60group%60%20asc`
  const [loadingGroups, dataGroups, errorGroups, getUpdatedDataGroups] = useFetch(queryGetGroups)

  const queryGetTeachers = `/data/teachers?pageSize=100&property=name%20as%20item&sortBy=%60name%60%20asc`
  const [loadingTeachers, dataTeachers, errorTeachers] = useFetch(queryGetTeachers)

  let history = useHistory()

  useEffect(() => {
    if (course !== '') {
      getUpdatedDataGroups()
    }
  }, [course])

  useEffect(() => {
    if (group !== '') {
      const setUrlCourse = encodeURI(course.replace(/ /g, '+'))
      const setUrlGroup = encodeURI(group.replace(/ /g, '+'))

      history.push(`/schedule?course=${setUrlCourse}&group=${setUrlGroup}`)
    }
  }, [course, group, history])

  useEffect(() => {
    if (teacher !== '') {
      const setUrlTeacher = encodeURI(teacher.replace(/ /g, '+'))

      history.push(`/schedule?teacher=${setUrlTeacher}`)
    }
  }, [teacher, history])

  const handleChangeValueCourse = (e) => {
    setCourse(e.target.value)
  }

  const handleChangeValueGroup = (e) => {
    setGroup(e.target.value)
  }

  const handleChangeValueTeacher = (e) => {
    setTeacher(e.target.value)
  }


  if (loadingCourses || loadingGroups || loadingTeachers) return <Loader />

  if (errorCourses || errorGroups || errorTeachers) {
    console.log(errorCourses || errorGroups || errorTeachers)
    return <Error />
  }

  return (
    <DropdownsListStl>
      <Dropdown
        defaultValue={'КУРС'}
        data={dataCourses}
        selectedValue={course}
        onChangeValue={handleChangeValueCourse}
      />

      {
        course === ''
          ? <Dropdown isHidden />
          : <Dropdown
              defaultValue={'ГРУППА'}
              data={dataGroups}
              selectedValue={group}
              onChangeValue={handleChangeValueGroup}
            />
      }

      <Dropdown
        defaultValue={'ПРЕПОДАВАТЕЛЬ'}
        data={dataTeachers}
        selectedValue={teacher}
        onChangeValue={handleChangeValueTeacher}
      />
    </DropdownsListStl>
  )
}