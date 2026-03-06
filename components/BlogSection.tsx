'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiClock } from 'react-icons/fi'

const blogs = [
  {
    id: 1,
    title: 'Tech Innovators Summit 2024',
    category: 'Events',
    readTime: '5 min read',
    description: 'Join us at the annual tech summit where industry leaders discuss the future of technology.',
  },
  {
    id: 2,
    title: 'Startup Networking Meetup',
    category: 'Community',
    readTime: '4 min read',
    description: 'Connect with fellow entrepreneurs and innovators in our exclusive networking event.',
  },
  {
    id: 3,
    title: 'AI & Machine Learning Workshop',
    category: 'Workshop',
    readTime: '8 min read',
    description: 'Learn the fundamentals of AI and ML from industry experts in this hands-on workshop.',
  },
  {
    id: 4,
    title: 'Digital Marketing Trends 2024',
    category: 'Marketing',
    readTime: '6 min read',
    description: 'Explore the latest trends shaping digital marketing strategies this year.',
  },
  {
    id: 5,
    title: 'Cybersecurity Essentials',
    category: 'Security',
    readTime: '7 min read',
    description: 'Essential security practices every business should implement to protect their data.',
  },
  {
    id: 6,
    title: 'Cloud Computing Best Practices',
    category: 'Technology',
    readTime: '6 min read',
    description: 'Optimize your cloud infrastructure with these proven best practices.',
  },
]

export default function BlogSection() {
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
            Insights & Articles
          </h2>
          <p className="text-gray-400">Stay updated with the latest in technology and innovation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl group cursor-pointer neon-glow-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neon-purple uppercase">
                  {blog.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <FiClock className="w-3 h-3" />
                  {blog.readTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-purple transition-smooth">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-neon-purple hover:text-neon-pink transition-smooth font-semibold text-sm"
              >
                Read More
                <FiArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
