import React from "react";
import { Link } from "react-router-dom";

const PokemonList = (props) => {
    console.log(props)

  return (
    <div>
      <ul>
        <li>
          <h2>{props.name}</h2>
        </li>
        <li>
        { props.photo ? <img src={props.photo} alt={props.name} width="250" /> : ' ' }
        </li>
        <li>
          <Link to={props.name}>Detalle del Pokemon</Link>
        </li>
      </ul>
    </div>
  );
};

export default PokemonList;
