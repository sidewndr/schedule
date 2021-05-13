const groupsMock = [
  {
    course: '1',
    groups: [
      {
        groupId: 0,
        groupName: 'ПКС 17-1',
        schedule : []
      },
      {
        groupId: 1,
        groupName: 'ПКС 17-2',
        schedule : []
      },
    ]
  },
  {
    course: '2',
    groups: [
      {
        groupId: 2,
        groupName: 'УТА18',
        schedule : []
      },
      {
        groupId: 3,
        groupName: 'КРЯ18',
        schedule : []
      },
    ]
  },
]


const groupsError = {
  errorMessage: 'Error'
}

export const getGroupsMock = (course) => {
  const result = []

  let arr = groupsMock.filter((i) =>
    i.course === course
  )

  if (arr.length !== 0) {
    arr = arr[0].groups

    arr.forEach((i) =>
      result.push(
        {
          id: i.groupId,
          item: i.groupName
        }
      ))
  }



  return result || groupsError
}