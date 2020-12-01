import React, { Component } from "react";
import { gam_explore_function } from "./gamiacs_explore_function";
import "./gamiacs_explore.css";
import "./gamiacs_explore_main.css";
import { BackToEvents } from "../../_BackToEvents/BackToEvents";
import { GamiacCards } from "./gamiacs_cards";
import axios from "axios";

class gamiacs_explore extends Component {
  constructor(props){
    super(props);
    this.state = {
      gamiacs: [],
      dataIsReturned:false
    }
  }
  
  componentDidMount() {
    gam_explore_function();
    this.getEvents();
  }

  componentDidUpdate= () => {
		gam_explore_function();
	}

  getEvents = () => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/events/bytype/gamiacs/detailed/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then(async(response) => {
        const data = response.data;
        this.setState({ gamiacs: data });
        localStorage.setItem('event', JSON.stringify(data));
        console.log(data);
        this.setState({dataIsReturned : true});
        console.log("Data has been received!!");
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };

  render() {
    return (
      <div>
        <BackToEvents />

        <div className="gam_cont s--inactive">
          <div className="gam_cont__inner">
            { this.state.dataIsReturned ? <GamiacCards /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default gamiacs_explore;
