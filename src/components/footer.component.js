 import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    	<footer>
	    	<div className="row text-center">
	    		<div className="col-md-4">
	    			<h3>Location</h3>
	    			<p>
	    				Cranbourne, Victoria
	    				Australia 3977
	    			</p>
	    		</div>
	    		<div className="col-md-4">
	    		</div>
	    		<div className="col-md-4">
	    		</div>
	    	</div>
	    	<div id="copyright-text" className="row text-center">
	    		<div className="col-12">
	    			<p>Copyright © Your Website <span>{(new Date().getFullYear())}</span></p>
	    		</div>
	    	</div>
	    </footer>
    )
  }
}