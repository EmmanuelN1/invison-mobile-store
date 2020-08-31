import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'; //do the same in the app.js
import {ProductProvider}from './Components/context/Context';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
 
 //the app is placed in the router because it helps the App accessible to all routes
 <ProductProvider>
     <Router>
        <App/>
     </Router>
 </ProductProvider>,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
