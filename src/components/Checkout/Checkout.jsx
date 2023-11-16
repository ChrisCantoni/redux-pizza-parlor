import React from 'react';
import './Checkout.css';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Checkout(){

    const dispatch = useDispatch();
    const history = useHistory();

    // order, total, customer is everything we need for checkout
    const order = useSelector(store => store.order);
    const total = useSelector(store => store.total);
    const customer = useSelector(store => store.customer);
    
    let customer_name = customer.customer_name;
    let street_address = customer.street_address;
    let city = customer.city;
    let zip = customer.zip;
    let pizzas = order;
    let type = "Pickup"

    let postdata = {
        customer_name,
        street_address,
        city,
        zip,
        total,
        type,
        pizzas
    }

    // POST order to server
    function handleSubmit() {
        axios.post('/api/order', postdata).then((response) => {
            console.log('POST order successful')
            // Clear Reducers
            const action = {type: 'CHECKOUT'}
            dispatch(action);
            // Send user to Select Pizza page
            history.push('/');
        }).catch((error) => {
            console.error('POST order failed', error);
            alert('Something went wrong!');
        })
    }

    return(
        <div>
            <h3>{customer.customer_name}</h3>
            <h4>{customer.street_address}</h4>
            <h4>{customer.city} {customer.zip}</h4>
            {JSON.stringify(customer)}
            <br/>
            {JSON.stringify(order)}
            <table>
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                {order.map((pizza) => {
                    return  <tbody>
                                <tr>
                                <td>{pizza.name}</td>  
                                <td>{pizza.price}</td> 
                                <td>{pizza.quantity}</td>
                                </tr>
                            </tbody>
                })}
            </table>
            <h3>Total: {total}</h3>
            <button onClick={handleSubmit}>Checkout</button>
        </div>
    )
}
export default Checkout;