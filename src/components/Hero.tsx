import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Youtube } from 'lucide-react';
import Slideshow from './Slideshow';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative h-screen">
      <Slideshow />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <motion.div 
          style={{ opacity, y }}
          className="text-center text-white px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Jeff Akoh</h1>
          <p className="text-xl md:text-2xl mb-8">Artist & Performer</p>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://open.spotify.com/artist/2dWJmDHk1CXQ4r5Pj4yQB5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 rounded-full"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5"></path>
              </svg>
              <span>Listen on Spotify</span>
            </a>
            <a 
              href="https://www.youtube.com/@jeff_akoh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-full"
            >
              <Youtube size={20} />
              <span>Watch Videos</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;