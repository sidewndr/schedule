import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {Input} from "../atoms/input";
import {Label} from "../atoms/label";
import {Btn} from "../atoms/btn";
import axios from "axios";

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
  
  & ${RowStl}:not(:last-child) {
    margin-bottom: 5px;
  }
`

const EditCallScheduleStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  
  & ${ColumnStl}:not(:last-child) {
    margin-bottom: 10px;
  }
`


export const EditCallSchedule = ({dataCallSchedule}) => {

  const [data, setData] = useState(dataCallSchedule)

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleOnChange = (e, index, data) => {
    setData((prevState) => {
      let values = prevState
      values[index] = {
        ...values[index],
        [data]: e.target.value
      }
      console.log(values);
      return [...values]
    })
  }

  const handleOnClick = () => {
    const url = 'https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/bulk/callSchedule?where=%22lessonNumber%22%3E0'
    // axios.post(url, data)
    axios.post(url, data)
  }

  return (
    <EditCallScheduleStl>
      {
        data.map((item, index) => (
          <ColumnStl key={index}>
            <RowStl>
              <Label
                edit
                text={'№ занятия'}
              />
              <Input
                edit
                value={data[index].lessonNumber}
                onChange={(e) => handleOnChange(e, index, 'lessonNumber')}
              />
            </RowStl>

            <RowStl>
              <Label
                edit
                text={'Время от'}
              />
              <Input
                edit
                value={data[index].timeFrom}
                onChange={(e) => handleOnChange(e, index, 'timeFrom')}
              />
            </RowStl>

            <RowStl>
              <Label
                edit
                text={'Время до'}
              />
              <Input
                edit
                value={data[index].timeTo}
                onChange={(e) => handleOnChange(e, index, 'timeTo')}
              />
            </RowStl>
          </ColumnStl>
        ))
      }

      <Btn
        text={'Сохранить'}
        onClick={handleOnClick}
      />
    </EditCallScheduleStl>
  )
}