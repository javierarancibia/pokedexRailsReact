import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./img/loader.gif";
import PokemonList from "./PokemonList";

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState(0);

  useEffect(() => {
    axios.get("api/v1/pokemons/index").then((res) => {
        setPokemons(res.data.pokemons)
    });

  }, []);

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, [])

  
  console.log(pokemons)

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemons.length > 0 && !load ?  
        pokemons.map((poke) => (
          <PokemonList key={poke.name} name={poke.name} photo={poke.sprites.front_default} />

        )) : <img src={Loader} /> }
    </div>
  );
};

export default AllPokemons;
