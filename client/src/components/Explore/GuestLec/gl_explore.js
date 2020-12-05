import React, { Component } from "react";
import { info_explore_function } from "./gl_explore_function";
import "./gl_explore.css";
import "./gl_explore_main.css";
import { BackToEvents } from "../../_BackToEvents/BackToEvents";
import { InfoCards } from "./gl_cards";
import axios from "axios";

class info_explore extends Component {
  constructor(props){
    super(props);
    this.state = {
      onsite: [],
      dataIsReturned:false
    }
  }
  
  componentDidMount() {
    info_explore_function();
    this.getEvents();
  }

  componentDidUpdate= () => {
		info_explore_function();
	}

  getEvents = () => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/events/bytype/gl/detailed/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then(async(response) => {
        const data = response.data;
        this.setState({ onsite: data });
        localStorage.setItem('event', JSON.stringify(data));
        console.log(data);
        this.setState({dataIsReturned : true});
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
        { (this.state.onsite.length!=0) ? (
        <div className="info_cont s--inactive">
          <div className="info_cont__inner">
          { this.state.dataIsReturned ? <InfoCards /> : null}
          </div>
        </div>
        ) : (
        <h2 style={{textAlign:"center",paddingTop:"25%"}}>
          Coming soon !!
        </h2>
        )}
      </div>
    );
  }
}

export default info_explore;
