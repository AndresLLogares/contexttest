import { GET_POKEMONS, GET_SINGLE_POKEMON } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      };
    case GET_SINGLE_POKEMON:
      return {
        ...state,
        singlePokemon: payload,
      };
    default:
      return state;
  }
};
