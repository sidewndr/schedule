import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {Btn, BtnStl} from "../atoms/btn";
import {useFetch} from "../../api/hooks/useFetch";
import {Loader} from "../atoms/loader";
import {Error} from "../atoms/error";
import {Label} from "../atoms/label";
import {Input} from "../atoms/input";
import {changeValue} from "../../api/data/changeValue";
import {deleteDataObject} from "../../api/data/deleteDataObject";
import {addDataObject} from "../../api/data/addDataObject";
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

const EditLessonsStl = styled.div`
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


export const EditLessons = () => {

  const query = '/data/lessons?pageSize=100&property=lesson&property=objectId&sortBy=%60lesson%60%20asc'
  const [loading, data, error, getUpdatedData] = useFetch(query)

  const [newData, setNewData] = useState([])
  const [deletedData, setDeletedData] = useState([])

  useEffect(() => {
    if (data) {
      setNewData(data)
    }
  }, [data])

  const dataObject = {
    lesson: ''
  }

  const url = 'https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8/data/lessons'


  if (loading) return <Loader />

  if (error) {
    console.log(error)
    return <Error />
  }

  return (
    <EditLessonsStl>
      {
        newData.map((item, index) => (
          <ColumnStl key={index} lastCol={index === newData.length - 1}>
            <RowStl>
              <Label
                edit
                text={'Дисциплина'}
              />
              <Input
                edit
                value={newData[index].lesson}
                onChange={(e) => changeValue(e, index, 'lesson', setNewData)}
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
    </EditLessonsStl>
  )
}