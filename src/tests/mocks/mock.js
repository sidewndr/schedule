const mock = [
  {
    courses: [
      {
        course: 1,
        groups: [
          {
            group: 'КРЯ20-1'
          },
          {
            group: 'КРЯ20-2'
          }
        ]
      },

      {
        course: 2,
        groups: [
          {
            group: 'КПС17-1'
          },
          {
            group: 'КПС17-2'
          },
        ]
      },
    ]
  }
]

export const getCourses = () => {
  let data
  const result = []

  mock.forEach((i) => {
    data = i.courses
  })

  data.forEach((i) => {
    result.push({
      item: i.course
    })
  })

  return result
}

export const getGroups = (course) => {
  let data
  const result = []

  mock.forEach((i) => {
    data = i.courses
  })

  data = data.filter((i) => (
    i.course.toString() === course
  ))

  data.forEach((i) => {
    data = i.groups
  })

  data.forEach((i) => {
    result.push({
      item: i.group
    })
  })

  console.log(result);

  return result
}

