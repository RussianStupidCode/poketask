import { Pokemon, usePokemons } from "@/entities/pokemon";
import PokemonList from "@/entities/pokemon/ui/PokemonList";
import styled from "styled-components";

import { useCallback, useState } from "react";
import { Paginate } from "@/shared/ui/paginate";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PokemonsPage = (): JSX.Element => {
  const countInPage = 20;

  const [offset, setOffset] = useState(0);

  const { data, isLoading } = usePokemons(countInPage, offset);

  const onPageChange = (offset: number) => {
    setOffset(offset);
  };

  const createLink = useCallback((pokemon: Pokemon) => {
    const url = pokemon.url.slice(0, pokemon.url.length - 1);

    const stringId = url.slice(url.lastIndexOf("/") + 1);

    const link = `/pokemons/${Number(stringId)}`;

    return link;
  }, []);

  if (isLoading || !data) {
    return (
      <Root>
        <h1>Покемоны</h1>
        <div>Loading...</div>
      </Root>
    );
  }

  return (
    <Root>
      <h1>Покемоны</h1>
      <PokemonList pokemons={data.results} createLinkUrl={createLink} />

      <Paginate
        limit={countInPage}
        offset={offset}
        count={data.count}
        onPageChange={onPageChange}
      />
    </Root>
  );
};

export default PokemonsPage;
