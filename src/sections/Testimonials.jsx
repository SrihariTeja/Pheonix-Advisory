import React from "react"
import assets from "../utils/assets"

export default function Testimonials({ teamImgs = assets.team }) {
  const imgs = teamImgs?.length ? teamImgs : assets.team

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-700">
          Client stories
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Trusted by businesses that expect precision.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            quote:
              "Phoenix Advisory helped us navigate a complex tax audit with clarity, professionalism, and decisive action.",
            name: "A. Business",
            role: "CEO, Retail Group",
          },
          {
            quote:
              "Their deep domain knowledge and hands-on guidance gave our leadership confidence in every financial decision.",
            name: "B. Manufacturing",
            role: "CFO, Industrial Holdings",
          },
          {
            quote:
              "Reliable advisors during fundraising and valuation planning, with a standard of service that matches the best in the market.",
            name: "C. Startup",
            role: "Founder, SaaS Venture",
          },
        ].map((item, index) => (
          <div
            key={item.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
          >
            <div className="mb-5 text-copper-500">★★★★★</div>
            <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
              <img
                src={imgs[index]}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-navy-100"
              />
              <div>
                <div className="font-semibold text-slate-900">{item.name}</div>
                <div className="text-sm text-slate-500">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
