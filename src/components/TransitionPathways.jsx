import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const pathways = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4 L30 10 L30 18 C30 26 24 32 18 34 C12 32 6 26 6 18 L6 10 Z" stroke="#666" strokeWidth="0.8" fill="none" />
        <line x1="18" y1="14" x2="18" y2="24" stroke="#00d4ee" strokeWidth="1" opacity="0.6" />
        <line x1="13" y1="19" x2="23" y2="19" stroke="#00d4ee" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
    title: 'Military Trauma',
    desc: 'Casualty collection point triage support through forward surgical teams — deployable across Role 1 through Role 3 military medical care.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="12" cy="10" r="4" stroke="#666" strokeWidth="0.8" fill="none" />
        <circle cx="24" cy="10" r="4" stroke="#666" strokeWidth="0.8" fill="none" />
        <path d="M4 28 C4 22 8 18 12 18 C14 18 16 19 17 20" stroke="#666" strokeWidth="0.8" fill="none" />
        <path d="M32 28 C32 22 28 18 24 18 C22 18 20 19 19 20" stroke="#666" strokeWidth="0.8" fill="none" />
        <line x1="18" y1="22" x2="18" y2="30" stroke="#00d4ee" strokeWidth="0.8" opacity="0.5" />
        <line x1="14" y1="26" x2="22" y2="26" stroke="#00d4ee" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
    title: 'Mass Casualty',
    desc: 'Civilian MCI, disaster medicine, and emergency department patient surge — scalable decision support when resources are stretched thin.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="6" width="24" height="24" rx="3" stroke="#666" strokeWidth="0.8" fill="none" />
        <circle cx="18" cy="18" r="6" stroke="#666" strokeWidth="0.8" fill="none" />
        <circle cx="18" cy="18" r="2" stroke="#00d4ee" strokeWidth="0.8" fill="none" opacity="0.5" />
        <line x1="18" y1="6" x2="18" y2="12" stroke="#666" strokeWidth="0.6" />
        <line x1="18" y1="24" x2="18" y2="30" stroke="#666" strokeWidth="0.6" />
        <line x1="6" y1="18" x2="12" y2="18" stroke="#666" strokeWidth="0.6" />
        <line x1="24" y1="18" x2="30" y2="18" stroke="#666" strokeWidth="0.6" />
      </svg>
    ),
    title: 'DoD Integration',
    desc: 'Designed to complement existing TCCC and trauma bay protocols — integrating into current military and civilian medical workflows rather than replacing them.',
  },
]

export default function TransitionPathways() {
  return (
    <section className="py-24">
      <SectionLabel>Transition Pathways</SectionLabel>

      <div className="gsap-reveal grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-white/[0.04]">
        {pathways.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            className={`group py-12 pr-7 cursor-default ${
              i > 0 ? 'md:pl-7 md:border-l border-t md:border-t-0 border-white/[0.04]' : ''
            }`}
          >
            <div className="opacity-30 group-hover:opacity-80 transition-opacity duration-400 mb-6">
              {p.icon}
            </div>

            <h3 className="text-[12px] font-semibold tracking-[2.5px] uppercase text-neutral-400 group-hover:text-white transition-colors duration-300 mb-2.5">
              {p.title}
            </h3>

            <p className="text-[11.5px] font-light leading-7 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
