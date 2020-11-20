import './App.css';
import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home/home';
import restaurant from './components/restaurantcontent';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* <nav>
          NAV Here
        </nav> */}
        <Switch>
          <Route path='/' exact component={Home}>
          </Route>
          <Route exact path="/restaurant/:restName" component={restaurant} />
        </Switch>
        {/* <footer>
          Footer Here

        </footer> */}
    </Router>
    </Provider>
    
  )
}

export default App
