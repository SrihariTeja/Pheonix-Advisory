import React, { useState } from "react"
import MagneticCTA from "../components/MagneticCTA"

const serviceGroups = [
  {
    title: "Audit & Assurance Services",
    items: [
      {
        title: "Statutory Audit",
        description:
          "Independent examination and certification of annual financial statements as mandated by company law.",
      },
      {
        title: "Tax Audit",
        description:
          "Compliance and reporting under statutory income tax provisions, including Section 44AB in India.",
      },
      {
        title: "Internal Audit",
        description:
          "Ongoing evaluation of operational workflows, governance, and internal accounting controls.",
      },
      {
        title: "Forensic Audit",
        description:
          "Detailed investigation of financial data to detect fraud, embezzlement, or other irregularities.",
      },
      {
        title: "Concurrent & Stock Audit",
        description:
          "On-site verification of physical inventory, borrower assets, and live transactions for banks and financial institutions.",
      },
    ],
  },
  {
    title: "Direct Taxation Services",
    items: [
      {
        title: "Income Tax Return (ITR) Filing",
        description:
          "Preparation and submission of annual tax returns for individuals, LLPs, firms, and companies.",
      },
      {
        title: "Advance Tax & Self-Assessment Tax",
        description:
          "Quarterly calculation of tax liabilities to support timely payment and compliance.",
      },
      {
        title: "TDS / TCS Compliance",
        description:
          "Calculation, monthly deposits, quarterly returns (Forms 24Q, 26Q, and 27Q), and Form 16/16A generation.",
      },
      {
        title: "Litigation & Representation",
        description:
          "Drafting replies to income tax notices, handling scrutiny assessments, and representation before appellate authorities such as CIT (Appeals) and ITAT.",
      },
      {
        title: "Capital Gains Advisory",
        description:
          "Capital gains tax calculations and planning for exemptions under eligible reinvestment schemes.",
      },
    ],
  },
  {
    title: "Indirect Taxation Services (GST / VAT)",
    items: [
      {
        title: "GST Registration & Modification",
        description:
          "Initial registration, amendment of core registration details, and cancellation filings.",
      },
      {
        title: "Periodic Return Filing",
        description:
          "Preparation and timely filing of monthly or quarterly returns, including GSTR-1 and GSTR-3B.",
      },
      {
        title: "Annual Compliance & Reconciliation",
        description:
          "Annual return filing (GSTR-9) and preparation of self-certified reconciliation statements (GSTR-9C).",
      },
      {
        title: "Input Tax Credit (ITC) Matching",
        description:
          "Regular reconciliation of purchase registers against supplier-filed data (GSTR-2B) to reduce credit leakage.",
      },
      {
        title: "Notice Handling & Departmental Audits",
        description:
          "Drafting replies to show-cause notices, support during summons, and representation in GST appeals.",
      },
    ],
  },
  {
    title: "International Taxation & FEMA Advisory",
    items: [
      {
        title: "Transfer Pricing",
        description:
          "Local files, transfer pricing documentation, benchmarking studies, and Form 3CEB certification.",
      },
      {
        title: "Foreign Remittance Certifications",
        description:
          "Form 15CB certification and Form 15CA filing for outbound payments.",
      },
      {
        title: "DTAA Advisory",
        description:
          "Tax treaty analysis to help optimize withholding taxes and address double taxation on cross-border income.",
      },
      {
        title: "FEMA Compliance",
        description:
          "Foreign investment reporting, including FC-GPR and FC-TRS filings, and annual FLA returns to the central bank.",
      },
      {
        title: "NRI Taxation",
        description:
          "Management of Indian tax liabilities, capital gains, and funds repatriation for Non-Resident Indians.",
      },
    ],
  },
  {
    title: "Accounting, Bookkeeping & Payroll",
    items: [
      {
        title: "Routine Bookkeeping",
        description:
          "Daily ledger maintenance, expense tracking, accounts payable and receivable, and bank reconciliations.",
      },
      {
        title: "Financial Statement Preparation",
        description:
          "Year-end Balance Sheets, Profit & Loss accounts, and Cash Flow statements prepared in line with applicable standards such as Ind AS and IFRS.",
      },
      {
        title: "Payroll Processing",
        description:
          "Monthly salary calculations, payslip generation, and statutory deductions such as PF, ESI, and Professional Tax.",
      },
      {
        title: "Statutory Labour Compliances",
        description:
          "Monthly returns, challan generation, and annual Provident Fund and ESI filings.",
      },
      {
        title: "Accounting System Setup",
        description:
          "Implementation and configuration of accounting platforms such as Tally, Zoho Books, QuickBooks, and SAP.",
      },
    ],
  },
  {
    title: "Corporate Law & Secretarial Compliance",
    items: [
      {
        title: "Business Incorporation",
        description:
          "Registration of Private and Public Limited Companies, LLPs, OPCs, and Section 8 entities.",
      },
      {
        title: "ROC Annual Filings",
        description:
          "Filing annual financial statements (AOC-4), annual returns (MGT-7), and director KYC forms (DIR-3 KYC).",
      },
      {
        title: "Corporate Secretarial Work",
        description:
          "Drafting board resolutions, notices, and meeting minutes, plus maintaining statutory registers.",
      },
      {
        title: "Corporate Event Approvals",
        description:
          "Required filings for director changes, authorized share capital increases, registered office changes, and charge creation or satisfaction.",
      },
      {
        title: "Entity Closure",
        description:
          "Strike-off procedures (Form STK-2) or formal voluntary winding up for defunct companies.",
      },
    ],
  },
  {
    title: "Corporate Finance & Transaction Advisory",
    items: [
      {
        title: "Business Valuation",
        description:
          "Independent valuation of shares, equity instruments, and intangible assets for fundraising, mergers, or statutory requirements.",
      },
      {
        title: "Financial & Tax Due Diligence",
        description:
          "Investigative analysis of financial records, tax risks, and liabilities for prospective buyers and investors.",
      },
      {
        title: "Project Financing & CMA Data",
        description:
          "Detailed Project Reports (DPR), Credit Monitoring Arrangement (CMA) data, and financial projections for loans and working capital limits.",
      },
      {
        title: "M&A Advisory",
        description:
          "Transaction structuring for mergers, acquisitions, business transfers (slump sales), and demergers.",
      },
      {
        title: "Investor Pitch & Model Preparation",
        description:
          "Financial models, unit economics analysis, and cap table design for early-stage and growth startups.",
      },
    ],
  },
  {
    title: "Business Advisory & Management Consulting",
    items: [
      {
        title: "Virtual / Fractional CFO Services",
        description:
          "Strategic oversight, budgeting, cash flow forecasting, and investor reporting for growing enterprises.",
      },
      {
        title: "Standard Operating Procedures (SOPs)",
        description:
          "Design and documentation of operational and accounting controls to help prevent process leakages.",
      },
      {
        title: "Cost Accounting & Optimization",
        description:
          "Margin analysis, inventory cost controls, overhead allocation, and product profitability assessments.",
      },
      {
        title: "Insolvency & Bankruptcy (IBC) Support",
        description:
          "Support for resolution professionals, claims verification, and forensic audits in insolvency proceedings.",
      },
      {
        title: "Succession & Estate Planning",
        description:
          "Family settlement structuring, will drafting, and private family trusts for wealth protection.",
      },
    ],
  },
]

