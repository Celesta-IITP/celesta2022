import React, { Component } from 'react';
import {robo_explore_function} from './robo_explore_function';
import './robo_explore.css';
import './robo_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {RoboticsCards} from './robo_cards'
import axios from 'axios';

class robo_explore extends Component {
	constructor(props){
		super(props);
		this.state={
			robotics:[],
			dataIsReturned:false
		}
	}
	
	componentDidMount(){
		robo_explore_function();
		this.getEvents();
	}

	componentDidUpdate= () => {
		robo_explore_function();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('/api/events/bytype/robotics/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then(async(response) => {
			const data = response.data;
			this.setState({ robotics: data });
			localStorage.setItem('event', JSON.stringify(data));
			console.log(data);
			this.setState({dataIsReturned : true});
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
				{ this.state.dataIsReturned ? <RoboticsCards /> : null}
			  </div>
			</div>
			</div>

		)
	}
}

export default robo_explore;