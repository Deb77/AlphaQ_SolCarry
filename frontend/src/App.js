import './App.css';
import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './index';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          NAV Here
        </nav>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <footer>
          Footer Here
        </footer>
    </Router>
    </Provider>
    
  )
}

export default App
