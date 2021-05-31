import React, {useState} from 'react'
import styled from 'styled-components'
import {Label, LabelStl} from "../atoms/label";
import {Input, InputStl} from "../atoms/input";
import {Btn} from "../atoms/btn";
import {useFetch} from "../../api/db/useFetch";

export const AuthStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & ${LabelStl} {
    margin-bottom: 4px;
  }
  
  & ${InputStl} {
    margin-bottom: 15px;
  }
  
  input:nth-child(4) {
    margin-bottom: 80px;
  }
`


export const Auth = () => {

  const [auth, setAuth] = useState(false)

  const query = '/data/members?property=login&property=password'
  const data = useFetch(query)[1]

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleAuthClick = () => {
    data.forEach((item) => (
      (item.login === login && item.password === password)
        ? setAuth(true)
        : null
    ))
  }

  return (
    <AuthStl>
      {
        auth
          ? <div style={{color: 'green'}}>ВОШЕЛ!</div>
          : <div style={{color: 'red'}}>НЕ ВОШЕЛ!</div>
      }

      <Label text={'Логин:'} />
      <Input
        type={'text'}
        onChange={(e) => setLogin(e.target.value)}
      />
      <Label text={'Пароль:'} />
      <Input
        type={'password'}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Btn
        text={'Войти'}
        onClick={handleAuthClick}
      />
    </AuthStl>
  )
}