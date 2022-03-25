import React, { Component } from 'react';
import {tech_explore_function} from './tech_explore_function';
import './tech_explore.css';
import './tech_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {TechnicalCards} from './technical_cards'
import axios from 'axios';

class tech_explore extends Component {
	constructor(props){
		super(props);
		this.state={
			technical:[],
			dataIsReturned:false
		}
	}
	
	componentDidMount(){
		tech_explore_function();
		this.getEvents();
	}

	componentDidUpdate= () => {
		tech_explore_function();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('/api/events/bytype/technical/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then(async(response) => {
			const data = response.data;
			console.log("Data: ", data);
			this.setState({ technical: data });
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
				<div className="tech_cont s--inactive">
			  <div className="tech_cont__inner">
				  { this.state.dataIsReturned ? <TechnicalCards /> : null}
			  </div>
				</div>
			</div>

		)
	}
}

export default tech_explore;