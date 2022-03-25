import React, { Component } from 'react';
import {susp_explore_function} from './susp_explore_function';
import './susp_explore.css';
import './susp_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {SuspCards} from './susp_cards'
import axios from 'axios';

class susp_explore extends Component {
	constructor(props){
		super(props);
		this.state={
			school:[],
			dataIsReturned:false
		}
	}
	
	componentDidMount(){
		susp_explore_function();
		this.getEvents();
	}

	componentDidUpdate= () => {
		susp_explore_function();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('/api/events/bytype/school/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then(async(response) => {
			const data = response.data;
			this.setState({ school: data });
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
				<BackToEvents />
			 <div className="susp_cont s--inactive">
			  <div className="susp_cont__inner">
				  { this.state.dataIsReturned ? <SuspCards /> : null}
			  </div>
				</div>
			</div>
		)
	}
}

export default susp_explore;