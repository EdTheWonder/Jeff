import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

const EPK = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="epk" className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-white"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Electronic Press Kit</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8 text-lg">Download Jeff Akoh's complete press kit including bio, and more.</p>
          <motion.a
            href="https://drive.google.com/file/d/1QiQer93YTg0a_hBDnU90f_tsYWN1Raer/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white dark:bg-neutral-200 text-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-300 transition-colors"
          >
            <Download size={20} />
            <span>Download EPK</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default EPK;