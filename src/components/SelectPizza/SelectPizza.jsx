import { useState, useEffect } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem';

const SelectPizza = () => {

    const [pizzaList, setPizzaList] = useState([]);

    const getPizzaList = () => {
        axios.get('/api/pizza').then((response) => {
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

        <div className="pizzaDisplay">
            {pizzaList.map((pizza) => {
                return <PizzaItem key={pizza.id} pizza={pizza} />
            })}
        </div>
    )
}

export default SelectPizza;