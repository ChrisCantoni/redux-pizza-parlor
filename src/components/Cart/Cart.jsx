import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Cart = () => {

    const total = useSelector(store => store.total);

    return (
        <Button variant="contained" size="xl" endIcon={<ShoppingCart/>}>${total}</Button>
    )
}

export default Cart;