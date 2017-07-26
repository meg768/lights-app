import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {Form, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';

import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import {Page} from '../../components/page.js'

var io = require('socket.io-client');

//var url = sprintf('http://85.24.190.138:3002/tellstick');
var url = sprintf('http://app-o.se/tellstick');
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
		name:'Noname',
		mode: 'onoff'
	};

	changeState(state) {
		if (state == 'ON')
			socket.emit('turnOn', this.props.device);
		if (state == 'OFF')
			socket.emit('turnOff', this.props.device);

	};

	render() {
		var buttonStyle = {};
		buttonStyle.marginLeft = '0.2em';
		buttonStyle.marginRight = '0.2em';
		buttonStyle.borderRadius = '2em';
		buttonStyle.width = '3.5em';
		buttonStyle.height = '3.5em';
		buttonStyle.fontWeight = 'bold';

		return (
			<ListGroupItem href=''>
				<div style={{display:'table'}}>
					<div style={{display:'table-cell', width:'100%', verticalAlign:'middle', fontWeight:'bold'}}>
						{this.props.name}
					</div>
					<div style={{display:'table-cell'}}>
						<Button disabled={this.props.mode == 'off'} style={buttonStyle} onClick={this.changeState.bind(this, 'ON')} bsStyle="warning">
							PÅ
						</Button>
					</div>
					<div style={{display:'table-cell'}}>
						<Button disabled={this.props.mode == 'on'} style={buttonStyle} onClick={this.changeState.bind(this, 'OFF')} bsStyle="warning">
							AV
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




	renderForm() {
		return (
			<Form style={{paddingTop:'1em', paddingBottom:'1em', fontSize:'125%'}}>

				<FormGroup>
					<ListGroup>
						<DeviceHeader name='Kontoret'/>
						<Device name='Alla lampor' device='FK-01-01'/>
						<Device name='Läslampa' device='FK-01-02'/>
						<Device name='Övriga lampor' device='FK-01-03'/>
					</ListGroup>

					<ListGroup>
						<DeviceHeader name='Bottenvåningen'/>
						<Device name='Matrummet' device='VS-03'/>
						<Device name='Stora rummet' device='VS-04'/>
						<Device name='Terassen' device='VS-01'/>
					</ListGroup>
					<ListGroup>
						<DeviceHeader name='Biorummet'/>
						<Device name='Alla lampor' device='FK-02-01'/>
						<Device name='Främre lampor' device='FK-02-02'/>
						<Device name='Bakre lampor' device='FK-02-03'/>
						<Device name='Rörelse i biorummet' device='RV-02' mode='on'/>
					</ListGroup>
					<ListGroup>
						<DeviceHeader name='Snickarrummet'/>
						<Device name='Saftblandare' device='VS-02'/>
					</ListGroup>
					<ListGroup>
						<DeviceHeader name='Övrigt'/>
						<Device name='Larm' device='VS-05'/>
						<Device name='Skymningsrelä' device='SR-01'/>
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
							{this.renderForm()}
						</Col>
					</Row>
				</Grid>
			</div>

		);
	}

};
