import { useRef, useEffect } from 'react';
import { skills } from '../data/portfolioData';

const categoryConfig = {
  backend: {
    title: 'Backend & Frameworks',
    emoji: '⚙️',
    gradFrom: 'from-indigo-500',
    gradTo: 'to-violet-500',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/5',
    hoverBorder: 'hover:border-indigo-400/40',
    glow: 'shadow-indigo-500/10',
    badgeHover: 'hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-300',
  },
  frontend: {
    title: 'Frontend',
    emoji: '🎨',
    gradFrom: 'from-violet-500',
    gradTo: 'to-pink-500',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    hoverBorder: 'hover:border-violet-400/40',
    glow: 'shadow-violet-500/10',
    badgeHover: 'hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300',
  },
  database: {
    title: 'Database & Messaging',
    emoji: '🗄️',
    gradFrom: 'from-cyan-500',
    gradTo: 'to-blue-500',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    hoverBorder: 'hover:border-cyan-400/40',
    glow: 'shadow-cyan-500/10',
    badgeHover: 'hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300',
  },
  infrastructure: {
    title: 'Infrastructure & Tools',
    emoji: '🏗️',
    gradFrom: 'from-emerald-500',
    gradTo: 'to-teal-500',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    hoverBorder: 'hover:border-emerald-400/40',
    glow: 'shadow-emerald-500/10',
    badgeHover: 'hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300',
  },
};

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32 bg-space-950 overflow-hidden">
      <div className="bg-orb w-96 h-96 bg-indigo-600/10 top-1/2 -translate-y-1/2 -right-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="section-heading">Tech Stack & Skills</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([key, skillList], idx) => {
            const config = categoryConfig[key];
            const delayClass = ['reveal', 'reveal', 'reveal', 'reveal'][idx];
            return (
              <div
                key={key}
                className={`${delayClass} glass-card p-6 lg:p-8 ${config.border} ${config.hoverBorder} hover:shadow-2xl ${config.glow} transition-all duration-500 group`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradFrom} ${config.gradTo} flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {config.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{config.title}</h3>
                    <p className="text-slate-500 text-xs">{skillList.length} technologies</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill.name}
                      id={`skill-${skill.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
                      className={`skill-badge ${config.badgeHover}`}
                    >
                      <span className="text-base leading-none">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Banner */}
        <div className="mt-8 reveal">
          <div className="glass-card p-6 border-slate-700/30">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-2xl">💻</span>
                <h3 className="font-bold text-white">Programming Languages</h3>
              </div>
              <div className="w-px h-8 bg-slate-700/50 hidden sm:block shrink-0" />
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {[
                  { name: 'JavaScript', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
                  { name: 'TypeScript', color: 'text-blue-400 border-blue-400/30 bg-blue-400/5' },
                  { name: 'Java', color: 'text-orange-400 border-orange-400/30 bg-orange-400/5' },
                  { name: 'PHP', color: 'text-violet-400 border-violet-400/30 bg-violet-400/5' },
                  { name: 'Python', color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5' },
                ].map((lang) => (
                  <span
                    key={lang.name}
                    id={`lang-${lang.name.toLowerCase()}`}
                    className={`px-4 py-2 rounded-lg border text-sm font-bold font-mono ${lang.color} hover:scale-105 transition-transform duration-200`}
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
