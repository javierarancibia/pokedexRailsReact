import React from "react";
import AllPokemons from "./AllPokemons";
import PokemonDetail from "./PokemonDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AllPokemons /> 
        </Route>
        <Route path="/:name">
          <PokemonDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
