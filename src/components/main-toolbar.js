import React from 'react';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';




export class MainToolBar extends React.Component {

	constructor(props) {

		super(props);

	};

	render() {

		var style = {};
		var fontSize = '18px';

		style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
		style.border = 'none';
		style.borderRadius = 0;

		return (
			<Navbar inverse style={style}>
				<Navbar.Header >
					<Navbar.Brand>
						<a href="#" style={{fontSize:fontSize}}>Hem</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav style={{fontSize:fontSize}}>
						<NavItem eventKey={2} href="#/about">Om oss</NavItem>
						<NavItem eventKey={9} href="#/what-we-do">Vad gör vi?</NavItem>
						<NavItem eventKey={10} href="#/partners">Partners</NavItem>
						<NavItem eventKey={11} href="#/contact">Kontakt</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
};
