import React from 'react';
//import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const ManCards = (props) => {
	const managerial = props.events;
	return(
		<div>
			{Object.entries(managerial).map(([key, value]) =>
			    <div key={parseInt(key)} className="man_el">
			      <div className="man_el__overflow">
			        <div className="man_el__inner">
			          <div className="man_el__bg"></div>
			          <div className="man_el__preview-cont">
			            <h2 className="man_el__heading">{value.name}</h2>
			          </div>
			          <div className="man_el__content">
			            <div className="man_el__text">{value.name}</div>
			            <div className="man_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={parseInt(key)} eventDetails={value} />
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="man_el__index">
			        <div className="man_el__index-back">{parseInt(key)+1}</div>
			        <div className="man_el__index-front">
			          <div className="man_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}