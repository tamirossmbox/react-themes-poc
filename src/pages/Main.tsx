import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    grid-area: main;
    background: ${theme.main.background};
    `}
`;

const Main = ({ children }: React.PropsWithChildren) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
