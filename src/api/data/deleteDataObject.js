export const deleteDataObject = (index, newData, setNewData, setDeletedData) => {
  const values = newData
  const deletedItem = values.splice(index, 1)

  setDeletedData((prevState) => ([
    ...prevState,
    ...deletedItem
  ]))

  setNewData(() => ([
    ...values
  ]))
}