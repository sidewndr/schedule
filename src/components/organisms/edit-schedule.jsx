import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import {Dropdown, DropdownStl} from "../atoms/dropdown";
import {useFetch} from "../../api/hooks/useFetch";
import {Loader} from "../atoms/loader";
import {Error} from "../atoms/error";
import {Btn, BtnStl} from "../atoms/btn";
import {colors} from "../../shared/global-styles/colors";
import {Label} from "../atoms/label";
import {deleteDataObject} from "../../api/data/deleteDataObject";
import {addDataObject} from "../../api/data/addDataObject";
import {Combobox} from "../atoms/combobox";
import {saveScheduleData} from "../../api/data/saveScheduleData";
import {validateScheduleData} from "../../api/data/validateScheduleData";


const RowStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ColumnStl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: ${colors.primary} 1px solid;
  margin-bottom: 10px;

  ${({lastCol}) => lastCol && css`
    margin-bottom: 20px;
  `}
  
  & ${RowStl}:not(:last-child) {
    margin-bottom: 5px;
  }
  
  & ${BtnStl} {
    max-width: none;
    font-size: 20px;
    text-transform: none;
    padding: 3px 0;
  }
`

const EditScheduleStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  
  & ${DropdownStl} {
    align-self: center;
    margin-bottom: 20px;
  }

  ${BtnStl} {
    align-self: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`


