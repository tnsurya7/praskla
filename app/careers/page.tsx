'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiClock } from 'react-icons/fi'

const jobs = [
  {
    id: 1,
    title: 'Full Stack Web Developer',
    type: 'Full-time',
    location: 'Tamil Nadu, India',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Full Stack Web Developer Intern',
    type: 'Internship',
    location: 'Tamil Nadu, India',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
  },
  {
    id: 3,
    title: 'Mobile App Developer',
    type: 'Full-time',
    location: 'Tamil Nadu, India',
    skills: ['React Native', 'Flutter', 'JavaScript', 'Firebase'],
  },
  {
    id: 4,
    title: 'Mobile App Developer Intern',
    type: 'Internship',
    location: 'Tamil Nadu, India',
    skills: ['React Native', 'JavaScript', 'Mobile UI/UX'],
  },
  {
    id: 5,
    title: 'Senior Full Stack Web Developer',
    type: 'Full-time',
    location: 'Tamil Nadu, India',
    skills: ['Next.js', 'Node.js', 'System Design', 'Team Leadership'],
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-dark pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Join Our Team
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            We're looking for talented individuals to help us build the future of technology.
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-4 md:p-6 rounded-2xl hover:bg-opacity-10 transition-smooth group cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-neon-purple transition-smooth">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FiClock className="w-3 h-3 md:w-4 md:h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-3 h-3 md:w-4 md:h-4" />
                      {job.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 md:px-3 py-1 bg-neon-purple bg-opacity-20 text-neon-purple rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full md:w-auto px-4 md:px-6 py-2 bg-gradient-neon rounded-full font-semibold text-dark hover:shadow-lg transition-smooth whitespace-nowrap text-sm md:text-base">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
