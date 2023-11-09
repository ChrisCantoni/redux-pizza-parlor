import { useState, useEffect } from 'react';
import axios from 'axios';

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
            {JSON.stringify(pizzaList)}
        </div>
    )
}

export default SelectPizza;