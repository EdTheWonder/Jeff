import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  {
    url: 'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669196/xy2hzmxtly4rxjoppklm.jpg',
    alt: 'Jeff Akoh Performance Shot'
  },
  {
    url: 'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669189/m3nmipp2hehxdftsfrzi.jpg',
    alt: 'Jeff Akoh Studio Session'
  },
  {
    url: 'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669179/khfklv93dev8c875fv4d.jpg',
    alt: 'Jeff Akoh Portrait'
  },
  {
    url: 'https://res.cloudinary.com/dnwxgyfrs/image/upload/v1733669172/l8zm8ctudxhee35trstw.jpg',
    alt: 'Jeff Akoh Live Performance'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="gallery" className="py-20 bg-neutral-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Gallery</h2>
        <PhotoProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <PhotoView key={index} src={image.url}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </motion.div>
    </section>
  );
};

export default Gallery;