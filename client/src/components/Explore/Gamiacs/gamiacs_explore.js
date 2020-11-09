import React, { Component } from "react";
import { gam_explore_function } from "./gamiacs_explore_function";
import "./gamiacs_explore.css";
import "./gamiacs_explore_main.css";
import { BackToEvents } from "../../_BackToEvents/BackToEvents";
import { GamiacCards } from "./gamiacs_cards";
import axios from "axios";

class gamiacs_explore extends Component {
  state = {
    gamiacs: [],
  };
  // constructor(props){
  // 	super(props);
  // }

  componentDidMount() {
    gam_explore_function();
    this.getEvents();
  }

  getEvents = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get("http://localhost:4500/api/events/bytype/gamiacs/detailed/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data;
        this.setState({ gamiacs: data });
        console.log("Data has been received!!");
      })
      .catch((e) => {
        console.log(e.message);
        alert("Error retrieving data!!!");
      });
  };

  render() {
    return (
      <div>
        <BackToEvents />
        {this.getEvents()}
        <div className="gam_cont s--inactive">
          <div className="gam_cont__inner">
            <GamiacCards events={this.state.gamiacs} />
          </div>
        </div>
      </div>
    );
  }
}

export default gamiacs_explore;
