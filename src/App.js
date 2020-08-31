import React from 'react';
import {Switch, Route} from 'react-router-dom'; //do the same in the index js;   N:B this has to be installed before it can be used 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';
import ProductListing from './Components/ProductListing/ProductListing';
import Default from './Components/Default/Default';
import Modal from './Components/modal/Modal';


class App extends React.Component{
  render(){
    return(
        <React.Fragment>
             <Navbar/>

             <Switch>
                <Route exact path="/" component={ProductListing}/> {/* in the path, there's only "/" there because it links to the home page; this is because this is our default page */}
                <Route path="/details" component={Details}/>
                <Route path="/cart" component={Cart}/>
                <Route component={Default}/>  {/*the path is removed because this pages comes up when a page isn't found  */}
             </Switch>
             <Modal/> 
      
        </React.Fragment>
    );
  }
}

export default App;
