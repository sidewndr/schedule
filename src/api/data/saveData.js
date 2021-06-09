import axios from "axios";

export const saveData = (url, newData, deletedData, getUpdatedData) => {
  newData.forEach(async (item) => {
    await axios.put(url, item)
      .then(() => getUpdatedData())
  })

  if (deletedData.length > 0) {
    deletedData.forEach(async (item) => {
      await axios.delete(url + `/${item.objectId}`)
        .then(() => getUpdatedData())
    })
  }
}