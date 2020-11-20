import './App.css';
import React,{useState} from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home/home';
import restaurant from './components/restaurantcontent';
import Cart from './components/Cart';

import GoogleMapsWrapper from './components/GoogleMapsWrapper';
import DriverPortal from './components/DriverPortal/DriverPortal';
import AssociateRegistration from './components/AssociateRegistration/AssociateRegistration';


const App = () => {
  const [mapStatus, setMapStatus]= useState(false);
  const [items, setItems] = useState([{
    name: "Manchhurian",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    price: 400,
    quantity: 1,
  },
  {
    name: "Chicken 65",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    price: 40,
    quantity: 1,
  },
  {
    name: "Kebabs",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    price: 500,
    quantity: 1,
    }]);

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
          <Route exact path="/restaurant/:restName" component={restaurant} />
          <Route exact path="/cart">
            <Cart items={items} setItems={setItems} />
          </Route>
        </Switch>
        {/* <footer>
          Footer Here

        </footer> */}
    </Router>
    </Provider>
    
  )
}

export default App
