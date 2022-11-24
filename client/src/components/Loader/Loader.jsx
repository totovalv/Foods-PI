import React from "react";
import gif from "./fastfood.gif"
import "./Loader.css";



const Loader=()=>{
    
    return(
        <div >
            <img className="imgLoader" src={gif} />
        </div>
    )
}



export default Loader