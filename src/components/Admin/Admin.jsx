import React from 'react';
import './Admin.css';
import { useSelector } from 'react-redux';

function Admin(){
    const totalOrders = useSelector(store => store.totalOrders);
    
    return(
        <>  <h2>Current Orders:</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Time Placed</th><th>Type</th><th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {totalOrders.map((order, index)=>
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>${order.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Admin;