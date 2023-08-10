import { Navigate, Route, Routes } from "react-router-dom";
import PokemonsPage from "./pokemons";
import AppLayout from "./AppLayout";
import { PokemonDetailPage } from "./pokemon-detail";

const RoutesView = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="pokemons" />} />

        <Route path="pokemons" element={<PokemonsPage />} />
        <Route path="pokemons/:id" element={<PokemonDetailPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesView;
