import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Sign() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [repswd, setRepswd] = useState("");
  const [bio, setBio] = useState("");

  function handleClick(event) {
    event.preventDefault();
    // alert("Signed Up.");
    const userDetail = {
      name: userName,
      email: email,
      password: pswd,
      bio: bio,
    };

    var config = {
      method: "post",
      url: "http://localhost:3000/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: userDetail,
    };

    if (pswd === repswd) {
      console.log(userDetail);

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          alert("Registered");
        })
        .catch(function (error) {
          console.log(error);
        });
      setUserName("");
      setEmail("");
      setPswd("");
      setRepswd("");
      setBio("");
    } else {
      alert("Enter Same Password.");
      setPswd("");
      setRepswd("");
    }

    // link backend here
  }

  function Uname(event) {
    let t = event.target.value;
    setUserName(t);
    // console.log(userName);
  }

  function Email(event) {
    let t = event.target.value;
    setEmail(t);
    // console.log(email);
  }

  function Pswd(event) {
    let t = event.target.value;
    setPswd(t);
    // console.log(pswd);
  }

  function Repswd(event) {
    let t = event.target.value;
    setRepswd(t);
    // console.log(repswd);
  }

  function Bio(event) {
    let t = event.target.value;
    setBio(t);
    // console.log(repswd);
  }

  return (
    <div className="loginBody">
      <h1>Sign Up</h1>
      <form onSubmit={handleClick} className="formlBody">
        <div className="form-ex">
          <label htmlFor="name">Enter your name </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={Uname}
            placeholder="Your Name"
            value={userName}
            required
          />
        </div>
        <div className="form-ex">
          <label htmlFor="email">Enter your Email Id </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={Email}
            placeholder="Your Email Id"
            value={email}
            required
          />
        </div>
        <div className="form-ex">
          <label htmlFor="pswd">Password </label>
          <br />
          <input
            type="password"
            name="pswd"
            id="pswd"
            onChange={Pswd}
            placeholder="Enter Password"
            value={pswd}
            required
          />
        </div>
        <div className="form-ex">
          <label htmlFor="rpswd">Confirm Password </label>
          <br />
          <input
            type="password"
            name="rpswd"
            id="rpswd"
            onChange={Repswd}
            placeholder="Re-Enter Password"
            value={repswd}
            required
          />

          <div className="form-ex">
            <label for="description">Description </label>
            <br />
            <textarea
              className="decription-box"
              name="description"
              id=""
              rows="5"
              onChange={Bio}
              value={bio}
              placeholder="Add Your Bio"
            ></textarea>
          </div>
        </div>
        <div className="log-button-flex">
          <div className="form-ex3">
            <input type="submit" value="Sign Up" />
          </div>
          <Link className="button-5" to="/Login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Sign;
