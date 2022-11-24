import React from "react";
import Card from "../Card/Card";
import { useEffect,useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { filterRecipesByDiets, getAllRecipes ,filterRecipesByHealthScore, filterRecipesByName, filterRecipesCreatedDB} from "../../Redux/actions/index.js";
import Paginado from "../Paginado/Paginado";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Home.css"






export default function Home(){
    const dispatch= useDispatch()
    const allRecipes=useSelector((state)=>state.recipes)

    const [currentPage,setCurrentPage]=useState(1)
    const [recipesPerPage,setRecipesPerPage]= useState(9)
    const [order,setOrder]=useState("")
    const indexOfLastRecipes= currentPage * recipesPerPage
    const IndexOfFirstRecipe= indexOfLastRecipes - recipesPerPage
    const currentRecipes=allRecipes.slice(IndexOfFirstRecipe,indexOfLastRecipes)
    const [loading,setLoading]= useState(false)

    const paginado= (pageNumber)=>{setCurrentPage(pageNumber)}
 

    useEffect(()=>{

        dispatch(getAllRecipes())
   
    },[dispatch])

   
//REFRESH   REVISAR CLASE SELENE 
    function handleClick (e){
        e.preventDefault()
        dispatch(getAllRecipes())
        setOrder(e.target.value)
    }

//DIETAS
    function handlerFilterDiets(e){
        e.preventDefault()
    dispatch(filterRecipesByDiets(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
    }
    //HC
    function handlerFilterHealthS(e){
        e.preventDefault();
        dispatch(filterRecipesByHealthScore(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
            }
            //A Z /Z A
            function handlerFilterName(e){
                e.preventDefault();
                dispatch(filterRecipesByName(e.target.value))
                setCurrentPage(1)
                setOrder(e.target.value)
                    }

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
    } else{

        if(allRecipes.length===0){
         
        dispatch(getAllRecipes())    
        setLoading(false)
        alert("No recipes found")}
}
    return(
        
    <div>
       
     
            <div className="navContainer">
            <button className="Rbutton"  onClick={e=> handleClick(e)}>Refresh</button>
            <select defaultValue='Default' className="filterdiet"onChange={e => {handlerFilterDiets(e)} }>
                <option  value='Default'>All Diets</option>
                <option value='gluten free'>Gluten Free</option>
                <option value='paleolithic'>paleolithic</option>
                <option value='vegetarian'>vegetarian</option>
                <option value='lacto ovo vegetarian'>lacto ovo vegetarian</option>
                <option value='vegan'>vegan</option>
                <option value='pescatarian'>pescatarian</option>
                <option value='primal'>primal</option>
                <option value='whole 30'>whole 30</option>
                <option value='fodmap friendly'>fodmap friendly</option>
                <option value='dairy free'>dairyFree</option>
            </select>

           

            <select className="filterHc" defaultValue='health_score' onChange={e=>handlerFilterHealthS(e)}>
                    <option disabled value='health_score' >Order By: </option>
                    <option value="max hc">Mayor a Menor </option>
                <option value="min hc">Menor a Mayor </option>
         
            </select>

            <select className="filterAZ" onChange={e=>handlerFilterName(e)}>
                <option value="A-Z">A-Z </option>
                <option value="Z-A">Z-A</option>
            </select>

     
           
        </div>
 
     <div class="container">
        
        {
            
        currentRecipes?.map(e=>{
            return( 
                <div> 
                    <Link  style={{textDecoration: 'none', color:"#000"}} to={"recipes/recipeDetail/" + e.id}>
            <Card 
             key={e.id}
             name={e.name} 
             img={e.img} 
             health_score={e.health_score}
             diets={e.diets} />
             </Link>
           </div> 
            )
            })
        }
    </div>
    <Paginado  recipesPerPage={recipesPerPage}
    allRecipes={allRecipes.length} paginado={paginado}/>   
    </div>
)

} 
