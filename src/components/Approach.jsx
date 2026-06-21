import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const steps = [
  {
    num: '01',
    title: 'Hidden Feature Discovery',
    desc: 'Our AI surfaces patterns buried in complex, multi-dimensional medical data — clinically meaningful features that conventional analysis methods cannot detect, turning routine clinical data into predictive intelligence.',
  },
  {
    num: '02',
    title: 'Complete LSI Coverage',
    desc: 'Predictions span all five life-saving intervention categories: Invasive Airway, Blood Products, Chest Decompression, Surgical, and Vasopressors. Continuous processing aligned to clinical monitoring cadences.',
  },
  {
    num: '03',
    title: 'Medic-Ready Output',
    desc: 'Results map directly to the interventions medics are trained and equipped to perform — actionable decision support, not abstract scores. Designed to complement existing clinical protocols and workflows.',
  },
]

export default function Approach() {
  return (
    <section className="py-24">
      <SectionLabel>Our Approach</SectionLabel>

      <div className="gsap-reveal grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-lg overflow-hidden border border-white/[0.04]">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            className="accent-line bg-black p-8 sm:p-10 flex flex-col gap-4 transition-colors duration-500 cursor-default"
          >
            <span className="font-mono text-[9px] tracking-[3px] text-neutral-600 hover:text-accent transition-colors">
              {step.num}
            </span>

            <h3 className="text-[13px] font-semibold tracking-[1.5px] uppercase text-neutral-300 hover:text-white transition-colors duration-300">
              {step.title}
            </h3>

            <p className="text-[11.5px] font-light leading-7 text-neutral-500">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
