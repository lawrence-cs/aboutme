import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class About_Me extends Component {
  render() {
    return (
    	<div className="container">
    		<div className="row">
	    		<div className="col-md-4">
	    			<i className="fas fa-user-tie"></i>
	    		</div>
	    		<div className="col-md-8">
		      		<h1 style={{ textTransform: 'uppercase'}}>ABOUT ME</h1>
					<p>
						An ambitious problem solver with a passion for online businesses, and who would like to join a team of like-minded developers. I have experience in creating logical and innovative solutions to complex problems.
					</p>
					<p>
						I am thorough and precise in everything I do, and have a keen interest in technology, mobile applications and user experience. As someone who takes responsibility for my own personal development, I continually evaluate and upgrade my skills.  I am a natural problem solver, who have proven myself by
						successfully completing projects for consultancies, software houses, web design agencies, and IT departments.
					</p>
					<p>
						Right now I am looking for a suitable position with a company where outstanding performance is recognised and where I can work on a variety of projects.
					</p>
				</div>
    		</div>
    	</div>
    )
  }
}