import React, { useState } from "react"

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  firmName: "",
  service: "",
  message: "",
}

export default function LeadForm({
  title = "Request a consultation",
  description = "Share your details and we’ll get back to you quickly.",
}) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: "idle", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const fullName = form.fullName.trim()
    const firmName = form.firmName.trim()
    const email = form.email.trim()
    const phone = form.phone.trim()

    if (!fullName) {
      setStatus({ type: "error", message: "Please enter your full name." })
      return
    }

    if (!firmName) {
      setStatus({
        type: "error",
        message: "Please enter your firm or company name.",
      })
      return
    }

    if (!phone) {
      setStatus({
        type: "error",
        message: "Please enter your phone number.",
      })
      return
    }

    const payload = {
      name: fullName,
      email,
      phone,
      firmName,
      service: form.service.trim(),
      message: form.message.trim(),
    }

    const fallbackMail =
      import.meta.env.VITE_MAIL_TO || "tejakammili9710@gmail.com"

    try {
      setIsSubmitting(true)
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(fallbackMail)}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...payload,
            _subject: "New consultation request",
          }),
        },
      )

      const result = await response.json()
      if (!response.ok || String(result.success).toLowerCase() !== "true") {
        throw new Error("Request failed")
      }

      setStatus({
        type: "success",
        message:
          "Thanks! Your consultation request has been sent successfully.",
      })
      setForm(initialState)
    } catch {
      setStatus({
        type: "error",
        message:
          `Something went wrong while sending your request. Please email us directly at ${fallbackMail}.`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id="lead-form"
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-700">
          Consultation request
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy-900">
          {title}
        </h2>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-canvas-soft px-4 py-3 text-slate-900 outline-none transition focus:border-navy-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="firmName"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Firm name
            </label>
            <input
              id="firmName"
              name="firmName"
              value={form.firmName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-canvas-soft px-4 py-3 text-slate-900 outline-none transition focus:border-navy-500"
              placeholder="Your company or firm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-canvas-soft px-4 py-3 text-slate-900 outline-none transition focus:border-navy-500"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-canvas-soft px-4 py-3 text-slate-900 outline-none transition focus:border-navy-500"
              placeholder="+91 98765 43210"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Service required
            </label>
            <input
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-canvas-soft px-4 py-3 text-slate-900 outline-none transition focus:border-navy-500"
              placeholder="Tax planning, Audit, Compliance, Advisory..."
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Tell us about your requirement
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-canvas-soft px-4 py-3 text-slate-900 outline-none transition focus:border-navy-500"
              placeholder="We would like support on ..."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Phone number is required.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-copper-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-copper-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Submit request"}
          </button>
        </div>

        {status.message ? (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              status.type === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {status.message}
          </div>
        ) : null}
      </form>
    </div>
  )
}
