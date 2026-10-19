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
  ArrowUpRight,
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
  Linkedin,
  Layers,
  Sparkles,
  Calendar,
  User,
  FolderGit2
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

  // Custom image wrappers for uploaded logos
  microsoftazure: (props: any) => <Image src="/tech/azure.png" alt="Microsoft Azure" width={18} height={18} />,
  azure: (props: any) => <Image src="/tech/azure.png" alt="Microsoft Azure" width={18} height={18} />,
  aws: (props: any) => <Image src="/tech/aws.png" alt="AWS" width={18} height={18} />,
  oracle: (props: any) => <Image src="/tech/oracle.png" alt="Oracle" width={18} height={18} />,
  oracledatabase: (props: any) => <Image src="/tech/oracle.png" alt="Oracle Database" width={18} height={18} />,
  sql: (props: any) => <Image src="/tech/sql.png" alt="SQL" width={18} height={18} />,
  vscode: (props: any) => <Image src="/tech/vs code.png" alt="VS Code" width={18} height={18} />,

  // Uploaded logos
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
    number: "01",
    title: "Website Development",
    description: "Responsive, clean websites tailored to your business or personal brand with high attention to performance, typography, and mobile clarity."
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern frontends, robust backend logic, secure APIs, and relational database integrations."
  },
  {
    icon: Layers,
    number: "03",
    title: "REST API Development",
    description: "Well-structured, documented APIs built with Node.js/Express or Django/FastAPI for seamless frontend and third-party integration."
  },
  {
    icon: Wrench,
    number: "04",
    title: "Bug Fixing & Improvements",
    description: "Identify performance bottlenecks, squash logic bugs, improve existing architectures, and deploy practical new features."
  }
];

