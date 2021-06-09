import axios from "axios";

export const saveScheduleData = (sortedNewDataSchedule, getUpdatedDataSchedule, deletedData, setDeletedData) => {
  const url = 'https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/schedule'

  sortedNewDataSchedule.forEach(async (item) => {
    const responsePutData = await axios.put(url, item)

    const parentObjectId = await responsePutData.data.objectId
    const urlPostRelationDay = `https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/schedule/${parentObjectId}/day?whereClause=objectId='${item.day.objectId}'`
    const urlPostRelationGroup = `https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/schedule/${parentObjectId}/group?whereClause=objectId='${item.group.objectId}'`
    const urlPostRelationLesson = `https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/schedule/${parentObjectId}/lesson?whereClause=objectId='${item.lesson.objectId}'`
    const urlPostRelationLessonNumber = `https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/schedule/${parentObjectId}/lessonNumber?whereClause=objectId='${item.lessonNumber.objectId}'`
    const urlPostRelationTeacher = `https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/0CA11C11-41A5-43EB-AB36-DF0C9B1C73D5/data/schedule/${parentObjectId}/teacher?whereClause=objectId='${item.teacher.objectId}'`
    await axios.post(urlPostRelationDay)
    await axios.post(urlPostRelationGroup)
    await axios.post(urlPostRelationLesson)
    await axios.post(urlPostRelationLessonNumber)
    await axios.post(urlPostRelationTeacher)

    getUpdatedDataSchedule()
  })

  if (deletedData.length > 0) {
    deletedData.forEach(async (item) => {
      await axios.delete(url + `/${item.objectId}`)
      getUpdatedDataSchedule()
    })

    setDeletedData([])
  }
}