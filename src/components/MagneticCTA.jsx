import React, { useRef } from "react"

export default function MagneticCTA({
  href,
  children,
  className = "",
  onClick,
}) {
  const linkRef = useRef(null)

  const handlePointerMove = (event) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left - bounds.width / 2) / bounds.width) * 8
    const y = ((event.clientY - bounds.top - bounds.height / 2) / bounds.height) * 6
    event.currentTarget.style.translate = `${x}px ${y}px`
  }

  const resetPosition = () => {
    if (linkRef.current) linkRef.current.style.translate = ""
  }

  return (
    <a
      ref={linkRef}
      href={href}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      className={`group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full transition-[translate,transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-r from-copper-300 via-white/80 to-copper-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-full border border-white/30"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 z-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[450%] motion-reduce:transition-none"
      />
      <span className="relative z-10">{children}</span>
    </a>
  )
}
