import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-200/80 bg-white/95 text-navy-900 shadow-[0_8px_30px_rgba(26,40,55,0.10)] backdrop-blur-xl">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-navy-900 via-copper-400 to-navy-500"
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            className="relative h-16 w-[4.5rem] shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_4px_14px_rgba(11,25,44,0.10)] sm:h-[4.5rem]"
          >
            <img
              src="/Pheonix_Image.png"
              alt=""
              className="absolute left-[-34px] top-[-39px] max-w-none transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              style={{ width: 140, height: 140, maxWidth: "none" }}
            />
          </span>
          <div className="min-w-0">
            <div className="truncate font-serif text-lg leading-tight text-navy-900 sm:text-2xl">
              Phoenix Advisory
            </div>
            <div className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.17em] text-navy-500 sm:block sm:text-[10px]">
              Financial & Business Advisory
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-navy-700 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-2 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-gradient-to-r after:from-navy-900 after:to-copper-400 after:transition-transform after:duration-300 motion-reduce:after:transition-none ${
                isActive
                  ? "text-navy-900 after:scale-x-100"
                  : "text-navy-700 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `relative py-2 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-gradient-to-r after:from-navy-900 after:to-copper-400 after:transition-transform after:duration-300 motion-reduce:after:transition-none ${
                isActive
                  ? "text-navy-900 after:scale-x-100"
                  : "text-navy-700 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative py-2 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-gradient-to-r after:from-navy-900 after:to-copper-400 after:transition-transform after:duration-300 motion-reduce:after:transition-none ${
                isActive
                  ? "text-navy-900 after:scale-x-100"
                  : "text-navy-700 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative py-2 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-gradient-to-r after:from-navy-900 after:to-copper-400 after:transition-transform after:duration-300 motion-reduce:after:transition-none ${
                isActive
                  ? "text-navy-900 after:scale-x-100"
                  : "text-navy-700 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+917981054165"
            className="text-sm font-semibold text-navy-700 transition hover:text-copper-500"
          >
            +91 79810 54165
          </a>
          <a
            href="/contact#lead-form"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(26,40,55,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-[0_10px_24px_rgba(26,40,55,0.28)] motion-reduce:transform-none"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[450%] motion-reduce:transition-none"
            />
            <span className="relative">Book Consultation</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-navy-50 text-navy-900 shadow-sm transition hover:border-copper-300 hover:bg-copper-100 md:hidden"
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-3 top-[calc(100%+0.5rem)] space-y-1 rounded-2xl border border-navy-100 bg-white p-3 text-sm font-medium text-navy-800 shadow-[0_24px_70px_rgba(9,24,39,0.18)] md:hidden"
        >
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-copper-100 text-navy-900"
                    : "hover:bg-navy-50 hover:text-copper-500"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="tel:+917981054165"
            className="block rounded-xl px-4 py-3 text-navy-700 transition hover:bg-navy-50 hover:text-copper-500"
          >
            Call +91 79810 54165
          </a>
          <a
            href="/contact#lead-form"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 block rounded-xl bg-navy-900 px-5 py-3.5 text-center font-semibold text-white shadow-lg shadow-navy-950/15 transition hover:bg-copper-400"
          >
            Book Consultation
          </a>
        </nav>
      ) : null}
    </header>
  )
}
