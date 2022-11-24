import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { getRecipeDetail } from "../../Redux/actions";
import { useEffect ,useState} from "react";
import "./CardRecipe.css"
import { Link } from "react-router-dom";
import text from "./exampleText"
import Loader from "../Loader/Loader";

export default function CardDetail(props){
console.log(props);
const dispatch=useDispatch()
const [loading,setLoading]= useState(false)


useEffect(()=>{
    dispatch(getRecipeDetail(props.match.params.id))
},[])

const recipes= useSelector((state)=>state.recipeDetail)
console.log(recipes);

const  changeState = () => {
  setTimeout(() => {
      setLoading(true)
  }, 4000);
}
        if(loading===false){
        changeState()
        return(
            <Loader/>
        )
    } 




return(


    <div>  <Link to="/recipes"><button className="homebutton">Home</button></Link>
    <Link to="/createRecipe"><button className="Crbutton">Create Recipe!</button></Link>
    
    <div class="detailContainer">
      
       {recipes.map(e=>(<div >

 
    

     <section className="cardDetail">
     
        <h5 className="titleDetail">Title: {e.name}</h5>
      
        <h5 className="dietsDetail"> {e.diets.length>0 ? e.diets.map(e=>{return   e==="vegan"?<div className="tagDetail tagDetail-green">{e}</div>:e==="gluten free"?<div className="tagDetail tagDetail-purple">{e}</div>:e==="primal"? <div className="tagDetail tagDetail-red">{e}</div>:e==="paleolithic"?<div className="tagDetail tagDetail-grey">{e}</div>:e==="vegetarian"?<div className="tagDetail tagDetail-gr">{e}</div>:e==="lacto ovo vegetarian" ?<div className="tagDetail tagDetail-ovo">{e}</div>:e==="pescatarian"? <div className="tagDetail tagDetail-pes">{e}</div>:e==="whole 30"?<div className="tagDetail tagDetail-who">{e}</div>:e==="fodmap friendly"?<div className="tagDetail tagDetail-fod">{e}</div>:e==="dairy free"?<div className="tagDetail tagDetail-dai">{e}</div>:<div>{e}</div>}):<div>No diets found</div>}</h5>   
      <img className="imgdetail"  src={e.img} alt="img"/>
      {e.steps ? <h5 className="stepDetail">Steps: {e.steps}</h5>:<h5  className="stepDetail">{text}</h5>}
      <h5 className="hcdetail">Health Score: {e.health_score}</h5>
     
    <h5 className="hcdetail">Stock:{e.stock}</h5>
      
        <h5 className="summaryDetail">Summary: {e.summary}</h5>
        <h5 className="titleDetail">dish: {e.types? e.types + " " :" Not Specified"}</h5>
    </section>
  
       </div>))}
    </div>
    </div>
)

    }