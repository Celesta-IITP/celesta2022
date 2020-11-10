import React, { Component } from "react";
import { info_explore_function } from "./info_explore_function";
import "./info_explore.css";
import "./info_explore_main.css";
import { BackToEvents } from "../../_BackToEvents/BackToEvents";
import { InfoCards } from "./info_cards";
import axios from "axios";

class info_explore extends Component {
  state = {
    onsite: [],
  };
  // constructor(props){
  // 	super(props);
  // }

  componentDidMount() {
    info_explore_function();
    this.getEvents();
  }

  getEvents = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get("/api/events/bytype/onsite/detailed/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log("Data: ", data);
        this.setState({ onsite: data });
        console.log("Data has been received!!");
      })
      .catch((e) => {
        console.log(e.message);
        //alert('Error retrieving data!!!');
      });
  };

  render() {
    return (
      <div>
        <BackToEvents />
        <div className="info_cont s--inactive">
          <div className="info_cont__inner">
            <InfoCards events={this.state.onsite} />
          </div>
        </div>
      </div>
    );
  }
}

export default info_explore;
