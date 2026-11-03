import React from "react"
import assets from "../utils/assets"

export default function Hero({ hero = assets.hero }) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${hero}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-800/70" />

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="max-w-2xl text-white">
          <span className="inline-flex rounded-full border border-copper-300/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-copper-100">
            Trusted advisors for growth
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Clarity in finance.
            <span className="mt-2 block text-copper-300">
              Confidence in growth.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            We help founders, businesses, and families navigate tax, compliance,
            audits, and strategic decision-making with precision and integrity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact#lead-form"
              className="rounded-full bg-navy-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-950/30 transition hover:bg-navy-400"
            >
              Book a consultation
            </a>
            <a
              href="/services"
              className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
                Years
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">120+</div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
                Clients
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
                Retention
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-sm">
            <div className="rounded-[1.5rem] bg-navy-950/90 p-6 text-white ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
                Advisory snapshot
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl bg-navy-900 p-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Tax efficiency
                  </div>
                  <div className="mt-2 text-3xl font-bold text-white">28%</div>
                </div>
                <div className="rounded-2xl bg-navy-900 p-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Audit readiness
                  </div>
                  <div className="mt-2 text-3xl font-bold text-white">92%</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-navy-500 to-navy-700 p-4 text-white">
                  <div className="text-xs uppercase tracking-[0.15em] text-navy-100">
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
