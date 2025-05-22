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
            moves : [],
        }
    }
    getNewPokemon(){
        const randomNumber = Math.round(Math.random()*307)
        const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
        fetch(url)
         .then(response=>response.json())
         .then(data=>{
            console.log(data)
            this.setState({
                pokemonImage : data.sprites.front_default,
                name : data.name,
                height : data.height,
                weight : data.weight,
                moves : data.moves,
            
                
                loadedCharacter : true,
            })
         })
        
    }
    render(){
        return(
            <div>
                 <h1>Pokemon App</h1>
                 <button type="button"  class="btn btn-outline-success" onClick={()=>this.getNewPokemon()} >Random Pokemon</button>
                {
                    this.state.loadedCharacter &&
                    <div>
                       <div><img src={this.state.pokemonImage} alt='not available'></img></div>
                       <h2>Name: {this.state.name}</h2>
                       <h2>Height: {this.state.height}</h2>
                       <h2>Weight: {this.state.weight}</h2>
                       <h2>Moves</h2>
                       <ul>
                        {
                            this.state.moves.map((moves,i) => {
                                return <li key={i}>{moves.move.name}</li>
                            })
                        }
                       </ul>
                    </div>
                }
           </div>
            
        )
    }
}

export default Pokemon;