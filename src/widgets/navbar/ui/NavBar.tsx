import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  border-bottom: 2px solid black;
`;

const NavBar = (): JSX.Element => {
  return (
    <Root>
      <NavLink to="/pokemons">Покемоны</NavLink>
    </Root>
  );
};

export default NavBar;
