import axios from "axios";

export const saveScheduleData = (sortedNewDataSchedule, getUpdatedDataSchedule, deletedData, setDeletedData) => {
  const url = 'https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8/data/schedule'

  sortedNewDataSchedule.forEach(async (item) => {
    const responsePutData = await axios.put(url, item)

    const parentObjectId = await responsePutData.data.objectId
    const urlPostRelationDay = `https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8/data/schedule/${parentObjectId}/day?whereClause=objectId='${item.day.objectId}'`
    const urlPostRelationGroup = `https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8/data/schedule/${parentObjectId}/group?whereClause=objectId='${item.group.objectId}'`
    const urlPostRelationLesson = `https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8/data/schedule/${parentObjectId}/lesson?whereClause=objectId='${item.lesson.objectId}'`
    const urlPostRelationLessonNumber = `https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8/data/schedule/${parentObjectId}/lessonNumber?whereClause=objectId='${item.lessonNumber.objectId}'`
    const urlPostRelationTeacher = `https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8/data/schedule/${parentObjectId}/teacher?whereClause=objectId='${item.teacher.objectId}'`
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