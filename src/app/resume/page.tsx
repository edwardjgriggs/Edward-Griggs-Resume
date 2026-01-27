'use client'

import { motion } from 'framer-motion'
import { Download, ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-navy-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Site</span>
            </Link>

            <Button
              variant="primary"
              size="sm"
              href="/resume.pdf"
              download="Edward_Griggs_Resume.pdf"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Resume</h1>
            <p className="text-gray-400">Edward Griggs - Systems Administrator</p>
          </div>

          {/* PDF Viewer */}
          <div className="rounded-xl overflow-hidden border border-navy-700/50 bg-navy-900/50 backdrop-blur">
            {/* PDF embed using object tag with fallback */}
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-[80vh] min-h-[600px]"
            >
              {/* Fallback for browsers that don't support embedded PDFs */}
              <div className="flex flex-col items-center justify-center h-[80vh] min-h-[600px] p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-accent-400" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  PDF Preview Unavailable
                </h2>
                <p className="text-gray-400 mb-6 max-w-md">
                  Your browser doesn&apos;t support embedded PDF viewing.
                  Please download the resume to view it.
                </p>
                <Button
                  variant="primary"
                  href="/resume.pdf"
                  download="Edward_Griggs_Resume.pdf"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </object>
          </div>

          {/* Additional download prompt */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Having trouble viewing?{' '}
              <a
                href="/resume.pdf"
                download="Edward_Griggs_Resume.pdf"
                className="text-accent-400 hover:text-accent-300 transition-colors underline"
              >
                Download the PDF directly
              </a>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
