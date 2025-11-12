import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Reveal({ children, delay = 0, y = 16 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      {/* Floating accent blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-2xl"
        animate={{ y: [0, 24, -12, 0], x: [0, 10, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.35),transparent_60%)] blur-2xl"
        animate={{ y: [0, -20, 10, 0], x: [0, -12, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-[92%] max-w-6xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Where ideas meet imagination
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Hi, I’m <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Deeraj RM</span> — a Visual Storyteller turning ideas into design magic.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Designs that make brands unforgettable. Every pixel tells a story.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex items-center gap-4">
              <a href="#work" className="group relative inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-white">
                <span className="absolute inset-0 -z-10 rounded-full bg-blue-500/40 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Explore My Work</span>
                <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  →
                </motion.span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest">SCROLL</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} className="block h-6 w-[2px] rounded bg-slate-400" />
        </div>
      </motion.div>
    </section>
  )
}

function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-1 items-center gap-10 py-24 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Design isn’t what it looks like — it’s what it makes you feel.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-slate-600">
              I craft visual stories for brands and products. My work blends minimal aesthetics with emotional resonance, transforming complex ideas into memorable experiences.
            </p>
          </Reveal>
        </div>
        <div ref={ref} className="order-1 md:order-2">
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-200 via-cyan-100 to-white"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-full w-full object-cover mix-blend-multiply"
              initial={{ scale: 1.12 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const projects = [
  { title: 'Branding — Coral Studio', cat: 'Branding', img: 'https://images.unsplash.com/photo-1529336953121-a0ce123b805f?q=80&w=1400&auto=format&fit=crop' },
  { title: 'UI/UX — Flow Banking', cat: 'UI/UX', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Motion — Neon Opener', cat: 'Motion Graphics', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Social — Summer Campaign', cat: 'Social Media', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Branding — Northwood', cat: 'Branding', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop' },
  { title: 'UI/UX — Studio CMS', cat: 'UI/UX', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1400&auto=format&fit=crop' },
]

function Portfolio() {
  return (
    <section id="work" className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-slate-500">Selected Works that Speak Louder than Words</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Portfolio Showcase</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#" 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.04 }}
              className="group relative block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <motion.span
                  className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs text-slate-700 backdrop-blur"
                  initial={{ y: 12, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {p.cat}
                </motion.span>
                <h3 className="mt-2 text-lg font-semibold text-white drop-shadow group-hover:translate-y-0 md:translate-y-1 md:text-xl">
                  {p.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

const tools = [
  { name: 'Adobe Photoshop', icon: '🅿️' },
  { name: 'Adobe Illustrator', icon: '🅰️' },
  { name: 'Adobe After Effects', icon: '✨' },
  { name: 'Figma', icon: '🎛️' },
  { name: 'Blender', icon: '🧊' },
  { name: 'Cinema 4D', icon: '🎥' },
]

function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Where creativity meets precision</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-center shadow-sm"
            >
              <div className="text-3xl">{t.icon}</div>
              <div className="mt-2 text-sm font-medium text-slate-700">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const quotes = [
  {
    q: 'Deeraj elevated our brand with a striking visual system. Results exceeded expectations.',
    a: 'Maya Patel, Brand Director — Coral Studio',
  },
  {
    q: 'A perfect blend of aesthetics and strategy. Our launch campaign performed 2x better.',
    a: 'Alex Nguyen, Marketing Lead — Flow Bank',
  },
  { q: 'Every pixel tells a story — and our customers felt it.', a: 'Sofia Rossi, Product Manager — Northwood' },
]

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Trusted by brands, loved by audiences</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <motion.div
                aria-hidden
                className="absolute -top-6 right-6 h-12 w-12 rounded-xl bg-blue-100"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <p className="relative text-slate-700">“{c.q}”</p>
              <p className="mt-4 text-sm font-medium text-slate-500">{c.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const hue = useTransform(scrollYProgress, [0, 1], [200, 260])

  return (
    <section id="contact" ref={ref} className="relative py-24">
      <motion.div
        style={{ background: hue.to((h) => `linear-gradient(135deg, hsl(${h}, 100%, 97%), hsl(${h + 40}, 100%, 95%))`) }}
        className="absolute inset-0"
      />
      <div className="relative mx-auto w-[92%] max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Let’s create something extraordinary together.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-slate-600">Where ideas meet imagination. Tell me about your project — I’ll bring it to life.</p>
        </Reveal>

        <div className="mt-10 flex justify-center gap-4">
          {['dribbble', 'behance', 'instagram', 'linkedin'].map((s, i) => (
            <motion.a
              key={s}
              href="#"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
            >
              {s}
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur md:grid-cols-2"
        >
          <div className="md:col-span-1">
            <label className="text-sm text-slate-600">Name</label>
            <input placeholder="Your name" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-200 focus:ring" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm text-slate-600">Email</label>
            <input type="email" placeholder="you@domain.com" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-200 focus:ring" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Project details</label>
            <textarea rows="4" placeholder="Tell me about your vision…" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-200 focus:ring" />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button type="button" className="group relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white">
              <span className="absolute inset-0 -z-10 rounded-full bg-blue-500/40 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span>Hire Me</span>
              <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} className="relative">→</motion.span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-b-2xl bg-white/70 px-4 py-3 backdrop-blur shadow-sm">
        <a href="#home" className="text-sm font-semibold tracking-wide text-slate-900">DRM</a>
        <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#work" className="hover:text-slate-900">Work</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#testimonials" className="hover:text-slate-900">Impact</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white">Hire Me</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <footer className="border-t border-slate-100 py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Deeraj RM — Visual Storyteller</footer>
    </div>
  )
}
