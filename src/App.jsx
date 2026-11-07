"use client"

import { useEffect } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Mail,
  MapPin,
  Trophy,
} from 'lucide-react'

const projects = [
  {
    index: '01',
    title: 'DECA Test Parser and Taker',
    role: 'Interactive exam preparation tool',
    period: '2026',
    description:
      'Built a platform that transforms uploaded DECA practice-test PDFs into interactive quizzes with grading, feedback, explanations, analytics, and progress tracking.',
    stack: ['JavaScript', 'Tailwind CSS', 'PDF Parsing', 'Analytics'],
    href: 'https://deca-test-taker-seven.vercel.app',
  },
  {
    index: '02',
    title: 'Teen Money Hub',
    role: 'Student personal finance application',
    period: 'January 2026 — May 2026',
    description:
      'Built a simple, approachable money-management application designed specifically for high school students.',
    stack: ['JavaScript', 'Tailwind CSS', 'Personal Finance'],
    association: 'North Mecklenburg High School',
    href: 'https://teen-money-hub.vercel.app',
  },
  {
    index: '03',
    title: 'CivicLens',
    role: 'Co-Founder & Developer',
    period: '2026 — Present',
    description:
      'Co-founding the project and developing its product and technical foundation.',
    stack: ['Product', 'Development', 'Civic Tech'],
  },
  {
    index: '04',
    title: 'CORA',
    role: 'Cosmic Observation Research Archive',
    period: 'October 2025 — Present',
    description:
      'Built an application that filters publications for useful information for researchers, students, professors, and subject-matter experts.',
    stack: ['Project Management', 'Web Development', 'Research Tool'],
    contributors: 'Atharv and Anirvin',
  },
  {
    index: '05',
    title: 'Personal Website',
    role: 'Design & Development',
    period: '2025 — Present',
    description:
      'Designed and built this personal portfolio to present my projects, experience, coursework, leadership, awards, and interests in one place.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    href: 'https://ankit-personal-site.vercel.app',
  },
  {
    index: '06',
    title: 'FRC Scouting Platform',
    role: 'Developer · YETI Robotics 3506',
    period: '2024 — 2026',
    description:
      'Helped a competitive robotics team develop its scouting platform using a modern full-stack web stack.',
    stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    index: '07',
    title: '8th Grade IB Community Service Project',
    role: 'IB Community Service Project',
    period: 'September 2023 — February 2024',
    description:
      'Completed an eighth-grade community service project demonstrating communication, critical thinking, planning, and organization.',
    stack: ['Communication', 'Critical Thinking', 'Planning', 'Organization'],
    contributors: 'Manju Bhargav',
    association: 'Piedmont Open IB Middle School',
  },
]

const leadership = [
  {
    organization: 'DECA',
    role: 'Chapter Co-President',
    detail: 'Leading a 30+ member chapter and an 11-person leadership team.',
  },
  {
    organization: 'Science Olympiad',
    role: 'Vice President & Coach',
    detail: 'Organizing competition preparation and coaching Division B events.',
  },
  {
    organization: 'Math Club',
    role: 'President',
    detail: 'Leading AMC preparation, tutoring, and Mu Alpha Theta activities.',
  },
  {
    organization: 'Key Club',
    role: 'Co-President',
    detail: 'Coordinating service projects, meetings, and community partnerships.',
  },
]

const skills = [
  'Python',
  'Java',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Applied Mathematics',
]

const interests = [
  'Software Engineering',
  'Economics & Markets',
  'Quantitative Finance',
  'Applied Mathematics',
  'Data Analysis',
  'FinTech',
  'Robotics & Autonomous Systems',
  'STEM Education',
]

const coursework = [
  {
    track: 'AP',
    title: 'AP Calculus AB',
  },
  {
    track: 'AP',
    title: 'AP Computer Science Principles',
  },
  {
    track: 'AP',
    title: 'AP Statistics',
  },
  {
    track: 'AP',
    title: 'AP World History',
  },
  {
    track: 'IB',
    title: 'IB Analysis and Approaches SL',
  },
  {
    track: 'IB',
    title: 'IB Business Management SL',
  },
  {
    track: 'IB',
    title: 'IB History of the Americas HL',
  },
  {
    track: 'IB',
    title: 'IB Language B: French SL',
  },
  {
    track: 'IB',
    title: 'IB Literature HL',
  },
  {
    track: 'IB',
    title: 'IB Physics HL',
  },
  {
    track: 'IB',
    title: 'IB Theory of Knowledge',
  },
]

