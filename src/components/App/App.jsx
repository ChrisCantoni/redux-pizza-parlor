import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Cart from '../Cart/Cart';
import SelectPizza from '../SelectPizza/SelectPizza';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
    
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <SelectPizza/>
      <Footer />
    </div>
  );
}

export default App;