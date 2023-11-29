import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../CustomerForm/CustomerForm.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function CustomerForm() {
    const [customer, setCustomer] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType]= useState('');
    const customerInfo = {
        customer_name: customer,
        street_address: streetAddress,
        city: city,
        zip: zip,
        type: type
      };
const dispatch = useDispatch();
const history = useHistory();
function handleRadioChange(e) {
    setType(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('customerInfo:', customerInfo);
    const action = { type: 'SET_CUSTOMER', payload: customerInfo};
    dispatch(action);
    clearCustomerFields();
    history.push('/checkout');
    
   }
    const clearCustomerFields = () => {
        setCustomer('');
        setStreetAddress('');
        setCity('');
        setZip('');
    }

    
      
    return(
        <div>

<form onSubmit={handleSubmit}>

<br></br>
             <br></br>
             <br></br>
            <TextField onChange={(event) => setCustomer(event.target.value)} 
                    placeholder="Name"
                    value={customer} />
                  <br/>
            <TextField onChange={(event) => setStreetAddress(event.target.value)} 
                    placeholder="Street Address"
                    value={streetAddress} />
                     <br/>
            <TextField onChange={(event) => setCity(event.target.value)} 
                    placeholder="City"
                    value={city} />
                     <br/>
            <TextField onChange={(event) => setZip(event.target.value)} 
                    placeholder="Zip"
                    value={zip} />
                    <br/>
            <Button required variant="contained" type="submit">Next</Button>
        {/* <br></br>
            <input type="radio" id="pickup" name="pickup" value="Pickup"></input>
            <label for="pickup">Pickup</label>
         <br></br>
            <input type="radio" id="delivery" name="delivery" value="Delivery"></input>
            <label for="delivery">Delivery</label> */}
             
            
    </form>  
        <div id="radio">
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Pickup or Delivery</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue={type}
    name="radio-buttons-group"

    onChange={handleRadioChange}
  >
    <FormControlLabel  id="pickup-order" value="pickup" control={<Radio />} label="Pickup" />
    <FormControlLabel  id="delivery-order" value="delivery" control={<Radio />} label="Delivery" />
  </RadioGroup>
</FormControl>
</div>
        </div>
    )
};

export default CustomerForm;

// const addCustomers = () => {
        
      
    //     axios({
    //         method: 'POST',
    //         url: '/info',
    //         data: {
    //             customer:  "customer_name",
    //             streetAddress: "street_address",
    //             city: "city",
    //             zip: "zip"
    //         }
    //     }).then((response) => {
    //         console.log(response);
    //         // navigate to student list using use history
    //         // history.push('/customer');
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    // if(order of delivery) = 'delivery'
    // return( 'delivery' )
    // console.log(order)
    // else if (order of delivery) = 'pickup'
    // return('pickup')