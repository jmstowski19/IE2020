import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';

export class Navigation extends Component {
	render() {
		return (
            <Navbar>
			<Navbar.Brand href="#home">Jacek Mstowski, 299720</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/reminders">Reminders</Nav.Link>
      <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
        <NavDropdown.Item href="/userinfo">About User</NavDropdown.Item>
      </NavDropdown>
    </Nav>
        </Navbar.Collapse>
    </Navbar>
		);
	}
}
