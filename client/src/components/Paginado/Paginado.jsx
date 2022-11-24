import React from "react";
import "./Paginado.css"

export default function Paginado({recipesPerPage,allRecipes,paginado}){
    const pageNumbers=[]

    for (let i = 1; i <=Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav className="navContainer" >
        
                {
                    pageNumbers && pageNumbers.map((number)=>(
                    <div class="paginadoContainer"  key={number}>

                    <a class="page"onClick={()=> paginado(number)}>{number}</a>
                    </div>
                    ) )
                    
                    }

           
        </nav>
    )
}