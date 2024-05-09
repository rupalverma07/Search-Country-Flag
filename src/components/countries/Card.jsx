import React from 'react'
import './Card.css';

const Card = ({imgUrl,name,altUrl}) => {
  return (
    <div className='countryCard'>
        <img src={imgUrl} alt={altUrl}/>
        <h5> {name}</h5>
      
    </div>
  )
}

export default Card
