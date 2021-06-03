import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {Label, LabelStl} from "../atoms/label";
import {Input, InputStl} from "../atoms/input";
import {Btn} from "../atoms/btn";
import {useFetch} from "../../api/hooks/useFetch";
import {colors} from "../../shared/global-styles/colors";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context";
// import {useAuth} from "../../api/hooks/useLocalStorage";

export const AuthStl = styled.div`
  position: relative;
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

const ErrorAuthStl = styled.div`
  position: absolute;
  top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  max-width: 500px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: ${colors.secondary};
  background-color: ${colors.primary};
  padding: 3px 10px;
`


export const Auth = () => {
  const query = '/data/members?property=login&property=password'
  const data = useFetch(query)[1]

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const {setIsAuth} = useContext(AuthContext)
  const [errorAuth, setErrorAuth] = useState(false)

  let history = useHistory()

  const handleAuthClick = () => {
    data.forEach((item) => {
      if (item.login === login && item.password === password) {
        setIsAuth(true)
        setErrorAuth(false)

        history.push('/edit')
      } else {
        setErrorAuth(true)
        setLogin('')
        setPassword('')
      }
    })
  }

  return (
    <AuthStl>
      <Label text={'Логин:'} />
      <Input
        type={'text'}
        value={login}
        onChange={(e) => {
          setLogin(e.target.value)
          if (errorAuth === true) setErrorAuth(false)
        }}
      />
      <Label text={'Пароль:'} />
      <Input
        type={'password'}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          if (errorAuth === true) setErrorAuth(false)
        }}
      />

      {
        errorAuth
          ? <ErrorAuthStl>
              Ошибка авторизации!
            </ErrorAuthStl>
          : null
      }

      <Btn
        text={'Войти'}
        onClick={handleAuthClick}
      />
    </AuthStl>
  )
}