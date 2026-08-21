"use client";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
  SiFlask,
  SiIntellijidea,
  SiPycharm,
  SiJupyter,
  SiNpm
} from "@icons-pack/react-simple-icons";


import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  Wrench,
  X,
  Linkedin
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const techStack = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Django", icon: SiDjango },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman }
];

const techColors: Record<string, string> = {
  React: "#61dafb",
  JavaScript: "#F7DF1E",
  "JavaScript (ES6+)": "#F7DF1E",
  TypeScript: "#3178C6",
  "Node.js": "#339933",
  "Express.js": "#000000",
  Django: "#092E20",
  Python: "#3776AB",
  MySQL: "#4479A1",
  PostgreSQL: "#336791",
  Git: "#F05032",
  GitHub: "#181717",
  Postman: "#FF6C37"
};

// Add additional brand colors
techColors["Java"] = "#007396";
techColors["C#"] = "#239120";
techColors["CSS3"] = "#1572B6";
techColors["Oracle Database"] = "#F80000";
techColors["SQL"] = "#4479A1";
techColors["RDBMS"] = "#4479A1";
techColors["VS Code"] = "#007ACC";
techColors["Visual Studio"] = "#5C2D91";
techColors["React.js"] = "#61dafb";
techColors["Tailwind CSS"] = "#38B2AC";
techColors["Bootstrap"] = "#7952B3";
techColors["PostgreSQL"] = "#336791";
techColors["SQLite"] = "#003B57";

const iconMap: Record<string, any> = {
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  reactjs: SiReact,
  bootstrap: SiBootstrap,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  expressjs: SiExpress,
  django: SiDjango,
  flask: SiFlask,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  intellijidea: SiIntellijidea,
  pycharm: SiPycharm,
  jupyternotebook: SiJupyter,
  npm: SiNpm,

  // Custom image wrappers for uploaded logos (use only provided logos)
  microsoftazure: (props: any) => <Image src="/tech/azure.png" alt="Microsoft Azure" width={18} height={18} />,
  azure: (props: any) => <Image src="/tech/azure.png" alt="Microsoft Azure" width={18} height={18} />,
  aws: (props: any) => <Image src="/tech/aws.png" alt="AWS" width={18} height={18} />,
  oracle: (props: any) => <Image src="/tech/oracle.png" alt="Oracle" width={18} height={18} />,
  oracledatabase: (props: any) => <Image src="/tech/oracle.png" alt="Oracle Database" width={18} height={18} />,
  sql: (props: any) => <Image src="/tech/sql.png" alt="SQL" width={18} height={18} />,
  vscode: (props: any) => <Image src="/tech/vscode.png" alt="VS Code" width={18} height={18} />,
  claude: (props: any) => <Image src="/tech/claude.png" alt="Claude" width={18} height={18} />,
  openrouter: (props: any) => <Image src="/tech/openrouter.png" alt="OpenRouter" width={18} height={18} />,
  copilot: (props: any) => <Image src="/tech/copilot.png" alt="GitHub Copilot" width={18} height={18} />,
  githubcopilot: (props: any) => <Image src="/tech/copilot.png" alt="GitHub Copilot" width={18} height={18} />,
  cursor: (props: any) => <Image src="/tech/cursor.png" alt="Cursor" width={18} height={18} />
};

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Responsive, clean websites tailored to your business or personal brand."
  },
  {
    icon: BriefcaseBusiness,
    title: "Full-Stack Development",
    description: "End-to-end web applications with frontend, backend, APIs and databases."
  },
  {
    icon: Code2,
    title: "REST API Development",
    description: "Well-structured APIs for web applications and frontend-backend integration."
  },
  {
    icon: Wrench,
    title: "Bug Fixing & Improvements",
    description: "Fix bugs, improve existing applications and add practical new features."
  }
];

// aboutCards removed — personal badge block intentionally omitted

