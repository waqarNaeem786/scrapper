import React from 'react';
import {  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Front from './components/Front'
import Viewer from './components/Viewer'
function App() {
  return (
    <div className="App">      
      <Router>
        <Switch>
            <Route exact path='/' component={Front}/>
            <Route path='/viewer' component={Viewer}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
