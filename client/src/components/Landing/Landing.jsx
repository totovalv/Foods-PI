import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

export default function Landing(){
return(
    <div className="contain">
     <br/>
     
      
    <div className="contain">
             <Link  to="/about">
            <button className="aboutbutton">About</button>
        </Link>
        <br/>
        <div className="sectionHome"> 
        <h1 className="landingTitle" >Welcome to the Recipes Web!</h1>
        <Link  to="/recipes">
            <button className="HomeBtn">Ingresar</button>
        </Link>
        </div>
        </div>  
    </div>
)
} 