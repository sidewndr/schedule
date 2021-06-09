export const addDataObject = (setNewData, object) => {
  setNewData(prevState => ([
    ...prevState,
    object
  ]))
}