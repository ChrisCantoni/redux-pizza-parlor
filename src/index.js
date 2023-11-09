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
const orders = (state = [], action) => {
    return state;
}

const total = (state = 0.00, action) => {
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
        orders,
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
