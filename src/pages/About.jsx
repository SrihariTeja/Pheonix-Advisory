import React from "react"
import MagneticCTA from "../components/MagneticCTA"

const principles = [
  {
    number: "01",
    title: "Business-first perspective",
    description:
      "Recommendations account for your goals, operations, and financial priorities.",
  },
  {
    number: "02",
    title: "Clarity in every decision",
    description:
      "Complex financial matters become clear, practical next steps you can act on.",
  },
  {
    number: "03",
    title: "Support as you grow",
    description:
      "Advice evolves as your business changes, helping you navigate new opportunities.",
  },
]

export default function About() {
  return (
    <main>
      <header className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mesh-glow opacity-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full bg-copper-400/20 blur-3xl motion-safe:animate-[float-glow_14s_ease-in-out_infinite]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="motion-safe:animate-[reveal-up_700ms_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-200">
              Phoenix Advisory <span className="px-2 text-white/40">/</span>
              About the firm
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Financial guidance built on trust,
              <span className="mt-2 block text-copper-300">
                rigor, and perspective.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Phoenix Advisory brings financial insight and business context
              together, helping businesses and individuals make confident,
              well-informed decisions in a changing regulatory landscape.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticCTA
                href="/contact#lead-form"
                className="min-h-12 bg-copper-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-950/30 hover:bg-copper-300 hover:shadow-[0_0_30px_rgba(226,160,110,0.35)]"
              >
                Get to know us
              </MagneticCTA>
              <a
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:border-copper-200/70 hover:bg-white/10"
              >
                Explore our services
              </a>
            </div>
          </div>

          <div className="metallic-border glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-2xl shadow-navy-950/30 sm:p-8 motion-safe:animate-[reveal-up_800ms_ease-out_120ms_both]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-copper-300/20 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-200">
                Our foundation
              </p>
              <h2 className="mt-3 text-2xl text-white sm:text-3xl">
                Good advice starts with understanding the whole picture.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                We listen first, bring the important details into focus, and
                provide guidance shaped around your real-world needs.
              </p>
              <div className="mt-7 space-y-3">
                {[
                  "Integrity-led advisory",
                  "Business-first thinking",
                  "Clear, actionable recommendations",
                ].map((value, index) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 transition duration-300 hover:translate-x-1 hover:border-copper-200/40 hover:bg-white/10 motion-reduce:transform-none motion-reduce:transition-none"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper-300/15 text-xs font-bold text-copper-200">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-navy-950/35">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {[
              { value: "8+", label: "Years of advisory experience" },
              { value: "36", label: "Clients supported" },
              { value: "24/7", label: "Client responsiveness" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-4 px-4 py-5 motion-safe:animate-[reveal-up_600ms_ease-out_both] sm:py-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-serif text-3xl text-copper-200 sm:text-4xl">
                  {stat.value}
                </span>
                <span className="max-w-36 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-slate-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mesh-glow opacity-25"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl motion-safe:animate-[reveal-up_600ms_ease-out_both]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-700">
              The firm
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Practical guidance, built around your business.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every business is different. Our work combines careful financial
              thinking with an understanding of the people and decisions behind
              the numbers.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <article
                key={item.number}
                className="metallic-border ambient-glass group relative overflow-hidden rounded-3xl p-6 shadow-[0_16px_38px_rgba(16,43,70,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(16,43,70,0.14)] motion-safe:animate-[reveal-up_600ms_ease-out_both] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-navy-800 via-copper-400 to-navy-500 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <span className="font-serif text-4xl text-copper-400/70 transition-colors duration-300 group-hover:text-copper-500">
                  {item.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
