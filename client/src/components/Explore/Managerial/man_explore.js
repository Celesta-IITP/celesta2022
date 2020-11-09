import React, { Component } from 'react';
import {man_explore_function} from './man_explore_function';
import './man_explore.css';
import './man_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {ManCards} from './man_cards'
import axios from 'axios';

class man_explore extends Component {
	state={
		managerial:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		man_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('http://localhost:4500/api/events/bytype/managerial/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then((response) => {
			const data = response.data;
			this.setState({ managerial: data });
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
				
			 <div className="man_cont s--inactive">
			  <div className="man_cont__inner">
			  	<ManCards events={this.state.managerial} />
			  </div>
				</div>
			</div>
		)
	}
}

export default man_explore;