import './App.css';
import React from 'react';

class Pokemon extends React.Component{
    constructor(){
        super()
        this.state = {
            loadedCharacter : false,
            name : null,
            height : null,
            weight : null,
            pokemonImage : null,
            // ability : [],
        }
    }
    getNewPokemon(){
        const randomNumber = Math.round(Math.random()*307)
        const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
        fetch(url)
         .then(response=>response.json())
         .then(data=>{
            this.setState({
                name : data.name,
                height : data.height,
                weight : data.weight,
                pokemonImage : data.sprites.front_default,
                // ability : data.abilities,
                loadedCharacter : true,
            })
         })
        
    }
    render(){
        return(
            <div>
                 <h1>Pokemon App</h1>
                {
                    this.state.loadedCharacter &&
                    <div>
                       <div className='Image'><a href={this.state.pokemonImage}>{this.state.pokemonImage}</a></div>
                       {/* Image of pokemon will be generated here */}
                       <h2>{this.state.name}</h2>
                       {/* <h2>Duplicates everything</h2> */}
                       <h2>{this.state.height}</h2>
                       <h2>{this.state.weight}</h2>
                       {/* <ul>
                          <li>{this.state.ability}</li>
                       </ul> */}
                    </div>
                }
                  {/* A button which on click will generate random pokemon information */}
                  <button type="button" onClick={()=>this.getNewPokemon()} >Random Pokemon</button>
           </div>
            
        )
    }
}

export default Pokemon;
