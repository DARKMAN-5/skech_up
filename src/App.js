import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Body from "./pages/Body/Body";
import Login from "./pages/login/login";
import Create from "./pages/create/create";
import Profile from "./pages/profile/profile";
import Sign from "./pages/login/signup";
import Itemde from "./pages/itemdetail";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  console.log(user);

  return (
    <Router>
      <div className="App">
        <Navbar isUser={user && user.email ? true : false} onSet={setUser} />

        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/itemdetail/:handle" component={Itemde}></Route>
          {user && user.email ? (
            <>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </>
          ) : (
            <>
              <Route path="/login">
                <Login onSet={setUser} />
              </Route>
              <Route path="/signup">
                <Sign />
              </Route>
            </>
          )}

          <Redirect to="/"></Redirect>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
