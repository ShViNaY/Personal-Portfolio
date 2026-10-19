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
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  ExternalLink,
  Github,
  Mail,
  Menu,
  Wrench,
  X,
  Linkedin
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
  vscode: (props: any) => <Image src="/tech/vs code.png" alt="VS Code" width={18} height={18} />,

  // New uploaded logos (use exactly provided files)
  nextjs: (props: any) => <Image src="/tech/nextjs.png" alt="Next.js" width={18} height={18} />,
  openai: (props: any) => <Image src="/tech/openai.png" alt="OpenAI" width={18} height={18} />,
  claude: (props: any) => <Image src="/tech/claude-2.png" alt="Claude" width={18} height={18} />,
  openrouter: (props: any) => <Image src="/tech/openrouter-2.png" alt="OpenRouter" width={18} height={18} />,
  copilot: (props: any) => <Image src="/tech/copilot-2.png" alt="GitHub Copilot" width={18} height={18} />,
  githubcopilot: (props: any) => <Image src="/tech/copilot-2.png" alt="GitHub Copilot" width={18} height={18} />,
  cursor: (props: any) => <Image src="/tech/cursor-2.png" alt="Cursor" width={18} height={18} />,
  fastapi: (props: any) => <Image src="/tech/fastapi.png" alt="FastAPI" width={18} height={18} />,
  supabase: (props: any) => <Image src="/tech/supabase.png" alt="Supabase" width={18} height={18} />,
  framermotion: (props: any) => <Image src="/tech/framermotion.webp" alt="Framer Motion" width={18} height={18} />
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

