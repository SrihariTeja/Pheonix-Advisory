import React from "react"
import { Link } from "react-router-dom"

export default function ServicesSection() {
  const items = [
    {
      title: "Tax Planning",
      desc: "Strategic tax planning, efficient structuring, and year-round advisory for individuals and businesses.",
      category: "Tax",
      accent: "bg-navy-50 text-navy-700",
      icon: "01",
    },
    {
      title: "Audit & Assurance",
      desc: "Independent audit support and assurance solutions that strengthen stakeholder confidence and governance.",
      category: "Assurance",
      accent: "bg-navy-100 text-navy-800",
      icon: "02",
    },
    {
      title: "Financial Advisory",
      desc: "Growth-oriented guidance for valuations, funding readiness, and business performance improvement.",
      category: "Advisory",
      accent: "bg-copper-100 text-copper-500",
      icon: "03",
    },
    {
      title: "Compliance Support",
      desc: "GST, payroll, statutory filings, and corporate compliance services delivered with accuracy and timeliness.",
      category: "Compliance",
      accent: "bg-copper-100 text-copper-500",
      icon: "04",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-700">
          What we do
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Solutions shaped around your business goals.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`metallic-border ambient-glass group relative overflow-hidden rounded-3xl p-6 shadow-[0_20px_40px_rgba(16,43,70,0.07)] transition duration-300 hover:-translate-y-1 hover:bg-white/95 hover:shadow-[0_24px_60px_rgba(16,43,70,0.14)] motion-reduce:transform-none motion-reduce:transition-none ${
              index === 0 || index === 3 ? "md:col-span-1 xl:col-span-7" : "md:col-span-1 xl:col-span-5"
            }`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-navy-900 to-navy-500 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
            />
            <div className="flex items-start justify-between gap-4">
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold transition group-hover:bg-navy-900 group-hover:text-white ${item.accent}`}
              >
                {item.icon}
              </div>
              <span className="rounded-full border border-navy-200/80 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-600">
                {item.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-navy-900">
              {item.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-navy-700">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/services"
          className="inline-flex rounded-full border border-navy-700 px-5 py-2.5 text-sm font-semibold text-navy-800 transition hover:border-copper-500 hover:bg-copper-100 hover:text-navy-950"
        >
          View all services
        </Link>
      </div>
    </section>
  )
}
