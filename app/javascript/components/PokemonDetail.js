import React, {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Container } from "react-bootstrap";
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
      <Container>

        <Card className="bg-dark text-white">
        { pokemon.sprites ? <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} width="250" />
          <img src={pokemon.sprites.back_default} alt={pokemon.name} width="250" />
           <img src={pokemon.sprites.back_default} alt={pokemon.name} width="250" />
          </div>  : ' '}
        <Card.ImgOverlay>
          <Card.Title>{ pokemon.species ?  <h1>{pokemon.species.name }</h1> : ' ' }</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text><h3><Link to="/">Inicio</Link></h3></Card.Text>
        </Card.ImgOverlay>
        </Card>
      </Container>


    )

    
}

export default PokemonDetail;

