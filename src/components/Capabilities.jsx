import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const cards = [
  {
    label: 'Deployment',
    title: 'Field Ready',
    desc: 'Self-contained operation at point of injury. Zero configuration — powers on and predicts immediately. Runs on standard hardware including field laptops and ruggedized tablets. No special sensors required.',
  },
  {
    label: 'Intelligence',
    title: 'AI-Driven Discovery',
    desc: 'Advanced machine learning that unlocks hidden, clinically meaningful features within complex medical data — using the information trauma teams already capture. Purpose-built to find the patterns that save lives.',
  },
]

export default function Capabilities() {
  return (
    <section className="py-24">
      <SectionLabel>Capabilities</SectionLabel>

      <div className="gsap-reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] rounded-lg overflow-hidden border border-white/[0.04]">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            className="accent-line bg-black p-10 sm:p-12 flex flex-col gap-5 transition-colors duration-500 cursor-default"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-px bg-neutral-700 group-hover:bg-accent transition-colors" />
              <span className="font-mono text-[9px] tracking-[3px] uppercase text-neutral-600">
                {card.label}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-white hover:text-accent transition-colors duration-300">
              {card.title}
            </h2>

            <p className="text-[13px] font-light leading-8 text-neutral-500 max-w-xs">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
