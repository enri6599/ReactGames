import './css/App.css';
import Forza4 from './component/Forza4';
import {Route, NavLink, HashRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <h1>Giochi in React</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Forza4}/>
            
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