const projects = [
  {
    title: "Real-Time Multiplayer Chess Platform",
    description:
      "A full-stack multiplayer chess platform with live gameplay, matchmaking, chat, timers and Elo rating functionality.",
    image: "/images/chess-project.svg",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
    github: "https://github.com/ShViNaY/Chess.app",
    live: "https://chess-app-s8cf.onrender.com/"
  },
  {
    title: "Agency.ai",
    description:
      "A responsive digital agency landing page built with React and Vite, featuring service sections, portfolio highlights, team profiles, and lead-generation contact flows.",
    image: "/images/Agency-ai.png",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Framer Motion", "React Hot Toast", "ESLint"],
    github: "https://github.com/ShViNaY/Agency.Ai",
    live: "https://agency-ai-green.vercel.app/"
  },
  {
    title: "Blog Creation",
    description:
      "A Django-powered blog application with user auth, profile management, post CRUD, password reset flow, pagination, and admin-based content moderation.",
    image: "/images/BlogCreation.png",
    tags: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Pillow"],
    github: "https://github.com/ShViNaY/Blog_creation-",
    live: "https://blogflow-s6wp.onrender.com"
  },
  {
    title: "Book Recommendation System",
    description:
      "A machine-learning based book recommendation system using collaborative filtering, popularity-based and hybrid approaches.",
    image: "/images/book-project.png",
    tags: ["Python", "Pandas", "Scikit-learn", "NumPy", "SQL"],
    github: "https://github.com/ShViNaY/Book-Recommendation-System",
    live: ""
  }
];

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  // Contact tab state
  const [contactTab, setContactTab] = useState<"message" | "schedule">("message");

  // Projects toggle state
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);
  const hasMoreProjects = projects.length > 2;

  // Contact form state (controlled inputs)
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljrnqvp";
  const RESUME_PATH = "/resume/Vinay_SH_Resume.pdf";

  const handleContactSubmit = async (e: any) => {
    e.preventDefault();
    setFormStatus("sending");
    setFormError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: contactName, email: contactEmail, message: contactMessage })
      });

      if (res.ok) {
        setFormStatus("success");
        // clear inputs
        setContactName("");
        setContactEmail("");
        setContactMessage("");
        // hide success after a short delay
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        const data = await res.json().catch(() => ({}));
        setFormStatus("error");
        setFormError(data.error || data.message || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      setFormStatus("error");
      setFormError(err?.message || "Network error. Please try again.");
    }
  };

  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-[#e7e9ef]/90 bg-[#fbfbfd]/95 backdrop-blur-sm">
        <div className="container flex h-[72px] items-center justify-between">
          <a href="#home" className="text-[17px] font-bold tracking-[-0.02em]">
            VINAY SH
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href={RESUME_PATH} target="_blank" rel="noreferrer">Resume</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="btn btn-primary hidden md:inline-flex">
            Work With Me <ArrowRight size={15} />
          </a>

          <button
            aria-label="Open menu"
            className="rounded-lg border border-[#e7e9ef] p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#e7e9ef] bg-white md:hidden">
            <nav className="container flex flex-col py-3">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"]
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="border-b border-[#f0f1f4] py-4 text-sm font-medium"
                >
                  {label}
                </a>
              ))}
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="border-b border-[#f0f1f4] py-4 text-sm font-medium"
              >
                Resume
              </a>
              <a href="#contact" onClick={closeMenu} className="btn btn-primary mt-4">
                Work With Me <ArrowRight size={15} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="container scroll-mt-20 pt-10 md:pt-14">
          <div className="grid overflow-hidden rounded-[22px] border border-[#e7e9ef] bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <div className="pill pill-lg">
              <span className="pill-dot" />
              Available for freelance work
            </div>

            <h1 className="mt-5 max-w-[620px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.02] tracking-[-0.055em]">
              Hi, I&apos;m <span className="text-[#5b5ce2]">Vinay.</span>
              <br />
              I build websites &amp; web applications that help businesses grow.
            </h1>

            <p className="mt-6 max-w-[520px] text-[15px] leading-6 text-[#667085]">
              Full-Stack Web Developer specializing in React, Node.js, Express and Django.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={15} />
              </a>
              <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="btn btn-secondary">
                View Resume <ExternalLink size={15} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Work With Me <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden bg-[#f3f4f8] lg:min-h-[440px]">
            <Image
              src="/images/anime-developer.svg"
              alt="Anime-style developer working at a desk"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="card grid gap-8 p-7 md:grid-cols-[1.25fr_1fr] md:p-10">
            <div>
              <div className="pill pill-lg">About Me</div>
              <h2 className="section-title mt-3">
                A full-stack developer focused on building practical web solutions.
              </h2>

              <div className="mt-5 space-y-3 text-[15px] leading-7 text-[#667085]">
                <p>
                  I&apos;m a full-stack web developer focused on building clean,
                  responsive and practical web solutions.
                </p>

                <p>
                  I work with React, Node.js, Express, Django, JavaScript, Python and
                  relational databases to build websites, web applications and REST APIs.
                </p>

                <p>
                  <span className="about-highlight">I enjoy taking an idea or requirement and turning it into a working product from frontend development and backend logic to database integration and deployment.</span>
                </p>

                <p>
                  If you have a project in mind, I&apos;d be happy to discuss it.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <div className="relative w-full max-w-[420px] overflow-hidden rounded-[22px] border border-[#e7e9ef] bg-[#f5f6fa] shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/About%20Me.png"
                    alt="About Me illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section pt-0">
        <div className="container">
          <div className="pill pill-lg">Services</div>
          <h2 className="section-title mt-3">What I can help you with</h2>
          <p className="section-subtitle">Focused development services for practical web projects.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 transition hover:-translate-y-0.5 hover:border-[#cfd2dc]">
                <Icon size={25} className="text-[#5b5ce2]" />
                <h3 className="mt-5 text-[16px] font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#667085]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section pt-0">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="pill pill-lg">Projects</div>
              <h2 className="section-title mt-3">Some things I&apos;ve built</h2>
              <p className="section-subtitle">Real projects demonstrating my development work.</p>
            </div>
            <a
              href="https://github.com/ShViNaY/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#5b5ce2]"
            >
              View all on GitHub ↗
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article key={project.title} className="card overflow-hidden">
                <div className="relative aspect-[16/8.5] bg-[#f1f2f6]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-[20px] font-bold tracking-[-0.02em]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#667085]">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#e7e9ef] bg-[#fafafd] px-2.5 py-1 text-xs text-[#596273]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.live ? (
                      <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
                        Live Demo <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="btn cursor-default bg-[#f7f7f9] text-[#98a0ad]">
                        Live Demo — Coming Soon
                      </span>
                    )}
                    <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
                      GitHub <Github size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {hasMoreProjects && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-[#dfe3ea] bg-white px-4 py-2 text-sm font-semibold text-[#5b5ce2] shadow-sm transition hover:border-[#cfd2dc] hover:bg-[#f8f8ff]"
              >
                {showAllProjects ? (
                  <>
                    <span>View Less</span>
                    <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    <span>View More</span>
                    <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="experience" className="section pt-0">
        <div className="container">
          <div className="pill pill-lg">Experience</div>
          <h2 className="section-title mt-3 text-black">Software Development Intern</h2>

          <div className="card mt-8 p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-black">
                  <a
                    href="https://www.websmartindia.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-company-link"
                  >
                    WebsmartIndia <ExternalLink size={15} />
                  </a>
                </h3>
                <p className="mt-1 text-sm font-medium text-black">Software Development Intern</p>
              </div>
              <span className="text-sm font-medium text-[#374151]">Internship</span>
            </div>

            <div className="mt-6 border-l border-[#e5e7eb] pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#475467]">Project</p>
              <h4 className="mt-2 text-lg font-semibold text-black">Healthcare Management System</h4>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#1f2937]">
              Developed a healthcare management system that enabled patients to check doctor availability,
              review doctor ratings, and book appointments through a streamlined and user-friendly workflow.
              The solution focused on improving healthcare accessibility, scheduling efficiency, and patient experience.
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#475467]">Key Responsibilities</p>
              <ul className="mt-3 grid gap-3 text-sm leading-6 text-[#1f2937] md:grid-cols-2">
                <li>Built doctor availability and appointment booking workflows using Python and Django.</li>
                <li>Designed responsive interfaces for patient interactions using HTML, CSS, Bootstrap, and JavaScript.</li>
                <li>Implemented CRUD operations, validation logic, and MySQL integration for doctor and appointment data.</li>
                <li>Worked with Git and GitHub for version control, debugging, and continuous feature improvement.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section overflow-hidden pt-0">
        <div className="container">
          <div className="pill pill-lg">Tech Stack</div>
          <h2 className="section-title mt-3">Technologies I use to build web solutions</h2>

          <div className="mt-7">
            {/* Categories rendered vertically, one item per line. Programming Languages removed. */}
            <div className="tech-list">
              {[
                {
                  title: "Frontend Technologies",
                  items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive Web Design"]
                },
                {
                  title: "Backend Technologies",
                  items: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "WebSockets", "REST APIs", "JWT Authentication"]
                },
                {
                  title: "Databases",
                  items: ["MySQL", "PostgreSQL", "SQLite", "Oracle Database", "SQL", "RDBMS"]
                },
                {
                  title: "Tools & Platforms",
                  items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "PyCharm", "Jupyter Notebook", "NPM", "Visual Studio"]
                },
                {
                  title: "Cloud & Deployment",
                  items: ["Microsoft Azure", "AWS"]
                },
                {
                  title: "AI & Developer Tools",
                  items: ["OpenAI", "Claude", "OpenRouter", "GitHub Copilot", "Cursor"]
                }
              ].map((cat, idx) => (
                <CategoryRow key={cat.title} index={idx} title={cat.title} items={cat.items} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section pt-0">
        <div className="container">
          <div className="cal-contact-shell">
            <div className={`cal-contact-grid ${contactTab === "schedule" ? "schedule-mode" : ""}`}>
              {contactTab === "message" && (
                <div className="cal-contact-copy">
                  <div className="pill pill-lg">Contact</div>
                  <h2 className="section-title mt-3">Let&apos;s work together.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#475467]">
                    Have a project in mind? Send me an email, tell me what you&apos;re looking to build, or schedule a meeting directly.
                  </p>

                  <a
                    href="mailto:shvinaysiddhu@gmail.com"
                    className="cal-contact-email"
                  >
                    <span className="cal-contact-email-icon">
                      <Mail size={18} />
                    </span>
                    shvinaysiddhu@gmail.com
                  </a>

                  <div className="mt-6 flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/vinay-sh-636a71288/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="social cal-contact-social"
                    >
                      <Linkedin size={17} />
                    </a>
                    <a
                      href="https://github.com/ShViNaY/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="social cal-contact-social"
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href="https://x.com/Sh__vinay"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X"
                      className="social cal-contact-social"
                    >
                      𝕏
                    </a>
                  </div>
                </div>
              )}

              <div className={`cal-contact-panel ${contactTab === "schedule" ? "schedule-panel" : ""}`}>
                {/* tabs removed from panel header: tabs are rendered inline above the name box inside the panel body */}

                {contactTab === "message" && (
                  <div className="cal-contact-body">
                    <div className="cal-contact-tabs-inline" role="tablist" aria-label="Contact options">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={true}
                        onClick={() => setContactTab("message")}
                        className={`cal-contact-tab inline active`}
                      >
                        Send Message
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={false}
                        onClick={() => setContactTab("schedule")}
                        className={`cal-contact-tab inline`}
                      >
                        Schedule Meeting
                      </button>
                    </div>
                    <form className="cal-contact-form" onSubmit={handleContactSubmit}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <input
                          required
                          name="name"
                          placeholder="Your Name"
                          className="cal-contact-field"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                        />

                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="cal-contact-field"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                        />
                      </div>

                      <textarea
                        required
                        name="message"
                        placeholder="Tell me what's on your mind..."
                        rows={7}
                        className="cal-contact-field cal-contact-textarea"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                      />

                      <div>
                        <button className="btn cal-contact-submit" type="submit" disabled={formStatus === "sending"}>
                          {formStatus === "sending" ? "Sending..." : "Send Message"} <ArrowRight size={15} />
                        </button>

                        {formStatus === "success" && (
                          <div className="mt-3 text-sm text-emerald-600">Thanks — your message has been sent.</div>
                        )}
                        {formStatus === "error" && (
                          <div className="mt-3 text-sm text-red-600">{formError || "Submission failed."}</div>
                        )}
                      </div>
                    </form>
                  </div>
                )}

                {/* When schedule is selected we no longer render the scheduler inside the card; the embed is rendered below the card so the left copy remains visible. */}
                {contactTab === "schedule" && (
                  <div className="cal-contact-body">
                    <div className="cal-contact-tabs-inline" role="tablist" aria-label="Contact options">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={false}
                        onClick={() => setContactTab("message")}
                        className={`cal-contact-tab inline`}
                      >
                        Send Message
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={true}
                        onClick={() => setContactTab("schedule")}
                        className={`cal-contact-tab inline active`}
                      >
                        Schedule Meeting
                      </button>
                    </div>

                    <p className="cal-contact-copy-note">Pick a time that works for you. I&apos;ll send a calendar invite to your email.</p>

                    <div className="cal-contact-iframe-placeholder">
                      {/* placeholder — actual embed is rendered below the card so the contact copy stays visible */}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Render Cal.com embed below the contact card when schedule tab is active. This keeps the card (left copy + send message form) visible above. */}
          {contactTab === "schedule" && (
            <div className="cal-schedule-standalone">
              <div className="cal-embed-shell rounded-xl border border-[#e7e9ef] bg-white p-4">
                <div className="cal-embed-viewport">
                  <iframe
                    src="https://cal.com/shvinay/30min?theme=light"
                    width="100%"
                    height="860"
                    frameBorder="0"
                    title="Cal.com Scheduling"
                  />
                </div>
              </div>
            </div>
          )}

          <footer className="flex flex-col gap-3 border-t border-[#e7e9ef] py-7 text-xs text-[#667085] sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Vinay S H. All rights reserved.</span>
            <a href="#home" className="back-to-top">
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}

function CategoryRow({ index, title, items }: { index: number; title: string; items: string[] }) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [marquee, setMarquee] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const check = () => {
      // If the container's scrollWidth (content width) is larger than its visible width, enable marquee
      setMarquee(el.scrollWidth > el.clientWidth + 4);
    };

    check();
    window.addEventListener('resize', check);
    // also observe mutations in case content changes (icons load)
    const mo = new MutationObserver(check);
    mo.observe(el, { childList: true, subtree: true });
    return () => {
      window.removeEventListener('resize', check);
      mo.disconnect();
    };
  }, []);

  const renderItem = (item: string) => {
    const raw = item.toLowerCase().replace(/\s*\(.*\)/, "");
    const textOnlyItems = ["responsive web design", "vs code", "visual studio"];
    if (textOnlyItems.includes(raw)) {
      return (
        <div key={item} className="tech-item-inline">
          <span>{item}</span>
        </div>
      );
    }
    let key = raw.replace(/[^a-z0-9]/g, "");
    if (raw.includes("es6")) key = "javascript";
    if (raw.includes("c#") || raw === "c#") key = "csharp";
    if (raw.includes("react")) key = "reactjs";
    if (raw.includes("tailwind")) key = "tailwindcss";
    if (raw.includes("vs code") || raw.includes("visual studio code")) key = "vscode";
    if (raw.includes("intellij")) key = "intellijidea";
    const Icon = iconMap[key];
    const color = techColors[item] ?? techColors[raw] ?? techColors[key] ?? "#667085";

    if (!Icon) {
      return (
        <div key={item} className="tech-item-inline">
          <span>{item}</span>
        </div>
      );
    }

    // Prefer local SVG badges for some entries to ensure consistent visuals
    if (key === "javascript") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/javascript.svg" alt="JavaScript" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "oracledatabase" || key === "oracle") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/oracle.svg" alt="Oracle Database" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "sql") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/sql.svg" alt="SQL" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "restapis" || key === "restapi" || key === "rest") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/restapis.svg" alt="REST APIs" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "jwt") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/jwt.svg" alt="JWT" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    // Prefer local SVG badge for CSS3 for consistent brand color
    if (key === "css3") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/css3.svg" alt="CSS3" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    return (
      <div key={item} className="tech-item-inline">
        {Icon ? (
          <Icon size={18} title={item} color={color} />
        ) : (
          <Image src="/tech/generic.svg" alt="icon" width={16} height={16} />
        )}
        <span>{item}</span>
      </div>
    );
  };

  return (
    <div className="tech-category">
      <h4 className="tech-column-title">{title}</h4>
      <div ref={rowRef} className="tech-row tech-marquee-shell" id={`tech-row-${index}`}>
        {marquee ? (
          <div className="tech-marquee-track tech-marquee" aria-hidden>
            <div className="tech-marquee-track-inner">{items.map(renderItem)}</div>
            <div className="tech-marquee-track-inner">{items.map(renderItem)}</div>
          </div>
        ) : (
          <div className="tech-row-static">{items.map(renderItem)}</div>
        )}
      </div>
    </div>
  );
}
