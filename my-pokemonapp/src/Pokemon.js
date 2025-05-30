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
        const randomNumber = Math.round(Math.random()*1000)
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
            <div className="container-fluid text-center">
                  <h2>
                    <small className="text-body-secondary">See your </small>
                    Pokemon
                   </h2>
                  <button type="button"  className="btn btn-outline-info btn-lg" onClick={()=>this.getNewPokemon()} >Click Me</button>
                 {
                    this.state.loadedCharacter &&
                    <div>
                       <div><img className="object-fit-sm-contain" height={200} width={200} src={this.state.pokemonImage} alt='not available'></img></div>
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
