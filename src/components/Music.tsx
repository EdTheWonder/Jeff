import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Music = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="music" className="py-20 bg-neutral-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Music</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Listen Now On:</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://open.spotify.com/artist/2dWJmDHk1CXQ4r5Pj4yQB5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 rounded-full text-white"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5"></path>
                </svg>
                <span>Spotify</span>
              </a>
              <a
                href="https://music.apple.com/us/artist/jeff-akoh/1226687771"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-colors px-6 py-3 rounded-full text-white"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                  <path d="M14.5 8.5c-.83-1-2.17-1-3 0s-1 2.17 0 3l1.5 1.5-1.5 1.5c-1 .83-1 2.17 0 3s2.17 1 3 0 1-2.17 0-3L13 13l1.5-1.5c1-.83 1-2.17 0-3z"/>
                </svg>
                <span>Apple Music</span>
              </a>
            </div>
          </div>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/2dWJmDHk1CXQ4r5Pj4yQB5?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default Music;