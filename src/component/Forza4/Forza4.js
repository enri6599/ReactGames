import '../../css/Forza4.css';
import {Component} from 'react';
import {Button, Row, Col} from 'reactstrap';
import checkWin from './controlloVittoria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight, faRedo} from '@fortawesome/free-solid-svg-icons';
import CreaGioco from './Tavolo';


class Forza4 extends Component{
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

	ricomincia(){
		this.setState({
			history : [{
				griglia : Array(7).fill(""),
				lastInserted: {riga: null, colonna:null}
			}],
			stepNum : 0,
			xTurn	: true,/*X = rosso - O = giallo*/
		})
	}
	

	render(){
		const stepNum=this.state.stepNum;
		const history=this.state.history;
		let stato;
		if(stepNum > 6 && checkWin(history[stepNum]))
			stato= " Ha vinto il "+ (!this.state.xTurn? "Rosso":"Giallo")
		else if(stepNum >= 42)
			stato = " Pareggio";
		else
			stato= " Tocca al " + (this.state.xTurn? "Rosso":"Giallo");
		
		let turno=" Turno: "+stepNum;

		let btnBackDis=stepNum===0;
		let btnFrontDis=stepNum===history.length-1


		return(
			<div>
				<Row className="no-gutters">
					<Col >
						<Row className="d-block no-gutters history">
							<Button className="d-inline" color="primary" disabled={btnBackDis} onClick={()=>this.modStep(-1)}><FontAwesomeIcon icon={faArrowLeft}/></Button>	
							<Button className="d-inline" color="primary" disabled={btnFrontDis} onClick={()=>this.modStep(1)} ><FontAwesomeIcon icon={faArrowRight}/></Button>
							<Button className="d-inline" color="primary" onClick={()=>this.ricomincia()}><FontAwesomeIcon icon={faRedo}/></Button>
						</Row>
						<Row className="justify-content-center no-gutters">{turno}</Row>
						<Row className="justify-content-center no-gutters">{stato}</Row>
					</Col>
				</Row>
				<Row className="no-gutters">
					<Col className="p-1 flex-grow-0 mx-auto">
						<CreaGioco onClick={(i)=>this.handleClick(i)} griglia={history[stepNum].griglia}/>
					</Col>
					
				</Row>
			</div>
		);
	}

	
}







export default Forza4;