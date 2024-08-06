import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    grid-area: sidebar;
    color: ${theme.sidebar.color};
    background: ${theme?.sidebar.background};
    `}
`;

const Sidebar = ({ children }: React.PropsWithChildren) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;
