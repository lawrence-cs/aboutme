 import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    	<footer>
	    	<div id="copyright-text" className="text-center">
    			<p>Copyright © Your Website <span>{(new Date().getFullYear())}</span></p>
	    	</div>
	    </footer>
    )
  }
}