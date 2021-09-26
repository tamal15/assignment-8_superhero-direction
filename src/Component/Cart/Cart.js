import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
    
    // let total=0;
    // for(const store of cart){
    //     total=total+store.salary;
       
    // }
    // reduce 
    const totalReduce=(preTotal, CurrentTotal)=> preTotal+ CurrentTotal.salary
    const total=cart.reduce(totalReduce, 0)

    return (
        <div className="cart-data">
            <h4>Total Person:{props.cart.length}</h4>
            <h4>Total Salary:${total}</h4>
            <ul>
               {
                   cart.map(onePerson =><li className="onePerson">{onePerson.name}</li>)
               }
            </ul>
        </div>
    );
};

export default Cart;