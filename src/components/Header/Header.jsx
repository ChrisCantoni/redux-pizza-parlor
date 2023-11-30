import React from 'react';
import './Header.css';
import Cart from '../Cart/Cart.jsx';
import Button from '@mui/material/Button';
import { useHistory, useLocation } from 'react-router-dom';

function Header () {
    const history = useHistory();
    const location = useLocation();

    const handleNextClick = () => {
        if (location.pathname == '/'){
            history.push('/info');
        }
        else if (location.pathname == '/info'){
            history.push('/checkout');
        }
    } 

    const handleBackClick = () => {
        if (location.pathname == '/info'){
            history.push('/');
        }
        else if (location.pathname == '/checkout'){
            history.push('/info');
        }
    }

    const handleOrderPizza = () => {
        history.push('/');
    }

    if (location.pathname == '/'){
        return(
            <div id='header-div'>
                <img id="logo" src='images/prime_pizza.jpg' alt="three happily-married men holding a delicious large pizza"/>
                <h1 id='title'>Prime Pizza</h1>
                <Button
                    sx={{
                        gridArea:'2/7/3/9',
                        fontSize:'3ch',
                        margin:'3px',
                        border:'1px solid white'
                    }} 
                    id="header-next-btn"
                    onClick={handleNextClick}
                    variant="contained"
                >Next</Button>
                <Cart />
                <h5 id='subtitle'>We're not married to each other, but we're all married to pizza!</h5>
            </div>
        )
    }
    else if (location.pathname == '/info'){
        return(
            <div id='header-div'>
                <img id="logo" src='images/prime_pizza.jpg' alt="pizza logo"/>
                <h1 id='title'>Prime Pizza</h1>
                <Button 
                    sx={{
                        gridArea:'2/7/3/8',
                        fontSize:'2ch',
                        margin:'3px',
                        border:'1px solid white' 
                    }}
                    id="header-back-btn"
                    onClick={handleBackClick}
                    variant="contained"
                >Back</Button>
                <Button
                    sx={{
                        gridArea:'2/8/3/9',
                        fontSize:'2ch',
                        margin:'3px',
                        border:'1px solid white'
                    }} 
                    id="header-next-btn"
                    onClick={handleNextClick}
                    variant="contained"
                >Next</Button>
                <Cart />
                <h6 id='subtitle'>Pizza is our PRIME directive...</h6>
            </div>
        )
    }
    else if (location.pathname == '/checkout'){
        return(
            <div id='header-div'>
                <img id="logo" src='images/prime_pizza.jpg' alt="pizza logo"/>
                <h1 id='title'>Prime Pizza</h1>
                <Button 
                    sx={{
                        gridArea:'2/7/3/9',
                        fontSize:'3ch',
                        margin:'3px',
                        border:'1px solid white' 
                    }}
                    id="header-back-btn"
                    onClick={handleBackClick}
                    variant="contained"
                >Back</Button>
                <Cart />
                <h6 id='subtitle'>Pizza is our PRIME directive...</h6>
            </div>
        )
    }
    else if (location.pathname == '/admin'){
        return(
            <div id='header-div'>
                <img id="logo" src='images/prime_pizza.jpg' alt="pizza logo"/>
                <h1 id='title'>Prime Pizza</h1>
                <Button
                    sx={{
                        gridArea:'2/7/3/9',
                        fontSize:'2ch',
                        margin:'3px',
                        border:'1px solid white'
                    }} 
                    id="header-next-btn"
                    onClick={handleOrderPizza}
                    variant="contained"
                >Order Pizza!</Button>
                <Cart />
                <h6 id='subtitle'>Pizza is our PRIME directive...</h6>
            </div>
        )
    }
    else {
        return(
            <div id='header-div'>
                <img id="logo" src='images/prime_pizza.jpg' alt="pizza logo"/>
                <h1 id='title'>Prime Pizza</h1>
                <Cart />
                <h6 id='subtitle'>Pizza is our PRIME directive...</h6>
            </div>
        )
    }
    
}

export default Header;