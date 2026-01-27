'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-navy-950">
        {/* Mesh grid */}
        <div className="absolute inset-0 mesh-bg opacity-50" />

        {/* Hero radial glow */}
        <div className="absolute inset-0 hero-glow" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-navy-600/30 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            {/* Glow effect behind photo */}
            <div className="absolute inset-0 rounded-full bg-accent-500/20 blur-xl scale-110" />

            {/* Photo container with border */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent-500/40 shadow-glow-sm">
              {!imageError ? (
                <Image
                  src="/profile.jpg"
                  alt="Edward Griggs headshot"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Fallback: Initials placeholder */
                <div className="w-full h-full bg-navy-800 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-400 font-mono">
                    EG
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Now pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/60 border border-navy-600/50 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
          </span>
          <span className="text-sm text-gray-300">
            <Briefcase className="w-3.5 h-3.5 inline mr-1.5 text-accent-400" />
            Systems Administrator @ Aalis • Contract Specialist @ NewView
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
        >
          Edward Griggs
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-accent-400 mb-6"
        >
          Systems Administrator • IT & Cybersecurity
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-4"
        >
          IT professional with expertise in Microsoft 365 administration, cybersecurity compliance,
          and building IT infrastructure from the ground up. Experienced in developing organizational
          policies, managing web platforms, and supporting distributed teams.
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center justify-center gap-2 text-gray-500 mb-8"
        >
          <MapPin className="w-4 h-4" />
          Yorktown, VA
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            href="/resume.pdf"
            download="Edward_Griggs_Resume.pdf"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
          <Button variant="secondary" size="lg" href="#contact">
            <Mail className="w-5 h-5" />
            Get in Touch
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
