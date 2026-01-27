'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section, SectionHeader } from '../ui'
import {
  Cloud,
  Shield,
  Settings,
  FileCode,
  Workflow,
  BookOpen,
  Monitor,
  Lock,
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Identity',
    icon: Cloud,
    skills: ['Microsoft 365', 'Entra ID (Azure AD)', 'SharePoint Online', 'Exchange Online'],
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    skills: ['NIST SP 800-171', 'ISO 9001', 'Security Best Practices', 'Access Controls'],
  },
  {
    title: 'IT Administration',
    icon: Settings,
    skills: ['Account Provisioning', 'Group Policies', 'Endpoint Management', 'Remote Support'],
  },
  {
    title: 'Automation',
    icon: Workflow,
    skills: ['Onboarding/Offboarding Workflows', 'Email Automation', 'Role-Based Access Setup'],
  },
  {
    title: 'Web Development',
    icon: FileCode,
    skills: ['WordPress', 'HTML', 'CSS', 'SharePoint Intranet Development'],
  },
  {
    title: 'Policy & Governance',
    icon: BookOpen,
    skills: ['IT Policy Development', 'AI Policy Creation', 'Compliance Documentation'],
  },
  {
    title: 'Support & Troubleshooting',
    icon: Monitor,
    skills: ['Hardware/Software Support', 'Network Configuration', 'Device Setup', 'Password Management'],
  },
  {
    title: 'Documentation',
    icon: Lock,
    skills: ['Systems Documentation', 'Process Building', 'Configuration Management', 'Knowledge Base'],
  },
]

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = category.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group p-5 rounded-xl glass glass-hover"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/30 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-all duration-300">
          <Icon className="w-5 h-5 text-accent-400" />
        </div>
        <h3 className="text-base font-semibold text-white group-hover:text-accent-400 transition-colors">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-medium rounded-full bg-navy-700/50 text-gray-300 border border-navy-600/50 hover:border-accent-500/30 hover:text-accent-400 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <Section id="skills" className="bg-navy-900/30">
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeader
          title="Skills & Tools"
          subtitle="Technologies and methodologies I work with to deliver robust IT solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
