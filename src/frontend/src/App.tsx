import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  BookOpen,
  Bug,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Eye,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Shield,
  Sun,
  Terminal,
  Trophy,
  Wifi,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────
interface Cert {
  id: number;
  title: string;
  issuer: string;
  image: string;
  color: string;
  badgeColor: string;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  ocid: string;
}

// ─── Data ─────────────────────────────────────────────────────
const certs: Cert[] = [
  {
    id: 1,
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    image: "/assets/generated/cert-cisco.dim_800x600.jpg",
    color: "blue",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-300",
  },
  {
    id: 2,
    title: "Cloud Security Fundamentals",
    issuer: "Palo Alto Networks",
    image: "/assets/generated/cert-paloalto-cloud.dim_800x600.jpg",
    color: "orange",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-300",
  },
  {
    id: 3,
    title: "Network Security Fundamentals",
    issuer: "Palo Alto Networks",
    image: "/assets/generated/cert-paloalto-network.dim_800x600.jpg",
    color: "orange",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-300",
  },
  {
    id: 4,
    title: "AI Foundation Associate",
    issuer: "Oracle Certified",
    image: "/assets/generated/cert-oracle.dim_800x600.jpg",
    color: "red",
    badgeColor: "bg-red-100 text-red-700 border-red-300",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "TinyTRaIL",
    subtitle: "Full Stack URL Shortener",
    description:
      "A full-stack URL shortening platform built with Node.js and JavaScript. Features JWT authentication, QR code generation for each short link, and efficient SQL database storage for link management.",
    tags: ["Node.js", "JavaScript", "JWT", "QR Code", "SQL"],
    icon: <Globe className="w-6 h-6" />,
    ocid: "projects.item.1",
  },
  {
    id: 2,
    title: "Port Scanner",
    subtitle: "Cybersecurity Tool",
    description:
      "A Python-based network port scanner leveraging socket programming to identify open ports and exposed services on target systems. Helps security professionals enumerate network attack surfaces.",
    tags: ["Python", "Socket Programming", "Network Security", "Pentesting"],
    icon: <Wifi className="w-6 h-6" />,
    ocid: "projects.item.2",
  },
  {
    id: 3,
    title: "Vulnerability Scanner",
    subtitle: "Security Tool",
    description:
      "An automated vulnerability scanning tool that detects system security risks and weak configurations. Generates detailed security reports with prioritized remediation steps for identified vulnerabilities.",
    tags: [
      "Python",
      "Security Automation",
      "Vulnerability Assessment",
      "Reports",
    ],
    icon: <Bug className="w-6 h-6" />,
    ocid: "projects.item.3",
  },
];

const skillCategories = [
  {
    label: "Programming",
    icon: <Code2 className="w-4 h-4" />,
    skills: ["C", "C++", "JavaScript", "Python"],
    accent: "#2563eb",
    darkAccent: "#22d3ee",
  },
  {
    label: "Web Development",
    icon: <Globe className="w-4 h-4" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    accent: "#7c3aed",
    darkAccent: "#00ff88",
  },
  {
    label: "Databases",
    icon: <Database className="w-4 h-4" />,
    skills: ["SQL", "MySQL"],
    accent: "#0891b2",
    darkAccent: "#22d3ee",
  },
  {
    label: "Cybersecurity Tools",
    icon: <Shield className="w-4 h-4" />,
    skills: [
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Wireshark",
      "SEToolkit",
      "Zphisher",
      "Crunch",
      "CeWL",
      "zip2john",
    ],
    accent: "#dc2626",
    darkAccent: "#00ff88",
  },
  {
    label: "Cloud",
    icon: <Cloud className="w-4 h-4" />,
    skills: ["AWS Fundamentals"],
    accent: "#d97706",
    darkAccent: "#22d3ee",
  },
  {
    label: "DevOps",
    icon: <GitBranch className="w-4 h-4" />,
    skills: ["Git", "GitHub"],
    accent: "#16a34a",
    darkAccent: "#00ff88",
  },
  {
    label: "Core Concepts",
    icon: <BookOpen className="w-4 h-4" />,
    skills: [
      "Data Structures",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "SDLC",
    ],
    accent: "#2563eb",
    darkAccent: "#22d3ee",
  },
  {
    label: "Dev Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: ["VS Code", "Postman", "MySQL Workbench"],
    accent: "#7c3aed",
    darkAccent: "#00ff88",
  },
];

