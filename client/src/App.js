
import './css/App.css';
import './css/media.css';
import Home from './components/Home';
import Navigation from './components/Navigation'
import Menu from './components/Menu'
import Order from './components/Order'
import About from './components/About';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Pizza from './components/MenuComponents/Pizza';
import Sides from './components/MenuComponents/Sides';
import Desserts from './components/MenuComponents/Desserts';
import Drinks from './components/MenuComponents/Drinks'
import Contact from './components/Contact';
import Signup from './components/Signup';
import History from './components/History'
import WrongU from './components/WrongU';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Navigation}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/' component={Menu}></Route>
        <Route exact path='/' component={Order}></Route>
        <Route exact path='/' component={About}></Route>
        <Route exact path='/' component={Contact}></Route>
        <Route path='/pizza' component={Pizza}></Route>
        <Route path='/sides' component={Sides}></Route>
        <Route path='/desserts' component={Desserts}></Route>
        <Route path='/drinks' component={Drinks}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/history' component={History}></Route>
        <Route path='/email-used' component={WrongU}></Route>
      </div>
    </Router>
  );
}

export default App;
