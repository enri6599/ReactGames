import './css/App.css';
import Forza4 from './component/Forza4/Forza4';
import Tris from './component/Tris/Tris';
import {HashRouter, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="sito">
      <HashRouter>
        <h1>Giochi in React</h1>
        <ul className="header">
          <li key='h0'><Link to="/">Forza4</Link></li>
          <li key='h1'><Link to="/Tris">Tris</Link></li>
          
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/" component={()=><Forza4/>} />
            <Route path="/Tris"  component={()=><Tris/>} />
            
          </Switch>
          
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
