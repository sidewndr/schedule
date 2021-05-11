import React from 'react'


export const Date = () => {


  return(

    {
      // getDate: () => (
      //   currentDate.getDate() < 10
      //     ? '0' + currentDate.getDate()
      //     : currentDate.getDate()
      // ),
      //
      // getMonth: () => (
      //   currentDate.getMonth() < 10
      //     ? '0' + (currentDate.getMonth() + 1)
      //     : currentDate.getMonth() + 1
      // ),
      //
      // getYear: () => (
      //   currentDate.getFullYear()
      // ),

      getDay: () => {
        const currentDate = new Date()

        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        return days[currentDate.getDay()]
      }
    }

  )
}