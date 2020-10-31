import { Row, Col } from 'reactstrap';


function Tavolo(props){
	let tavolo=[];
	for(let i=0;i<7;i++){
		tavolo.push(
			<Col key={i}>
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
					<Row className="flex-nowrap no-gutters" key={i}><Cella onClick={props.onClick} valore={props.valori[i]}/></Row>
				);
			}
	return colonna;
}

function Cella(props) {
	let classname="f4square "+props.valore;
	return (
	<Col><button onClick={props.onClick} className={classname}></button></Col>
	);
}


export default Tavolo;