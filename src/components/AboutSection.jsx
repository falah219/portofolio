import { useRef, useEffect } from 'react';
import { FiUser, FiCode, FiServer, FiAward } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

const stats = [
  { value: '2+', label: 'Years Experience', icon: FiAward },
  { value: '10+', label: 'Tech Stacks', icon: FiCode },
  { value: '5+', label: 'Projects Shipped', icon: FiServer },
  { value: '3.81', label: 'GPA / 4.00', icon: FiUser },
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 bg-space-900 overflow-hidden">
      {/* Background accents */}
      <div className="bg-orb w-80 h-80 bg-violet-600/10 top-0 right-0" />
      <div className="bg-orb w-64 h-64 bg-cyan-500/8 bottom-0 left-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* ── Profile Image ── */}
          <div className="w-full md:w-2/5 flex justify-center reveal-left">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              {/* Image */}
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <img
                  src="/profile.jpg"
                  alt="Falah Yudhistira Hanan - Software Engineer"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl
                             hover:scale-105 transition-transform duration-500
                             border border-white/10"
                />
                {/* Overlay badge */}
                <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Text Content ── */}
          <div className="w-full md:w-3/5 flex flex-col gap-8 reveal-right">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Passionate about{' '}
                <span className="gradient-text">building things</span> that scale
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {personal.summary}
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-3">
              {[
                { label: 'Current Role', value: 'Junior Software Developer @ PT. PLN Icon Plus' },
                { label: 'Focus', value: 'Backend Architecture, Data Streaming, Microservices' },
                { label: 'Location', value: 'Indonesia 🇮🇩' },
                { label: 'Education', value: 'S1 Informatika — UMS (GPA 3.81/4.00)' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-indigo-400 font-semibold text-sm font-mono w-28 shrink-0">{item.label}</span>
                  <span className="text-slate-300 text-sm sm:text-base">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="glass-card p-4 text-center hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-black gradient-text">{value}</p>
                  <p className="text-slate-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
