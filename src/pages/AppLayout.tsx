import { NavBar } from "@/widgets/navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
`;

const GrowContainer = styled.div`
  flex-grow: 1;
`;

const AppLayout = (): JSX.Element => {
  return (
    <Root>
      <NavBar />

      <GrowContainer>
        <Outlet />
      </GrowContainer>
    </Root>
  );
};

export default AppLayout;
