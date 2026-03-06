'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import PricingCalculator from '@/components/PricingCalculator'
import BlogSection from '@/components/BlogSection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <PricingCalculator />
      <BlogSection />
    </>
  )
}
