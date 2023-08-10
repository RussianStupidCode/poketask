import styled from "styled-components";
import { Pokemon } from "../api/pokemons";
import PokemonListCard from "./PokemonListCard";
import { memo } from "react";

interface PokemonListProps {
  pokemons: Pokemon[];
  createLinkUrl: (pokemon: Pokemon) => string;
}

const Root = styled.ul`
  display: flex;

  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const PokemonList = ({
  pokemons,
  createLinkUrl,
}: PokemonListProps): JSX.Element => {
  return (
    <Root>
      {pokemons.map((pokemon) => (
        <PokemonListCard
          key={pokemon.url}
          pokemon={pokemon}
          createLinkUrl={createLinkUrl}
        />
      ))}
    </Root>
  );
};

export default memo(PokemonList);
