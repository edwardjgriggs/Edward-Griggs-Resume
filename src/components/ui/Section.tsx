'use client'

import { forwardRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import clsx from 'clsx'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, delay = 0, children, ...props }, ref) => {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
      <motion.section
        ref={(node) => {
          (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={clsx('section-padding', className)}
        {...(props as React.ComponentProps<typeof motion.section>)}
      >
        {children}
      </motion.section>
    )
  }
)

Section.displayName = 'Section'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={clsx('mb-12 md:mb-16', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}

export { Section, SectionHeader }
