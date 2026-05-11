import React from 'react'

function AboutBanner() {
  return (
   <>
   <section
      className="bg-secondary py-20 px-6 text-white text-center relative overflow-hidden"
    >
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white opacity-[0.03] pointer-events-none"
      ></div>
      <div
        className="absolute -bottom-16 -left-12 w-64 h-64 rounded-full bg-white opacity-[0.03] pointer-events-none"
      ></div>
      <p
        className="text-lg font-bold tracking-[0.2em] uppercase text-white/50 mb-4"
      >
        About ReRide
      </p>
      <h1
        className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight mb-5"
      >
        Building Trust in Every<br />Vehicle Transaction
      </h1>
      <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-12">
        A transparent marketplace for buying and selling pre-owned two-wheelers
        — verified listings, fair pricing, and full ownership support.
      </p>
      <div
        className="flex justify-around border-t border-white/10 pt-10 mx-auto"
      >
        <div className="text-center">
          <div className="text-3xl font-extrabold">500+</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">
            Employees
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold">50K+</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">
            Deals
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold">96%</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">
            Positive Reviews
          </div>
        </div>
        <div className="text-center  px-10">
          <div className="text-3xl font-extrabold">4+</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">
            Years
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold">3+</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">
            Branches
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default AboutBanner
