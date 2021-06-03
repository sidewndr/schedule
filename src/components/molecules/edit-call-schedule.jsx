import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {Input} from "../atoms/input";
import {Label} from "../atoms/label";

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
                onChange={(e) => {
                  setData(prevState => ([
                    ...prevState,
                    prevState[index].lessonNumber = (e.target.value) - 0
                  ]))
                }}

              />
            </RowStl>
          </ColumnStl>
        ))
      }
    </EditCallScheduleStl>

    // <EditCallScheduleStl>
    //
    //   <ColumnStl>
    //     <RowStl>
    //       <Label edit text={'№ занятия'} />
    //       <Input edit />
    //     </RowStl>
    //
    //     <RowStl>
    //       <Label edit text={'Время от'} />
    //       <Input edit />
    //     </RowStl>
    //
    //     <RowStl>
    //       <Label edit text={'Время до'} />
    //       <Input edit />
    //     </RowStl>
    //   </ColumnStl>
    //
    // </EditCallScheduleStl>
  )
}