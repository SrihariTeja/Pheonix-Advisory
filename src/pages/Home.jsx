import React from "react"
import Hero from "../sections/Hero"
import ProofRibbon from "../sections/ProofRibbon"
import ProcessTimeline from "../sections/ProcessTimeline"
import ServicesSection from "../sections/ServicesSection"
import Testimonials from "../sections/Testimonials"
import ContactCTA from "../sections/ContactCTA"
import assets from "../utils/assets"

export default function Home({ teamImgs = assets.team }) {
  const team = teamImgs || []
  return (
    <div>
      <Hero />
      <ProofRibbon />
      <div className="container mx-auto px-6 py-16">
        <ServicesSection />
      </div>
      <ProcessTimeline />
      <div className="bg-canvas-soft">
        <div className="container mx-auto px-6 py-16">
          <Testimonials teamImgs={team} />
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <ContactCTA />
      </div>
    </div>
  )
}
