import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      {/* Header */}
      <Navbar />

      {/* Main  */}
      <Home />
      
    </React.Fragment>
  );
}

export default App;
