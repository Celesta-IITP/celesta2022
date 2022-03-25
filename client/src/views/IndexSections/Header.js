import React from "react";
import "../../assets/css/styles.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

let img1 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png";
let img2 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png";
let img3 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png";
let img4 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds3.png";
let img5 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Moon.png";
let img6 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png";

class Header extends React.Component {
  render() {
    return (
      <div className="landing-page-container" id="home-section">
        <img
          src={require("../../assets/img/newimg/celestafrontimg.png")}
          alt=""
          className="astronaut"
        />
        <div className="landing-page-main">
          <div className="parallax-container">
            <div style={{ background: `url(${img1})` }}></div>
            <div style={{ background: `url(${img2})` }}></div>
            <div style={{ background: `url(${img3})` }}></div>
            <div style={{ background: `url(${img4})` }}></div>
            <div style={{ background: `url(${img5})` }} id="top-circle"></div>
            <div style={{ background: `url(${img6})` }}></div>

            <img
              className="object_astronaut"
              src={require("../../assets/img/homeassets/astronaut.svg")}
              width="100px"
              style={{ top: "20%", right: "10%", position: "absolute" }}
            />

            <div className="glowing_stars">
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
            </div>
            <div className="earth-moon">
              <img
                className="object_earth"
                src={require("../../assets/img/homeassets/earth.svg")}
                width="100px"
              />
            </div>
            <div>
              <img
                className="object_rocket"
                src={require("../../assets/img/homeassets/rocket.svg")}
                width="40px"
              />
            </div>
          </div>
        </div>
     

        <div className="fgd"> 
          <img
            src={require("../../assets/img/newimg/celesta2022img.png")}
            alt=""
          />
        </div>

        
        
        
      </div>
    );
  }
}

export default Header;
