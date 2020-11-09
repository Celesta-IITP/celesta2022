import React, { Component } from 'react';
import {tech_explore_function} from './tech_explore_function';
import './tech_explore.css';
import './tech_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {TechnicalCards} from './technical_cards'
import axios from 'axios';

class tech_explore extends Component {
	state={
		technical:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		tech_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('http://localhost:4500/api/events/bytype/technical/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then((response) => {
			const data = response.data;
			console.log("Data: ", data);
			this.setState({ technical: data });
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
				<div className="tech_cont s--inactive">
			  <div className="tech_cont__inner">
			  	<TechnicalCards events={this.state.technical} />
			  </div>
				</div>
			</div>

		)
	}
}

export default tech_explore;