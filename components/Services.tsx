'use client'

import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiCpu, FiTrendingUp, FiShield, FiPackage } from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
  },
  {
    icon: FiCpu,
    title: 'Software Development',
    description: 'Custom enterprise software tailored to your business needs.',
  },
  {
    icon: FiTrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing to grow your online presence.',
  },
  {
    icon: FiShield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
  },
  {
    icon: FiPackage,
    title: 'Sustainability Tech',
    description: 'Eco-friendly technology solutions for a sustainable future.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass p-6 md:p-8 rounded-2xl group cursor-pointer neon-glow-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-10 h-10 md:w-12 md:h-12 bg-gradient-neon rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-smooth"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-dark" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-neon-purple transition-smooth">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
