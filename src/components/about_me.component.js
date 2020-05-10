import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class About_Me extends Component {
  render() {
    return (
    	<div className="container">
    		<div className="row">
	    		<div className="col-md-4">
	    			<FontAwesomeIcon icon={faCoffee} />
	    		</div>
	    		<div className="col-md-8">
		      		<h1 style={{ textTransform: 'uppercase'}}>Career Objective</h1>
					<p>
						I am looking for a suitable position with a company where outstanding performance is recognised and where I can work on a variety of projects.
					</p>
					<p>
						I am problem solver with a passion for technology, and I would like to be part of company that indulges professional growth which provides challenging and rewarding career while allowing me to utilise my skills and knowledge.
					</p>
				</div>
    		</div>
    		<div className="row">
    			<div className="col-md-4">
    				<h3>Location</h3>
    				<p>
    					Cranbourne, Victoria<br />
    					Australia 3977
    				</p>
	    		</div>
	    		<div className="col-md-4">

	    		</div>
	    		<div className="col-md-4">

	    		</div>
    		</div>
    	</div>
    )
  }
}