import { useRef, useEffect, useState } from 'react';
import { FiBriefcase, FiMapPin, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';

const colorMap = {
  indigo: {
    dot: 'bg-indigo-500 shadow-indigo-500/50',
    line: 'border-indigo-500/30',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    icon: 'bg-indigo-500/10 text-indigo-400',
    tagBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    bullet: 'text-indigo-400',
  },
  violet: {
    dot: 'bg-violet-500 shadow-violet-500/50',
    line: 'border-violet-500/30',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    icon: 'bg-violet-500/10 text-violet-400',
    tagBg: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    bullet: 'text-violet-400',
  },
};

function ExperienceCard({ exp, isLast }) {
  const [expanded, setExpanded] = useState(true);
  const colors = colorMap[exp.color] || colorMap.indigo;

  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline Line */}
      {!isLast && (
        <div className={`absolute left-[7px] md:left-[11px] top-6 bottom-0 border-l-2 border-dashed ${colors.line}`} />
      )}
      {/* Timeline Dot */}
      <div className={`absolute left-0 md:left-1 top-6 w-4 h-4 rounded-full ${colors.dot} shadow-lg border-2 border-space-950`} />

      {/* Card */}
      <div className="glass-card p-6 md:p-8 mb-8 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 group">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colors.icon} border border-current/20`}>
              <FiBriefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">{exp.role}</h3>
              <p className="text-indigo-400 font-semibold text-base">{exp.company}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start sm:items-end shrink-0">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
              <FiCalendar className="w-3 h-3" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1 text-slate-500 text-xs">
              <FiMapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          id={`exp-toggle-${exp.id}`}
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors mb-4 font-medium"
        >
          {expanded ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
          {expanded ? 'Hide details' : 'Show details'}
        </button>

        {/* Bullet Points */}
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="space-y-3 mb-6">
            {exp.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <span className={`mt-1.5 w-2 h-2 rounded-full ${colors.dot} shrink-0`} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${colors.tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="relative py-24 md:py-32 bg-space-900 overflow-hidden">
      <div className="bg-orb w-80 h-80 bg-indigo-600/10 bottom-0 left-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">My professional journey</p>
          <h2 className="section-heading">Work Experience</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="reveal">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} isLast={idx === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
