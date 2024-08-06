import React from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
    display: grid;
`

const Main = ({ children }: React.PropsWithChildren) => {
  return (
    <MainContainer>{children}</MainContainer>
  )
}

export default Main