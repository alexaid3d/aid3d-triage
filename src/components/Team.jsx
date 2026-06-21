import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const members = [
  {
    name: 'Alexander N. Dimopoulos',
    role: 'Co-Founder',
    creds: 'NIST · NASA JPL · AFRL · DARPA SubT Challenge',
  },
  {
    name: 'Michidmaa Maral',
    role: 'Co-Founder',
    creds: 'ML Research · Physiological Pattern Recognition · Google SoC',
  },
]

export default function Team() {
  return (
    <section className="py-24">
      <SectionLabel>Team</SectionLabel>

      <div className="gsap-reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] rounded-lg overflow-hidden border border-white/[0.04]">
        {members.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            className="accent-line bg-black p-10 sm:p-12 flex flex-col gap-4 transition-colors duration-500 cursor-default"
          >
            <span className="font-mono text-[9px] tracking-[3px] uppercase text-neutral-600">
              {m.role}
            </span>

            <h2 className="text-lg sm:text-xl font-semibold tracking-wide text-white hover:text-accent transition-colors duration-300">
              {m.name}
            </h2>

            <p className="text-[12px] font-light leading-7 text-neutral-500">
              {m.creds}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
