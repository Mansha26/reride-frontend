import React from 'react'
import { Tag } from 'lucide-react'
import {Search} from 'lucide-react'

function Process() {
  return (
   <>
   {/* <!-- HOW IT WORKS --> */}
      <section className="py-20">
        <p
          className="text-s font-bold tracking-[0.2em] uppercase text-secondary/40 mb-3 text-center"
        >
          The Process
        </p>
        <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* <!-- Sellers --> */}
          <div className="border-2 border-secondary rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shrink-0"
              >
                <Tag className=" text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-secondary">For Sellers</h3>
            </div>
            <div className="divide-y divide-black/5">
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >1</span
                >
                <p className="text-black/60 text-lg">
                  List your vehicle with details and photos
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >2</span
                >
                <p className="text-black/60 text-lg">
                  Complete document verification
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >3</span
                >
                <p className="text-black/60 text-lg">
                  Receive buyer inquiries and negotiate
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >4</span
                >
                <p className="text-black/60 text-lg">
                  Finalize pricing and paperwork
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >5</span
                >
                <p className="text-black/60 text-lg">Securely receive payment</p>
              </div>
            </div>
          </div>
          {/* <!-- Buyers --> */}
          <div className="bg-secondary rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0"
              >
               <Search className='text-white'/>
              </div>
              <h3 className="text-2xl font-bold text-white">For Buyers</h3>
            </div>
            <div className="divide-y divide-white/10">
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >1</span
                >
                <p className="text-white/60 text-lg">
                  Browse verified vehicle listings
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >2</span
                >
                <p className="text-white/60 text-lg">
                  Compare features, mileage and pricing
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >3</span
                >
                <p className="text-white/60 text-lg">
                  Schedule an inspection or test ride
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >4</span
                >
                <p className="text-white/60 text-lg">
                  Make a secure, transparent payment
                </p>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <span
                  className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0"
                  >5</span
                >
                <p className="text-white/60 text-lg">
                  Complete RC transfer with our help
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

   </>
  )
}

export default Process
