export const changeValue = (e, index, dataColumn, setNewData) => {
  setNewData((prevState) => {
    let values = prevState
    values[index] = {
      ...values[index],
      [dataColumn]: e.target.value
    }
    return [...values]
  })
}
