import React, { Component } from 'react';
import {susp_explore_function} from './susp_explore_function';
import './susp_explore.css';
import './susp_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {SuspCards} from './susp_cards'
import axios from 'axios';

class susp_explore extends Component {
	state={
		school:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		susp_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('/api/events/bytype/school/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then((response) => {
			const data = response.data;
			this.setState({ school: data });
			console.log('Data has been received!!');
			
		  })
		  .catch(() => {
			alert('Error retrieving data!!!');
		  });
	}

	render() {
		return (
			<div>
				<BackToEvents />
			 <div className="susp_cont s--inactive">
			  <div className="susp_cont__inner">
			  	<SuspCards events={this.state.school} />
			  </div>
				</div>
			</div>
		)
	}
}

export default susp_explore;