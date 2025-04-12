import './App.css';
import React from 'react';

class Pokemon extends React.Component{
    getNewPokemon(){
        console.log("Get new pokemon")
    }
    render(){
        return(
            <div className="App">
            <h1>Pokemon App</h1>
            {/* Image of pokemon will be generated here */}
            <h2>Ditto</h2>
            <h2>Duplicates everything</h2>
            {/* A button which on click will generate random pokemon information */}
            <button type="button" onClick={()=>this.getNewPokemon()} >Random Pokemon</button>
          </div>
        )
    }
}

export default Pokemon;