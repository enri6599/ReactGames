import { Component } from 'react';
import { Row, Col } from 'reactstrap';


function Tavolo(props){
	let tavolo=[];
	for(let i=0;i<7;i++){
		tavolo.push(
			<Col>
				<Colonna onClick={()=>props.onclick(i)}/>
			</Col>
		);
	}
	return <Row className="flex-nowrap no-gutters">{tavolo}</Row>;
}

function Colonna(){
	let colonna=[];
			for(let i=0;i<6;i++){
				colonna.push(
					<Row><Cella/></Row>
				);
			}
	return colonna;
}

function Cella(props) {
	return (
		<Col><button className="square"></button></Col>
	);
}


export default Tavolo;