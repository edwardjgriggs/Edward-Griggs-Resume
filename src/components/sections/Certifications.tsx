'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section, SectionHeader } from '../ui'
import { Award, Calendar, ExternalLink } from 'lucide-react'

interface Certification {
  name: string
  issuer: string
  date: string
  description?: string
  verifyUrl?: string
}

const certifications: Certification[] = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'January 2026',
    description:
      'Industry-leading certification validating baseline cybersecurity skills, including network security, compliance, operational security, and threat management.',
    verifyUrl: 'https://www.credly.com/badges/3b9d7d06-964d-40c1-bc37-2bba68a05336/public_url',
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <Section id="certifications">
      <div className="max-w-4xl mx-auto container-padding">
        <SectionHeader
          title="Certifications"
          subtitle="Professional certifications validating expertise in cybersecurity."
        />

        <div ref={ref} className="grid gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl glass glass-hover overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/20 via-transparent to-accent-500/20 blur-xl" />
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/50 group-hover:shadow-glow-sm transition-all duration-300">
                  <Award className="w-7 h-7 text-accent-400" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 font-mono">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>

                  {cert.description && (
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  )}

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
