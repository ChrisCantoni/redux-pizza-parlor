import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

// const pizzaList = (state = [], action) => {
//     return state;
// }
const order = (state = [], action) => {
    
    if(action.type === "ADD_PIZZA"){
        let copy = state;
        let newPizza = action.payload.pizza;
        for (let item in copy){
            if (item.id == newPizza.id){
                item.quantity += 1;
                return copy;
            }
        }
        newPizza.quantity = 1;
        copy.push(newPizza);
        return copy;
    }
    else if(action.type === "REMOVE_PIZZA"){
        let copy = state;
        let newPizza = action.payload.pizza;
        let idx = 0;
        for (let item in copy){
            if (item.id == newPizza.id){
                item.quantity -= 1;
                if (item.quantity == 0){
                    copy.splice(idx,1)
                }
                return copy;
            }
            idx += 1;
        }
    }
    return state;
}

const total = (state = 0.00, action) => {
    if (action.type === "ADD_PIZZA"){
        return state + action.payload.price;
    }
    else if (action.type === "REMOVE_PIZZA"){
        return state - action.payload.price;
    }
    return state;
}

const customer = (state = {}, action) => {
    if (action.type === "SET_CUSTOMER"){
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        // pizzaList,
        order,
        total,
        customer
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