const languages = [
  { code: 'EN', language: 'English', proficiency: 'Native or bilingual', level: 5 },
  { code: 'OR', language: 'Oriya', proficiency: 'Native or bilingual', level: 5 },
  { code: 'FR', language: 'French', proficiency: 'Limited working', level: 2 },
  { code: 'HI', language: 'Hindi', proficiency: 'Limited working', level: 2 },
  { code: 'ES', language: 'Spanish', proficiency: 'Elementary', level: 1 },
]

const scienceOlympiadAwards = [
  {
    season: '2021 / 22',
    issued: 'January 2022',
    competitions: [
      {
        name: 'Chattahoochee',
        placements: [['Meteorology', '1st']],
      },
      {
        name: 'Regionals',
        placements: [
          ['Meteorology', '1st'],
          ['Dynamic Planet', '1st'],
          ['Rocks and Minerals', '1st'],
          ['Bio Process Lab', '3rd'],
          ['Fast Facts', '1st'],
        ],
      },
      {
        name: 'States',
        placements: [
          ['Rocks and Minerals', '1st'],
          ['Dynamic Planet', '8th'],
        ],
      },
    ],
  },
  {
    season: '2022 / 23',
    competitions: [
      {
        name: 'University of Pittsburg',
        placements: [['Dynamic Planet', '2nd']],
      },
      {
        name: 'Mentor',
        placements: [
          ['Dynamic Planet', '2nd'],
          ['Rocks and Minerals', '6th'],
          ['Meteorology', '7th'],
        ],
      },
      {
        name: 'Regionals',
        placements: [
          ['Crave the Wave', '4th'],
          ['Dynamic Planet', '1st'],
        ],
      },
      {
        name: 'States',
        placements: [
          ['Meteorology', '2nd'],
          ['Crave the Wave', '2nd'],
          ['Dynamic Planet', '7th'],
        ],
      },
    ],
  },
  {
    season: '2023 / 24',
    competitions: [
      {
        name: 'NC State Invitational',
        placements: [
          ['Optics', '3rd'],
          ['Wind Power', '3rd'],
        ],
      },
      {
        name: 'Solon',
        placements: [['Optics', '8th']],
      },
      {
        name: 'Regionals',
        placements: [
          ['Optics', '3rd'],
          ['Wind Power', '3rd'],
          ['Air Trajectory', '3rd'],
        ],
      },
      {
        name: 'States',
        placements: [
          ['Optics', '2nd'],
          ['Wind Power', '9th'],
          ['Microbe Mission', '3rd'],
        ],
      },
    ],
  },
  {
    season: '2024 / 25',
    competitions: [
      {
        name: 'Dodgen',
        placements: [
          ['Optics', '6th'],
          ['Experimental Design', '2nd'],
        ],
      },
      {
        name: 'NC State',
        placements: [
          ['Experimental Design', '1st'],
          ['Optics', '2nd'],
          ['Ecology', '4th'],
        ],
      },
      {
        name: 'CrabSO',
        placements: [
          ['Experimental Design', '2nd'],
          ['Ecology', '4th'],
        ],
      },
      {
        name: 'States',
        placements: [
          ['Wind Power', '1st'],
          ['Optics', '6th'],
          ['Ecology', '3rd'],
          ['Experimental Design', '8th'],
        ],
      },
    ],
  },
]

const totalPlacements = scienceOlympiadAwards.reduce(
  (total, season) => total + season.competitions.reduce(
    (seasonTotal, competition) => seasonTotal + competition.placements.length,
    0,
  ),
  0,
)

const decaAwards = [
  {
    result: '8th',
    title: 'North Carolina Career Development Conference Glass',
    category: 'Business Finance Series',
    date: 'February 2026',
    detail: 'Placed eighth statewide and qualified for ICDC as one of North Carolina’s eight qualifiers in the event.',
  },
  {
    result: 'Top 10',
    title: 'North Carolina Career Development Conference Finalist',
    category: 'Business Finance Series',
    date: 'February 2026',
    detail: 'Earned a top-ten overall combined score across the test and role-play portions of the event.',
  },
  {
    result: 'Medal',
    title: 'North Carolina Career Development Conference Test Medal',
    category: 'Business Finance Series',
    date: 'February 2026',
    detail: 'Received a test medal for performance on the Business Finance Series examination.',
  },
]

