import React from 'react';
import Hero from './components/Hero';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import EPK from './components/EPK';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Music />
      <Gallery />
      <Videos />
      <EPK />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;