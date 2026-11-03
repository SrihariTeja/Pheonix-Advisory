import React from "react"
import Hero from "../sections/Hero"
import ServicesSection from "../sections/ServicesSection"
import Testimonials from "../sections/Testimonials"
import ContactCTA from "../sections/ContactCTA"
import assets from "../utils/assets"

export default function Home({ hero = assets.hero, teamImgs = assets.team }) {
  const team = teamImgs || []
  return (
    <div>
      <Hero hero={hero} />
      <div className="container mx-auto px-6 py-16">
        <ServicesSection />
      </div>
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
