import './App.css';
import React,{useState} from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home/home';
import Restaurant from './components/restaurantinfo';
import Login from "./components/Login/login";
import Cart from './components/Cart';

import GoogleMapsWrapper from './components/GoogleMapsWrapper';
import DriverPortal from './components/DriverPortal/DriverPortal';
import RestaurantPortal from './pages/RestaurantPortal/RestaurantPortal';
import AssociateRegistration from './components/AssociateRegistration/AssociateRegistration';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import DriverRegistration from './pages/DriverRegistration/DriverRegistration';
import Confirmation from './pages/Confirmation';


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
  const [items, setItems] = useState([]);
  const [businessDeails, setBusinessDeails]= useState(null);
  const [businessId, setbusinessId]= useState(null);

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
          <Route path='/restaurantPortal'>
            <RestaurantPortal />
          </Route>
          <Route path='/associateRegistration'>
            <AssociateRegistration mapStatus={mapStatus}/>
          </Route>
          <Route path='/userRegistration'>
            <UserRegistration />
          </Route>
          <Route path='/driverRegistration'>
            <DriverRegistration />
          </Route>
          <Route path='/' exact render={()=><Home mapStatus={mapStatus} setbusinessId={setbusinessId} setBusinessDeails={setBusinessDeails} />}>
          </Route>
          <Route path='/login' exact component={Login}>
          </Route>
          <Route exact path="/cart"
          render={()=>(
          <Cart items={items} setItems={setItems} mapStatus={mapStatus} businessDeails={businessDeails}/>)}
          />
          <Route exact path="/hooray" component={Confirmation} />
          <Route exact path="/Business/:restName" 
          render={()=><Restaurant setItems={setItems} businessId={businessId} businessDeails={businessDeails} />} />
          
        </Switch>
        {/* <footer>
          Footer Here

        </footer> */}
    </Router>
    </Provider>
    
  )
}

export default App
