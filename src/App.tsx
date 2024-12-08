import React from 'react';
import Hero from './components/Hero';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import EPK from './components/EPK';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Music />
      <Gallery />
      <Videos />
      <EPK />
      <Contact />
    </div>
  );
}

export default App;