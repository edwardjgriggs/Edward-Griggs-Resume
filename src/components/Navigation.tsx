'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Mail } from 'lucide-react'
import { Button } from './ui'
import clsx from 'clsx'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-navy-950/80 backdrop-blur-xl border-b border-navy-800/50'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-xl font-bold text-white hover:text-accent-400 transition-colors"
            >
              <span className="font-mono">EG</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={clsx(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    activeSection === link.href.slice(1)
                      ? 'text-accent-400 bg-accent-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-navy-800/50'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                href="/resume.pdf"
                download="Edward_Griggs_Resume.pdf"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
              <Button variant="primary" size="sm" href="#contact">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-navy-900/95 backdrop-blur-xl border-l border-navy-800/50 z-50 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={clsx(
                        'px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                        activeSection === link.href.slice(1)
                          ? 'text-accent-400 bg-accent-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-navy-800/50'
                      )}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3">
                  <Button
                    variant="secondary"
                    size="md"
                    href="/resume.pdf"
                    download="Edward_Griggs_Resume.pdf"
                    className="w-full"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    href="mailto:edwardjgriggs@gmail.com"
                    className="w-full"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
