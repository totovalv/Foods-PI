import React from "react";
import { useEffect,useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { createRecipe ,getDiets} from "../../Redux/actions";
import { useDispatch,useSelector } from "react-redux";
import "./CreateRecipe.css"
import Loader from "../Loader/Loader";

export default function CreateRecipe(){

const dispatch= useDispatch()
const history=useHistory()
const diets= useSelector((state)=> state.diets)
const [err,setErr]= useState({})
const [input,setInput]=useState({
    health_score:"",
    summary:"",
    name:"",
    steps:"",
    diets:[],
    stock:0

})

const [loading,setLoading]= useState(false)

useEffect(()=>{
    dispatch(getDiets())
    
},[])

function handlerChange(e){
    setInput({...input,[e.target.name]:e.target.value
    })
    setErr(validate({
        ...input, [e.target.name]:e.target.value
    }))

}

function handlerSelect(e){
    e.preventDefault()
    setInput({
        ...input,
        diets:[...input.diets,e.target.value]
    })
    console.log(input.diets);
}



function handlerSubmit(e){
    e.preventDefault()
    console.log(input);
    dispatch(createRecipe(input))
    alert("Recipe Created!")
    setInput({
        health_score:"",
        summary:"",
        name:"",
        steps:"",
        diets:[],
        stock:""
    
    })
    history.push("/recipes")
}
function validate(input){
    let RegEXP=/[`ª!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    let err={}
    if(!input.name){
        err.name="· Name is required"
    }
    else if(RegEXP.test(input.name)){
        err.name="· Special characters are not accepted"
    }
    else if(!input.health_score|| input.health_score<0 ||  input.health_score>100){
        err.health_score="· Health Score input Error"
    } 
    else if(!input.summary){
        err.summary="· Summary is required" 
    }else if(!input.steps){
        err.steps="· Steps is required"
    }else if(!input.stock||input.stock<1||input.stock>10){
        err.stock="Error input"
    }
    return err
}
 function handleDelete(el){
    setInput({
        ...input,
        diets:input.diets.filter(e=>e!==el)
    })
 }


 const  changeState = () => {
    setTimeout(() => {
        setLoading(true)
    }, 5000);
  }
          if(!loading){
          changeState()
          return(
              <Loader/>
          )
      } 
  


return(
 <div >
    <Link className="link" to="/recipes">
    <button type="button" className="backButton">Volver</button>

</Link>
    <div className="form">
      
     <div className="title">
        <h1 >Create Your Recipe:</h1>
        </div>
      
        <div className="body-form">
           
      
        <form onSubmit={e=>handlerSubmit(e)}>
            <div className="padding">

            <div className="divSelect">
                
                <label className="label">Recipe Title </label>
             <section>  <input placeholder="Title" className={err.name ? "inputErr" : "inputClass"} type="text" value={input.name} name="name" onChange={handlerChange} />
             {err.name && <h5 className="errLabel">{err.name}</h5>}
             </section> 
           
            </div>
   
       
            <div className="divSelect"> 
                <label className="label">Health Score </label>
                <section>   <input placeholder="Health Score" className={err.health_score ? "inputErr" : "inputClass"} type="number" value={input.health_score} name="health_score" onChange={handlerChange}/>
                {err.health_score && <h5 className="errLabel">{err.health_score}</h5>}
                </section>
            </div>
    
            <div className="divSelect">
                <label className="label">Summary </label>
                <section>
                <textarea   placeholder="Summary" className={err.summary ? "inputErrLarge" : "inputClassLarge"} type="text" value={input.summary} name="summary" onChange={handlerChange}/>
                {err.summary && <h5 className="errLabel">{err.summary}</h5>}
                </section>
           
            </div>
      
            <div className="divSelect">
                
                <label className="label">Steps </label>
                <section>
                <textarea  placeholder="Steps" className={err.steps ? "inputErrLarge" : "inputClassLarge"} type="text" value={input.steps} name="steps" onChange={handlerChange}/> 
                {err.steps && <h5 className="errLabel">{err.steps}</h5>}
                </section>
        
            </div>
            <div className="divSelect">
                
                <label className="label">Stock</label>
             <section>  <input placeholder="Stock" className={err.name ? "inputErr" : "inputClass"} type="number" value={input.stock} name="stock" onChange={handlerChange} />
             {err.stock && <h5 className="errLabel">{err.stock}</h5>}
             </section> 
           
            </div>
         
        <div className="divSelect">
       
        <label className="label">Diets Types </label>   
            <section>
            <select className="selectClass"onChange={e=>handlerSelect(e)}>
          
                {diets.map(e=> (
                    <option disabled={input.diets.includes(e.name)===false?false:true} value={e.name} >{e.name}</option>
                ))}
            </select>
     
            </section>  
       
        </div>  
     
        <section>
           

          
            <button className="createButton" type="submit"  disabled={ !input.name||err.name|| err.summary ||err.steps||err.health_score? true:false} >Create</button>  
      
      </section>
     
   </div>
        </form>
        <div  >
            <br></br>
            <h3 className="choosenDiets">Choosen Diets</h3>
        {input.diets.map(e=>  e==="lacto ovo vegetarian"? <div className="deleteDiet"> <p >l.c vegetarian</p><button className="deleteButton" type="button"  onClick={()=>handleDelete(e)}>X</button></div> :<div className="deleteDiet"><p>{e}</p> <button className="deleteButton" type="button"  onClick={()=>handleDelete(e)}>X</button></div>)}
        </div>

     </div>        
</div>
</div> 
    
)

} 