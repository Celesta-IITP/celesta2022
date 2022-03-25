import React from 'react';
//import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const RoboticsCards = (props) => {
	const robotics = JSON.parse(localStorage.getItem('event'));
	return(
		<div>
			{Object.entries(robotics).map(([key, value]) =>
			    <div key={parseInt(key)} className="robo_el">
			      <div className="robo_el__overflow">
			        <div className="robo_el__inner">
			          <div className="robo_el__bg"></div>
			          <div className="robo_el__preview-cont">
			            <h2 className="robo_el__heading">{value.name}</h2>
			          </div>
			          <div className="robo_el__content">
			            <div className="robo_el__text">{value.name}</div>
			            <div className="robo_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={parseInt(key)} eventDetails={value}/>
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="robo_el__index">
			        <div className="robo_el__index-back">{parseInt(key)+1}</div>
			        <div className="robo_el__index-front">
			          <div className="robo_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}