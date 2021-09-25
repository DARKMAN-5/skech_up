import React, { Component } from "react";
import "./profile.css";
import Topbids from "../Topbids";
import bck from "./img1/bck.jpg";
import bck2 from "../Body/img/parag2.jpg";
import { Topbidsdata } from "../Body/Topbidsdata";

class Profile extends Component {
  render() {
    return (
      <div className="main-profile">
        <div className="profile">
          <img src={bck} alt="My side"></img>
        </div>
        <div className="profile-photo">
          <img className="userPro" src={bck2} alt="hey" />
        </div>
        <div className="UserName">
          <h1>Parag Thakre</h1>
          <p className="Userdescri">
            (Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptatibus aliquam corporis quae sint deserunt atque, magni
            incidunt ut esse pariatur molestias rem recusandae excepturi
            impedit, iure optio a repudiandae, suscipit dolorem.)
          </p>
        </div>
        <div className="mainBody">
          <div className="lowerBody">
            <h2 id="h11">My Artwork</h2>
            <Topbids data={Topbidsdata} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
