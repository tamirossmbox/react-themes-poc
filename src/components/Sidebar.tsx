import React from 'react'
import styled from 'styled-components';

const SidebarContainer = styled.div`
    display: flex;
    grid-area: sidebar;
    background: magenta;
`


const Sidebar = ({ children}: React.PropsWithChildren) => {
  return (
    <SidebarContainer>{children}</SidebarContainer>
  )
}

export default Sidebar