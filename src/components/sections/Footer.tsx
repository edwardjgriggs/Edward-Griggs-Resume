'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-navy-800/50"
    >
      <div className="max-w-6xl mx-auto container-padding">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="font-mono text-accent-400">EG</span>
            <span>&copy; {currentYear} Edward Griggs. All rights reserved.</span>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-gray-500 hover:text-accent-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-gray-500 hover:text-accent-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-500 hover:text-accent-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="/resume"
              className="text-sm text-gray-500 hover:text-accent-400 transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </motion.footer>
  )
}
