import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {Form, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';

import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import {Page} from '../../components/page.js'

var io = require('socket.io-client');

var url = sprintf('http://app-o.se:3000/tellstick');
console.log('Connecting to %s...', url);
var socket = io.connect(url);

socket.on('hello', function(){
	console.log('Connected');
});
require('./home.less');


class DeviceHeader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	static defaultProps = {
		name:'Noname'
	};

	render() {
		return(
			<ListGroupItem disabled style={{fontWeight:'bold'}}>
				{this.props.name}
			</ListGroupItem>


		);

	};
};


class Device extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	static defaultProps = {
		device:'XXX',
		name:'Noname'
	};

	changeState(state) {
		if (state == 'ON')
			socket.emit('turnOn', {name:this.props.device});
		if (state == 'OFF')
			socket.emit('turnOff', {name:this.props.device});

	};

	render() {
		var buttonStyle = {};
		buttonStyle.marginLeft = '0.2em';
		buttonStyle.marginRight = '0.2em';
		return (
			<ListGroupItem href=''>
				<div style={{display:'table'}}>
					<div style={{display:'table-cell', width:'100%'}}>
						{this.props.name}
					</div>
					<div style={{display:'table-cell'}}>
						<Button style={buttonStyle} onClick={this.changeState.bind(this, 'OFF')} bsStyle="warning">
							<img src={require('./images/lights-off.svg')}/>
						</Button>
					</div>
					<div style={{display:'table-cell'}}>
						<Button style={buttonStyle} onClick={this.changeState.bind(this, 'ON')} bsStyle="warning">
							<img src={require('./images/lights-on.svg')}/>
						</Button>
					</div>
				</div>
			</ListGroupItem>

		);

	};
};


module.exports = class Home extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
	};



	setDeviceState(device, state) {
		if (state == 'ON')
			socket.emit('turnOn', {name:device});
		if (state == 'OFF')
			socket.emit('turnOff', {name:device});
	};

	renderForm() {
		return (
			<Form style={{padding:'1em'}}>
				<FormGroup style={{borderBottom:'1px solid black'}}>
					<h2>
						Mina lampor
					</h2>
				</FormGroup>
				<FormGroup bsSize='small'>
					<FormControl.Static>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tincidunt nunc a tempor. Praesent.
					</FormControl.Static>
				</FormGroup>


				<FormGroup>
					<ListGroup>
						<DeviceHeader name='Kontoret'/>
						<Device name='Hela kontoret' device='FK-01-01'/>
						<Device name='Sänglampan' device='FK-01-02'/>
						<Device name='Övriga lampor' device='FK-01-03'/>
					</ListGroup>

					<ListGroup>
						<DeviceHeader name='Bottenvåningen'/>
						<Device name='Matrummet' device='VS-03'/>
						<Device name='TV-rummet?' device='VS-02'/>
						<Device name='Terassen' device='VS-01'/>
						<Device name='Stora rummet' device='VS-04'/>
					</ListGroup>
					<ListGroup>
						<DeviceHeader name='Biorummet'/>
						<Device name='Alla lampor' device='FK-02-01'/>
						<Device name='Främre lampor' device='FK-02-02'/>
						<Device name='Bakre lampor' device='FK-02-03'/>
					</ListGroup>

				</FormGroup>


			</Form>

		);
	};
	render() {
		var style = {};


		return (
			<div id="home">
				<Grid>
					<Row>
					</Row>
					<Row>
						<Col sm={10} smOffset={1} md={8} mdOffset={2}>
							{this.renderForm()};
						</Col>
					</Row>
				</Grid>
			</div>

		);
	}

};
