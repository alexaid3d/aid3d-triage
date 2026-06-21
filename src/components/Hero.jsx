import { motion } from 'framer-motion'
import Logo from './Logo'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Radial wash */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-accent/[0.03] via-transparent to-transparent"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,212,238,0.04) 0%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div {...fadeUp(0.3)}>
          <Logo />
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          className="font-mono text-[9px] font-medium tracking-ultra uppercase text-accent/60 mt-10 mb-6"
        >
          DARPA Triage Challenge &middot; Phase 3
        </motion.p>

        <motion.h1
          {...fadeUp(0.65)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.12em] pl-[0.12em] text-white leading-none"
        >
          AID3D
        </motion.h1>

        <motion.p
          {...fadeUp(0.85)}
          className="font-mono text-[10px] sm:text-[11px] font-normal tracking-widest uppercase text-neutral-500 mt-5"
        >
          Autonomous Injury Detection &amp; Decision Delivery
        </motion.p>

        <motion.p
          {...fadeUp(1.1)}
          className="mt-14 max-w-xl text-base sm:text-lg font-light text-neutral-400 leading-relaxed tracking-wide"
        >
          <span className="text-white font-normal">Predicting life-saving interventions</span>{' '}
          before the window closes — for every casualty, every setting, every stage of care.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent animate-pulse" />
        <span className="font-mono text-[8px] tracking-[4px] uppercase text-neutral-700">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
