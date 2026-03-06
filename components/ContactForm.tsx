'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass p-8 rounded-2xl space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-white bg-opacity-5 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-smooth"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-white bg-opacity-5 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-smooth"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full bg-white bg-opacity-5 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-smooth"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-white bg-opacity-5 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-smooth resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400 text-sm"
        >
          Message sent successfully! We'll get back to you soon.
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-400 text-sm"
        >
          Failed to send message. Please try again.
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={loading}
        type="submit"
        className="w-full px-6 py-3 bg-gradient-neon rounded-lg font-semibold text-dark flex items-center justify-center gap-2 neon-glow-hover disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <FiSend className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </motion.form>
  )
}