const projects = [
  {
    title: "ReportPilot",
    description:
      "Multi-tenant marketing analytics platform for agencies to track campaigns, visualize performance, manage team access, and share secure client reporting portals.",
    image: "/images/reportpilot.png",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Recharts", "Framer Motion"],
    github: "https://github.com/ShViNaY/ReportPilot",
    live: "https://report-pilot-omega.vercel.app/"
  },
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
  const prefersReducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);
  const navMotion = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: -12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } };
  const fadeUp = (delay = 0, duration = 0.5) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const }
        };

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
  const RESUME_PAGE = "/resume";

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
    <main className="min-h-screen">
      {/* Sticky Header with subtle backdrop blur and hairline border */}
      <motion.header
        {...navMotion}
        className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md"
      >
        <div className="container flex h-[68px] items-center justify-between">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white shadow-sm transition-transform group-hover:scale-105">
              V
            </span>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-tight text-slate-900">
                VINAY SH
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href={RESUME_PAGE} target="_blank" rel="noreferrer">Resume</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="btn btn-primary text-xs">
              Work With Me <ArrowRight size={14} />
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            className="border-t border-slate-200 bg-white shadow-lg md:hidden"
          >
            <nav className="container flex flex-col py-3">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"]
              ].map(([label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                  className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 hover:text-slate-950"
                >
                  {label}
                </motion.a>
              ))}
              <a
                href={RESUME_PAGE}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 hover:text-slate-950"
              >
                Resume
              </a>
              <a href="#contact" onClick={closeMenu} className="btn btn-primary mt-4 mb-2 text-xs">
                Work With Me <ArrowRight size={14} />
              </a>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <motion.section id="home" className="container pt-8 md:pt-12" {...fadeUp(0, 0.5)}>
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.03)] lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2">
              <span className="pill-status">
                <span className="status-dot-pulse">
                  <span />
                  <span />
                </span>
                Available for freelance work
              </span>
            </div>

            <h1 className="mt-5 text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-tight text-slate-900">
              Hi, I&apos;m <span className="text-indigo-600">Vinay.</span>
              <br />
              <span className="text-slate-800">I build websites &amp; web applications that help businesses grow.</span>
            </h1>

            <p className="mt-5 max-w-[520px] text-[15px] sm:text-base leading-relaxed text-slate-600">
              Full-Stack Web Developer specializing in React, Node.js, Express and Django.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="#projects" className="btn btn-primary text-xs sm:text-sm">
                View My Work <ArrowRight size={14} />
              </a>
              <a href={RESUME_PAGE} target="_blank" rel="noreferrer" className="btn btn-secondary text-xs sm:text-sm">
                View Resume <ExternalLink size={14} />
              </a>
              <a href="#contact" className="btn btn-secondary text-xs sm:text-sm">
                Work With Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[320px] items-center justify-center border-t border-slate-100 bg-[#f8fafc] p-6 lg:min-h-full lg:border-l lg:border-t-0 lg:p-10"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[440px] overflow-hidden rounded-xl border border-slate-200/90 bg-white p-2 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">vinay.workspace</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-50">
                <Image
                  src="/images/anime-developer.svg"
                  alt="Anime-style developer working at a desk"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="section" {...fadeUp(0.05, 0.5)}>
        <div className="container">
          <div className="card overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
              <div>
                <div className="pill">01 · About Me</div>
                <h2 className="section-title mt-4">
                  A full-stack developer focused on building practical web solutions.
                </h2>

                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
                  <p>
                    I&apos;m a full-stack web developer focused on building clean,
                    responsive and practical web solutions.
                  </p>

                  <p>
                    I work with React, Node.js, Express, Django, JavaScript, Python and
                    relational databases to build websites, web applications and REST APIs.
                  </p>

                  <div className="about-highlight text-slate-800">
                    I enjoy taking an idea or requirement and turning it into a working product from frontend development and backend logic to database integration and deployment.
                  </div>

                  <p>
                    If you have a project in mind, I&apos;d be happy to discuss it.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
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
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section id="services" className="section" {...fadeUp(0.06, 0.5)}>
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="pill">02 · Services</div>
              <h2 className="section-title mt-3">What I can help you with</h2>
              <p className="section-subtitle">Focused development services for practical web projects.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="section" {...fadeUp(0.06, 0.5)}>
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="pill">03 · Projects</div>
              <h2 className="section-title mt-3">Some things I&apos;ve built</h2>
              <p className="section-subtitle">Real projects demonstrating my development work.</p>
            </div>
            <a
              href="https://github.com/ShViNaY/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
            >
              View all on GitHub <ArrowRight size={13} />
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="card group overflow-hidden"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-slate-200/80 bg-white/95 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    {project.live ? (
                      <a className="btn btn-primary text-xs" href={project.live} target="_blank" rel="noreferrer">
                        Live Demo <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="btn cursor-default bg-slate-50 text-slate-400 border-slate-200 text-xs">
                        Live Demo — Coming Soon
                      </span>
                    )}
                    <a className="btn btn-secondary text-xs" href={project.github} target="_blank" rel="noreferrer">
                      GitHub <Github size={13} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {hasMoreProjects && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-mono text-xs font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                {showAllProjects ? (
                  <>
                    <span>View Less</span>
                    <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    <span>View More Projects</span>
                    <ChevronDown size={14} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </motion.section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="pill">04 · Experience</div>
          <h2 className="section-title mt-3">Work Experience</h2>
          <p className="section-subtitle">Professional experience and software engineering contributions.</p>

          <div className="card mt-8 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-2 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-indigo-600">Internship</span>
                <h3 className="mt-1 text-xl font-bold text-slate-900">Software Development Intern</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  <a
                    href="https://www.websmartindia.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-company-link"
                  >
                    WebsmartIndia <ExternalLink size={13} />
                  </a>
                </p>
              </div>
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-600">
                Software Development Intern
              </span>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200/70 bg-slate-50/70 p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Project Focus</p>
              <h4 className="mt-1 text-base font-bold text-slate-900">Healthcare Management System</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Developed a healthcare management system that enabled patients to check doctor availability,
                review doctor ratings, and book appointments through a streamlined and user-friendly workflow.
                The solution focused on improving healthcare accessibility, scheduling efficiency, and patient experience.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Key Responsibilities</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  "Built doctor availability and appointment booking workflows using Python and Django.",
                  "Designed responsive interfaces for patient interactions using HTML, CSS, Bootstrap, and JavaScript.",
                  "Implemented CRUD operations, validation logic, and MySQL integration for doctor and appointment data.",
                  "Worked with Git and GitHub for version control, debugging, and continuous feature improvement."
                ].map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <motion.section className="section" {...fadeUp(0.06, 0.5)}>
        <div className="container">
          <div className="pill">05 · Tech Stack</div>
          <h2 className="section-title mt-3">Technologies I use to build web solutions</h2>
          <p className="section-subtitle">Modern languages, frameworks, databases, and developer tools in my workflow.</p>

          <div className="card mt-8 p-6 sm:p-8 lg:p-10">
            <div className="tech-list">
              {[
                {
                  title: "FRONTEND & FULL-STACK TECHNOLOGIES",
                  items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive Web Design", "Next.js", "Framer Motion"]
                },
                {
                  title: "Backend Technologies",
                  items: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "WebSockets", "REST APIs", "JWT Authentication", "Supabase"]
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
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="section" {...fadeUp(0.06, 0.5)}>
        <div className="container">
          <div className="cal-contact-shell">
            <div className={`cal-contact-grid ${contactTab === "schedule" ? "schedule-mode" : ""}`}>
              {contactTab === "message" && (
                <div className="cal-contact-copy">
                  <div className="pill">06 · Contact</div>
                  <h2 className="section-title mt-3">Let&apos;s work together.</h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                    Have a project in mind? Send me an email, tell me what you&apos;re looking to build, or schedule a meeting directly.
                  </p>

                  <a
                    href="mailto:shvinaysiddhu@gmail.com"
                    className="cal-contact-email"
                  >
                    <span className="cal-contact-email-icon">
                      <Mail size={16} />
                    </span>
                    shvinaysiddhu@gmail.com
                  </a>

                  <div className="mt-6 flex items-center gap-2.5">
                    <a
                      href="https://www.linkedin.com/in/vinay-sh-636a71288/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="social"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="https://github.com/ShViNaY/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="social"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="https://x.com/24vin_i"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X"
                      className="social"
                    >
                      <span className="font-mono text-sm font-bold">𝕏</span>
                    </a>
                  </div>
                </div>
              )}

              <div className={`cal-contact-panel ${contactTab === "schedule" ? "schedule-panel" : ""}`}>
                <div className="cal-contact-body">
                  <div className="cal-contact-tabs-inline" role="tablist" aria-label="Contact options">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={contactTab === "message"}
                      onClick={() => setContactTab("message")}
                      className={`cal-contact-tab inline ${contactTab === "message" ? "active" : ""}`}
                    >
                      Send Message
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={contactTab === "schedule"}
                      onClick={() => setContactTab("schedule")}
                      className={`cal-contact-tab inline ${contactTab === "schedule" ? "active" : ""}`}
                    >
                      Schedule Meeting
                    </button>
                  </div>

                  {contactTab === "message" && (
                    <form className="cal-contact-form" onSubmit={handleContactSubmit}>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block font-mono text-[11px] font-semibold text-slate-500 uppercase">
                            Name
                          </label>
                          <input
                            required
                            name="name"
                            placeholder="Your Name"
                            className="cal-contact-field"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-mono text-[11px] font-semibold text-slate-500 uppercase">
                            Email
                          </label>
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
                      </div>

                      <div>
                        <label className="mb-1 block font-mono text-[11px] font-semibold text-slate-500 uppercase">
                          Message
                        </label>
                        <textarea
                          required
                          name="message"
                          placeholder="Tell me what you're looking to build..."
                          rows={6}
                          className="cal-contact-field cal-contact-textarea"
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                        />
                      </div>

                      <div>
                        <button className="btn cal-contact-submit" type="submit" disabled={formStatus === "sending"}>
                          {formStatus === "sending" ? "Sending..." : "Send Message"} <ArrowRight size={14} />
                        </button>

                        {formStatus === "success" && (
                          <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs font-medium text-emerald-800">
                            <CheckCircle2 size={15} className="text-emerald-600" />
                            <span>Thanks — your message has been sent successfully.</span>
                          </div>
                        )}
                        {formStatus === "error" && (
                          <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700">
                            {formError || "Submission failed. Please try again."}
                          </div>
                        )}
                      </div>
                    </form>
                  )}

                  {contactTab === "schedule" && (
                    <div>
                      <p className="cal-contact-copy-note">
                        Pick a time that works for you. I&apos;ll send a calendar invite directly to your email.
                      </p>
                      <div className="cal-schedule-standalone">
                        <div className="cal-embed-shell">
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 pb-12 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-slate-400">© 2026</span>
              <span className="font-semibold text-slate-700">Vinay S H</span>
              <span>— All rights reserved.</span>
            </div>
            <a href="#home" className="back-to-top">
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </footer>
        </div>
      </motion.section>
    </main>
  );
}

function CategoryRow({ index, title, items }: { index: number; title: string; items: string[] }) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [marquee, setMarquee] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const check = () => {
      // If the container's scrollWidth (content width) is larger than its visible width, enable marquee
      setMarquee(el.scrollWidth > el.clientWidth + 4);
    };

    check();
    window.addEventListener("resize", check);
    // also observe mutations in case content changes (icons load)
    const mo = new MutationObserver(check);
    mo.observe(el, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("resize", check);
      mo.disconnect();
    };
  }, []);

  const renderItem = (item: string) => {
    const raw = item.toLowerCase().replace(/\s*\(.*\)/, "");
    const textOnlyItems = ["responsive web design"];
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
    // Map longer labels that contain JWT or WebSockets to the short keys used below
    if (raw.includes("jwt")) key = "jwt";
    if (raw.includes("websocket")) key = "websockets";
    const Icon = iconMap[key];
    const color = techColors[item] ?? techColors[raw] ?? techColors[key] ?? "#64748b";

    // Prefer local SVG badges for some entries to ensure consistent visuals
    if (key === "javascript") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/js.png" alt="JavaScript" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "html5") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/html.png" alt="HTML5" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "visualstudio") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/visualstudio.png" alt="Visual Studio" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "oracledatabase" || key === "oracle") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/oracle.png" alt="Oracle Database" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "sql") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/sql.png" alt="SQL" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "websockets") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/websocket.webp" alt="WebSockets" width={18} height={18} />
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
          <Image src="/tech/jwt.png" alt="JWT" width={18} height={18} />
          <span>{item}</span>
        </div>
      );
    }

    if (key === "css3") {
      return (
        <div key={item} className="tech-item-inline">
          <Image src="/tech/css.png" alt="CSS3" width={18} height={18} />
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
    <motion.div
      className="tech-category"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
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
    </motion.div>
  );
}
