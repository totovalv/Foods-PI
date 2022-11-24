import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css"

export default function Nav(){



return(
    <div className="nav"> 
    
    <Link    to="/createRecipe">
            <button className="createRecipeLink" >Create Recipe!</button>
        </Link>

   
     
        <SearchBar/>
         
      
    </div>
)

} 