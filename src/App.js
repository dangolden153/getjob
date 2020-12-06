import logo from './logo.svg';
import './App.css';

import Forms from './component/form-input/form-input'
import Home from './component/home/home'
import {Switch ,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    

      <Switch>

      <Route path='/' exact component={Home} />

    <Route path='/form' component={Forms} />

    </Switch>

  
    </div>
  );
}

export default App;
