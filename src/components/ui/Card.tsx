'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    const baseStyles =
      'rounded-xl bg-navy-800/40 backdrop-blur-xl border border-navy-600/30 transition-all duration-300'

    const hoverStyles = hover
      ? 'hover:bg-navy-700/50 hover:border-accent-500/30 hover:shadow-glow-sm'
      : ''

    return (
      <motion.div
        ref={ref}
        className={clsx(baseStyles, hoverStyles, className)}
        whileHover={hover ? { y: -4 } : undefined}
        transition={{ duration: 0.2 }}
        {...(props as React.ComponentProps<typeof motion.div>)}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
