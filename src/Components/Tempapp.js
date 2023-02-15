import React, { Component, useEffect, useState } from 'react'
import "./CSS/styles.css";
const Tempapp = () => {


    const [city, setCity] =useState(null);
    const [search, setSearch] =useState("Mumbai");
    useEffect( ()=> {
       const fetchApi=async ()=>{

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c5daa0daf18085d0d371df79acd48889`
            const response  = await fetch(url);
            const resJson = await response.json();
            

            setCity(resJson.main);

            
        };

        fetchApi();

    },[search]);

    return(
        
            <div className="box">
                <div className='inputData'>

                    <input type="search" placeholder='City Name' className='inputField' onChange={(event) => {
                        setSearch(event.target.value);
                     
                     

                    }
                    
                    }/>
                </div>

                        { !city ? (<p className='Nodata'> No Data Found</p>) : (
                        <div>
                        <div className='info'>
                            <h2 className='location'>
                            <i id='fas' className="fa-solid fa-street-view"></i>{search}
                            </h2>

                            <h1 className='temp'>

                                    {((city.temp)).toFixed(2)} °C
                            </h1>

                            <h3 className='tempmin_max'>
                               Min : {city.temp_max}°C | Max : {city.temp_min}°C

                            </h3>

          
          
                        </div>
          
          
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                        </div>
                        ) }
                    
                        
            </div>
        

    )
}

export default Tempapp;
