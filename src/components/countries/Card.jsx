import React from 'react'
import './Card.css';

const Card = ({imgUrl,name,altUrl}) => {
  return (
    <div className='countryCard'>
    
        <img src={imgUrl} alt={altUrl}/>
        <h2> {name}</h2>
      
    </div>
  )
}

export default Card
