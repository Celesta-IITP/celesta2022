import React, { Component } from "react";
import abc1 from "../../assets/img/james.jpg";
// import abc2 from "../../assets/img/ryan.jpg";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import "./sponsors.css";
import sponsdata from "./sponsorsdata" ;



const Sponsors = ( ) =>  {

  
  
  return(
  

      <div className="sp-main">
        <ExamplesNavbar />
        {/*<h1 className="sp-head">Sponsors</h1>*/}
        <div className="sp-slider" style={{"background-image": "url(https://i.ibb.co/92HJxz2/team-bg.jpg)"}}>
         
          <br/><br/><br/><br/>

          <h1 className="sp_head2 heading"> OUR SPONSORS! </h1>
          <div>
           <br/>

          </div>
          {sponsdata.map(( x , i) =>{ 
            return(

          <div className="sp_img " >
            <div key={i}>
            <h1 className="heading">{x.name}</h1>
            {x.image.map((y) => <img className="sp pa5" src={`${y}`} alt="sponsor" />)}
            </div>

          </div>
      )
            })}          
        </div>
        <Footer />
      </div>
  
  )
}




export default Sponsors;
