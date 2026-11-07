import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  BriefcaseBusiness,
  Circle,
  Code2,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const projects = [
  {
    id: '01',
    type: 'PRODUCT / 2026',
    title: 'Your flagship project',
    description:
      'A short, sharp story about the problem, your thinking, and the outcome. Replace this with the project you want people to remember.',
    tags: ['Strategy', 'Design', 'Build'],
    color: 'var(--signal)',
    visual: 'orbit',
  },
  {
    id: '02',
    type: 'EXPERIMENT / 2026',
    title: 'The curious side project',
    description:
      'Show the work that reveals how you think. This is a natural home for an experiment, open-source tool, or creative build.',
    tags: ['Prototype', 'Code', 'Learning'],
    color: 'var(--blue)',
    visual: 'grid',
  },
  {
    id: '03',
    type: 'CASE STUDY / 2025',
    title: 'A meaningful collaboration',
    description:
      'Add a project where teamwork, constraints, and craft came together. Keep the details honest and make your contribution clear.',
    tags: ['Collaboration', 'Systems', 'Impact'],
    color: 'var(--acid)',
    visual: 'type',
  },
]

const experience = [
  {
    period: 'NOW',
    role: 'Your current role',
    company: 'Company or independent practice',
    note: 'What you own, what you are learning, and the kind of impact you are making.',
  },
  {
    period: 'BEFORE',
    role: 'Previous role',
    company: 'Previous company',
    note: 'A concise summary of your scope, collaborators, and most important contribution.',
  },
  {
    period: 'FOUNDATION',
    role: 'Education / origin story',
    company: 'School, program, or self-taught path',
    note: 'The chapter that shaped your point of view and gave you the tools you use today.',
  },
]

const capabilities = [
  'Product thinking',
  'Full-stack development',
  'Creative direction',
  'Rapid prototyping',
  'Systems design',
  'Storytelling',
]

