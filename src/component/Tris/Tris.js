import {Component} from 'react';
import {Button} from 'reactstrap';
import "../../css/Tris.css";

function Square (props){
  const classes = "squareTris" + (props.selected? " selected" : "")
    return (
      <button className={classes} onClick={props.onClick}>
          {props.value}
      </button>
    );
}

class Board extends Component {

  renderSquare() {
      let table=[];
      for(let i=0;i<3;i++){
        let children=[];
        for(let j=0;j<3;j++){
          let squareNum=3*i+j;
          children.push(
              <Square
                key={j}
                value={this.props.current.squares[squareNum]} 
                onClick={()=>this.props.onClick(squareNum)}
                selected={
                  this.props.current.buttonclicked===squareNum || 
                  (this.props.winline?this.props.winline.some(el=>el===squareNum):false)}
              />);
        }
        table.push(<div key={i} className="board-row">{children}</div>);
      }
      return table;
  }

  render() {
    return (
        this.renderSquare()
    );
  }
}

class Tris extends Component {
  constructor(props){
    super(props);
    this.state={
      history: [{
        squares: Array(9).fill(null),
        buttonclicked:-1,
      }],
      stepNumber:0,
      xIsNext:true,

    };
  }
  
  handleClick(i){
    const history=this.state.history.slice(0, this.state.stepNumber + 1);
    const current=history[history.length-1];
    const squares = current.squares.slice();
    let winner=calculateWinner(squares)
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({
      history: history.concat({squares:squares, buttonclicked:i}),
      stepNumber:history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber:step,
      xIsNext:(step%2)===0
    })
  }


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    let winner = calculateWinner(current.squares);

    const moves = history.map((step,move) => {
      let [riga, colonna]=[Math.floor(step.buttonclicked/3)+1, step.buttonclicked%3+1]
      
      const desc = move ?
        'Vai alla mossa ' + move+' ('+ riga+' '+colonna+')':
        'Ricomincia la partita';
      return (
        <li key={move}>
          <Button color="primary" onClick={() => this.jumpTo(move)}>{desc}</Button>
        </li>
      );
    });

    let status;
    
    if (winner) {
      status = 'Vincitore: ' + winner.winner;
    } else if(this.state.stepNumber===9){
      status='Pareggio'
    }else{
      status = 'Tocca ad ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            current={current}
            onClick={(i)=>this.handleClick(i)}
            winline={winner?winner.winline:null}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner:squares[a], winline:lines[i]};
    }
  }
  return null;
}


export default Tris;
