import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../CustomerForm/CustomerForm.css';
function CustomerForm() {
    const [customer, setCustomer] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    
    const customerInfo = {
        customer_name: customer,
        street_address: streetAddress,
        city: city,
        zip: zip
      };
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('customerInfo:', customerInfo);
    const action = { type: 'SET_CUSTOMER', payload: customerInfo};
    dispatch(action);
    clearCustomerFields();
   }
    const clearCustomerFields = () => {
        setCustomer('');
        setStreetAddress('');
        setCity('');
        setZip('');
    }
    return(
        <body>
        <form onSubmit={handleSubmit}>
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
                </form>
        </body>
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