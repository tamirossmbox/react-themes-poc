import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";

const NavbarContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    grid-area: 1/1/1/4;
    padding: 8px 24px;
    color: ${theme.navbar.color};
    background: ${theme?.navbar.background};
    border-bottom: 1px solid ${theme.borderColor};
    `}
`;

const SwitchBox = styled.div`
  display: flex;
  place-items: center;
  gap: 8px;
`;

const Navbar = ({ children }: React.PropsWithChildren) => {
  const { toggleTheme } = useTheme();

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    console.log('@LOG %c e ', 'background: red; color: white', e.target.value);
    setIsChecked(e.target.value)
    toggleTheme()
  }

  return (
    <NavbarContainer>
      <div>{children}</div>
      <SwitchBox>
        <input type={`checkbox`} onChange={handleChange} checked={isChecked} />
        <label>Switch Theme</label>
      </SwitchBox>
    </NavbarContainer>
  );
};

export default Navbar;
