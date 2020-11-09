import React from 'react';
//import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const OnlineCards = (props) => {
	const online = props.events;
	return(
		<div>
			{Object.entries(online).map(([key, value]) =>
			    <div key={parseInt(key)} className="online_el">
			      <div className="online_el__overflow">
			        <div className="online_el__inner">
			          <div className="online_el__bg"></div>
			          <div className="online_el__preview-cont">
			            <h2 className="online_el__heading">{value.name}</h2>
			          </div>
			          <div className="online_el__content">
			            <div className="online_el__text">{value.name}</div>
			            <div className="online_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={parseInt(key)} eventDetails={value} /> 
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="online_el__index">
			        <div className="online_el__index-back">{parseInt(key)+1}</div>
			        <div className="online_el__index-front">
			          <div className="online_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)}
		</div>
	);
}