import React from 'react';
import './Information.css'

const Information = (props) => {
    console.log(props)
    const {img,name,age,country,salary}=props.persons;
    return (
       <div className="col-md-4 mb-5 mt-5">
           <div className="card">
            <img src={img} class="card-img-top" alt="..."/>
             <div className="card-body">
              <h5 className="card-title">Name: {name}</h5>
              <h5 className="card-title">Age: {age}</h5>
              <h5 className="card-title">Country: {country}</h5>
              <h5 className="card-title">Salary: {salary}</h5>
       </div>
       <div class="card-footer">
      <button onClick={()=>props.handleButton(props.persons)}> <i class="fas fa-shopping-cart"></i> Submit</button>
    </div>
  </div>
       </div>
    );
};

export default Information;