import React, { useEffect, useState } from "react"
import MagneticCTA from "../components/MagneticCTA"

const backgroundImages = [
  "/consulting_1.jpg",
  "/consulting_2.jpg",
  "/consulting_3.jpg",
  "/consulting_4.jpg",
  "/consulting_5.jpg",
]

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [activeBackground, setActiveBackground] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % backgroundImages.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [])

  const handlePointerMove = (event) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: (event.clientX - bounds.left - bounds.width / 2) / bounds.width,
      y: (event.clientY - bounds.top - bounds.height / 2) / bounds.height,
    })
  }

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      className="relative isolate overflow-hidden bg-navy-950"
    >
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-5 bg-cover bg-center saturate-[1.12] transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            activeBackground === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            transform: `translate3d(${pointer.x * -8}px, ${pointer.y * -8}px, 0) scale(1.06)`,
          }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="max-w-2xl text-white">
          <span className="inline-flex rounded-full border border-copper-300/40 bg-copper-300/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-copper-200 backdrop-blur-md sm:text-xs">
            Trusted advisors for growth
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl">
            Clarity in finance.
            <span className="mt-1 block text-copper-300 sm:mt-2">
              Confidence in growth.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
            We help founders, businesses, and families navigate tax, compliance,
            audits, and strategic decision-making with precision and integrity.
          </p>

          <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
            <MagneticCTA
              href="/contact#lead-form"
              className="min-h-12 bg-navy-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-navy-950/30 hover:bg-navy-500 hover:shadow-[0_0_28px_rgba(226,160,110,0.28)] sm:w-auto"
            >
              Book a consultation
            </MagneticCTA>
            <a
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-copper-200 hover:bg-white/10 sm:w-auto"
            >
              Explore services
            </a>
          </div>
          <div
            aria-label="Hero background images"
            className="mt-6 flex items-center gap-2"
          >
            {backgroundImages.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show background image ${index + 1}`}
                aria-pressed={activeBackground === index}
                onClick={() => setActiveBackground(index)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-white motion-reduce:transition-none ${
                  activeBackground === index
                    ? "w-8 bg-copper-200"
                    : "w-3 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
            <span className="sr-only" aria-live="polite">
              Background image {activeBackground + 1} of {backgroundImages.length}
            </span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="glass-panel metallic-border relative overflow-hidden rounded-[2rem] p-5 shadow-2xl shadow-slate-950/40">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-copper-300/15 blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-navy-950/45 p-6 text-white backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
                Advisory snapshot
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Tax efficiency
                  </div>
                  <div className="mt-2 text-3xl font-bold text-white">28%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Audit readiness
                  </div>
                  <div className="mt-2 text-3xl font-bold text-white">92%</div>
                </div>
                <div className="rounded-2xl border border-copper-200/20 bg-gradient-to-r from-copper-500/25 to-orange-400/20 p-4 text-white backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.15em] text-copper-200">
                    Annual review
                  </div>
                  <div className="mt-2 text-sm font-medium">
                    Business planning & compliance roadmap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
