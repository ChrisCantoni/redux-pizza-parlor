import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {Link, useHistory} from 'react-router-dom';

import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';


const Cart = () => {

    const history = useHistory();
    const total = useSelector(store => store.total);

    const handleClick = () => {
        history.push('/info');
    }

    return (
        <Button id="Cart" variant="contained" size="xl" endIcon={<ShoppingCart id="cart-icon"/>}>${total}</Button>
        
    )
}

export default Cart;