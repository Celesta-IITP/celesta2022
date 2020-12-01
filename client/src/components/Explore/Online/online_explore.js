import React, { Component } from 'react';
import {online_explore_function} from './online_explore_function';
import './online_explore.css';
import './online_explore_main.css';
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {OnlineCards} from './online_cards'
import axios from 'axios';

class online_explore extends Component {
	constructor(props){
		super(props);
		this.state={
			online:[],
			dataIsReturned:false
		}
	}

	componentDidMount = () => {
		online_explore_function();
		this.getEvents();
	}

	componentDidUpdate= () => {
		online_explore_function();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('/api/events/bytype/online/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then(async(response) => {
			const data = response.data;
			this.setState({ online: data });
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
				
				<div className="online_cont s--inactive">
					  <div className="online_cont__inner">
					  	{ this.state.dataIsReturned ? <OnlineCards/> : null}
					  </div> 
					  
				</div>
			</div>
		)
	}
}

export default online_explore;