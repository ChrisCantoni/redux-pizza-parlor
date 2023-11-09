import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';

function App() {

  return (
    <div className='App'>
      <Header/> 
      <br></br>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
