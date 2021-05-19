export const date = {

  getDate: (currentDate = new Date()) => {
  return(
    currentDate.getDate() < 10
      ? '0' + currentDate.getDate()
      : currentDate.getDate()
    )
  },

  getMonth: (currentDate = new Date()) => (
    currentDate.getMonth() < 10
      ? '0' + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1
  ),

  getYear: (currentDate = new Date()) => (
    currentDate.getFullYear()
  ),

  getDay: (currentDate = new Date()) => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return days[currentDate.getDay()]
  },

  getAllDays: () => {
    return ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  }
}