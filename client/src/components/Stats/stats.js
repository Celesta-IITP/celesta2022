import React from "react";
import "./stats.css";
import Countup from "react-countup";
const Stats = () => {
  return (
    <div>
      <div className="sectiontitle">
        <span className="headerLine"></span>
      </div>
      <div id="projectFacts" className="sectionclassName">
        <div className="fullWidth eight columns">
          <div className="projectFactsWrap ">
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="12"
              style={{ visibility: "visible" }}
            >
              <i className="fa fa-university"></i>
              <p
                id="number1"
                className="number"
                style={{ alignContent: "center" }}
              >
                <Countup end={100} duration={6} suffix="+" />
                <br />
              </p>
              <span></span>
              <p style={{ fontSize: "25px" }}>COLLEGES!</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="56"
              style={{ visibility: "visible" }}
            >
              <i className="fa fa-users"></i>
              <p
                id="number2"
                className="number"
                style={{ alignContent: "center" }}
              >
                <Countup end={5000} duration={6} suffix="+" />
                <br />
              </p>
              <span></span>
              <p style={{ fontSize: "25px" }}>FOOTFALL!</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="358"
              style={{ visibility: "visible" }}
            >
              <i className="fa fa-trophy"></i>
              <p
                id="number3"
                className="number"
                style={{ alignContent: "center" }}
              >
                <Countup end={50} duration={6} suffix="+" />
                <br />
              </p>
              <span></span>
              <p style={{ fontSize: "25px" }}>EVENTS!</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="246"
              style={{ visibility: "visible" }}
            >
              <i className="fa fa-thumbs-up"></i>
              <p
                id="number4"
                className="number"
                style={{ alignContent: "center" }}
              >
                <Countup end={50000} duration={6} suffix="+" />
                <br />
              </p>
              <span></span>
              <p style={{ fontSize: "25px" }}>OUTREACH!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
