import React from 'react';
import './Information.css'

const Information = (props) => {
    console.log(props)
    const {img,name,age,country,salary,educational}=props.persons;
    return (
       <div className="col-md-4 mb-5 mt-5 col-sm-12 ">
           <div className="card">
            <img src={img} class="card-img-top" alt="..."/>
             <div className="card-body">
              <h5 className="card-title">Name: {name}</h5>
              <h5 className="card-title">Age: {age}</h5>
              <h5 className="card-title">Country: {country}</h5>
              <h5 className="card-title">Salary: ${salary}</h5>
              <h6 className="card-title">Education: {educational}</h6>
              
       </div>
       <div class="card-footer">
      <button className="button btn-dark" onClick={()=>props.handleButton(props.persons)}> <i class="fas fa-arrow-circle-right"></i> Add To Cart</button>
      <h4><i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i></h4>
    </div>
  </div>
       </div>
    );
};

export default Information;