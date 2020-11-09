import React from 'react';
//import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const SuspCards = (props) => {
	const school = props.events;
	return(
		<div>
			{Object.entries(school).map(([key, value]) =>
			    <div key={parseInt(key)} className="susp_el">
			      <div className="susp_el__overflow">
			        <div className="susp_el__inner">
			          <div className="susp_el__bg"></div>
			          <div className="susp_el__preview-cont">
			            <h2 className="susp_el__heading">{value.name}</h2>
			          </div>
			          <div className="susp_el__content">
			            <div className="susp_el__text">{value.name}</div>
			            <div className="susp_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={parseInt(key)} eventDetails={value}/>
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="susp_el__index">
			        <div className="susp_el__index-back">{parseInt(key)+1}</div>
			        <div className="susp_el__index-front">
			          <div className="susp_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}