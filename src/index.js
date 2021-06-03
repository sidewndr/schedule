import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./shared/global-styles/global-styles";
import {Routes} from "./api/routes/routes";
import {AuthContext} from "./context";


const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <GlobalStyles />
      <Routes />
    </AuthContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
