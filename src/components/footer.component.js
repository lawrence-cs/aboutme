 import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    	<footer>
	    	<div id="copyright-text" className="text-center">
	    		<div className="row">
	    			<p>Copyright © Your Website <span>{(new Date().getFullYear())}</span></p>
	    		</div>
	    	</div>
	    </footer>
    )
  }
}