import { useState, useEffect } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const SelectPizza = () => {

const [pizzaList, setPizzaList] = useState([]);

const getPizzaList = () => {
    axios.get('/api/pizza').then((response) => {
        console.log(response.data);
        setPizzaList(response.data)
    }).catch((error) => {
        console.log('GET /pizza error', error);
        alert('Something went wrong fetching pizzas');
    })
}

useEffect(() => {
    getPizzaList();
}, [])



    return (
        <div>
            <Button variant="contained" component={Link} to="/info">Next</Button>
            <div className="pizzaDisplay">
            
            {pizzaList.map((pizza) => {
                return <PizzaItem key={pizza.id} pizza={pizza} />
            })}
            </div>
        </div>
    )
}

export default SelectPizza;