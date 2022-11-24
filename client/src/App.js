import React from 'react';
import {  Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import CardDetail from './components/CardRecipe/CardDetail';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import About from "./components/About"
import './App.css';


function App() {
  return (

    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/recipes"  component={Nav}/>
      <Route exact path="/recipes" component={Home}/>
      <Route exact path="/recipes/recipeDetail/:id" component={CardDetail}/>
      <Route exact path="/createRecipe" component={CreateRecipe}/>
      <Route exact path="/about" component={About}/>
    </div>

  );
}

export default App;
