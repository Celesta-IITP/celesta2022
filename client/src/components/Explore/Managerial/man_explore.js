import React, { Component } from 'react';
import {man_explore_function} from './man_explore_function';
import './man_explore.css';
import './man_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {ManCards} from './man_cards'
import axios from 'axios';

class man_explore extends Component {
	constructor(props){
		super(props);
		this.state={
			managerial:[],
			dataIsReturned:false
		}
	}

	
	componentDidMount(){
		man_explore_function();
		this.getEvents();
	}

	componentDidUpdate= () => {
		man_explore_function();
	}

	getEvents = () => {
		const token = localStorage.getItem("token");
		axios.get('/api/events/bytype/managerial/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: token,
			},
		  })
		  .then(async(response) => {
			const data = response.data;
			this.setState({ managerial: data });
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
				
			 <div className="man_cont s--inactive">
			  <div className="man_cont__inner">
			  { this.state.dataIsReturned ? <ManCards /> : null}
			  </div>
				</div>
			</div>
		)
	}
}

export default man_explore;