// create class Header
class Header extends React.Component{
	constructor() {
		super();
		// membuat objek state
		this.state = {
			angka1:"0",
			angka2:"0",
			result:"0"
		};
	}
	
	// Set values
	setValue1 = (val1) => {this.setState({angka1: ""+val1}); }
	setValue2 = (val2) => {this.setState({angka2: ""+val2}); }
	
	// Arithmetic operations such as addition, subtraction, division, multiplication
	funcMultiply = (va1) => {
		var hasil = parseInt(this.state.angka1) * parseInt(this.state.angka2);
		this.setState({result: ""+hasil });
	}
	
	funcDivide = (va1) => {
		var hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
		this.setState({result: ""+hasil});
	}
	
	funcSubtract = (va1) => {
		var hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
		this.setState({result: ""+hasil});
	}
	
	funcAdd = (va1) => {
		var hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
		this.setState({result: ""+hasil});
	}
	
	render() {
		return(
		<div>
			<h1>Simple Calculator Reactjs</h1>
			input 1:<input value={this.state.angka1} onChange={ (e) =>{this.setValue1(e.target.value)}} />
			<br/>
			input 2:<input value={this.state.angka2} onChange={ (e) =>{this.setValue2(e.target.value)}} />
			<h1>Result:{this.state.result}</h1>
			<button onClick={this.funcMultiply}>Multiply</button>
			<button onClick={this.funcDivide}>Divide</button>
			<button onClick={this.funcSubtract}>Subtract</button>
			<button onClick={this.funcAdd}>Addition</button>
		</div>
		);
	}
}

// render komponen ke RealDOM
ReactDOM.render (<Header />, document.getElementById("app"));