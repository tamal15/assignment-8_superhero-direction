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
            <h6>count:{props.cart.length}</h6>
            <h5>total:{total.toFixed(2)}</h5>
            <ul>
               {
                   cart.map(onePerson =><li>{onePerson.name}</li>)
               }
            </ul>
        </div>
    );
};

export default Cart;