'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section, SectionHeader } from '../ui'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

interface EducationItem {
  school: string
  location: string
  degree: string
  field: string
  date: string
  gpa?: string
}

const education: EducationItem[] = [
  {
    school: "University of Virginia's College at Wise",
    location: 'Wise, VA',
    degree: 'Bachelor of Arts',
    field: 'Fine Arts',
    date: 'May 2019',
    gpa: '2.8',
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <Section id="education" className="bg-navy-900/30">
      <div className="max-w-4xl mx-auto container-padding">
        <SectionHeader
          title="Education"
          subtitle="Academic foundation supporting my career in technology."
        />

        <div ref={ref} className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl glass glass-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-all duration-300">
                  <GraduationCap className="w-7 h-7 text-accent-400" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-gray-400">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 font-mono">
                      <Calendar className="w-4 h-4" />
                      {edu.date}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded bg-navy-700/50 border border-navy-600/50">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
