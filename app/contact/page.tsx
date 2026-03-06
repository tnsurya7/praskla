'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-base md:text-lg px-4">
            Have a project in mind? Let's talk about how we can help transform your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-8"
          >
            <div className="glass p-4 md:p-6 rounded-2xl">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-neon-purple">Phone</h3>
              <p className="text-gray-300 text-sm md:text-base">+91 95913 10740</p>
            </div>
            <div className="glass p-4 md:p-6 rounded-2xl">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-neon-pink">Email</h3>
              <p className="text-gray-300 text-sm md:text-base break-all">info@prasklatechnology.com</p>
            </div>
            <div className="glass p-4 md:p-6 rounded-2xl">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-neon-blue">Location</h3>
              <p className="text-gray-300 text-sm md:text-base">Tamil Nadu, India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
