import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { getRecipesByName } from "../../Redux/actions";
import "./SearchBar.css"
export default function SearchBar(){

const dispatch= useDispatch()

const [name,setName]=useState("")


function handlerInput(e){
    e.preventDefault()
    setName(e.target.value)
}
function handlerSumbit(e){
    e.preventDefault()
    dispatch(getRecipesByName(name))
 setName("")
}

console.log(name);


return(
    <div className="searchBar">
      <div>

        
      <input  type="text" className="inputSearchBar" onChange={e=>handlerInput(e)} 
       
        placeholder="Buscar..." value={name}
      />
        <button className="buttonSearchBar" onClick={e=>{handlerSumbit(e)}} type="submit">Buscar</button>
      </div>
    </div>
)

} 