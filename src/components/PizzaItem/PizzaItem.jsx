import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const PizzaItem = (props) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const addPizza = () => {
        console.log("Add pizza", props.pizza.price)
        setQuantity(1);
        const action = { type: 'ADD_PIZZA', payload: props.pizza};
        dispatch(action);
    }

    const removePizza = () => {
        console.log("Remove pizza", props.pizza.price)
        setQuantity(0);
        const action = { type: 'REMOVE_PIZZA', payload: props.pizza}
        dispatch(action);
    }

    return (
        <div className="pizzaCard">
            <Card className="cardContent" sx={{ backgroundColor:"#003049", maxWidth: 300, maxHeight: 425, minHeight: 425, color: "#FFFFFF", border: "1px solid white" }}>
                <CardMedia
                    sx={{height: 140}}
                    image={props.pizza.image_path}
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
                <CardActions className="pizzaButton">
                    {quantity == 0 ? <Button variant="contained" className="add-btn" onClick={addPizza}>Add to Order</Button> : <Button variant="contained" sx={{backgroundColor:"red", ":hover": {backgroundColor: 'darkred'}}} className="remove-btn" onClick={removePizza}>Remove from Order</Button>}
                </CardActions>
            </Card>
        </div>
    )
}

export default PizzaItem;