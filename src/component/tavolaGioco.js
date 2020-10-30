import react, {Component} from 'react';
import {Row} from 'reactstrap'
import Tavolo from './Tavolo';

class Gioco extends Component{
	constructor(props){
		super(props);
		this.state={
			griglia: Array(6).fill(Array(7).null),
			stepNum:0,
			xIsNext:true
		};
	}
	render(){
		return(
			<div>
				<Tavolo onClick={this.onClick}/>
			</div>
			
		);
	}


	onClick(i){

	}
}

export default Gioco;