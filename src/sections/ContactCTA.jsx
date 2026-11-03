import React from "react"

export default function ContactCTA() {
  return (
    <div className="rounded-[2rem] bg-gradient-to-r from-navy-950 via-navy-800 to-navy-600 p-8 text-white shadow-[0_28px_60px_rgba(9,29,52,0.22)] sm:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper-200">
            Let’s plan ahead
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Your next strategic decision deserves expert guidance.
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-200">
            Protect your cash flow, improve decision-making, and build long-term
            resilience with Phoenix Advisory.
          </p>
        </div>
        <a
          href="/contact#lead-form"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-canvas"
        >
          Schedule a call
        </a>
      </div>
    </div>
  )
}
