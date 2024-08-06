import React from 'react'
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    padding: 8px 24px;
`;

const Navbar = ({ children}: React.PropsWithChildren) => {
  return (
    <NavbarContainer>{children}</NavbarContainer>
  )
}

export default Navbar