import React from 'react'
import {Eye} from 'lucide-react'
import {Handshake } from 'lucide-react'
import {Lock } from 'lucide-react'
import {Heart } from 'lucide-react'

function Values() {
  return (
    
    <>
     <div>
          <p
            className="text-s font-bold tracking-[0.2em] uppercase text-secondary/40 mb-3"
          >
            What We Stand For
          </p>
          <h2 className="text-3xl font-bold text-secondary mb-8">Core Values</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary rounded-2xl p-5">
              <div
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3"
              >
                <Eye className="text-white"/>
              </div>
              <p className="font-bold text-secondary text-xl mb-1">Transparency</p>
              <p className="text-lg text-black/40 leading-relaxed">
                Clear pricing, no surprises.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-5">
              <div
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3"
              >
                <Handshake className="text-white" />
              </div>
              <p className="font-bold text-secondary text-xl mb-1">Integrity</p>
              <p className="text-lg text-black/40 leading-relaxed">
                Ethical, compliant processes.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-5">
              <div
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3"
              >
               <Lock className="text-white" />
              </div>
              <p className="font-bold text-secondary text-xl mb-1">Security</p>
              <p className="text-lg text-black/40 leading-relaxed">
                Safe, encrypted transactions.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-5">
              <div
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3"
              >
               <Heart className="text-white" />
              </div>
              <p className="font-bold text-secondary text-xl mb-1">
                Customer First
              </p>
              <p className="text-lg text-black/40 leading-relaxed">
                User-focused support always.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Values
