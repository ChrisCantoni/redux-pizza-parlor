import React from 'react';
import './Header.css';
import Cart from '../Cart/Cart.jsx';

function Header () {
    return(
        <div id='header-div'>
            <h1 id='title'>Prime Pizza</h1>
            <Cart />
            <h6 id='subtitle'>Pizza is our PRIME directive...</h6>
        </div>
    )
}

export default Header;