// ─── Hero Background ───────────────────────────────────────────
function HeroBg({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          background: darkMode
            ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.52 0.24 262 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-30"
        style={{
          background: darkMode
            ? "radial-gradient(circle at 0% 0%, rgba(34,211,238,0.15), transparent 60%)"
            : "radial-gradient(circle at 0% 0%, oklch(0.52 0.24 262 / 0.2), transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-30"
        style={{
          background: darkMode
            ? "radial-gradient(circle at 100% 100%, rgba(0,255,136,0.1), transparent 60%)"
            : "radial-gradient(circle at 100% 100%, oklch(0.55 0.22 293 / 0.2), transparent 60%)",
        }}
      />
    </div>
  );
}

// ─── Terminal Tag ──────────────────────────────────────────────
function TerminalTag({ text, darkMode }: { text: string; darkMode?: boolean }) {
  return (
    <span
      className="font-mono text-xs px-2 py-1 rounded-md inline-block"
      style={{
        background: darkMode
          ? "rgba(0,255,136,0.1)"
          : "oklch(0.52 0.24 262 / 0.1)",
        color: darkMode ? "#00ff88" : "oklch(0.42 0.18 262)",
        border: darkMode
          ? "1px solid rgba(0,255,136,0.3)"
          : "1px solid oklch(0.52 0.24 262 / 0.2)",
      }}
    >
      &gt; {text}
    </span>
  );
}

// ─── Section Header ────────────────────────────────────────────
function SectionHeader({
  tag,
  title,
  subtitle,
  darkMode,
}: { tag: string; title: string; subtitle?: string; darkMode?: boolean }) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <TerminalTag text={tag} darkMode={darkMode} />
      <h2
        className="text-3xl md:text-4xl font-bold mt-3 section-title"
        style={{
          color: darkMode ? "#e2e8f0" : "#0f172a",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 max-w-2xl text-base leading-relaxed"
          style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// ─── Cert Slideshow ────────────────────────────────────────────
function CertSlideshow({
  darkMode,
  onViewDetails,
}: {
  darkMode: boolean;
  onViewDetails: (cert: Cert) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  };

  const prev = () => {
    const idx = (current - 1 + certs.length) % certs.length;
    goTo(idx, -1);
  };

  const next = () => {
    const idx = (current + 1) % certs.length;
    goTo(idx, 1);
  };

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrent((c) => (c + 1) % certs.length);
      }, 3500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const cert = certs[current];

  const cardBg = darkMode ? "#0d1a2e" : "#ffffff";
  const cardBorder = darkMode
    ? "1px solid rgba(0,255,136,0.2)"
    : "1px solid #e2e8f0";
  const cardShadow = darkMode
    ? "0 20px 60px rgba(0,255,136,0.1), 0 4px 24px rgba(0,0,0,0.4)"
    : "0 20px 60px rgba(37,99,235,0.12), 0 4px 24px rgba(0,0,0,0.05)";

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main card */}
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{
          background: cardBg,
          border: cardBorder,
          boxShadow: cardShadow,
        }}
      >
        {/* Image area */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "340px",
            background: darkMode ? "#070f1c" : "#f8fafc",
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={cert.id}
              src={cert.image}
              alt={cert.title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-contain p-4"
            />
          </AnimatePresence>

          {/* Gradient overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{
              background: darkMode
                ? "linear-gradient(to top, #0d1a2e, transparent)"
                : "linear-gradient(to top, #ffffff, transparent)",
            }}
          />

          {/* Arrow buttons */}
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: darkMode
                ? "rgba(0,255,136,0.2)"
                : "rgba(37,99,235,0.12)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            data-ocid="certs.secondary_button"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: darkMode
                ? "rgba(10,15,26,0.8)"
                : "rgba(255,255,255,0.85)",
              border: darkMode
                ? "1px solid rgba(0,255,136,0.3)"
                : "1px solid #e2e8f0",
              color: darkMode ? "#00ff88" : "#2563eb",
              backdropFilter: "blur(8px)",
            }}
            type="button"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: darkMode
                ? "rgba(0,255,136,0.2)"
                : "rgba(37,99,235,0.12)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            data-ocid="certs.primary_button"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: darkMode
                ? "rgba(10,15,26,0.8)"
                : "rgba(255,255,255,0.85)",
              border: darkMode
                ? "1px solid rgba(0,255,136,0.3)"
                : "1px solid #e2e8f0",
              color: darkMode ? "#00ff88" : "#2563eb",
              backdropFilter: "blur(8px)",
            }}
            type="button"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Info area */}
        <div className="px-6 py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${cert.id}-info`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="font-mono text-lg font-bold mb-1"
                style={{ color: darkMode ? "#e2e8f0" : "#1e293b" }}
              >
                {cert.title}
              </h3>
              <p
                className="font-mono text-sm mb-4"
                style={{ color: darkMode ? "#00ff88" : "#2563eb" }}
              >
                {cert.issuer}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" style={{ color: "#16a34a" }} />
              <span
                className="font-mono text-xs"
                style={{ color: darkMode ? "#64748b" : "#94a3b8" }}
              >
                Verified credential
              </span>
            </div>
            <Button
              data-ocid="certs.open_modal_button"
              variant="outline"
              size="sm"
              className="font-mono text-xs gap-2 transition-all"
              style={{
                border: darkMode
                  ? "1.5px solid #00ff88"
                  : "1.5px solid #2563eb",
                color: darkMode ? "#00ff88" : "#2563eb",
                backgroundColor: "transparent",
              }}
              onClick={() => onViewDetails(cert)}
            >
              <Eye className="w-3.5 h-3.5" />
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2 mt-5">
        {certs.map((cert, idx) => (
          <motion.button
            key={cert.id}
            whileHover={{ scale: 1.3 }}
            onClick={() => goTo(idx, idx > current ? 1 : -1)}
            data-ocid="certs.toggle"
            className="rounded-full transition-all"
            style={{
              width: idx === current ? "24px" : "8px",
              height: "8px",
              background:
                idx === current
                  ? darkMode
                    ? "#00ff88"
                    : "#2563eb"
                  : darkMode
                    ? "rgba(255,255,255,0.2)"
                    : "#cbd5e1",
            }}
            type="button"
            aria-label={`Go to certificate ${idx + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p
        className="font-mono text-xs mt-3"
        style={{ color: darkMode ? "#475569" : "#94a3b8" }}
      >
        {current + 1} / {certs.length}
      </p>
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────────
export default function App() {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [darkModeRotating, setDarkModeRotating] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certs" },
    { href: "#education", label: "Education" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "projects",
        "certifications",
        "education",
        "achievements",
        "contact",
      ];
      const scrollY = window.scrollY + 100;
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(section);
          return;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    try {
      const res = await fetch("https://formspree.io/f/mjgagljk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        }),
      });
      if (res.ok) {
        setFormSubmitted(true);
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setFormError("Failed to send. Please try again or email directly.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function toggleDarkMode() {
    setDarkModeRotating(true);
    setDarkMode((d) => !d);
    setTimeout(() => setDarkModeRotating(false), 500);
  }

  // ─── Dark mode style helpers ───────────────────────────────
  const dm = darkMode;
  const rootBg = dm ? "#0a0f1a" : "#f4f6ff";
  const rootText = dm ? "#e2e8f0" : "#0f172a";
  const navBg = dm ? "rgba(10,15,26,0.92)" : "rgba(255,255,255,0.92)";
  const navBorder = dm
    ? "1px solid rgba(0,255,136,0.1)"
    : "1px solid oklch(0.88 0.025 255)";
  const sectionBg = dm ? "#0a0f1a" : "#f4f6ff";
  const sectionBgAlt = dm ? "#0d1220" : "#eef1fb";
  const cardBg = dm ? "#0d1a2e" : "#f4f7ff";
  const cardBorder = dm
    ? "1px solid rgba(0,255,136,0.15)"
    : "1px solid #e2e8f0";
  const accentPrimary = dm ? "#00ff88" : "#2563eb";
  const accentSecondary = dm ? "#22d3ee" : "#7c3aed";
  const textMuted = dm ? "#64748b" : "#94a3b8";
  const textBody = dm ? "#94a3b8" : "#64748b";

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: rootBg, color: rootText }}
    >
      {/* ─── Navbar ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor: navBg,
          backdropFilter: "blur(16px)",
          borderBottom: navBorder,
          boxShadow: dm
            ? "0 1px 12px rgba(0,255,136,0.06)"
            : "0 1px 12px rgba(37,99,235,0.08)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-all"
              style={{
                background: dm
                  ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                  : "linear-gradient(135deg, #2563eb, #7c3aed)",
                color: dm ? "#0a0f1a" : "#ffffff",
                boxShadow: dm
                  ? "0 2px 8px rgba(0,255,136,0.35)"
                  : "0 2px 8px rgba(37,99,235,0.35)",
              }}
            >
              DS
            </div>
            <span
              className="font-mono text-sm hidden sm:block font-semibold"
              style={{ color: accentPrimary }}
            >
              dhruv@sec:~$
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  className="px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition-all"
                  style={{
                    color:
                      activeSection === link.href.slice(1)
                        ? accentPrimary
                        : textBody,
                    backgroundColor:
                      activeSection === link.href.slice(1)
                        ? dm
                          ? "rgba(0,255,136,0.1)"
                          : "oklch(0.52 0.24 262 / 0.1)"
                        : "transparent",
                    fontWeight:
                      activeSection === link.href.slice(1) ? "600" : "500",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <motion.button
              data-ocid="nav.toggle"
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg transition-colors relative overflow-hidden"
              style={{
                color: dm ? "#00ff88" : "#2563eb",
                backgroundColor: dm
                  ? "rgba(0,255,136,0.1)"
                  : "oklch(0.52 0.24 262 / 0.08)",
                border: dm
                  ? "1px solid rgba(0,255,136,0.2)"
                  : "1px solid oklch(0.52 0.24 262 / 0.15)",
              }}
              type="button"
              aria-label="Toggle dark mode"
            >
              <motion.div
                animate={{ rotate: darkModeRotating ? 360 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {dm ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{
                color: accentPrimary,
                backgroundColor: dm
                  ? "rgba(0,255,136,0.1)"
                  : "oklch(0.52 0.24 262 / 0.08)",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
              style={{
                backgroundColor: dm ? "#0d1220" : "#eef1fb",
                borderBottom: navBorder,
              }}
            >
              <ul className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-3 py-2 rounded-lg font-mono text-sm transition-all"
                      style={{ color: textBody }}
                      onClick={() => setMobileMenuOpen(false)}
                      data-ocid="nav.link"
                    >
                      &gt; {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── Hero Section ────────────────────────────────────── */}
      <section
        id="home"
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center pt-16 transition-colors duration-500"
        style={{ backgroundColor: sectionBg }}
      >
        <HeroBg darkMode={dm} />
        <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0 relative"
            >
              {/* Outer decorative rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  margin: "-12px",
                  border: dm
                    ? "1.5px dashed rgba(0,255,136,0.3)"
                    : "1.5px dashed oklch(0.52 0.24 262 / 0.3)",
                  borderRadius: "50%",
                  animation: "spin 20s linear infinite",
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  margin: "-24px",
                  border: dm
                    ? "1.5px dashed rgba(34,211,238,0.2)"
                    : "1.5px dashed oklch(0.55 0.22 293 / 0.2)",
                  borderRadius: "50%",
                  animation: "spin 30s linear infinite reverse",
                }}
              />
              {/* Profile image */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden profile-ring float-anim">
                <img
                  src="/assets/uploads/1763988470672-1.jpg"
                  alt="Dhruv Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Shield badge */}
              <div
                className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: dm
                    ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                    : "linear-gradient(135deg, #2563eb, #7c3aed)",
                  boxShadow: dm
                    ? "0 4px 12px rgba(0,255,136,0.4)"
                    : "0 4px 12px rgba(37,99,235,0.4)",
                }}
              >
                <Shield
                  className="w-5 h-5"
                  style={{ color: dm ? "#0a0f1a" : "#ffffff" }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TerminalTag text="whoami" darkMode={dm} />
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-3"
                  style={{
                    color: rootText,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  Dhruv{" "}
                  <span
                    className="glow-text-blue"
                    style={{
                      color: dm ? "#00ff88" : "#2563eb",
                    }}
                  >
                    Sharma
                  </span>
                </h1>
                <p
                  className="font-mono text-sm sm:text-base mb-6"
                  style={{ color: accentSecondary }}
                >
                  <span style={{ color: accentPrimary, fontWeight: 700 }}>
                    $
                  </span>{" "}
                  Cybersecurity Enthusiast{" "}
                  <span style={{ color: dm ? "#334155" : "#cbd5e1" }}>|</span>{" "}
                  B.Tech CSE (AI){" "}
                  <span style={{ color: dm ? "#334155" : "#cbd5e1" }}>|</span>{" "}
                  Honours in Cybersecurity
                </p>
                <p
                  className="text-base mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  style={{ color: textBody }}
                >
                  Motivated CS student skilled in penetration testing,
                  vulnerability assessment, and cybersecurity tools. Experienced
                  with Kali Linux, Nmap, Metasploit, and Wireshark.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Button
                    data-ocid="hero.primary_button"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-mono gap-2 transition-all"
                    style={{
                      background: dm
                        ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                        : "linear-gradient(135deg, #2563eb, #7c3aed)",
                      color: dm ? "#0a0f1a" : "#ffffff",
                      border: "none",
                      boxShadow: dm
                        ? "0 4px 16px rgba(0,255,136,0.35)"
                        : "0 4px 16px rgba(37,99,235,0.35)",
                    }}
                  >
                    <Terminal className="w-4 h-4" />
                    View Projects
                  </Button>
                  <Button
                    data-ocid="hero.secondary_button"
                    variant="outline"
                    className="font-mono gap-2 transition-all"
                    style={{
                      border: `1.5px solid ${accentPrimary}`,
                      color: accentPrimary,
                      backgroundColor: "transparent",
                    }}
                    onClick={() => {}}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                  <Button
                    data-ocid="hero.link"
                    variant="ghost"
                    className="font-mono gap-2 transition-all"
                    style={{ color: textMuted }}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Button>
                </div>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-8 mt-10 justify-center lg:justify-start"
              >
                {[
                  { label: "Projects", value: "3+" },
                  { label: "Certifications", value: "4" },
                  { label: "CGPA", value: "8+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl font-bold"
                      style={{
                        color: dm ? "#00ff88" : "#2563eb",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="font-mono text-xs mt-1"
                      style={{ color: textMuted }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ color: textMuted }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>

      {/* ─── Skills Section ──────────────────────────────────── */}
      <section
        id="skills"
        data-ocid="skills.section"
        className="py-24 relative transition-colors duration-500"
        style={{ backgroundColor: sectionBgAlt }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            tag="ls ./skills"
            title="Technical Skills"
            subtitle="A comprehensive toolkit for cybersecurity research and full-stack development."
            darkMode={dm}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillCategories.map((cat, idx) => {
              const accent = dm ? cat.darkAccent : cat.accent;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  whileHover={{
                    y: -4,
                    boxShadow: dm
                      ? "0 12px 32px rgba(0,255,136,0.12)"
                      : "0 12px 32px rgba(37,99,235,0.12)",
                  }}
                  className="rounded-xl p-5 cursor-default transition-colors"
                  style={{
                    background: dm ? "#0d1a2e" : "#f4f7ff",
                    border: dm
                      ? "1px solid rgba(0,255,136,0.1)"
                      : "1px solid #e2e8f0",
                    boxShadow: dm
                      ? "0 2px 8px rgba(0,0,0,0.3)"
                      : "0 2px 8px rgba(37,99,235,0.05)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${accent}20`,
                        color: accent,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <h3
                      className="font-mono text-xs font-semibold"
                      style={{ color: accent }}
                    >
                      {cat.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-2 py-1 rounded-md"
                        style={{
                          background: dm ? "rgba(255,255,255,0.05)" : "#f1f5f9",
                          color: dm ? "#94a3b8" : "#475569",
                          border: dm
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "1px solid #e2e8f0",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Projects Section ────────────────────────────────── */}
      <section
        id="projects"
        data-ocid="projects.section"
        className="py-24 relative transition-colors duration-500"
        style={{ backgroundColor: sectionBg }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dm
              ? "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(34,211,238,0.04) 0%, transparent 70%)"
              : "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.55 0.22 293 / 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <SectionHeader
            tag="cat ./projects/*"
            title="Projects"
            subtitle="Security tools and full-stack applications built with modern technologies."
            darkMode={dm}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                data-ocid={project.ocid}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: dm
                    ? "0 20px 40px rgba(0,255,136,0.15)"
                    : "0 20px 40px rgba(37,99,235,0.2)",
                }}
                className="rounded-xl p-6 flex flex-col cursor-default transition-colors"
                style={{
                  background: cardBg,
                  border: cardBorder,
                  boxShadow: dm
                    ? "0 2px 12px rgba(0,0,0,0.3)"
                    : "0 2px 12px rgba(37,99,235,0.06)",
                }}
              >
                {/* Project icon */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: dm
                        ? "linear-gradient(135deg, rgba(0,255,136,0.12), rgba(34,211,238,0.12))"
                        : "linear-gradient(135deg, oklch(0.52 0.24 262 / 0.12), oklch(0.55 0.22 293 / 0.12))",
                      border: dm
                        ? "1px solid rgba(0,255,136,0.2)"
                        : "1px solid oklch(0.52 0.24 262 / 0.2)",
                      color: accentPrimary,
                    }}
                  >
                    {project.icon}
                  </div>
                  <Badge
                    className="font-mono text-xs"
                    style={{
                      backgroundColor: dm
                        ? "rgba(34,211,238,0.1)"
                        : "oklch(0.55 0.22 293 / 0.1)",
                      color: accentSecondary,
                      border: dm
                        ? "1px solid rgba(34,211,238,0.2)"
                        : "1px solid oklch(0.55 0.22 293 / 0.2)",
                    }}
                  >
                    {project.subtitle}
                  </Badge>
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: textBody }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 rounded-md"
                      style={{
                        background: dm ? "rgba(255,255,255,0.05)" : "#f1f5f9",
                        color: dm ? "#94a3b8" : "#475569",
                        border: dm
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "1px solid #e2e8f0",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Certifications Section ──────────────────────────── */}
      <section
        id="certifications"
        data-ocid="certs.section"
        className="py-24 relative transition-colors duration-500"
        style={{ backgroundColor: sectionBgAlt }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            tag="ls ./certifications"
            title="Certifications"
            subtitle="Industry-recognized credentials validating expertise in cybersecurity and cloud technologies."
            darkMode={dm}
          />

          <CertSlideshow darkMode={dm} onViewDetails={setSelectedCert} />
        </div>
      </section>

      {/* ─── Certificate Dialog ───────────────────────────────── */}
      <Dialog
        open={selectedCert !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCert(null);
        }}
      >
        <DialogContent
          className="max-w-3xl w-full p-0 overflow-hidden"
          style={{
            backgroundColor: dm ? "#0d1220" : "#eef1fb",
            border: dm ? "1px solid rgba(0,255,136,0.2)" : "1px solid #e2e8f0",
            boxShadow: dm
              ? "0 20px 60px rgba(0,255,136,0.1)"
              : "0 20px 60px rgba(37,99,235,0.15)",
          }}
        >
          {selectedCert && (
            <>
              <DialogHeader
                className="px-6 pt-6 pb-4"
                style={{
                  borderBottom: dm
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid #f1f5f9",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: dm
                          ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                          : "linear-gradient(135deg, #2563eb, #7c3aed)",
                        color: dm ? "#0a0f1a" : "#ffffff",
                      }}
                    >
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <DialogTitle
                        className="font-mono text-base"
                        style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                      >
                        {selectedCert.title}
                      </DialogTitle>
                      <p
                        className="font-mono text-xs mt-0.5"
                        style={{ color: accentPrimary }}
                      >
                        {selectedCert.issuer}
                      </p>
                    </div>
                  </div>
                  <button
                    data-ocid="certs.close_button"
                    className="p-1.5 rounded-lg transition-colors"
                    style={{ color: dm ? "#64748b" : "#94a3b8" }}
                    onClick={() => setSelectedCert(null)}
                    type="button"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </DialogHeader>

              {/* Certificate image */}
              <div className="p-4">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    border: dm
                      ? "1px solid rgba(0,255,136,0.15)"
                      : "1px solid #e2e8f0",
                  }}
                >
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} - ${selectedCert.issuer}`}
                    className="w-full h-auto block"
                    style={{
                      maxHeight: "500px",
                      objectFit: "contain",
                      backgroundColor: dm ? "#070f1c" : "#f8fafc",
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" style={{ color: "#16a34a" }} />
                  <span
                    className="font-mono text-xs"
                    style={{ color: textMuted }}
                  >
                    Verified credential — {selectedCert.issuer}
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ─── Education Section ───────────────────────────────── */}
      <section
        id="education"
        data-ocid="education.section"
        className="py-24 relative transition-colors duration-500"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <SectionHeader
            tag="cat ./education.json"
            title="Education"
            darkMode={dm}
          />

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute top-0 bottom-0 w-0.5"
              style={{
                left: "1.5rem",
                background: dm
                  ? "linear-gradient(to bottom, #00ff88, #22d3ee, transparent)"
                  : "linear-gradient(to bottom, #2563eb, #7c3aed, transparent)",
              }}
            />

            <div className="space-y-6">
              {/* GL Bajaj */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="pl-14 relative"
              >
                <div
                  className="absolute top-6 w-5 h-5 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    left: "1.5rem",
                    background: dm
                      ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                      : "linear-gradient(135deg, #2563eb, #7c3aed)",
                    boxShadow: dm
                      ? "0 0 12px rgba(0,255,136,0.5)"
                      : "0 0 12px rgba(37,99,235,0.5)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dm ? "#0a0f1a" : "#ffffff" }}
                  />
                </div>
                <motion.div
                  whileHover={{
                    y: -3,
                    boxShadow: dm
                      ? "0 12px 32px rgba(0,255,136,0.1)"
                      : "0 12px 32px rgba(37,99,235,0.1)",
                  }}
                  className="rounded-xl p-6 transition-colors"
                  style={{ background: cardBg, border: cardBorder }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="font-bold text-base"
                        style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                      >
                        GL Bajaj Group of Institutions
                      </h3>
                      <p
                        className="font-mono text-sm mt-1"
                        style={{ color: accentPrimary }}
                      >
                        B.Tech CSE (Artificial Intelligence)
                      </p>
                      <p
                        className="font-mono text-xs mt-0.5"
                        style={{ color: accentSecondary }}
                      >
                        Honours in Cybersecurity
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        className="font-mono text-xs"
                        style={{
                          backgroundColor: dm
                            ? "rgba(0,255,136,0.1)"
                            : "oklch(0.52 0.24 262 / 0.1)",
                          color: accentPrimary,
                          border: dm
                            ? "1px solid rgba(0,255,136,0.25)"
                            : "1px solid oklch(0.52 0.24 262 / 0.25)",
                        }}
                      >
                        2023 – 2027
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" style={{ color: "#16a34a" }} />
                    <span className="text-sm" style={{ color: textBody }}>
                      CGPA:{" "}
                      <span
                        className="font-semibold"
                        style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                      >
                        8+ / 10
                      </span>
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Aviraj World School */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="pl-14 relative"
              >
                <div
                  className="absolute top-6 w-5 h-5 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    left: "1.5rem",
                    background: dm
                      ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                      : "linear-gradient(135deg, #2563eb, #7c3aed)",
                    boxShadow: dm
                      ? "0 0 12px rgba(0,255,136,0.4)"
                      : "0 0 12px rgba(37,99,235,0.4)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dm ? "#0a0f1a" : "#ffffff" }}
                  />
                </div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-xl p-6 transition-colors"
                  style={{ background: cardBg, border: cardBorder }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-bold text-base"
                        style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                      >
                        Aviraj World School (CBSE)
                      </h3>
                      <p
                        className="font-mono text-sm mt-1"
                        style={{ color: accentPrimary }}
                      >
                        Class XII
                      </p>
                    </div>
                    <Badge
                      className="font-mono text-xs"
                      style={{
                        backgroundColor: "#16a34a15",
                        color: "#16a34a",
                        border: "1px solid #16a34a30",
                      }}
                    >
                      91%
                    </Badge>
                  </div>
                </motion.div>
              </motion.div>

              {/* RDS */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pl-14 relative"
              >
                <div
                  className="absolute top-6 w-5 h-5 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    left: "1.5rem",
                    background: dm
                      ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                      : "linear-gradient(135deg, #2563eb, #7c3aed)",
                    boxShadow: dm
                      ? "0 0 12px rgba(0,255,136,0.3)"
                      : "0 0 12px rgba(37,99,235,0.3)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dm ? "#0a0f1a" : "#ffffff" }}
                  />
                </div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-xl p-6 transition-colors"
                  style={{ background: cardBg, border: cardBorder }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-bold text-base"
                        style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                      >
                        RDS Public School (CBSE)
                      </h3>
                      <p
                        className="font-mono text-sm mt-1"
                        style={{ color: accentPrimary }}
                      >
                        Class X
                      </p>
                    </div>
                    <Badge
                      className="font-mono text-xs"
                      style={{
                        backgroundColor: "#16a34a15",
                        color: "#16a34a",
                        border: "1px solid #16a34a30",
                      }}
                    >
                      90%
                    </Badge>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Achievements Section ────────────────────────────── */}
      <section
        id="achievements"
        data-ocid="achievements.section"
        className="py-24 relative transition-colors duration-500"
        style={{ backgroundColor: sectionBgAlt }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            tag="cat ./achievements.log"
            title="Achievements & Activities"
            darkMode={dm}
          />

          <div className="space-y-3">
            {[
              {
                text: "Team Lead – Smart India Hackathon 2025 (Cleared Internal Round)",
                icon: <Trophy className="w-4 h-4" />,
                color: dm ? "#22d3ee" : "#2563eb",
                bg: dm ? "rgba(34,211,238,0.1)" : "#2563eb15",
              },
              {
                text: "Practicing cybersecurity labs on TryHackMe and Hack The Box",
                icon: <Terminal className="w-4 h-4" />,
                color: dm ? "#00ff88" : "#7c3aed",
                bg: dm ? "rgba(0,255,136,0.1)" : "#7c3aed15",
              },
              {
                text: "Member – National Service Scheme (NSS)",
                icon: <GraduationCap className="w-4 h-4" />,
                color: dm ? "#22d3ee" : "#0891b2",
                bg: dm ? "rgba(34,211,238,0.1)" : "#0891b215",
              },
              {
                text: "Design Team – Rotaract Club",
                icon: <Zap className="w-4 h-4" />,
                color: dm ? "#00ff88" : "#d97706",
                bg: dm ? "rgba(0,255,136,0.08)" : "#d9770615",
              },
              {
                text: "Event Management Team – Shrinik Club",
                icon: <Award className="w-4 h-4" />,
                color: dm ? "#22d3ee" : "#16a34a",
                bg: dm ? "rgba(34,211,238,0.08)" : "#16a34a15",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ x: 4 }}
                className="rounded-xl p-5 flex items-center gap-4 transition-colors"
                style={{
                  background: dm ? "#0d1a2e" : "#f4f7ff",
                  border: dm
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid #e2e8f0",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: item.bg,
                    color: item.color,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.icon}
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: dm ? "#94a3b8" : "#475569" }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─────────────────────────────────── */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-24 relative transition-colors duration-500"
        style={{ backgroundColor: sectionBg }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dm
              ? "radial-gradient(ellipse 70% 50% at 100% 50%, rgba(0,255,136,0.04) 0%, transparent 70%)"
              : "radial-gradient(ellipse 70% 50% at 100% 50%, oklch(0.52 0.24 262 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <SectionHeader
            tag="./connect --target dhruv"
            title="Get In Touch"
            subtitle="Have a project in mind or want to discuss cybersecurity? I'm open to opportunities."
            darkMode={dm}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3
                  className="text-lg font-bold mb-6"
                  style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Phone className="w-4 h-4" />,
                      label: "Phone",
                      value: "+91 7878309814",
                      href: "tel:+917878309814",
                    },
                    {
                      icon: <Mail className="w-4 h-4" />,
                      label: "Email",
                      value: "dhruvsharmads0506@gmail.com",
                      href: "mailto:dhruvsharmads0506@gmail.com",
                    },
                    {
                      icon: <MapPin className="w-4 h-4" />,
                      label: "Location",
                      value: "Bhiwadi, Rajasthan, India",
                      href: undefined,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: dm
                            ? "rgba(0,255,136,0.1)"
                            : "linear-gradient(135deg, #2563eb15, #7c3aed15)",
                          color: accentPrimary,
                          border: dm
                            ? "1px solid rgba(0,255,136,0.2)"
                            : "1px solid #2563eb20",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className="font-mono text-xs"
                          style={{ color: textMuted }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-mono text-sm transition-colors"
                            style={{ color: dm ? "#94a3b8" : "#475569" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className="font-mono text-sm"
                            style={{ color: dm ? "#94a3b8" : "#475569" }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3
                  className="font-mono text-sm font-bold mb-4"
                  style={{ color: textMuted }}
                >
                  {"// Social Links"}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="https://github.com/dhruvsharmads0506"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.link"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-mono text-sm"
                    style={{
                      background: dm ? "#0d1a2e" : "#f8fafc",
                      border: dm
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid #e2e8f0",
                      color: dm ? "#94a3b8" : "#475569",
                    }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/dhruvsharma0506"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.link"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-mono text-sm"
                    style={{
                      background: dm ? "#0d1a2e" : "#f8fafc",
                      border: dm
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid #e2e8f0",
                      color: "#0891b2",
                    }}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/dhruv_s_0506"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.link"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-mono text-sm"
                    style={{
                      background: dm ? "#0d1a2e" : "#f8fafc",
                      border: dm
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid #e2e8f0",
                      color: "#e1306c",
                    }}
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: dm ? "#0d1220" : "#eef1fb",
                  border: dm
                    ? "1px solid rgba(0,255,136,0.15)"
                    : "1px solid #e2e8f0",
                  boxShadow: dm
                    ? "0 4px 24px rgba(0,0,0,0.3)"
                    : "0 4px 24px rgba(37,99,235,0.08)",
                }}
              >
                <h3
                  className="font-mono text-base font-bold mb-6"
                  style={{ color: dm ? "#94a3b8" : "#475569" }}
                >
                  {"// Send a message"}
                </h3>

                {formSubmitted ? (
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-10"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: dm
                          ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                          : "linear-gradient(135deg, #2563eb, #7c3aed)",
                        boxShadow: dm
                          ? "0 4px 16px rgba(0,255,136,0.35)"
                          : "0 4px 16px rgba(37,99,235,0.35)",
                      }}
                    >
                      <Lock
                        className="w-6 h-6"
                        style={{ color: dm ? "#0a0f1a" : "#ffffff" }}
                      />
                    </div>
                    <p
                      className="font-mono text-sm text-center font-semibold"
                      style={{ color: dm ? "#e2e8f0" : "#1e293b" }}
                    >
                      Message sent successfully!
                    </p>
                    <p
                      className="font-mono text-xs"
                      style={{ color: textMuted }}
                    >
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div>
                      <Label
                        className="font-mono text-xs mb-1.5 block"
                        style={{ color: textMuted }}
                      >
                        {"// name"}
                      </Label>
                      <Input
                        data-ocid="contact.input"
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        required
                        className="font-mono text-sm"
                        style={{
                          background: dm ? "rgba(255,255,255,0.04)" : "#f8fafc",
                          border: dm
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "1px solid #e2e8f0",
                          color: dm ? "#e2e8f0" : "#1e293b",
                        }}
                      />
                    </div>
                    <div>
                      <Label
                        className="font-mono text-xs mb-1.5 block"
                        style={{ color: textMuted }}
                      >
                        {"// email"}
                      </Label>
                      <Input
                        data-ocid="contact.search_input"
                        type="email"
                        placeholder="your@email.com"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        required
                        className="font-mono text-sm"
                        style={{
                          background: dm ? "rgba(255,255,255,0.04)" : "#f8fafc",
                          border: dm
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "1px solid #e2e8f0",
                          color: dm ? "#e2e8f0" : "#1e293b",
                        }}
                      />
                    </div>
                    <div>
                      <Label
                        className="font-mono text-xs mb-1.5 block"
                        style={{ color: textMuted }}
                      >
                        {"// message"}
                      </Label>
                      <Textarea
                        data-ocid="contact.textarea"
                        placeholder="Your message..."
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        required
                        className="font-mono text-sm resize-none"
                        style={{
                          background: dm ? "rgba(255,255,255,0.04)" : "#f8fafc",
                          border: dm
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "1px solid #e2e8f0",
                          color: dm ? "#e2e8f0" : "#1e293b",
                        }}
                      />
                    </div>
                    {formError && (
                      <p
                        data-ocid="contact.error_state"
                        className="font-mono text-xs text-red-500"
                      >
                        {formError}
                      </p>
                    )}
                    <Button
                      data-ocid="contact.submit_button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-mono gap-2 transition-all"
                      style={{
                        background: dm
                          ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                          : "linear-gradient(135deg, #2563eb, #7c3aed)",
                        color: dm ? "#0a0f1a" : "#ffffff",
                        border: "none",
                        boxShadow: dm
                          ? "0 4px 16px rgba(0,255,136,0.3)"
                          : "0 4px 16px rgba(37,99,235,0.3)",
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer
        className="py-10 relative transition-colors duration-500"
        style={{
          background: dm
            ? "linear-gradient(135deg, #070f1c, #0a0f1a)"
            : "linear-gradient(135deg, #1e293b, #0f172a)",
          borderTop: dm ? "1px solid rgba(0,255,136,0.1)" : "1px solid #334155",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: dm
                    ? "linear-gradient(135deg, #00ff88, #22d3ee)"
                    : "linear-gradient(135deg, #2563eb, #7c3aed)",
                }}
              >
                <Shield
                  className="w-3.5 h-3.5"
                  style={{ color: dm ? "#0a0f1a" : "#ffffff" }}
                />
              </div>
              <span className="font-mono text-sm text-slate-400">
                © {new Date().getFullYear()} Dhruv Sharma
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dhruvsharmads0506"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="transition-colors text-slate-500 hover:text-blue-400"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruvsharma0506"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="transition-colors text-slate-500 hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dhruv_s_0506"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="transition-colors text-slate-500 hover:text-pink-400"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:dhruvsharmads0506@gmail.com"
                data-ocid="footer.link"
                className="transition-colors text-slate-500 hover:text-blue-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
