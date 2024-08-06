import React from 'react';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>Navbar</Navbar>
      <Main>Main content</Main>
      <Sidebar>Sidebar</Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
