'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Certified Professionals', value: 50 },
  { label: 'Projects Delivered', value: 30 },
  { label: 'Years of Innovation', value: 4 },
]

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / 50
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [target])

  return <span>{count}+</span>
}

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            About Praskla Technology
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto px-4">
            Empowering Businesses through Collaborative Digital Excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-8 lg:p-12 rounded-2xl mb-8 md:mb-12"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Praskla Technology is a globally focused IT solutions company delivering enterprise-grade software development, digital transformation, digital marketing, and IT security services. We combine innovation with expertise to help businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-8 rounded-2xl text-center neon-glow-hover"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <Counter target={stat.value} />
              </div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
