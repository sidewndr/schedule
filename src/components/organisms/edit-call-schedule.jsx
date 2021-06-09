import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {Input} from "../atoms/input";
import {Label} from "../atoms/label";
import {Btn, BtnStl} from "../atoms/btn";
import {useFetch} from "../../api/hooks/useFetch";
import {Loader} from "../atoms/loader";
import {Error} from "../atoms/error";
import {changeValue} from "../../api/data/changeValue";
import {addDataObject} from "../../api/data/addDataObject";
import {deleteDataObject} from "../../api/data/deleteDataObject";
import {saveData} from "../../api/data/saveData";


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

const EditCallScheduleStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  
  ${BtnStl} {
    align-self: center;
    
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`


export const EditCallSchedule = () => {

  const query = '/data/callSchedule?pageSize=100&property=lessonNumber&property=timeFrom&property=timeTo&property=objectId&sortBy=%60lessonNumber%60%20asc'
  const [loading, data, error, getUpdatedData] = useFetch(query)

  const [newData, setNewData] = useState([])
  const [deletedData, setDeletedData] = useState([])

  useEffect(() => {
    if (data) {
      setNewData(data)
    }
  }, [data])

  const dataObject = {
    lessonNumber: '',
    timeFrom: '',
    timeTo: ''
  }

  const url = 'https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/callSchedule'


  if (loading) return <Loader />

  if (error) {
    console.log(error)
    return <Error />
  }

  return (
    <EditCallScheduleStl>
      {
        newData.map((item, index) => (
          <ColumnStl key={index} lastCol={index === newData.length - 1}>
            <RowStl>
              <Label
                edit
                text={'№ занятия'}
              />
              <Input
                edit
                value={newData[index].lessonNumber}
                onChange={(e) => changeValue(e, index, 'lessonNumber', setNewData)}
              />
            </RowStl>

            <RowStl>
              <Label
                edit
                text={'Время от'}
              />
              <Input
                edit
                value={newData[index].timeFrom}
                onChange={(e) => changeValue(e, index, 'timeFrom', setNewData)}
              />
            </RowStl>

            <RowStl>
              <Label
                edit
                text={'Время до'}
              />
              <Input
                edit
                value={newData[index].timeTo}
                onChange={(e) => changeValue(e, index, 'timeTo', setNewData)}
              />
            </RowStl>

            <Btn text={'Удалить'} onClick={() => deleteDataObject(index, newData, setNewData, setDeletedData)} />
          </ColumnStl>
        ))
      }

      <Btn
        text={'Добавить'}
        onClick={() => addDataObject(setNewData, dataObject)}
      />

      <Btn
        text={'Сохранить'}
        onClick={() => saveData(url, newData, deletedData, getUpdatedData)}
      />
    </EditCallScheduleStl>
  )
}