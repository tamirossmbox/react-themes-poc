import React from "react";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import styled from "styled-components";

const PageExampleLayout = styled.div`
${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas:
      "navbar navbar navbar"
      "sidebar main main"
      "sidebar main main";
    background: ${theme.background};
    color: ${theme.background};
    height: 100vh;

    // * {
    // padding: 8px 24px; 
    // }
  `}
`;

function App() {
  return (
    <div className="App">
      <PageExampleLayout>
        <Navbar>Navbar</Navbar>
        <Main>Main content</Main>
        <Sidebar>Sidebar</Sidebar>
        <Footer></Footer>
      </PageExampleLayout>
    </div>
  );
}

export default App;
