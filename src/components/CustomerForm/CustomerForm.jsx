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
import Swal from 'sweetalert2';

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
    if (type === '') {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have to select how to get your pizza!"
      });
    } else {
    console.log('customerInfo:', customerInfo);
    const action = { type: 'SET_CUSTOMER', payload: customerInfo};
    dispatch(action);
    clearCustomerFields();
    history.push('/checkout');
  }}

  const clearCustomerFields = () => {
    setCustomer('');
    setStreetAddress('');
    setCity('');
    setZip('');
  }

  return(
    <div className="customerForm">

      <form onSubmit={handleSubmit}>

        <br></br>
        <br></br>
        <br></br>
        <TextField  sx={{backgroundColor: 'white', minWidth: 500}} onChange={(event) => setCustomer(event.target.value)} 
                label= "Name"
                required variant= "outlined"
                placeholder="Name"
                value={customer} />
              <br /><br/>
        <TextField sx={{backgroundColor: 'white', minWidth: 500}}onChange={(event) => setStreetAddress(event.target.value)} 
                label= "Street Address"
                required variant= "outlined"
                placeholder="Street Address"
                value={streetAddress} />
                <br/><br/>
        <TextField 
          sx={{backgroundColor: 'white', minWidth: 250}} onChange={(event) => setCity(event.target.value)} 
          label= "City"
          required variant= "outlined"
          placeholder="City"
          value={city} />     
        <TextField 
          sx={{backgroundColor: 'white', minWidth: 250}} onChange={(event) => setZip(event.target.value)} 
          label= "Zip Code"
          required variant= "outlined"
          placeholder="Zip"
          value={zip} />
        <br></br>
        <br></br>
        <Button required variant="contained" type="submit">Next</Button>
        
      </form>  
      <div id="radio">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" >Pickup or Delivery</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={type}
            name="radio-buttons-group"
            sx={{color: 'white'}}
            onChange={handleRadioChange}>
            <FormControlLabel  id="pickup-order"  value="Pickup" control={<Radio sx={{color: '#FCBF49', '&.Mui-checked': {color: "#FCBF49"}}} />} label="Pickup" />
            <FormControlLabel  id="delivery-order" value="Delivery" control={<Radio sx={{color: '#FCBF49', '&.Mui-checked': {color: "#FCBF49"}}} />} label="Delivery" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  )
};

export default CustomerForm;