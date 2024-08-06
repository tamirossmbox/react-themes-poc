import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    grid-area: 1/1/1/4;
    padding: 8px 24px;
    background: red;
    `}
`;

const Navbar = ({ children }: React.PropsWithChildren) => {
  return <NavbarContainer>{children}</NavbarContainer>;
};

export default Navbar;