export const EditSchedule = () => {

  const queryGetDays = '/data/days?pageSize=100&property=objectId&property=day%20as%20item&sortBy=%60created%60%20asc'
  const [loadingDays, dataDays, errorDays] = useFetch(queryGetDays)
  const [selectedDay, setSelectedDay] = useState(null)

  const queryGetCourses = '/data/groups?pageSize=100&property=course%20as%20item&property=objectId&sortBy=%60course%60%20asc&groupBy=course'
  const [loadingCourses, dataCourses, errorCourses, getUpdatedDataCourses] = useFetch(queryGetCourses)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const queryGetGroups = `/data/groups?pageSize=100&where=course%3D'${selectedCourse}'&property=group%20as%20item&property=objectId&sortBy=%60group%60%20asc`
  const [loadingGroups, dataGroups, errorGroups, getUpdatedDataGroups] = useFetch(queryGetGroups)
  const [selectedGroup, setSelectedGroup] = useState(null)

  const queryGetSchedule = `/data/schedule?pageSize=100&where=group.group%3D'${selectedGroup}'%20AND%20day.day%3D'${selectedDay}'&loadRelations=day%2Cgroup%2Clesson%2ClessonNumber%2Cteacher`
  const [loadingSchedule, dataSchedule, errorSchedule, getUpdatedDataSchedule] = useFetch(queryGetSchedule)
  const [newDataSchedule, setNewDataSchedule] = useState([])
  const [sortedNewDataSchedule, setSortedNewDataSchedule] = useState([])

  const sortNewData = (data = []) => {
    if (data.length > 0) {
      setSortedNewDataSchedule([])
      const arr = newDataSchedule.sort((a, b) => (a.lessonNumber.lessonNumber - 0) > (b.lessonNumber.lessonNumber - 0) ? 1 : -1)
      setSortedNewDataSchedule(arr)
    } else {
      setSortedNewDataSchedule([])
    }
  }

  //////////////////////////////////////
  useEffect(() => {
    console.log('Sorted:')
    console.log(sortedNewDataSchedule)
  }, [sortedNewDataSchedule])
  //////////////////////////////////////

  useEffect(() => {
    setSelectedCourse(null)
    setSelectedGroup(null)
    getUpdatedDataCourses()
  }, [selectedDay])

  useEffect(() => {
    setSelectedGroup(null)
    if (selectedCourse) {
      getUpdatedDataGroups()
    }
  }, [selectedCourse])

  useEffect(() => {
    if (selectedGroup) {
      getUpdatedDataSchedule()
    }
  }, [selectedGroup])

  useEffect(() => {
    setNewDataSchedule(dataSchedule)
  }, [dataSchedule])

  useEffect(() => {
    sortNewData(newDataSchedule)
  }, [newDataSchedule])



  const queryGetCallSchedules = '/data/callSchedule?pageSize=100&sortBy=%60lessonNumber%60%20asc'
  const [loadingCallSchedules, dataCallSchedules, errorCallSchedules] = useFetch(queryGetCallSchedules)

  const queryGetLessons = '/data/lessons?pageSize=100&sortBy=%60lesson%60%20asc'
  const [loadingLessons, dataLessons, errorLessons] = useFetch(queryGetLessons)

  const queryGetTeachers = '/data/teachers?pageSize=100&sortBy=%60name%60%20asc'
  const [loadingTeachers, dataTeachers, errorTeachers] = useFetch(queryGetTeachers)

  const [generateId, setGenerateId] = useState()
  const [dataObject, setDataObject] = useState({})

  const [deletedData, setDeletedData] = useState([])

  //////////////////////////////////////
  useEffect(() => {
    console.log('Deleted:')
    console.log(deletedData)
  }, [deletedData])
  //////////////////////////////////////

  useEffect(() => {
    if (selectedDay && selectedGroup) {
      const day = dataDays.filter(el => el.item === selectedDay)
      const group = dataGroups.filter(el => el.item === selectedGroup)
      setDataObject(() => ({
        day: {...day[0]},
        group: {...group[0]},
        lessonNumber: {
          lessonNumber: '',
          timeFrom: '',
          timeTo: ''
        },
        lesson: {
          lesson: ''
        },
        teacher: {
          name: '',
          classroom: ''
        }
      }))
    } else {
      setDataObject({})
    }
  }, [selectedGroup, selectedDay])

  useEffect(() => {
    setGenerateId(Math.random().toString(36).substr(2, 9))
  }, [sortedNewDataSchedule])

  useEffect(() => {
    setDataObject(prevState => ({
      ...prevState,
      id: generateId
    }))
  }, [generateId])

  useEffect(() => {
    setDeletedData([])
  }, [selectedGroup])



  if (loadingDays || loadingCourses || loadingGroups || loadingSchedule || loadingCallSchedules || loadingLessons || loadingTeachers) return <Loader />

  if (errorDays || errorCourses || errorGroups || errorSchedule || errorCallSchedules || errorLessons || errorTeachers) {
    console.log(errorDays || errorCourses || errorGroups || errorSchedule || errorCallSchedules || errorLessons || errorTeachers)
    return <Error />
  }

  return (
    <EditScheduleStl>
      <Dropdown
        defaultValue={'День недели'}
        data={dataDays}
        selectedValue={selectedDay}
        onChangeValue={(e) => setSelectedDay(e.target.value)}
      />

      {
        selectedDay &&
          <Dropdown
            defaultValue={'Курс'}
            data={dataCourses}
            selectedValue={selectedCourse}
            onChangeValue={(e) => setSelectedCourse(e.target.value)}
          />
      }

      {
        selectedDay && selectedCourse &&
          <Dropdown
            defaultValue={'Группа'}
            data={dataGroups}
            selectedValue={selectedGroup}
            onChangeValue={(e) => setSelectedGroup(e.target.value)}
          />
      }

      {
        selectedDay && selectedCourse && selectedGroup &&
          (
            sortedNewDataSchedule.map((item, index) => (
              <ColumnStl key={index} lastCol={index === sortedNewDataSchedule.length - 1}>
                <RowStl>
                  <Label
                    edit
                    text={'№ занятия'}
                  />
                  <Combobox
                    data={dataCallSchedules}
                    dataColumn={'lessonNumber'}
                    value={item.lessonNumber.lessonNumber}
                    onChange={(e) => {
                      setSortedNewDataSchedule(prevState => {
                        let values = prevState
                        const newValues = dataCallSchedules.filter(el => el.lessonNumber === e.target.value)
                        values[index].lessonNumber = {
                          ...newValues[0]
                        }

                        return [...values]
                      })
                    }}
                  />
                </RowStl>

                <RowStl>
                  <Label
                    edit
                    text={'Время от'}
                  />

                  <Label
                    readOnly
                    text={item.lessonNumber.timeFrom}
                  />
                </RowStl>

                <RowStl>
                  <Label
                    edit
                    text={'Время до'}
                  />

                  <Label
                    readOnly
                    text={item.lessonNumber.timeTo}
                  />
                </RowStl>

                <RowStl>
                  <Label
                    edit
                    text={'Дисциплина'}
                  />
                  <Combobox
                    data={dataLessons}
                    dataColumn={'lesson'}
                    value={item.lesson.lesson}
                    onChange={(e) => {
                      setSortedNewDataSchedule(prevState => {
                        let values = prevState
                        const newValues = dataLessons.filter(el => el.lesson === e.target.value)
                        values[index].lesson = {
                          ...newValues[0]
                        }

                        return [...values]
                      })
                    }}
                  />
                </RowStl>

                <RowStl>
                  <Label
                    edit
                    text={'Преподаватель'}
                  />
                  <Combobox
                    data={dataTeachers}
                    dataColumn={'name'}
                    value={item.teacher.name}
                    onChange={(e) => {
                      setSortedNewDataSchedule(prevState => {
                        let values = prevState
                        const newValues = dataTeachers.filter(el => el.name === e.target.value)
                        values[index].teacher = {
                          ...newValues[0]
                        }

                        return [...values]
                      })
                    }}
                  />
                </RowStl>

                <RowStl>
                  <Label
                    edit
                    text={'Кабинет'}
                  />

                  <Label
                    readOnly
                    text={item.teacher.classroom}
                  />
                </RowStl>

                <Btn text={'Удалить'} onClick={() => deleteDataObject(index, sortedNewDataSchedule, setSortedNewDataSchedule, setDeletedData)} />
              </ColumnStl>
            ))
          )
      }

      {
        selectedDay && selectedCourse && selectedGroup &&
          <Btn
            text={'Добавить'}
            onClick={() => addDataObject(setSortedNewDataSchedule, dataObject)}
          />
      }

      {
        selectedDay && selectedCourse && selectedGroup &&
          <Btn
            text={'Сохранить'}
            onClick={() => {
              const validate = validateScheduleData(sortedNewDataSchedule)
              if (validate.isValid) {
                saveScheduleData(sortedNewDataSchedule, getUpdatedDataSchedule, deletedData, setDeletedData)
              } else {
                alert(validate.message)
              }
            }}
          />
      }
    </EditScheduleStl>
  )
}