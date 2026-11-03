import React, { useState } from "react"
import { Link } from "react-router-dom"

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
      <header className="relative overflow-hidden bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div className="max-w-3xl motion-safe:animate-[reveal-up_700ms_ease-out_both]">
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

          <div className="flex items-end gap-4 border-t border-white/15 pt-5 md:border-t-0 md:pb-1 md:pl-10">
            <span className="font-serif text-7xl leading-none text-copper-300 sm:text-8xl">
              08
            </span>
            <p className="pb-1 text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/70">
              Expert disciplines
              <span className="block text-white">40 specialist services</span>
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Explore our expertise
            </p>
            <h2 className="mt-2 text-2xl text-slate-900 sm:text-3xl">
              Built around what matters to you.
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Across finance, compliance, and advisory
          </p>
        </div>

        <div className="grid gap-8 border-t border-slate-200 pt-6 md:grid-cols-[minmax(15rem,0.78fr)_minmax(0,1.7fr)] md:gap-12">
          <nav
            aria-label="Service categories"
            className="grid grid-cols-2 gap-x-2 gap-y-1 sm:grid-cols-4 md:flex md:flex-col"
          >
            {serviceGroups.map((group, index) => {
              const isSelected = selectedGroupIndex === index

              return (
                <button
                  key={group.title}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedGroupIndex(index)}
                  className={`group min-w-0 border-l-2 px-3 py-3 text-left transition sm:px-4 md:py-4 ${
                    isSelected
                      ? "border-copper-400 bg-navy-50 text-navy-950"
                      : "border-transparent text-slate-600 hover:border-navy-300 hover:bg-white hover:text-navy-900"
                  }`}
                >
                  <span
                    className={`mb-1 block text-[11px] font-semibold tracking-[0.12em] ${
                      isSelected ? "text-copper-500" : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-sm font-semibold leading-snug">
                    {group.title}
                  </span>
                </button>
              )
            })}
          </nav>

          <section
            aria-live="polite"
            aria-labelledby={`service-group-${selectedGroupIndex + 1}`}
            className="min-w-0"
          >
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-500">
                  Discipline {String(selectedGroupIndex + 1).padStart(2, "0")}
                </p>
                <h2
                  id={`service-group-${selectedGroupIndex + 1}`}
                  className="mt-2 text-2xl text-navy-950 sm:text-3xl"
                >
                  {selectedGroup.title}
                </h2>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                {String(selectedGroup.items.length).padStart(2, "0")} services
              </span>
            </div>

            <ul className="grid gap-x-8 sm:grid-cols-2">
              {selectedGroup.items.map((item, index) => (
                <li
                  key={item.title}
                  className="border-b border-slate-200 py-5 motion-safe:animate-[reveal-up_500ms_ease-out_both]"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[11px] font-semibold text-copper-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[15px] font-semibold text-navy-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 pl-7 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="border-t border-navy-800 bg-navy-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-9 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
              A good place to start
            </p>
            <h2 className="mt-2 text-2xl text-white sm:text-3xl">
              Let’s make your next move a confident one.
            </h2>
          </div>
          <Link
            to="/contact#lead-form"
            className="inline-flex w-fit items-center border-b border-copper-300 py-2 text-sm font-semibold text-copper-200 transition hover:text-white"
          >
            Talk to an advisor{" "}
            <span aria-hidden="true" className="ml-3">
              &#8594;
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}
