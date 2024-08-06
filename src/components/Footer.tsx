import styled from "styled-components";

const FooterContainer = styled.div`
  ${({ theme }) => `   
    display: flex;
    grid-area: 3/1/4/4;
    padding: 4px 24px;
    background: ${theme?.footer?.background};
`}
`;

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
