import React from "react"

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold tracking-tight">
              Phoenix Advisory
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Financial consulting and business advisory — helping businesses
              and families make confident financial decisions.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Services
            </h5>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Tax & Compliance</li>
              <li>Audit & Assurance</li>
              <li>Financial Advisory</li>
              <li>GST & Corporate Support</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </h5>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>tejakammili9710@gmail.com</p>
              <a
                href="tel:+917981054165"
                className="block transition hover:text-white"
              >
                +91 79810 54165
              </a>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800 bg-navy-900 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Phoenix Advisory. All rights reserved.
      </div>
    </footer>
  )
}
