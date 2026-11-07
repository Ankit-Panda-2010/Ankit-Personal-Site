import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
} from 'lucide-react'

const projects = [
  {
    index: '01',
    title: 'CivicLens',
    role: 'Co-Founder & Developer',
    period: '2026 — Present',
    description:
      'Co-founding the project and developing its product and technical foundation.',
    stack: ['Product', 'Development', 'Civic Tech'],
  },
  {
    index: '02',
    title: 'FRC Scouting Platform',
    role: 'Developer · YETI Robotics 3506',
    period: '2024 — 2026',
    description:
      'Helped a competitive robotics team develop its scouting platform using a modern full-stack web stack.',
    stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    index: '03',
    title: 'studiio.xyz',
    role: 'Web Development Intern',
    period: '2025',
    description:
      'Worked on frontend architecture and maintained full-stack infrastructure for a student development hub.',
    stack: ['Next.js', 'Web Infrastructure', 'DevOps'],
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

export default function App() {
  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Ankit Panda — home">
            <span className="wordmark-mark">A</span>
            <span>Ankit Panda</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </nav>

          <a className="header-contact" href="mailto:ankitpanda2010@gmail.com">
            Contact <ArrowUpRight size={14} strokeWidth={1.7} />
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="hero container">
          <div className="hero-copy">
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
              I build software, study applied mathematics, and explore the intersection of technology and finance.
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

          <div className="hero-footnote">
            <span>Scroll to explore</span>
            <span className="hero-line" />
            <span>01 — 05</span>
          </div>
        </section>

        <section id="work" className="section container">
          <SectionHeading number="01" title="Selected work" />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <span className="project-index">{project.index}</span>
                <div className="project-main">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <ArrowUpRight className="project-arrow" size={25} strokeWidth={1.4} />
                  </div>
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <span className="project-period">{project.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHeading number="02" title="Experience" />
          <div className="experience-grid">
            <article className="experience-card">
              <div className="experience-icon"><BriefcaseBusiness size={18} strokeWidth={1.5} /></div>
              <p className="card-eyebrow">Professional</p>
              <h3>Web Development Intern</h3>
              <p className="experience-company">studiio.xyz</p>
              <p className="experience-date">August 2025 — December 2025</p>
              <p className="experience-body">
                Developed frontend architecture and worked across web development and DevOps to maintain a Next.js platform.
              </p>
            </article>

            <article className="experience-card">
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

        <section className="section container" aria-labelledby="leadership-heading">
          <SectionHeading number="03" title="Leadership" id="leadership-heading" />
          <div className="leadership-list">
            {leadership.map((item, index) => (
              <article className="leadership-row" key={item.organization}>
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

        <section id="about" className="section container">
          <SectionHeading number="04" title="About" />
          <div className="about-grid">
            <div className="about-statement">
              <p>
                I’m an IB Diploma student interested in problems that reward both technical precision and analytical thinking.
              </p>
            </div>
            <div className="about-details">
              <p>
                My time is split between building software, exploring quantitative finance, and leading student organizations. I also care about expanding access to STEM through coaching, mentorship, and community outreach.
              </p>
              <div className="detail-row">
                <span>Education</span>
                <p>North Mecklenburg High School<br />IB Diploma · 2024 — 2028</p>
              </div>
              <div className="detail-row">
                <span>Location</span>
                <p className="with-icon"><MapPin size={14} /> Charlotte, NC</p>
              </div>
              <div className="skills">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-inner">
            <p className="kicker">05 · Contact</p>
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
