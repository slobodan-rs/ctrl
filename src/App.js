import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle'
import jwt_decode from "jwt-decode"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import styled from 'styled-components';

//Components
import Login from './components/Login';
import NavBar from './components/NavBar';
import AddProduct from './components/AddProduct';

const App = () => {
  const [user, setUser] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const token = localStorage.getItem("Token")
    const sessionToken = sessionStorage.getItem("Token")
    const user = localStorage.getItem("UserName")
    const sessionUser = sessionStorage.getItem("UserName")

    if (token !== null) {
      setUserName(user)
      const decode = jwt_decode(token)
      return decode.exp > Date.now() / 1000 ? setUser(true) : localStorage.clear()
    }
    else if (sessionToken !== null) {
      setUserName(sessionUser)
      const decode = jwt_decode(sessionToken)
      return decode.exp > Date.now() / 1000 ? setUser(true) : sessionStorage.clear()
    }
    else {
      return setUser(false)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Router>
        {!user ? <Redirect to="/login" /> : <Redirect to="/" />}
        <NavBar setUser={setUser} userName={userName} user={user} />
        <Switch>
          <Route exact path="/login" >
            <Login setUser={setUser} setUserName={setUserName} />
          </Route>
          <Main>
            <Route exact path="/" >
              <Loader type="Rings" color="#e53a0d" height={100} width={100} timeout={1000} className="loader" />
            </Route>
            <Route exact path="/pregled-artikla" >
              <AddProduct />
            </Route>
          </Main>
        </Switch>
      </Router>
    </>
  );
}

export default App;

const Main = styled.main`

`