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
  Phone,
  Shield,
  Terminal,
  Trophy,
  Wifi,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  },
  {
    id: 2,
    title: "Cloud Security Fundamentals",
    issuer: "Palo Alto Networks",
    image: "/assets/generated/cert-paloalto-cloud.dim_800x600.jpg",
    color: "orange",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  },
  {
    id: 3,
    title: "Network Security Fundamentals",
    issuer: "Palo Alto Networks",
    image: "/assets/generated/cert-paloalto-network.dim_800x600.jpg",
    color: "orange",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  },
  {
    id: 4,
    title: "AI Foundation Associate",
    issuer: "Oracle Certified",
    image: "/assets/generated/cert-oracle.dim_800x600.jpg",
    color: "red",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
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
  },
  {
    label: "Web Development",
    icon: <Globe className="w-4 h-4" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    label: "Databases",
    icon: <Database className="w-4 h-4" />,
    skills: ["SQL", "MySQL"],
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
  },
  {
    label: "Cloud",
    icon: <Cloud className="w-4 h-4" />,
    skills: ["AWS Fundamentals"],
  },
  {
    label: "DevOps",
    icon: <GitBranch className="w-4 h-4" />,
    skills: ["Git", "GitHub"],
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
  },
  {
    label: "Dev Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: ["VS Code", "Postman", "MySQL Workbench"],
  },
];

// ─── Particle Background Component ────────────────────────────
function ParticleGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.82 0.18 195 / 0.08) 0%, transparent 70%)",
        }}
      />
      {/* Corner accents */}
      <div
        className="absolute top-0 left-0 w-64 h-64 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, oklch(0.82 0.18 195 / 0.3), transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, oklch(0.78 0.22 145 / 0.3), transparent 60%)",
        }}
      />
    </div>
  );
}

// ─── Terminal Tag ──────────────────────────────────────────────
function TerminalTag({ text }: { text: string }) {
  return (
    <span className="font-mono text-xs text-[#00d4ff] opacity-70">
      &gt; {text}
    </span>
  );
}

