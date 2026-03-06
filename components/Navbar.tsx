'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiInfo, FiTool, FiImage, FiBriefcase, FiMail, FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home', href: '/', icon: FiHome },
  { label: 'About', href: '#about', icon: FiInfo },
  { label: 'Services', href: '#services', icon: FiTool },
  { label: 'Projects', href: '#projects', icon: FiImage },
  { label: 'Careers', href: '/careers', icon: FiBriefcase },
  { label: 'Contact', href: '/contact', icon: FiMail },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar - Centered */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center"
      >
        <div className="glass px-6 lg:px-8 py-3 rounded-full flex items-center gap-4 lg:gap-8 neon-glow-hover">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.label} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-smooth cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-lg font-bold gradient-text">Praskla</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass p-3 rounded-full neon-glow-hover"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="glass mx-4 rounded-2xl overflow-hidden"
            >
              <div className="p-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link key={item.label} href={item.href}>
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-neon-purple transition-smooth rounded-lg hover:bg-white hover:bg-opacity-5"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
