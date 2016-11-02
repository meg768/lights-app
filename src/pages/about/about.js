import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {extend, isString, isObject, isArray} from 'yow';
import {Page} from '../../components/page.js'

import {sprintf} from 'yow';

require('./about.less');


module.exports = class AboutPage extends React.Component {


	constructor(...args) {

		super(...args);

	};

	renderBox() {

		var style = {};
		style.borderRadius = '0.5em';
		style.background = 'rgba(255,255,255,0.9)';
		style.color = 'rgba(0,0,0,0.6)';
		style.padding = '1em';

		return (
			<div style={style}>
				<h3>
					Om oss
				</h3>
				<h5>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula neque, finibus in turpis et, malesuada dignissim purus. Ut viverra massa leo, at sollicitudin velit auctor quis. Vestibulum quis orci rhoncus, gravida libero non, lobortis est. Quisque in tortor ut enim blandit vestibulum. Aliquam erat volutpat. Curabitur iaculis est iaculis.
				</h5>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo.
				</p>
			</div>

		);
	}





	render() {

		return (
			<Page bg={require('./images/bg.jpg')}>
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							{this.renderBox()}
						</Col>
					</Row>
				</Grid>
			</Page>
		);
	}

};
