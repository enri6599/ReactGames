import /*react,*/ {Component} from 'react';
//import {Row} from 'reactstrap'
import Tavolo from './Tavolo';
import checkWin from './controlloVittoria';

class Gioco extends Component{
	constructor(props){
		let vettore=[];
		super(props);

		for (let i=0;i<7;i++)
			vettore.push([]);

		this.state={
			history: [{
				griglia:vettore, 
				lastInserted: {riga: null, colonna:null}
			}],
			stepNum:0,
			xTurn:true,/*X = rosso - O = giallo*/
		};


		this.handleClick=this.handleClick.bind(this);
	}
	
	


	render(){
		let stato;
		if(this.state.stepNum > 6 && checkWin(this.state.history[this.state.history.length-1]))
			stato= "Ha vinto il player: "+ (!this.state.xTurn? "Rosso":"Giallo")
		else if(this.state.stepNum >= 42)
			stato = "Pareggio";
		else
			stato= "Tocca al player: " + (this.state.xTurn? "Rosso":"Giallo");

		
		return(
			<div>
				<div>{stato}</div>
				<Tavolo onClick={this.handleClick} griglia={this.state.history[this.state.history.length-1].griglia}/>
				
			</div>
			
		);
	}

	handleClick(i){
		const history=this.state.history.slice();

		const game=history[history.length-1];
		const griglia=game.griglia.slice();

		if(griglia[i].length>=6 || (this.state.stepNum>6?checkWin(game): false)){
			return;
		}
			
		let lastInserted={riga:griglia[i].length, colonna:i}
		griglia[i].push(this.state.xTurn? "X":"O");
		
		this.setState({
			history : history.concat({ griglia:griglia, lastInserted:lastInserted}),
			stepNum : this.state.stepNum+1,
			xTurn : !this.state.xTurn,
		});
		

	}
}







export default Gioco;