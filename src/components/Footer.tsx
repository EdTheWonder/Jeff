import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-2xl font-bold text-white">Connect with Jeff Akoh</h3>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/jeff_akoh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://x.com/jeff_akoh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://facebook.com/jeffakohofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 