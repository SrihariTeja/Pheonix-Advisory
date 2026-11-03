import React, { useEffect, useRef, useState } from "react"

const proofPoints = [
  { value: 8, suffix: "+", label: "Years of experience" },
  { value: 36, suffix: "", label: "Clients supported" },
  { value: 99, suffix: "%", label: "Client retention" },
]

export default function ProofRibbon() {
  const ribbonRef = useRef(null)
  const [values, setValues] = useState(proofPoints.map(() => 0))

  useEffect(() => {
    const ribbon = ribbonRef.current
    if (!ribbon) return undefined

    let frameId
    let started = false

    const animateValues = () => {
      if (started) return
      started = true

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValues(proofPoints.map(({ value }) => value))
        return
      }

      const startTime = performance.now()
      const duration = 2800
      const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setValues(
          proofPoints.map(({ value }) => Math.round(value * easedProgress)),
        )
        if (progress < 1) frameId = requestAnimationFrame(update)
      }

      frameId = requestAnimationFrame(update)
    }

    if (!("IntersectionObserver" in window)) {
      animateValues()
      return () => cancelAnimationFrame(frameId)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateValues()
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(ribbon)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section
      ref={ribbonRef}
      aria-label="Phoenix Advisory at a glance"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mesh-glow opacity-60"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/15 px-5 py-3 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {proofPoints.map((point, index) => (
          <div
            key={point.label}
            className="flex items-center justify-center gap-4 px-4 py-5 sm:py-4"
          >
            <span className="font-serif text-3xl font-semibold tabular-nums text-copper-200 sm:text-4xl">
              {values[index]}
              {point.suffix}
            </span>
            <span className="max-w-28 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-200 sm:text-sm">
              {point.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
