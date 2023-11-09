import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.jsx';
import '../Footer/Footer.css'
import SelectPizza from '../SelectPizza/SelectPizza';



function App() {

  return (
    <div className='App'>
      <Header/> 
      <br></br>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <SelectPizza/>
      <Footer />
    </div>
  );
}

export default App;