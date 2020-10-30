import /*react,*/ {Component} from 'react';
//import {Row} from 'reactstrap'
import Tavolo from './Tavolo';

class Gioco extends Component{
	constructor(props){
		let vettore=[];
		super(props);

		for (let i=0;i<7;i++){
			vettore.push([]);
		}

		this.state={
			griglia: vettore,
			stepNum:0,
			xIsNext:true
		};


		this.handleClick=this.handleClick.bind(this);
		console.log(this.state.griglia);
	}
	
	handleClick(i){
		
		const griglia=this.state.griglia.slice();
		//console.log(this.state);
		if(griglia[i].length>=6)
			return;
		griglia[i].push(this.state.xIsNext? "X":"O");
		
		this.setState({
			griglia : griglia,
			xIsNext: !this.state.xIsNext
		});
	}


	render(){
		return(
			<div>
				<Tavolo onClick={this.handleClick} griglia={this.state.griglia}/>
			</div>
			
		);
	}


	
}

export default Gioco;