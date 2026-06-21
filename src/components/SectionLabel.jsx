export default function SectionLabel({ children }) {
  return (
    <div className="gsap-reveal flex items-center gap-3 mb-12">
      <div className="w-6 h-px bg-neutral-700" />
      <span className="font-mono text-[9px] font-medium tracking-ultra uppercase text-neutral-500">
        {children}
      </span>
    </div>
  )
}
