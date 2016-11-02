import React from 'react';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';


export class BackgroundImage extends React.Component {

	constructor(props) {

		super(props);

	};

	render() {
		var style = {};
		style.backgroundSize     = 'cover';
		style.backgroundRepeat   = 'no-repeat';
		style.backgroundPosition = 'center center';
		style.position           = 'fixed';
		style.height             = '100%';
		style.width              = '100%';
		style.bottom             = 0;
		style.overflowY          = 'scroll';
		style.backgroundImage    = sprintf('url(%s)', this.props.image);

		return (
			<div style={style}>
				{this.props.children}
			</div>
		);
	}
};
