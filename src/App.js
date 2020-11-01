import './css/App.css';
import Forza4 from './component/Forza4/Forza4';
import Tris from './component/Tris/Tris';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="sito">
      <BrowserRouter>
        <h1>Giochi in React</h1>
        <ul className="header">
          <li key='h0'><Link to="/">Forza4</Link></li>
          <li key='h1'><Link to="/Tris">Tris</Link></li>
          
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/"> <Forza4/> </Route>
            <Route path="/Tris"> <Tris/> </Route>
            
          </Switch>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
