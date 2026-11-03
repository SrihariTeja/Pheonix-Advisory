import React from "react"
import LeadForm from "../components/LeadForm"

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-700">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Speak with an advisor who understands your business.
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-navy-900 p-8 text-white shadow-[0_25px_50px_rgba(9,29,52,0.18)]">
          <h2 className="text-2xl font-semibold text-white">Reach us</h2>
          <div className="mt-8 space-y-6 text-sm text-slate-300">
            <div>
              <div className="text-slate-400">Email</div>
              <div className="mt-1 text-base text-white">
                tejakammili9710@gmail.com
              </div>
            </div>
            <div>
              <div className="text-slate-400">Phone</div>
              <a
                href="tel:+917981054165"
                className="mt-1 block text-base text-white"
              >
                +91 79810 54165
              </a>
            </div>
            <div>
              <div className="text-slate-400">Office</div>
              <div className="mt-1 text-base text-white">Hyderabad, India</div>
            </div>
          </div>
        </div>

        <LeadForm
          title="Request a consultation"
          description="Share your details and we will reach out to discuss your tax, audit, compliance, or advisory requirements."
        />
      </div>
    </div>
  )
}
