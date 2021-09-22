/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footerstyle.css";

const Footer = () => {
  return (
    <div>
      <div className="Box">
        <div className="Row">
          <div className="Column0">
            <p className="Heading">
              <i className="fab fa-react"></i> Sketch Up
            </p>
            <a className="FooterLink" href="#">
              <strong>Get Latest Updates</strong>
            </a>
            <div className="wrapper1">
              <input
                className="email"
                placeholder="Your Email Id"
                type="text"
              />
              <button className="button1">Email me!</button>
            </div>
          </div>
          <div className="Column2">
            <div className="Column">
              <p className="Heading">Skecth Up</p>
              <a className="FooterLink" href="#">
                Explore
              </a>
              <a className="FooterLink" href="#">
                How it Works
              </a>
              <a className="FooterLink" href="#">
                Contact Us
              </a>
            </div>
            <div className="Column">
              <p className="Heading">Support</p>
              <a className="FooterLink" href="#">
                Help Center
              </a>
              <a className="FooterLink" href="#">
                Terms of Service
              </a>
              <a className="FooterLink" href="#">
                Legal
              </a>
              <a className="FooterLink" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Box">
        <div className="Row1">
          <p className="Heading1">
            <strong>SketchUp, Inc. All rights reserved.</strong>
          </p>
          <div className="Column1">
            <a className="FooterLink1" href="#">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a className="FooterLink1" href="#">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a className="FooterLink1" href="#">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a className="FooterLink1" href="#">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
