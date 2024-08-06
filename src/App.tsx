import React, { useEffect } from "react";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";
import { mainData } from "./mockData";

const PageExampleLayout = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas:
      "navbar navbar navbar"
      "sidebar main main"
      "sidebar main main";
    background: ${theme?.background};
    color: ${theme?.background};
    height: 100vh;

    // * {
    // padding: 8px 24px; 
    // }
  `}
`;

function App(props: any) {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("@LOG %c FX props ", "background: blue; color: white", props);
    console.log("@LOG %c theme ", "background: blue; color: white", theme);
  }, [props, theme]);

  return (
    <div className="App">
      <PageExampleLayout>
        <Navbar>Navbar</Navbar>
        <Main>
          <h1>{mainData.title}</h1>
          <p style={{ textAlign: "left" }}>{mainData.content}</p>
        </Main>
        <Sidebar>Sidebar</Sidebar>
        <Footer></Footer>
      </PageExampleLayout>
    </div>
  );
}

export default App;
