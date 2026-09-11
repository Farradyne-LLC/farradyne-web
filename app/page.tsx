"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const nav = [
  ["Work", "work"],
  ["Capabilities", "capabilities"],
  ["Company", "company"],
  ["Insights", "insights"],
];
const capabilities = [
  {
    title: "AI & Automation",
    line: "Build smarter operations.",
    text: "AI agents, workflow automation, internal systems and integrations designed around how your business actually works.",
    tags: [
      "AI agents",
      "Workflow automation",
      "Business integrations",
      "Internal tools",
    ],
    type: "automation",
  },
  {
    title: "Digital Products",
    line: "From concept to working product.",
    text: "Web platforms, applications, MVPs and custom digital experiences built to solve real business problems.",
    tags: [
      "Web applications",
      "MVP development",
      "Platforms",
      "Product design",
    ],
    type: "product",
  },
  {
    title: "Game Development",
    line: "Play meets production discipline.",
    text: "Game concepts, prototypes and production support backed by experience managing multidisciplinary development teams.",
    tags: ["Game production", "Prototyping", "Development management"],
    type: "games",
  },
  {
    title: "Creative Technology",
    line: "Technology meets media.",
    text: "Production systems, AI-assisted content workflows and digital experiences connecting creative work with technology.",
    tags: ["AI content systems", "Digital media", "Production technology"],
    type: "creative",
  },
];
const projects = [
  {
    name: "TAMCHE",
    category: "Consumer products / Commerce",
    title: "A brand built from the product outward.",
    text: "Consumer product development, packaging, visual identity and digital commerce for a premium haircare brand.",
    style: "tamche",
    cover: "Care, considered.",
    index: "01",
  },
  {
    name: "Boxing Projects",
    category: "Sports / Media / Digital platforms",
    title: "New experiences around the fight game.",
    text: "Digital platforms, media concepts, content infrastructure and new approaches to boxing events and athlete storytelling.",
    style: "boxing",
    cover: "BEYOND\nTHE RING.",
    index: "02",
  },
  {
    name: "UMH",
    category: "Media / Production / Content systems",
    title: "Infrastructure for modern content production.",
    text: "A Los Angeles production studio built around podcasting, video, livestreaming and scalable content workflows.",
    style: "umh",
    cover: "Ideas.\nOn air.",
    index: "03",
  },
  {
    name: "AquaHub",
    category: "Retail / Operations / Automation",
    title: "Technology applied to a physical business.",
    text: "Retail operations, digital systems and automation developed while building and operating a water retail business.",
    style: "aqua",
    cover: "Everyday essentials.\nBetter systems.",
    index: "04",
  },
  {
    name: "Game Development",
    category: "Games / Production / Interactive",
    title: "Eight years inside game production.",
    text: "Experience building games, managing distributed teams and creating production systems across complex interactive projects.",
    style: "game",
    cover: "WORLD BUILDING.\nFROM THE INSIDE.",
    index: "05",
  },
];
const steps = [
  ["Understand", "The business, the problem and what success looks like."],
  ["Design", "Define the product, system and experience."],
  ["Build", "Turn the plan into working technology."],
  ["Launch", "Put it into the real world."],
  ["Improve", "Measure, automate and evolve."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={diagonal ? "diagonal" : ""}
    >
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function Mark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`brand-mark ${className}`} />;
}
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView={reduce ? undefined : { y: [16, 0], opacity: [0.7, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
function Diagram({ type }: { type: string }) {
  return (
    <div className={`diagram ${type}`} aria-hidden="true">
      {type === "automation" ? (
        <>
          <span>INPUT</span>
          <i />
          <b>AI</b>
          <i />
          <span>ACTION</span>
        </>
      ) : type === "product" ? (
        <div className="browser-diagram">
          <div className="browser-top">
            <i />
            <i />
            <i />
          </div>
          <div className="browser-content">
            <span />
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      ) : type === "games" ? (
        <div className="timeline-diagram">
          <span>CONCEPT</span>
          <i />
          <span>PROTOTYPE</span>
          <i />
          <span>PLAY</span>
        </div>
      ) : (
        <div className="frames">
          <span>01</span>
          <span className="active-frame">▶</span>
          <span>03</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const reduce = useReducedMotion();
  const process = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: process,
    offset: ["start 85%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") setMenu(false);
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="shell nav-inner">
          <a href="#" className="brand" aria-label="Farradyne home">
            <Mark />
            <span>Farradyne</span>
          </a>
          <nav aria-label="Main navigation" className="desktop-nav">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="button small nav-cta">
            Start a Project <Arrow diagonal />
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="mobile-menu"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Close" : "Menu"}
            <span>{menu ? "−" : "+"}</span>
          </button>
        </div>
        {menu && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {nav.map(([label, id]) => (
              <a key={id} onClick={() => setMenu(false)} href={`#${id}`}>
                {label}
                <Arrow />
              </a>
            ))}
            <a onClick={() => setMenu(false)} href="#contact">
              Start a Project
              <Arrow diagonal />
            </a>
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-line" />
              Farradyne / Los Angeles
            </p>
            <h1 id="hero-title">
              We build
              <br />
              what’s <span>next.</span>
            </h1>
            <p className="hero-description">
              A technology venture studio building AI systems, digital products
              and creative experiences for ambitious businesses.
            </p>
            <div className="actions">
              <a className="button blue" href="#contact">
                Start a Project <Arrow diagonal />
              </a>
              <a className="text-link" href="#work">
                Explore Our Work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <motion.div
            className="hero-art"
            animate={reduce ? undefined : { y: [0, -4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="art-corner top-left" />
            <div className="art-corner bottom-right" />
            <Mark className="hero-mark" />
            <span className="art-caption">Designed for Progress.</span>
            <span className="art-coordinate">F / 01</span>
          </motion.div>
          <div className="hero-baseline">
            <span>Independent thinking. End-to-end execution.</span>
            <span>Los Angeles · Working across the U.S.</span>
          </div>
        </section>
        <section className="positioning section shell">
          <Reveal>
            <p className="eyebrow">01 / The perspective</p>
            <div className="position-grid">
              <h2>
                Technology should
                <br />
                move the business
                <br />
                <span className="blue-text">forward.</span>
              </h2>
              <div className="position-copy">
                <p>
                  We partner with companies and founders to turn ideas,
                  inefficient workflows and new opportunities into working
                  products, systems and experiences.
                </p>
                <p>
                  From strategy and design through development, automation and
                  launch — Farradyne works across the full lifecycle.
                </p>
                <div className="discipline">
                  Strategy <span>/</span> Design <span>/</span> Technology{" "}
                  <span>/</span> Production
                </div>
              </div>
            </div>
          </Reveal>
        </section>
        <section id="capabilities" className="section capabilities-section">
          <div className="shell">
            <Reveal className="section-head">
              <div>
                <p className="eyebrow">02 / Capabilities</p>
                <h2>What we build.</h2>
              </div>
              <p>
                One partner. From the first question
                <br className="desktop-break" /> to the working solution.
              </p>
            </Reveal>
            <div className="capability-grid">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} className="capability">
                  <div className="card-top">
                    <span className="number">0{i + 1}</span>
                    <a
                      href={`mailto:muveco@gmail.com?subject=${encodeURIComponent("Project inquiry: " + c.title)}`}
                      aria-label={`Discuss ${c.title}`}
                      className="icon-link"
                    >
                      <Arrow diagonal />
                    </a>
                  </div>
                  <Diagram type={c.type} />
                  <h3>{c.title}</h3>
                  <h4>{c.line}</h4>
                  <p>{c.text}</p>
                  <div className="tags">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="section shell work-section">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">03 / Selected ventures & work</p>
              <h2>Built with intent.</h2>
            </div>
            <p>
              Our own ventures and the systems,
              <br className="desktop-break" /> brands and products we build
              around them.
            </p>
          </Reveal>
          <div className="work-grid">
            {projects.map((p) => (
              <Reveal key={p.name} className={`project project-${p.style}`}>
                <div className={`project-cover ${p.style}`}>
                  <div className="cover-meta">
                    <span>{p.name}</span>
                    <span>{p.index} / 05</span>
                  </div>
                  <p>{p.cover}</p>
                  <span className="cover-foot">{p.category}</span>
                </div>
                <div className="project-heading">
                  <h3>{p.name}</h3>
                  <span className="number">{p.index}</span>
                </div>
                <p className="project-category">{p.category}</p>
                <h4>{p.title}</h4>
                <p className="project-description">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="model section" id="model">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">04 / The Farradyne model</p>
              <h2>
                We build our own.
                <br />
                <span>We build for others.</span>
              </h2>
              <p className="model-intro">
                The mindset of a founder.
                <br />
                The focus of a technology partner.
              </p>
              <div className="model-grid">
                <div>
                  <span className="model-label">01 / Ventures</span>
                  <h3>We start with possibility.</h3>
                  <p>
                    We create and develop products, brands and businesses from
                    the ground up. Building our own keeps us close to the
                    decisions that matter.
                  </p>
                  <div className="model-list">
                    TAMCHE · Boxing Projects · UMH · AquaHub
                  </div>
                </div>
                <div>
                  <span className="model-label">02 / Client work</span>
                  <h3>We start with your business.</h3>
                  <p>
                    We partner with companies that need technology, product
                    development or specialized creative execution. The same
                    ownership, applied to your goals.
                  </p>
                  <div className="model-list">
                    AI · Digital products · Games · Creative technology
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="section shell process" ref={process}>
          <Reveal>
            <p className="eyebrow">05 / How we work</p>
            <h2>From idea to execution.</h2>
            <div className="process-line" aria-hidden="true">
              <motion.span style={{ scaleX: reduce ? 1 : progress }} />
            </div>
            <ol className="process-grid">
              {steps.map(([title, text], i) => (
                <li key={title}>
                  <span className="number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
        <section id="company" className="founder-section shell">
          <Reveal className="founder-grid">
            <div className="founder-identity">
              <span className="eyebrow">06 / Founder</span>
              <div className="founder-monogram">
                FK<span>Los Angeles, California</span>
              </div>
              <a
                href="https://www.linkedin.com/in/anklfara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Farukh Khalpetov <Arrow diagonal />
              </a>
            </div>
            <div className="founder-copy">
              <h2>
                Founder-led.
                <br />
                Operator-minded.
              </h2>
              <p>
                Farradyne was founded by Farukh Khalpetov, an entrepreneur and
                digital producer with more than eight years of experience across
                game development, technology, startups, retail and media.
              </p>
              <p>
                His experience combines digital product development with
                something equally important: actually building and operating
                businesses.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/anklfara/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet Farukh on LinkedIn <Arrow diagonal />
              </a>
            </div>
          </Reveal>
        </section>
        <section id="insights" className="section shell insights">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">07 / Insights</p>
              <h2>Ideas in progress.</h2>
            </div>
            <p>
              Notes on building better.
              <br />
              First essays coming soon.
            </p>
          </Reveal>
          <div className="insight-grid">
            {[
              [
                "AI / Operations",
                "Why most small businesses don’t need more software — they need better systems.",
              ],
              ["Automation", "Where AI automation actually saves time."],
              [
                "Building",
                "What game production taught me about building companies.",
              ],
            ].map(([category, title]) => (
              <article key={title}>
                <p className="eyebrow">{category}</p>
                <h3>{title}</h3>
                <span className="coming-soon">Coming soon</span>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">Let’s move something forward</p>
              <h2>
                Have something
                <br />
                worth <span>building?</span>
              </h2>
              <div className="contact-bottom">
                <div>
                  <p>
                    Whether it’s an idea, a workflow that needs fixing or a
                    product ready to become real — let’s talk.
                  </p>
                  <div className="actions">
                    <a
                      className="button blue"
                      href="mailto:muveco@gmail.com?subject=Let%E2%80%99s%20build%20something"
                    >
                      Start a Project <Arrow diagonal />
                    </a>
                    <a
                      className="text-link"
                      href="mailto:muveco@gmail.com?subject=Work%20with%20Farradyne"
                    >
                      Work With Us <Arrow />
                    </a>
                  </div>
                </div>
                <div className="direct-contact">
                  <span>Prefer direct contact?</span>
                  <a href="mailto:muveco@gmail.com">
                    muveco@gmail.com <Arrow diagonal />
                  </a>
                  <a
                    href="https://t.me/anklfara"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram @anklfara <Arrow diagonal />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <div className="footer-top">
          <div>
            <a className="brand" href="#" aria-label="Farradyne home">
              <Mark />
              <span>Farradyne</span>
            </a>
            <p>Designed for Progress.</p>
          </div>
          <nav aria-label="Footer navigation">
            {nav.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Farradyne</span>
          <span>Los Angeles · United States</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