function App() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('work')
  const spotlightRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  useEffect(() => {
    const onMove = (event) => {
      if (!spotlightRef.current) return
      spotlightRef.current.style.setProperty('--x', `${event.clientX}px`)
      spotlightRef.current.style.setProperty('--y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-section]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.dataset.section)
      },
      { rootMargin: '-25% 0px -55%', threshold: [0.1, 0.4, 0.7] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div ref={spotlightRef} className="site-shell selection:bg-[var(--ink)] selection:text-[var(--paper)]">
      <div className="pointer-spotlight" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[color:var(--paper-soft)]/85 backdrop-blur-xl">
        <div className="page-wrap flex h-[76px] items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" aria-label="Ankit home">
            <span className="logo-mark">A</span>
            <span className="hidden text-[12px] font-semibold uppercase leading-[1.15] tracking-[0.12em] sm:block">
              Ankit
              <br />
              Portfolio
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {['work', 'about', 'experience', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className={`nav-link ${activeSection === item ? 'is-active' : ''}`}>
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="icon-button" onClick={() => setDark((value) => !value)} aria-label="Toggle color theme">
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a href="#contact" className="button button-small hidden sm:flex">
              Let’s talk <ArrowUpRight size={15} />
            </a>
            <button className="icon-button md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <button className="icon-button absolute right-6 top-6" onClick={closeMenu} aria-label="Close menu">
          <X size={20} />
        </button>
        <span className="eyebrow mb-10">Navigation</span>
        {['work', 'about', 'experience', 'contact'].map((item, index) => (
          <a key={item} href={`#${item}`} onClick={closeMenu} className="mobile-link">
            <span>0{index + 1}</span>{item}
          </a>
        ))}
      </div>

      <main>
        <section id="top" className="hero page-wrap relative flex min-h-[100svh] flex-col justify-end pb-8 pt-32 md:pb-10">
          <div className="absolute right-0 top-28 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] lg:flex">
            <span className="status-dot" /> Available for the right opportunity
          </div>

          <div className="max-w-[1120px]">
            <p className="eyebrow hero-reveal mb-6">Hello, I’m Ankit — a curious builder</p>
            <h1 className="display hero-reveal hero-delay-1">
              I turn messy ideas
              <br />
              into <span className="display-accent">useful things.</span>
            </h1>
            <div className="hero-reveal hero-delay-2 mt-9 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
              <div className="flex gap-3">
                <a href="#work" className="button">
                  Explore my work <ArrowDown size={17} />
                </a>
                <a href="#about" className="button button-ghost">
                  More about me
                </a>
              </div>
              <p className="max-w-[500px] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-[var(--muted)] md:justify-self-end">
                Part thinker, part maker. I care about thoughtful products, precise execution, and the small details that make experiences feel inevitable.
              </p>
            </div>
          </div>

          <div className="hero-reveal hero-delay-3 mt-16 flex items-end justify-between border-t border-[var(--line)] pt-5">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              <Asterisk size={14} className="animate-spin-slow text-[var(--signal)]" />
              Built with curiosity
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Scroll to discover ↓</span>
          </div>
        </section>

        <section id="work" data-section="work" className="section page-wrap">
          <SectionHeader index="01" label="Selected work" title="A few things I’m proud of" />
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.id} className="project-row group">
                <div className="project-copy">
                  <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] md:mb-16">
                    <span>{project.id} / 03</span>
                    <span>{project.type}</span>
                  </div>
                  <h3 className="text-[clamp(2rem,4.2vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">{project.title}</h3>
                  <p className="mt-6 max-w-[520px] text-base leading-7 text-[var(--muted)]">{project.description}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
                  </div>
                  <button className="project-link mt-10" aria-label={`View ${project.title} case study placeholder`}>
                    Case study coming soon <ArrowUpRight size={18} />
                  </button>
                </div>
                <div className="project-visual" style={{ '--project-color': project.color }}>
                  <ProjectVisual type={project.visual} title={project.title} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" data-section="about" className="section border-y border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
          <div className="page-wrap">
            <SectionHeader dark index="02" label="About me" title="More signal. Less noise." />
            <div className="grid gap-16 pb-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div className="relative">
                <div className="portrait-placeholder">
                  <div className="portrait-grid" />
                  <div className="portrait-monogram">AK</div>
                  <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">Your photo goes here</span>
                </div>
                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">Portrait / Personality / Presence</p>
              </div>
              <div>
                <p className="about-lede">
                  I’m Ankit. I like learning fast, asking better questions, and making ideas tangible.
                </p>
                <div className="mt-12 grid gap-8 text-[15px] leading-7 text-white/60 sm:grid-cols-2">
                  <p>
                    Use this space for the human version of your story: what draws you to your work, what you notice that others miss, and how you like to collaborate.
                  </p>
                  <p>
                    Once you share your LinkedIn, we’ll replace every placeholder with your real experience while keeping the voice direct, warm, and unmistakably yours.
                  </p>
                </div>
                <div className="mt-14 flex flex-wrap gap-2">
                  {capabilities.map((capability) => <span key={capability} className="pill pill-dark">{capability}</span>)}
                </div>
                <a href="#contact" className="button button-invert mt-12">
                  Start a conversation <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" data-section="experience" className="section page-wrap">
          <SectionHeader index="03" label="Experience" title="The path so far" />
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={item.period}>
                <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">{item.period}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] md:text-3xl">{item.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--signal)]">{item.company}</p>
                </div>
                <p className="max-w-[440px] text-sm leading-6 text-[var(--muted)] md:justify-self-end">{item.note}</p>
                <span className="row-index">0{index + 1}</span>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <a href="#contact" className="text-link">Download résumé — add PDF later <ArrowDown size={15} /></a>
          </div>
        </section>

        <section className="marquee" aria-label="Personal principles">
          <div className="marquee-track">
            {[0, 1].map((set) => (
              <div className="flex shrink-0 items-center" key={set} aria-hidden={set === 1}>
                {['STAY CURIOUS', 'MAKE IT CLEAR', 'SHIP WITH CARE', 'KEEP LEARNING'].map((item) => (
                  <span className="marquee-item" key={item}><Sparkles size={27} /> {item}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" data-section="contact" className="contact-section">
          <div className="page-wrap py-20 md:py-28">
            <div className="mb-20 flex items-center justify-between border-b border-white/20 pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              <span>04 / Contact</span>
              <span className="flex items-center gap-2"><span className="status-dot status-dot-light" /> Open to good conversations</span>
            </div>
            <p className="eyebrow text-white/65">Have an idea, opportunity, or just want to say hello?</p>
            <a href="mailto:hello@example.com" className="contact-title group">
              Let’s make
              <br />
              something <span>great.</span>
              <ArrowUpRight className="contact-arrow" />
            </a>
            <div className="mt-20 grid gap-10 border-t border-white/20 pt-8 md:grid-cols-3 md:items-end">
              <div>
                <span className="footer-label">Email</span>
                <a className="footer-link" href="mailto:hello@example.com"><Mail size={15} /> hello@example.com</a>
              </div>
              <div>
                <span className="footer-label">Elsewhere</span>
                <div className="flex gap-5">
                  <a className="footer-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BriefcaseBusiness size={15} /> LinkedIn</a>
                  <a className="footer-link" href="https://github.com" target="_blank" rel="noreferrer"><Code2 size={15} /> GitHub</a>
                </div>
              </div>
              <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-white/40 md:text-right">
                Designed & built with intention<br />© {new Date().getFullYear()} Ankit
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function SectionHeader({ index, label, title, dark = false }) {
  return (
    <div className="section-header">
      <div className={`flex items-center justify-between border-b pb-5 font-mono text-[10px] uppercase tracking-[0.18em] ${dark ? 'border-white/20 text-white/55' : 'border-[var(--line)] text-[var(--muted)]'}`}>
        <span>{index} / {label}</span>
        <Circle size={8} fill="currentColor" />
      </div>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

function ProjectVisual({ type, title }) {
  if (type === 'orbit') {
    return (
      <div className="visual-orbit" aria-label={`Abstract visual for ${title}`}>
        <div className="orbit orbit-one"><span /></div>
        <div className="orbit orbit-two"><span /></div>
        <div className="orbit-core">IDEA<br />→<br />REALITY</div>
      </div>
    )
  }
  if (type === 'grid') {
    return (
      <div className="visual-grid" aria-label={`Abstract visual for ${title}`}>
        {Array.from({ length: 25 }).map((_, index) => <span key={index} style={{ '--i': index }} />)}
        <strong>MAKE<br />THE<br />THING.</strong>
      </div>
    )
  }
  return (
    <div className="visual-type" aria-label={`Abstract visual for ${title}`}>
      <span>THINK</span><span>MAKE</span><span>REFINE</span>
      <Asterisk className="visual-asterisk" />
    </div>
  )
}

export default App
