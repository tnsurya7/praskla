'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    company: 'Captureever',
    text: 'Praskla Technology delivered exceptional results. Their team is professional, innovative, and truly understands our business needs.',
    author: 'CEO',
  },
  {
    id: 2,
    company: 'Vishnu Lakshmi School',
    text: 'The educational platform they built transformed how we engage with students. Highly recommended for any institution.',
    author: 'Principal',
  },
  {
    id: 3,
    company: 'VILCET',
    text: 'Outstanding technical expertise and customer service. They went above and beyond to ensure our project success.',
    author: 'Director',
  },
  {
    id: 4,
    company: 'JKK TEX',
    text: 'The textile operations platform streamlined our entire workflow. Praskla is a trusted technology partner.',
    author: 'Operations Manager',
  },
  {
    id: 5,
    company: 'Thilaga Impex',
    text: 'Professional, reliable, and innovative. Praskla Technology is the partner we trust for all our digital needs.',
    author: 'Business Head',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass p-8 md:p-12 rounded-2xl text-center"
          >
            <p className="text-lg text-gray-300 mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-semibold text-neon-purple">
                {testimonials[current].company}
              </p>
              <p className="text-gray-400 text-sm">{testimonials[current].author}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="glass p-3 rounded-full hover:bg-white hover:bg-opacity-10 transition-smooth"
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="glass p-3 rounded-full hover:bg-white hover:bg-opacity-10 transition-smooth"
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === current ? 'bg-neon-purple w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
