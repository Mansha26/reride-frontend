import React from 'react'

function Mission() {
  return (
    <>
    <div>
          <p
            className="text-s font-bold tracking-[0.2em] uppercase text-secondary/40 mb-3"
          >
            What Drives Us
          </p>
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Mission & Vision
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="font-bold text-secondary mb-2 text-xl">Our Mission</h3>
              <p className="text-black/50 text-lg leading-relaxed">
                To provide a transparent and secure marketplace that eliminates
                uncertainty in second-hand vehicle transactions ensuring fair
                pricing, verified listings, and seamless ownership transfer.
              </p>
            </div>
            <div className="border-l-4 border-black/10 text-xl pl-6">
              <h3 className="font-bold text-secondary mb-2">Our Vision</h3>
              <p className="text-black/50 text-lg leading-relaxed">
                To become the most trusted pre-owned vehicle marketplace by
                setting high standards in verification, safety, and customer
                satisfaction across the industry.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Mission
