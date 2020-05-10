import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default class Navigation_Bar extends Component {

  render() {
    return (
      <Navbar bg="success" expand="lg" variant="dark">
        <Navbar.Brand>LAWRENCE PEREZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <li className="navbar-item">
              <NavLink to="/about_me" className="nav-link" activeClassName="nav-link-active">About Me</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/work_experience" className="nav-link" activeClassName="nav-link-active">Work Experience</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/notable_works" className="nav-link" activeClassName="nav-link-active">Notable Works</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/education" className="nav-link" activeClassName="nav-link-active">Education</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/skills" className="nav-link" activeClassName="nav-link-active">Skills</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}