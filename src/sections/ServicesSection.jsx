import React from "react"
import { Link } from "react-router-dom"

export default function ServicesSection() {
  const items = [
    {
      title: "Tax Planning",
      desc: "Strategic tax planning, efficient structuring, and year-round advisory for individuals and businesses.",
      accent: "bg-navy-50 text-navy-700",
      icon: "01",
    },
    {
      title: "Audit & Assurance",
      desc: "Independent audit support and assurance solutions that strengthen stakeholder confidence and governance.",
      accent: "bg-navy-100 text-navy-800",
      icon: "02",
    },
    {
      title: "Financial Advisory",
      desc: "Growth-oriented guidance for valuations, funding readiness, and business performance improvement.",
      accent: "bg-copper-100 text-copper-500",
      icon: "03",
    },
    {
      title: "Compliance Support",
      desc: "GST, payroll, statutory filings, and corporate compliance services delivered with accuracy and timeliness.",
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
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Solutions shaped around your business goals.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,40,68,0.12)]"
          >
            <div
              className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${item.accent}`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/services"
          className="inline-flex rounded-full border border-navy-700 px-5 py-2.5 text-sm font-semibold text-navy-800 transition hover:bg-navy-50"
        >
          View all services
        </Link>
      </div>
    </section>
  )
}
