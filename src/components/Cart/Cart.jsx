import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Cart = () => {

    const total = useSelector(store => store.total);

    return (
        <Button id="Cart" variant="contained" size="xl" endIcon={<ShoppingCart id="cart-icon"/>}>${total}</Button>
    )
}

export default Cart;