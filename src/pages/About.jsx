import React from "react"

export default function About() {
  const stats = [
    { value: "8 years", label: "Advisory experience" },
    { value: "120+", label: "Clients supported" },
    { value: "24/7", label: "Client responsiveness" },
  ]

  const values = [
    "Integrity-led advisory",
    "Business-first thinking",
    "Clarity in every recommendation",
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-700">
            About us
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Financial guidance built on trust, rigor, and perspective.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Phoenix Advisory provides financial and business advisory services
            to help businesses and individuals make confident, well-informed
            decisions in a changing regulatory landscape.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-navy-900 p-8 text-white shadow-[0_24px_50px_rgba(9,29,52,0.18)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-200">
            Our values
          </p>
          <div className="mt-8 space-y-5">
            {values.map((value, index) => (
              <div
                key={value}
                className="flex items-start gap-4 rounded-2xl border border-navy-700 bg-navy-800/80 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-copper-300/20 text-sm font-bold text-copper-200">
                  {index + 1}
                </div>
                <p className="text-base font-medium text-slate-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-700">
            The firm
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Practical guidance, built around your business.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Phoenix Advisory brings financial insight and business context
            together, helping clients navigate decisions with clarity and
            confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Business-focused perspective",
              description:
                "Advice considers your goals, operations, and financial priorities.",
            },
            {
              title: "Clear, actionable guidance",
              description:
                "Complex financial matters are made easier to understand and act on.",
            },
            {
              title: "Support as you grow",
              description:
                "Services adapt to changing requirements and new opportunities.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
