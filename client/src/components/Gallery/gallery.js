import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer.js";
import { photos } from "./images";
import Images from "./Photos";
import "./gallery.css";

/* popout the browser and maximize to see more rows! -> */
const Photos = () => {
  //const [x,setX]=useState(0);
  return (
    <div style={{ backgroundColor: "#05001e" }}>
      <div>
        <Navbar />
      </div>

      <div style={{ backgroundColor: "black" }}>
        <div style={{ padding: "10px" , marginTop: "5vh"}}>
          <h1
            className="galleryheading"
            style={{
              textAlign: "center",
              fontSize: "50px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            Some stunning Memories!
          </h1>
          <div className="zoom">
            <Images />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Photos;
