import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Cart = () => {

    const total = useSelector(store => store.total);

    return (
        <Button 
            id="Cart"
            variant="contained"
            size="xl"
            component={Link}
            to='/info'
            endIcon={<ShoppingCart id="cart-icon"/>}
        >${total}</Button>
    )
}

export default Cart;