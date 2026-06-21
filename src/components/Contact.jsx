export default function Contact() {
  return (
    <section className="gsap-reveal py-16 border-t border-white/[0.04] text-center">
      <span className="font-mono text-[8px] tracking-ultra uppercase text-neutral-600 block mb-5">
        Get in touch
      </span>
      <a
        href="mailto:alex@aid3d-triage.com"
        className="group relative inline-block font-mono text-[12px] tracking-[3px] uppercase text-neutral-400 hover:text-accent transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,212,238,0.2)]"
      >
        alex@aid3d-triage.com
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500 ease-out" />
      </a>
    </section>
  )
}
