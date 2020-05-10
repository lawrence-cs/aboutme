import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class Navigation_Bar extends Component {

  render() {
    return (
      <Navbar bg="success" expand="lg" variant="dark">
        <Navbar.Brand>LAWRENCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <li className="navbar-item">
              <Link to="/about_me" className="nav-link">About Me</Link>
            </li>
            <li className="navbar-item">
              <Link to="/work_experience" className="nav-link">Work Experience</Link>
            </li>
            <li className="navbar-item">
              <Link to="/notable_works" className="nav-link">Notable Works</Link>
            </li>
            <li className="navbar-item">
              <Link to="/education" className="nav-link">Education</Link>
            </li>
            <li className="navbar-item">
              <Link to="/skills" className="nav-link">Skills</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}