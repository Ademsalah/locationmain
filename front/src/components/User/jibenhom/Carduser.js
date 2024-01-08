import React from 'react'
import { useNavigate } from 'react-router-dom';
import './cartetna.css' 
 

const Carduser = ({el,del}) => {
    const navigate = useNavigate();

  return (
   
      <div className="box">
        <img src={el.postUrl} alt="" />
        <h3>{el.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?
        </p>
        <a  className="btn">
        {el.price} dt ||  {el.rating} 
        </a>
        <div  style={{display:"flex",justifyContent:"space-evenly"}}>
        <button  className='button7anena'   >reservi</button>
    
               
                </div> 
      </div>

  )
}

export default Carduser