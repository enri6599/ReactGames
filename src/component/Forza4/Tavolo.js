import { Row, Col, Container} from 'reactstrap';

function CreaGioco(props){
	
	let tabella=[];
	for(let i=5; i>=0;i--){
		let colonne=[];
		
		for(let j=0;j<7;j++){
			colonne.push(
				<Col key={j}><Cella onClick={()=>props.onClick(j)} valore={props.griglia[j][i]}/></Col>
			);
		}
		tabella.push(<Row key={i} className="flex-nowrap no-gutters">{colonne}</Row>);
	}

	return(
		tabella
	);
}

function Cella(props) {
	let classname="f4square "+(props.valore?props.valore:"");

	return (
		<button onClick={props.onClick} className={classname}></button>
	);
}


export default CreaGioco;