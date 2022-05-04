import axios from "axios";
import React, { useReducer, useCallback, memo } from "react";
import { GET_POKEMONS, GET_SINGLE_POKEMON } from "../types";
import Reducers from "../reducers";
import { BehaviorSubject, map, combineLatestWith } from "rxjs";
import { Pokemon } from "../../types/pokemon";
import { SinglePokemon } from "../../types/singlePokemon";
import PokemonContext from "../store";
const PokemonState = memo((props: any) => {
  const initialState = {
    pokemons: [],
    singlePokemon: null,
  };

  const [state, dispatch] = useReducer(Reducers, initialState);

  const getPokemons = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"
      );

      const data = res.data.results;

      const listPokemon$ = new BehaviorSubject<any>([]);

      listPokemon$.next(data);

      const pokemonWithPower$ = listPokemon$.value;

      dispatch({ type: GET_POKEMONS, payload: pokemonWithPower$ });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getSinglePokemon = useCallback(async (id: number) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

      const singlePokemon$ = new BehaviorSubject<SinglePokemon[]>([]);

      const data = res.data;

      singlePokemon$.next(data);

      const pokemonWithPower$ = singlePokemon$.value;

      dispatch({ type: GET_SINGLE_POKEMON, payload: pokemonWithPower$ });
    } catch (error) {}
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        singlePokemon: state.singlePokemon,
        getPokemons,
        getSinglePokemon,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
});

export default PokemonState;
