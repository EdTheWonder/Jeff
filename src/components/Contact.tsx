import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_7c1ci44',
        'template_otzjb2j',
        formRef.current!,
        'poHctf3dWj_ucWylW'
      );
      setStatus('success');
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Contact & Booking</h2>
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="mt-1 block w-full rounded-md border-neutral-600 bg-neutral-700 text-white shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                required
                className="mt-1 block w-full rounded-md border-neutral-600 bg-neutral-700 text-white shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-neutral-600 bg-neutral-700 text-white shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-neutral-900 text-white py-3 px-6 rounded-md hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            
            {status === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
            <a href="mailto:booking@jeffakoh.com" className="flex items-center gap-2 text-white hover:text-neutral-300">
              <Mail size={20} />
              <span>booking@jeffakoh.com</span>
            </a>
            <a href="tel:+2341234567890" className="flex items-center gap-2 text-white hover:text-neutral-300">
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