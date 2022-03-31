import React, {useRef, useEffect} from "react";
import "../../assets/css/styles.css";
import particles from '../../assets/img/blueparticles.gif'
import ParticleAnimation from 'react-particle-animation'
import { Container, Row, Col } from "reactstrap";

let cloud = '../../assets/img/pixelclouds.png'
let layer = '../../assets/img/cubetp.png'
// reactstrap components

let img1 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png";
let img2 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png";
let img3 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png";
let img4 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds3.png";
let img5 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Moon.png";
let img6 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png";

// let background = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png";


function Header() {
    const heroRef = useRef();


    function scrollSection() {
      window.scrollTo({
        top: heroRef.current.clientHeight,
        behavior: 'smooth',
        left: 0,
      })
      window.removeEventListener('scroll', scrollSection)
      window.addEventListener('scroll', filterNonIdealPosition)
    }
    
    function filterNonIdealPosition() {
      if (window.pageYOffset <= 0) {
        window.addEventListener('scroll', scrollSection)
        window.removeEventListener('scroll', filterNonIdealPosition)
      }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', filterNonIdealPosition)
      filterNonIdealPosition()
    
      return () => {
        window.removeEventListener('scroll', filterNonIdealPosition)
        window.removeEventListener('scroll', scrollSection)
      }
      // eslint-disable-next-line
    }, [])
    
    return (
      <div className="landing-page-container" id="home-section" ref={heroRef}>
        {/* <img
          src={require("../../assets/img/newimg/celestafrontimg.png")}
          alt=""
          className="astronaut"
        /> */}
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
     
        {/* <img className="particles" src={particles} /> */}
        <ParticleAnimation />

        {/* <div className="fgd"> 
          <img
            src={require("../../assets/img/newimg/celesta2022img.png")}
            alt=""
          />
        </div> */}
        <div className="clouds">
        <img
          src={require("../../assets/img/pixelclouds.png")}
          // className='clouds'
        />
        </div>
        {/* <div className="layer"> */}
          <img className="layer" src={require("../../assets/img/cubetp.png")} />
        {/* </div> */}

        <img className="logo-landing" src={require("../../assets/img/newimg/celestalogo.png")} />
        
        
      </div>
    );

}

export default Header;
