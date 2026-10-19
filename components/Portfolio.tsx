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
    : { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } };
  const fadeUp = (delay = 0, duration = 0.5) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration, delay, ease: [0.16, 1, 0.3, 1] as const }
        };

  // Contact tab state
  const [contactTab, setContactTab] = useState<"message" | "schedule">("message");

  // Projects toggle state
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

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
    <main className="min-h-screen bg-[#faf9f5]">
      {/* Architectural Minimal Header */}
      <motion.header
        {...navMotion}
        className="sticky top-0 z-50 border-b border-[#e5e3dc] bg-[#faf9f5]/90 backdrop-blur-md"
      >
        <div className="container flex h-[64px] items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-tight text-[#121316]">
              VINAY S H
            </span>
            <span className="hidden h-3.5 w-[1px] bg-[#e5e3dc] sm:inline-block" />
            <span className="hidden font-mono text-[11px] text-[#717784] sm:inline-block">
              FULL-STACK DEVELOPER
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a className="nav-link font-mono text-xs tracking-wider uppercase text-[#717784] hover:text-[#121316]" href="#about">
              About
            </a>
            <a className="nav-link font-mono text-xs tracking-wider uppercase text-[#717784] hover:text-[#121316]" href="#services">
              Services
            </a>
            <a className="nav-link font-mono text-xs tracking-wider uppercase text-[#717784] hover:text-[#121316]" href="#projects">
              Projects
            </a>
            <a className="nav-link font-mono text-xs tracking-wider uppercase text-[#717784] hover:text-[#121316]" href="#experience">
              Experience
            </a>
            <a className="nav-link font-mono text-xs tracking-wider uppercase text-[#717784] hover:text-[#121316]" href={RESUME_PAGE} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="nav-link font-mono text-xs tracking-wider uppercase text-[#717784] hover:text-[#121316]" href="#contact">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="btn btn-primary text-xs font-mono">
              Get in touch →
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-[#e5e3dc] text-[#121316] hover:bg-[#f2f1ec] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            className="border-t border-[#e5e3dc] bg-[#faf9f5] shadow-lg md:hidden"
          >
            <nav className="container flex flex-col py-4">
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
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                  className="border-b border-[#e5e3dc]/60 py-3 font-mono text-xs tracking-wider text-[#4a505c] hover:text-[#121316]"
                >
                  {label}
                </motion.a>
              ))}
              <a
                href={RESUME_PAGE}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="border-b border-[#e5e3dc]/60 py-3 font-mono text-xs tracking-wider text-[#4a505c] hover:text-[#121316]"
              >
                Resume ↗
              </a>
              <a href="#contact" onClick={closeMenu} className="btn btn-primary mt-4 mb-2 text-xs font-mono">
                Get in touch →
              </a>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section — Asymmetric Editorial Layout */}
      <motion.section id="home" className="container pt-8 pb-12 md:pt-14 md:pb-16" {...fadeUp(0, 0.5)}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill-status">
                <span className="status-dot-pulse">
                  <span />
                  <span />
                </span>
                AVAILABLE FOR WORK
              </span>
              <span className="font-mono text-xs text-[#717784]">
                • BENGALURU, INDIA / REMOTE
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(34px,5vw,60px)] font-bold leading-[1.08] tracking-[-0.04em] text-[#121316]">
              Hi, I&apos;m <span className="underline decoration-[#e5e3dc] decoration-2 underline-offset-8">Vinay.</span>
              <br />
              <span className="text-[#3a3f4a]">I build websites &amp; web applications that help businesses grow.</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4a505c]">
              Full-Stack Web Developer specializing in React, Node.js, Express and Django. Focused on building clean, resilient, and practical web solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn btn-primary">
                View Selected Work <ArrowRight size={14} />
              </a>
              <a href={RESUME_PAGE} target="_blank" rel="noreferrer" className="btn btn-secondary">
                View Resume <ExternalLink size={14} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Work With Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-[#e5e3dc] pt-5 font-mono text-xs text-[#717784]">
              <div>
                <span className="block font-semibold text-[#121316]">FOCUS</span>
                <span className="mt-0.5 block">Full-Stack / Frontend / APIs</span>
              </div>
              <div className="h-6 w-[1px] bg-[#e5e3dc]" />
              <div>
                <span className="block font-semibold text-[#121316]">CORE TECH</span>
                <span className="mt-0.5 block">React • Node • Express • Django</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full max-w-[440px] rounded-lg border border-[#e5e3dc] bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#e5e3dc] pb-2 font-mono text-[11px] text-[#717784]">
                <span>WORKSPACE</span>
                <span>ARCHITECT</span>
              </div>
              <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded bg-[#f2f1ec]">
                <Image
                  src="/images/anime-developer.svg"
                  alt="Anime-style developer working at a desk"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-[#717784]">
                <span>VINAY S H</span>
                <span>PORTFOLIO / 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section — Editorial Split Layout */}
      <motion.section id="about" className="section" {...fadeUp(0.04, 0.5)}>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="eyebrow">
                <span>01</span>
                <span>/</span>
                <span>ABOUT ME</span>
              </div>
              <h2 className="section-title mt-4">
                A full-stack developer focused on building practical web solutions.
              </h2>
              <div className="mt-8 hidden lg:block">
                <div className="relative aspect-[4/3] w-full max-w-[340px] overflow-hidden rounded-lg border border-[#e5e3dc] bg-white p-2">
                  <div className="relative h-full w-full overflow-hidden rounded">
                    <Image
                      src="/images/About%20Me.png"
                      alt="About Me illustration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-2 font-mono text-[11px] text-[#717784]">
                  [ ARTIFACT 01 · ABOUT THE DEVELOPER ]
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-relaxed text-[#4a505c]">
              <p className="text-lg font-medium text-[#121316]">
                I&apos;m a full-stack web developer focused on building clean,
                responsive and practical web solutions.
              </p>

              <p>
                I work with React, Node.js, Express, Django, JavaScript, Python and
                relational databases to build websites, web applications and REST APIs.
              </p>

              <div className="border-l-2 border-[#121316] bg-[#f2f1ec] p-5 font-sans text-[15px] font-medium leading-relaxed text-[#121316]">
                I enjoy taking an idea or requirement and turning it into a working product from frontend development and backend logic to database integration and deployment.
              </div>

              <p>
                If you have a project in mind, I&apos;d be happy to discuss it.
              </p>

              <div className="block pt-2 lg:hidden">
                <div className="relative aspect-[4/3] w-full max-w-[360px] overflow-hidden rounded-lg border border-[#e5e3dc] bg-white p-2">
                  <div className="relative h-full w-full overflow-hidden rounded">
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

      {/* Services Section — Architectural Numbered Rows */}
      <motion.section id="services" className="section" {...fadeUp(0.04, 0.5)}>
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">
                <span>02</span>
                <span>/</span>
                <span>SERVICES</span>
              </div>
              <h2 className="section-title mt-3">What I can help you with</h2>
              <p className="section-subtitle">Focused development services for practical web projects.</p>
            </div>
          </div>

          <div className="mt-8">
            {services.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                className="service-row"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono text-sm font-semibold text-[#717784]">
                  0{index + 1} /
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded border border-[#e5e3dc] bg-white text-[#121316]">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-lg font-bold text-[#121316]">{title}</h3>
                </div>
                <p className="service-row-desc text-sm leading-relaxed text-[#4a505c]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section — Editorial Showcase */}
      <motion.section id="projects" className="section" {...fadeUp(0.04, 0.5)}>
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow">
                <span>03</span>
                <span>/</span>
                <span>PROJECTS</span>
              </div>
              <h2 className="section-title mt-3">Selected Work</h2>
              <p className="section-subtitle">Real projects demonstrating my development work.</p>
            </div>
            <a
              href="https://github.com/ShViNaY/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#121316] hover:underline"
            >
              View all on GitHub <ArrowRight size={13} />
            </a>
          </div>

          {/* Featured Project 01 — ReportPilot */}
          <div className="mt-8">
            <motion.div
              className="group overflow-hidden rounded-xl border border-[#e5e3dc] bg-white transition hover:border-[#cfcdca]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid lg:grid-cols-[1.3fr_0.9fr]">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#e5e3dc] bg-[#f2f1ec] lg:border-b-0 lg:border-r">
                  <Image
                    src={projects[0].image}
                    alt={`${projects[0].title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded border border-[#e5e3dc] bg-[#faf9f5]/90 px-2.5 py-1 font-mono text-[11px] font-bold text-[#121316] backdrop-blur-sm">
                      FEATURED · 01
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-8 sm:p-10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#717784]">
                      SaaS / Analytics Platform
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#121316]">
                      {projects[0].title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#4a505c]">
                      {projects[0].description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {projects[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-[#e5e3dc] bg-[#faf9f5] px-2.5 py-1 font-mono text-[11px] text-[#4a505c]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3 border-t border-[#e5e3dc] pt-6">
                    {projects[0].live && (
                      <a className="btn btn-primary text-xs" href={projects[0].live} target="_blank" rel="noreferrer">
                        Live Demo <ExternalLink size={13} />
                      </a>
                    )}
                    <a className="btn btn-secondary text-xs" href={projects[0].github} target="_blank" rel="noreferrer">
                      GitHub <Github size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subsequent Projects — 2-Column Grid */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {visibleProjects.slice(1).map((project, idx) => {
              const projectNumber = idx + 2;
              return (
                <motion.article
                  key={project.title}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#e5e3dc] bg-white transition hover:border-[#cfcdca]"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#e5e3dc] bg-[#f2f1ec]">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded border border-[#e5e3dc] bg-[#faf9f5]/90 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#121316] backdrop-blur-sm">
                        0{projectNumber}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#121316]">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#4a505c]">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-[#e5e3dc] bg-[#faf9f5] px-2.5 py-0.5 font-mono text-[11px] text-[#4a505c]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 border-t border-[#e5e3dc] pt-5">
                      {project.live ? (
                        <a className="btn btn-primary text-xs" href={project.live} target="_blank" rel="noreferrer">
                          Live Demo <ExternalLink size={13} />
                        </a>
                      ) : (
                        <span className="btn cursor-default bg-[#f2f1ec] text-[#717784] border-[#e5e3dc] text-xs">
                          Live Demo — Coming Soon
                        </span>
                      )}
                      <a className="btn btn-secondary text-xs" href={project.github} target="_blank" rel="noreferrer">
                        GitHub <Github size={13} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {hasMoreProjects && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="btn btn-secondary font-mono text-xs"
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

      {/* Experience Section — Architectural Ledger */}
      <section id="experience" className="section">
        <div className="container">
          <div className="eyebrow">
            <span>04</span>
            <span>/</span>
            <span>EXPERIENCE</span>
          </div>
          <h2 className="section-title mt-3">Work Experience</h2>
          <p className="section-subtitle">Professional experience and software engineering contributions.</p>

          <div className="mt-6 rounded-xl border border-[#e5e3dc] bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-2 border-b border-[#e5e3dc] pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#1d4ed8]">
                  [ INTERNSHIP ]
                </span>
                <h3 className="mt-1 text-2xl font-bold text-[#121316]">
                  Software Development Intern
                </h3>
                <p className="mt-1 text-sm font-medium text-[#4a505c]">
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
              <span className="inline-flex items-center rounded border border-[#e5e3dc] bg-[#f2f1ec] px-3 py-1 font-mono text-xs font-semibold text-[#121316]">
                Software Development Intern
              </span>
            </div>

            <div className="mt-6 rounded-lg border border-[#e5e3dc] bg-[#faf9f5] p-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#717784]">
                PROJECT
              </span>
              <h4 className="mt-1 text-lg font-bold text-[#121316]">
                Healthcare Management System
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#4a505c]">
                Developed a healthcare management system that enabled patients to check doctor availability,
                review doctor ratings, and book appointments through a streamlined and user-friendly workflow.
                The solution focused on improving healthcare accessibility, scheduling efficiency, and patient experience.
              </p>
            </div>

            <div className="mt-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#717784]">
                KEY RESPONSIBILITIES
              </span>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  "Built doctor availability and appointment booking workflows using Python and Django.",
                  "Designed responsive interfaces for patient interactions using HTML, CSS, Bootstrap, and JavaScript.",
                  "Implemented CRUD operations, validation logic, and MySQL integration for doctor and appointment data.",
                  "Worked with Git and GitHub for version control, debugging, and continuous feature improvement."
                ].map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#3a3f4a]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#121316]" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section — Technical Matrix */}
      <motion.section className="section" {...fadeUp(0.04, 0.5)}>
        <div className="container">
          <div className="eyebrow">
            <span>05</span>
            <span>/</span>
            <span>TECH STACK</span>
          </div>
          <h2 className="section-title mt-3">Technologies I use to build web solutions</h2>
          <p className="section-subtitle">Languages, frameworks, databases, and developer tools in my workflow.</p>

          <div className="mt-6 rounded-xl border border-[#e5e3dc] bg-white p-6 sm:p-8">
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

      {/* Contact & Meeting Section — Split Editorial */}
      <motion.section id="contact" className="section" {...fadeUp(0.04, 0.5)}>
        <div className="container">
          <div className="cal-contact-shell">
            <div className={`cal-contact-grid ${contactTab === "schedule" ? "schedule-mode" : ""}`}>
              {contactTab === "message" && (
                <div className="cal-contact-copy">
                  <div className="eyebrow">
                    <span>06</span>
                    <span>/</span>
                    <span>CONTACT</span>
                  </div>
                  <h2 className="section-title mt-3">Let&apos;s work together.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4a505c]">
                    Have a project in mind? Send me an email, tell me what you&apos;re looking to build, or schedule a meeting directly.
                  </p>

                  <a
                    href="mailto:shvinaysiddhu@gmail.com"
                    className="cal-contact-email"
                  >
                    <Mail size={15} />
                    <span>shvinaysiddhu@gmail.com</span>
                  </a>

                  <div className="mt-8 flex items-center gap-3">
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
                          <label className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#717784]">
                            Your Name
                          </label>
                          <input
                            required
                            name="name"
                            placeholder="Alex Morgan"
                            className="cal-contact-field"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#717784]">
                            Your Email
                          </label>
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="alex@company.com"
                            className="cal-contact-field"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#717784]">
                          Your Message
                        </label>
                        <textarea
                          required
                          name="message"
                          placeholder="Tell me what you're looking to build..."
                          rows={5}
                          className="cal-contact-field cal-contact-textarea"
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                        />
                      </div>

                      <div>
                        <button className="btn cal-contact-submit" type="submit" disabled={formStatus === "sending"}>
                          {formStatus === "sending" ? "Sending..." : "Send Message →"}
                        </button>

                        {formStatus === "success" && (
                          <div className="mt-3 flex items-center gap-2 rounded border border-emerald-200 bg-emerald-50 p-3 text-xs font-medium text-emerald-800">
                            <CheckCircle2 size={15} className="text-emerald-600" />
                            <span>Thanks — your message has been sent successfully.</span>
                          </div>
                        )}
                        {formStatus === "error" && (
                          <div className="mt-3 rounded border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700">
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

          <footer className="mt-10 flex flex-col gap-4 border-t border-[#e5e3dc] pt-6 pb-12 text-xs text-[#717784] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span>© 2026 VINAY S H</span>
              <span>—</span>
              <span>BENGALURU, INDIA</span>
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
    const color = techColors[item] ?? techColors[raw] ?? techColors[key] ?? "#717784";

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
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
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
