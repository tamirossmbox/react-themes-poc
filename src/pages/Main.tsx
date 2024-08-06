import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    grid-area: main;
    padding: 24px;
    background: ${theme?.main?.background};
    color: ${theme?.main.color};
    `}
`;

const Main = ({ children }: React.PropsWithChildren) => {

  return <MainContainer>{children}</MainContainer>;
};

export default Main;
