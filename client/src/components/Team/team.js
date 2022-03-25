import React from "react";
import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer.js";
import  "./team.css";
import teamdata from "./teamdata";

// import {MDBAvatar } from "mdbreact" ;

const TeamPage = ( ) => {
  
  return (
    <div className="aqua-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
    <Navbar />
    <section className="speakers-section">
        <div className="parallax-scene parallax-scene-2 anim-icons">
            <span data-depth="0.40" className="parallax-layer icon icon-circle-5"></span>
            <span data-depth="0.99" className="parallax-layer icon icon-circle-5"></span>
        </div>

<div className="container">
      <div className="sec-title light text-center">
        <span className="title">Our Team</span>
        </div>

        <ul className="circles">
                    <li></li> 
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

{teamdata.map(( x , i) =>{ 
      return(
          <>
                <div className="sec-title light text-center">
                  <h2>{x.teamname}</h2>
                </div>

                <div className="row">
                
                {x.members.map((y , i) => 

                      <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src={`${y.image}`} alt=""/>
                                      <div className="social-links">
                                          <ul>
                                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li> 
                                            <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li> 
                                          </ul>
                                      </div>
                                  </figure>
                              </div>
                              <div className="caption-box">
                                  <h4 className="name"><a href="#">{y.name}</a></h4>
                                  <span className="designation">{y.position}</span>
                              </div>
                          </div>
                      </div>

                  )}

            

               </div>
    </>
      )
            })}  


            {/* {x.image.map((y) => <img className="sp pa5" src={`${y}`} alt="sponsor" />)} */}


</div>
</section>
      <Footer />
      </div>
  );
}

export default TeamPage;