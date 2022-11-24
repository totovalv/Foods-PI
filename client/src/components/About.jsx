import React from "react";
import "./About.css"
import "./Card/Card.css"
import { Link } from "react-router-dom";


const About=()=>{
    
    return(
        <div className="about" >
            {/* <Link to="/"><button className="aboutButton">volver</button></Link> */}
        
            <h2 className="titleAbout">About the Recipes</h2>
            <div data-testid="about-1" className="aboutTxt">This page can help you to discover new recipes, of difentes kinds of diets and dish. Each of them has step by step of its preparation and a summary that will show in a relatively brief text, general information about said recipe, in addition to a health score that indicates how healthy it is between 1 and 100 points.We have 10 different types of diets for example:<p className="tag tag-green">vegan</p><p className="tag tag-purple">gluten free</p><p className="tag tag-grey">paleolithic</p><p className="tag tag-gr">vegetarian</p><p className="tag tag-ovo">lacto ovo vegetarian</p><p className="tag tag-pes">pescatarian</p><p className="tag tag-red">primal</p><p className="tag tag-who">whole 30</p><p className="tag tag-fod">fodmap friendly</p><p className="tag tag-dai">dairy free</p>  And each line can belong to several or none of these. You can view the recipe catalog in preview, search by keyword or filter by alphabetical order, health score, or diet. Also by clicking on a specific one you can see the details of it. Finally we have a section so you can create your own recipe, indicating its title, its health score, its step by step, a summary and diets associated with it.</div>
        </div>
    )
}



export default About