'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

const services = [
  { id: 'web', name: 'Web Development', price: 10000 },
  { id: 'mobile', name: 'Mobile App Development', price: 25000 },
  { id: 'software', name: 'Software Development', price: 7500 },
  { id: 'marketing', name: 'Digital Marketing', price: 7500 },
  { id: 'security', name: 'Cyber Security', price: 9000 },
  { id: 'sustainability', name: 'Sustainability Solutions', price: 8500 },
]

export default function PricingCalculator() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleService = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const total = selected.reduce((sum, id) => {
    const service = services.find((s) => s.id === id)
    return sum + (service?.price || 0)
  }, 0)

  return (
    <section className="py-12 md:py-20 bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Pricing Calculator
          </h2>
          <p className="text-gray-400 text-sm md:text-base">Select services to get an estimated quote</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4"
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => toggleService(service.id)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-3 md:p-4 rounded-lg transition-smooth text-left flex items-center justify-between ${
                  selected.includes(service.id)
                    ? 'glass border border-neon-purple'
                    : 'glass hover:bg-white hover:bg-opacity-5'
                }`}
              >
                <div>
                  <p className="font-semibold text-sm md:text-base">{service.name}</p>
                  <p className="text-xs md:text-sm text-gray-400">₹{service.price.toLocaleString()}</p>
                </div>
                {selected.includes(service.id) && (
                  <FiCheck className="w-4 h-4 md:w-5 md:h-5 text-neon-purple" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-8 rounded-2xl h-fit md:sticky md:top-32"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Estimated Quote</h3>
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-700">
              {selected.map((id) => {
                const service = services.find((s) => s.id === id)
                return (
                  <div key={id} className="flex justify-between text-gray-300 text-sm md:text-base">
                    <span className="truncate pr-2">{service?.name}</span>
                    <span className="whitespace-nowrap">₹{service?.price.toLocaleString()}</span>
                  </div>
                )
              })}
            </div>
            <div className="mb-4 md:mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm md:text-base">Total</span>
                <span className="text-2xl md:text-3xl font-bold gradient-text">
                  ₹{total.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-gray-500">Starting from selected services</p>
            </div>
            <motion.a
              href="https://wa.me/919591310740"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 md:px-6 py-3 bg-gradient-neon rounded-full font-semibold text-dark text-center block neon-glow-hover text-sm md:text-base"
            >
              Get Quote on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
