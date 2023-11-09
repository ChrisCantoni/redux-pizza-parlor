import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.jsx';
import '../Footer/Footer.css'
import SelectPizza from '../SelectPizza/SelectPizza';



function App() {

  // const [pizzaList, setPizzaList] = useState([]);

  // const getPizzaList = () => {
  //   axios.get('/api/pizza').then((response) => {
  //       console.log(response.data);
  //       setPizzaList(response.data)
  //   }).catch((error) => {
  //       console.log('GET /pizza error', error);
  //       alert('Something went wrong fetching pizzas');
  //   })
  // }

  // useEffect(()=> {
  //   getPizzaList()
  // }, []);

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
