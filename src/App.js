import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle'
import jwt_decode from "jwt-decode"

//Components
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("Token")
    const sessionToken = sessionStorage.getItem("Token")

    if (token !== null) {
      const decode = jwt_decode(token)
      return decode.exp > Date.now() / 1000 ? setUser(true) : localStorage.clear()
    }
    else if (sessionToken !== null) {
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
        <Switch>
          <Route exact path="/login" >
            <Login setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
