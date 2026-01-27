'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  download?: boolean | string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, download, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary:
        'bg-accent-500 text-navy-950 hover:bg-accent-400 hover:shadow-glow active:bg-accent-600',
      secondary:
        'bg-transparent border border-accent-500/50 text-accent-400 hover:bg-accent-500/10 hover:border-accent-400 hover:shadow-glow-sm',
      ghost:
        'bg-transparent text-gray-300 hover:text-accent-400 hover:bg-navy-800/50',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-5 py-2.5 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-2',
    }

    const classes = clsx(baseStyles, variants[variant], sizes[size], className)

    if (href) {
      return (
        <motion.a
          href={href}
          download={download}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
