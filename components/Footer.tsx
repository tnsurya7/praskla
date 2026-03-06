'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 gradient-text">Praskla Technology</h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Innovative Solutions Connecting Brands and Customers. Enterprise-grade software development, digital transformation, and IT security services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:text-neon-purple transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-neon-purple transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-neon-purple transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-neon-purple transition-smooth">
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li className="hover:text-neon-purple transition-smooth cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-neon-purple transition-smooth cursor-pointer">
                Mobile Apps
              </li>
              <li className="hover:text-neon-purple transition-smooth cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-neon-purple transition-smooth cursor-pointer">
                Cybersecurity
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-xs md:text-sm">
              <li className="flex items-center gap-2 hover:text-neon-purple transition-smooth cursor-pointer">
                <FiPhone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span>+91 95913 10740</span>
              </li>
              <li className="flex items-center gap-2 hover:text-neon-purple transition-smooth cursor-pointer">
                <FiMail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="break-all">info@prasklatechnology.com</span>
              </li>
              <li className="flex items-start gap-2 hover:text-neon-purple transition-smooth cursor-pointer">
                <FiMapPin className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass p-4 md:p-6 rounded-2xl mb-8 md:mb-12"
        >
          <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Subscribe to Our Newsletter</h4>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white bg-opacity-5 border border-gray-700 rounded-lg px-3 md:px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-smooth text-sm md:text-base"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 md:px-6 py-2 bg-gradient-neon rounded-lg font-semibold text-dark text-sm md:text-base whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © 2024 Praskla Technology. All rights reserved.
          </p>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-neon-purple transition-smooth"
            >
              <FiGithub className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-neon-purple transition-smooth"
            >
              <FiLinkedin className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-neon-purple transition-smooth"
            >
              <FiTwitter className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
