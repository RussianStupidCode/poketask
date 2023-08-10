import { usePokemon } from "@/entities/pokemon";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PokemonImage = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid black;
`;

const PokemonDetailPage = (): JSX.Element => {
  const { id } = useParams();

  const { data, isLoading } = usePokemon(Number(id));

  if (isLoading || !data) {
    return (
      <Root>
        <div>Loading...</div>
      </Root>
    );
  }

  return (
    <Root>
      <h1>{data.name}</h1>
      <PokemonImage src={data.sprites.front_default} />
    </Root>
  );
};

export default PokemonDetailPage;
