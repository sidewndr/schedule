import React, {useState} from 'react'
import styled from 'styled-components'

const InputStl = styled.input`
  
`


export const Input = ({}) => {

  const [tel, setTel] = useState('')

  const [str, setStr] = useState('')

  const handleChange = (e) => {
    if (str === 'stop'){
      setTel(str)
      setStr('')
    }
    else {
      setTel(e.target.value.replace(/^[+]7/, '8').replace(/^[+]/, '8').replace(/^[0-9]/, '8').replace(/\D/g, ''))
    }


    // console.log('CHANGE');
  }

  const handlePaste = (e) => {
    setStr(e.clipboardData.getData('Text').replace(/^[+]7/, '8').replace(/^[+]/, '8').replace(/^[0-9]/, '8').replace(/\D/g, ''))
    setTel(str)
    setStr('stop')
    console.log('PASTE' + str);

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