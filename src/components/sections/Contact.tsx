'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section, SectionHeader, Button } from '../ui'
import { Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react'

const contactInfo = {
  email: 'edwardjgriggs@gmail.com',
  phone: '276-701-1863',
  location: 'Yorktown, VA 23693',
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const emailSubject = encodeURIComponent('Reaching Out - Professional Opportunity')
  const emailBody = encodeURIComponent(
    `Hi Edward,\n\nI came across your resume and would like to connect regarding a potential opportunity.\n\nBest regards,`
  )

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto container-padding">
        <SectionHeader
          title="Get in Touch"
          subtitle="Interested in working together? I'd love to hear from you."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl glass"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>

            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`}
                className="group flex items-center gap-4 p-3 rounded-lg hover:bg-navy-700/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/30 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-all">
                  <Mail className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-gray-200 group-hover:text-accent-400 transition-colors">
                    {contactInfo.email}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                className="group flex items-center gap-4 p-3 rounded-lg hover:bg-navy-700/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/30 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-all">
                  <Phone className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="text-gray-200 group-hover:text-accent-400 transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-4 p-3">
                <div className="w-10 h-10 rounded-lg bg-navy-700/50 border border-navy-600/50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-gray-300">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl glass relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-navy-800/50" />

            <div className="relative">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to Connect?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Whether you have a project in mind, a role that might be a good fit, or just want
                to discuss IT and cybersecurity, I&apos;m always open to conversations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  href={`mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`}
                  className="flex-1"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <Button
                  variant="secondary"
                  href="/resume.pdf"
                  download="Edward_Griggs_Resume.pdf"
                  className="flex-1"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
