import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Showcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-lg overflow-hidden border border-white/[0.04] bg-surface-50"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="p-10 sm:p-14">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wide mb-6">
            From Competition to Combat and Clinic
          </h2>

          <div className="space-y-4 max-w-2xl">
            <p className="text-[13px] font-light leading-8 text-neutral-400">
              AID3D is a{' '}
              <span className="text-white font-normal">
                self-funded, purpose-built system
              </span>{' '}
              for one mission: predicting which life-saving interventions a trauma
              patient will need before the critical window closes. We leverage
              advanced AI and machine learning to{' '}
              <span className="text-white font-normal">
                extract deep insights from data trauma teams already capture
              </span>{' '}
              — no special sensors, no new workflows.
            </p>
            <p className="text-[13px] font-light leading-8 text-neutral-400">
              Our system ingests existing clinical data natively and delivers
              results in real time, aligned to the cadences clinicians already
              follow. Built from the ground up to{' '}
              <span className="text-white font-normal">
                complement — not replace
              </span>{' '}
              — existing TCCC and trauma bay protocols.
            </p>
          </div>
        </div>

        {/* Video placeholder — cinematic ambient section */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-black to-surface-50" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 30% 50%, rgba(0,212,238,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,212,238,0.04) 0%, transparent 40%)',
            }}
          />

          {/* EKG line animation */}
          <svg
            className="absolute bottom-1/3 left-0 w-full opacity-20"
            height="60"
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,30 60,30 100,30 130,10 150,50 170,5 200,55 230,25 260,35 300,30 800,30"
              stroke="#00d4ee"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="800"
              strokeDashoffset="800"
              style={{
                animation: 'ekgDash 4s cubic-bezier(0.4,0,0.2,1) infinite',
              }}
            />
          </svg>

          {/* "Drop video here" indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-lg px-6 py-3">
              <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-500">
                Visual media slot
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
