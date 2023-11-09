import React from 'react';
import axios from 'axios';
import './App.css';
import Footer from '../Footer/Footer.jsx';
import '../Footer/Footer.css'
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
 
 
 
 <Footer />
    </div>
  );
}

export default App;
