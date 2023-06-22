import './App.css';
import axios from 'axios';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';
import {Route, useLocation} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create/Create';


axios.defaults.baseURL = 'https://foodpi-kimnicolas-production.up.railway.app';

function App() {
 const location = useLocation()
  return (
    <div >
      {location.pathname !== "/" && <Navbar/>}
      <Route exact path='/'>
      <Landing/>
      </Route>
      <Route exact path='/home'>
      <Home/> 
      </Route>
      <Route exact path='/create'>
      <Create/> 
      </Route>
      <Route exact path='/recipes/:id'>
      <Detail/> 
      </Route>
  
    </div>
  );
}

export default App;