export default function Services() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
  const selectedGroup = serviceGroups[selectedGroupIndex]

  return (
    <main>
      <header className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mesh-glow opacity-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-32 h-96 w-96 rounded-full bg-copper-400/20 blur-3xl motion-safe:animate-[float-glow_14s_ease-in-out_infinite]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-950/85 via-navy-900/75 to-navy-800/65" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div className="relative max-w-3xl motion-safe:animate-[reveal-up_700ms_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
              Phoenix Advisory <span className="px-2 text-white/40">/</span>
              Service directory
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Expertise for every
              <span className="block text-copper-300">turning point.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Clear advice across the financial decisions that shape your
              business, your people, and your future.
            </p>
          </div>

          <div className="metallic-border glass-panel relative flex items-center gap-5 rounded-3xl p-5 sm:p-6 md:mb-1">
            <span className="font-serif text-6xl leading-none text-copper-200 sm:text-7xl">
              08
            </span>
            <div className="border-l border-white/20 pl-5">
              <p className="text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-300">
                Expert disciplines
              </p>
              <p className="mt-1 text-base font-semibold text-white">
                40 specialist services
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mesh-glow opacity-25"
        />
        <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3 motion-safe:animate-[reveal-up_600ms_ease-out_both]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Explore our expertise
            </p>
            <h2 className="mt-2 text-2xl text-navy-900 sm:text-3xl">
              Built around what matters to you.
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Across finance, compliance, and advisory
          </p>
        </div>

        <div className="metallic-border ambient-glass grid gap-6 rounded-[2rem] p-4 shadow-[0_24px_70px_rgba(16,43,70,0.09)] sm:p-6 md:grid-cols-[minmax(15rem,0.78fr)_minmax(0,1.7fr)] md:gap-8 lg:p-8">
          <nav
            aria-label="Service categories"
            className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:flex md:flex-col"
          >
            {serviceGroups.map((group, index) => {
              const isSelected = selectedGroupIndex === index

              return (
                <button
                  key={group.title}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedGroupIndex(index)}
                  className={`group relative min-w-0 overflow-hidden rounded-xl border px-3 py-3 text-left transition duration-300 sm:px-4 md:rounded-r-xl md:rounded-l-lg md:border-l-[3px] md:border-y-0 md:border-r-0 md:py-4 ${
                    isSelected
                      ? "border-copper-300 bg-navy-900 text-white shadow-[0_10px_24px_rgba(16,43,70,0.20)] md:border-copper-400"
                      : "border-navy-200/80 bg-white/65 text-slate-700 hover:border-copper-300 hover:bg-white hover:text-navy-950 hover:shadow-[0_8px_20px_rgba(16,43,70,0.08)] md:border-transparent"
                  }`}
                >
                  {isSelected ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 mesh-glow opacity-70"
                    />
                  ) : null}
                  <span
                    className={`relative mb-1 block text-[11px] font-semibold tracking-[0.12em] ${
                      isSelected
                        ? "text-copper-200"
                        : "text-slate-500 group-hover:text-copper-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative block text-sm font-semibold leading-snug">
                    {group.title}
                  </span>
                </button>
              )
            })}
          </nav>

          <section
            key={selectedGroupIndex}
            aria-live="polite"
            aria-labelledby={`service-group-${selectedGroupIndex + 1}`}
            className="min-w-0 motion-safe:animate-[reveal-up_450ms_ease-out_both]"
          >
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-navy-200/70 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-500">
                  Discipline {String(selectedGroupIndex + 1).padStart(2, "0")}
                </p>
                <h2
                  id={`service-group-${selectedGroupIndex + 1}`}
                  className="mt-2 text-2xl text-navy-900 sm:text-3xl"
                >
                  {selectedGroup.title}
                </h2>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                {String(selectedGroup.items.length).padStart(2, "0")} services
              </span>
            </div>

            <ul className="grid gap-4 pt-5 sm:grid-cols-2">
              {selectedGroup.items.map((item, index) => (
                <li
                  key={item.title}
                  className="metallic-border ambient-glass group relative overflow-hidden rounded-2xl p-5 shadow-[0_10px_28px_rgba(16,43,70,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(16,43,70,0.13)] motion-safe:animate-[reveal-up_500ms_ease-out_both] motion-reduce:transform-none motion-reduce:transition-none"
                  style={{ animationDelay: `${index * 65}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-navy-800 via-copper-400 to-navy-500 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-navy-200/70 bg-white/80 text-[11px] font-bold text-navy-700 transition duration-300 group-hover:scale-105 group-hover:border-copper-300 group-hover:bg-navy-900 group-hover:text-copper-200 motion-reduce:transform-none motion-reduce:transition-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[15px] font-bold leading-snug text-navy-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-navy-800 bg-navy-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mesh-glow opacity-80"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-12">
          <div className="motion-safe:animate-[reveal-up_600ms_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
              A good place to start
            </p>
            <h2 className="mt-2 text-2xl text-white sm:text-3xl">
              Let’s make your next move a confident one.
            </h2>
          </div>
          <MagneticCTA
            href="/contact#lead-form"
            className="min-h-12 bg-copper-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-950/30 hover:bg-copper-300 hover:shadow-[0_0_30px_rgba(226,160,110,0.35)]"
          >
            Talk to an advisor{" "}
            <span aria-hidden="true" className="ml-3">
              &#8594;
            </span>
          </MagneticCTA>
        </div>
      </section>
    </main>
  )
}
