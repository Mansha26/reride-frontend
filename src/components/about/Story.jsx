import React from 'react'
import {ShieldCheck} from 'lucide-react'
import {IndianRupee} from 'lucide-react'
import {FileCheck} from 'lucide-react'


function Story() {
  return (
    <>
     
      {/* <!-- OUR STORY --> */}
      <section className="py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p
            className="text-s font-bold tracking-[0.2em] uppercase text-secondary/40 mb-3"
          >
            Our Story
          </p>
          <h2 className="text-3xl font-bold text-secondary mb-5">
            Why We Built ReRide
          </h2>
          <p className="text-black/50 leading-relaxed mb-4 text-lg">
            Buying or selling a second-hand vehicle often involves uncertainty,
            pricing confusion, and documentation complexity. Many individuals
            struggled with hidden charges, unverified sellers, and lengthy
            ownership transfer processes.
          </p>
          <p className="text-black/50 leading-relaxed text-lg">
            That's why we built a platform focused on
            <strong className="text-secondary"
              >transparency, compliance, and user safety</strong
            >
            — combining technology with structured verification to make vehicle
            resale simple and secure.
          </p>
        </div>
        
        <div className="bg-primary rounded-3xl p-10 flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5"
            >
              <ShieldCheck className="text-white"/>
            </div>
            <div>
              <p className="font-bold text-secondary text-xl mb-1">Verified Listings</p>
              <p className="text-lg text-black/50">
                Every vehicle goes through document validation and identity
                checks.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5"
            >
              <IndianRupee className="text-white"/>
            </div>
            <div>
              <p className="font-bold text-secondary text-xl mb-1">Fair Pricing</p>
              <p className="text-lg text-black/50">
                No hidden charges. Clear, transparent pricing for everyone.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5"
            >
              <FileCheck className="text-white"/>
            </div>
            <div>
              <p className="font-bold text-secondary text-xl mb-1">RC Transfer Support</p>
              <p className="text-lg text-black/50">
                We handle documentation and ownership transfer end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- DIVIDER --> */}
      <hr className="border-black/5" />
      
    </>
  )
}

export default Story
