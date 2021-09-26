import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';


import './Person.css'

const Person = () => {
    const [person,setPerson] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setPerson(data))
        
    },[]);

    const handleButton = person =>{
        const newCart=[...cart,person]
        setCart(newCart)
    }
    return (
        <div className="row">
        <div className="col-md-9">
            <div className=" row">
               {
                   person.map(persons=> <Information persons={persons}
                    handleButton={handleButton}></Information>)
               }
            </div>

        </div>

      <div className="col-md-3">
          {
              <Cart cart={cart}></Cart>
          }

      </div>
    </div>
        
    );
};

export default Person;