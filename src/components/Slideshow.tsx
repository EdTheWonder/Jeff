import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669196/xy2hzmxtly4rxjoppklm.jpg',
  'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669189/m3nmipp2hehxdftsfrzi.jpg',
  'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669179/khfklv93dev8c875fv4d.jpg',
  'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669172/l8zm8ctudxhee35trstw.jpg'
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Jeff Akoh ${currentIndex + 1}`}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;