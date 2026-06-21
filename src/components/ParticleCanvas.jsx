import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    let w, h, pts = [], raf, mx = -999, my = -999

    function resize() {
      w = c.width = window.innerWidth
      h = c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const N = Math.min(50, Math.floor(window.innerWidth / 28))
    const DIST = 160

    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.2 + 0.3,
        o: Math.random() * 0.1 + 0.03,
      })
    }

    const onMouse = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMouse)

    function loop() {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const dx = p.x - mx, dy = p.y - my
        const dd = Math.sqrt(dx * dx + dy * dy)
        if (dd < 120) { p.x += dx * 0.005; p.y += dy * 0.005 }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,238,${p.o})`
        ctx.fill()

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0,212,238,${0.03 * (1 - d / DIST)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else loop()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouse)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ willChange: 'transform' }}
    />
  )
}
