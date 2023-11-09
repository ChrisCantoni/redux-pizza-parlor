import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux'

function CustomerForm() {
    const [customer, setCustomer] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    
    const customerInfo = {
        customer: customer,
        streetAddress: streetAddress,
        city: city,
        zip: zip
      };
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('customerInfo:', customerInfo);
    const action = { type: 'CUSTOMER_NAME', payload: customerInfo};
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
        <div>
<form onSubmit={handleSubmit}>
            <input onChange={(event) => setCustomer(event.target.value)} 
                    placeholder="Name"
                    value={customer} />

            <input onChange={(event) => setStreetAddress(event.target.value)} 
                    placeholder="Street Address"
                    value={streetAddress} />

            <input onChange={(event) => setCity(event.target.value)} 
                    placeholder="City"
                    value={city} />

            <input onChange={(event) => setZip(event.target.value)} 
                    placeholder="Zip"
                    value={zip} />
            <button type="submit">Next</button>
        </form>
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