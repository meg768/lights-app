import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {BackgroundImage} from './background-image.js'
import {MainToolBar} from './main-toolbar.js'

export class Page extends React.Component {


	constructor(props) {

		super(props);

	};



	render() {

		var bg = this.props.bg;

		if (!bg)
			bg = require('../images/bg.jpg');

		return (
				<BackgroundImage image={bg}>

					<MainToolBar/>

					<div>
						{this.props.children}
					</div>
				</BackgroundImage>



		);
	}

};
