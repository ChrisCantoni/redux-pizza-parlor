import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';

const PizzaItem = (props) => {
    const dispatch = useDispatch();
    const addPizza = () => {
        console.log("Add pizza", props.pizza.price)
        const action = { type: 'ADD_PIZZA', payload: props.pizza};
        dispatch(action);
    }

    const removePizza = () => {
        console.log("Remove pizza", props.pizza.price)
        const action = { type: 'REMOVE_PIZZA', payload: props.pizza}
        dispatch(action);
    }
    
    return (
        <div className="pizzaCard">
            <Card sx={{ maxWidth: 275 }}>
                <CardMedia
                    sx={{height: 140}}
                    image="https://1.bp.blogspot.com/-QoPIEmEz9zY/YDkuGiH3iaI/AAAAAAAACEY/5h5B9AoRCt4hFho--NFEnQpsD5j0CtlogCLcBGAsYHQ/s1100/pizza.png"
                    title="pizza"/>
                <CardContent>
                    <Typography sx={{fontSize: 20}}>
                        {props.pizza.name}
                    </Typography>
                    <Typography variant="body1">
                        {props.pizza.description}
                    </Typography>
                    <Typography variant="h5">
                        ${props.pizza.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button onClick={addPizza}>Add to Order</button>
                    <button onClick={removePizza}>Remove from Order</button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PizzaItem;