import React, { Component } from 'react';
import {online_explore_function} from './online_explore_function';
import './online_explore.css';
import './online_explore_main.css';
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {OnlineCards} from './online_cards'
import axios from 'axios';

class online_explore extends Component {
	state={
		online:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount = () => {
		online_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('http://localhost:4500/api/events/bytype/online/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then((response) => {
			const data = response.data;
			this.setState({ online: data });
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
				
				<div className="online_cont s--inactive">
					  <div className="online_cont__inner">
					  	
					  	<OnlineCards events={this.state.online} />
					  </div> 
					  
				</div>
			</div>
		)
	}
}

export default online_explore;