import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Body from "./pages/Body/Body";
import Login from "./pages/login/login";
import Create from "./pages/create/create";
import Profile from "./pages/profile/profile";
import Sign from "./pages/login/signup";
import Itemde from "./pages/itemdetail";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  let [user, setUser] = useState();
  let [art, setArt] = useState();
  let [one, setOne] = useState(0);
  useEffect(() => {
    getValue();
    // eslint-disable-next-line
  }, [one]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:3000/files/collection",
      headers: {},
    };

    const getItem = async () => {
      const response = await axios(config);
      setArt(response.data);
    };
    getItem();
  }, []);

  const getValue = async () => {
    var config = {
      method: "get",
      url: "http://localhost:3000/user/me",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    console.log(config.headers);

    const response = await axios(config);
    setUser(response.data);
    console.log(user);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isUser={user && user.email ? true : false} onSet={setUser} />

        <Switch>
          <Route exact path="/">
            <Body art={art} />
          </Route>
          {/* <Route exact path="/itemdetail/:handle" component={Itemde}></Route> */}
          <Route exact path="/itemdetail/:handle">
            <Itemde art={art} user={user} />
          </Route>
          {user && user.email ? (
            <>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/profile">
                <Profile user={user} />
              </Route>
            </>
          ) : (
            <>
              <Route path="/login">
                <Login onSet={setOne} />
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
