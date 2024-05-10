import React, { useEffect,useState } from 'react'
import Card from './Card'
import './Country.css';
import Header from './Header';


const Country = () => {
    const[country,setCountry] = useState([]);
    const[searchData,setSearchData] = useState([])
    const[input,setInput] = useState('')

    const inputHandler = (e) =>{
        // let searchValue = e.target.value;
        setInput(e.target.value);
        // applyFilter(searchValue)
    }
    let filterData = country.filter(items=>items.name.common.toLowerCase().includes(input.toLowerCase()))
  const getFlagData = async() =>{
    try {
        let result = await fetch('https://restcountries.com/v3.1/all')
       let data = await result.json()
       console.log(data);
       setCountry(data);
        
    } catch (error) {
        console.log(error)
    }
   
    }

    const applyFilter = (childValue) =>{
      const flagData = JSON.parse(JSON.stringify(country))
      childValue = childValue.trim()
      if(childValue !== ''){
        let filterData = flagData.filter(items=>items.name.common.toLowerCase().includes(childValue.toLowerCase()))
        setSearchData(filterData)
      }else{
        setSearchData([])
      }
        if(searchData.length>0){
          setCountry(searchData)
        }else{
          setCountry(country)
        }

    }
    // useEffect(() =>{
    //   applyFilter(input)
    // },[input])    

    useEffect(()=>{
        getFlagData()
        
    },[])
  return (
    <>
    {/* <div>
    <Header applyFilter={HeaderData}/>
    </div> */}
     <div className="header">
      <input className="headerInput" type='text' value={input} onChange={inputHandler}/>
    </div>

    <div className='row'>
        {country.length>0 ? (filterData.map(items=> <Card imgUrl={items.flags.png} name={items.name.common} altUrl={items.flags.alt} />)):('')}
        
    </div>
    </>
    
    
  )
}

export default Country
