import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';

function App() {

  return (
    <div className='App'>
      <Header/>
        <Router>
          <nav>
            <ul>
              <li><Link to='/'>Select</Link></li>
              <li><Link to='/info'>Customer Form</Link></li>
              <li><Link to='/checkout'>Checkout</Link></li>
            </ul>
          </nav>
          <Route exact path='/'><SelectPizza/></Route>
          <Route exact path='/info'><CustomerForm/></Route>
          <Route exact path='/checkout'><Checkout/></Route>
        </Router>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;