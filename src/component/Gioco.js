import /*react,*/ {Component} from 'react';
//import {Row} from 'reactstrap'
import Tavolo from './Tavolo';
import checkWin from './controlloVittoria';

class Gioco extends Component{
	constructor(props){
		super(props);

		this.state={
			history : [{
				griglia : Array(7).fill(""),
				lastInserted: {riga: null, colonna:null}
			}],
			stepNum : 0,
			xTurn	: true,/*X = rosso - O = giallo*/
		};


		this.handleClick=this.handleClick.bind(this);
		//this.modStep=this.modStep.bind(this);
	}
	
	handleClick(i){
		const stepNum=this.state.stepNum;
		const history=this.state.history.slice(0, stepNum + 1);
		
		const game=history[history.length-1];
		const griglia=game.griglia.slice();

		if(griglia[i].length>=6 || (stepNum>6?checkWin(game): false)){
			return;
		}

		let lastInserted={riga : griglia[i].length, colonna : i}
		let colonna=griglia[i].concat(this.state.xTurn? "X":"O");

		let grid= griglia.slice(0,i).concat(colonna, griglia.slice(i+1, griglia.length));

		this.setState({
			history : history.concat({ griglia:grid, lastInserted:lastInserted}),
			stepNum : stepNum + 1,
			xTurn 	: !this.state.xTurn
		});
	}

	modStep(num){
		if(Math.abs(num)!==1) return;
		this.setState({
			stepNum : this.state.stepNum+num,
			xTurn	: !this.state.xTurn
		});
	}
	

	render(){
		const stepNum=this.state.stepNum;
		const history=this.state.history;
		let stato;
		if(stepNum > 6 && checkWin(history[stepNum]))
			stato= "Ha vinto il player: "+ (!this.state.xTurn? "Rosso":"Giallo")
		else if(stepNum >= 42)
			stato = "Pareggio";
		else
			stato= "Tocca al player: " + (this.state.xTurn? "Rosso":"Giallo");
		
		let turno="Turno: "+stepNum;

		let btnBackDis=stepNum===0;
		let btnFrontDis=stepNum===history.length-1


		return(
			<div className="game">
				
				<Tavolo onClick={this.handleClick} griglia={history[stepNum].griglia}/>
				<div className="game-info">
					<div>{turno}</div>
					<div >{stato}</div>
					<div>
						<button disabled={btnBackDis} onClick={()=>this.modStep(-1)}>{"<--"}</button>
						<span> </span>
						<button disabled={btnFrontDis} onClick={()=>this.modStep(1)}>{"-->"}</button>
					</div>
				</div>
			</div>
			
		);
	}

	
}







export default Gioco;