import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover={false}>
    <div>
      <img
        alt=""
        src={require("../../assets/img/Pronites/ATM1245_Anubhav Singh Bassi.jpg")}
      />
      <p className="legend">COMEDY NIGHT</p>
    </div>
    <div>
      <img
        alt=""
        src={require("../../assets/img/Pronites/ATM7835_Base Guns - DJ Night.jpg")}
      />
      <p className="legend">EDM NIGHT</p>
    </div>
    <div>
      <img alt="" src={require("../../assets/img/abhiniyu.jpg")} />
    </div>
    <div>
      <img alt="" src={require("../../assets/img/gfg1.jpg")} />
    </div>
  </Carousel>
);
