import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



class Calculate extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	calculateValue() {
		console.log(this.props.val1, this.props.action, this.props.val2)
		var acc = "";
		if (this.props.val1 && this.props.action && this.props.val2) {
			acc += this.props.val1 + this.props.action + this.props.val2;
			console.log(acc)
			return eval(acc);
		} else {
			return (
				<div>Hello World! </div>
			)
		}

	}

	render() {
		return (
			<div>
				<div className="result">Result: {this.calculateValue()}</div>
			</div>
		)
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val1: 0,
			val2: 0,
			action: null
		}
		this.handleVal1 = this.handleVal1.bind(this);
		this.handleAction = this.handleAction.bind(this);
		this.handleVal2 = this.handleVal2.bind(this);
	}

	handleVal1(e) {
		//console.log("Val1 ", e.target.value)
		this.setState({
			val1: e.target.value
		})
	}

	handleAction(e) {
		//console.log("Action ", e.target.value)
		this.setState({
			action: e.target.value
		})
	}

	handleVal2(e) {
		//	console.log("Val2", e.target.value)
		this.setState({
			val2: e.target.value
		})
	}

	render() {
		return (
			<div className='mainFrame'>
				<div className="description">Calculator	</div>
				<div className="val1">
					<label > Value 1
						<input type="number" onChange={this.handleVal1} />
					</label>
				</div>
				<div className="action">
					<label > Action
						<input type="text" onChange={this.handleAction} list="actions" />
						<datalist id="actions" >
							<option value="+" />
							<option value="-" />
							<option value="*" />
							<option value="/" />
						</datalist>
					</label>
				</div>
				<div className="val2">
					<label > Value 2
						<input type="number" onChange={this.handleVal2} />
					</label>
				</div>

				<div>{
					<Calculate
						val1={this.state.val1}
						action={this.state.action}
						val2={this.state.val2}
					/>}

				</div>
			</div>
		)
	}

}



ReactDOM.render(<Calculator />, document.getElementById('root'));