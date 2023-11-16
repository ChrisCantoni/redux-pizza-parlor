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
import Admin from '../Admin/Admin';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const totalOrders = useSelector(store => store.totalOrders);
  const dispatch = useDispatch();

  const getOrders = () =>{
    axios.get('/API/order').then((response) => {
      console.log(response.data);
      dispatch({
        type: "GET_ORDERS",
        payload: response.data
      })
    })
    .catch((error) => {
      console.error("Error in GET '/order' inside App()", error);
      alert("Error in GET '/order' inside App(). See console.");
    })
  }

  useEffect(() => {
    getOrders();
  },[])

  return (
    <div className='App'>
      <Header/>
        <Router>
          <nav>
            <ul>
              <li><Link to='/'>Select</Link></li>
              <li><Link to='/info'>Customer Form</Link></li>
              <li><Link to='/checkout'>Checkout</Link></li>
              <li><Link to='/admin'>Admin</Link></li>
            </ul>
          </nav>
          <Route exact path='/'><SelectPizza/></Route>
          <Route exact path='/info'><CustomerForm/></Route>
          <Route exact path='/checkout'><Checkout/></Route>
          <Route exact path='/admin'><Admin/></Route>
        </Router>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;