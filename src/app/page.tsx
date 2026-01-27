import {
  Navigation,
  Hero,
  About,
  Experience,
  Skills,
  Certifications,
  Education,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
