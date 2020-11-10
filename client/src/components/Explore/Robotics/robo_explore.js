import React, { Component } from 'react';
import {robo_explore_function} from './robo_explore_function';
import './robo_explore.css';
import './robo_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {RoboticsCards} from './robo_cards'
import axios from 'axios';

class robo_explore extends Component {
	state={
		robotics:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		robo_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('/api/events/bytype/robotics/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then((response) => {
			const data = response.data;
			this.setState({ robotics: data });
			console.log('Data has been received!!');
			
		  })
		  .catch(() => {
			alert('Error retrieving data!!!');
		  });
	}

	render() {
		return (
			<div>
			<BackToEvents/>
			

			 <div className="robo_cont s--inactive">
			  <div className="robo_cont__inner">
			  	<RoboticsCards events={this.state.robotics} />
			  </div>
			</div>
			</div>

		)
	}
}

export default robo_explore;