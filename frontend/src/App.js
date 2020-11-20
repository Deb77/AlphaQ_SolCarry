import './App.css';
import React,{useState} from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home/home';
import restaurant from './components/restaurantinfo';
import Login from "./components/Login/login";

import GoogleMapsWrapper from './components/GoogleMapsWrapper';
import DriverPortal from './components/DriverPortal/DriverPortal';
import AssociateRegistration from './components/AssociateRegistration/AssociateRegistration';
export const UserRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
          <Component {...props} />
      }
    />
  );
};
const App = () => {
  const [mapStatus, setMapStatus]= useState(false);
  return (
    <Provider store={store}>
      <GoogleMapsWrapper setMapStatus={setMapStatus} />
      <Router>
        {/* <nav>
          NAV Here
        </nav> */}
        <Switch>
          <Route path='/driverPortal'>
            <DriverPortal mapStatus={mapStatus} />
          </Route>
          <Route path='/associateRegistration'>
            <AssociateRegistration mapStatus={mapStatus}/>
          </Route>
          <Route path='/' exact component={Home}>
          </Route>
          <Route path='/login' exact component={Login}>
          </Route>
          <UserRoute exact path="/restaurant/:restName" component={restaurant} />
          
        </Switch>
        {/* <footer>
          Footer Here

        </footer> */}
    </Router>
    </Provider>
    
  )
}

export default App
