import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Body from "./pages/Body/Body";
import Login from "./pages/login/login";
import Create from "./pages/create/create";
import Profile from "./pages/profile/profile";
import Sign from "./pages/login/signup";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Body}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Sign}></Route>
          <Route exact path="/create" component={Create}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Redirect to="/"></Redirect>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
