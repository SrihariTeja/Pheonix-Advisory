import React from "react"

const steps = [
  {
    title: "Understand your goals",
    description:
      "We start with a focused conversation about your business, priorities, and immediate needs.",
  },
  {
    title: "Review the details",
    description:
      "We assess the relevant financial information, compliance requirements, and opportunities.",
  },
  {
    title: "Agree on a clear plan",
    description:
      "You receive practical recommendations, clear next steps, and a shared view of timing.",
  },
  {
    title: "Support as you move forward",
    description:
      "We stay available to help implement the plan and adapt it as your needs change.",
  },
]

export default function ProcessTimeline() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f1f5f9] px-4 py-20 text-navy-900 sm:px-6 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mesh-glow opacity-45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-copper-300/20 blur-3xl motion-safe:animate-[float-glow_14s_ease-in-out_infinite]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-copper-300/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800 shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-500 motion-safe:animate-pulse" />
              How we work
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              A clear process, from first conversation to{" "}
              <span className="text-navy-700">ongoing support.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Thoughtful advice is a partnership. Here is how we turn your
              priorities into a practical plan and stay alongside you.
            </p>
          </div>
          <div className="hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/75 px-5 py-4 text-sm text-navy-700 shadow-[0_12px_30px_rgba(16,43,70,0.08)] backdrop-blur-md lg:flex">
            <span className="font-serif text-3xl text-copper-500">01</span>
            <span className="max-w-28 text-xs font-semibold uppercase leading-5 tracking-[0.12em]">
              One step at a time
            </span>
          </div>
        </div>

        <ol className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[2.4rem] top-12 hidden h-px bg-gradient-to-r from-navy-400/50 via-copper-400/70 to-navy-400/50 xl:block xl:w-[calc(100%-4.8rem)]"
          />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="metallic-border group relative overflow-hidden rounded-3xl bg-white/85 p-6 shadow-[0_16px_38px_rgba(16,43,70,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-copper-300 hover:bg-copper-100/80 hover:shadow-[0_24px_50px_rgba(16,43,70,0.15)] motion-safe:animate-[reveal-up_650ms_ease-out_both] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-copper-300/0 blur-2xl transition-colors duration-500 group-hover:bg-copper-300/35 motion-reduce:transition-none"
              />
              <div className="relative mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-navy-200 bg-gradient-to-br from-navy-900 to-navy-700 text-sm font-bold text-white shadow-[0_0_0_5px_rgba(16,43,70,0.06)] transition duration-300 group-hover:scale-105 group-hover:border-copper-400 group-hover:from-copper-400 group-hover:to-copper-500 group-hover:shadow-[0_0_28px_rgba(197,125,86,0.28)] motion-reduce:transform-none motion-reduce:transition-none">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500/70 transition-colors group-hover:text-copper-600">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="relative text-lg font-semibold text-navy-900 transition-colors duration-300 group-hover:text-navy-950">
                {step.title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-navy-800">
                {step.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-navy-800 via-copper-400 to-transparent transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
              />
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-[0_12px_30px_rgba(16,43,70,0.07)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-6 text-slate-600">
            The first step is simply a conversation about what matters to you.
          </p>
          <a
            href="/contact#lead-form"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-copper-600"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            >
              &#8594;
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
