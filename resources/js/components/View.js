import React, { useState, useEffect } from "react";
import axios from "../axios";
import {Link} from 'react-router-dom'

const View = props => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  
  

  useEffect(() => {
    axios
       .get(`/api/${props.match.params.id}`)
      .then(res => [
        setName(res.data.name),
        setPosition(res.data.position),
       
      ])
      .catch(err => console.log(err));
  }, [props]);

  

  return (
    <div className='dummy' >
      {
      <div  >
     
      <h2>{name}</h2>
   
      <p>{position}</p>
      
   
      </div>
}     
      <Link to='/' ><p>Back</p></Link>
    </div>
  );
}

export default View;