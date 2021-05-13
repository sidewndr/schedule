const coursesMock = [
  {
    courseId: 0,
    course: '1',
    groups: []
  },
  {
    courseId: 1,
    course: '2',
    groups: []
  },
]


const coursesError = {
  errorMessage: 'Error'
}

export const getCoursesMock = () => {
  let result = []

  coursesMock.forEach((i) =>
    result.push(
      {
        id: i.courseId,
        item: i.course
      }
    )
  )

  return result || coursesError
}