const projects = [
  {
    title: "ReportPilot",
    category: "SaaS / Multi-Tenant Analytics Platform",
    badge: "FEATURED · 01",
    description:
      "Multi-tenant marketing analytics platform for agencies to track campaigns, visualize performance, manage team access, and share secure client reporting portals.",
    image: "/images/reportpilot.png",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Recharts", "Framer Motion"],
    github: "https://github.com/ShViNaY/ReportPilot",
    live: "https://report-pilot-omega.vercel.app/"
  },
  {
    title: "Real-Time Multiplayer Chess Platform",
    category: "WebSockets / Full-Stack Platform",
    badge: "PROJECT · 02",
    description:
      "A full-stack multiplayer chess platform with live gameplay, matchmaking, real-time chat, game timers, and Elo rating calculation.",
    image: "/images/chess-project.svg",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
    github: "https://github.com/ShViNaY/Chess.app",
    live: "https://chess-app-s8cf.onrender.com/"
  },
  {
    title: "Agency.ai",
    category: "Digital Agency Experience",
    badge: "PROJECT · 03",
    description:
      "A responsive digital agency landing page built with React and Vite, featuring dynamic service showcases, portfolio highlights, and lead-generation flows.",
    image: "/images/Agency-ai.png",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Framer Motion", "React Hot Toast", "ESLint"],
    github: "https://github.com/ShViNaY/Agency.Ai",
    live: "https://agency-ai-green.vercel.app/"
  },
  {
    title: "Blog Creation",
    category: "Django Web Application",
    badge: "PROJECT · 04",
    description:
      "A Django-powered blog application with user auth, profile management, post CRUD, password reset flow, pagination, and admin-based content moderation.",
    image: "/images/BlogCreation.png",
    tags: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Pillow"],
    github: "https://github.com/ShViNaY/Blog_creation-",
    live: "https://blogflow-s6wp.onrender.com"
  },
  {
    title: "Book Recommendation System",
    category: "Machine Learning / Data Intelligence",
    badge: "PROJECT · 05",
    description:
      "A machine-learning based book recommendation system using collaborative filtering, popularity-based scoring, and hybrid algorithms.",
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
    : { initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } };

  const fadeUp = (delay = 0, duration = 0.45) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.12 },
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
        setContactName("");
        setContactEmail("");
        setContactMessage("");
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
    <main className="min-h-screen bg-[#F7F5F0] text-[#18181B] pb-16">
      {/* Floating Contained Navigation (Meeko Inspired Pill) */}
      <div className="sticky top-4 z-50 px-4 sm:px-6">
        <motion.header
          {...navMotion}
          className="mx-auto max-w-5xl rounded-full border-[1.5px] border-[#18181B] bg-[#FFFFFF]/90 px-4 py-2.5 backdrop-blur-md shadow-[0_4px_16px_rgba(24,24,27,0.06)]"
        >
          <div className="flex items-center justify-between">
            {/* Logo / Brand Pill */}
            <a href="#home" className="group flex items-center gap-2.5 pl-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#18181B] text-xs font-bold text-white transition-transform group-hover:scale-105">
                V
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold tracking-tight text-[#18181B]">
                  VINAY S H
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#71717A]">
                  Full-Stack Dev
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden items-center gap-1 md:flex">
              <a className="nav-pill-link font-mono text-xs uppercase tracking-wider" href="#about">
                About
              </a>
              <a className="nav-pill-link font-mono text-xs uppercase tracking-wider" href="#services">
                Services
              </a>
              <a className="nav-pill-link font-mono text-xs uppercase tracking-wider" href="#projects">
                Work
              </a>
              <a className="nav-pill-link font-mono text-xs uppercase tracking-wider" href="#experience">
                Experience
              </a>
              <a className="nav-pill-link font-mono text-xs uppercase tracking-wider" href={RESUME_PAGE} target="_blank" rel="noreferrer">
                Resume ↗
              </a>
              <a className="nav-pill-link font-mono text-xs uppercase tracking-wider" href="#contact">
                Contact
              </a>
            </nav>

            {/* Right Action CTA & Mini Socials */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="https://github.com/ShViNaY/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#18181B]/20 bg-white text-[#18181B] transition hover:bg-[#F0EDE4]"
              >
                <Github size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-sh-636a71288/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#18181B]/20 bg-white text-[#18181B] transition hover:bg-[#F0EDE4]"
              >
                <Linkedin size={14} />
              </a>
              <a href="#contact" className="btn btn-primary ml-1 text-xs font-mono h-8 px-4">
                Get in touch →
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#18181B] text-[#18181B] hover:bg-[#F0EDE4] md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.header>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border-[1.5px] border-[#18181B] bg-white p-5 shadow-[0_10px_30px_rgba(24,24,27,0.1)] md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Selected Work", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"]
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#52525B] hover:bg-[#F7F5F0] hover:text-[#18181B]"
                >
                  {label}
                </a>
              ))}
              <a
                href={RESUME_PAGE}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#52525B] hover:bg-[#F7F5F0] hover:text-[#18181B]"
              >
                Resume ↗
              </a>
              <div className="mt-3 flex items-center justify-between border-t border-[#18181B]/10 pt-3">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/ShViNaY/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#18181B]/20 text-[#18181B]"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vinay-sh-636a71288/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#18181B]/20 text-[#18181B]"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
                <a href="#contact" onClick={closeMenu} className="btn btn-primary text-xs font-mono h-8 px-4">
                  Get in touch →
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>

      {/* Main Container */}
      <div className="container mt-4">
        {/* HERO SECTION — Pastel Editorial Banner with Stickers */}
        <motion.section
          id="home"
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-[1.5px] border-[#18181B] bg-[#ECE7F6] p-6 sm:p-10 md:p-14 shadow-[0_4px_0_0_rgba(24,24,27,0.04)]"
          {...fadeUp(0, 0.45)}
        >
          {/* Subtle Decorative Editorial Stickers */}
          <div className="pointer-events-none absolute -top-1 right-8 hidden rotate-3 lg:block">
            <span className="sticker sticker-sage">
              <Sparkles size={11} /> ⚡ Full-Stack &amp; APIs
            </span>
          </div>
          <div className="pointer-events-none absolute bottom-8 right-12 hidden -rotate-2 lg:block">
            <span className="sticker sticker-yellow">
              ✦ Next.js • React • Django
            </span>
          </div>

          <div className="max-w-3xl">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="pill-status">
                <span className="status-dot-pulse">
                  <span />
                  <span />
                </span>
                AVAILABLE FOR WORK
              </span>
              <span className="sticker sticker-blue">
                BENGALURU, INDIA • REMOTE
              </span>
              <span className="sticker sticker-peach hidden sm:inline-flex">
                SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Confident Typographic Headline */}
            <h1 className="mt-8 text-[clamp(32px,5.2vw,58px)] font-bold leading-[1.08] tracking-[-0.04em] text-[#18181B]">
              Hello! I&apos;m{" "}
              <span className="inline-flex items-center gap-2 underline decoration-[#18181B] decoration-2 underline-offset-8">
                Vinay,
              </span>
              <br />
              <span className="text-[#3F395A]">a software developer.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-[#52525B]">
              I build <strong className="font-semibold text-[#18181B]">websites</strong>,{" "}
              <strong className="font-semibold text-[#18181B]">web applications</strong>, and{" "}
              <strong className="font-semibold text-[#18181B]">SaaS products</strong> that solve real business problems.
              Specializing in Next.js, React, Node.js, Express, and Django with a focus on clean architecture, resilient APIs, and exceptional user experience.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                Explore Selected Work <ArrowRight size={14} />
              </a>
              <a href={RESUME_PAGE} target="_blank" rel="noreferrer" className="btn btn-secondary">
                View Resume <ArrowUpRight size={14} />
              </a>
              <a href="#contact" className="btn btn-accent">
                Work With Me
              </a>
            </div>

            {/* Technical Index Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#18181B]/15 pt-5 font-mono text-xs text-[#52525B]">
              <div>
                <span className="block font-bold uppercase tracking-wider text-[#18181B]">Core Stack</span>
                <span className="mt-0.5 block">Next.js · React · Node.js · Express · Django · PostgreSQL</span>
              </div>
              <div className="hidden h-7 w-[1px] bg-[#18181B]/20 sm:block" />
              <div>
                <span className="block font-bold uppercase tracking-wider text-[#18181B]">Domain Focus</span>
                <span className="mt-0.5 block">Web Applications · Dashboards · APIs · Internal Tools</span>
              </div>
            </div>
          </div>

          {/* MEKO'S SIGNATURE 3 QUICK-JUMP INTRO CARDS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {/* Card 1: Work */}
            <a
              href="#projects"
              className="card-meeko group flex flex-col justify-between p-6 transition hover:border-[#18181B]"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#18181B]/15 bg-[#FBF3D5] text-[#18181B] transition-transform group-hover:rotate-3">
                  <FolderGit2 size={20} />
                </div>
                <h2 className="mt-4 text-base font-bold text-[#18181B]">
                  My Portfolio
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-[#52525B]">
                  Explore selected full-stack systems, platforms, and applications.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <span className="btn-circle-arrow group-hover:bg-[#18181B] group-hover:text-white">
                  <ArrowRight size={15} />
                </span>
              </div>
            </a>

            {/* Card 2: About */}
            <a
              href="#about"
              className="card-meeko group flex flex-col justify-between p-6 transition hover:border-[#18181B]"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#18181B]/15 bg-[#E5ECE0] text-[#18181B] transition-transform group-hover:rotate-3">
                  <User size={20} />
                </div>
                <h2 className="mt-4 text-base font-bold text-[#18181B]">
                  About Me
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-[#52525B]">
                  A closer look at my background, technical philosophy, and skill journey.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <span className="btn-circle-arrow group-hover:bg-[#18181B] group-hover:text-white">
                  <ArrowRight size={15} />
                </span>
              </div>
            </a>

            {/* Card 3: Contact */}
            <a
              href="#contact"
              className="card-meeko group flex flex-col justify-between p-6 transition hover:border-[#18181B]"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#18181B]/15 bg-[#E1EBF5] text-[#18181B] transition-transform group-hover:rotate-3">
                  <Mail size={20} />
                </div>
                <h2 className="mt-4 text-base font-bold text-[#18181B]">
                  Contact Me
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-[#52525B]">
                  Let&apos;s work together to bring your ideas and digital vision to life.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <span className="btn-circle-arrow group-hover:bg-[#18181B] group-hover:text-white">
                  <ArrowRight size={15} />
                </span>
              </div>
            </a>
          </div>
        </motion.section>

        {/* EDITORIAL POSITIONING STATEMENT BANNER */}
        <motion.section className="mt-10 mb-6 rounded-2xl border border-[#18181B]/15 bg-white p-8 md:p-12 shadow-sm" {...fadeUp(0.04, 0.45)}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <span className="sticker sticker-sage">
                [ 01 · POSITIONING ]
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B]">
                I don&apos;t just build websites.
              </h2>
            </div>
            <div className="space-y-3 text-[16px] leading-relaxed text-[#52525B]">
              <p>
                I build <strong className="font-semibold text-[#18181B]">web applications, dashboards, internal tools, and SaaS products</strong> that help businesses operate better, convert visitors, and eliminate manual workflows.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-full border border-[#18181B]/15 bg-[#F7F5F0] px-3 py-1 font-mono text-[11px] font-semibold text-[#18181B]">
                  Clean Architecture
                </span>
                <span className="rounded-full border border-[#18181B]/15 bg-[#F7F5F0] px-3 py-1 font-mono text-[11px] font-semibold text-[#18181B]">
                  Resilient APIs
                </span>
                <span className="rounded-full border border-[#18181B]/15 bg-[#F7F5F0] px-3 py-1 font-mono text-[11px] font-semibold text-[#18181B]">
                  Full-Stack Reliability
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SELECTED WORK SECTION */}
        <motion.section id="projects" className="section" {...fadeUp(0.04, 0.45)}>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#18181B]/15 pb-5">
            <div>
              <div className="eyebrow">
                <span>02</span>
                <span>/</span>
                <span>SELECTED WORK</span>
              </div>
              <h2 className="section-title mt-2">My selected works</h2>
              <p className="section-subtitle">
                Real production applications, SaaS platforms, and full-stack systems built around real workflows.
              </p>
            </div>
            <a
              href="https://github.com/ShViNaY/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#18181B]/20 bg-white px-4 py-2 font-mono text-xs font-semibold text-[#18181B] transition hover:bg-[#F0EDE4]"
            >
              <span>View all on GitHub</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Featured Project 01 — Asymmetric Editorial Card */}
          <div className="mt-8">
            <motion.div
              className="card-meeko group overflow-hidden bg-white"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid lg:grid-cols-[1.1fr_1.3fr]">
                {/* Left: Project Information */}
                <div className="flex flex-col justify-between p-6 sm:p-10 border-b border-[#18181B]/15 lg:border-b-0 lg:border-r">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="sticker sticker-sage">
                        {projects[0].badge}
                      </span>
                      <span className="font-mono text-xs text-[#71717A]">
                        {projects[0].category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B]">
                      {projects[0].title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#52525B]">
                      {projects[0].description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {projects[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#18181B]/15 bg-[#F7F5F0] px-3 py-1 font-mono text-[11px] text-[#52525B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-[#18181B]/10">
                    {projects[0].live && (
                      <a className="btn btn-primary text-xs" href={projects[0].live} target="_blank" rel="noreferrer">
                        Live Platform <ExternalLink size={13} />
                      </a>
                    )}
                    <a className="btn btn-secondary text-xs" href={projects[0].github} target="_blank" rel="noreferrer">
                      GitHub Repo <Github size={13} />
                    </a>
                  </div>
                </div>

                {/* Right: Framed Mockup Surface */}
                <div className="flex flex-col justify-center bg-[#F7F5F0] p-6 sm:p-8">
                  <div className="overflow-hidden rounded-2xl border-[1.5px] border-[#18181B] bg-white shadow-md">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between border-b border-[#18181B]/15 bg-[#F0EDE4] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="font-mono text-[10px] text-[#71717A]">
                        report-pilot-omega.vercel.app
                      </span>
                      <div className="w-8" />
                    </div>

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                      <Image
                        src={projects[0].image}
                        alt={`${projects[0].title} preview`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subsequent Projects — 2-Column Tactile Grid */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {visibleProjects.slice(1).map((project, idx) => {
              const projectNumber = idx + 2;
              return (
                <motion.article
                  key={project.title}
                  className="card-meeko-subtle group flex flex-col justify-between overflow-hidden bg-white"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Framed Image Container */}
                  <div className="p-4 sm:p-5 bg-[#F7F5F0] border-b border-[#18181B]/15">
                    <div className="overflow-hidden rounded-xl border border-[#18181B]/20 bg-white">
                      {/* Browser Header Bar */}
                      <div className="flex items-center justify-between border-b border-[#18181B]/10 bg-[#F0EDE4] px-3 py-1.5">
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="font-mono text-[9px] text-[#71717A]">
                          0{projectNumber} · {project.category}
                        </span>
                      </div>

                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="sticker sticker-lavender">
                          0{projectNumber}
                        </span>
                        <span className="font-mono text-[11px] text-[#71717A]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold tracking-tight text-[#18181B]">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[#52525B]">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#18181B]/12 bg-[#F7F5F0] px-2.5 py-0.5 font-mono text-[11px] text-[#52525B]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 border-t border-[#18181B]/10 pt-5">
                      {project.live ? (
                        <a className="btn btn-primary text-xs" href={project.live} target="_blank" rel="noreferrer">
                          Live Demo <ExternalLink size={13} />
                        </a>
                      ) : (
                        <span className="btn cursor-default bg-[#F0EDE4] text-[#71717A] border-[#18181B]/15 text-xs">
                          Demo — In Progress
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

          {/* Toggle More Projects */}
          {hasMoreProjects && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="btn btn-secondary font-mono text-xs px-6"
              >
                {showAllProjects ? (
                  <>
                    <span>View Less Projects</span>
                    <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    <span>View More Projects ({projects.length - 3} more)</span>
                    <ChevronDown size={14} />
                  </>
                )}
              </button>
            </div>
          )}
        </motion.section>

        {/* ABOUT ME SECTION */}
        <motion.section id="about" className="section" {...fadeUp(0.04, 0.45)}>
          <div className="border-b border-[#18181B]/15 pb-5">
            <div className="eyebrow">
              <span>03</span>
              <span>/</span>
              <span>ABOUT ME</span>
            </div>
            <h2 className="section-title mt-2">
              A full-stack developer focused on building practical web solutions.
            </h2>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Left: Framed Portrait Card */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-[380px]">
                <div className="card-meeko overflow-hidden bg-white p-3">
                  <div className="flex items-center justify-between border-b border-[#18181B]/15 pb-2 px-1 font-mono text-[11px] text-[#71717A]">
                    <span>[ ARTIFACT 01 ]</span>
                    <span>VINAY S H</span>
                  </div>

                  <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#18181B]/15 bg-[#F7F5F0]">
                    <Image
                      src="/images/About%20Me.png"
                      alt="Vinay S H - Developer Illustration"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between px-1 font-mono text-[10px] text-[#71717A]">
                    <span>BENGALURU, INDIA</span>
                    <span>FULL-STACK / 2026</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <span className="sticker sticker-sage">
                    React &amp; Next.js
                  </span>
                  <span className="sticker sticker-lavender">
                    Node.js &amp; Django
                  </span>
                  <span className="sticker sticker-yellow">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Story & Background */}
            <div className="space-y-5 text-[16px] leading-relaxed text-[#52525B]">
              <p className="text-lg font-medium text-[#18181B]">
                I&apos;m a full-stack web developer focused on building clean,
                responsive, and practical web solutions.
              </p>

              <p>
                I work with Next.js, React, Node.js, Express, Django, JavaScript, Python, and
                relational databases to build websites, web applications, and REST APIs that deliver real business impact.
              </p>

              {/* Callout Quote in Soft Sage Accent */}
              <div className="rounded-2xl border-[1.5px] border-[#18181B] bg-[#E5ECE0] p-6 text-[15px] font-medium leading-relaxed text-[#18181B] shadow-[0_2px_0_0_rgba(24,24,27,0.04)]">
                &ldquo;I enjoy taking an idea or requirement and turning it into a working product — from frontend development and backend logic to database integration and deployment.&rdquo;
              </div>

              <p>
                Whether you need a full web platform built from scratch, a new API service, or upgrades to an existing codebase, I&apos;d be happy to discuss your requirements.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href={RESUME_PAGE} target="_blank" rel="noreferrer" className="btn btn-secondary text-xs">
                  Read Full Resume <ExternalLink size={13} />
                </a>
                <a href="#contact" className="btn btn-primary text-xs">
                  Discuss a Project <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SERVICES SECTION — Tactile Numbered Cards */}
        <motion.section id="services" className="section" {...fadeUp(0.04, 0.45)}>
          <div className="border-b border-[#18181B]/15 pb-5">
            <div className="eyebrow">
              <span>04</span>
              <span>/</span>
              <span>SERVICES</span>
            </div>
            <h2 className="section-title mt-2">What I can help you with</h2>
            <p className="section-subtitle">
              Focused engineering services for startups, businesses, and agency projects.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map(({ icon: Icon, number, title, description }, index) => (
              <motion.div
                key={title}
                className="card-meeko-subtle group flex flex-col justify-between p-6 sm:p-7 bg-white"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#18181B]/15 bg-[#F7F5F0] text-[#18181B] transition-transform group-hover:scale-105">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-sm font-bold text-[#71717A]">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#18181B] group-hover:text-[#3F395A] transition-colors">
                    {title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#52525B]">
                    {description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-[#18181B]/10 font-mono text-xs text-[#18181B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#18181B]" />
                  <span>Production-ready &amp; tested</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WORK EXPERIENCE SECTION */}
        <motion.section id="experience" className="section" {...fadeUp(0.04, 0.45)}>
          <div className="border-b border-[#18181B]/15 pb-5">
            <div className="eyebrow">
              <span>05</span>
              <span>/</span>
              <span>EXPERIENCE</span>
            </div>
            <h2 className="section-title mt-2">Work Experience</h2>
            <p className="section-subtitle">
              Professional experience and software engineering contributions.
            </p>
          </div>

          <div className="mt-8 card-meeko overflow-hidden bg-white p-6 sm:p-10">
            <div className="flex flex-col gap-3 border-b border-[#18181B]/15 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="sticker sticker-sage">
                  [ INTERNSHIP ]
                </span>
                <h3 className="mt-2 text-2xl font-bold text-[#18181B]">
                  Software Development Intern
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#52525B]">
                  <a
                    href="https://www.websmartindia.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-[#18181B]/30 hover:decoration-[#18181B]"
                  >
                    WebsmartIndia <ExternalLink size={13} />
                  </a>
                </p>
              </div>

              <span className="inline-flex items-center rounded-full border border-[#18181B]/15 bg-[#F7F5F0] px-4 py-1.5 font-mono text-xs font-semibold text-[#18181B]">
                Software Engineering
              </span>
            </div>

            {/* Project Highlight */}
            <div className="mt-6 rounded-2xl border border-[#18181B]/15 bg-[#F7F5F0] p-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#71717A]">
                KEY PROJECT FOCUS
              </span>
              <h4 className="mt-1 text-lg font-bold text-[#18181B]">
                Healthcare Management System
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#52525B]">
                Developed a healthcare management system that enabled patients to check doctor availability,
                review doctor ratings, and book appointments through a streamlined and user-friendly workflow.
                The solution focused on improving healthcare accessibility, scheduling efficiency, and patient experience.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#71717A]">
                RESPONSIBILITIES &amp; CONTRIBUTIONS
              </span>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  "Built doctor availability and appointment booking workflows using Python and Django.",
                  "Designed responsive interfaces for patient interactions using HTML, CSS, Bootstrap, and JavaScript.",
                  "Implemented CRUD operations, validation logic, and MySQL integration for doctor and appointment data.",
                  "Worked with Git and GitHub for version control, debugging, and continuous feature improvement."
                ].map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#52525B]">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#18181B]" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* TECH STACK SECTION */}
        <motion.section className="section" {...fadeUp(0.04, 0.45)}>
          <div className="border-b border-[#18181B]/15 pb-5">
            <div className="eyebrow">
              <span>06</span>
              <span>/</span>
              <span>TECH STACK</span>
            </div>
            <h2 className="section-title mt-2">Technologies I use to build solutions</h2>
            <p className="section-subtitle">
              Languages, frameworks, databases, and developer tools in my everyday workflow.
            </p>
          </div>

          <div className="mt-8 card-meeko overflow-hidden bg-white p-6 sm:p-8">
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
        </motion.section>

        {/* CTA & CONTACT SECTION — Warm Pastel Band with Dual Message/Calendar */}
        <motion.section id="contact" className="section" {...fadeUp(0.04, 0.45)}>
          <div className="rounded-[28px] sm:rounded-[36px] border-[1.5px] border-[#18181B] bg-[#E5ECE0] p-6 sm:p-10 md:p-12 shadow-[0_4px_0_0_rgba(24,24,27,0.04)]">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="sticker sticker-sage">
                [ 07 · CONTACT &amp; BOOKING ]
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#18181B]">
                Have a problem worth building?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#52525B]">
                Let&apos;s turn your requirements into practical, reliable software. Send a message or pick a time directly on my calendar.
              </p>
            </div>

            {/* Inner White Tactile Shell */}
            <div className="cal-contact-shell">
              <div className={`cal-contact-grid ${contactTab === "schedule" ? "schedule-mode" : ""}`}>
                {contactTab === "message" && (
                  <div className="cal-contact-copy">
                    <div className="eyebrow">
                      <span>LET&apos;S TALK</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#18181B] mt-2">
                      Get in touch
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#52525B]">
                      Feel free to reach out for collaborations, project inquiries, or simply to discuss technical requirements.
                    </p>

                    <div className="mt-6 space-y-3 font-mono text-xs">
                      <div>
                        <span className="text-[#71717A] uppercase text-[10px] block font-bold">Email Directly</span>
                        <a
                          href="mailto:shvinaysiddhu@gmail.com"
                          className="cal-contact-email mt-1"
                        >
                          <Mail size={15} />
                          <span>shvinaysiddhu@gmail.com</span>
                        </a>
                      </div>

                      <div className="pt-2">
                        <span className="text-[#71717A] uppercase text-[10px] block font-bold">Location</span>
                        <span className="text-[#18181B] font-semibold">Bengaluru, Karnataka, India</span>
                      </div>
                    </div>

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
                    {/* Tabs */}
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

                    {/* Tab 1: Formspree Message Form */}
                    {contactTab === "message" && (
                      <form className="cal-contact-form" onSubmit={handleContactSubmit}>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div>
                            <label className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-[#71717A]">
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
                            <label className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-[#71717A]">
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
                          <label className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-[#71717A]">
                            Your Message
                          </label>
                          <textarea
                            required
                            name="message"
                            placeholder="Tell me what you're looking to build..."
                            rows={4}
                            className="cal-contact-field cal-contact-textarea"
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                          />
                        </div>

                        <div>
                          <button className="btn cal-contact-submit" type="submit" disabled={formStatus === "sending"}>
                            {formStatus === "sending" ? "Sending Message..." : "Send Message →"}
                          </button>

                          {formStatus === "success" && (
                            <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs font-semibold text-emerald-800">
                              <CheckCircle2 size={16} className="text-emerald-600" />
                              <span>Thanks — your message has been sent successfully. I will get back to you soon!</span>
                            </div>
                          )}
                          {formStatus === "error" && (
                            <div className="mt-3 rounded-xl border border-red-300 bg-red-50 p-3 text-xs font-semibold text-red-700">
                              {formError || "Submission failed. Please try again."}
                            </div>
                          )}
                        </div>
                      </form>
                    )}

                    {/* Tab 2: Cal.com Embedded Scheduler */}
                    {contactTab === "schedule" && (
                      <div>
                        <p className="cal-contact-copy-note">
                          Pick a date and time that works for you. A Google Meet / calendar invite will be sent directly to your email.
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
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-12 flex flex-col gap-4 border-t border-[#18181B]/15 pt-8 text-xs text-[#71717A] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>© 2026 VINAY S H</span>
            <span>—</span>
            <span>BENGALURU, INDIA</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/ShViNaY/" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vinay-sh-636a71288/" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition">
              LinkedIn
            </a>
            <a href="https://x.com/24vin_i" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition">
              𝕏
            </a>
            <a href="#home" className="back-to-top ml-2">
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </footer>
      </div>
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
      setMarquee(el.scrollWidth > el.clientWidth + 4);
    };

    check();
    window.addEventListener("resize", check);
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
    if (raw.includes("jwt")) key = "jwt";
    if (raw.includes("websocket")) key = "websockets";
    const Icon = iconMap[key];
    const color = techColors[item] ?? techColors[raw] ?? techColors[key] ?? "#71717A";

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
