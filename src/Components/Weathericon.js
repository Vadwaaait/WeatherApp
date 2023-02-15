import React, { Component } from 'react'
import "./CSS/styles.css";

const Weathericon = (props) => {
    if(props.temp>20)
    {return (
        <div>
        <i class="fa-solid fa-sun"></i> {props.searchh}
        </div>
        )
    }

    else if(props.temp<0)
    {return (
        <div>
        <i class="fa-regular fa-snowflake"></i> {props.searchh}
        </div>
        )
    }

    else if(props.temp<20 && props.temp>0)
    {return (
        <div>
        <i class="fa-regular fa-sun"></i> {props.searchh}
        </div>
        )
    }
        


}

export default Weathericon;