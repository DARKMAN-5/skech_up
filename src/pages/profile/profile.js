import React, { useState } from "react";
import "./profile.css";
import Topbids from "../Topbids";
import bck from "./img1/bck.jpg";
import bck2 from "../Body/img/parag2.jpg";
import { Topbidsdata } from "../Body/Topbidsdata";

function Profile() {
  const [profile, setProfile] = useState(null);

  const [background, setBackground] = useState(null);

  function sendProfile() {
    console.log(profile);
    // link to backend here
  }

  function sendBckgrd() {
    console.log(background);
    // link to backend here
  }

  function profileChange(event) {
    const { files } = event.target;
    setProfile(files[0]);
  }

  function bckgrdChange(event) {
    const { files } = event.target;
    setBackground(files[0]);
  }

  return (
    <>
      <div className="btn-group dropDown">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          style={{
            backgroundColor: " #eb1484 ",
          }}
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Edit Profile
        </button>
        <ul
          className="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark"
          sytle={{ minWidth: "20rem" }}
        >
          <li>
            <div className="dropdown-item">
              <label htmlFor="uploaded_file">Upload Profile Photo</label>
              <div className="input-group input-group-sm mb-3">
                <input
                  type="file"
                  name="profile"
                  className="form-control bg-dark"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  style={{ border: "1px solid black", color: "white" }}
                  onChange={profileChange}
                  required
                />
                <label
                  className="input-group-text"
                  for="inputGroupFile02"
                  style={{ color: "white", backgroundColor: " #c91cc3" }}
                  onClick={sendProfile}
                >
                  Upload
                </label>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown-item">
              <label htmlFor="uploaded_file">Upload Background Photo</label>
              <div
                className="input-group input-group-sm mb-3"
                style={{ border: "1px solid black", color: "white" }}
              >
                <input
                  type="file"
                  name="bck"
                  className="form-control bg-dark"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  style={{ border: "1px solid black", color: "white" }}
                  onChange={bckgrdChange}
                  required
                />
                <label
                  className="input-group-text"
                  for="inputGroupFile02"
                  style={{ color: "white", backgroundColor: " #c91cc3" }}
                  onClick={sendBckgrd}
                >
                  Upload
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
    </>
  );
}

export default Profile;
