import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Contact & Booking</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-3 px-6 rounded-md hover:bg-neutral-800 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-12 flex justify-center gap-8">
            <a href="mailto:booking@jeffakoh.com" className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <Mail size={20} />
              <span>booking@jeffakoh.com</span>
            </a>
            <a href="tel:+2341234567890" className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <Phone size={20} />
              <span>+234 123 456 7890</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;