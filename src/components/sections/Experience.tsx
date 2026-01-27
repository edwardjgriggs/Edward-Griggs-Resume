'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section, SectionHeader, Card } from '../ui'
import { Calendar, MapPin, Building2 } from 'lucide-react'

interface ExperienceItem {
  company: string
  location: string
  title: string
  period: string
  current?: boolean
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'NewView Oklahoma',
    location: 'Oklahoma City, OK',
    title: 'Contract Closeout Specialist',
    period: 'Nov 2024 - Present',
    current: true,
    bullets: [
      'Manage contract documentation and assist in finalizing federal contract closeouts.',
      'Ensure compliance with federal acquisition regulations and internal standards.',
      'Collaborate with visually impaired team members to maintain efficient workflows.',
      'Frequently assigned additional responsibilities due to consistent, accurate performance.',
    ],
  },
  {
    company: 'Aalis Management Consulting',
    location: 'Alexandria, VA',
    title: 'Systems Administrator',
    period: 'July 2023 - Present',
    current: true,
    bullets: [
      'Designed, developed, and launched "Aalis Connect," a SharePoint-based intranet centralizing organizational communication and knowledge sharing.',
      'Administered and managed Microsoft 365 ecosystem (account provisioning, permissions, security configurations), implementing group policies that streamlined IT governance.',
      'Built the IT support function from the ground up for a growing small business; established policies, procedures, and workflows for a two-person IT team.',
      'Created and implemented company-wide IT and AI policies aligned with security, compliance, and ethical use standards.',
      'Streamlined onboarding/offboarding by automating welcome emails, account setup, and role-based access; reduced setup time and increased consistency.',
      'Designed, developed, and managed the company public website; owned updates, content strategy, and performance optimization.',
      'Provided remote technical support to staff/contractors across platforms; reduced downtime and improved productivity.',
      'Supported ISO 9001 certification and drove compliance with NIST SP 800-171; contributed to cybersecurity readiness.',
    ],
  },
  {
    company: 'Planting Hope Global',
    location: 'Remote',
    title: 'Web & IT Support Specialist',
    period: 'Dec 2020 - July 2023',
    current: false,
    bullets: [
      'Designed, maintained, and updated organization website using WordPress, HTML, and CSS.',
      'Provided IT support: account setup, password resets, troubleshooting hardware/software.',
      'Assisted with network configuration and device setup for remote staff.',
      'Managed hosting, updates, backups, and basic security controls.',
      'Implemented access controls and followed security best practices to protect organizational data.',
      'Integrated tools such as Mailchimp and analytics platforms for communication/reporting.',
      'Documented systems/configurations/processes to support continuity and onboarding.',
    ],
  },
]

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector - visible only on desktop */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-navy-600 to-transparent" />

      {/* Timeline dot */}
      <div className="hidden md:flex absolute -left-[5px] top-8 w-[10px] h-[10px] rounded-full bg-accent-500 border-2 border-navy-950 z-10">
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-50" />
        )}
      </div>

      <Card className="md:ml-8 p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
              {experience.current && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30">
                  Current
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {experience.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 font-mono">
            <Calendar className="w-4 h-4" />
            {experience.period}
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500 mt-2" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

export function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-4xl mx-auto container-padding">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey in IT systems administration, web development, and compliance."
        />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
