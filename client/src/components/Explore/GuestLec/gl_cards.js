import React from 'react';
//import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const InfoCards = (props) => {
	const onsite = JSON.parse(localStorage.getItem('event'));
	return(
		<div>
			{Object.entries(onsite).map(([key, value]) =>
			    <div key={parseInt(key)} className="info_el">
			      <div className="info_el__overflow">
			        <div className="info_el__inner">
			          <div className="info_el__bg"></div>
			          <div className="info_el__preview-cont">
			            <h2 className="info_el__heading" style={{fontSize:"inherit",textAlign:"center"}}>{value.name}</h2>
			          </div>
			          <div className="info_el__content">
			            <div className="info_el__text">{value.name}</div>
			            <div className="info_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={parseInt(key)} eventDetails={value}/>
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="info_el__index">
			        <div className="info_el__index-back">{parseInt(key)+1}</div>
			        <div className="info_el__index-front">
			          <div className="info_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)}
		</div>
	);
}