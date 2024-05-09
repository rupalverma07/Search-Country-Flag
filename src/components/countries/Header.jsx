import { useState } from "react"
import React from 'react'
import './header.css'

const Header = ({applyFilter}) => {
    
    const[input,setInput] = useState('')

    const inputHandler = (e) =>{
        let searchValue = e.target.value;
        setInput(e.target.value);
        applyFilter(searchValue)
    }
  return (
    <div className="header">
      <input className="headerInput" type='text' value={input} onChange={inputHandler}/>
    </div>
  )
}

export default Header
