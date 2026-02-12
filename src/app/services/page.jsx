import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesGrid from '../components/services/ServicesGrid'
import Process from '../components/Process'
import PricingTable from '../components/services/PricingTable'
import FAQsection from '../components/services/FAQsection'
import CTABanner from '../components/services/CTABanner'

function Services() {
  return (
    <div className="flex-grow flex flex-col items-center w-full">
      <ServicesHero/>
      <ServicesGrid/>
      <Process/>
      <PricingTable/>
      <FAQsection/>
      <CTABanner/>
    </div>
  )
}

export default Services