const additionalRecognition = [
  {
    title: 'AP Scholar Award',
    issuer: 'College Board',
    date: 'July 2026',
  },
  {
    title: 'AP National Recognition Award',
    issuer: 'College Board',
    date: 'June 2026',
  },
  {
    title: 'Global Nominee for the NASA Space Apps Challenge',
    issuer: 'NASA Space Apps',
    date: 'November 2025',
  },
  {
    title: 'Presidential Award for Educational Achievement',
    issuer: 'Academic recognition',
  },
]

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready')
    const shell = document.querySelector('.site-shell')
    const progress = document.querySelector('.scroll-progress')
    const revealItems = document.querySelectorAll('[data-reveal]')
    const spotlightItems = document.querySelectorAll('[data-spotlight]')
    const navLinks = Array.from(document.querySelectorAll('.desktop-nav a'))
    const navSections = navLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean)
    const heroPanel = document.querySelector('.hero-panel')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-order', index % 4)
      revealObserver.observe(item)
    })

    const updateActiveNav = () => {
      const marker = window.scrollY + window.innerHeight * 0.38
      let activeSection = navSections[0]

      navSections.forEach((section) => {
        if (section.offsetTop <= marker) activeSection = section
      })

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeSection?.id}`
        link.classList.toggle('is-active', isActive)
        if (isActive) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
    }

    const handleSpotlightMove = (event) => {
      const item = event.currentTarget
      const bounds = item.getBoundingClientRect()
      item.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
      item.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
    }

    const handlePanelMove = (event) => {
      if (prefersReducedMotion) return
      const bounds = heroPanel.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      heroPanel.style.setProperty('--panel-rotate-x', `${y * -3.5}deg`)
      heroPanel.style.setProperty('--panel-rotate-y', `${x * 4.5}deg`)
      heroPanel.style.setProperty('--panel-glow-x', `${(x + 0.5) * 100}%`)
      heroPanel.style.setProperty('--panel-glow-y', `${(y + 0.5) * 100}%`)
    }

    const resetPanel = () => {
      heroPanel?.style.setProperty('--panel-rotate-x', '0deg')
      heroPanel?.style.setProperty('--panel-rotate-y', '0deg')
    }

    const handlePointerMove = (event) => {
      shell?.style.setProperty('--pointer-x', `${event.clientX}px`)
      shell?.style.setProperty('--pointer-y', `${event.clientY}px`)
    }

    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      const value = height > 0 ? window.scrollY / height : 0
      progress?.style.setProperty('--scroll-progress', value)
      shell?.style.setProperty('--grid-shift', `${window.scrollY * -0.035}px`)
      updateActiveNav()
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    spotlightItems.forEach((item) => item.addEventListener('pointermove', handleSpotlightMove, { passive: true }))
    heroPanel?.addEventListener('pointermove', handlePanelMove, { passive: true })
    heroPanel?.addEventListener('pointerleave', resetPanel)
    handleScroll()

    return () => {
      revealObserver.disconnect()
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      spotlightItems.forEach((item) => item.removeEventListener('pointermove', handleSpotlightMove))
      heroPanel?.removeEventListener('pointermove', handlePanelMove)
      heroPanel?.removeEventListener('pointerleave', resetPanel)
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-glow" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Ankit Panda — home">
            <span className="wordmark-mark">A</span>
            <span>Ankit Panda</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#courses">Courses</a>
            <a href="#awards">Awards</a>
            <a href="#languages">Languages</a>
          </nav>

          <a className="header-contact" href="mailto:ankitpanda2010@gmail.com">
            Contact <ArrowUpRight size={14} strokeWidth={1.7} />
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="hero container">
          <div className="hero-copy hero-enter">
            <div className="availability">
              <span className="availability-dot" />
              Charlotte, North Carolina
            </div>

            <p className="kicker">Student · Developer · Aspiring Quant</p>
            <h1>
              Ankit
              <br />
              Panda<span className="cursor">_</span>
            </h1>
            <p className="hero-summary">
              I combine economics, software, and data analysis to build practical tools that solve real problems.
            </p>

            <div className="hero-actions">
              <a className="primary-link" href="#work">
                View selected work <ArrowDown size={15} />
              </a>
              <a
                className="secondary-link"
                href="https://github.com/Ankit-Panda-2010"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="hero-panel-wrap hero-enter hero-enter-delay">
            <div className="hero-panel" aria-label="Current profile summary">
              <div className="panel-chrome">
                <span />
                <span />
                <span />
                <p>ankit.json</p>
              </div>
              <div className="code-block">
                <p><span className="syntax-muted">{'{'}</span></p>
                <p className="code-line"><span className="syntax-key">"school"</span>: <span className="syntax-value">"North Mecklenburg HS"</span>,</p>
                <p className="code-line"><span className="syntax-key">"program"</span>: <span className="syntax-value">"IB Diploma · Class of 2028"</span>,</p>
                <p className="code-line"><span className="syntax-key">"building"</span>: <span className="syntax-value">"CivicLens"</span>,</p>
                <p className="code-line"><span className="syntax-key">"interests"</span>: <span className="syntax-muted">[</span></p>
                <p className="code-line code-indent"><span className="syntax-value">"software engineering"</span>,</p>
                <p className="code-line code-indent"><span className="syntax-value">"quantitative finance"</span>,</p>
                <p className="code-line code-indent"><span className="syntax-value">"applied mathematics"</span></p>
                <p className="code-line"><span className="syntax-muted">]</span></p>
                <p><span className="syntax-muted">{'}'}</span></p>
              </div>
              <div className="panel-footer">
                <span>UTF-8</span>
                <span>Next.js</span>
                <span>Ln 01, Col 01</span>
              </div>
            </div>
          </div>

          <div className="hero-footnote">
            <span>Scroll to explore</span>
            <span className="hero-line" />
            <span>01 — 08</span>
          </div>
        </section>

        <section id="about" className="section container" data-reveal>
          <SectionHeading number="01" title="About" />
          <div className="about-grid">
            <div className="about-statement">
              <p>
                I’m Ankit — a 16-year-old IB student, developer, and aspiring quant.
              </p>
            </div>
            <div className="about-details">
              <p>
                I’m most interested in the space where software, mathematics, and finance overlap. I spend my time building products, studying analytical problems, competing in STEM, and leading organizations at my school.
              </p>
              <p>
                Beyond my own projects, I care about making STEM more accessible through coaching, mentorship, community outreach, and helping other students get excited about technical subjects.
              </p>
            </div>
          </div>

          <div className="profile-facts" data-reveal>
            <div data-spotlight><span>Age</span><strong>16</strong></div>
            <div data-spotlight><span>Program</span><strong>IB Diploma</strong></div>
            <div data-spotlight><span>Graduation</span><strong>2028</strong></div>
            <div data-spotlight><span>Based in</span><strong><MapPin size={14} /> Charlotte, NC</strong></div>
          </div>

          <div className="about-lower-grid">
            <div className="interest-panel" data-reveal>
              <p className="panel-label">Interests & hobbies</p>
              <div className="interest-list">
                {interests.map((interest, index) => (
                  <div key={interest}>
                    <span>0{index + 1}</span>
                    <p>{interest}</p>
                  </div>
                ))}
              </div>
              <div className="football-card">
                <span className="football-mark">MU</span>
                <div>
                  <p>Football</p>
                  <strong>Big Manchester United fan</strong>
                </div>
                <span className="football-code">MUFC</span>
              </div>
              <div className="skills">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>

            <div className="online-panel" data-reveal>
              <p className="panel-label">Find me online</p>
              <div className="online-links">
                <a href="https://github.com/Ankit-Panda-2010" target="_blank" rel="noreferrer">
                  <span className="online-icon"><Code2 size={18} strokeWidth={1.5} /></span>
                  <span><strong>GitHub</strong><small>@Ankit-Panda-2010</small></span>
                  <ArrowUpRight size={17} strokeWidth={1.4} />
                </a>
                <a href="https://www.linkedin.com/in/ankit-panda-195ab22a7" target="_blank" rel="noreferrer">
                  <span className="online-icon"><BriefcaseBusiness size={18} strokeWidth={1.5} /></span>
                  <span><strong>LinkedIn</strong><small>Professional profile</small></span>
                  <ArrowUpRight size={17} strokeWidth={1.4} />
                </a>
                <a href="mailto:ankitpanda2010@gmail.com">
                  <span className="online-icon"><Mail size={18} strokeWidth={1.5} /></span>
                  <span><strong>Email</strong><small>ankitpanda2010@gmail.com</small></span>
                  <ArrowUpRight size={17} strokeWidth={1.4} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section container" data-reveal>
          <SectionHeading number="02" title="Selected work" />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <span className="project-index">{project.index}</span>
                <div className="project-main" data-reveal>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    {project.href ? (
                      <a
                        className="project-arrow-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="project-arrow" size={25} strokeWidth={1.4} />
                      </a>
                    ) : (
                      <ArrowUpRight className="project-arrow" size={25} strokeWidth={1.4} />
                    )}
                  </div>
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">{project.description}</p>
                  {(project.contributors || project.association) && (
                    <div className="project-context">
                      {project.contributors && <span>Contributors · {project.contributors}</span>}
                      {project.association && <span>Associated with · {project.association}</span>}
                    </div>
                  )}
                  <div className="tag-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <span className="project-period">{project.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container" data-reveal>
          <SectionHeading number="03" title="Experience" />
          <div className="experience-grid">
            <article className="experience-card" data-reveal data-spotlight>
              <div className="experience-icon"><BriefcaseBusiness size={18} strokeWidth={1.5} /></div>
              <p className="card-eyebrow">Professional</p>
              <h3>Web Development Intern</h3>
              <p className="experience-company">studiio.xyz</p>
              <p className="experience-date">August 2025 — December 2025</p>
              <p className="experience-body">
                Developed frontend architecture and worked across web development and DevOps to maintain a Next.js platform.
              </p>
            </article>

            <article className="experience-card" data-reveal data-spotlight>
              <div className="experience-icon"><Code2 size={18} strokeWidth={1.5} /></div>
              <p className="card-eyebrow">Technical team</p>
              <h3>Controls & Web Development</h3>
              <p className="experience-company">FRC Team 3506 YETI Robotics</p>
              <p className="experience-date">June 2024 — May 2026</p>
              <p className="experience-body">
                Worked with Java, autonomous path planning, computer vision, and web development on a competitive robotics team.
              </p>
            </article>
          </div>
        </section>

        <section id="courses" className="section container courses-section" data-reveal>
          <SectionHeading number="04" title="Coursework & learning" />
          <div className="courses-intro">
            <h3>What I’m studying.</h3>
            <div>
              <p>
                A rigorous mix of mathematics, computer science, business, history, languages, literature, and physics at North Mecklenburg High School.
              </p>
              <div className="course-counts">
                <span><strong>04</strong> AP courses</span>
                <span><strong>07</strong> IB courses</span>
              </div>
            </div>
          </div>
          <div className="course-grid">
            {coursework.map((course, index) => (
              <article className="course-card" key={course.title} data-reveal data-spotlight>
                <span className="course-index">{String(index + 1).padStart(2, '0')}</span>
                <p>{course.track} course</p>
                <h3>{course.title}</h3>
                <span className="course-detail">North Mecklenburg High School</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" aria-labelledby="leadership-heading" data-reveal>
          <SectionHeading number="05" title="Leadership" id="leadership-heading" />
          <div className="leadership-list">
            {leadership.map((item, index) => (
              <article className="leadership-row" key={item.organization} data-reveal>
                <span className="leadership-number">0{index + 1}</span>
                <div>
                  <h3>{item.organization}</h3>
                  <p>{item.role}</p>
                </div>
                <p className="leadership-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="awards" className="section container awards-section" data-reveal>
          <SectionHeading number="06" title="Awards" />

          <div className="award-category-heading" data-reveal>
            <span>01</span>
            <div>
              <p>Science Olympiad</p>
              <h3>Four seasons of competition</h3>
            </div>
          </div>

          <div className="awards-intro">
            <div className="awards-total">
              <span>{totalPlacements}</span>
              <p>placements across<br />four Science Olympiad seasons</p>
            </div>
            <p className="awards-summary">
              Four years of competition across earth science, physics, biology, engineering, and experimental design — from invitationals through state tournaments.
            </p>
          </div>

          <div className="award-seasons">
            {scienceOlympiadAwards.map((season, index) => {
              const seasonTotal = season.competitions.reduce(
                (total, competition) => total + competition.placements.length,
                0,
              )

              return (
                <details className="award-season" key={season.season} open={index === scienceOlympiadAwards.length - 1} data-reveal>
                  <summary>
                    <div className="award-season-title">
                      <span>Season</span>
                      <h3>{season.season}</h3>
                    </div>
                    <div className="award-season-meta">
                      <span>{seasonTotal} placements</span>
                      <span>Science Olympiad, Inc.</span>
                      {season.issued && <span>Issued {season.issued}</span>}
                    </div>
                    <span className="award-toggle"><ChevronDown size={17} /></span>
                  </summary>

                  <div className="award-competitions">
                    {season.competitions.map((competition) => (
                      <div className="competition" key={competition.name}>
                        <p>{competition.name}</p>
                        <div className="placement-list">
                          {competition.placements.map(([event, place]) => (
                            <div className="placement" key={`${competition.name}-${event}`}>
                              <span>{event}</span>
                              <strong className={`place place-${place.replace(/\D/g, '')}`}>{place}</strong>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              )
            })}
          </div>

          <div className="award-category-heading award-category-spaced" data-reveal>
            <span>02</span>
            <div>
              <p>DECA</p>
              <h3>Business Finance Series · North Carolina</h3>
            </div>
          </div>

          <div className="deca-awards-grid">
            {decaAwards.map((item) => (
              <article className="deca-award-card" key={item.title} data-reveal data-spotlight>
                <div className="deca-result">{item.result}</div>
                <div>
                  <p>{item.date} · DECA</p>
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                </div>
                <p className="deca-detail">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="award-category-heading award-category-spaced" data-reveal>
            <span>03</span>
            <div>
              <p>Academic & other</p>
              <h3>Recognition beyond competition</h3>
            </div>
          </div>

          <div className="recognition-grid" data-reveal>
            {additionalRecognition.map((item, index) => (
              <article className="recognition-feature" key={item.title} data-spotlight>
                <div className="recognition-icon">
                  {index === 0 ? <Trophy size={20} strokeWidth={1.4} /> : <Award size={20} strokeWidth={1.4} />}
                </div>
                <div>
                  <p>{item.issuer}{item.date ? ` · ${item.date}` : ''}</p>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
            <article className="recognition-secondary" data-spotlight>
              <div className="recognition-icon"><Award size={20} strokeWidth={1.4} /></div>
              <div>
                <p>Technical certifications</p>
                <h3>SQL (Basic) · Python (Basic) · Java (Basic) · Software Engineer Intern Certificate · Programming Basics</h3>
              </div>
            </article>
          </div>
        </section>

        <section id="languages" className="section container languages-section" data-reveal>
          <SectionHeading number="07" title="Languages" />
          <div className="languages-intro">
            <h3>Five languages.<br />Different levels.</h3>
            <p>
              A multilingual background spanning native fluency, working proficiency, and continued language study.
            </p>
          </div>
          <div className="language-grid">
            {languages.map((item) => (
              <article className="language-card" key={item.language} data-reveal data-spotlight>
                <div className="language-card-top">
                  <span>{item.code}</span>
                  <div>
                    <h3>{item.language}</h3>
                    <p>{item.proficiency}</p>
                  </div>
                </div>
                <div className="language-meter" aria-label={`${item.proficiency} proficiency`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span className={index < item.level ? 'is-filled' : ''} key={index} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-inner" data-reveal>
            <p className="kicker">08 · Contact</p>
            <h2>Let’s connect.</h2>
            <p className="contact-copy">
              I’m always interested in thoughtful conversations about software, quantitative finance, STEM, and new opportunities.
            </p>
            <a className="email-link" href="mailto:ankitpanda2010@gmail.com">
              <Mail size={18} strokeWidth={1.5} />
              ankitpanda2010@gmail.com
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ankit-panda-195ab22a7" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href="https://github.com/Ankit-Panda-2010" target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Ankit Panda</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </div>
  )
}

function SectionHeading({ number, title, id }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2 id={id}>{title}</h2>
      <div />
    </div>
  )
}
