'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Honeybee',
    description: 'Interactive Learning System',
    category: 'EdTech',
    gradient: 'from-neon-purple to-neon-pink',
  },
  {
    id: 2,
    title: 'SkillBridge',
    description: 'Smart Nursing Platform',
    category: 'Healthcare',
    gradient: 'from-neon-pink to-neon-blue',
  },
  {
    id: 3,
    title: 'Tipy',
    description: 'Textile Operations Platform',
    category: 'Enterprise',
    gradient: 'from-neon-blue to-neon-purple',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${project.gradient} p-0.5 rounded-2xl mb-4 overflow-hidden`}>
                <div className="bg-dark rounded-2xl p-6 md:p-8 h-40 md:h-48 flex flex-col justify-between group-hover:bg-opacity-80 transition-smooth">
                  <div>
                    <span className="text-xs font-semibold text-neon-purple uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2 group-hover:text-neon-purple transition-smooth">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-neon-purple hover:text-neon-pink transition-smooth font-semibold text-sm md:text-base"
              >
                View Case Study
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
