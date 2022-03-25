
import React from "react";
import './loader.css';
import './script';

class Loader extends React.Component {
  render() {
    return (
      <div>
      
      <div className="loader-wrapper">
			<div className="loader">
				<div className="spinner">•</div>
			  </div>
			</div> 

    </div>
    );
  }
}

export default Loader;
