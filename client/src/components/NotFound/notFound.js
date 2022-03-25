/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Link } from "react";
import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer.js";
import "./notFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="bg-purple">
        <Navbar />
        <div className="stars">
          <div className="central-body">
            <img
              className="image-404"
              src={require("../../assets/img/4041.png")}
              width="300px"
            />
            <h1 style={{ fontSize: "40px", margin: "20px", padding: "2px" }}>
              LOOKS LIKE YOU ARE
              <br /> LOST IN SPACE
            </h1>
            <a
              href="http://localhost:3000/"
              className="btn-go-home"
              target="_blank"
            >
              GO BACK HOME
            </a>
          </div>
          <div className="objects">
            <img
              className="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div className="earth-moon">
              <img
                className="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                className="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div className="glowing_stars">
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
          </div>
        </div>
        ;
      </div>
    );
  }
}
export default NotFound;
