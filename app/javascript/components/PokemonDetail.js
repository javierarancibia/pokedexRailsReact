import React, {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios";

const PokemonDetail = (props) => {

  const { name } = useParams()

  const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.post("api/v1/pokemon", {
          name: name
        }).then((res) => {
          setPokemon(res.data)
        });
      }, []);
      
      console.log(pokemon)


    return (
        <div>
           { pokemon.species ?  <h1>{pokemon.species.name }</h1> : ' ' }
           { pokemon.sprites ? <img src={pokemon.sprites.front_default} alt={pokemon.name} width="250" /> : ' ' }
           <h3><Link to="/">Inicio</Link></h3>
        </div>
    )

    
}

export default PokemonDetail;

