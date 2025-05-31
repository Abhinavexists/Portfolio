'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const isDisabled = formState === 'submitting' || formState === 'success';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields');
      return;
    }

    setFormState('submitting');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (process.env.NODE_ENV !== 'production') {
        console.log('Form submitted:', formData);
      }

      setFormState('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');
    }
  };

  const getInputClasses = (fieldName: string) => {
    const base = 'w-full bg-gray-800/30 border border-gray-700 rounded-lg px-4 py-3 text-white transition-all duration-200';
    const focus = focused === fieldName ? 'border-indigo-500 ring-2 ring-indigo-500/20' : '';
    const status =
      formState === 'error' ? 'border-red-500/50' :
      formState === 'success' ? 'border-green-500/50' : '';

    return `${base} ${focus} ${status}`;
  };

  const inputIconClasses = "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none";

  return (
    <div className="p-5 h-full flex flex-col">
      <h3 className="text-xl font-medium mb-2 text-white">Get In Touch</h3>
      <p className="text-gray-400 text-sm mb-6">Have a question or want to work together?</p>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-5">
        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
          <div className="relative">
            <User className={inputIconClasses} size={16} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              className={`${getInputClasses('name')} pl-10`}
              placeholder="Your name"
              disabled={isDisabled}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
          <div className="relative">
            <Mail className={inputIconClasses} size={16} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              className={`${getInputClasses('email')} pl-10`}
              placeholder="your.email@example.com"
              disabled={isDisabled}
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="relative flex-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
          <div className="relative h-full">
            <MessageCircle className="absolute left-3 top-3 text-gray-400 pointer-events-none" size={16} />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              className={`${getInputClasses('message')} pl-10 min-h-[120px] h-full resize-none`}
              placeholder="Your message..."
              disabled={isDisabled}
            />
          </div>
        </div>

        {/* Success/Error Notification */}
        <AnimatePresence>
          {formState === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm flex items-center"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Message sent successfully!</span>
            </motion.div>
          )}
          {formState === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              <span>There was an error sending your message. Please try again.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="mt-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center shadow-md disabled:opacity-70 transition-all duration-200"
          disabled={isDisabled}
          whileHover={{ scale: 1.02, boxShadow: '0 5px 15px rgba(79, 70, 229, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          {formState === 'idle' && (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
          {formState === 'submitting' && (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </div>
          )}
          {formState === 'success' && (
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Sent!
            </div>
          )}
          {formState === 'error' && (
            <>
              <AlertCircle className="w-4 h-4 mr-2" />
              Try Again
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
