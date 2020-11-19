import './App.css';
import React,{useState} from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GoogleMapsWrapper from './components/GoogleMapsWrapper';
import DriverPortal from './components/DriverPortal/DriverPortal';

const App = () => {
  const [mapStatus, setMapStatus]= useState(false);
  return (
    <Provider store={store}>
      <GoogleMapsWrapper setMapStatus={setMapStatus} />
      <Router>
        <nav>
          NAV Here
        </nav>
        <Switch>
          <Route path='/' exact>
            <p style={{fontFamily: 'weasthood', fontSize: '48px'}}> HEYYYYYYYYYYY </p>
          </Route>
          <Route path='/driverPortal'>
            <DriverPortal mapStatus={mapStatus} />
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
