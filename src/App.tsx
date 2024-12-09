// import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header';
import SectionA from './Components/SectionA';
import SectionB from './Components/SectionB';
import SectionC from './Components/SectionC';
import SectionD from './Components/SectionD';
import Footer from './Components/Footer';

function App() {

  // const [responsive, setResponsive] = useState<any>(false)

  return (
    <div className="App">
      <Header />
      <div className="section-container">
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
      </div>
      
      
    </div>
  );
}

export default App;
