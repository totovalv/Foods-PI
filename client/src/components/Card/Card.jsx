import React from "react";
import "./Card.css"

export  function Card({name,img,diets,health_score,id}){

  
   
return(
  
    <div className="card">
      <div className="card-header">
      <div className="card-body">
        <img src={img}  />
      </div>
      
   <div> 
    { diets.map(e=> { return e==="gluten free"?<div className="tag tag-purple">{e}</div>: e==="primal"? <div className="tag tag-red">{e}</div> :   e==="paleolithic"?<div className="tag tag-grey">{e}</div>: e==="vegan"?<div className="tag tag-green">{e}</div>:e==="vegetarian"?<div className="tag tag-gr">{e}</div> : e==="lacto ovo vegetarian" ?<div className="tag tag-ovo">{e}</div>:e==="pescatarian"? <div className="tag tag-pes">{e}</div>:e==="whole 30"?<div className="tag tag-who">{e}</div>: e==="fodmap friendly"?<div className="tag tag-fod">{e}</div>: e==="dairy free"?<div className="tag tag-dai">{e}</div>: diets })}
    </div>

  
      
  
        <div className="cardTitle">
        <h4>
        {name}
        </h4>
        </div>
        <p className="hc"> 
        health score:{health_score}
        </p>
      </div>
    </div>
  

)

} 
export default Card


