import React from 'react';
//import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const TechnicalCards = (props) => {
	const technical = props.events;
	return(
		<div>
			{Object.entries(technical).map(([key, value]) =>
			    <div key={parseInt(key)} className="tech_el">
			      <div className="tech_el__overflow">
			        <div className="tech_el__inner">
			          <div className="tech_el__bg"></div>
			          <div className="tech_el__preview-cont">
			            <h2 className="tech_el__heading">{value.name}</h2>
			          </div>
			          <div className="tech_el__content">
			            <div className="tech_el__text">{value.name}</div>
			            <div className="tech_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={parseInt(key)} eventDetails={value} />
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="tech_el__index">
			        <div className="tech_el__index-back">{parseInt(key)+1}</div>
			        <div className="tech_el__index-front">
			          <div className="tech_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}