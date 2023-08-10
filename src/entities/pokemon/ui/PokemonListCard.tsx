import { styled } from "styled-components";
import { Pokemon } from "../api/pokemons";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const Root = styled.li`
  margin: 0;
  list-style-type: none;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
`;

interface PokemonListCardProps {
  pokemon: Pokemon;
  createLinkUrl: (pokemon: Pokemon) => string;
}

const PokemonListCard = ({
  pokemon,
  createLinkUrl,
}: PokemonListCardProps): JSX.Element => {
  const link = createLinkUrl(pokemon);

  return (
    <Root>
      <NavLink to={link}>{pokemon.name}</NavLink>
    </Root>
  );
};

export default memo(PokemonListCard);
