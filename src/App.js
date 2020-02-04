import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NavbarAlt from './components/NavbarAlt';

function App() {
  return (
    <React.Fragment>
      {/* Header */}
      {/* <Navbar /> */}
      <NavbarAlt />

      {/* Main  */}
      <Home />
      
    </React.Fragment>
  );
}

export default App;
