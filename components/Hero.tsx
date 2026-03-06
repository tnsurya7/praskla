'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden flex items-center justify-center pt-24 md:pt-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-40 right-10 w-48 h-48 md:w-72 md:h-72 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-neon-purple rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 gradient-text leading-tight px-4">
            A Fast Blockchain.<br />Scalable AI.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
        >
          Our technology delivers fast blockchain performance, scalable software solutions, AI-powered systems, and secure enterprise platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 bg-gradient-neon rounded-full font-semibold text-dark flex items-center justify-center gap-2 neon-glow-hover text-sm md:text-base"
          >
            Get Started
            <FiArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 glass rounded-full font-semibold text-white border border-neon-purple hover:border-neon-pink transition-smooth text-sm md:text-base"
          >
            Explore Ecosystems
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-neon-purple rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}
