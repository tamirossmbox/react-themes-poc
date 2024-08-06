import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    grid-area: 3/1/4/4;
    padding: 4px 24px;
    background: gold;
`;

const Footer = () => {
  return (
    <FooterContainer>Footer</FooterContainer>
  )
}

export default Footer