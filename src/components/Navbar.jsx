import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative h-16 w-24 shrink-0 overflow-hidden"
          >
            <img
              src="/Pheonix_Image.png"
              alt=""
              className="absolute left-[-49px] top-[-52px] mix-blend-multiply"
              style={{ width: 200, height: 200, maxWidth: "none" }}
            />
          </span>
          <div className="min-w-0">
            <div className="font-serif text-lg leading-tight text-slate-900 sm:text-xl">
              Phoenix Advisory
            </div>
            <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
              Financial & Business Advisory
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-navy-700" : "hover:text-slate-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-navy-700" : "hover:text-slate-900"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-navy-700" : "hover:text-slate-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-navy-700" : "hover:text-slate-900"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+917981054165"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            +91 79810 54165
          </a>
          <a
            href="/contact#lead-form"
            className="inline-flex items-center rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-700"
          >
            Book Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="space-y-1 border-t border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 md:hidden"
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
                `block rounded-lg px-3 py-3 ${
                  isActive
                    ? "bg-navy-50 text-navy-800"
                    : "hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="tel:+917981054165"
            className="block rounded-lg px-3 py-3 hover:bg-slate-50"
          >
            Call +91 79810 54165
          </a>
          <a
            href="/contact#lead-form"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 block rounded-full bg-navy-900 px-5 py-3 text-center font-semibold text-white hover:bg-navy-700"
          >
            Book Consultation
          </a>
        </nav>
      ) : null}
    </header>
  )
}
