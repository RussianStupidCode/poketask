import { PaginationResponse, pokeClient } from "@/shared/api";

import useSWR from "swr";

export interface Pokemon {
  url: string;
  name: string;
}

export interface PokemonDetail extends Pokemon {
  sprites: {
    front_default: string;
  };
}

const usePokemons = (limit: number, offset: number) => {
  const getPokemons = async (
    url: string
  ): Promise<PaginationResponse<Pokemon>> => {
    const response = await pokeClient.get(url);
    return response.data;
  };

  return useSWR(`/pokemon?offset=${offset}&limit=${limit}`, getPokemons);
};

const usePokemon = (id: number) => {
  const getPokemon = async (url: string): Promise<PokemonDetail> => {
    const response = await pokeClient.get(url);
    return response.data;
  };

  return useSWR(`/pokemon/${id}`, getPokemon);
};

export { usePokemons, usePokemon };
