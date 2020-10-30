import { Row, Col } from 'reactstrap';


function Tavolo(props){
	let tavolo=[];
	for(let i=0;i<7;i++){
		tavolo.push(
			<Col>
				<Colonna onClick={()=>props.onClick(i)} valori={props.griglia[i]}/>
			</Col>
		);
	}
	return <Row className="flex-nowrap no-gutters">{tavolo}</Row>;
}

function Colonna(props){
	let colonna=[];
			for(let i=5;i>=0;i--){
				colonna.push(
					<Row><Cella onClick={props.onClick} valore={props.valori[i]}/></Row>
				);
			}
	return colonna;
}

function Cella(props) {

	return (
	<Col><button onClick={props.onClick} className="square">{props.valore}</button></Col>
	);
}


export default Tavolo;