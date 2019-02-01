import React, { Component } from 'react';
import './App.css';
import Form from "./Component/Form";
import Recipes from "./Component/Recipies";

const API_key = "a179580aa734aca8ee2b0c9817659a0a";

class App extends Component {
  //URL:https://www.food2fork.com/api/search?key=a179580aa734aca8ee2b0c9817659a0a&q=shredded%20chicken&count=5

  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_key}&q=${recipeName}&count=10`);

    const data = await api_call.json();
    //console.log(data)
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes});
  }

  componentDidUpdate = () =>{
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />

        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