// ─── Section Header ────────────────────────────────────────────
function SectionHeader({
  tag,
  title,
  subtitle,
}: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <TerminalTag text={tag} />
      <h2
        className="font-mono text-3xl md:text-4xl font-bold mt-2 section-title"
        style={{ color: "#e8f4ff" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-muted-foreground max-w-2xl"
          style={{ color: "oklch(0.65 0.04 220)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────────
export default function App() {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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

  // Track active section on scroll
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

  const certOcids = [
    "certs.item.1",
    "certs.item.2",
    "certs.item.3",
    "certs.item.4",
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#080d1a", color: "#e8f4ff" }}
    >
      {/* ─── Navbar ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(8,13,26,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid oklch(0.82 0.18 195 / 0.15)",
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
              className="w-9 h-9 rounded flex items-center justify-center font-mono font-bold text-sm transition-all"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.82 0.18 195 / 0.2), oklch(0.78 0.22 145 / 0.2))",
                border: "1px solid oklch(0.82 0.18 195 / 0.5)",
                color: "#00d4ff",
                boxShadow: "0 0 8px oklch(0.82 0.18 195 / 0.3)",
              }}
            >
              DS
            </div>
            <span
              className="font-mono text-sm hidden sm:block"
              style={{ color: "#00d4ff" }}
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
                  className="px-3 py-1.5 rounded font-mono text-xs transition-all"
                  style={{
                    color:
                      activeSection === link.href.slice(1)
                        ? "#00d4ff"
                        : "oklch(0.65 0.04 220)",
                    backgroundColor:
                      activeSection === link.href.slice(1)
                        ? "oklch(0.82 0.18 195 / 0.1)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded transition-colors"
            style={{ color: "#00d4ff" }}
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
                backgroundColor: "#080d1a",
                borderBottom: "1px solid oklch(0.82 0.18 195 / 0.15)",
              }}
            >
              <ul className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-3 py-2 rounded font-mono text-sm transition-all"
                      style={{ color: "oklch(0.75 0.05 220)" }}
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
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <ParticleGrid />
        {/* Scanlines overlay */}
        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

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
                className="absolute inset-0 rounded-full pulse-ring"
                style={{
                  margin: "-12px",
                  border: "1px dashed oklch(0.82 0.18 195 / 0.3)",
                  borderRadius: "50%",
                  animation: "spin 20s linear infinite",
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  margin: "-24px",
                  border: "1px dashed oklch(0.78 0.22 145 / 0.2)",
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
                  background: "linear-gradient(135deg, #080d1a, #0d1426)",
                  border: "2px solid #00d4ff",
                  boxShadow: "0 0 15px #00d4ff60",
                }}
              >
                <Shield className="w-5 h-5" style={{ color: "#00d4ff" }} />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TerminalTag text="whoami" />
                <h1
                  className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-2"
                  style={{ color: "#e8f4ff" }}
                >
                  Dhruv{" "}
                  <span className="glow-text-cyan" style={{ color: "#00d4ff" }}>
                    Sharma
                  </span>
                </h1>
                <p
                  className="font-mono text-sm sm:text-base mb-6"
                  style={{ color: "oklch(0.75 0.12 145)" }}
                >
                  <span style={{ color: "#00ff41" }}>$</span> Cybersecurity
                  Enthusiast{" "}
                  <span style={{ color: "oklch(0.55 0.04 220)" }}>|</span>{" "}
                  B.Tech CSE (AI){" "}
                  <span style={{ color: "oklch(0.55 0.04 220)" }}>|</span>{" "}
                  Honours in Cybersecurity
                </p>
                <p
                  className="text-base mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  style={{ color: "oklch(0.65 0.04 220)" }}
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
                      background:
                        "linear-gradient(135deg, oklch(0.82 0.18 195 / 0.2), oklch(0.78 0.22 145 / 0.2))",
                      border: "1px solid #00d4ff",
                      color: "#00d4ff",
                      boxShadow: "0 0 15px #00d4ff30",
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
                      border: "1px solid oklch(0.78 0.22 145 / 0.6)",
                      color: "#00ff41",
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
                    style={{ color: "oklch(0.65 0.04 220)" }}
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
                className="flex gap-6 mt-10 justify-center lg:justify-start"
              >
                {[
                  { label: "Projects", value: "3+" },
                  { label: "Certifications", value: "4" },
                  { label: "CGPA", value: "7.9" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="font-mono text-2xl font-bold glow-text-cyan"
                      style={{ color: "#00d4ff" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="font-mono text-xs mt-1"
                      style={{ color: "oklch(0.55 0.04 220)" }}
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
          style={{ color: "oklch(0.55 0.04 220)" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>

        {/* CSS spin animation */}
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
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            tag="ls ./skills"
            title="Technical Skills"
            subtitle="A comprehensive toolkit for cybersecurity research and full-stack development."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="card-hover rounded-lg p-5"
                style={{ backgroundColor: "#0f1830" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded flex items-center justify-center"
                    style={{
                      backgroundColor: "oklch(0.82 0.18 195 / 0.15)",
                      color: "#00d4ff",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3
                    className="font-mono text-xs font-semibold"
                    style={{ color: "#00d4ff" }}
                  >
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Section ────────────────────────────────── */}
      <section
        id="projects"
        data-ocid="projects.section"
        className="py-24 relative"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.78 0.22 145 / 0.04) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <SectionHeader
            tag="cat ./projects/*"
            title="Projects"
            subtitle="Security tools and full-stack applications built with modern technologies."
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
                className="card-hover rounded-lg p-6 flex flex-col"
                style={{ backgroundColor: "#0f1830" }}
              >
                {/* Project icon */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.82 0.18 195 / 0.2), oklch(0.78 0.22 145 / 0.2))",
                      border: "1px solid oklch(0.82 0.18 195 / 0.3)",
                      color: "#00d4ff",
                    }}
                  >
                    {project.icon}
                  </div>
                  <Badge
                    className="font-mono text-xs"
                    style={{
                      backgroundColor: "oklch(0.78 0.22 145 / 0.15)",
                      color: "#00ff41",
                      border: "1px solid oklch(0.78 0.22 145 / 0.3)",
                    }}
                  >
                    {project.subtitle}
                  </Badge>
                </div>

                <h3
                  className="font-mono text-xl font-bold mb-2"
                  style={{ color: "#e8f4ff" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "oklch(0.65 0.04 220)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
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
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            tag="ls ./certifications"
            title="Certifications"
            subtitle="Industry-recognized credentials validating expertise in cybersecurity and cloud technologies."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certs.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="card-hover rounded-lg p-5 flex flex-col"
                style={{ backgroundColor: "#0f1830" }}
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.82 0.18 195 / 0.15), oklch(0.78 0.22 145 / 0.15))",
                      border: "1px solid oklch(0.82 0.18 195 / 0.25)",
                    }}
                  >
                    <Award className="w-6 h-6" style={{ color: "#00d4ff" }} />
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded border ${cert.badgeColor}`}
                  >
                    Certified
                  </span>
                </div>

                <h3
                  className="font-mono text-sm font-bold mb-1 flex-1"
                  style={{ color: "#e8f4ff" }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: "oklch(0.55 0.04 220)" }}
                >
                  {cert.issuer}
                </p>

                <Button
                  data-ocid={certOcids[idx]}
                  variant="outline"
                  size="sm"
                  className="w-full font-mono text-xs gap-2 transition-all mt-auto"
                  style={{
                    border: "1px solid oklch(0.82 0.18 195 / 0.4)",
                    color: "#00d4ff",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
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
            backgroundColor: "#0d1426",
            border: "1px solid oklch(0.82 0.18 195 / 0.4)",
            boxShadow: "0 0 40px oklch(0.82 0.18 195 / 0.2)",
          }}
        >
          {selectedCert && (
            <>
              <DialogHeader
                className="px-6 pt-6 pb-4"
                style={{
                  borderBottom: "1px solid oklch(0.82 0.18 195 / 0.15)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center"
                      style={{
                        backgroundColor: "oklch(0.82 0.18 195 / 0.15)",
                        color: "#00d4ff",
                      }}
                    >
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <DialogTitle
                        className="font-mono text-base"
                        style={{ color: "#e8f4ff" }}
                      >
                        {selectedCert.title}
                      </DialogTitle>
                      <p
                        className="font-mono text-xs mt-0.5"
                        style={{ color: "#00d4ff" }}
                      >
                        {selectedCert.issuer}
                      </p>
                    </div>
                  </div>
                  <button
                    data-ocid="certs.dialog.close_button"
                    className="p-1.5 rounded transition-colors hover:bg-white/10"
                    style={{ color: "oklch(0.55 0.04 220)" }}
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
                  className="rounded-lg overflow-hidden"
                  style={{ border: "1px solid oklch(0.82 0.18 195 / 0.2)" }}
                >
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} - ${selectedCert.issuer}`}
                    className="w-full h-auto block"
                    style={{
                      maxHeight: "500px",
                      objectFit: "contain",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" style={{ color: "#00ff41" }} />
                  <span
                    className="font-mono text-xs"
                    style={{ color: "oklch(0.55 0.04 220)" }}
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
        className="py-24 relative"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 50%, oklch(0.82 0.18 195 / 0.04) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <SectionHeader tag="cat ./education.json" title="Education" />

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px timeline-line"
              style={{ left: "1.5rem" }}
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
                  className="absolute left-4 top-6 w-5 h-5 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    backgroundColor: "#00d4ff",
                    boxShadow: "0 0 10px #00d4ff80",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#080d1a]" />
                </div>
                <div
                  className="card-hover rounded-lg p-6"
                  style={{ backgroundColor: "#0f1830" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="font-mono text-base font-bold"
                        style={{ color: "#e8f4ff" }}
                      >
                        GL Bajaj Group of Institutions
                      </h3>
                      <p
                        className="font-mono text-sm mt-1"
                        style={{ color: "#00d4ff" }}
                      >
                        B.Tech CSE (Artificial Intelligence)
                      </p>
                      <p
                        className="font-mono text-xs mt-0.5"
                        style={{ color: "#00ff41" }}
                      >
                        Honours in Cybersecurity
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        className="font-mono text-xs"
                        style={{
                          backgroundColor: "oklch(0.82 0.18 195 / 0.15)",
                          color: "#00d4ff",
                          border: "1px solid oklch(0.82 0.18 195 / 0.3)",
                        }}
                      >
                        2023 – 2027
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Zap
                        className="w-3.5 h-3.5"
                        style={{ color: "#00ff41" }}
                      />
                      <span
                        className="font-mono text-sm"
                        style={{ color: "oklch(0.65 0.04 220)" }}
                      >
                        CGPA: <span style={{ color: "#e8f4ff" }}>7.9 / 10</span>
                      </span>
                    </div>
                  </div>
                </div>
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
                  className="absolute left-4 top-6 w-5 h-5 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    backgroundColor: "#00d4ff",
                    boxShadow: "0 0 10px #00d4ff80",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#080d1a]" />
                </div>
                <div
                  className="card-hover rounded-lg p-6"
                  style={{ backgroundColor: "#0f1830" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-mono text-base font-bold"
                        style={{ color: "#e8f4ff" }}
                      >
                        Aviraj World School (CBSE)
                      </h3>
                      <p
                        className="font-mono text-sm mt-1"
                        style={{ color: "#00d4ff" }}
                      >
                        Class XII
                      </p>
                    </div>
                    <Badge
                      className="font-mono text-xs"
                      style={{
                        backgroundColor: "oklch(0.78 0.22 145 / 0.15)",
                        color: "#00ff41",
                        border: "1px solid oklch(0.78 0.22 145 / 0.3)",
                      }}
                    >
                      86%
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* RDS Public School */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pl-14 relative"
              >
                <div
                  className="absolute left-4 top-6 w-5 h-5 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    backgroundColor: "#00ff41",
                    boxShadow: "0 0 10px #00ff4180",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#080d1a]" />
                </div>
                <div
                  className="card-hover rounded-lg p-6"
                  style={{ backgroundColor: "#0f1830" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-mono text-base font-bold"
                        style={{ color: "#e8f4ff" }}
                      >
                        RDS Public School (CBSE)
                      </h3>
                      <p
                        className="font-mono text-sm mt-1"
                        style={{ color: "#00d4ff" }}
                      >
                        Class X
                      </p>
                    </div>
                    <Badge
                      className="font-mono text-xs"
                      style={{
                        backgroundColor: "oklch(0.78 0.22 145 / 0.15)",
                        color: "#00ff41",
                        border: "1px solid oklch(0.78 0.22 145 / 0.3)",
                      }}
                    >
                      90%
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Achievements Section ────────────────────────────── */}
      <section
        id="achievements"
        data-ocid="achievements.section"
        className="py-24 relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            tag="cat ./achievements.log"
            title="Achievements & Activities"
          />

          <div className="space-y-3">
            {[
              {
                text: "Team Lead – Smart India Hackathon 2025 (Cleared Internal Round)",
                icon: <Trophy className="w-4 h-4" />,
                color: "#00d4ff",
              },
              {
                text: "Practicing cybersecurity labs on TryHackMe and Hack The Box",
                icon: <Terminal className="w-4 h-4" />,
                color: "#00ff41",
              },
              {
                text: "Member – National Service Scheme (NSS)",
                icon: <GraduationCap className="w-4 h-4" />,
                color: "#00d4ff",
              },
              {
                text: "Design Team – Rotaract Club",
                icon: <Zap className="w-4 h-4" />,
                color: "#00ff41",
              },
              {
                text: "Event Management Team – Shrinik Club",
                icon: <Award className="w-4 h-4" />,
                color: "#00d4ff",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="card-hover rounded-lg p-5 flex items-center gap-4"
                style={{ backgroundColor: "#0f1830" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  {item.icon}
                </div>
                <p
                  className="font-mono text-sm"
                  style={{ color: "oklch(0.75 0.04 220)" }}
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
        className="py-24 relative"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 100% 50%, oklch(0.82 0.18 195 / 0.04) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <SectionHeader
            tag="./connect --target dhruv"
            title="Get In Touch"
            subtitle="Have a project in mind or want to discuss cybersecurity? I'm open to opportunities."
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
                  className="font-mono text-lg font-bold mb-6"
                  style={{ color: "#e8f4ff" }}
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
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: "oklch(0.82 0.18 195 / 0.1)",
                          color: "#00d4ff",
                          border: "1px solid oklch(0.82 0.18 195 / 0.2)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className="font-mono text-xs"
                          style={{ color: "oklch(0.55 0.04 220)" }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-mono text-sm hover:text-[#00d4ff] transition-colors"
                            style={{ color: "oklch(0.75 0.04 220)" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className="font-mono text-sm"
                            style={{ color: "oklch(0.75 0.04 220)" }}
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
                  style={{ color: "oklch(0.55 0.04 220)" }}
                >
                  {"// Social Links"}
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/dhruvsharmads0506"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.link"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-mono text-sm"
                    style={{
                      border: "1px solid oklch(0.82 0.18 195 / 0.3)",
                      color: "oklch(0.75 0.04 220)",
                      backgroundColor: "#0f1830",
                    }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dhruvsharma0506"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.link"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-mono text-sm"
                    style={{
                      border: "1px solid oklch(0.82 0.18 195 / 0.3)",
                      color: "oklch(0.75 0.04 220)",
                      backgroundColor: "#0f1830",
                    }}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/dhruv_s_0506"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.link"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-mono text-sm"
                    style={{
                      border: "1px solid oklch(0.82 0.18 195 / 0.3)",
                      color: "oklch(0.75 0.04 220)",
                      backgroundColor: "#0f1830",
                    }}
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
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
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "#0f1830",
                  border: "1px solid oklch(0.82 0.18 195 / 0.15)",
                }}
              >
                <h3
                  className="font-mono text-base font-bold mb-6"
                  style={{ color: "#e8f4ff" }}
                >
                  <span style={{ color: "#00d4ff" }}>&gt;</span> Send a message
                </h3>

                {formSubmitted ? (
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 gap-4"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "oklch(0.78 0.22 145 / 0.2)",
                        border: "1px solid #00ff4160",
                      }}
                    >
                      <Lock className="w-6 h-6" style={{ color: "#00ff41" }} />
                    </div>
                    <p
                      className="font-mono text-sm text-center"
                      style={{ color: "#00ff41" }}
                    >
                      Message transmitted successfully.
                    </p>
                    <p
                      className="font-mono text-xs"
                      style={{ color: "oklch(0.55 0.04 220)" }}
                    >
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div>
                      <Label
                        className="font-mono text-xs mb-1.5 block"
                        style={{ color: "oklch(0.55 0.04 220)" }}
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
                          backgroundColor: "#080d1a",
                          border: "1px solid oklch(0.82 0.18 195 / 0.2)",
                          color: "#e8f4ff",
                        }}
                      />
                    </div>
                    <div>
                      <Label
                        className="font-mono text-xs mb-1.5 block"
                        style={{ color: "oklch(0.55 0.04 220)" }}
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
                          backgroundColor: "#080d1a",
                          border: "1px solid oklch(0.82 0.18 195 / 0.2)",
                          color: "#e8f4ff",
                        }}
                      />
                    </div>
                    <div>
                      <Label
                        className="font-mono text-xs mb-1.5 block"
                        style={{ color: "oklch(0.55 0.04 220)" }}
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
                          backgroundColor: "#080d1a",
                          border: "1px solid oklch(0.82 0.18 195 / 0.2)",
                          color: "#e8f4ff",
                        }}
                      />
                    </div>
                    {formError && (
                      <p
                        data-ocid="contact.error_state"
                        className="font-mono text-xs text-red-400"
                      >
                        {formError}
                      </p>
                    )}
                    <Button
                      data-ocid="contact.submit_button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-mono gap-2"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.82 0.18 195 / 0.25), oklch(0.78 0.22 145 / 0.25))",
                        border: "1px solid #00d4ff",
                        color: "#00d4ff",
                        boxShadow: "0 0 15px #00d4ff20",
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {isSubmitting ? "Transmitting..." : "Transmit Message"}
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
        className="py-8 relative"
        style={{
          backgroundColor: "#0a0e1a",
          borderTop: "1px solid oklch(0.82 0.18 195 / 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: "#00d4ff" }} />
              <span
                className="font-mono text-sm"
                style={{ color: "oklch(0.55 0.04 220)" }}
              >
                © {new Date().getFullYear()} Dhruv Sharma
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dhruvsharmads0506"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="transition-colors hover:text-[#00d4ff]"
                style={{ color: "oklch(0.55 0.04 220)" }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruvsharma0506"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="transition-colors hover:text-[#00d4ff]"
                style={{ color: "oklch(0.55 0.04 220)" }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dhruv_s_0506"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="transition-colors hover:text-[#00d4ff]"
                style={{ color: "oklch(0.55 0.04 220)" }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:dhruvsharmads0506@gmail.com"
                data-ocid="footer.link"
                className="transition-colors hover:text-[#00d4ff]"
                style={{ color: "oklch(0.55 0.04 220)" }}
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
