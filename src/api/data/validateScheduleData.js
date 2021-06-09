export const validateScheduleData = (sortedNewDataSchedule) => {
  let result = {
    isValid: true,
    message: ''
  }

  //EMPTY VALUES VALIDATE
  sortedNewDataSchedule.forEach((item) => {
    if (item.lesson.lesson === '' || item.lessonNumber.lessonNumber === '' || item.teacher.name === '') {
      result.isValid = false
      result.message = 'Все поля должны быть заполнены.'
    }
  })

  //SAME LESSON NUMBERS VALIDATE
  const valuesLessonNumber = sortedNewDataSchedule.map((item) => item.lessonNumber.lessonNumber)
  let sameLessonNumbers = []
  valuesLessonNumber.forEach((item) => {
    sameLessonNumbers.push(valuesLessonNumber.filter((el) => item === el))
  })

  sameLessonNumbers.forEach((item) => {
    if (item.length > 1) {
      result.isValid = false
      result.message = 'Номера занятий не должны повторяться.'
    }
  })

  return result
}