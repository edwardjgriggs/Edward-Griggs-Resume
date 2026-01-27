'use client'

import { Section, SectionHeader } from '../ui'
import { User, Shield, Server, Globe } from 'lucide-react'

const highlights = [
  {
    icon: Server,
    title: 'IT Infrastructure',
    description:
      'Built IT support function from the ground up, establishing policies, procedures, and workflows for growing organizations.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description:
      'Supported ISO 9001 certification and NIST SP 800-171 alignment; created company-wide IT and AI policies.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Designed and managed organizational websites and intranets using SharePoint, WordPress, HTML, and CSS.',
  },
  {
    icon: User,
    title: 'Support Excellence',
    description:
      'Provided remote technical support across platforms, reducing downtime and improving productivity for distributed teams.',
  },
]

export function About() {
  return (
    <Section id="about" className="bg-navy-900/30">
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeader
          title="About Me"
          subtitle="A dedicated IT professional focused on building secure, efficient systems and empowering teams to do their best work."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group p-6 rounded-xl glass glass-hover transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-500/10 border border-accent-500/30 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
