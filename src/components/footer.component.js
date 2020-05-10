 import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    	<footer>
	    	<div id="copyright-text" className="row text-center">
	    		<div className="col-12">
	    			<p>Copyright © Your Website <span>{(new Date().getFullYear())}</span></p>
	    		</div>
	    	</div>
	    </footer>
    )
  }
}