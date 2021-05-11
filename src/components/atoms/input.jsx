import React, {useEffect, useState} from 'react'
import styled from 'styled-components'


const InputStl = styled.input``


export const Input = () => {

  const [tel, setTel] = useState('')
  const [str, setStr] = useState('')

  const regExp = (tel) => (
    tel
      .replace(/^[+]7/, '8')
      .replace(/^[+]/, '8')
      .replace(/^[0-9]/, '8')
      .replace(/\D/g, '')
  )

  useEffect(() => {
    str === ''
      ? setTel(regExp(tel))
      : setTel(str)

    return (() => setStr(''))
  }, [tel, str])

  const handleChange = (e) => {
    setTel(e.target.value)
  }

  const handlePaste = (e) => {
    const data = e.clipboardData.getData('Text')
    setStr(regExp(data))
  }

  return (
    <InputStl
      type={'tel'}
      value={tel}
      maxLength={'11'}
      onChange={handleChange}
      onPaste={handlePaste}
    />
  )
}