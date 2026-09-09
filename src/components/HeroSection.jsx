import { useState, useEffect, useRef, useCallback } from 'react';
import { HiDownload } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import ThreeScene from './ThreeScene';
import { personal } from '../data/portfolioData';

const ROLES = [
  'Software Engineer',
  'Backend Developer',
  'Fullstack Developer',
  'Cloud & DevOps Enthusiast',
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="font-mono text-indigo-400">
      {displayed}
      <span className="animate-blink text-indigo-400">|</span>
    </span>
  );
}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-space-950"
    >
      {/* Background Gradient Orbs */}
      <div className="bg-orb w-96 h-96 bg-indigo-600/20 top-1/4 -left-32" />
      <div className="bg-orb w-80 h-80 bg-violet-600/15 bottom-1/4 right-0" />
      <div className="bg-orb w-64 h-64 bg-cyan-500/10 top-1/2 left-1/2" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-6 lg:gap-12">

          {/* ── Left: Text Content ── */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 animate-fade-in text-center md:text-left">
            {/* Status Badge */}
            <div className="flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Greeting */}
            <div>
              <p className="text-slate-400 text-lg mb-2 font-medium">👋 Hi there, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                <span className="gradient-text">Falah</span>{' '}
                <span className="text-white">Yudhistira</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1">
                Hanan
              </h2>
            </div>

            {/* Typewriter Role */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-300 min-h-[2rem]">
              <TypewriterText />
            </div>

            {/* Short tagline */}
            <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Building <span className="text-indigo-400 font-semibold">enterprise-grade</span> backend systems &amp; fullstack apps.
              From SCADA infrastructure to HRIS platforms — I turn complex requirements into{' '}
              <span className="text-cyan-400 font-semibold">elegant solutions</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                id="hero-download-cv"
                href="/Falah_Yudhistira_CV.pdf"
                download
                className="btn-primary flex items-center justify-center gap-2 text-base"
              >
                <HiDownload className="w-5 h-5" />
                Download CV
              </a>
              <button
                id="hero-contact-me"
                onClick={() => handleNavClick('#contact')}
                className="btn-outline flex items-center justify-center gap-2 text-base"
              >
                <FiMail className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Tech stack preview */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
              {['NestJS', 'SpringBoot', 'React', 'Kafka', 'K8s', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-800/80 text-slate-400 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Three.js Canvas ── */}
          <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] relative">
            {/* Glow behind canvas */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600/20 filter blur-3xl animate-pulse-glow" />
            </div>
            <ThreeScene mouseX={mousePos.x} mouseY={mousePos.y} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce hidden md:flex">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
