import React from 'react';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';



export class TextBox extends React.Component {

	static defaultProps = {
		type: 'text',
		placeholder: undefined,
		style: {},
		value: undefined,
		label: undefined
	};

	constructor(props) {
		super(props);
	};

	renderFormControl() {
		var style = extend({}, this.props.style);

		return (
			<input className='form-control' type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} style={style} />
		);

	}

	render() {

		if (this.props.label) {
			var labelStyle = {};
			labelStyle.opacity = '0.7';

			return (
				<div className='form-group'>
					<label className='control-label' style={labelStyle}>{this.props.label}</label>
					{this.renderFormControl()}
				</div>
			);
		}
		return this.renderFormControl();
	}
};




export class TextBoxEx extends React.Component {

	static defaultProps = {
		type: 'text',
		placeholder: undefined,
		style: {},
		value: undefined,
		label: undefined
	};

	constructor(props) {
		super(props);
	};

	renderFormControl() {
		var style = extend({}, this.props.style);

		return (
			<FormControl type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} style={style} />
		);

	}

	render() {

		if (this.props.label) {
			var labelStyle = {};
			labelStyle.opacity = '0.7';

			return (
				<FormGroup>
					<ControlLabel style={labelStyle}>{this.props.label}</ControlLabel>
					{this.renderFormControl()}
				</FormGroup>
			);
		}
		return this.renderFormControl();
	}
};
