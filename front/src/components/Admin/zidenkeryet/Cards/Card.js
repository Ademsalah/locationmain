import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Card.css' 
 

const Card = ({el,del}) => {
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
        <button onClick={()=>navigate(`/zidstadium/${el._id}`)} className='button7anena'   >updaty</button>
    
                <button className='button-close' onClick={() => del(el._id)}></button>
                </div> 
      </div>

  )
}

export default Card
