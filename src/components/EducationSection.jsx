import { useRef, useEffect } from 'react';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import { education } from '../data/portfolioData';

const colorMap = {
  cyan: {
    dot: 'bg-cyan-500 shadow-cyan-500/50',
    line: 'border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    icon: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    bullet: 'bg-cyan-500',
  },
  indigo: {
    dot: 'bg-indigo-500 shadow-indigo-500/50',
    line: 'border-indigo-500/30',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    icon: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    bullet: 'bg-indigo-500',
  },
  violet: {
    dot: 'bg-violet-500 shadow-violet-500/50',
    line: 'border-violet-500/30',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    icon: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    bullet: 'bg-violet-500',
  },
  emerald: {
    dot: 'bg-emerald-500 shadow-emerald-500/50',
    line: 'border-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    bullet: 'bg-emerald-500',
  },
};

const typeLabel = {
  University: { label: 'University', style: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  Bootcamp: { label: 'Bootcamp', style: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' },
  Internship: { label: 'Internship', style: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
  Project: { label: 'Project', style: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
};

function EducationCard({ item, isLast }) {
  const colors = colorMap[item.color] || colorMap.indigo;
  const typeStyle = typeLabel[item.type] || typeLabel.Bootcamp;

  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline Line */}
      {!isLast && (
        <div className={`absolute left-[7px] md:left-[11px] top-6 bottom-0 border-l-2 border-dashed ${colors.line}`} />
      )}
      {/* Timeline Dot */}
      <div className={`absolute left-0 md:left-1 top-6 w-4 h-4 rounded-full ${colors.dot} shadow-lg border-2 border-space-950`} />

      {/* Card */}
      <div className="glass-card p-5 md:p-6 mb-6 hover:border-indigo-500/30 transition-all duration-500 group">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl shrink-0 ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
            {item.icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-bold text-white text-base md:text-lg leading-tight">{item.institution}</h3>
                <p className={`font-semibold text-sm mt-0.5 ${colors.icon.split(' ')[1]}`}>{item.degree}</p>
              </div>
              <div className="flex flex-wrap gap-2 items-center shrink-0">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${typeStyle.style}`}>
                  {typeStyle.label}
                </span>
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
                  <FiCalendar className="w-3 h-3" />
                  {item.period}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            {item.points.length > 0 && (
              <ul className="space-y-2 mb-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${colors.bullet} shrink-0`} />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-0.5 rounded text-xs font-mono font-semibold border ${colors.tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Split university from others
  const university = education.filter((e) => e.type === 'University');
  const others = education.filter((e) => e.type !== 'University');

  return (
    <section id="education" ref={sectionRef} className="relative py-24 md:py-32 bg-space-950 overflow-hidden">
      <div className="bg-orb w-80 h-80 bg-cyan-500/10 top-0 right-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Learning & Growth</p>
          <h2 className="section-heading">Education & Experience</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* University */}
        <div className="mb-4 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-lg">🎓</span>
            <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest">Formal Education</h3>
            <div className="flex-1 h-px bg-slate-800" />
          </div>
          {university.map((item, idx) => (
            <EducationCard key={item.id} item={item} isLast={idx === university.length - 1} />
          ))}
        </div>

        {/* Bootcamp & Internship */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6 mt-8">
            <span className="text-lg">🚀</span>
            <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest">Bootcamp, Internship & Projects</h3>
            <div className="flex-1 h-px bg-slate-800" />
          </div>
          {others.map((item, idx) => (
            <EducationCard key={item.id} item={item} isLast={idx === others.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
