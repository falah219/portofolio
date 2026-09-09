import { FiMail, FiGithub, FiLinkedin, FiPhone, FiHeart } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

const contactLinks = [
  {
    id: 'contact-email',
    icon: FiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    gradient: 'from-indigo-500 to-violet-500',
    hoverGlow: 'hover:shadow-indigo-500/30',
    description: 'Drop me a message',
  },
  {
    id: 'contact-linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: `in/${personal.linkedinHandle}`,
    href: personal.linkedin,
    gradient: 'from-blue-500 to-cyan-500',
    hoverGlow: 'hover:shadow-blue-500/30',
    description: 'Connect professionally',
  },
  {
    id: 'contact-github',
    icon: FiGithub,
    label: 'GitHub',
    value: `@${personal.githubHandle}`,
    href: personal.github,
    gradient: 'from-slate-500 to-slate-400',
    hoverGlow: 'hover:shadow-slate-400/30',
    description: 'Check my code',
  },
  {
    id: 'contact-phone',
    icon: FiPhone,
    label: 'WhatsApp',
    value: personal.phone,
    href: `https://wa.me/${personal.phone.replace(/^0/, '62')}`,
    gradient: 'from-emerald-500 to-teal-500',
    hoverGlow: 'hover:shadow-emerald-500/30',
    description: 'Chat directly',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-space-900 overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* Background orbs */}
      <div className="bg-orb w-80 h-80 bg-indigo-600/10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4">Let's collaborate</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a great tech conversation.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.id}
                id={contact.id}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group glass-card p-6 flex flex-col gap-4 hover:border-indigo-500/40 hover:shadow-2xl ${contact.hoverGlow} hover:-translate-y-2 transition-all duration-400`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">{contact.description}</p>
                  <p className="font-bold text-white text-sm break-all group-hover:text-indigo-300 transition-colors duration-300">{contact.value}</p>
                </div>
                {/* Hover arrow */}
                <div className="flex items-center gap-1 text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{contact.label}</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <a
            id="footer-send-email"
            href={`mailto:${personal.email}`}
            className="btn-primary text-base px-10 py-4 flex items-center gap-3 text-lg font-bold shadow-2xl shadow-indigo-500/30"
          >
            <FiMail className="w-6 h-6" />
            Send Me an Email
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-mono">FY</span>
            </div>
            <span className="font-semibold text-slate-400">Falah Yudhistira Hanan</span>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1.5">
            Made with <FiHeart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> and lots of ☕ &middot; © {year}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-icon"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              id="footer-linkedin-icon"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              id="footer-mail-icon"
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
